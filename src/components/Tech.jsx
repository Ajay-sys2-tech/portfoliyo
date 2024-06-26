import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


const Tech = () => {
  
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28 " key={technology.name}>
        <BallCanvas icon={technology.icon} rotationSpeed={getRandomInt(2, 4) * 1}/>
        </div>
      ))}
    </div>
  )
};

export default SectionWrapper(Tech, "");
