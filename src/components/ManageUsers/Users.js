import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "../ManageUsers/Users.scss";

const Users = (props) => {
  let history = useHistory();

  useEffect(() => {
    let session = sessionStorage.getItem("account");
    if (!session) {
      history.push("/login");
    }
  }, []);
};

export default Users;
