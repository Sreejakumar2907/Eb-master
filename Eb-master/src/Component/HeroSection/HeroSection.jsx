import React from "react";

const HeroSection = () => {
  return (
    <div className='lg:h-swh md:h-2/3  -mt-48 '>
      <img
        className='h-300 md:h-500 lg:h-700px w-svw '
        src='https://images.unsplash.com/photo-1594757666171-a65ac3366807?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <div className='absolute top-80 left-0 flex flex-col justify-center items-center w-7/12  '>
        <h1 className='text-5xl text-center font-bold font-sans lg:-mt-24 lg:text-3xl'>
          Welcome to the world of organic{" "}
        </h1>
        <h3 className=' text-5xl font-bold m-3 text-[#1F4E3D] lg:text-3xl'>
          coconut refreshment
        </h3>
        <p className=' text-center font-body text-[#737272] w-6/12 m-2 lg:w-4/6'>
          We're dedicated to bringing you the purest essence of nature in every
          item we offer. The best things in life come from the earth.
        </p>
        <button className='bg-green-300 w-36 p-1 rounded m-2 text-white'>
          Contact us
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
