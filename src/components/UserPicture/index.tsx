import React from 'react'
import { UserPicturePhoto } from './style';
import { IUserPicture } from './types';

export const UserPicture = ({ local = "card", src, alt }: IUserPicture) => {
  return <UserPicturePhoto local={local} src={src} alt={alt} />;
};

export default UserPicture;
