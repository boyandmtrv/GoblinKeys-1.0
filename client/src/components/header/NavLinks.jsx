import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

const NavLinks = () => {

    const {
        isAuth,
    } = useContext(AuthContext);

    const linkStyle =
        "flex items-center justify-center border-2 border-black rounded-md border-b-4 border-l-4 text-[#D1D0C5] w-16 h-16 p-2";

    return (
        <>
            <Link to='/' className={linkStyle}>
                <i className='bx bx-home'></i>
            </Link>
            <Link to='/games' className={linkStyle}>
                <i className='bx bxs-dashboard'></i>
            </Link>
            {isAuth && (
                <div className="auth-user">
                    <Link to='/profile' className={linkStyle}>
                        <i className='bx bxs-keyboard'></i>
                    </Link>
                    <Link to='/games/create' className={`${linkStyle} mt-5`}>
                        <i className='bx bxs-plus-circle'></i>
                    </Link>
                    <Link to='/users/logout' className={`${linkStyle} mt-5`}>
                        <i className='bx bxs-log-out'></i>
                    </Link>
                </div>
            )}

            {!isAuth && (
                <div className="guest-user">
                    <Link to='/users/login' className={linkStyle}>
                        <i className='bx bx-user-check'></i>
                    </Link>
                    <Link to='/users/register' className={`${linkStyle} mt-5`}>
                        <i className='bx bx-user-plus'></i>
                    </Link>
                </div>
            )}
        </>
    );
};

export default NavLinks;
