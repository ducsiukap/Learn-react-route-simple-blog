import React, {  useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login({loggedIn, onLogin}) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [success, setSuccess] = useState(true);

  if (loggedIn) return <Navigate to={`/`} replace />;

  const checkLogin = async (data) => {
    const creds = {
      usrn : data.usrn,
      pwrd : data.pwrd
    }

    const response = await fetch('http://localhost:8080/login', {
      method: 'post', 
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      }, 
      body: JSON.stringify(creds)
    });
    if (response.ok) {
      const result = await response.json();
      const user = result.data;
      onLogin(user);
      navigate("/", { replace: true });
    } else {
      setSuccess(false);
    }
  };

  return (
    <form className="login box" onSubmit={handleSubmit(checkLogin)}>
      <h3 className="title">Login</h3>

      <div>
        <label htmlFor="usrn">username: </label>
        <input
          type="text"
          id="usrn"
          // ref={usrn}
          {...register("usrn", { required: true })}
          placeholder="Tên đăng nhập..."
        />
        <br />
        {errors.usrn && (
          <label className="error explain">*Hãy nhập username.</label>
        )}
      </div>

      <div>
        <label htmlFor="pwrd">password: </label>
        <input
          type="password"
          id="pwrd"
          // ref={pwrd}
          {...register("pwrd", { required: true })}
          placeholder="Mật khẩu..."
        />
        <br />
        {errors.pwrd && (
          <label className="explain error ">*Hãy nhập mật khẩu.</label>
        )}
      </div>

      {!success && (
        <label className="explain error">Sai tên đăng nhập hoặc mật khẩu</label>
      )}
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
