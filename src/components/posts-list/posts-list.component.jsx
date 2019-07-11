import React from 'react';
import { connect } from 'react-redux';

import { getPosts, dismissAll } from '../../redux/post/post.actions';

import PostItem from '../post-item/post-item.component';
import Spinner from '../spinner/spinner.component';

import './posts-list.styles.scss';

class PostsList extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  renderContent = () => {
    const { posts, searching, errorSearching, getPosts } = this.props;

    if (searching) {
      return <Spinner color='#fff' />;
    }

    if (errorSearching) {
      return (
        <div>
          <p>There was an error retrieving the posts.</p>
          <button onClick={() => getPosts()} >Try again</button>
        </div>
      );
    }

    return (
      <div className='list-container'>
        {
          posts.map(post => (
            <PostItem key={post.id} {...post} />
          ))
        }
      </div>
    );
  }
  
  render() {
    const { sidebarOpened, isMobileScreen } = this.props;
    return (
      <div className={`posts-list ${sidebarOpened ? 'show': 'hide'}`}>
        <div className='head'>
          <h2 className='title'>Reddit Posts</h2>
          { isMobileScreen &&  <h2 className='close-button' onClick={this.props.handleMenuClose}>X</h2>}
        </div>
        {this.renderContent()}
        <h2 className='footer' onClick={() => this.props.dismissAll()}>DISMISS ALL</h2>
      </div>
    )
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

const mapDispatchToProps = { getPosts, dismissAll };

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);