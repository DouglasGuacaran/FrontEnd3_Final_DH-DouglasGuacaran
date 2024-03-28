import React,{ useState} from 'react';
import { routes } from './utils/routes';
import { Link } from 'react-router-dom';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const [buttonColor, setButtonColor] = useState('initialColor');

  const changeColor = () => {
    if (buttonColor === 'initialColor') {
      setButtonColor('light');
    } else {
      setButtonColor('dark');
    }
  }
  return (

      <nav className='light'>
          <Link to={routes.home}>Home</Link>
          <Link to={routes.contact}  >Contact</Link>
          <Link to={routes.favs}  >Favs</Link>
          <Link to={routes.detail}  >Detail</Link>
          <button className='favButton' onClick={changeColor} style={{ backgroundColor: buttonColor }}>Cambiar de buttonColor</button>
      </nav>

  )
}

export default Navbar