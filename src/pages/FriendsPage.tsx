import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import "../index.css";
import PRACTICE_API from "../utils/ApiConfig";

export default function FriendsPage() {
    const auth = useContext(AuthContext);
    const [usernames, setUsernames] = useState<string[]>([]);

    useEffect(() => {
        getUsernames();
    }, [])

    async function getUsernames() {
        await PRACTICE_API.get("/users", {
            headers: {
                "authorization": auth?.token
            }
        }).then((resp) => {
            // console.log(resp.data);
            setUsernames(resp.data);
        }).catch((e: any) => {
            // console.log(e);
        });
    }

    return (
        <div>
            Friends
            <ul>
            </ul>
            Users
            <ul>
                {
                    usernames.map(
                        (username) => (
                            <li className="friends-users">{username}</li>
                        )
                    )
                }
            </ul>
        </div>
    );
}
