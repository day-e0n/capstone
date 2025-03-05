import React from "react";

const Map = () => {
    return(
        <div className="w-full max-w-4xl p-8 bg-white rounded-xl shadow-lg border border-gray-200">
            <a className = "text-center text-xl font-semibold text-gray-700">
                지도에서 검색하기 !
            </a>
            <img src="/images/naver_map_ex.png" alt="네이버 지도 예제" className="w-128 h-128 object-cover" />
        </div>
    );
};

export default Map;