import React from 'react';

import PostsList from './components/posts-list/posts-list.component';
import PostDetail from './components/post-detail/post-detail.component';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobileScreen: this.isMobileScreen(),
      sidebarOpened: this.isMobileScreen()
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.setIsMobileScreen);
  }

  componentWillMount() {
    window.removeEventListener('resize', this.setIsMobileScreen);
  }

  isMobileScreen = () => {
    return window.innerWidth < 600;
  }

  handleMenuClose = () => {
    const { isMobileScreen, sidebarOpened } = this.state;
    console.log(isMobileScreen, sidebarOpened)
    if (isMobileScreen && sidebarOpened) {
      this.setState(prevState => ({
        sidebarOpened: false
      }));
    }
  }

  handleMenuOpen = () => {
    this.setState({
      sidebarOpened: true
    })
  }

  setIsMobileScreen = () => {
    this.setState(prevState => {
      let menuOpened;
      if (this.isMobileScreen()) {
        if (!prevState.isMobileScreen) {
          menuOpened = false;
        } else {
          menuOpened = prevState.menuOpened;
        }
      } else {
        menuOpened = true;
      }

      return {
        isMobileScreen: this.isMobileScreen(),
        menuOpened
      }
    })
  }

  render() {
    const { sidebarOpened, isMobileScreen } = this.state;
    return (
      <div className="App">
        <PostsList sidebarOpened={sidebarOpened} isMobileScreen={isMobileScreen} handleMenuClose={this.handleMenuClose} />
        <PostDetail sidebarOpened={sidebarOpened} isMobileScreen={isMobileScreen} handleMenuOpen={this.handleMenuOpen} />
      </div>
    );
  }
}

export default App;
