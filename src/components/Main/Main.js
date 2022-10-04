import React from 'react';

const Main = () => {
    return (
        <div className='h-[100vh] w-full bg-[#0a192f] text-white'>
           <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-lime-400'>Hi, My Name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Shohag Roy</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]' >I'm a full-stack developer specializing in building (and occasionally designing)
                exceptional digital experience. Currently, I'm focused on building responsive full-stack web application
            </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 font-bold flex items-center hover:bg-lime-400 hover:border-lime-400 hover:text-black justify-center'>View Work
                <span className='group-hover:rotate-90 duration-300'><i class="fa-solid fa-arrow-right-long ml-3 "></i></span>
                 </button>
                
            </div>

           </div>
            
        </div>
    );
};

export default Main;



<i class="fa-solid fa-arrow-right-long"></i>