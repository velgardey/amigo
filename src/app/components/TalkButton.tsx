'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ChatBubble from './ChatBubble'

export default function TalkButton() {
  const [showChat, setShowChat] = useState(false)

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="pixel-borders bg-primary text-white px-8 py-4 rounded-lg text-xl md:text-2xl font-pixel pixel-text"
        onClick={() => setShowChat(true)}
      >
        Let's Talk!
      </motion.button>

      <AnimatePresence>
        {showChat && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setShowChat(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed inset-4 md:inset-10 z-50 bg-[#2f2f2f] pixel-borders rounded-lg flex items-center justify-center"
            >
              <ChatBubble />
              <button
                onClick={() => setShowChat(false)}
                className="absolute top-4 right-4 text-white font-pixel pixel-text px-4 py-2 pixel-borders hover:opacity-80"
              >
                ✕
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}