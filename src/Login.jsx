import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./Store";

function Login() {
  let username = useRef(null);
  let password = useRef(null);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let onLogin = () => {
    if (username.current.value === "abhi" && password.current.value === "swe@123") {
      dispatch(login(username.current.value));
      navigate("/home");
    } else {
      alert("Your credentials are wrong, please check!");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <h1 className="text-center mb-4">Login Page</h1>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" id="username" className="form-control" ref={username} />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" id="password" className="form-control" ref={password} />
        </div>

        <button onClick={onLogin} className="btn btn-primary w-100">Login</button>
      </div>
    </div>
  );
}

export default Login;
