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
    page: 1,
    inputValue: '',
  };
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.setState({
          modal: '',
          status: 'showImg',
        });
      }
    });
  }
  onSubmitSearch = value => {
    this.setState({ status: 'loader', inputValue: value });
    fetch(
      `https://pixabay.com/api/?q=${value}&page=${1}&key=32947262-816ad506c9db86c30ae5e3e11&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(res => res.json())
      .then(data => {
        this.setState(() => {
          if (data.total <= 12) {
            return { listImg: data.hits, status: 'lastPage' };
          }
          if (data.total > 12) {
            return { listImg: data.hits, status: 'showImg' };
          }
        });
      });
  };
  showModalImg = url => {
    this.setState({ status: 'modal', modal: url });
  };

  onCloseOverlay = event => {
    if (event.target === event.currentTarget) {
      this.setState({ status: 'showImg', modal: '' });
    }
  };
  onNextPage = () => {
    fetch(
      `https://pixabay.com/api/?q=${this.state.inputValue}&page=${
        this.state.page + 1
      }&key=32947262-816ad506c9db86c30ae5e3e11&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(res => res.json())
      .then(data => {
        this.setState(prevState => {
          if (data.total <= 12) {
            return {
              listImg: [...prevState.listImg, ...data.hits],
              status: 'lastPage',
            };
          }
          if (data.total > 12) {
            return {
              listImg: [...prevState.listImg, ...data.hits],
              status: 'showImg',
              page: this.state.page + 1,
            };
          }
        });
      });
  };
  render() {
    return (
      <div className="App">
        <SearchBar onSubmitSearch={this.onSubmitSearch} />
        {this.state.status === 'loader' && <Loader />}
        {this.state.status === 'showImg' ||
        this.state.status === 'lastPage' ||
        this.state.status === 'modal' ? (
          <ImageGallery
            listImg={this.state.listImg}
            showModalImg={this.showModalImg}
            status={this.state.status}
            onClickNextPage={this.onNextPage}
          />
        ) : (
          ''
        )}

        {this.state.status === 'modal' && (
          <Modal url={this.state.modal} closeOverlay={this.onCloseOverlay} />
        )}
      </div>
    );
  }
}

export default App;
