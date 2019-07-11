import React from 'react';
import { connect } from 'react-redux';

import './post-detail.styles.scss';

const PostDetail = ({ title, author_fullname, thumbnail }) => (
  <div className='post-detail'>
    <h3>{author_fullname}</h3>
    <img src={thumbnail} alt={title}/>
    <h4>{title}</h4>
  </div>
);

const mapStateToProps = state => {
  const { selectedPost } = state.post;
  return { ...selectedPost };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);