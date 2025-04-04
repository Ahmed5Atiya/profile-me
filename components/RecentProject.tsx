import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const RecentProject = () => {
  return (
    // <div className="py-20">
    //   <h1 className="heading ">
    //     {" "}
    //     A Small Selection Project <br />
    //     <span className="my-3 text-purple">Recent Project</span>
    //   </h1>
    //   <div className="   flex flex-wrap items-center justify-center p-4 gap-16 mt-10 ">
    //     {projects.map(({ id, title, des, img, iconLists }) => (
    //       <div
    //         key={id}
    //         className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] "
    //       >
    //         <PinContainer
    //           title="/ui.aceternity.com"
    //           href="https://twitter.com/mannupaaji"
    //         >
    //           <div className=" flex-col flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
    //             <div className="py-3 px-2  ">
    //               <img src={img} alt={img} className="w-full object-contain" />
    //             </div>
    //             <div className="flex flex-col gap-2 my-4  font-mono ">
    //               <h2 className="text-slate-100 text-[18px]">{title}</h2>
    //               <p className="text-slate-500 text-[15px]">{des}</p>
    //             </div>
    //             <div className="flex flex-col gap-3 items-center mt-4 mb-3  w-full py-2">
    //               <div className="flex items-center ">
    //                 {iconLists.map((item, index) => (
    //                   <div
    //                     className="w-9 h-9 rounded-full py-1 px-2 bg-black-200 flex items-center justify-center"
    //                     key={index}
    //                   >
    //                     <img
    //                       src={item}
    //                       alt={item}
    //                       className="w-[25px] h-[25px]"
    //                     />
    //                   </div>
    //                 ))}
    //               </div>
    //               <h3 className="w-full bg-black-100 border border-purple py-3 px-2 text-center font-mono text-slate-500">
    //                 Show More
    //               </h3>
    //             </div>
    //             {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
    //           </div>
    //         </PinContainer>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-mono text-gray-200 lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-lg font-mono text-gray-400  text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center flex-col gap-3 justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center border border-purple py-4 px-3 w-full">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProject;
