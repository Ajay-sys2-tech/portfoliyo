import {Tilt} from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { link as linkIcon} from '../assets';
import { SectionWrapper } from '../hoc';
import { achievements } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


const AchievementCard  = ({ index, title, image, link}) => {
  return (
    <motion.div
      variants={fadeIn("down", "tween", index  * 0.5, 0.75)}
    >
      <Tilt 
        options={{
          max: 45,
          scale:1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt={title}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card_image_hover'>
            <div
              onClick={() => window.open(link, "_blank")}
              className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img 
                src={linkIcon}
                alt={title}
                className='w-2/3 h-2/3 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{title}</h3>
         
        </div>
      </Tilt>
    </motion.div>
  )
}

const Achievements = () => {
  return (
    <>
       <motion.div 
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>
            What I have achieved    
        </p>
        <h2 className={styles.sectionHeadText}>Achievements.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {achievements.map((achievement, index) => (
          <AchievementCard 
            key={`achievement-${index}`}
            index={index}
            {...achievement}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Achievements, "");