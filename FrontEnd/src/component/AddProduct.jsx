
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct=()=>{

    const [name,setName]=useState();
    const [price,setPrice]=useState();
    const [category,setCategory]=useState();
    const [company,setCompany]=useState();
    const [error,setError]=useState(false);
    const navigate=useNavigate();

    const addProduct= async ()=> {

      if(!name || !price || !category || !company){
        setError(true)
        return false;
      }


         const userID= JSON.parse(localStorage.getItem('user'))._id;
         
         
         let result = await fetch('http://localhost:5000/add-product',{
            method:'post',
            body:JSON.stringify({name,price,category,company,userID}),
            headers:{
                "Content-Type": "application/json"
            }
            
            
         });
         result = await result.json();
         console.warn(result);
         if(result){
            navigate('/')
         }
         
    }


    return(
        <div className="AddProduct">
            <h1> ADD Product</h1>
            <input type="text " placeholder="Enter Product Name"  value={name}   onChange={(e)=>{setName(e.target.value)}}/>
            { error && !name && <span className="invalid">Enter Valid Name</span>}

            <input type="text " placeholder="Enter Product Price"  value={price}   onChange={(e)=>{setPrice(e.target.value)}}/>
            { error && !price && <span className="invalid">Enter Valid Price </span>}

            <input type="text " placeholder="Enter Product Category"  value={category}   onChange={(e)=>{setCategory(e.target.value)}} />
            { error && !category && <span className="invalid">Enter Valid Category </span>}

            <input type="text " placeholder="Enter Product Company" value={company}   onChange={(e)=>{setCompany(e.target.value)}}/>
            { error && !company && <span className="invalid">Enter Valid Company </span>}

            <button onClick={addProduct}>  Add Product</button>
        </div>
    )
}

export default AddProduct;