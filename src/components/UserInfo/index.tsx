import React from "react";
import { UserPicture } from "../UserPicture";
import { Container, NameText, Progress } from "./styles";
import { IUserInfo } from "./types";

export const UserInfo = ({ nome, image, percentual }: IUserInfo) => {
  return (
    <Container>
      <UserPicture src={image} alt={nome} />
      <div>
        <NameText>{nome}</NameText>
        <Progress percentual={percentual} />
      </div>
    </Container>
  );
};
export default UserInfo;
