import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loader = ({ visible }) => {
  return (
    <div>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#3f51b5"
        ariaLabel="three-dots-loading"
        wrapperStyle={{
          justifyContent: 'center',
        }}
        wrapperClassName=""
        visible={visible}
      />
    </div>
  );
};

export default Loader;
