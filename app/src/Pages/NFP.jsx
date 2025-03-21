import { Link } from "react-router-dom";

const NFP = () => {
  return (
    <div>
      <h1 className="pageTitle">Error! Page Not Found</h1>
      <button>
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
};

export default NFP;
