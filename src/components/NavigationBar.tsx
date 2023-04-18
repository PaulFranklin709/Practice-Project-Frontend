import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext, SetAuthContext } from "../context/AuthProvider";
import "../NavigationBar.css";

export default function NavigationBar() {
    const navigate = useNavigate();
    const setAuth = useContext(SetAuthContext);
    const auth = useContext(AuthContext);

    function signout() {
        window.sessionStorage.removeItem("auth");
        setAuth!(null);
    }

    return (
        <div className="nav-background">
            <a className="nav-link" onClick={() => navigate("/")}>Home</a>

            {
                auth !== null ?
                    <span>
                    </span>
                    :
                    <span>
                        <a className="nav-link" onClick={() => navigate("/signup")}>Signup</a>
                        <a className="nav-link" onClick={() => navigate("/login")}>Login</a>
                    </span>
            }

            <a className="nav-link" onClick={() => navigate("/friends")}>Friends</a>
            <a className="nav-link" onClick={() => navigate("/reimbursements")}>Reimbursements</a>

            {
                auth !== null ?
                    <span>
                        <a className="nav-link" onClick={() => signout()}>Signout</a>
                    </span>
                    :
                    <span>
                    </span>
            }

            {
                auth !== null ?
                    <div className="nav-message">
                        <span>
                            Hello, {auth?.username}
                        </span>
                    </div>
                    :
                    <span>
                    </span>
            }

        </div>
    );
}
