import React from "react";
import { Helmet } from "react-helmet";
import button from "./assets/button.svg";
import "./chatbot.css";

function Chat() {
  return (
    <div id="grade">
      <Helmet>
        <script src="./chat.js" type="text/javascript" />
      </Helmet>
      <div class="container">
        <div class="chatbox">
          <div class="chatbox__support bg-opacity-60 backdrop-blur-sm backdrop-filter bg-neutral-900 w-72 h-[350px] rounded-lg mb-3">
            <div class="chatbox__header bg-[#f0593b] text-left font-medium">
              <div class="chatbox__image--header flex flex-row content-center justify-center p-2">
                <img
                  src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png"
                  alt="person"
                  className="w-20"
                />
              </div>
              <div class="chatbox__content--header">
                <p class="chatbox__description--header text-white text-sm">
                  Hi. My name is Ordinance. How can I help you?
                </p>
              </div>
            </div>
            <div class="chatbox__messages py-5 font-semibold">
              <div></div>
            </div>
            <div class="chatbox__footer">
              <input type="text" placeholder="Write a message..." />
              <button class="chatbox__send--footer send__button">Send</button>
            </div>
          </div>
          <div class="chatbox__button">
            <button>
              <img src={button} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
