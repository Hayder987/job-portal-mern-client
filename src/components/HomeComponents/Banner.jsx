import { motion } from "motion/react";
import banner1 from "../../assets/images/banner-1.png";
import banner2 from "../../assets/images/banner-2.jpg";
import bgBanner from '../../assets/images/bg-banner-2.jpg'

const Banner = () => {
  return (
    <div 
    style={{background:`url(${bgBanner})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundPosition:'center'

   }}
    className="flex flex-col p-6 md:p-12 justify-between items-center md:flex-row gap-12 mb-20">
      {/* text-content */}
      <div className="md:w-1/2 flex flex-col items-center p-6 md:p-10">
        <div className="">
          <motion.h1
            animate={{ y: [100, 0], color: ["#07f1dc", "#0775f1"] }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold md:text-6xl mb-6"
          >
            The Easiest Way to Get Your New Job
          </motion.h1>
          <motion.p
            animate={{ x: [60, 0] }}
            transition={{ duration: 1 }}
            className="mb-8 text-xl text-gray-600"
          >
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </motion.p>
          <div className="flex justify-start ">
            <button className="bg-blue-500 py-3 px-6 text-white font-semibold">
              Get Ready
            </button>
          </div>
        </div>
      </div>
      {/* images */}
      <div className=" md:w-1/2 overflow-hidden">
        <motion.img
          animate={{ y: [0, 80, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
          }}
          src={banner1}
          alt=""
          className="w-full max-w-[450px] rounded-t-[32px] rounded-br-[32px] border-l-8 border-b-8 border-blue-500"
        />
        <motion.img
          animate={{ x: [250, 150, 250] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 2,
            repeatType: "loop",
          }}
          src={banner2}
          alt=""
          className="w-full max-w-[450px] rounded-t-[32px] rounded-br-[32px] border-l-8 border-b-8 border-blue-500"
        />
      </div>
    </div>
  );
};

export default Banner;
