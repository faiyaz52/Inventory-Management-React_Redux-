import React,{ useState,useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAnventory,updateAnventory} from './../Action/Action';
import shortid from 'shortid';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const EditAnvantory = () => {
    let {id} = useParams();
    let history = useHistory();
    const dispatch =useDispatch();
    const anventory = useSelector ((state) => state.anventoryList.anventorys);
    const [ProductID, setProductID] = useState ("");
    const [ProductName, setProductName] =useState ("");
    const [ModelNumber, setModelNumber] = useState(""); 
    const [SKU, setSKU] = useState(""); 
    const [Category, setCategory] = useState("");
    const [Quantity, setQuantity] = useState(""); 
    useEffect (()=>{
        if(anventory !=null){
            setProductID(anventory.ProductID);
            setProductName(anventory.ProductName);
            setModelNumber(anventory.ModelNumber);
            setSKU(anventory.SKU);
            setCategory(anventory.Category);
            setQuantity(anventory.Quantity);
        }
        dispatch(getAnventory(id))
    },[anventory]);
    const onUpadteAdvantory =(e)=>{
        e.preventDefault()
        const upadte_advantory = Object.assign(anventory, { 
            ProductID:ProductID,
            ProductName:ProductName,
            ModelNumber:ModelNumber,
            SKU:SKU,
            Category:Category,
            Quantity:Quantity,
        });
    dispatch(updateAnventory(updateAnventory))
   history.push("/")
};
    return (
        <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m container" style={{marginTop:"130px",borderRadius:"30px"}}>  
           <h2 style={{textAlign:"center",marginBottom:"40px",marginTop:"-20px"}}>Update Anvantory</h2>
           <form onSubmit={(e) => onUpadteAdvantory(e)}>
            <div className="row" style={{marginLeft:"30px"}}>
                <div className="col-sm-6" > 
                    <div className="uk-margin">
                        <div className="uk-inline">
                            <input className="uk-input" type="text"
                                placeholder="Product ID" 
                                value={ProductID}
                                onChange={(e) => setProductID(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6"> 
                    <div className="uk-margin">
                        <div className="uk-inline">
                            <input className="uk-input" type="text"
                                placeholder="Product Name" 
                                value={ProductName}
                                onChange={(e) => setProductName(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div> 
            <div className="row" style={{marginLeft:"30px"}}>
                <div className="col-sm-6" > 
                    <div className="uk-margin">
                        <div className="uk-inline">
                            <input className="uk-input"
                                type="text" placeholder="Category"
                                value={Category}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6" > 
                     <div class="uk-margin">
                        <div className="uk-inline">
                            <input className="uk-input" type="text" 
                                placeholder="SKU"
                                value={SKU}
                                onChange={(e) => setSKU(e.target.value)}
                            />
                        </div>
                    </div>
                </div>  
            </div>
            <div className="row" style={{marginLeft:"30px"}}>
                <div className="col-sm-6" > 
                    <div className="uk-margin">
                        <div className="uk-inline">
                            <input className="uk-input"
                                type="text" placeholder="Quantity"
                                value={Quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6" > 
                     <div className="uk-margin">
                        <div class="uk-inline">
                            <input className="uk-input" type="text" 
                                placeholder="Model Number"
                                value={ModelNumber}
                                onChange={(e) => setModelNumber(e.target.value)}
                            />
                        </div>
                    </div>
                </div>  
            </div>         
                <button className="btn btn-primary" type="submit" style={{marginLeft:"240px",marginTop:"20px"}}>Submit</button>
            </form>
        </div>
    )
}

export default EditAnvantory

