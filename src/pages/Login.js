// 이 코드는 로그인 만 구현 되어있음 (깡통 버전)
// 그 밑에 코드는 로컬에서 꺼내오는 걸로 구현해놓은 코드 (로컬 버전))

// import React from "react";
// import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
//       {/* 제목 */}
//       <h1 className="text-4xl font-bold text-gray-900">로그인</h1>
//       <p className="text-gray-600 mt-1">로그인을 하고 더 많은 혜택을 누리세요!</p>

//       {/* 프로필 아이콘 */}
//       <div className="mt-6 bg-gray-200 p-6 rounded-full">
//         <svg className="w-24 h-24 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3a3 3 0 013 3 3 3 0 01-6 0 3 3 0 013-3zm0 16c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08c-1.29 1.94-3.5 3.22-6 3.22z"></path>
//         </svg>
//       </div>

//       {/* 로그인 입력 필드 */}
//       <div className="mt-6 w-80">
//         <input type="email" placeholder="E-MAIL"
//           className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
//         <input type="password" placeholder="PASSWORD"
//           className="w-full mt-3 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />

//         {/* 로그인 버튼 */}
//         <button className="w-full mt-4 px-4 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
//           LOGIN
//         </button>
//       </div>

//       {/* 회원가입 & 비밀번호 찾기 */}
//       <div className="mt-4 flex justify-between w-80 text-sm text-gray-500">
//         <Link to="/Signup" className="hover:underline">
//             회원가입
//         </Link>
//         <Link to="/ResetPassword" className="hover:underline">
//             비밀번호 재설정
//         </Link>
//       </div>

//       {/* SNS 로그인 버튼 */}
//       <div className="mt-6 w-80 space-y-3">
//         <button className="w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition">
//           네이버 로그인
//         </button>
//         <button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-bold hover:bg-yellow-500 transition">
//           카카오 로그인
//         </button>
//         <button className="w-full bg-gray-200 text-black py-3 rounded-lg font-bold hover:bg-gray-300 transition">
//           구글 로그인
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FiUser } from "react-icons/fi"; // 프로필 아이콘
// import { MdLogout } from "react-icons/md"; // 로그아웃 아이콘

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태
//   const navigate = useNavigate();

//   useEffect(() => {
//     // localStorage에서 로그인 정보 확인
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   // 로그아웃 기능
//   const handleLogout = () => {
//     localStorage.removeItem("user"); // 사용자 정보 삭제
//     setIsLoggedIn(false);
//     navigate("/"); // 홈으로 이동
//   };

//   return (
//     <nav className="fixed top-0 w-full flex justify-between items-center px-10 py-4 bg-white shadow-md z-50">
//       <Link to="/" className="text-3xl font-baemin text-pink-400 hover:bg-purple-100 transition">
//         BlossomPick
//       </Link>

//       {/* 네비게이션 메뉴 */}
//       <div className="space-x-6 text-gray-700 font-medium">
//         <Link to="/dictionary" className="hover:text-blue-500 transition">꽃말 검색</Link>
//         <Link to="/search-where" className="hover:text-blue-500 transition">꽃집 조회</Link>
//         <Link to="/order" className="hover:text-blue-500 transition">꽃 주문</Link>
//       </div>

//       {/* 로그인 상태에 따라 UI 변경 */}
//       {isLoggedIn ? (
//         <div className="relative">
//           {/* 프로필 아이콘 */}
//           <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-100 transition">
//             <FiUser className="text-gray-700 text-xl" />
//             <span className="text-gray-700">프로필</span>
//           </button>

//           {/* 드롭다운 메뉴 */}
//           <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
//             <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">개인정보 설정</Link>
//             <Link to="/register-store" className="block px-4 py-2 hover:bg-gray-100">꽃집 등록하기</Link>
//             <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">
//               <MdLogout className="inline-block mr-2" /> 로그아웃
//             </button>
//           </div>
//         </div>
//       ) : (
//         <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
//           로그인/가입
//         </Link>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setErrorMsg("가입된 계정이 없습니다.");
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      setErrorMsg("");
      localStorage.setItem("isLoggedIn", "true"); // 로그인 상태 저장
      navigate("/"); // 홈으로 이동
      window.location.reload(); // Navbar 새로 반영
    } else {
      setErrorMsg("이메일 혹은 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900">로그인</h1>
      <p className="text-gray-600 mt-1">로그인을 하고 더 많은 혜택을 누리세요!</p>

      <div className="mt-6 bg-gray-200 p-6 rounded-full">
        <svg className="w-24 h-24 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3a3 3 0 013 3 3 3 0 01-6 0 3 3 0 013-3zm0 16c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08c-1.29 1.94-3.5 3.22-6 3.22z"></path>
        </svg>
      </div>

      <div className="mt-6 w-80">
        <input
          type="email"
          placeholder="E-MAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-3 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {errorMsg && (
          <p className="text-red-500 text-sm mt-2">{errorMsg}</p>
        )}

        <button
          onClick={handleLogin}
          className="w-full mt-4 px-4 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
        >
          LOGIN
        </button>
      </div>

      <div className="mt-4 flex justify-between w-80 text-sm text-gray-500">
        <Link to="/Signup" className="hover:underline">회원가입</Link>
        <Link to="/ResetPassword" className="hover:underline">비밀번호 재설정</Link>
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