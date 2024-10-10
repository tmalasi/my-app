// import SkillCard from './SkillCard';
// import { skillsData } from '../data/skillsData';


// const SkillsCarousel = () => {
//   return (
//     <div id="skillsCarousel" className="carousel slide" data-ride="carousel">
//       <div className="carousel-inner">
//         {/* This line creates an array based on how many slides you need */}
//         {/* Array.from({ length: ... }) creates an empty array with that many slots, and map((_, index) => ...) iterates over this array to create each carousel item. */}
//         {Array.from({ length: Math.ceil(skillsData.length / 3) }).map((_, index) => (
//           <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
//             <div className="container">
//               <div className="row">
//                 {/* slice of the skills array  */}
//                 {skillsData.slice(index * 3, index * 3 + 3).map((skill, idx) => (
//                   <div className="col-lg-4 col-md-6 mb-4" key={idx}>
//                     <SkillCard skill={skill} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Carousel Controls */}
//       <a className="carousel-control-prev" href="#skillsCarousel" role="button" data-slide="prev">
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="sr-only">Previous</span>
//       </a>
//       <a className="carousel-control-next" href="#skillsCarousel" role="button" data-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="sr-only">Next</span>
//       </a>
//     </div>
//   );
// };

// export default SkillsCarousel;