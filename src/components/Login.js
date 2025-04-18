import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { AuthContext } from "../context/Authentication";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  // const auth = useContext(AuthContext);
  const { login, loggedIn } = useContext(AuthContext);
  const [success, setSuccess] = useState(true);

  if (loggedIn) return <Navigate to={`/`} replace />;

  const submit = (data) => {

    const ok = login(data);
    console.log(`login: ${ok}`);

    if (ok) {
      navigate('/', { replace: true });
    } else {
      setSuccess(false);
    }
  };

  return (
    <form className="login box" onSubmit={handleSubmit(submit)}>
      <h3 className="title">Login</h3>

      <div>
        <label htmlFor="usrn">username: </label>
        <input
          type="text"
          id="usrn"
          // ref={usrn} 
          {...register("usrn", { required: true })}
          placeholder="Tên đăng nhập..." /><br />
        {errors.usrn && <label className="error explain">*Hãy nhập username.</label>}
      </div>

      <div>
        <label htmlFor="pwrd">password: </label>
        <input
          type="password"
          id="pwrd"
          // ref={pwrd}
          {...register("pwrd", { required: true })}
          placeholder="Mật khẩu..." /><br />
        {errors.pwrd && <label className="explain error ">*Hãy nhập mật khẩu.</label>}
      </div>

      {!success && <label className="explain error">Sai tên đăng nhập hoặc mật khẩu</label>}
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
