import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import {ImageSlider}  from "./index";

const Projectmodal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
}) => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "visible";
    }
  }, [isOpen]);

  const content = (
    <div className='fixed top-0 left-0 right-0 z-40 h-[100vh] flex justify-center overflow-y-scroll px-2 sm:px-20 sm:py-5 backdrop-blur' onClick={() => setIsOpen(false)}>
      <button className='z-50 absolute top-5 right-5 text-white text-4xl font-light'>
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className='mx-auto w-full max-w-5xl h-fit overflow-hidden mt-20 sm:mt-0 cursor-auto bg-yellow-300 backdrop-blur-2xl bg-opacity-80 backdrop-filter rounded-md'

      >
        <div className=" sm:py-3 ">
          <ImageSlider imgSrc={imgSrc}/>
        </div>
        <div className='px-10 sm:py-5'>
          <p className="text-3xl sm:text-4xl font-bold text-white">{title}<span className="text-black text-5xl">.</span> </p>
          {
            tech
              .map(item => <span>{item.name}</span>)
              .reduce((acc, x) => acc === null ? [x] : [acc, <span className="text-white"> | </span> , x], null)
          }

          <div className='flex flex-col gap-2 my-5'>{modalContent}</div>

          <div className='mb-5 sm:mb-2'>
            <div className='flex items-center gap-5'>
              <a target="_blank" rel="nofollow" href={code} className="flex gap-2 items-center">
                <AiFillGithub size='2rem' /> source code
              </a>
              {projectLink ? 
              <a target="_blank" rel="nofollow" href={projectLink} className="flex gap-2 items-center">
                <AiOutlineExport size='2rem'/> live project
              </a> : null}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  return ReactDOM.createPortal(content, document.getElementById("root"));
};

export default Projectmodal