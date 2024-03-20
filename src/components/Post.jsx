import React from 'react';
import '../styles/Post.css';
import { Avatar } from '@mui/material';
import {
  BookmarkBorder,
  ChatBubbleOutline,
  FavoriteBorder,
  MoreHoriz,
  Telegram,
} from '@mui/icons-material';

function Post({ user, postImage, likes, timestamp }) {
  return (
    <div className="post">
      <div className="header">
        <div className="headerAuth">
          <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
          {user} •<span>{timestamp}</span>
        </div>
        <MoreHoriz />
      </div>
      <div className="image">
        <img src={postImage} alt="" />
      </div>
      <div className="footer">
        <div className="footerIcons">
          <div className="iconsMain">
            <FavoriteBorder className="postIcons" />
            <ChatBubbleOutline className="postIcons" />
            <Telegram className="postIcons" />
          </div>
          <div className="iconSave">
            <BookmarkBorder className="postIcons" />
          </div>
        </div>
        Liked By {likes} people
      </div>
    </div>
  );
}

export default Post;
