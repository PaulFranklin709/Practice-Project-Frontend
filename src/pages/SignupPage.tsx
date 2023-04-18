import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SetAuthContext } from "../context/AuthProvider";
import "../index.css";
import Auth from "../models/Auth";
import PRACTICE_API from "../utils/ApiConfig";

export default function SignupPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const setAuth = useContext(SetAuthContext);

    async function submit(e: FormEvent) {
        e.preventDefault();
        await PRACTICE_API.post("/users/signup", {
            username: username,
            password: password
        }).then((resp) => {
            // console.log(resp);

            let auth = new Auth(resp.data.userId, resp.data.username, resp.data.active, resp.data.role, resp.data.token);
            window.sessionStorage.setItem("auth", JSON.stringify(auth));

            setAuth!(auth);

            setUsername("");
            setPassword("");

            navigate("/");
        }).catch((e: any) => {
            // console.log(e);
        });
    }

    return (
        <div>
            <div>Signup</div>
            <br/>   
            <form onSubmit={(e) => submit(e)}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                <br/><br/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <br/><br/>
                <button>Submit</button>
            </form>
        </div>
    );
}
