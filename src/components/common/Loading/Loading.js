import React from 'react';
import loadingGif from './loading.gif';
import './Loading.css';

function Loading(props) {
  return (
    <div className='loading'>
      <img alt='loading' src={loadingGif}></img>
    </div>
  );
}

Loading.propTypes = {};

export default Loading;
