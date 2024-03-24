import {
  RabbitMq,
  bootstrapImg,
  bundlersImg,
  corsImage,
  cssImg,
  drizzleImg,
  gitImg,
  graphqlImg,
  htmlImg,
  jsImg,
  mongoImg,
  mysqlImg,
  neonImg,
  nextjsImg,
  nodejsImg,
  pgImage,
  reactImg,
  replicationImg,
  socketImg,
  tailwindImg,
  viteImg,
} from "./constants";

const Techs = {
  frontend: {
    title: "Frontend",
    images: [
      {
        src: htmlImg,
        text: {
          heading: "HTML",
          about: "",
        },
      },
      {
        src: cssImg,
        text: {
          heading: "CSS",
          about: "",
        },
      },
      {
        src: jsImg,
        text: {
          heading: "JavaScript",
          about: "",
        },
      },
      {
        src: reactImg,
        text: {
          heading: "ReactJs",
          about: "",
        },
      },
      {
        src: viteImg,
        text: {
          heading: "Vite",
          about: "",
        },
      },
      {
        src: nextjsImg,
        text: {
          heading: "NextJs",
          about: "",
        },
      },
    ],
  },
  backend: {
    title: "Backend",
    images: [
      {
        src: nodejsImg,
        text: {
          heading: "NodeJs",
          about: "",
        },
      },
      {
        src: graphqlImg,
        text: {
          heading: "GraphQL",
          about: "",
        },
      },
      {
        src: socketImg,
        text: {
          heading: "Web-Sockets",
          about: "",
        },
      },
    ],
  },
  databases: {
    title: "Databases",
    images: [
      {
        src: mysqlImg,
        text: {
          heading: "MySql",
          about: "",
        },
      },
      {
        src: mongoImg,
        text: {
          heading: "Mongo Db",
          about: "",
        },
      },
      {
        src: neonImg,
        text: {
          heading: "Neon",
          about: "",
        },
      },
      {
        src: pgImage,
        text: {
          heading: "Postgress",
          about: "",
        },
      },
    ],
  },
  othertools: {
    title: "Other Tools",
    images: [
      {
        src: tailwindImg,
        text: {
          heading: "Tailwind CSS",
          about: "",
        },
      },
      {
        src: bootstrapImg,
        text: {
          heading: "Boot Strap",
          about: "",
        },
      },
      {
        src: RabbitMq,
        text: {
          heading: "Rabbit MQ",
          about: "",
        },
      },
      {
        src: gitImg,
        text: {
          heading: "Git Hub",
          about: "",
        },
      },
      {
        src: drizzleImg,
        text: {
          heading: "Drizzle",
          about: "",
        },
      },
    ],
  },
};

export default Techs;

export const LearningsData = [
  {
    title: "CORS",
    subheading: "Cross Origin Resource Sharing",
    about: [
      "What is CORS all about ?",
      "Why is it necessary for safe browsing ?",
      "What's basic principle of CORS over HTP ?"
    ],
    link: "https://medium.com/@alexesramon0909/cors-513edea837dd",
    img: corsImage,
    readratio:80,
  },
  {
    title: "Replication",
    subheading: "Database Replication",
    about: [
      "Three models of implementing database replications.",
      "Advantages, Disadvantages and techniques to overcome them.",
      "How Database replication is implemented.",
      "Why it is needed in order to scale up your application.",
    ],
    link: "https://medium.com/@alexesramon0909/replication-984fa457aaea",
    img: replicationImg,
    readratio:90,
  },
  {
    title: "Create your own Bundler",
    subheading: "How to Pack modules into one single file",
    about: [
      "Implementation of a Bundler to pack various modules in one file.",
      "Basic implementation of principles that work under the hood of other bundlers.",
      "Investigating Basic principles of how Bundlers works",
    ],
    link: "https://medium.com/@alexesramon0909/create-your-own-bundler-ce7535a92391",
    img: bundlersImg,
    readratio:82,
  },
];
