import React from 'react';
import ImageDetail from './image_details';

const IMAGES = [
  { title: 'Pen', link: 'https://dummyimage.com/600x400' },
  { title: 'Eraser', link: 'https://dummyimage.com/600x400' },
  { title: 'Paper', link: 'https://dummyimage.com/600x400' }
];

const ImageList = () => {
  const RenderedImages = IMAGES.map(image => <ImageDetail key={image.title} image={image} />);

  return (
    <ul className="media-list list-group">
      {RenderedImages}
    </ul>
  );
};

export default ImageList;
