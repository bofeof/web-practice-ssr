import React from 'react';

import testImg from '../../images/image-example.jpg';
import './ImgComponent.css';

export default function ImgComponent() {
  return (
    <div className="img-block">
      <p>Image test</p>
      <img className="img-block__img" alt="test img" src={testImg}></img>
    </div>
  );
}
