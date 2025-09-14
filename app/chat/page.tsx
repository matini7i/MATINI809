"use client"
import { Send, Bot, User, ArrowLeft, Phone, Mail, MapPin } from "lucide-react"
import { useState } from "react"

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      message: "سلام! من دستیار هوش مصنوعی تیم طراحی اینفوگرافیک هستم. چطور می‌تونم کمکتون کنم؟",
      time: "الان",
    },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const quickReplies = ["قیمت طراحی سایت چقدره؟", "نمونه کارهاتون رو ببینم", "چطور سفارش بدم؟", "شماره تماستون چیه؟"]

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: "user",
        message: inputMessage,
        time: "الان",
      }
      setMessages([...messages, newMessage])
      setInputMessage("")

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          type: "bot",
          message: getBotResponse(inputMessage),
          time: "الان",
        }
        setMessages((prev) => [...prev, botResponse])
      }, 1000)
    }
  }

  const getBotResponse = (userMessage: string) => {
    if (userMessage.includes("قیمت") || userMessage.includes("هزینه")) {
      return "قیمت طراحی سایت از ۵ میلیون تومان شروع میشه. برای اطلاعات دقیق‌تر با شماره ۰۹۱۲-۳۴۵-۶۷۸۹ تماس بگیرید."
    } else if (userMessage.includes("نمونه کار")) {
      return "نمونه کارهای ما رو می‌تونید در همین سایت ببینید. بیش از ۵۰۰ پروژه موفق انجام دادیم!"
    } else if (userMessage.includes("سفارش")) {
      return "برای ثبت سفارش می‌تونید از طریق دکمه 'درخواست مشاوره رایگان' اقدام کنید یا با ما تماس بگیرید."
    } else if (userMessage.includes("شماره") || userMessage.includes("تماس")) {
      return "شماره تماس ما: ۰۹۱۲-۳۴۵-۶۷۸۹\nایمیل: info@infographicdesign.ir"
    } else {
      return "ممنون از پیامتون! تیم ما در اسرع وقت پاسخ شما رو خواهد داد. برای تماس فوری: ۰۹۱۲-۳۴۵-۶۷۸۹"
    }
  }

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 shadow-2xl">
        <div className="flex items-center gap-4">
          <button
            onClick={() => window.close()}
            className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-white font-bold text-lg" dir="rtl">
              دستیار هوش مصنوعی
            </h1>
            <p className="text-white/80 text-sm" dir="rtl">
              آنلاین - پاسخگویی ۲۴/۷
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-lg ${
                msg.type === "user"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : "bg-white/90 backdrop-blur-sm text-gray-800 border border-white/20"
              }`}
            >
              <div className="flex items-start gap-2">
                {msg.type === "bot" && <Bot className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />}
                <div className="flex-1">
                  <p className="text-sm leading-relaxed" dir="rtl">
                    {msg.message}
                  </p>
                  <p className={`text-xs mt-1 ${msg.type === "user" ? "text-white/70" : "text-gray-500"}`}>
                    {msg.time}
                  </p>
                </div>
                {msg.type === "user" && <User className="w-5 h-5 text-white/80 mt-0.5 flex-shrink-0" />}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Replies */}
      <div className="p-4 border-t border-white/10">
        <p className="text-white/80 text-sm mb-3 text-center" dir="rtl">
          پیشنهادات سریع:
        </p>
        <div className="grid grid-cols-2 gap-2">
          {quickReplies.map((reply, index) => (
            <button
              key={index}
              onClick={() => handleQuickReply(reply)}
              className="bg-white/10 backdrop-blur-sm text-white text-sm p-3 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 text-right"
              dir="rtl"
            >
              {reply}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="flex gap-3">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="پیام خود را بنویسید..."
            className="flex-1 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 px-4 py-3 rounded-2xl border border-white/20 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
            dir="rtl"
          />
          <button
            onClick={handleSendMessage}
            className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 backdrop-blur-sm p-4 border-t border-white/10">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="text-white">
            <Phone className="w-5 h-5 mx-auto mb-1" />
            <p className="text-xs">۰۹۱۲-۳۴۵-۶۷۸۹</p>
          </div>
          <div className="text-white">
            <Mail className="w-5 h-5 mx-auto mb-1" />
            <p className="text-xs">info@infographicdesign.ir</p>
          </div>
          <div className="text-white">
            <MapPin className="w-5 h-5 mx-auto mb-1" />
            <p className="text-xs" dir="rtl">
              تهران، ایران
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
