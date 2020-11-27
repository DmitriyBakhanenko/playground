import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = { term: '' };

  onSubmitForm = event => {
    event.preventDefault();

    this.props.onTermSubmit(this.state.term);
    this.setState({ term: '' });
  };

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onSubmitForm}>
          <div className='ui icon input' style={{ width: '100%' }}>
            <input
              type='text'
              placeholder='Search...'
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
            <i className='search icon'></i>
          </div>
        </form>
      </div>
    );
  }
}
