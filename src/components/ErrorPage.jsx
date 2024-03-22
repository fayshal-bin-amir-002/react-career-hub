import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <p>Opppss!!</p>
            <Link to='/' className="btn btn-primary">Go Home</Link>
        </div>
    );
};

export default ErrorPage;