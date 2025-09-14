"use client"
import { Button } from "@/components/ui/button"
import {
  Users,
  Edit3,
  ChevronLeft,
  ChevronRight,
  Star,
  Heart,
  MessageCircle,
  Share2,
  Camera,
  Play,
  MoreHorizontal,
  Settings,
  User,
  LogOut,
  Sparkles,
  Crown,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Twitter,
  Youtube,
  X,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function PersianMobileApp() {
  const [currentSection, setCurrentSection] = useState(0)
  const [showDropdown, setShowDropdown] = useState(false)
  const [currentWebsite, setCurrentWebsite] = useState(0)
  const [currentApp, setCurrentApp] = useState(0)
  const [currentSatisfaction, setCurrentSatisfaction] = useState(0)
  const [showChat, setShowChat] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWebsite((prev) => (prev + 1) % (websitePortfolio.length - 1))
      setCurrentApp((prev) => (prev + 1) % (appPortfolio.length - 1))
      setCurrentSatisfaction((prev) => (prev + 1) % satisfactionData.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const websitePortfolio = [
    { id: 1, image: "/modern-website-design-green-theme.jpg", title: "پنل ادمین فروشگاهی" },
    { id: 2, image: "/modern-website-design-teal-theme.jpg", title: "داشبورد مدیریت" },
    { id: 3, image: "/admin-dashboard-blue-theme.jpg", title: "سیستم مدیریت محتوا" },
    { id: 4, image: "/admin-panel-dark-theme.jpg", title: "پنل کنترل پیشرفته" },
  ]

  const appPortfolio = [
    {
      id: 1,
      color: "from-purple-600 to-pink-600",
      icon: Heart,
      title: "اپ استوری عاشقانه",
      image: "/romantic-story-app-interface.jpg",
    },
    {
      id: 2,
      color: "from-blue-600 to-cyan-600",
      icon: Share2,
      title: "شبکه اجتماعی",
      image: "/social-media-app-interface.png",
    },
    {
      id: 3,
      color: "from-green-600 to-emerald-600",
      icon: Camera,
      title: "استوری طبیعت",
      image: "/nature-story-app-interface.jpg",
    },
    {
      id: 4,
      color: "from-orange-600 to-red-600",
      icon: Sparkles,
      title: "استوری هنری",
      image: "/art-story-app-interface.jpg",
    },
  ]

  const satisfactionData = [
    {
      id: 1,
      name: "احمد محمدی",
      rating: 5,
      comment: "کیفیت فوق‌العاده و سرعت بالا",
      image: "/happy-customer-portrait.png",
    },
    {
      id: 2,
      name: "فاطمه احمدی",
      rating: 5,
      comment: "بهترین تیم طراحی که دیدم",
      image: "/satisfied-female-customer.jpg",
    },
    {
      id: 3,
      name: "علی رضایی",
      rating: 5,
      comment: "حرفه‌ای و دقیق در کار",
      image: "/professional-customer-testimonial.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Dark Matte Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-slate-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-slate-600/15 rounded-full blur-[4rem]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-slate-800/10 rounded-full blur-[6rem]"></div>
      </div>

      <div className="w-full max-w-sm mx-auto relative z-10">
        {/* Mobile Frame with Dark Matte Theme */}
        <div className="bg-slate-800 rounded-3xl shadow-2xl overflow-hidden relative border border-slate-700">
          {/* Status Bar */}
          <div className="!bg-indigo-600 px-4 py-2">
            <div className="flex items-center justify-between !text-white text-sm font-medium">
              <span className="!text-white">9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
              <span className="text-xs !text-white">LiOR</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 bg-white rounded-sm opacity-90"></div>
                <div className="w-1 h-3 bg-white rounded-sm"></div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 px-6 py-8 border-b border-slate-700 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-2 left-4 w-16 h-16 bg-white/20 rounded-full blur-lg animate-pulse"></div>
              <div className="absolute bottom-2 right-4 w-12 h-12 bg-pink-300/40 rounded-full blur-md animate-pulse delay-1000"></div>
            </div>

            <div className="flex items-center justify-between relative z-10">
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/30"
                >
                  <MoreHorizontal className="w-6 h-6 text-white" />
                </button>
                {showDropdown && (
                  <div className="absolute top-full left-0 mt-3 w-56 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-indigo-100/50 z-50 overflow-hidden">
                    <div className="py-3">
                      <button
                        className="w-full px-6 py-4 text-right flex items-center gap-4 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-200"
                        dir="rtl"
                        onClick={() => setShowDropdown(false)}
                      >
                        <Settings className="w-5 h-5 text-indigo-600" />
                        <span className="text-base font-bold text-gray-800">تنظیمات پیشرفته</span>
                      </button>
                      <button
                        className="w-full px-6 py-4 text-right flex items-center gap-4 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-200"
                        dir="rtl"
                        onClick={() => setShowDropdown(false)}
                      >
                        <User className="w-5 h-5 text-indigo-600" />
                        <span className="text-base font-bold text-gray-800">پروفایل کاربری</span>
                      </button>
                      <button
                        className="w-full px-6 py-4 text-right flex items-center gap-4 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-200"
                        dir="rtl"
                        onClick={() => setShowDropdown(false)}
                      >
                        <Crown className="w-5 h-5 text-yellow-600" />
                        <span className="text-base font-bold text-gray-800">اشتراک طلایی</span>
                      </button>
                      <button
                        className="w-full px-6 py-4 text-right flex items-center gap-4 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-200"
                        dir="rtl"
                        onClick={() => setShowDropdown(false)}
                      >
                        <MessageCircle className="w-5 h-5 text-green-600" />
                        <span className="text-base font-bold text-gray-800">پشتیبانی ۲۴/۷</span>
                      </button>
                      <button
                        className="w-full px-6 py-4 text-right flex items-center gap-4 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-200"
                        dir="rtl"
                        onClick={() => setShowDropdown(false)}
                      >
                        <Sparkles className="w-5 h-5 text-purple-600" />
                        <span className="text-base font-bold text-gray-800">ویژگی‌های جدید</span>
                      </button>
                      <div className="border-t border-gray-100 my-2"></div>
                      <button
                        className="w-full px-6 py-4 text-right flex items-center gap-4 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 transition-all duration-200"
                        dir="rtl"
                        onClick={() => setShowDropdown(false)}
                      >
                        <LogOut className="w-5 h-5 text-red-500" />
                        <span className="text-base font-bold text-red-500">خروج امن</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-4">
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/30">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border border-white/30">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/30">
                <Edit3 className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Design Team Section */}
          <div className="bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 px-6 py-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-6 left-6 w-32 h-32 bg-white/20 rounded-full blur-lg animate-pulse"></div>
              <div className="absolute bottom-8 right-8 w-24 h-24 bg-pink-300/40 rounded-full blur-md animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-300/20 rounded-full blur-2xl opacity-30 animate-pulse delay-500"></div>
            </div>

            <h1 className="text-4xl font-black text-white mb-3 tracking-wide animate-fade-in" dir="rtl">
              تیم ICYRAN
            </h1>
            <p className="text-base text-white/90 mb-10 font-medium" dir="rtl">
              خلاقیت بی‌حد و حصر در هر پیکسل
            </p>

            {/* Enhanced Team Photos */}
            <div className="flex justify-center gap-8 mb-12">
              <div className="relative group">
                <div className="w-28 h-28 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 rounded-full p-1 shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:scale-110">
                  <img
                    src="https://tse4.mm.bing.net/th/id/OIP.JmJSlC3GkxCrShhy46BkTAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="Team member 1"
                    className="w-full h-full rounded-full object-cover border-3 border-white"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-3 border-white flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center">
                  <Crown className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="relative group">
                <div className="w-28 h-28 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full p-1 shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:scale-110">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/029/319/701/original/instagram-icon-isolated-on-transparent-background-social-media-app-symbol-high-resolution-free-png.png"
                    alt="Team member 2"
                    className="w-full h-full rounded-full object-cover border-3 border-white"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-3 border-white flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-orange-400 rounded-full border-2 border-white flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>

            <Button
              className="text-white px-12 py-5 rounded-2xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg border border-white/30"
              style={{
                backgroundColor: "#1e40af !important",
                color: "#ffffff !important",
              }}
            >
              <MessageCircle className="w-5 h-5 ml-2" />
              درخواست مشاوره رایگان
            </Button>
          </div>

          <div className="px-6 pb-8">
            <div className="relative group">
              <div
                className="bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 p-8 rounded-[3rem] shadow-2xl relative overflow-hidden transform hover:scale-[1.02] transition-all duration-500 border-4 border-indigo-200/30 hover:shadow-[0_25px_50px_-12px_rgba(79,70,229,0.5)]"
                style={{
                  background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #ec4899 100%) !important",
                  boxShadow:
                    "0 25px 50px -12px rgba(79, 70, 229, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1) inset !important",
                }}
              >
                {/* Enhanced Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10"></div>
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

                {/* Floating Elements */}
                <div className="absolute top-6 left-6 w-3 h-3 bg-white/40 rounded-full animate-ping"></div>
                <div className="absolute bottom-8 right-8 w-2 h-2 bg-pink-300/60 rounded-full animate-pulse delay-500"></div>

                <div className="relative z-10 text-center">
                  {/* Admin Avatar */}
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-white/20 to-white/10 rounded-full p-1 shadow-2xl backdrop-blur-sm border border-white/30">
                      <img
                        src="/admin-user-profile-avatar.jpg"
                        alt="Admin Profile"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                      <Crown className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  {/* Colorful Text */}
                  <h3 className="text-2xl font-black text-white mb-3 leading-tight" dir="rtl">
                    <span className="text-yellow-300" style={{ color: "#fde047 !important" }}>
                      درخواست
                    </span>{" "}
                    <span className="text-pink-300" style={{ color: "#f9a8d4 !important" }}>
                      دسترسی
                    </span>{" "}
                    <span className="text-cyan-300" style={{ color: "#67e8f9 !important" }}>
                      ادمین
                    </span>
                  </h3>

                  <p className="text-white/90 text-base font-medium mb-6 leading-relaxed" dir="rtl">
                    <span className="text-yellow-200">دسترسی ویژه</span> به{" "}
                    <span className="text-pink-200">پنل مدیریت</span> و{" "}
                    <span className="text-cyan-200">امکانات حرفه‌ای</span>
                  </p>

                  {/* Special Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                      <Settings className="w-5 h-5 text-yellow-300 mx-auto mb-1" />
                      <span className="text-white text-xs font-bold">کنترل کامل</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                      <Crown className="w-5 h-5 text-pink-300 mx-auto mb-1" />
                      <span className="text-white text-xs font-bold">دسترسی VIP</span>
                    </div>
                  </div>

                  <button
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-2xl font-bold shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/30 hover:border-white/50"
                    onClick={() => (window.location.href = "/admin-request")}
                  >
                    <User className="w-5 h-5 inline-block ml-2" />
                    درخواست دسترسی ادمین
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 pb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent flex-1"></div>
              <h2 className="text-xl font-bold text-slate-200 px-4" dir="rtl">
                ویدیو معرفی
              </h2>
              <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent flex-1"></div>
            </div>

            {/* Simple Video Box */}
            <div className="relative group mb-4">
              <div className="w-full h-48 bg-slate-800 rounded-2xl shadow-xl overflow-hidden relative border border-slate-700 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-300">
                <video
                  className="w-full h-full object-cover"
                  poster="/professional-team-introduction-video-thumbnail.jpg"
                  controls
                  preload="metadata"
                >
                  <source src="/team-introduction.mp4" type="video/mp4" />
                  متاسفانه مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
                </video>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl border border-white/20">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-medium">۰۵:۳۲</span>
                </div>
              </div>
            </div>

            {/* Completely New Circular Design */}
            <div className="relative">
              <div className="w-full h-32 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-full shadow-2xl relative overflow-hidden flex items-center justify-center">
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-2 left-8 w-8 h-8 bg-white/30 rounded-full blur-md animate-pulse"></div>
                  <div className="absolute bottom-2 right-8 w-12 h-12 bg-pink-300/40 rounded-full blur-lg animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10 text-center px-8">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-ping delay-300"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-ping delay-600"></div>
                  </div>

                  <h4 className="text-lg font-black text-white mb-1" dir="rtl">
                    معرفی تیم طراحی
                  </h4>
                  <p className="text-white/90 text-sm" dir="rtl">
                    آشنایی با تیم حرفه‌ای و نمونه کارها
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 pb-6 space-y-12">
            <div>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent flex-1"></div>
                <h2
                  className="text-2xl font-black text-gray-800 px-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                  dir="rtl"
                >
                  نمونه کار سایت - پنل ادمین
                </h2>
                <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent flex-1"></div>
              </div>
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() =>
                    setCurrentWebsite(currentWebsite > 0 ? currentWebsite - 1 : websitePortfolio.length - 1)
                  }
                  className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-4 overflow-hidden">
                  {websitePortfolio.slice(currentWebsite, currentWebsite + 2).map((site, index) => (
                    <div
                      key={site.id}
                      className="w-48 h-36 rounded-2xl shadow-2xl hover:shadow-[0_35px_60px_-12px_rgba(0,0,0,0.4)] overflow-hidden border-3 border-white relative group bg-gradient-to-br from-gray-100 to-gray-200 transform hover:scale-105 transition-all duration-500"
                    >
                      <img
                        src={site.image || "/placeholder.svg?height=144&width=192&query=admin dashboard interface"}
                        alt={site.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="absolute bottom-2 left-2 right-2 bg-black/80 rounded px-2 py-1">
                          <p className="text-white text-xs font-bold text-center" dir="rtl">
                            {site.title}
                          </p>
                        </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                          <Play className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() =>
                    setCurrentWebsite(currentWebsite < websitePortfolio.length - 2 ? currentWebsite + 1 : 0)
                  }
                  className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="flex justify-center mt-4 gap-2">
                {websitePortfolio.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index >= currentWebsite && index < currentWebsite + 2
                        ? "bg-purple-500 w-6 shadow-lg"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1"></div>
                <h2
                  className="text-2xl font-black text-gray-800 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                  dir="rtl"
                >
                  نمونه کار اپلیکیشن - استوری
                </h2>
                <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent flex-1"></div>
              </div>
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => setCurrentApp(currentApp > 0 ? currentApp - 1 : appPortfolio.length - 1)}
                  className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-4">
                  {appPortfolio.slice(currentApp, currentApp + 2).map((app, index) => {
                    const IconComponent = app.icon
                    return (
                      <div
                        key={app.id}
                        className={`w-32 h-56 rounded-3xl shadow-2xl hover:shadow-[0_35px_60px_-12px_rgba(0,0,0,0.4)] overflow-hidden bg-gradient-to-b ${app.color} p-1 relative group hover:scale-105 transition-all duration-500`}
                      >
                        <div className="w-full h-full bg-white rounded-3xl flex flex-col items-center justify-center relative overflow-hidden">
                          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-10 h-1.5 bg-gray-300 rounded-full"></div>
                          <img
                            src={app.image || "/placeholder.svg"}
                            alt={app.title}
                            className="w-24 h-32 rounded-2xl object-cover mb-4 shadow-lg"
                          />
                          <div className="flex gap-2 mb-4">
                            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-sm"></div>
                            <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                            <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                          </div>
                          <p className="text-xs font-bold text-gray-600 text-center px-2" dir="rtl">
                            {app.title}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <button
                  onClick={() => setCurrentApp(currentApp < appPortfolio.length - 2 ? currentApp + 1 : 0)}
                  className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="flex justify-center mt-4 gap-2">
                {appPortfolio.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index >= currentApp && index < currentApp + 2 ? "bg-blue-500 w-6 shadow-lg" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            className="px-6 py-12 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%) !important",
              color: "#ffffff !important",
            }}
          >
            {/* Enhanced background effects */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-8 left-8 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-8 right-8 w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-[4rem] animate-pulse delay-500"></div>
            </div>

            <div className="relative z-10">
              {/* Enhanced Stats with beautiful cards */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/30 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(147,51,234,0.3)] transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-black text-white mb-2" style={{ color: "#ffffff !important" }}>
                    ۱۲۰۰+
                  </div>
                  <div className="text-sm font-medium text-white" dir="rtl" style={{ color: "#ffffff !important" }}>
                    مشتری راضی
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/30 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(59,130,246,0.3)] transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-black text-white mb-2" style={{ color: "#ffffff !important" }}>
                    ۵۰۰+
                  </div>
                  <div className="text-sm font-medium text-white" dir="rtl" style={{ color: "#ffffff !important" }}>
                    پروژه موفق
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-4 border border-green-500/30 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(34,197,94,0.3)] transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-black text-white mb-2" style={{ color: "#ffffff !important" }}>
                    ۴.۹
                  </div>
                  <div className="text-sm font-medium text-white" dir="rtl" style={{ color: "#ffffff !important" }}>
                    امتیاز کیفیت
                  </div>
                </div>
              </div>

              {/* Enhanced Company Info */}
              <div className="mb-8">
                <h3
                  className="text-2xl font-black mb-4 text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                  dir="rtl"
                >
                  تیم طراحی آیسیران
                </h3>
                <p
                  className="text-sm leading-relaxed max-w-xs mx-auto text-white"
                  dir="rtl"
                  style={{ color: "#ffffff !important" }}
                >
                  بهترین تیم طراحی در ایران با بیش از ۵ سال تجربه در زمینه طراحی وب، اپلیکیشن و گرافیک
                </p>
              </div>

              {/* Enhanced Contact Info with beautiful cards */}
              <div className="grid grid-cols-1 gap-3 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div
                    className="flex items-center justify-center gap-3 text-white"
                    style={{ color: "#ffffff !important" }}
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-medium" style={{ color: "#ffffff !important" }}>
                      ۰۹۱۲-۳۴۵-۶۷۸۹
                    </span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div
                    className="flex items-center justify-center gap-3 text-white"
                    style={{ color: "#ffffff !important" }}
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm font-medium" style={{ color: "#ffffff !important" }}>
                      info@infographicdesign.ir
                    </span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div
                    className="flex items-center justify-center gap-3 text-white"
                    style={{ color: "#ffffff !important" }}
                  >
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium" dir="rtl" style={{ color: "#ffffff !important" }}>
                      تهران، ایران
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex justify-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <Twitter className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <Youtube className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="mb-6">
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg font-bold mb-2 text-white" dir="rtl" style={{ color: "#ffffff !important" }}>
                  رضایت ۱۰۰٪ مشتریان
                </p>
                <p className="text-xs text-white" dir="rtl" style={{ color: "#ffffff !important" }}>
                  بهترین تیم طراحی در ایران
                </p>
              </div>

              {/* Copyright */}
              <div className="border-t border-gray-700 pt-6">
                <p className="text-xs text-white" dir="rtl" style={{ color: "#ffffff !important" }}>
                  © ۱۴۰۳ تیم طراحی آیسیران. تمامی حقوق محفوظ است.
                </p>
              </div>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="flex justify-center pb-4">
            <div className="w-32 h-1 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative group">
          <button
            className="w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center animate-pulse"
            onClick={() => setShowChat(!showChat)}
          >
            <MessageCircle className="w-8 h-8 text-white" />
          </button>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
            <span className="text-white text-xs font-black">۱</span>
          </div>

          <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-[60]">
            <div
              className="px-4 py-2 rounded-lg shadow-xl text-sm font-medium whitespace-nowrap border"
              dir="rtl"
              style={{
                backgroundColor: "#1f2937 !important",
                color: "#ffffff !important",
                borderColor: "#374151 !important",
              }}
            >
              چت با هوش مصنوعی
              <div
                className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent"
                style={{ borderTopColor: "#1f2937 !important" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Inline Chat Widget */}
        {showChat && (
          <div className="absolute bottom-20 right-0 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm" dir="rtl">
                      پشتیبان هوش مصنوعی
                    </h3>
                    <p className="text-xs opacity-90" dir="rtl">
                      آنلاین - پاسخگویی فوری
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowChat(false)}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 space-y-4 h-64 overflow-y-auto">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-100 rounded-2xl p-3 max-w-xs">
                  <p className="text-sm text-gray-800" dir="rtl">
                    سلام! من دستیار هوش مصنوعی تیم طراحی هستم. چطور می‌تونم کمکتون کنم؟
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-100 rounded-2xl p-3 max-w-xs">
                  <p className="text-sm text-gray-800" dir="rtl">
                    📞 شماره تماس: ۰۹۱۲-۳۴۵-۶۷۸۹
                  </p>
                  <p className="text-sm text-gray-800 mt-1" dir="rtl">
                    📧 ایمیل: info@infographicdesign.ir
                  </p>
                  <p className="text-sm text-gray-800 mt-1" dir="rtl">
                    🕐 ساعت کاری: ۹ صبح تا ۶ عصر
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-100 rounded-2xl p-3 max-w-xs">
                  <p className="text-sm text-gray-800" dir="rtl">
                    💼 خدمات ما: طراحی وب، اپلیکیشن موبایل، گرافیک و برندینگ
                  </p>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="پیام خود را بنویسید..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  dir="rtl"
                />
                <button className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform">
                  <MessageCircle className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
