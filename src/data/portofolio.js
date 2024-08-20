// Portofolio data.
// Note: Here we are getting data from a js file, but in a different Portofolio I'll be fetching these portofolio from some srt of APIs.

const portofolio = [
  {
    id: 1,
    title: "Simple React Chat",
    category:
      "Stack technologies: Node.js (express), React redux, Socket IO, Mongodb, Bootstrap 4.0 (View)",
    img: require("@/assets/images/portofolio/react-chat.png"),
  },
  {
    id: 2,
    title: "Phone Book Apps CRUD",
    category:
      "Stack technologies: Node.js (express), React redux, Mongodb, Bootstrap 4.0 (View)",
    img: require("@/assets/images/portofolio/phonebook.png"),
  },
  {
    id: 3,
    title: "Client Management System",
    category:
      "Stack technologies: Node.js (express), React redux, JWT, Chart JS, Bootstrap 4.0 (View)",
    img: require("@/assets/images/portofolio/cms.png"),
  },
];

export default portofolio;
