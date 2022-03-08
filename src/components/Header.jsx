import { Link } from "react-router-dom";

export default function Header() {
    return (
    <header className="App-header">
        <img className='logo' src="https://catholicchurchbridgend.org.uk/wp-content/uploads/2016/12/News_icon.jpg" alt="logo" height={70} className="header-logo"/>
        <h1 className="header_title">NC News</h1>
        <Link to="/login">
            <p className="login_link">Login</p>
        </Link>
    </header>
    )
}