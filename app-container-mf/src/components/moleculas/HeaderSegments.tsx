import React from "react";
import { SegmentText } from "../atomos";
import { ISegment } from "types/segment.interface";

type SegmentProps = {
  segments: ISegment[];
};

const HeaderSegments: React.FC<SegmentProps> = ({ segments }) => {
  return (
    <>
      {segments.map((segment, i) => (
        <SegmentText
          title={segment.title}
          selected={segment.isSelected}
          link={segment.link}
          key={i}
        />
      ))}
    </>
  );
};

export default HeaderSegments;
