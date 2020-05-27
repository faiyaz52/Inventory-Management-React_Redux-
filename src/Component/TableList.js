import React from 'react'
import {Link} from 'react-router-dom';
import {deleteAnventory} from './../Action/Action';
import {useDispatch} from 'react-redux';
const TableList = ({anventory,selectAll}) => {
    
    const dispatch = useDispatch();
    const {ProductID,ProductName,ModelNumber,SKU,Quantity,Category,id}=anventory;
return (
        <tr>
            <td><input class="uk-checkbox" checked = {selectAll} type="checkbox"/></td>
            <td>{ProductID}</td>
            <td>{ProductName}</td>
            <td >{Category}</td>               
            <td>{SKU}</td>
            <td>{Quantity}</td>   
            <td>{ModelNumber}</td>  
            <td className="action">
                <Link to ={`/Anvantory/edit/${id}`}>
                    <i class="material-icons md-18 text-primary mr-2">edit</i>
                </Link>
                <Link to ={`/Anvantory/view/${id}`}>
                <span class="material-icons mr-2" style={{color:"#808080"}}>
                      remove_red_eye
                    </span>
                </Link>
                <span><i class="material-icons md-18 text-danger mr-2" onClick={()=>dispatch(deleteAnventory(id))} style={{cursor:"pointer"}}>delete</i></span>              
            </td>
        </tr>                             
    )
}

export default TableList
