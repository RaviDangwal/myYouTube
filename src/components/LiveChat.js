import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/store/chatSLice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(() => {
      // API Polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + " 🚀",
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className=" w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((cm, i) => (
            <ChatMessage key={i} name={cm.name} message={cm.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full ml-2 p-4 border bg-slate-50 border-gray-400 rounded-b-lg"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(liveMessage);
          dispatch(
            addMessage({
              name: "Ravi",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-3/4 bg-gray-200 p-2 rounded-full  "
          type="text "
          placeholder="chat..."
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="w-20 px-2 mx-2 bg-gray-200 p-2  rounded-full">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
