import React from 'react';
import { useSelector } from 'react-redux';

import { IconButton } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

import {
  ProfileAvatarContainer,
  ProfileAvatarTitle,
  UserAvatarAndUploadButton,
  UserAvatar,
  FileInput
} from './profile-avatar.styles';

const ProfileAvatar = () => {
  const { currentUser } = useSelector(state => state.user);

  const handleUploadClick = async event => {
    const file = event.target.files[0];
    console.log(file);
    // uploadAvatarStart(id, file);
  };

  return (
    <ProfileAvatarContainer>
      <ProfileAvatarTitle>Avatar</ProfileAvatarTitle>
      <UserAvatarAndUploadButton>
        <UserAvatar
          style={{ backgroundImage: `url(${currentUser.avatarUrl})` }}
        ></UserAvatar>
        <FileInput
          id='upload-button'
          name='avatarUrl'
          type='file'
          accept='image/*'
          onChange={handleUploadClick}
        />
        <label htmlFor='upload-button'>
          <IconButton component='span' color='inherit'>
            <PhotoCamera />
          </IconButton>
        </label>
      </UserAvatarAndUploadButton>
    </ProfileAvatarContainer>
  );
};

export default ProfileAvatar;
