import React from "react";

const SignupCustomer = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* 제목 */}
      <h1 className="text-4xl font-bold text-gray-900">회원가입</h1>
      <p className="text-gray-600 mt-1">간단한 정보를 입력하고 가입하세요!</p>

      {/* 입력 폼 */}
      <div className="mt-6 w-full max-w-md">
        <input type="text" placeholder="이름"
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
        
        <input type="email" placeholder="E-MAIL"
          className="w-full mt-3 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
        
        <input type="password" placeholder="비밀번호"
          className="w-full mt-3 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
        
        <input type="password" placeholder="비밀번호 확인"
          className="w-full mt-3 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />

        {/* 가입하기 버튼 */}
        <button className="w-full mt-4 px-4 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
          가입하기
        </button>
      </div>

      {/* 로그인 이동 링크 */}
      <p className="mt-4 text-sm text-gray-500">
        이미 계정이 있나요? <a href="/login" className="text-blue-600 hover:underline">로그인</a>
      </p>
    </div>
  );
};

export default SignupCustomer;