import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";

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
      body.style.overflowY = "scroll";
    }
  }, [isOpen]);

  const content = (
    <div className='fixed top-0 left-0 right-0 z-50 h-[100vh] flex justify-center overflow-y-scroll px-20 py-5 backdrop-blur' onClick={() => setIsOpen(false)}>
      <button className='absolute top-5 right-5 text-white'>
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className='w-full max-w-4xl h-fit overflow-hidden cursor-auto rounded-3xl bg-slate-400'
      >
        <img
          className='h-96 w-full'
          src={imgSrc}
          alt={`An image of the ${title} project.`}
        />
        <div className='p-10'>
          <h4 className="text-3xl">{title}</h4>
          <div className='flex flex-wrap gap-5 text-lg'>{tech.join(" - ")}</div>

          <div className='flex flex-col gap-5'>{modalContent}</div>

          <div className='mt-10'>
            <div className='flex items-center gap-5'>
              <a target="_blank" rel="nofollow" href={code} className="flex gap-2 items-center">
                <AiFillGithub size='2rem' /> source code
              </a>
              <a target="_blank" rel="nofollow" href={projectLink} className="flex gap-2 items-center">
                <AiOutlineExport size='2rem'/> live project
              </a>
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