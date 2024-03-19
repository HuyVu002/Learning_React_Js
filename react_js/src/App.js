import logo from './logo.svg';
import './App.css';
import Product from './component/common/Product';
import Menu from './component/common/Menu';
import { Route, Routes } from 'react-router-dom';
import Home from './component/page/Home';
import Category from './component/page/Category';
import Product2 from './component/page/Product2';
import Cart from './component/page/Cart';
import Weather from './component/page/Weather';
import { useState } from 'react';
import Context, { ContextProvider } from './component/context/context';
import Love from './component/page/BookMart';
function App() {
  const [cart, setCart] = useState([]);
  const [love, setLove] = useState([]);


  return (
    <ContextProvider  value={{cart,setCart,love,setLove}}>
       <div className='App'>
        <Menu/>
        <section className='main'>
          <Routes>
            <Route path='/'  Component={Home} />
            <Route path='/category' Component={Category} />
            <Route path='/product/:id' Component={Product2} />
            <Route path='/cart' Component={Cart} />
            <Route path='/weather' Component={Weather} />
            <Route path='/bookmart' Component={Love} />

          </Routes>
        </section>
      </div> 
    </ContextProvider>
       
  );
}
export default App;
{/* <section>
        <div className='contaner'>
          <div className='row'>
              {
                ps.map(
                  (e,i)=>{
                    return <Product key={i} p={e}/>
                  }
                )
              }

          </div>
        </div>
      </section> */}

    //   <ul class="nav">
    //   <li class="nav-item">
    //     <a class="nav-link active" aria-current="page" href="#">Home</a>
    //   </li>
    //   <li class="nav-item">
    //     <a class="nav-link" href="#">Categry</a>
    //   </li>
    //   <li class="nav-item">
    //     <a class="nav-link" href="#">Product</a>
    //   </li>
    //   <li class="nav-item">
    //     <a class="nav-link" href="#">Login</a>
    //   </li>
    // </ul>