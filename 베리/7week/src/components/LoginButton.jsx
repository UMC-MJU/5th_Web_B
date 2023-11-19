import React from 'react'
import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  const navigate = useNavigate();
  return (
    <button className='loginButton'
      onClick={() => {
        navigate("/Login");
      }}
    >
      로그인
    </button>
  );
}
