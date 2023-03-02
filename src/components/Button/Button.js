import React from 'react';

const Button = ({ onCLickButton }) => {
  return (
    <div className="Button" onClick={onCLickButton}>
      Load more
    </div>
  );
};

export default Button;
