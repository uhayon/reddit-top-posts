import React from 'react';
import { getParsedCreationDate } from './post-item.utils';

import './post-item.styles.scss'

const PostItem = ({ created, author_fullname, thumbnail, num_comments, unread, title }) => (
  <div className={`post-item ${unread ? 'unread' : ''}`}>
    <div className='head'>
      <div className='unread-mark' />
      <span className='author'>{author_fullname}</span>
      <span className='created'>{getParsedCreationDate(created)}</span>
    </div>
    <div className='body'>
      {thumbnail && <img src={thumbnail} alt={title}/>}
      <span>{title}</span>
    </div>
    <div className='footer'>
      <button>Dismiss</button>
      <span>{`${num_comments} comments`}</span>
    </div>
  </div>
);

export default PostItem;