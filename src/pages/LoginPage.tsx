import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SetAuthContext } from "../context/AuthProvider";
import "../index.css";
import Auth from "../models/Auth";
import PRACTICE_API from "../utils/ApiConfig";

export default function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const setAuth = useContext(SetAuthContext);
    const [errorMessage, setErrorMessage] = useState<string>("");

    async function submit(e: FormEvent) {
        e.preventDefault();
        await PRACTICE_API.post("/auth/login", {
            username: username,
            password: password
        }).then((resp) => {
            // console.log(resp);

            let auth = new Auth(resp.data.userId, resp.data.username, resp.data.active, resp.data.role, resp.data.token);
            window.sessionStorage.setItem("auth", JSON.stringify(auth));

            setAuth!(auth);

            setUsername("");
            setPassword("");

            setErrorMessage("");

            navigate("/");
        }).catch((e: any) => {
            // console.log(e);
            setErrorMessage(e.response.data.message);
        });
    }

    return (
        <div>
            <div>Login</div>
            <br/>   
            <form onSubmit={(e) => submit(e)}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                <br/><br/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <br/><br/>
                <button>Submit</button>
            </form>
            <br/>
            <div>{errorMessage}</div>
        </div>
    );
}
