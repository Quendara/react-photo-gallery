
import React from 'react';
import Gallery from 'react-photo-gallery'


const photos = [
  {
    src: 'http://example.com/example/img1.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'http://example.com/example/img2.jpg',
    width: 1,
    height: 1
  }
];



const PhotoGallery = () => {

  return (
    <Gallery photos={photos} />
  )
}

export default PhotoGallery



