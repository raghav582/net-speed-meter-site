function Home() {
    return (
        <div className="pt-20 px-10 pb-5">
            <div className="flex w-full">
                <div className="flex flex-col justify-center items-center w-1/2">
                    <div className="text-xl font-semibold">
                        Want to know net speed?
                    </div>
                    <div className='text-xl font-semibold'>
                        Better use Net Speed Meter.
                    </div>
                    <div className='w-1/4'>
                        <a href="">
                            <img className='rounded-xl' src='/assets/playstore_icon.png'></img>
                        </a>
                    </div>
                </div>
                <div className="flex w-1/2 justify-center rounded-xl">
                    <img className='w-1/4 m-2 rounded-xl skew-y-3 -skew-x-3' src='/assets/screenshot_2.jpg'></img>
                    <img className='w-1/4 h-5/6 m-2 mt-auto rounded-xl -skew-y-3 skew-x-3' src='/assets/screenshot_1.jpg'></img>
                </div>
            </div>
        </div>
    );
}

export default Home;