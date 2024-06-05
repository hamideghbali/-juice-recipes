import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="m-6 mt-10">
            <h2 className="mb-8 font-semibold text-2xl">Trending</h2>
            <div className="flex flex-col lg:flex-row lg:space-x-4">

                {/* First Item */}
                <div className="flex items-start mb-4 lg:w-1/3">
                    {/* Image */}
                    <img src="/assets/Group 23.jpg" alt="" className="w-55 h-auto object-cover" />

                    {/* Text Content */}
                    <div className="flex flex-col ml-4">
                        <h3 className="text-black font-semibold text-lg lg:text-xl leading-tight lg:mt-0">
                            Fruit juices to boost your immune
                        </h3>
                        <p className="text-gray-500 mt-2 lg:mt-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                    </div>
                </div>

                {/* Second Item */}
                <div className="flex items-start mb-4 lg:w-1/3">
                    {/* Image */}
                    <img src="/assets/Group 24.jpg" alt="" className="w-55 h-auto object-cover" />

                    {/* Text Content */}
                    <div className="flex flex-col ml-4">
                        <h3 className="text-black font-semibold text-lg lg:text-xl leading-tight lg:mt-0">
                            Juice variations using avocado
                        </h3>
                        <p className="text-gray-500 mt-2 lg:mt-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                    </div>
                </div>

                {/* Third Item */}
                <div className="flex items-start lg:w-1/3">
                    {/* Image */}
                    <img src="/assets/Group 25.jpg" alt="" className="w-55 h-auto object-cover" />

                    {/* Text Content */}
                    <div className="flex flex-col ml-4">
                        <h3 className="text-black font-semibold text-lg lg:text-xl leading-tight lg:mt-0">
                            Simple recipe strawberry juice
                        </h3>
                        <p className="text-gray-500 mt-2 lg:mt-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
