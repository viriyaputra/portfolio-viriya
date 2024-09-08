export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I am dedicated to lifelong learning and excited to integrate new insights into my work",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I am adapted to working and collaborating with others remotely",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast fueled by a curiosity for learning",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Constantly expanding my knowledge by staying updated on the tech",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Customer Shopping Trend Dashboard",
    des: "Dashboard created using Tableau for visualization of customer shopping trend",
    img: "/dashboard1.jpg",
    iconLists: ["/tableau.svg"],
    link: "https://public.tableau.com/app/profile/viriyaputra.lawijaya/viz/CustomerShoppingTrendAnalysis_17257208642240/Dashboard1?publish=yes",
  },
  {
    id: 2,
    title:
      "Evaluating YOLOv8, YOLOv6 3.0, and Gold-YOLO with WBF Ensemble Method for Enhancing Fruit Spoilage Detection",
    des: "Evaluation of three different machine learning model combined with an ensemble method for fruit spoilage detection",
    img: "/rotten-fruit-detection.svg",
    iconLists: ["/python.svg", "/colab.svg"],
    link: "https://github.com/viriyaputra/rotten-fruit-detection",
  },
  {
    id: 3,
    title: "Hybrid Model for Detecting Indonesian Hoax News",
    des: "Utilizing the IndoBERT and LSTM Model to create a hybrid model for detecting hoax news.",
    img: "/indobert-lstm-hoax-detection.svg",
    iconLists: ["/python.svg", "/colab.svg"],
    link: "https://github.com/viriyaputra/indobert-lstm-hoax-detection",
  },
  {
    id: 4,
    title: "DOTO 2 Website",
    des: "Front End website creation for learning HTML CSS JS with DOTA 2 as reference",
    img: "/doto2.svg",
    iconLists: ["/html5.svg", "/css.svg", "/javascript.svg"],
    link: "https://viriyaputra.github.io/projekhciviriya/",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Quality Assurance Intern",
    desc: "Perform testing for Flight division in Online Travel Agency (tiket.com)",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Quality Assurance Engineer",
    desc: "Perform testing in different projects according to the client needs in IT Solution company (Wistkey)",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/viriyaputra-lawijaya/",
  },
  {
    id: 2,
    img: "/git.svg",
    url: "https://github.com/viriyaputra",
  },
];
