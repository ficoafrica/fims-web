import React, { useState, useRef } from 'react'

const OTPInput = ({length = 6}) => {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const { value } = e.target;

    // Only allow single digit input
    if (value.match(/^\d$/)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input
      if (index < length - 1) {
        inputs.current[index + 1].focus();
      }
    }

    // Move focus to previous input on backspace
    if (value === '' && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '') {
      // Move focus to previous input on backspace if current input is empty
      if (index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };

  return (
    <div className='mt-4'>
    {otp.map((_, index)=> {
      return (
        <input
          className='mr-2 border border-gray-300 h-10 w-10 rounded-md text-sm py-1 px-3 focus:outline-[#43A047]'
          key={index}
          type='text'
          maxLength="1"
          value={otp[length]}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el)=> (inputs.current[index] = el)}
        />
      );
    })}
    <p className='mt-4 text-sm py-1'>Didn't get a code? <span className='ml-2 text-[#43A047] border-b-2 border-[#43A047]'>Resend Code</span></p>
    <button 
      className='mt-6 w-3/4 bg-[#43A047] py-2 text-sm text-white rounded-tr-md rounded-bl-md hover:bg-[#81ca84] hover:tracking-widest' 
      onClick={()=> console.log(otp.join("").toString())}
      >
      Verify
      </button>
    </div>
  )
}

export default OTPInput