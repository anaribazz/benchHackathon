import './Header.scss';
import logo from '../../Assets/Images/bench.png';

function Header () {
    return(
        <div className='Header'>
            <img className='Header__logo' src={logo}/>
        </div>
    )
}

export default Header;