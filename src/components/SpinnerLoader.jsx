import React from 'react';
import { Loader } from 'react-loader-spinner';

const SpinnerLoader = () => {
  return (
    <Loader type="Puff" color="white" height={100} width={100} timeout={3000} />
  );
};

export default SpinnerLoader;
