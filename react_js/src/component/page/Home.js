import ProductCard from "../common/productCart"
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
function Home(props){
    const [item,setItem] = useState([]);
    function callData(){
        const url=`https://dummyjson.com/products?limit=12`;
        fetch(url).then(rs=>rs.json())
        .then(data=>{
            setItem(data.products);
        })
    }
    useEffect(function(){        // khi có gì thay đổi thì hàm này sẽ chặn hàm callData lại
        callData();
    },[]);
    return(
        <section>
            <Container>
             <h1>Product</h1>
             <Row>
             {
                item.map((e,i)=>{
                return <Col xs={6} key={i}>
                        <ProductCard item={e} />
                    </Col>
                })
             }
             </Row>
            </Container>
        </section>
            
    );
}
export default Home;