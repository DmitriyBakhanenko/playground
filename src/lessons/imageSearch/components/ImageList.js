import React from 'react';

import ImageCard from './ImageCard';
import './ImageList.css';

export default function ImageList({ images }) {
  return images.map(({ id, alt_description, urls }) => (
    <ImageCard key={id} alt_description={alt_description} urls={urls} />
  ));
}
