import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Register.scss";
import axios from "axios";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let history = useHistory();
  const handleLogin = () => {
    history.push("/login");
  };

  useEffect(() => {
    // axios.get("http://localhost:8386/api/test-api").then((data) => {
    //   console.log(data);
    // });
  }, []);

  const handleRegister = () => {
    let userData = { email, phone, username, password };
  };

  return (
    <div className="register-container ">
      <div className="container">
        <div className="row px-3 px-sm-0">
          <div className="content-left col-12 d-none col-sm-7 d-sm-block">
            <div className="brand">Huy TDN AKA</div>
            <div className="detail">
              AKA helps you connect and share with the people in your life .
            </div>
          </div>
          <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3">
            <div className="brand d-sm-none">Huy TDN AKA</div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Email address "
                value={email}
                onChange={(event) => {
                  setEmail(event.target, value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Phone number:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Phone number"
                value={phone}
                onChange={(event) => {
                  setPhone(event.target, value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(event) => {
                  setUsername(event.target, value);
                }}
              />
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target, value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Re-enter Password:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Re-enter Password"
                value={confirmPassword}
                onChange={(event) => {
                  setConfirmPassword(event.target, value);
                }}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={() => {
                handleRegister();
              }}
            >
              Register
            </button>

            <hr />
            <div className="text-center">
              <button className="btn btn-success" onClick={() => handleLogin()}>
                Already've an account. Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
