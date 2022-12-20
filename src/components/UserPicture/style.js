import styled, { css } from "styled-components";

export const UserPicturePhoto = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 22px;
  border: 3px solid #ffffff;

  ${({ local }) =>
    local !== "menu" &&
    css`
      width: 32px;
      height: 32px;
      border-radius: 22px;
      border: 2px solid #ffffff;
      margin-right: 10px;
    `}
`;
