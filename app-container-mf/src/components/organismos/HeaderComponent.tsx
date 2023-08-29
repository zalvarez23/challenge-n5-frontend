import React from "react";
import { HeaderSegments } from "../moleculas";
import styled from "styled-components";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CustomColors } from "../../constants/Colors";
import { ISegment } from "types/segment.interface";

type HeaderComponentProps = {
  segments?: ISegment[];
  titleName?: string;
};

const StyledHeaderComponent = styled.div<HeaderComponentProps>`
  .header__segments {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .header__divider {
    background-color: rgba(0, 0, 0, 0.12);
    height: 1px;
    position: relative;
    top: -2px;
  }
  .header__titles {
    display: flex;
    align-items: center;
    gap: 1rem;

    .header__titles__text {
      font-family: "Montserrat-Bold";
      fontweight: 600;
      color: ${CustomColors.black};
    }
  }
`;

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  segments = [],
  titleName,
}) => {
  return (
    <StyledHeaderComponent>
      <div className="header__segments">
        <HeaderSegments segments={segments} />
      </div>
      <div className="header__divider"></div>
      <div className="header__titles">
        <FaLongArrowAltRight />
        <p className="header__titles__text">{titleName}</p>
      </div>
    </StyledHeaderComponent>
  );
};

HeaderComponent.defaultProps = {
  segments: [{ title: "Movie", isSelected: true, link: "" }],
  titleName: "Lista de Permisos",
};
export default HeaderComponent;
