import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Context from "../context/context";
import Love from "../page/BookMart";

function Product(props){
    const item = props.item;
    const {cart,setCart} = useContext(Context);
    const {love,setLove} = useContext(Context);

    function addToCart(){
        item.map((e,i)=>{
            if(e.title==item){
                alert("đã có trong giỏ hàng");
            }else{
                return(
                    setCart([...cart,item])
                )
            }
        })
        }
        // if (item) {
        //     alert("đã có trong giỏ hàng");
        // } else {
        //     // Nếu sản phẩm chưa tồn tại, thêm sản phẩm vào giỏ hàng với số lượng là 1
        //     setCart([...cart,item]);
        // }
    // }
    // function Love(){
    //     setLove([...love,item]);
    // }
    // const [count,setCount] = useState([]);
    // function increment(){
    //     if(count>0){
    //         setCount(count>0?count-1:0);
    //     }    
    // }
    return (
        <div className="col-4">
            <img src={item.thumbnail}/>
            <h2>{item.title}</h2>
            <h4>${item.price}</h4>
            <button onClick={addToCart} className="btn btn-primary" type="button">Add to cart</button>
            <button onClick={Love} className="btn btn-primary" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
            </svg></button>

            
            {/* <p>{item.qty > 0 ? "In stock": "Out of stock"}</p>
            <h2>Count: {count}</h2>
            <button onClick={increment} className="btn btn-primary" type = "button">Increment</button> */}
        </div>
    );
}
export default Product;// biến hàm này thành 1 component dùng mọi nơi giống bootstrap