import { useNavigate } from "react-router-dom";
import "../NavigationBar.css";

export default function NavigationBar() {
    const navigate = useNavigate();
    return (
        <div className="nav-background">
            <a className="nav-link" onClick={() => navigate("/")}>Home</a>
            <a className="nav-link" onClick={() => navigate("/signup")}>Signup</a>
            <a className="nav-link" onClick={() => navigate("/login")}>Login</a>
            <a className="nav-link" onClick={() => navigate("/friends")}>Friends</a>
            <a className="nav-link" onClick={() => navigate("/reimbursements")}>Reimbursements</a>
        </div>
    );
}
