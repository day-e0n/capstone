import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-10 py-4 bg-white shadow-md z-50">
      <Link // 홈화면으로 돌아가기
        to="/" 
        className="text-2l font-bold text-blue-600 border-2 border-blue-600 px-4 py-2 rounded-lg hover:bg-purple-100 transition"
      >
        캡스톤_프로젝트
      </Link>

      {/* 네비게이션 메뉴 */}
      <div className="space-x-6 text-gray-700 font-medium">
        <Link to="/dictionary" className="hover:text-blue-500 transition">꽃말 검색</Link>
        <Link to="/search-where" className="hover:text-blue-500 transition">꽃집 조회</Link>
        <Link to="/order" className="hover:text-blue-500 transition">꽃 주문</Link>
      </div>

      {/* 로그인 버튼 */}
      <Link 
        to="/Login" 
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        로그인/가입
      </Link>
    </nav>
  );
};

export default Navbar;