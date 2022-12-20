import React from 'react'
import { UserPicturePhoto } from './style';

export const UserPicture = ({ local = "card", src, alt }) => {
  return (
    <UserPicturePhoto local={local} src={src} alt={alt} />
  )
}

export default UserPicture;
