import React from 'react'
import { Link } from 'react-router-dom'
import useWindowDimensions from '../hooks/useWindowSize';

function SubNav() {
  const { width } = useWindowDimensions();

  const [isToggled, setIsToggled] = React.useState(false);
  
  React.useEffect(() => {
    if(width >= 768) {
      setIsToggled(false);
    }
  }, [width]);

  const handleToggle = e => {
    setIsToggled(current => !current);
  }
  return (
    <nav>
      <div className="nav-toggler" onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={isToggled ? "toggled" : ''}>
        <li><Link onClick={() => setIsToggled(false)} to="/">Mon histoire</Link></li>
        <li><Link onClick={() => setIsToggled(false)} to="/abonnement">Abonnement</Link></li>
        <li><Link onClick={() => setIsToggled(false)} to="/temoignages">Témoignages</Link></li>
        <li><Link onClick={() => setIsToggled(false)} to="/soins">Soins individuels</Link></li>
      </ul>
    </nav>
  )
}

export default SubNav