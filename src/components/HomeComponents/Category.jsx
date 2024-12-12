import manegeIcon from '../../assets/icons/managemant.png'
import groupIcon from '../../assets/icons/groups-64.png'
import marketingIcon from '../../assets/icons/marketing-96.png'
import payment from '../../assets/icons/payment-64.png'
import retail from '../../assets/icons/retail-64.png'
import webDevelopment from '../../assets/icons/web-design-64.png'

const Category = () => {
    return (
        <div>
          <h1 className="text-4xl font-bold text-center mb-6">Jobs of the day</h1> 
          <p className="text-xl font-medium text-center text-gray-600 mb-10">Search and connect with the right candidates faster.</p> 
          <div className="mb-16 p-4 md:max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <button className="flex items-center gap-2 border rounded-xl py-2 px-4">
                <img src={manegeIcon} alt="" className="w-10 h-10 " />
                <span className="">Management</span>
            </button>
            <button className="flex items-center gap-2 border rounded-xl py-2 px-4">
                <img src={marketingIcon} alt="" className="w-10 h-10 " />
                <span className="">Marketing</span>
            </button>
            <button className="flex items-center gap-2 border rounded-xl py-2 px-4">
                <img src={groupIcon} alt="" className="w-10 h-10 " />
                <span className="">Human Resource</span>
            </button>
            <button className="flex items-center gap-2 border rounded-xl py-2 px-4">
                <img src={payment} alt="" className="w-10 h-10 " />
                <span className="">Finance</span>
            </button>
            <button className="flex items-center gap-2 border rounded-xl py-2 px-4">
                <img src={retail} alt="" className="w-10 h-10 " />
                <span className="">Retail</span>
            </button>
            <button className="flex items-center gap-2 border rounded-xl py-2 px-4">
                <img src={webDevelopment} alt="" className="w-10 h-10 " />
                <span className="">Web-development</span>
            </button>
          </div>
        </div>
    );
};

export default Category;