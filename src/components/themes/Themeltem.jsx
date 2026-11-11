import React from 'react'

const Themeltem = ({hue, img, changeColor }) => {
  return (
    <img src={img}
     alt=''
     className='theme-img'
     onClick={() => {
        changeColor(hue);
    }}
    />

  );
};

export default Themeltem