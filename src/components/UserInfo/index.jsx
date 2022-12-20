import React from 'react'
import { UserPicture } from "../UserPicture"
import { Container, NameText, Progress } from './styles';

export const UserInfo = ({ nome, image, percentual }) => {
  return (
    <Container>
      <UserPicture src={image} alt={nome} />
      <div>
        <NameText>{nome}</NameText>
        <Progress percentual={percentual} />
      </div>
    </Container>
  )
}
export default UserInfo;