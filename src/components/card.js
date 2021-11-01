import React from "react";
import illustration_hero from "../assets/illustration-hero.svg";
import music_icon from "../assets/icon-music.svg";

function Card() {
  var amount = 59.99;
  return (
    <React.Fragment>
      <div className='flex justify-center align-items-center'>
        <div className='absolute top-24 max-w-sm m-2 md:m-0 pb-6 w-auto h-auto overflow-hidden bg-white rounded-2xl shadow-3xl_purple '>
          <img
            width={100}
            height={100}
            className='h-auto w-auto'
            src={illustration_hero}
            alt='Girl listening to music'
          />
          <div className='mt-10 text-2xl font-red_hat font-extrabold text-center text-blue-dark'>
            Order Summary
          </div>
          <div className='mt-4 ml-10 mr-10 text-sm text-opacity-90 text-center text-custom_gray-light font-medium font-red_hat'>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </div>
          <div className='flex flex-wrap justify-center align-items-center mt-4'>
            <div className='flex p-4 w-80 h-auto rounded-lg bg-gray-100'>
              <div>
                <img
                  width={30}
                  height={30}
                  className='h-10 w-10 mt-1 ml-2'
                  src={music_icon}
                  alt='music icon'
                />
              </div>
              <div className='ml-5 font-red_hat font-semibold text-blue-dark'>
                Annual Plan
                <div className='mt-1 text-sm text-opacity-90 text-custom_gray-light font-medium font-red_hat'>
                  ${amount}/year
                </div>
              </div>
              <div className='underline ml-auto mt-4 text-xs font-red_hat font-semibold text-link_blue-light select-none hover:text-custom_purple-active_purple'>
                <a href='#'>Change</a>
              </div>
            </div>
            <div className='mt-7'>
              <button className='p-3 w-80 bg-tw_blue-700 text-sm font-red_hat font-bold rounded-lg text-white shadow-3xl_purple select-none hover:bg-custom_purple-bg_active_purple'>
                Proceed to Payment
              </button>
            </div>
            <div className='mt-6'>
              <button className='text-sm font-red_hat rounded-lg text-gray-500 font-extrabold select-none hover:text-blue-dark'>
                Cancel Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
