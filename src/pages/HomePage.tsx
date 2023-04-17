import { useNavigate } from "react-router-dom";
import "../index.css";

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <div>
            Home Page
            <br/>
            <button onClick={() => navigate("/")}>Home Page Button</button>
        </div>
    );
}
