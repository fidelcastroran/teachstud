import React from "react";
import { useNavigate } from "react-router-dom";

function BaseApp({title,children}){
    const history = useNavigate
    return(
        <div>
        <div>
            <div className="nav-styles">
            <span>
                <button className="nav-buttons" onClick={()=>history.push}>ADD USER</button>
            </span>
            <span>
                <button className="nav-buttons" onClick={()=>history.push}>DASHBOARD</button>
            </span>

            </div>
            <div className="title">{title}</div>

            </div>
            <div className="children">{children}
            <footer>
                contact us
                <div>email : castro@gmail.com</div>
                <div>phone : 962054966 </div>
            </footer>

            </div>
        </div>

       
    )
}
export default BaseApp