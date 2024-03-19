import Weather from "../common/weather"
import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
function We(){
    const [item,setItem] = useState([]);
    function callData(){
        const url=`https://api.openweathermap.org/data/2.5/forecast?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
        fetch(url).then(rs=>rs.json())
        .then(data=>{
            setItem(data.list);
        })
    }
    useEffect(function(){        // khi có gì thay đổi thì hàm này sẽ chặn hàm callData lại
        callData();
    },[]);
    
    return(
        <section>
           <Container>
            <h1>Weather</h1>
            <Row>
                    {
                        item.map((e,i)=>{
                            return <Col xs={3} key={i}>
                                <Weather item={e} key={i}/>
                                
                            </Col>
                        })
                    }
            </Row>
           </Container>
       </section>
    );
}
export default We;