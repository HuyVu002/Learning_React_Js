import { Card } from "react-bootstrap";
function We(props){ // component
    const item = props.item;
    return (
        <Card>
            <Card.Img thumbnail  src={item.thumbnail} />
            <Card.Body>
                <Card.Title>{item.dt_txt}</Card.Title>
                <Card.Text>{item.main.temp}°C</Card.Text>
                <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}/>
                <Card.Text>{item.weather[0].description}</Card.Text>
                {/* <p>{item.dt_txt}</p> */}
                {/* <img src={item.weather[0]}/> */}
                {/* <p>{item.main.temp}°C</p>
                <p>{item.weather[0].description}</p> */}
                {/* <button className="btn btn-primary" type="button">Increment</button> */}
            </Card.Body>
        </Card>
    );
}
export default We;