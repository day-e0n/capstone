import React, { useState } from "react";

const FlowerDictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // 🌸 임시 데이터 (나중에 DB 연동 시 이 부분을 변경하면 됨)
  const flowerData = [
    { name: "장미", meaning: "사랑, 열정" },
    { name: "튤립", meaning: "사랑의 고백" },
    { name: "해바라기", meaning: "희망, 존경" },
    { name: "라일락", meaning: "순수한 사랑" },
    { name: "수선화", meaning: "자기애" },
  ];

  // 🌸 검색 기능
  const filteredFlowers = flowerData.filter((flower) =>
    flower.name.includes(searchTerm)
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">🌺 꽃말 사전</h1>
      <p className="text-gray-600">꽃의 이름을 검색하고 꽃말을 알아보세요!</p>

      {/* 🔎 검색창 */}
      <input
        type="text"
        placeholder="꽃 이름 검색..."
        className="w-full max-w-md mt-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* 🌸 꽃 리스트 */}
      <div className="mt-6 w-full max-w-md bg-white shadow-lg rounded-lg p-4">
        {filteredFlowers.length > 0 ? (
          filteredFlowers.map((flower, index) => (
            <div key={index} className="flex justify-between border-b py-3">
              <span className="text-lg font-semibold text-gray-800">{flower.name}</span>
              <span className="text-gray-600">{flower.meaning}</span>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center py-4">검색된 꽃이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default FlowerDictionary;