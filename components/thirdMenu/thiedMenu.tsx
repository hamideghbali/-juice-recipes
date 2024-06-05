import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ThirdMenu: React.FC = () => {
  return (
    <div className="mr-4 pl-10 mt-7 lg:ml-20" >
      <h2 className="text-xl font-bold mb-4">Popular</h2>
      <div className="flex flex-row flex-wrap lg:grid lg:grid-cols-3 lg:gap-4 ">


        {/* Accordion and Content Container */}
        <div className="flex flex-col justify-evenly lg:w-1/2 xl:w-1/3 lg:mr-8">
          <Accordion style={{ maxWidth: '488px', width: '100%' }} type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-2xl sm:text-3xl leading-tight sm:leading-tight text-left">
                Fruit juices to boost your immune
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-2xl sm:text-3xl leading-tight sm:leading-tight text-left">
                Juice variations using avocado
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-2xl sm:text-3xl leading-tight sm:leading-tight text-left">
                Simple recipe strawberry juice
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Image and Content */}
        <div className="flex flex-col lg:w-1/2">
          <div className=" h-72 sm:h-auto w-full">
            <img
              src="/assets/Group 46 (3).jpg"
              alt="Image Description"
              className="w-full h-full object-cover pb-3"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <h3 className="text-cyan-400">Fruit</h3>
              <p className="text-gray-300 ml-auto">5 mins read</p>
            </div>
            <h2 className="font-semibold text-lg">Simple Juice Recipes to boost your immune system</h2>
            <p className="text-gray-700 pb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex items-center gap-2 mb-8">
            <div className="h-6 w-6 rounded-full bg-teal-400"></div>
            <span className="text-teal-300 font-semibold">Your Name</span>
            <p className="text-gray-300 ml-auto">2 days ago</p>
          </div>
        </div>
        <img src="/assets/Video Card.jpg" alt="orange" />
      </div>
    </div>
  );
};

export default ThirdMenu;
