import Logo from "../../../../../public/assets/image/logo.logo.png";
import Sacola from "../../../../../public/assets/image/sacola.png";
import { Menu } from "./style";
import { Link } from "react-router-dom";


export const Header = () => {
    return(
        <header>
            <nav>
                <Menu>
                    <li><img src={Logo} className="Logo"/></li>
                    {/* <li className="sacola"><Link to="/sacola"><img src={Sacola}/></Link></li> */}
                </Menu>
            </nav>
        </header>
    )
};
