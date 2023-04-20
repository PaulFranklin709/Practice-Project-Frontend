import { Link } from "react-router-dom";
import "../index.css";

export default function ReimbursementsPage() {
    return (
        <div>
            <div>
                Reimbursements
            </div>
            <Link to={"/reimbursements/new"}>New Reimbursement</Link>
        </div>
    );
}
