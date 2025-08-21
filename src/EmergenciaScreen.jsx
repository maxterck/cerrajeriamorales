import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const EmergenciaScreen = () => {
  const [currentView, setCurrentView] = useState('home');

  const colors = {
    primary: '#1e3a8a',
    secondary: '#fbbf24',
    emergency: '#dc2626',
    success: '#10b981',
    dark: '#1f2937',
    light: '#f8fafc'
  };

  const Icon3D = ({ type, size = 'w-12 h-12' }) => {
    const iconComponents = {
      car: (
        <svg viewBox="0 0 100 100" className={size}>
          <defs>
            <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
            <filter id="shadow">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3"/>
            </filter>
          </defs>
          <ellipse cx="50" cy="70" rx="35" ry="12" fill="#0f172a" opacity="0.2"/>
          <rect x="20" y="45" width="60" height="20" rx="8" fill="url(#carGradient)" filter="url(#shadow)"/>
          <rect x="25" y="35" width="50" height="15" rx="6" fill="url(#carGradient)" filter="url(#shadow)"/>
          <circle cx="30" cy="65" r="8" fill="#374151" filter="url(#shadow)"/>
          <circle cx="70" cy="65" r="8" fill="#374151" filter="url(#shadow)"/>
          <circle cx="30" cy="65" r="5" fill="#6b7280"/>
          <circle cx="70" cy="65" r="5" fill="#6b7280"/>
          <rect x="28" y="37" width="44" height="11" rx="4" fill="#bfdbfe" opacity="0.8"/>
          <ellipse cx="40" cy="42" rx="8" ry="3" fill="rgba(255,255,255,0.4)" transform="rotate(-10 40 42)"/>
        </svg>
      ),
      
      key: (
        <svg viewBox="0 0 100 100" className={size}>
          <defs>
            <linearGradient id="keyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <filter id="keyShadow">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3"/>
            </filter>
          </defs>
          <ellipse cx="52" cy="72" rx="25" ry="8" fill="#0f172a" opacity="0.2"/>
          <circle cx="30" cy="40" r="18" fill="url(#keyGradient)" filter="url(#keyShadow)"/>
          <circle cx="30" cy="40" r="8" fill="none" stroke="#92400e" strokeWidth="2"/>
          <rect x="45" y="37" width="35" height="6" fill="url(#keyGradient)" filter="url(#keyShadow)"/>
          <rect x="70" y="43" width="4" height="8" fill="url(#keyGradient)"/>
          <rect x="75" y="43" width="3" height="5" fill="url(#keyGradient)"/>
          <ellipse cx="25" cy="35" rx="4" ry="8" fill="rgba(255,255,255,0.5)" transform="rotate(-20 25 35)"/>
        </svg>
      ),
      
      lock: (
        <svg viewBox="0 0 100 100" className={size}>
          <defs>
            <linearGradient id="lockGradient3D" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="50%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <filter id="lockShadow">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3"/>
            </filter>
          </defs>
          <ellipse cx="52" cy="75" rx="25" ry="8" fill="#0f172a" opacity="0.2"/>
          <rect x="30" y="50" width="40" height="30" rx="8" fill="url(#lockGradient3D)" filter="url(#lockShadow)"/>
          <path d="M40 50 Q40 30 50 30 Q60 30 60 50" fill="none" stroke="url(#lockGradient3D)" strokeWidth="6" strokeLinecap="round" filter="url(#lockShadow)"/>
          <circle cx="50" cy="62" r="4" fill="#fbbf24"/>
          <rect x="48" y="64" width="4" height="8" fill="#fbbf24"/>
          <ellipse cx="45" cy="58" rx="3" ry="6" fill="rgba(255,255,255,0.4)" transform="rotate(-15 45 58)"/>
        </svg>
      ),
      
      shield: (
        <svg viewBox="0 0 100 100" className={size}>
          <defs>
            <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
            <filter id="shieldShadow">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3"/>
            </filter>
          </defs>
          <ellipse cx="52" cy="75" rx="20" ry="6" fill="#0f172a" opacity="0.2"/>
          <path d="M50 20 Q65 25 75 35 Q75 55 50 75 Q25 55 25 35 Q35 25 50 20" fill="url(#shieldGradient)" filter="url(#shieldShadow)"/>
          <path d="M40 50 L47 57 L62 42" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <ellipse cx="45" cy="35" rx="6" ry="12" fill="rgba(255,255,255,0.3)" transform="rotate(-20 45 35)"/>
        </svg>
      ),
      
      wrench: (
        <svg viewBox="0 0 100 100" className={size}>
          <defs>
            <linearGradient id="wrenchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6b7280" />
              <stop offset="50%" stopColor="#4b5563" />
              <stop offset="100%" stopColor="#374151" />
            </linearGradient>
            <filter id="wrenchShadow">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3"/>
            </filter>
          </defs>
          <ellipse cx="52" cy="75" rx="25" ry="6" fill="#0f172a" opacity="0.2"/>
          <rect x="25" y="45" width="50" height="8" rx="4" fill="url(#wrenchGradient)" filter="url(#wrenchShadow)" transform="rotate(25 50 50)"/>
          <circle cx="65" cy="35" r="12" fill="url(#wrenchGradient)" filter="url(#wrenchShadow)"/>
          <circle cx="65" cy="35" r="6" fill="none" stroke="#1f2937" strokeWidth="2"/>
          <ellipse cx="60" cy="30" rx="3" ry="6" fill="rgba(255,255,255,0.4)" transform="rotate(-30 60 30)"/>
        </svg>
      ),
      
      phone: (
        <svg viewBox="0 0 100 100" className={size}>
          <defs>
            <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="50%" stopColor="#047857" />
              <stop offset="100%" stopColor="#065f46" />
            </linearGradient>
            <filter id="phoneShadow">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3"/>
            </filter>
          </defs>
          <ellipse cx="52" cy="75" rx="15" ry="6" fill="#0f172a" opacity="0.2"/>
          <rect x="35" y="20" width="30" height="50" rx="8" fill="url(#phoneGradient)" filter="url(#phoneShadow)"/>
          <rect x="40" y="28" width="20" height="30" rx="3" fill="#1f2937"/>
          <circle cx="50" cy="63" r="3" fill="#6b7280"/>
          <ellipse cx="45" cy="35" rx="2" ry="8" fill="rgba(255,255,255,0.3)"/>
        </svg>
      ),
      
      mapPin: (
        <svg viewBox="0 0 100 100" className={size}>
          <defs>
            <linearGradient id="pinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="50%" stopColor="#b91c1c" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
            <filter id="pinShadow">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3"/>
            </filter>
          </defs>
          <ellipse cx="52" cy="75" rx="12" ry="4" fill="#0f172a" opacity="0.2"/>
          <path d="M50 25 Q65 25 65 40 Q65 55 50 70 Q35 55 35 40 Q35 25 50 25" fill="url(#pinGradient)" filter="url(#pinShadow)"/>
          <circle cx="50" cy="40" r="8" fill="white"/>
          <circle cx="50" cy="40" r="4" fill="url(#pinGradient)"/>
          <ellipse cx="45" cy="35" rx="3" ry="6" fill="rgba(255,255,255,0.4)" transform="rotate(-20 45 35)"/>
        </svg>
      ),
      
      settings: (
        <svg viewBox="0 0 100 100" className={size}>
          <defs>
            <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6b7280" />
              <stop offset="50%" stopColor="#4b5563" />
              <stop offset="100%" stopColor="#374151" />
            </linearGradient>
            <filter id="gearShadow">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3"/>
            </filter>
          </defs>
          <ellipse cx="52" cy="75" rx="20" ry="6" fill="#0f172a" opacity="0.2"/>
          <circle cx="50" cy="50" r="25" fill="url(#gearGradient)" filter="url(#gearShadow)"/>
          <rect x="48" y="25" width="4" height="8" fill="url(#gearGradient)"/>
          <rect x="67" y="48" width="8" height="4" fill="url(#gearGradient)"/>
          <rect x="48" y="67" width="4" height="8" fill="url(#gearGradient)"/>
          <rect x="25" y="48" width="8" height="4" fill="url(#gearGradient)"/>
          <circle cx="50" cy="50" r="12" fill="#1f2937"/>
          <circle cx="50" cy="50" r="6" fill="#6b7280"/>
          <ellipse cx="45" cy="45" rx="4" ry="8" fill="rgba(255,255,255,0.3)" transform="rotate(-30 45 45)"/>
        </svg>
      ),
      
      bot: (
        <svg viewBox="0 0 100 100" className={size}>
          <defs>
            <linearGradient id="botGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
            <filter id="botShadow">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3"/>
            </filter>
          </defs>
          <ellipse cx="52" cy="75" rx="18" ry="6" fill="#0f172a" opacity="0.2"/>
          <rect x="35" y="30" width="30" height="25" rx="8" fill="url(#botGradient)" filter="url(#botShadow)"/>
          <circle cx="42" cy="25" r="2" fill="url(#botGradient)"/>
          <circle cx="58" cy="25" r="2" fill="url(#botGradient)"/>
          <rect x="41" y="25" width="2" height="8" fill="url(#botGradient)"/>
          <rect x="57" y="25" width="2" height="8" fill="url(#botGradient)"/>
          <circle cx="42" cy="40" r="3" fill="white">
            <animate attributeName="r" values="3;1;3" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="58" cy="40" r="3" fill="white">
            <animate attributeName="r" values="3;1;3" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="42" cy="40" r="1.5" fill="#047857">
            <animate attributeName="opacity" values="1;0;1" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="58" cy="40" r="1.5" fill="#047857">
            <animate attributeName="opacity" values="1;0;1" dur="3s" repeatCount="indefinite"/>
          </circle>
          <rect x="45" y="47" width="10" height="2" rx="1" fill="white"/>
          <rect x="38" y="55" width="24" height="15" rx="6" fill="url(#botGradient)" filter="url(#botShadow)"/>
          <ellipse cx="45" cy="38" rx="3" ry="6" fill="rgba(255,255,255,0.4)" transform="rotate(-20 45 38)"/>
        </svg>
      ),
      
      message: (
        <svg viewBox="0 0 100 100" className={size}>
          <defs>
            <linearGradient id="messageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
            <filter id="messageShadow">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3"/>
            </filter>
          </defs>
          <ellipse cx="52" cy="72" rx="22" ry="6" fill="#0f172a" opacity="0.2"/>
          <rect x="25" y="30" width="50" height="30" rx="12" fill="url(#messageGradient)" filter="url(#messageShadow)"/>
          <path d="M35 60 L30 65 L40 60" fill="url(#messageGradient)"/>
          <rect x="32" y="38" width="20" height="2" rx="1" fill="white" opacity="0.8"/>
          <rect x="32" y="43" width="30" height="2" rx="1" fill="white" opacity="0.8"/>
          <rect x="32" y="48" width="25" height="2" rx="1" fill="white" opacity="0.8"/>
          <ellipse cx="40" cy="38" rx="4" ry="8" fill="rgba(255,255,255,0.3)" transform="rotate(-20 40 38)"/>
        </svg>
      ),

      clock: (
        <svg viewBox="0 0 100 100" className={size}>
          <defs>
            <linearGradient id="clockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#374151" />
              <stop offset="50%" stopColor="#4b5563" />
              <stop offset="100%" stopColor="#6b7280" />
            </linearGradient>
            <filter id="clockShadow">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3"/>
            </filter>
          </defs>
          <ellipse cx="52" cy="75" rx="20" ry="6" fill="#0f172a" opacity="0.2"/>
          <circle cx="50" cy="50" r="25" fill="url(#clockGradient)" filter="url(#clockShadow)"/>
          <circle cx="50" cy="50" r="20" fill="white"/>
          <circle cx="50" cy="35" r="2" fill="#374151"/>
          <circle cx="65" cy="50" r="2" fill="#374151"/>
          <circle cx="50" cy="65" r="2" fill="#374151"/>
          <circle cx="35" cy="50" r="2" fill="#374151"/>
          <rect x="49" y="40" width="2" height="12" fill="#dc2626" rx="1"/>
          <rect x="48" y="45" width="4" height="8" fill="#374151" rx="1"/>
          <circle cx="50" cy="50" r="3" fill="#374151"/>
          <ellipse cx="45" cy="45" rx="3" ry="6" fill="rgba(255,255,255,0.4)" transform="rotate(-30 45 45)"/>
        </svg>
      )
    };
    
    return iconComponents[type] || iconComponents.key;
  };

  const Button = ({ children, onClick, variant = 'primary', className = '', icon: Icon }) => {
    const baseStyles = 'px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3';
    const variants = {
      primary: 'bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white',
      secondary: 'bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-gray-900',
      emergency: 'bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white',
      success: 'bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white'
    };
    
    return (
      <button 
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {Icon && <Icon />}
        {children}
      </button>
    );
  };

  const OptionCard = ({ iconType, title, description, onClick }) => (
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 border border-red-100 hover:border-red-300"
    >
      <div className="text-red-600 text-3xl sm:text-4xl mb-3 sm:mb-4 flex justify-center">
        <Icon3D type={iconType} size="w-12 h-12 sm:w-16 sm:h-16" />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center text-xs sm:text-sm">{description}</p>
    </div>
  );

  const InfoBlock = ({ icon: Icon, title, content, accent = false }) => (
    <div className={`rounded-2xl p-4 sm:p-6 shadow-lg ${accent ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white' : 'bg-white'}`}>
      <div className={`text-2xl sm:text-3xl mb-3 sm:mb-4 flex justify-center ${accent ? 'text-yellow-400' : 'text-blue-600'}`}>
        <Icon />
      </div>
      <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-center ${accent ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
      <div className={`text-center ${accent ? 'text-blue-100' : 'text-gray-600'}`}>{content}</div>
    </div>
  );

  const SocialCard = ({ icon: Icon, platform, metric, color }) => (
    <div className="bg-white rounded-xl p-3 sm:p-4 shadow-lg flex items-center gap-3 sm:gap-4 hover:shadow-xl transition-shadow duration-300">
      <div className={`text-xl sm:text-2xl text-${color}-600`}>
        <Icon />
      </div>
      <div>
        <div className="font-semibold text-gray-800 text-sm sm:text-base">{platform}</div>
        <div className="text-gray-600 text-xs sm:text-sm">{metric}</div>
      </div>
    </div>
  );

  const LockSVG = ({ size = 120 }) => (
    <div className="flex justify-center mb-6 sm:mb-8">
      <svg width={size} height={size} viewBox="0 0 100 100" className="drop-shadow-2xl">
        <rect x="25" y="45" width="50" height="40" rx="8" fill={colors.primary} stroke="#0f172a" strokeWidth="2"/>
        <defs>
          <linearGradient id="lockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.primary} />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>
        <rect x="25" y="45" width="50" height="40" rx="8" fill="url(#lockGradient)"/>
        <path d="M35 45 Q35 25 50 25 Q65 25 65 45" fill="none" stroke={colors.primary} strokeWidth="6" strokeLinecap="round"/>
        <path d="M35 45 Q35 25 50 25 Q65 25 65 45" fill="none" stroke="#0f172a" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="50" cy="62" r="4" fill={colors.secondary}/>
        <rect x="48" y="64" width="4" height="10" fill={colors.secondary}/>
        <ellipse cx="45" cy="55" rx="3" ry="8" fill="rgba(255,255,255,0.3)" transform="rotate(-20 45 55)"/>
      </svg>
    </div>
  );

  const openWhatsApp = (message) => {
    const phoneNumber = "5493804123456";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const HomeView = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white shadow-lg sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 py-3 sm:py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 border-2 border-blue-200 flex items-center justify-center shadow-lg">
              <div className="text-white font-bold text-xs sm:text-sm">CM</div>
            </div>
            <h1 className="text-lg sm:text-2xl font-bold text-gray-800">Cerrajería Morales</h1>
          </div>
          <button 
            onClick={() => setCurrentView('chatbot')}
            className="bg-green-500 hover:bg-green-600 text-white p-2 sm:p-3 rounded-full transition-colors duration-300"
          >
            <Icon3D type="bot" size="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-2 sm:px-4 py-6 sm:py-12">
        <LockSVG size={80} />
        
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">Cerrajería de Confianza</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-8">Servicio profesional las 24 horas</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 max-w-2xl mx-auto">
          <Button 
            variant="emergency" 
            onClick={() => setCurrentView('emergency')}
            icon={() => <Icon3D type="shield" size="w-5 h-5 sm:w-6 sm:h-6" />}
            className="text-lg sm:text-xl py-4 sm:py-6"
          >
            EMERGENCIA
          </Button>
          
          <Button 
            variant="primary" 
            onClick={() => setCurrentView('about')}
            icon={() => <Icon3D type="mapPin" size="w-5 h-5 sm:w-6 sm:h-6" />}
            className="text-lg sm:text-xl py-4 sm:py-6"
          >
            NOSOTROS
          </Button>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button 
            variant="success" 
            onClick={() => openWhatsApp("Hola, necesito información sobre sus servicios")}
            icon={() => <Icon3D type="message" size="w-4 h-4 sm:w-5 sm:h-5" />}
            className="text-base sm:text-lg mx-auto"
          >
            Contactar por WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );

  const EmergencyView = () => (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100">
      <div className="bg-red-600 text-white shadow-lg">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 py-3 sm:py-4 flex items-center gap-2 sm:gap-4">
          <button 
            onClick={() => setCurrentView('home')}
            className="text-white hover:text-red-200 transition-colors duration-300"
          >
            <ArrowLeft className="text-lg sm:text-xl" />
          </button>
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-red-200 flex items-center justify-center shadow-lg">
            <div className="text-red-600 font-bold text-xs">CM</div>
          </div>
          <h1 className="text-lg sm:text-2xl font-bold">EMERGENCIA</h1>
          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            <Icon3D type="clock" size="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-base">24/7</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-700 mb-2 sm:mb-4">¿Qué necesitas?</h2>
          <p className="text-base sm:text-lg text-red-600">Selecciona tu emergencia</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <OptionCard 
            iconType="car"
            title="Auto Cerrado"
            description="Quedaste afuera de tu vehículo"
            onClick={() => openWhatsApp("🚨 EMERGENCIA: Mi auto está cerrado y las llaves quedaron adentro")}
          />
          
          <OptionCard 
            iconType="key"
            title="Llave Rota"
            description="Se quebró la llave en la cerradura"
            onClick={() => openWhatsApp("🚨 EMERGENCIA: Se me rompió la llave en la cerradura")}
          />
          
          <OptionCard 
            iconType="settings"
            title="Cambio Combinación"
            description="Necesito cambiar la combinación"
            onClick={() => openWhatsApp("🚨 EMERGENCIA: Necesito cambiar combinación urgente")}
          />
          
          <OptionCard 
            iconType="lock"
            title="Cerradura Trabada"
            description="La cerradura no funciona"
            onClick={() => openWhatsApp("🚨 EMERGENCIA: Mi cerradura está trabada")}
          />
        </div>

        <div className="text-center">
          <Button 
            variant="emergency" 
            onClick={() => openWhatsApp("🚨 EMERGENCIA URGENTE: Necesito ayuda inmediata")}
            icon={() => <Icon3D type="phone" size="w-5 h-5 sm:w-6 sm:h-6" />}
            className="text-lg sm:text-xl py-3 sm:py-4 px-6 sm:px-8 mx-auto"
          >
            LLAMADA URGENTE
          </Button>
        </div>
      </div>
    </div>
  );

  const AboutView = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white shadow-lg">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 py-3 sm:py-4 flex items-center gap-2 sm:gap-4">
          <button 
            onClick={() => setCurrentView('home')}
            className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
          >
            <ArrowLeft className="text-lg sm:text-xl" />
          </button>
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 border-2 border-blue-200 flex items-center justify-center shadow-lg">
            <div className="text-white font-bold text-xs">CM</div>
          </div>
          <h1 className="text-lg sm:text-2xl font-bold text-gray-800">Nosotros</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="rounded-2xl p-4 sm:p-6 shadow-lg bg-white">
            <div className="text-blue-600 text-2xl sm:text-3xl mb-3 sm:mb-4 flex justify-center">
              <Icon3D type="mapPin" size="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-center text-gray-800">Ubicación</h3>
            
            <div className="bg-gray-100 rounded-xl mb-3 sm:mb-4 h-32 sm:h-48 flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center text-gray-500">
                <Icon3D type="mapPin" size="w-8 h-8 sm:w-12 sm:h-12" />
                <p className="text-xs sm:text-sm mt-2">Aquí va tu mapa</p>
                <p className="text-xs hidden sm:block">Integra Google Maps</p>
              </div>
            </div>
            
            <div className="text-center text-gray-600">
              <p className="mb-1 sm:mb-2 text-sm sm:text-base">Av. Principal 1234</p>
              <p className="mb-1 sm:mb-2 text-sm sm:text-base">La Rioja, Argentina</p>
              <p className="text-xs sm:text-sm">Zona: toda la ciudad</p>
            </div>
          </div>
          
          <InfoBlock 
            icon={() => <Icon3D type="phone" size="w-6 h-6 sm:w-8 sm:h-8" />}
            title="Contacto"
            content={
              <div>
                <p className="mb-1 sm:mb-2 text-sm sm:text-base">+54 380 412-3456</p>
                <p className="mb-1 sm:mb-2 text-sm sm:text-base">WhatsApp disponible</p>
                <p className="text-xs sm:text-sm">Respuesta inmediata</p>
              </div>
            }
          />
        </div>

        <div className="mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4 sm:mb-6">Nuestro Equipo</h3>
          
          <div className="mb-4 sm:mb-6">
            <div className="rounded-2xl p-4 sm:p-6 shadow-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white max-w-sm sm:max-w-md mx-auto">
              <div className="text-yellow-400 text-2xl sm:text-3xl mb-3 sm:mb-4 flex justify-center">
                <Icon3D type="wrench" size="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <h4 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 text-center">Lucas Morales</h4>
              <p className="text-blue-100 text-center text-xs sm:text-sm mb-1 sm:mb-2">Jefe - Cerrajero Matriculado</p>
              <p className="text-blue-100 text-center text-xs">15 años experiencia</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="rounded-xl p-3 sm:p-4 shadow-md bg-white border border-blue-200">
              <div className="text-blue-600 text-xl sm:text-2xl mb-2 sm:mb-3 flex justify-center">
                <Icon3D type="key" size="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h4 className="font-semibold mb-1 text-center text-gray-800 text-sm sm:text-base">Carlos Ruiz</h4>
              <p className="text-gray-600 text-center text-xs mb-1">Especialista Autos</p>
              <p className="text-gray-500 text-center text-xs">8 años exp.</p>
            </div>
            
            <div className="rounded-xl p-3 sm:p-4 shadow-md bg-white border border-blue-200">
              <div className="text-blue-600 text-xl sm:text-2xl mb-2 sm:mb-3 flex justify-center">
                <Icon3D type="lock" size="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h4 className="font-semibold mb-1 text-center text-gray-800 text-sm sm:text-base">Miguel Torres</h4>
              <p className="text-gray-600 text-center text-xs mb-1">Cerraduras Resid.</p>
              <p className="text-gray-500 text-center text-xs">6 años exp.</p>
            </div>
            
            <div className="rounded-xl p-3 sm:p-4 shadow-md bg-white border border-blue-200">
              <div className="text-blue-600 text-xl sm:text-2xl mb-2 sm:mb-3 flex justify-center">
                <Icon3D type="shield" size="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h4 className="font-semibold mb-1 text-center text-gray-800 text-sm sm:text-base">Ana López</h4>
              <p className="text-gray-600 text-center text-xs mb-1">Cajas Fuertes</p>
              <p className="text-gray-500 text-center text-xs">5 años exp.</p>
            </div>
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4 sm:mb-6">Nuestra Experiencia</h3>
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="grid grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="bg-blue-50 rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <Icon3D type="car" size="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">1,500+</div>
                <div className="text-gray-600 text-xs sm:text-sm font-medium">Autos Abiertos</div>
              </div>
              
              <div className="text-center">
                <div className="bg-green-50 rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <Icon3D type="lock" size="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">2,800+</div>
                <div className="text-gray-600 text-xs sm:text-sm font-medium">Casas Atendidas</div>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-50 rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <Icon3D type="shield" size="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-yellow-600 mb-1">450+</div>
                <div className="text-gray-600 text-xs sm:text-sm font-medium">Cajas Fuertes</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4 sm:mb-6">Síguenos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <SocialCard icon={() => <Icon3D type="message" size="w-5 h-5 sm:w-6 sm:h-6" />} platform="Facebook" metric="2.1k seguidores" color="blue" />
            <SocialCard icon={() => <Icon3D type="message" size="w-5 h-5 sm:w-6 sm:h-6" />} platform="Instagram" metric="1.8k seguidores" color="pink" />
            <SocialCard icon={() => <Icon3D type="mapPin" size="w-5 h-5 sm:w-6 sm:h-6" />} platform="Google" metric="4.8★ (120 reseñas)" color="red" />
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4 sm:mb-6">Nuestros Trabajos</h3>
          
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-4 sm:mb-6">
            {/* Grid 2x2 para las fotos */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Icon3D type="wrench" size="w-6 h-6 sm:w-8 sm:h-8" />
                  <p className="text-xs sm:text-sm font-semibold mt-2">Apertura Vehículos</p>
                  <p className="text-xs hidden sm:block">Google Maps #1</p>
                </div>
              </div>
              
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Icon3D type="lock" size="w-6 h-6 sm:w-8 sm:h-8" />
                  <p className="text-xs sm:text-sm font-semibold mt-2">Inst. Cerraduras</p>
                  <p className="text-xs hidden sm:block">Google Maps #2</p>
                </div>
              </div>
              
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Icon3D type="key" size="w-6 h-6 sm:w-8 sm:h-8" />
                  <p className="text-xs sm:text-sm font-semibold mt-2">Copias Llaves</p>
                  <p className="text-xs hidden sm:block">Google Maps #3</p>
                </div>
              </div>
              
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Icon3D type="shield" size="w-6 h-6 sm:w-8 sm:h-8" />
                  <p className="text-xs sm:text-sm font-semibold mt-2">Cajas Fuertes</p>
                  <p className="text-xs hidden sm:block">Google Maps #4</p>
                </div>
              </div>
            </div>
            
            {/* Botón para ver más */}
            <div className="text-center">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-300">
                Ver más trabajos en Google Maps →
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button 
            variant="success" 
            onClick={() => openWhatsApp("Hola, vi su información y me interesa contactarlos")}
            icon={() => <Icon3D type="message" size="w-5 h-5" />}
            className="mx-auto"
          >
            Contactar Ahora
          </Button>
        </div>
      </div>
    </div>
  );

  const ChatbotView = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <div className="bg-green-600 text-white shadow-lg">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 py-3 sm:py-4 flex items-center gap-2 sm:gap-4">
          <button 
            onClick={() => setCurrentView('home')}
            className="text-white hover:text-green-200 transition-colors duration-300"
          >
            <ArrowLeft className="text-lg sm:text-xl" />
          </button>
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-green-200 flex items-center justify-center shadow-lg">
            <div className="text-green-600 font-bold text-xs">CM</div>
          </div>
          <h1 className="text-lg sm:text-2xl font-bold">Asistente Virtual</h1>
          <Icon3D type="bot" size="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-6 mb-4 sm:mb-6">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <Icon3D type="bot" size="w-16 h-16 sm:w-24 sm:h-24" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">¡Hola! Soy tu asistente</h2>
            <p className="text-gray-600 text-sm sm:text-base">¿En qué puedo ayudarte hoy?</p>
          </div>

          <div className="space-y-3">
            <Button 
              variant="success" 
              onClick={() => openWhatsApp("Hola, vengo del asistente virtual. Necesito ayuda con una emergencia")}
              icon={() => <Icon3D type="message" size="w-5 h-5" />}
              className="w-full text-base py-4"
            >
              Contactar por WhatsApp
            </Button>
            
            <Button 
              variant="emergency" 
              onClick={() => setCurrentView('emergency')}
              icon={() => <Icon3D type="shield" size="w-5 h-5" />}
              className="w-full text-base py-4"
            >
              Ver Opciones de Emergencia
            </Button>
            
            <Button 
              variant="primary" 
              onClick={() => setCurrentView('about')}
              icon={() => <Icon3D type="mapPin" size="w-5 h-5" />}
              className="w-full text-base py-4"
            >
              Información de la Empresa
            </Button>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Estamos disponibles 24/7 para emergencias
          </p>
        </div>
      </div>
    </div>
  );

  const renderView = () => {
    switch(currentView) {
      case 'emergency': return <EmergencyView />;
      case 'about': return <AboutView />;
      case 'chatbot': return <ChatbotView />;
      default: return <HomeView />;
    }
  };

  return renderView();
};

export default EmergenciaScreen;