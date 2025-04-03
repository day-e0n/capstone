// 이 코드는 회원가입 만 구현 되어있음 (깡통 버전)
// 그 밑에 코드는 로컬에 저장하는 걸로 구현해놓은 코드 (로컬 버전))

// import React from "react";

// const SignupCustomer = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
//       {/* 제목 */}
//       <h1 className="text-4xl font-bold text-gray-900">회원가입</h1>
//       <p className="text-gray-600 mt-1">간단한 정보를 입력하고 가입하세요!</p>

//       {/* 입력 폼 */}
//       <div className="mt-6 w-full max-w-md">
//         <input type="text" placeholder="이름"
//           className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
        
//         <input type="email" placeholder="E-MAIL"
//           className="w-full mt-3 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
        
//         <input type="password" placeholder="비밀번호"
//           className="w-full mt-3 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
        
//         <input type="password" placeholder="비밀번호 확인"
//           className="w-full mt-3 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />

//         {/* 가입하기 버튼 */}
//         <button className="w-full mt-4 px-4 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
//           가입하기
//         </button>
//       </div>

//       {/* 로그인 이동 링크 */}
//       <p className="mt-4 text-sm text-gray-500">
//         이미 계정이 있나요? <a href="/login" className="text-blue-600 hover:underline">로그인</a>
//       </p>
//     </div>
//   );
// };

// export default SignupCustomer;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupCustomer = () => {
  const navigate = useNavigate(); // 페이지 이동을 위한 hook
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(""); // 에러 메시지 상태

  // 입력 값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 회원가입 버튼 클릭 핸들러
  const handleSignup = (e) => {
    e.preventDefault();

    // 비밀번호 확인 체크
    if (formData.password !== formData.confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 로컬 스토리지에 사용자 정보 저장
    localStorage.setItem("user", JSON.stringify(formData));

    // 회원가입 완료 후 로그인 페이지로 이동
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* 제목 */}
      <h1 className="text-4xl font-bold text-gray-900">회원가입</h1>
      <p className="text-gray-600 mt-1">간단한 정보를 입력하고 가입하세요!</p>

      {/* 입력 폼 */}
      <form onSubmit={handleSignup} className="mt-6 w-full max-w-md">
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="E-MAIL"
          value={formData.email}
          onChange={handleChange}
          className="w-full mt-3 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={formData.password}
          onChange={handleChange}
          className="w-full mt-3 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="비밀번호 확인"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full mt-3 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        {/* 가입하기 버튼 */}
        <button
          type="submit"
          className="w-full mt-4 px-4 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
        >
          가입하기
        </button>
      </form>

      {/* 로그인 이동 링크 */}
      <p className="mt-4 text-sm text-gray-500">
        이미 계정이 있나요?{" "}
        <a href="/login" className="text-blue-600 hover:underline">
          로그인
        </a>
      </p>
    </div>
  );
};

export default SignupCustomer;