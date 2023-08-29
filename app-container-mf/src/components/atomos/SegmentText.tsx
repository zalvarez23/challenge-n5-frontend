import React from "react";
import { Link } from "react-router-dom";
import { RiMovie2Line } from "react-icons/ri";

import styled from "styled-components";
import { CustomColors } from "../../constants/Colors";

type SegmentTextProps = {
  title?: string;
  selected?: boolean;
  link?: string;
};

const StyledBox = styled.div<SegmentTextProps>`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  height: 30px;
  padding-right: 10px;
  cursor: pointer;

  .segment__title {
    font-family: Montserrat-Medium;
    font-size: 13px;
    color: ${CustomColors["gray-1"]};
  }

  ${(props) =>
    props.selected &&
    `
      border-bottom: 3px solid rgb(66, 75, 90);
    `}
`;

const SegmentText: React.FC<SegmentTextProps> = ({
  title,
  selected,
  link = "/",
}) => {
  return (
    <Link to={link}>
      <StyledBox selected={selected}>
        <RiMovie2Line size={13} />
        <p className="segment__title">{title}</p>
      </StyledBox>
    </Link>
  );
};

SegmentText.defaultProps = {
  title: "Show All",
  selected: true,
  link: "/",
};
export default SegmentText;
