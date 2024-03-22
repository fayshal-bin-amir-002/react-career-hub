import Img1 from '../assets/icons/accounts.png'
import Img2 from '../assets/icons/creative.png'
import Img3 from '../assets/icons/marketing.png'
import Img4 from '../assets/icons/chip.png'

const CategoryList = () => {
    return (
        <section className="mb-24">
            <div className="text-center w-1/2 mx-auto mb-12">
                <h1 className="text-5xl font-extrabold mb-4">Job Category List</h1>
                <p className="font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-4 gap-6">
                <div className="bg-violet-50 p-10 rounded-lg">
                    <img src={Img1} className="mb-8 p-2 bg-violet-200 rounded-lg" />
                    <h3 className="mb-2 font-bold text-xl">Account & Finance</h3>
                    <p className="font-medium opacity-60">300 Jobs Available</p>
                </div>
                <div className="bg-violet-50 p-10 rounded-lg">
                    <img src={Img2} className="mb-8 p-2 bg-violet-200 rounded-lg" />
                    <h3 className="mb-2 font-bold text-xl">Creative Design</h3>
                    <p className="font-medium opacity-60">100+ Jobs Available</p>
                </div>
                <div className="bg-violet-50 p-10 rounded-lg">
                    <img src={Img3} className="mb-8 p-2 bg-violet-200 rounded-lg" />
                    <h3 className="mb-2 font-bold text-xl">Marketing & Sales</h3>
                    <p className="font-medium opacity-60">150 Jobs Available</p>
                </div>
                <div className="bg-violet-50 p-10 rounded-lg">
                    <img src={Img4} className="mb-8 p-2 bg-violet-200 rounded-lg" />
                    <h3 className="mb-2 font-bold text-xl">Engineering Job</h3>
                    <p className="font-medium opacity-60">224 Jobs Available</p>
                </div>
            </div>
        </section>
    );
};

export default CategoryList;