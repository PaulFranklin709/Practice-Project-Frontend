import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import "../index.css";
import PRACTICE_API from "../utils/ApiConfig";

export default function NewReimbursementPage() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [amount, setAmount] = useState<number>(0);
    const [description, setDescription] = useState<string>("");
    const auth = useContext(AuthContext);

    async function submit(e: FormEvent): Promise<void> {
        e.preventDefault();
        await PRACTICE_API.post("/reimbursements/new", {
            amount: amount,
            description: description
        },
        {
            headers: {
                "authorization": auth?.token
            }
        }).then((resp) => {
            // console.log(resp);

            setAmount(0);
            setDescription("");

            setErrorMessage("");

            navigate("/reimbursements");
        }).catch((e: any) => {
            // console.log(e);
            setErrorMessage(e.response.data.message);
        });
    }

    function parseNumber(number: string) {
        return Number(number)
    }

    return (
        <div>
            <div>New Reimbursement</div>
            <br/>   
            <form onSubmit={(e) => submit(e)}>
                <input type="number" min="0" step="0.01" placeholder="Amount" value={amount} onChange={(e) => setAmount(parseNumber(e.target.value))} required/>
                <br/><br/>
                <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                <br/><br/>
                <button>Submit</button>
            </form>
            <br/>
            <div>{errorMessage}</div>
        </div>
    );
}
