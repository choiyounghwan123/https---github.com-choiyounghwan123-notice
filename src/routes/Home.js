import React from "react";
import { Link } from "react-router-dom";
import Button from "../component/common/Button";

const Home = () => {
  return (
    <div>
      <h1>메인 화면</h1>
      <button>
        <Link to="/login">Login</Link>
      </button>
      <Button>123</Button>
    </div>
  );
};

export default Home;
