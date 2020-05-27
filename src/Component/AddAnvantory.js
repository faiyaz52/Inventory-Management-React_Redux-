import React,{ useState } from 'react';
import {useDispatch} from 'react-redux';
import './Anvantory.css'
import {addAnventory} from './../Action/Action';
import shortid from 'shortid';
import { useHistory } from 'react-router-dom';
const AddAnvantory = () => {
    let history = useHistory();
    const dispatch =useDispatch();
    const [ProductID, setProductID] = useState ("");
    const [ProductName, setProductName] =useState ("");
    const [ModelNumber, setModelNumber] = useState(""); 
    const [SKU, setSKU] = useState(""); 
    const [Category, setCategory] = useState("");
    const [Quantity, setQuantity] = useState("");  
    const createAdvantory = e =>{
        e.preventDefault();
        const new_anventory={
            id:shortid.generate(),
            ProductID:ProductID,
            ProductName:ProductName,
            ModelNumber:ModelNumber,
            SKU:SKU,
            Category:Category,
            Quantity:Quantity,
        }
        dispatch(addAnventory(new_anventory));
        history.push("/")
        
    }
    return (
        <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m container" style={{marginTop:"130px",borderRadius:"30px"}}>  
           <h2 style={{textAlign:"center",marginBottom:"40px",marginTop:"-20px"}}>Add Anvantory</h2>
            <form onSubmit={(e) => createAdvantory(e)}>
            <div class="uk-width-1-2@s uk-width-2-5@m">
                    <div class="uk-nav-default uk-nav-parent-icon" uk-nav="multiple: true">
                        <li class="uk-parent"  style={{width:"500px"}} >
                            <a href="#">Product General</a>
                            <ul class="uk-nav-sub" style={{width:"800px"}}>
                                <div className="col-sm-6" > 
                                    <div className="uk-margin">
                                        <div className="uk-inline">
                                            <input className="uk-input" type="text"
                                            required
                                            style={{width:"400px"}}
                                                placeholder="Product ID" 
                                            value={ProductID}
                                            onChange={(e) => setProductID(e.target.value)}
                                        />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6" > 
                                    <div className="uk-margin">
                                        <div className="uk-inline">
                                            <input className="uk-input" type="text"
                                              style={{width:"400px"}}
                                                required
                                                placeholder="Product Name" 
                                                value={ProductName}
                                                onChange={(e) => setProductName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li class="uk-parent" style={{width:"500px"}}>
                            <a href="#">Product price</a>
                            <ul class="uk-nav-sub" style={{width:"800px"}}>
                                <div class="uk-margin col-sm-6">
                                    <div class="uk-form-controls">
                                        <select class="uk-select" id="form-stacked-select" required value={Category}
                                            onChange={(e) => setCategory(e.target.value)} style={{width:"197px"}}   style={{width:"400px"}}>
                                            <option>Select</option>
                                            <option>Module</option>
                                            <option>Inverter</option>
                                            <option>Optimizer</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6" > 
                                    <div class="uk-margin">
                                        <div className="uk-inline">
                                            <input className="uk-input" type="text" 
                                                required
                                                style={{width:"400px"}}
                                                placeholder="SKU"
                                                value={SKU}
                                                onChange={(e) => setSKU(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>  
                            </ul>
                        </li>
                        <li class="uk-parent" style={{width:"500px"}}>
                            <a href="#">Stock Information</a>
                            <ul class="uk-nav-sub" style={{width:"800px"}}>
                                <div className="col-sm-6" > 
                                    <div className="uk-margin">
                                        <div className="uk-inline">
                                            <input className="uk-input"
                                                required
                                                style={{width:"400px"}}
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
                                                style={{width:"400px"}}
                                                required
                                                placeholder="Model Number"
                                                value={ModelNumber}
                                                onChange={(e) => setModelNumber(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>   
                            </ul>
                        </li>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit" style={{marginLeft:"240px",marginTop:"20px"}}>Submit</button>
            </form>
        </div>
    )
}
export default AddAnvantory;

