import { segmentsValues } from "../../constants/values";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ISegment } from "types/segment.interface";

const useMoviesContainer = () => {
  const location = useLocation();
  const path = location.pathname;
  const [segments, setSegments] = useState<ISegment[]>(segmentsValues);

  useEffect(() => {
    const newSegments = segments.map((segment) => {
      segment.isSelected = segment.link === path;
      return segment;
    });
    setSegments(newSegments);
  }, [path]);

  return {
    segments,
  };
};
export default useMoviesContainer;
