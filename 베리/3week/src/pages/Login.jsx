import React, { useState } from 'react';
import styled from 'styled-components';

const SubmitButton = styled.button`
  width: 300px;
  height: 50px;
  background-color: ${({ disabled, valid }) => (disabled ? '#2c2c2f3f' : valid ? '#4CAF50' : '#000')};
  color: #fff;
  border: none;
  border-radius: 10px;
  margin-bottom: 30px;
  margin-top: 20px;
  font-size: 23px;
`;


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const onChangeEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(newEmail));
  };

  const onChangePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    setPasswordError(!passwordRegex.test(newPassword));
  };

  const handleSubmit = () => {
    if (!emailError && !passwordError) {
      console.log('폼 제출:', { email, password });
    }
  };

  return (
    <div className="login-container">
      <h1>
        이메일과 비밀번호를
        <br />
        입력해주세요
      </h1>
      <form className="login-form">
        <label className="form-label" id='email'>
          이메일
          <br />
          <input
            className="form-input"
            id="email"
            onChange={onChangeEmail}
            type="text"
            placeholder="ex)aaaa@bbbb.com"
            name="email"
          />
        </label>
        {emailError && <p className='error-message'>올바른 이메일을 입력해주세요.</p>}
      </form>
      <form className="login-form">
        <label className="form-label" id='password'>
          비밀번호
          <br />
          <input
            className="form-input"
            id="password"
            onChange={onChangePassword}
            type="password"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            name="password"
          />
        </label>
        {passwordError && <p className='error-message'>올바른 비밀번호를 입력해주세요.</p>}
      </form>
      <SubmitButton
        className="submit-button"
        type="button"
        onClick={handleSubmit}
        disabled={!email || !password || emailError || passwordError}
      >
        확인
      </SubmitButton>
    </div>
  );
};

export default Login;
