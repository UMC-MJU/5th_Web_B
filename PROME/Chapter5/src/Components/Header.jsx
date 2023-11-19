import { Link } from "react-router-dom";
import "../index.css";
import LoginControl from "./LoginControl";

export default function Header() {
  return (
    <div className="mainHeader">
      <Link to="/">
        <img
          className="logo"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="로고"
        />
      </Link>
      <ul className="links">
        <Link to="/Movie">
          <li>영화</li>
        </Link>
        <Link to="/TV">
          <li>TV 프로그램</li>
        </Link>
        <Link to="/Celebrity">
          <li>인물</li>
        </Link>
      </ul>
      <LoginControl />
    </div>
  );
}
