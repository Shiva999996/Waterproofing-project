// ProjectData.js
import roof from "../../assets/images/bathroom.jpg";
import terrace from "../../assets/images/terrace.jpg";
import wall from "../../assets/images/watertank.jpg";
import watertank from "../../assets/images/basement.jpg";

const projects = [
  {
    id: 1,
    title: "Bathroom Waterproofing",
    location: "Pune",
    image: roof,
    description: "Complete Bathroom waterproofing treatment for residential building."
  },

  {
    id: 2,
    title: "Terrace Waterproofing",
    location: "Mumbai",
    image: terrace,
    description: "Terrace leakage repair using advanced waterproof coating."
  },

  {
    id: 3,
    title: "Water tank Waterproofing",
    location: "Andheri East, Mumbai",
    image: wall,
    description: "Water tank Waterproofing"
  },

  {
    id: 4,
    title: "Basement Waterproofing",
    location: "Kalyan",
    image: watertank,
    description: "Basement waterproofing and treatment."
  }
];

export default projects;