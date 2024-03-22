import BannerImg from '../assets/images/user.png'
import BtnPrimary from './BtnPrimary';

const Banner = () => {
    return (
        <section className="bg-violet-50 dark:dark:text-gray-100 my-24">
            <div className="container flex flex-col justify-between px-6 mx-auto sm:px-12 lg:px-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">One Step Closer To Your <span className='text-violet-400'>Dream Job</span>
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                        <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <BtnPrimary name='Get Start'></BtnPrimary>
                    </div>
                </div>
                <div>
                    <img src={BannerImg} alt="" className="object-contain w-full" />
                </div>
            </div>
        </section>
    );
};

export default Banner;