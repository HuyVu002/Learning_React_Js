import { useContext } from "react";
import { Container, Table } from "react-bootstrap";
import Context from "../context/context";

function BookMart(props){
    const {love,setLove} =  useContext(Context);
    return (
        <>
        <h1>Love Page content</h1>
        <Container>
            <Table>
                <thead>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                </thead>
                <tbody>
                    {
                        love.map((e,i)=>{
                            return <tr key={i}>
                                    <td>{e.id}</td>
                                    <td><img src={e.thumbnail}  width={125}/></td>
                                    <td>{e.title}</td>
                                    <td>{e.price}</td>
                                </tr>
                            })
                    }
                </tbody>
            </Table>
        </Container>
        </>
    );
}
export default BookMart;