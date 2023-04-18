import { FormEvent, useState } from "react";
import "../index.css";
import PRACTICE_API from "../utils/ApiConfig";

export default function SignupPage() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    async function submit(e: FormEvent) {
        e.preventDefault();
        await PRACTICE_API.post("/users/signup", {
            username: username,
            password: password
        }).then((resp) => {
            setUsername("");
            setPassword("");
        }).catch((e: any) => {
            // console.log(e);
        });
    }

    return (
        <div>
            <div>Signup</div>
            <br/>   
            <form onSubmit={(e) => submit(e)}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <br/><br/>
                <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br/><br/>
                <button>Submit</button>
            </form>
        </div>
    );
}
