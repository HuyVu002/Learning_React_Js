import { useParams } from "react-router-dom";
import Product from "../common/Product"
import { useState, useEffect } from "react";
function Product2(props){
    const [item,setItem] = useState({});
    const {id} = useParams();
    function callData(){
        const url=`https://dummyjson.com/products/${id}`;
        fetch(url).then(rs=>rs.json())
        .then(data=>{
            setItem(data);
        })
    }
    useEffect(function(){        // khi có gì thay đổi thì hàm này sẽ chặn hàm callData lại
        callData();
    },[]);
    return(
        <div>
            <h1>Product 2</h1>
            <Product item={item}/>
        </div>
    );
}
export default Product2