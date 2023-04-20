import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import "../index.css";
import Reimbursement from "../models/Reimbursement";
import PRACTICE_API from "../utils/ApiConfig";

export default function ReimbursementPage() {
    const auth = useContext(AuthContext);
    const [reimbursement, setReimbursement] = useState<Reimbursement | null>(null);
    const { reimb_id } = useParams();

    useEffect(() => {
        getReimbursement();
    }, [])

    async function getReimbursement() {
        await PRACTICE_API.get("/reimbursements/id?reimbId="+reimb_id, {
            headers: {
                "authorization": auth?.token
            }
        }).then((resp) => {
            // console.log(resp.data);

            const data = new Reimbursement(resp.data.reimbId,
                resp.data.amount,
                resp.data.submitted,
                resp.data.resolved,
                resp.data.description,
                resp.data.author);

            setReimbursement(data);
        }).catch((e: any) => {
            // console.log(e);
        });
    }

    return (
        <div>
            <div>Reimbursement</div>
            <br/>
            <div>Amount: {reimbursement?.amount}</div>
            <div>Submitted: {reimbursement?.submitted}</div>
            <div>Resolved: {reimbursement?.resolved ? reimbursement?.resolved : "unresolved"}</div>
            <div>Description: {reimbursement?.description}</div>
            <div>Author: {reimbursement?.author}</div>
        </div>
    );
}
