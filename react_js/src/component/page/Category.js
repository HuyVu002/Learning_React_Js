import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';

function Category(props){
    const [item,setItem] = useState([]);
    function callData(){
        const url=`https://dummyjson.com/products/categories`;
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
            {
            item.map((e,i)=>{
                return(
                    <Dropdown.Item href={`#/action${i}`}>{e}</Dropdown.Item>
                )
                })
            }
        </div>
      
    );
}
export default Category;