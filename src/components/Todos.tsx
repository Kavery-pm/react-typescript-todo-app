import React from "react";

const Todos : React.FC<{item:string[]}>= (props)=>{
    return <ul>
        <li>{props.item}</li>
       
    </ul>
}
export default Todos;