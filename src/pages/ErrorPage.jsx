import React from "react";
import { useNavigate } from "react-router-dom";

const imgURL =
  "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/404.gif";

function errorPage() {
  const navigate = useNavigate();

  return (
    <div className="errorPage">
      <h1>404</h1>
      <img className="errorImg" src={imgURL} alt="404 error gif" />
      <div className="d-flex justify-content-center">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default errorPage;
