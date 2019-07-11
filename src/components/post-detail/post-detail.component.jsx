import React from 'react';
import { connect } from 'react-redux';

import menuImg from '../../assets/img/menu.png';

import './post-detail.styles.scss';

const PostDetail = ({ title, author_fullname, thumbnail, sidebarOpened, isMobileScreen, handleMenuOpen }) => (
  <div className='post-detail'>
    {isMobileScreen && !sidebarOpened && (
      <div className='head'>
        <img src={menuImg} alt='Open sidebar' height='30px' onClick={handleMenuOpen}/>
      </div>
    )}
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