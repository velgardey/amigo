import Welcome from './components/Welcome'
import TalkButton from './components/TalkButton'
import TimeTracker from './components/TimeTracker'
import ActivityCarousel from './components/ActivityCarousel'
import ParentsQuiz from './components/ParentsQuiz'

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 space-y-12">
      <Welcome />
      
      <div className="flex justify-center">
        <TalkButton />
      </div>

      <section className="pixel-borders p-4 md:p-6 rounded-lg">
        <h2 className="text-xl md:text-2xl pixel-text mb-6 text-center">
          Your Weekly Adventure Log
        </h2>
        <TimeTracker />
      </section>

      <section className="pixel-borders p-4 md:p-6 rounded-lg">
        <h2 className="text-xl md:text-2xl pixel-text mb-6 text-center">
          Fun Activities
        </h2>
        <ActivityCarousel />
      </section>

      <ParentsQuiz />
    </main>
  )
}