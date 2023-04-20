import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'

const Description = () => {
  return (
    <div>
      <div id='div'>
        <motion.div id='div1'
          initial={{x:-1000, opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{delay: 0.5, duration: 1}}
        ><h2>Описание</h2></motion.div>
      </div>
      <div id='divball'>
       <motion.div id='div1'>
          <motion.img 
            width={'50%'}
            src='/img/ball1.png' 
            alt='ball' 
            animate={{rotate:360}}
            transition={{delay: 1, duration: 3, repeat:Infinity}}
          />
        </motion.div>
        <motion.div id='div2'
          initial={{opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{delay: 0.5, duration: 1}}
        > <motion.img 
            width={'50%'}
            src='/img/ball1.png' 
            alt='ball' 
            whileTap={{rotate:360}}
            initial={{opacity:1}}
            transition={{duration: 3}}
          />
        </motion.div>
        <motion.div id='div3'
          initial={{opacity:0, scale:0.5}}
          animate={{scale:1, opacity:1}}
          transition={{duration: 1}}
        > <motion.img 
            width={'50%'}
            src='/img/ball1.png' 
            alt='ball' 
            whileHover={{scale:2, transition:{duration:2}}}
            initial={{opacity:1}}
            transition={{duration: 3}}
          />
        </motion.div>
        <motion.div id='div4'
          initial={{opacity:0, scale:0.5}}
          animate={{scale:1, opacity:1}}
          transition={{duration: 1}}
        > <motion.img drag='y'
            width={'50%'}
            src='/img/ball1.png' 
            alt='ball' 
            whileDrag={{scale:1}}
            initial={{opacity:1}}
            transition={{duration: 3}}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Description