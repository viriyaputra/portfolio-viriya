import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">certificates</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        {/* Certificate 1 */}
        <Card
          title="Alibaba Cloud"
          des="Alibaba Cloud Certified Associate (Cloud Computing)"
          imageUrl="/alicloudcertif.jpg"
          link="https://xuecdn2.aliyunedu.net/img_1b6b22eee30d288ce42cd6f0e551e7ca.jpg"
        />

        {/* Certificate 2 */}
        <Card
          title="NVIDIA"
          des="Fundamentals of Deep Learning"
          imageUrl="/nvidiacertif.jpg"
          link="https://learn.nvidia.com/certificates?id=3a2d5bd050ff458890bfdbce950de7b1"
        />

        {/* Certificate 3 */}
        <Card
          title="Udemy"
          des="Software Testing Masterclass (2022) - From Novice to Expert"
          imageUrl="/udemytestcertif.jpg"
          link="https://www.udemy.com/certificate/UC-2d187e9d-5724-48a2-8052-02cfe338af1c/"
        />
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  des,
  imageUrl,
  link,
}: {
  title: string;
  des: string;
  imageUrl: string;
  link: string;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full max-w-sm h-[35rem] rounded-3xl overflow-hidden mx-auto p-4 border border-black/[0.2] dark:border-white/[0.2] transition-all duration-500"
      style={{
        background: hovered
          ? `url(${imageUrl}) no-repeat center center / contain`
          : "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center transition-opacity duration-500">
        {!hovered ? (
          <>
            <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
            <p className="text-sm text-slate-300">{des}</p>
          </>
        ) : null}
      </div>

      {/* Animate on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Make sure the image fits and is not cut off */}
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </a>
  );
};
