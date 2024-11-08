'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const activities = [
  {
    title: 'Match the Yoga Posture',
    description: 'Mirror the yoga poses to earn points!',
    image: '/images/activity-placeholders/yoga.png',
    color: 'bg-[#FF6B6B]'
  },
  {
    title: 'Find that Utensil',
    description: 'Snap pictures of household items matching clues!',
    image: '/images/activity-placeholders/utensil.png',
    color: 'bg-[#4ECDC4]'
  },
  {
    title: 'Friend Leaderboards',
    description: 'See how you rank among your friends!',
    image: '/images/activity-placeholders/leaderboard.png',
    color: 'bg-[#FFE66D]'
  }
]
export default function ActivityCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="pixel-borders p-4"
    >
      {activities.map((activity, index) => (
        <SwiperSlide key={index}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`${activity.color} p-4 rounded-lg pixel-borders h-full`}
          >
            <div className="aspect-video bg-gray-800 mb-4 pixel-borders overflow-hidden">
              {/* Placeholder image - in production, use next/image */}
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${activity.image})` }}
              />
            </div>
            <h3 className="text-lg pixel-text mb-2">{activity.title}</h3>
            <p className="text-sm pixel-text opacity-80">{activity.description}</p>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
} 