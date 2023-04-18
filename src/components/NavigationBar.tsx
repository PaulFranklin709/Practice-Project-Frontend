import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext, SetAuthContext } from "../context/AuthProvider";
import "../NavigationBar.css";

export default function NavigationBar() {
    const navigate = useNavigate();
    const [navAuth, setNavAuth] = useState<boolean>(false);
    const setAuth = useContext(SetAuthContext);
    const auth = useContext(AuthContext);

    useEffect(() => {
        const data = window.sessionStorage.getItem("auth");
        console.log(data);
        if (data === null) {
            setNavAuth(false);
        }
        else {
            setNavAuth(true);
        }
    }, [window.sessionStorage.getItem("auth")]);

    function signout() {
        window.sessionStorage.removeItem("auth");
        setAuth!(null);
        setNavAuth(false);
    }

    return (
        <div className="nav-background">
            <a className="nav-link" onClick={() => navigate("/")}>Home</a>

            {
                navAuth ?
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
                navAuth ?
                    <span>
                        <a className="nav-link" onClick={() => signout()}>Signout</a>
                    </span>
                    :
                    <span>
                    </span>
            }

            {
                navAuth ?
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
