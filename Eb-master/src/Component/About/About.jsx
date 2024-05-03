import React from "react";

const About = () => {
  return (
    <>
      <h1 className='text-center font-bold text-4xl m-12 '>About Us</h1>

      <div className='flex flex-col items-center justify-center gap-10  lg:flex lg:flex-row lg:flex-wrap '>
        <div className='flex gap-10 w-9/12 lg: w-11/12 '>
          <div>
            <img
              className='w-6/6 lg:w-10/12'
              src='https://img.freepik.com/free-photo/coconut-palm-tree_74190-4526.jpg?t=st=1713412307~exp=1713415907~hmac=a0c155902a43730352dea0e533f0e44aabf000398bc80ca7d9a7da5b01ce6853&w=2000'
            />
          </div>
          <div className='flex flex-col justify-center items-center w-6/6  '>
            <h3 className=' text-2xl mb-2  font-bold text-[#99B559] '>
              Who we are?
            </h3>
            <p className=' text-lg  text-[#b0b1af]'>
              At EyarkaiBanangal, we are more than just a product-selling
              website – we are a passionate team dedicated to bringing you the
              essence of nature in every sip and bite. Founded with a vision to
              redefine your connection with food, we are proud to introduce you
              to a world of organic goodness. Our journey began with a simple
              belief: that the best things in life come from the earth. We are
              not just purveyors of products; we are stewards of nature,
              cultivating a bond between you and the land.
            </p>
          </div>
        </div>
        <div className='flex gap-10  w-9/12'>
          <div className='flex flex-col justify-center items-center'>
            <h3 className=' text-2xl mb-2  font-bold text-[#99B559] '>
              Our Products
            </h3>
            <p className='text-lg text-[#b0b1af]'>
              At EyarkaiBanangal, we are more than just a product-selling
              website – we are a passionate team dedicated to bringing you the
              essence of nature in every sip and bite. Founded with a vision to
              redefine your connection with food, we are proud to introduce you
              to a world of organic goodness. Our journey began with a simple
              belief: that the best things in life come from the earth. We are
              not just purveyors of products; we are stewards of nature,
              cultivating a bond between you and the land.
            </p>
          </div>
          <div>
            <img src='https://img.freepik.com/free-photo/coconut-fruit_74190-2755.jpg?t=st=1713412369~exp=1713415969~hmac=cbc5b10f209bba97f2048e03482dc252267c7767ea77c752715004b1ae617f11&w=2000' />
          </div>
        </div>
        <div className='flex gap-10  w-9/12 mb-10'>
          <div>
            {" "}
            <img src='https://img.freepik.com/free-photo/blurred-shot-terrace-plantation_181624-19548.jpg?t=st=1713412405~exp=1713416005~hmac=75e677a6411716ec4754b61da61258cb228e4460f93a92067d16df3a54f283e2&w=2000' />
          </div>
          <div className='flex flex-col justify-center items-center '>
            <h3 className='text-2xl mb-2 font-bold text-[#99B559]  '>
              Why Organic
            </h3>
            <p className='text-lg  text-[#b0b1af]'>
              At EyarkaiBanangal, we are more than just a product-selling
              website – we are a passionate team dedicated to bringing you the
              essence of nature in every sip and bite. Founded with a vision to
              redefine your connection with food, we are proud to introduce you
              to a world of organic goodness. Our journey began with a simple
              belief: that the best things in life come from the earth. We are
              not just purveyors of products; we are stewards of nature,
              cultivating a bond between you and the land.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
