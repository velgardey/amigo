 'use client'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function ParentsQuiz() {
  const router = useRouter()

  return (
    <section className="pixel-borders p-4 md:p-6 rounded-lg">
      <h2 className="text-xl md:text-2xl pixel-text mb-6 text-center">
        For Parents
      </h2>
      <div className="flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="pixel-borders bg-secondary text-white px-8 py-4 rounded-lg text-lg md:text-xl font-pixel pixel-text"
          onClick={() => router.push('/parents-quiz')}
        >
          Take Parent Assessment Quiz
        </motion.button>
      </div>
      <p className="text-center mt-4 text-sm font-pixel opacity-80">
        Help us understand your child better
      </p>
    </section>
  )
}