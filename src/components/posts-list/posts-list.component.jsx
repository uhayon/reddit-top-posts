import React from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../../redux/post/post.actions';

import './posts-list.styles.scss';

class PostsList extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }
  
  render() {
    return <div>Hola</div>
  }
};

const mapStateToProps = state => {
  const { posts, searching, errorSearching } = state.post;
  return {
    posts,
    searching,
    errorSearching
  };
}

const mapDispatchToProps = { getPosts };

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);