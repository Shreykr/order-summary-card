import React from "react";
import illustration_hero from "../../assets/illustration-hero.svg";
import music_icon from "../../assets/icon-music.svg";
import "./Card.css";

function Card() {
  var amount = 59.99;
  return (
    <React.Fragment>
      <div className="w-96 max-w-sm pb-6 m-auto bg-white bg-clip-padding rounded-2xl shadow-3xl_purple ">
        <img
          width={"450"}
          height={"220"}
          className="block rounded-t-2xl"
          src={illustration_hero}
          alt="Girl listening to music"
        />
        <h1 className="mt-10 text-center font-black font-red_hat text-2xl text-blue-dark">
          Order Summary
        </h1>
        <p className="mt-4 ml-10 mr-10 text-sm text-opacity-90 text-center text-custom_gray-light font-medium font-red_hat">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="flex flex-col justify-center items-center mt-6">
          <div className="flex p-4 w-80 h-auto rounded-lg bg-gray-100">
            <img
              width={"40"}
              height={"40"}
              className="h-10 w-10 mt-1 ml-2"
              src={music_icon}
              loading={"lazy"}
              alt="music icon"
            />
            <div className="ml-5">
              <h2 className="font-red_hat font-semibold text-blue-dark">
                Annual Plan
              </h2>
              <p className="mt-1 text-sm text-opacity-90 text-custom_gray-light font-medium font-red_hat">
                ${amount}/year
              </p>
            </div>
            <button className="ml-auto mt-2 underline text-xs font-red_hat font-semibold text-link_blue-light select-none hover:text-custom_purple-active_purple">
              Change
            </button>
          </div>
          <button className="mt-7 p-3 w-80 max-w-xs bg-tw_blue-700 text-sm font-red_hat font-bold rounded-lg text-white shadow-3xl_purple select-none hover:bg-custom_purple-bg_active_purple">
            Proceed to Payment
          </button>
          <button className="mt-6 text-sm font-red_hat rounded-lg text-gray-500 font-extrabold select-none hover:text-blue-dark">
            Cancel Order
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
