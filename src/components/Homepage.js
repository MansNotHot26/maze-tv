import React , {useContext,useEffect} from "react";
import ShowCard from './ShowCard'
import {userContext} from '../ContextApi'
import Header from './Header'
import './HomePage.css'
import MyComponent from 'react-fullpage-custom-loader'
function Homepage() {
  const [state,setState] = useContext(userContext)

  const {shows} = state;

  useEffect(() => {
      
    window.scrollTo(0, 0);
  
}, []);
  
 
  return <>
  { shows.length > 0 ?
   <>
  <Header/>
  
  <div className = "showCards">{shows.map(item =>  
    <ShowCard key={item.id} show ={item} image={item.image.medium} name={item.name} description={item.summary} active={false}/>
  )}</div> 
  </>
 : 	<MyComponent/>
}
  </>

}

export default Homepage;
