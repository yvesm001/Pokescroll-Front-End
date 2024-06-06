import React from "react";
import { useNavigate } from "react-router-dom";

const imgURL =
  "https://i.pinimg.com/originals/32/eb/23/32eb230b326ee3c76e64f619a06f6ebb.png";

function errorPage() {
  const navigate = useNavigate();

  return (
    <div className="errorPage">
      <h1 className="error-header d-flex align-items-center justify-content-center">
        4<img className="pokeball-error" src={imgURL} alt="404 error gif" />4
      </h1>
      <h2 className="d-flex justify-content-center mb-4">Page Not Found</h2>

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
