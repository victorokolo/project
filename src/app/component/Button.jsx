import React from 'react'


const Button = ({ text, onClick }) => {
    return (
      <button className='px-6 py-3 rounded-full bg-white text-black mb-5'
        type="button"

        onClick={onClick}
      >
        {text}
      </button>
    );
  };
  
  export default Button;