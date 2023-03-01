import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

import './styles.css';

class App extends Component {
  state = {
    listImg: [],
    status: '',
    modal: '',
  };
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.setState({
          modal: '',
          status: '',
        });
      }
    });
  }
  onSubmitSearch = value => {
    this.setState({ status: 'loader' });
    fetch(
      `https://pixabay.com/api/?q=${value}&page=${1}&key=32947262-816ad506c9db86c30ae5e3e11&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ listImg: data.hits, status: '' });
      });
  };
  showModalImg = url => {
    this.setState({ status: 'modal', modal: url });
  };

  onCloseOverlay = event => {
    if (event.target === event.currentTarget) {
      this.setState({ status: '', modal: '' });
    }
  };
  render() {
    return (
      <div className="App">
        <SearchBar onSubmitSearch={this.onSubmitSearch} />
        {this.state.status === 'loader' && <Loader visible={true} />}

        <ImageGallery
          listImg={this.state.listImg}
          showModalImg={this.showModalImg}
        />
        {this.state.status === 'modal' && (
          <Modal url={this.state.modal} closeOverlay={this.onCloseOverlay} />
        )}
      </div>
    );
  }
}

export default App;
