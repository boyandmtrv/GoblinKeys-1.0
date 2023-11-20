import { Link } from "react-router-dom";

const NavLinks = () => {
    const linkStyle =
        "flex items-center justify-center border-2 border-black rounded-md border-b-4 border-l-4 text-[#D1D0C5] w-16 h-16 p-2";

    return (
        <>
            <Link to='/' className={linkStyle}>
                <i className='bx bx-home'></i>
            </Link>
            <Link to='/play' className={linkStyle}>
                <i className='bx bxs-keyboard'></i>
            </Link>
            <Link to='/create' className={linkStyle}>
                <i class='bx bxs-plus-circle'></i>
            </Link>
            <Link to='/edit' className={linkStyle}>
                <i className='bx bxs-edit-alt'></i>
            </Link>
            <Link to='/' className={linkStyle}>
                <i className='bx bxs-dashboard'></i>
            </Link>
            <Link to='/users/login' className={linkStyle}>
                <i className='bx bx-user-check'></i>
            </Link>
            <Link to='/users/register' className={linkStyle}>
                <i className='bx bx-user-plus'></i>
            </Link>
        </>
    );
};

export default NavLinks;
