import './Header.css';


const Header = ()=>{


    return(
        <div>
        <div class="header">
        <h2>Folio Project</h2>
        <p>Scroll down to see the Projects</p>
        </div>

        <div id="navbar">
        <a class="active" href="">Home</a>
        <a href="active">Projects</a>
        <a href="active">Programs</a>
        <a href="active">Contact</a>
        </div>

        </div>
    )
}
export default Header;