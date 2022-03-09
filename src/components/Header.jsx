import { Link } from "react-router-dom";

export default function Header() {
    return (
    <header className="App-header">
        <Link to='/'>
        <img className='header-logo' src="https://catholicchurchbridgend.org.uk/wp-content/uploads/2016/12/News_icon.jpg" alt="logo"/>
        </Link>
        <h1 className="header_title">NC News</h1>
        <Link to="/login">
            <p className="login_link">Login</p>
        </Link>
    </header>
    )
}