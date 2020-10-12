import React , {useContext,useEffect} from 'react'
import {userContext} from '../ContextApi'
import Header from './Header'
import ShowCard from './ShowCard';
import './favourite.css'



    function Favourite() {

    const [state,setState] = useContext(userContext)
    const {favourites} = state;
  
    useEffect(() => {
      
        window.scrollTo(0, 0);
      
    }, []);
    return (
        <div className="favourites">
          <Header/>
          <div className="favourites-showCard">
          {favourites.length > 0 ? favourites.map(item =>  
          <ShowCard key={item.id} show ={item} image={item.image.medium} name={item.name} description={item.summary} remove={true} active ={true}/>
          ): <div className="no-favourites">No Favourites to show. <div>Try adding shows to your favourite list.</div> </div> }
          </div>
        </div>
    )
    }

export default Favourite
