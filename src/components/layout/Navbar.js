import { NavLink } from 'react-router-dom';
import logo from '../../images/property24-logo.svg';
import '../../css/Navbar.css';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 border-bottom shadow-sm">
            <div className="container">               
                <a className="navbar-brand" href="/">
                    <img src={ logo } alt="" height="36" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                For Sale
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Property for Sale</a></li>
                                <li><a className="dropdown-item" href="#">Commercial Property for Sale</a></li>
                                <li><a className="dropdown-item" href="#">Repossessions</a></li>
                                <li><a className="dropdown-item" href="#">Auctions</a></li>
                                <li><a className="dropdown-item" href="#">On Show</a></li>
                                <li><a className="dropdown-item" href="#">Retirement Property for Sale</a></li>
                                <li><a className="dropdown-item" href="#">Developments for Sale</a></li>
                                <li><a className="dropdown-item" href="#">Sold House Prices</a></li>
                                <li><a className="dropdown-item" href="#">Buy Propery Reports</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                For Rent
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">House to Rent</a></li>
                                <li><a className="dropdown-item" href="#">Apartment / Flat to Rent</a></li>
                                <li><a className="dropdown-item" href="#">Commercial Property to Rent</a></li>
                                <li><a className="dropdown-item" href="#">Retirement Property to Rent</a></li>
                                <li><a className="dropdown-item" href="#">Developments to Rent</a></li>
                                <li><a className="dropdown-item" href="#">Find Letting Agents</a></li> 
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Developments
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Developments for Sale</a></li>
                                <li><a className="dropdown-item" href="#">Developments to Rent</a></li>
                                <li><a className="dropdown-item" href="#">Retirement Developments for Sale</a></li>
                                <li><a className="dropdown-item" href="#">Retirement Developments to Rent</a></li>                                
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Commercial
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Commercial Property for Sale</a></li>
                                <li><a className="dropdown-item" href="#">Commercial Property to Rent</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Calculators
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Mortgage Bond Calculator</a></li>
                                <li><a className="dropdown-item" href="#">Affordability Calculator</a></li>
                                <li><a className="dropdown-item" href="#">Additional Payment Calculator</a></li>
                                <li><a className="dropdown-item" href="#">Bond and Transfer Calculator</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Advice
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Property News</a></li>
                                <li><a className="dropdown-item" href="#">Property Advice</a></li>
                                <li><a className="dropdown-item" href="#">Selling Your House</a></li>
                                <li><a className="dropdown-item" href="#">Buyer's Guide</a></li>
                                <li><a className="dropdown-item" href="#">Property Tools &amp; Services</a></li>
                                <li><a className="dropdown-item" href="#">Trends and Statistics</a></li>
                                <li><a className="dropdown-item" href="#">Sold House Prices</a></li>
                                <li><a className="dropdown-item" href="#">Buy Property Reports</a></li>
                                <li><a className="dropdown-item" href="#">Find Estate Agents</a></li>
                                <li><a className="dropdown-item" href="#">Find Attorneys</a></li>                            
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                List Privately
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item">Sell Your Property</a></li>
                                <li><a className="dropdown-item">Rent Your Property</a></li>
                            </ul>
                        </li>
                        <li className="nav-item"><NavLink className="nav-link" to='/signin'>Login</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to='/signup'>SignUp</NavLink></li>
                        <li className="nav-item"><a className="nav-link" href="#">Notifications</a></li>
                    </ul>
                
                </div>
            </div>
        </nav>
    );
}

export default Navbar;