import "./Login.scss";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import { loginUser } from "../../services/userService";

const Login = (props) => {
  let history = useHistory();
  const handleCreateNewAccount = () => {
    history.push("/register");
  };

  const [valueLogin, setValueLogin] = useState("");
  const [password, setPassword] = useState("");

  const defaultObjValueInput = {
    isValidValueLogin: true,
    isValidPassword: true,
  };
  const [objValueInput, setObjValueInput] = useState("");

  const handleLogin = async () => {
    if (!valueLogin) {
      setObjValueInput({ ...defaultObjValueInput, isValidValueLogin: false });
      toast.error("Please enter your email address or phone number");
      return;
    }

    if (!password) {
      setObjValueInput({ ...defaultObjValueInput, isValidPassword: false });
      toast.error("Please enter your password");
      return;
    }

    await loginUser(valueLogin, password);
  };
  return (
    <div className="login-container ">
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
            <input
              type="text"
              className={
                objValueInput.isValidValueLogin
                  ? "form-control"
                  : "form-control is-invalid"
              }
              placeholder="Email address or phone number "
              value={valueLogin}
              onChange={(event) => {
                setValueLogin(event.target.value);
              }}
            />
            <input
              type="password"
              className={
                objValueInput.isValidPassword
                  ? "form-control"
                  : "form-control is-invalid"
              }
              placeholder="Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <button
              className="btn btn-primary"
              onClick={() => {
                handleLogin();
              }}
            >
              Login
            </button>
            <span className="text-center">
              <a href="#" className="forgot-password">
                Forgot your password
              </a>
            </span>
            <hr />
            <div className="text-center">
              <button
                className="btn btn-success"
                onClick={() => handleCreateNewAccount()}
              >
                Create new account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
