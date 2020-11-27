import React from 'react';
import './ImageList.css';

export default class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spans: 0
    };

    this.imgRef = React.createRef();
  }

  componentDidMount() {
    this.imgRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imgRef.current.clientHeight;

    const spans = Math.ceil(height / 20);

    this.setState({ spans });
  };

  render() {
    const { id, alt_description, urls } = this.props;
    return (
      <div
        key={id}
        className='item-image'
        style={{ gridRowEnd: `span ${this.state.spans}`, display: 'flex' }}
      >
        <img ref={this.imgRef} alt={alt_description} src={urls.small} />
      </div>
    );
  }
}
