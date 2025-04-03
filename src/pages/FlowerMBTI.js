import React, { useState } from "react";

// 🌸 MBTI에 따른 꽃 매칭 데이터
const flowerResults = {
  ENFP: { name: "해바라기 🌻", meaning: "희망, 존경, 충성", description: "늘 주변을 밝히는 ENFP! 활발하고 따뜻한 성격과 희망을 잃지 않는 해바라기가 잘 어울려요." },
  ENTP: { name: "장미 🌹", meaning: "열정, 도전, 사랑", description: "도전을 즐기는 ENTP! 뜨거운 열정을 가진 장미처럼 매력적인 카리스마가 돋보이는 타입이에요." },
  ESFP: { name: "튤립 🌷", meaning: "사랑의 고백, 명랑함", description: "분위기 메이커 ESFP! 화려하고 사랑스러운 튤립처럼 에너지를 주는 존재랍니다." },
  ESTP: { name: "카네이션 🌸", meaning: "능력, 열정, 모험", description: "즉흥적이고 도전 정신이 강한 ESTP! 추진력 있는 성격과 카네이션의 강한 생명력이 닮았어요." },
  ENFJ: { name: "수선화 💛", meaning: "자애, 존경, 따뜻함", description: "리더십이 뛰어나고 남을 돕는 ENFJ! 사람들에게 희망을 주는 따뜻한 수선화와 잘 어울려요." },
  ENTJ: { name: "동백꽃 🔴", meaning: "지도력, 신념, 결단력", description: "카리스마 넘치는 ENTJ! 강한 리더십을 가진 동백꽃처럼 목표를 향해 나아가는 성격이에요." }, // 🛠️ 추가된 부분
  ESFJ: { name: "데이지 🌼", meaning: "평화, 순수한 사랑", description: "친절하고 다정한 ESFJ! 사랑스러운 데이지처럼 조화로운 분위기를 만드는 타입이에요." },
  INFP: { name: "라벤더 💜", meaning: "꿈, 치유, 조용한 사랑", description: "상상력이 풍부한 INFP! 조용하고 따뜻한 라벤더처럼 감성이 풍부한 타입이에요." },
  INFJ: { name: "동백꽃 🔴", meaning: "고귀함, 희생, 변함없는 사랑", description: "깊은 공감력을 가진 INFJ! 조용하지만 강한 존재감을 가진 동백꽃이 어울려요." },
  ISFP: { name: "벚꽃 🌸", meaning: "순간의 아름다움, 섬세함", description: "예술적 감각이 뛰어난 ISFP! 벚꽃처럼 감성적이고 섬세한 면이 강한 타입이에요." },
  ISTP: { name: "용담꽃 🔵", meaning: "신중함, 냉정한 아름다움", description: "분석적이고 신중한 ISTP! 차분하고 깊은 매력을 가진 용담꽃과 닮았어요." },
  INTJ: { name: "흑장미 ⚫🌹", meaning: "비밀, 신비로움, 결단력", description: "독창적인 사고를 하는 INTJ! 신비로운 흑장미처럼 강한 신념을 가진 타입이에요." },
  INTP: { name: "수국 💙", meaning: "깊은 생각, 냉철한 지성", description: "끊임없이 탐구하는 INTP! 다채로운 생각을 가진 지적인 타입으로 수국과 잘 어울려요." },
  ESTJ: { name: "국화 🌼", meaning: "책임감, 성실함", description: "체계적이고 신뢰할 수 있는 ESTJ! 강한 책임감을 가진 국화와 잘 어울려요." },
  ISTJ: { name: "백합 🤍", meaning: "순결, 정직", description: "원칙을 중시하는 ISTJ! 변함없는 백합과 닮았어요." },
  ISFJ: { name: "카멜리아 🌺", meaning: "배려, 헌신", description: "배려심 깊고 따뜻한 ISFJ! 조용한 카멜리아와 어울려요." }
};

// 질문 데이터
const questions = [
  { category: "EI", question: "당신은 새로운 사람과 쉽게 친해질 수 있나요?", options: ["네, 새로운 만남이 즐겁습니다.", "아니요, 신중하게 다가갑니다."], scores: [1, 0] },
  { category: "EI", question: "파티나 모임이 끝난 후, 기분이 어떤가요?", options: ["에너지가 넘치고 기분이 좋아집니다!", "피곤하고 혼자만의 시간이 필요합니다."], scores: [1, 0] },
  { category: "EI", question: "혼자 카페에서 책을 읽는 것과 친구들과 수다를 떠는 것 중 어느 것이 더 끌리나요?", options: ["친구들과 수다 떠는 것이 더 좋아요!", "혼자 조용히 있는 게 편해요."], scores: [1, 0] },

  { category: "SN", question: "선물을 고를 때, 어떤 기준이 더 중요한가요?", options: ["실용성과 현실적인 필요를 고려합니다.", "특별하고 의미 있는 감성적인 선물을 선택합니다."], scores: [1, 0] },
  { category: "SN", question: "여행을 갈 때, 당신은 어떤 스타일인가요?", options: ["철저한 계획을 세우고 구체적으로 준비합니다.", "즉흥적으로 움직이며 새로운 경험을 중요시합니다."], scores: [1, 0] },
  { category: "SN", question: "꽃을 볼 때, 어떤 것이 먼저 떠오르나요?", options: ["이 꽃이 어떤 환경에서 잘 자랄까?", "이 꽃의 의미와 감성적인 분위기는 어떨까?"], scores: [1, 0] },

  { category: "TF", question: "친구가 고민을 이야기할 때, 당신의 반응은?", options: ["현실적인 해결 방법을 제안합니다.", "공감하며 위로해줍니다."], scores: [1, 0] },
  { category: "TF", question: "중요한 결정을 내릴 때, 어떤 기준을 더 중요하게 생각하나요?", options: ["논리적이고 객관적인 이유를 우선합니다.", "감정과 주변 사람들의 의견을 고려합니다."], scores: [1, 0] },
  { category: "TF", question: "꽃을 고를 때, 어떤 기준이 더 중요하다고 생각하나요?", options: ["가격과 유지 관리의 용이성이 중요해요.", "꽃의 의미와 감성이 중요해요."], scores: [1, 0] },

  { category: "PJ", question: "여행을 떠나기 전, 당신은 어떤 스타일인가요?", options: [ "즉흥적으로 결정하고 유연하게 움직입니다.", "철저하게 일정을 계획하고 정리합니다."], scores: [1, 0] },
  { category: "PJ", question: "꽃을 키울 때, 어떤 방식이 더 마음에 드나요?", options: ["기분 따라 관리하며 자연스럽게 키웁니다.", "일정한 루틴을 정해놓고 꾸준히 관리합니다."], scores: [1, 0] },
  { category: "PJ", question: "마감 기한이 있는 프로젝트가 있을 때, 당신은 어떻게 행동하나요?", options: [ "마감 기한이 다가와야 집중이 잘 됩니다.", "일찍부터 계획적으로 준비하여 마감 전에 끝냅니다."], scores: [1, 0] }
];

const FlowerMBTI = () => {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleSelect = (index, category, score) => {
    setAnswers(prev => ({ ...prev, [index]: { category, score } }));
  };
  
  const calculateMBTI = () => {
    let scores = { EI: 0, SN: 0, TF: 0, PJ: 0 };
  
    // 카테고리별 점수 합산
    Object.values(answers).forEach(({ category, score }) => scores[category] += score);
  
    // MBTI 코드 생성
    const mbti = 
      (scores.EI >= 2 ? "E" : "I") +
      (scores.SN >= 2 ? "S" : "N") +
      (scores.TF >= 2 ? "T" : "F") +
      (scores.PJ >= 2 ? "P" : "J");
  
    // 🔍 디버깅용 콘솔 출력
    console.log("MBTI 결과:", mbti);
    console.log("저장된 MBTI 키:", Object.keys(flowerResults));  // 현재 저장된 꽃 MBTI 키값 확인
    console.log("매칭 여부:", mbti in flowerResults);
  
    // 결과 설정 (존재하지 않으면 기본 메시지 출력)
    setResult(flowerResults[mbti] || { name: "알 수 없음", meaning: "정보 없음", description: "결과를 찾을 수 없습니다." });
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🌸 꽃 BTI 테스트</h1>

      {questions.map((q, i) => (
        <div key={i} className="w-full max-w-lg bg-white p-6 mb-4 rounded-lg shadow-md">
          <p className="text-lg font-semibold text-gray-800 mb-3">{q.question}</p>
          <div className="flex space-x-4">
            {q.options.map((option, j) => (
              <button
                key={j}
                className={`w-1/2 px-4 py-3 rounded-lg transition 
                  ${answers[i]?.score === q.scores[j] ? "bg-pink-400 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                onClick={() => handleSelect(i, q.category, q.scores[j])}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}

      <button onClick={calculateMBTI} className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">결과 확인하기</button>

      {result && (
        <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
          <h2 className="text-xl font-semibold">{result.name} 🌸</h2>
          <p className="text-gray-800">{result.description}</p>
        </div>
      )}
    </div>
  );
};

export default FlowerMBTI;