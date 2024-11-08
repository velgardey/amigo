export default function ChatBubble() {
  return (
    <div className="pixel-borders bg-white text-black p-4 rounded-lg relative">
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-0 h-0 
                    border-l-[8px] border-l-transparent
                    border-b-[8px] border-b-white
                    border-r-[8px] border-r-transparent">
      </div>
      <p className="text-center pixel-text">How did your day go? 😊</p>
    </div>
  )
} 