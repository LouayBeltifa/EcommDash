import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom";

function Protected(props) {
    let Compo=props.Compo
    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem("user-info")){
            navigate("/login");
        }
    }, [])
    return (
        <div>
            <Compo />
        </div>
    )
}

export default Protected
