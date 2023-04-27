  import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css"

function Navbar() {

    const current_page = useLocation();
    
return(

    <div className="NavbarContainer" >
        <Link className={current_page.pathname === '/lotofacil' ? 'active nav-text-lotofacil' : 'nav-text-lotofacil'} to="/lotofacil">Lotofácil</Link>
        <Link className={current_page.pathname === '/megasena' ? 'active nav-text-megasena' : 'nav-text-megasena'} to="/megasena">Megasena</Link>
        <Link className={current_page.pathname === '/quina' ? 'active nav-text-quina' : 'nav-text-quina'}  to="/quina">Quina</Link>
    </div>



    )
}
export default Navbar;