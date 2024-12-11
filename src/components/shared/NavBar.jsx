import { Link, NavLink } from 'react-router';
import logo from '../../assets/images/logo.png'

const NavBar = () => {
    return (
        <div className=''>
         <nav className="flex justify-between items-center p-6">
            <div className="">
                <img src={logo} alt="" className="w-16 h-16" />
            </div>
            <div className="">
                <ul className="flex justify-center items-center gap-10">
                    <NavLink to='/'><li className="">Home</li></NavLink>
                </ul>
            </div>
            <div className="flex justify-center items-center gap-6">
                <Link to='/login'><button className="font-semibold">Login</button></Link>
                <Link to='/register'><button className="bg-blue-500 font-semibold text-white px-4 py-2">Register</button></Link>
            </div>
         </nav>   
        </div>
    );
};

export default NavBar;