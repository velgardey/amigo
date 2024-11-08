'use client'
import { motion } from 'framer-motion'

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const activities = [
  { name: 'Reading', color: 'bg-[#FF6B6B]' },
  { name: 'Gaming', color: 'bg-[#4ECDC4]' },
  { name: 'Learning', color: 'bg-[#FFE66D]' }
]

// Mock data - in real app this would come from a database
const mockData = days.map(day => ({
  day,
  hours: activities.map(() => Math.floor(Math.random() * 4) + 1)
}))

export default function TimeTracker() {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[768px]">
        <div className="grid grid-cols-7 gap-4">
          {days.map((day, dayIndex) => (
            <div key={day} className="space-y-4">
              <h3 className="text-center font-pixel text-sm">{day}</h3>
              <div className="h-64 relative bg-gray-800 rounded-lg pixel-borders overflow-hidden">
                {activities.map((activity, actIndex) => {
                  const height = mockData[dayIndex].hours[actIndex] * 25;
                  return (
                    <motion.div
                      key={activity.name}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: actIndex * 0.2 }}
                      className={`absolute w-full ${activity.color}`}
                      style={{
                        bottom: `${actIndex * 33.33}%`,
                        height: `${height}%`,
                        borderTop: '2px solid rgba(0,0,0,0.2)'
                      }}
                    />
                  )}
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-6">
          {activities.map((activity) => (
            <div key={activity.name} className="flex items-center gap-2">
              <div className={`w-4 h-4 ${activity.color} pixel-borders`} />
              <span className="text-xs font-pixel">{activity.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 