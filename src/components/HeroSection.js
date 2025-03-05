import React from "react";
import Snowfall from "./effects/Snowfall";
import CherryBlossom from "./effects/CherryBlossom";
import GreenLeaves from "./effects/GreenLeaves";
import AutumnLeaves from "./effects/AutumnLeaves";

import { Link } from "react-router-dom";

const HeroSection = () => {
  const today = new Date();
  const month = (today.getMonth() + 1).toString().padStart(2, "0"); // 1~9월 → "01" ~ "09" 변환
  const day = today.getDate().toString().padStart(2, "0"); // 1~9일 → "01" ~ "09" 변환
  const dateNumber = parseInt(`${month}${day}`); // MMDD 형식 변환 (예: "0305")

  console.log("현재 월:", month); // 디버깅용 로그
  console.log("현재 일:", day); // 디버깅용 로그
  console.log("dateNumber 값:", dateNumber); // dateNumber 값 확인

  function getBackgroundColor() {
    if (dateNumber >= 301 && dateNumber <= 430) {
      return "bg-gradient-to-r from-pink-200 to-yellow-200"; // 봄
    } else if (dateNumber >= 501 && dateNumber <= 915) {
      return "bg-gradient-to-r from-green-200 to-blue-200"; // 여름
    } else if (dateNumber >= 916 && dateNumber <= 1114) {
      return "bg-gradient-to-r from-red-400 to-orange-300"; // 가을
    } else {
      return "bg-gradient-to-r from-blue-300 to-gray-300"; // 겨울
    }
  }

  return (
    <section className={`w-full text-center py-24 text-white ${getBackgroundColor()}`}>
      <h1 className="text-5xl font-extrabold mb-4 text-black">
        🌷 꽃에 대한 모든 것을 검색하세요!
      </h1>
      <p className="text-lg leading-relaxed text-black">
        꽃말 검색 · 꽃집 검색 · 꽃 추천<br />
        상황에 딱 맞는 꽃을 찾아보세요!
      </p>
      {dateNumber >= 301 && dateNumber <= 430 ? <CherryBlossom /> : null}
      {dateNumber >= 501 && dateNumber <= 915 ? <GreenLeaves /> : null}
      {dateNumber >= 916 && dateNumber <= 1114 ? <AutumnLeaves /> : null}
      {dateNumber >= 1115 || dateNumber <= 227 ? <Snowfall /> : null}

      <div className="flex justify-center gap-6 mt-10">
        <Link to="/dictionary" className="px-8 py-3 bg-white text-purple-600 rounded-lg shadow hover:bg-gray-100 transition">
          꽃말 사전 📖
        </Link>
        <button className="px-8 py-3 bg-white text-purple-600 rounded-lg shadow hover:bg-gray-100 transition">
          꽃집 주문 🛒
        </button>
        <button className="px-8 py-3 bg-white text-purple-600 rounded-lg shadow hover:bg-gray-100 transition">
          꽃집 지도 🗺️
        </button>
      </div>
    </section>
  );
};

export default HeroSection;