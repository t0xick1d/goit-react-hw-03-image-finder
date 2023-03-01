import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';

class SearchBar extends Component {
  state = {
    inputValue: '',
  };
  setInputValue = event => {
    // event.preventDefault();
    this.setState({ inputValue: event.currentTarget.value });
  };
  onSubmitSearchForm = e => {
    e.preventDefault();
    if (this.state.inputValue.trim() === '') {
      return;
    }
    this.props.onSubmitSearch(this.state.inputValue.toLowerCase());
    this.setState({ inputValue: '' });
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm">
          <button
            type="submit"
            className="SearchForm-button"
            onClick={this.onSubmitSearchForm}
          >
            <BsSearch className="svgIconButton" />
            {/* <span className="SearchForm-button-labell">Search</span> */}
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.setInputValue}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
