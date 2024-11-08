'use client'
import { motion } from 'framer-motion'

export default function Welcome() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center space-y-6"
    >
      <motion.h1 
        className="text-4xl md:text-6xl pixel-text text-primary"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Welcome to Amigo!
      </motion.h1>
      
      <motion.p 
        className="text-lg md:text-xl pixel-text"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        Your Pixel Perfect Friend
      </motion.p>
      
      <div className="flex justify-center space-x-4">
        {['✨', '🎮', '🌟'].map((emoji, index) => (
          <motion.span
            key={index}
            className="text-2xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
          >
            {emoji}
          </motion.span>
        ))}
      </div>
    </motion.section>
  )
}
