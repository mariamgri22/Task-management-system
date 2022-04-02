import { Link } from "react-router-dom";

const Toolbar = ({ user, page, setUser }) => {
  return (
    <div className="toolbar d-flex space-btw">
      {!user && (
        <div>
          {page !== "register" && <Link to="/register">Register</Link>}
          {page !== "login" && <Link to="/login">Login</Link>}
        </div>
      )}

      {user && (
        <div className="d-flex">
          {page !== "main" && <Link to="/main"></Link>}
        </div>
      )}

      {user && <button onClick={() => setUser(null)}>Logout</button>}
    </div>
  );
};

export default Toolbar;
