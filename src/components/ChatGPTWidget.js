import React from "react";

const ChatGPTWidget = () => {
  return (
    <div className="w-full max-w-4xl p-8 bg-white rounded-xl shadow-lg border border-gray-200">
      <p className="text-center text-xl font-semibold text-gray-700">
        💬 이런 상황엔 어떤 꽃을 선물하는 게 좋을까요?<br />
        인공지능을 활용해서 질문하고 꽃을 찾아보세요!
      </p>
      <div className="mt-6 bg-gray-50 p-5 rounded-lg shadow-inner border">
        <input 
          className="w-full p-3 bg-transparent border-b-2 outline-none text-gray-600"
          placeholder="ChatGPT에게 메시지 쓰기..." 
        />
      </div>
    </div>
  );
};

export default ChatGPTWidget;