import Footer from "../Components/Footer";
import FoodComaLogo from "../assets/Images/FoodComaLogo.png"

function Layout({ children }) {
    return (
        <div>

            <nav className="flex items-center justify-around h-16 text-[#6B7280] font-mono border-none shadow-md">

                <div className="flex items-center justify-center">
                    <p>Pizza App</p>
                    <img width={70} height={70} src={FoodComaLogo} alt="Pizza logo" />
                </div>

                <div className='hidden md:block'>
                    <ul className='flex gap-4'>

                        <li className='hover:text-[#FF9110]'>
                            { ' ' }
                            <p>Menu {' '}</p>
                        </li>

                        <li className='hover:text-[#FF9110]'>
                            { ' ' }
                            <p>Services {' '}</p>
                        </li>

                        <li className='hover:text-[#FF9110]'>
                            { ' ' }
                            <p>About {' '}</p>
                        </li>

                    </ul>
                </div>

            </nav>

                {children}

            <Footer />
        </div>  
    )
}

export default Layout;