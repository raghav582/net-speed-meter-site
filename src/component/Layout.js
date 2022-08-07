import Home from './Home';
import PrivacyPolicy from './PrivacyPolicy';

function Layout() {
    return (
        <div className='bg-'>
            <nav id="navbar" className="bg-custom-1 p-5 mt-0 relative w-full z-50 top-0 shadow-md">
                <div className='container mx-auto flex flex-wrap items-center'>
                    <div className="flex justify-start w-1/3 items-center md:gap-x-12">
                        <img src='/assets/icon2crop.png' className="w-10"></img>
                    </div>
                    <div className="flex justify-center w-1/3">
                        <div className='text-2xl text-white font-bold'>Net Speed Meter</div> 
                    </div> 
                    <div className="flex justify-end w-1/3 items-center md:gap-x-12">
                        <a href='#privacy-policy' className="block rounded-lg py-1 px-2 text-sm text-white hover:bg-slate-100 hover:text-slate-900">Privacy Policy</a>
                    </div>
                </div>
            </nav>
            <div id="home"><Home /></div>
            <div id="privacy-policy"><PrivacyPolicy /></div>
            <a href='#navbar' className='fixed z-50 bottom-5 right-5'>
                <button className='h-10 w-10 bg-custom-1 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-auto text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                </button>
            </a>
        </div >
    );
}

export default Layout;