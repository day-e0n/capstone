import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* 제목 */}
      <h1 className="text-4xl font-bold text-gray-900">로그인</h1>
      <p className="text-gray-600 mt-1">로그인을 하고 더 많은 혜택을 누리세요!</p>

      {/* 프로필 아이콘 */}
      <div className="mt-6 bg-gray-200 p-6 rounded-full">
        <svg className="w-24 h-24 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3a3 3 0 013 3 3 3 0 01-6 0 3 3 0 013-3zm0 16c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08c-1.29 1.94-3.5 3.22-6 3.22z"></path>
        </svg>
      </div>

      {/* 로그인 입력 필드 */}
      <div className="mt-6 w-80">
        <input type="email" placeholder="E-MAIL"
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
        <input type="password" placeholder="PASSWORD"
          className="w-full mt-3 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />

        {/* 로그인 버튼 */}
        <button className="w-full mt-4 px-4 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
          LOGIN
        </button>
      </div>

      {/* 회원가입 & 비밀번호 찾기 */}
      <div className="mt-4 flex justify-between w-80 text-sm text-gray-500">
        <Link to="/Signup" className="hover:underline">
            회원가입
        </Link>
        <Link to="/ResetPassword" className="hover:underline">
            비밀번호 재설정
        </Link>
      </div>

      {/* SNS 로그인 버튼 */}
      <div className="mt-6 w-80 space-y-3">
        <button className="w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition">
          네이버 로그인
        </button>
        <button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-bold hover:bg-yellow-500 transition">
          카카오 로그인
        </button>
        <button className="w-full bg-gray-200 text-black py-3 rounded-lg font-bold hover:bg-gray-300 transition">
          구글 로그인
        </button>
      </div>
    </div>
  );
};

export default Login;