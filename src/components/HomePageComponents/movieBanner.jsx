import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MovieBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  // Manuel ikonlar
  const ChevronLeftIcon = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  );

  const ChevronRightIcon = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );

  const PlayIcon = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
    </svg>
  );

  const StarIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );

  const ClockIcon = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const CalendarIcon = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  );

  // Film verileri
  const movies = [
   {
    "id": 1,
    "title": "Transformers: Canavarların Yükselişi",
    "subtitle": "Transformers: Rise of the Beasts",
    "description": "1994 yılında geçen filmde, eski bir asker olan Noah ve eser araştırmacısı Elena, Otobotlar ve Maximal'larla birlikte, evreni yok etmeye kararlı Unicron'un elçisi Scourge ve Terrorcon'lara karşı dünyayı korumak için mücadele eder.",
    "genre": "Bilim Kurgu • Aksiyon • Macera",
    "rating": 6.5,
    "duration": "127 dk",
    "year": "2023",
    "background": "linear-gradient(135deg, #2e4482 0%, #4169e1 100%)",
    "poster": "/assets/moviePoster/transformers-7-canavarlarin-yukselisi-izle-1-14180.webp",
    "backdropUrl": "",
    "tags": ["IMAX", "4K", "Dolby Atmos"],
    "genres": ["Bilim Kurgu", "Aksiyon", "Macera"],
    "releaseDate": "9 Haziran 2023",
    "director": "Steven Caple Jr.",
    "writers": ["Joby Harold", "Darnell Metayer", "Josh Peters", "Erich Hoeber", "Jon Hoeber"],
    "cast": [
      {
        "name": "Anthony Ramos",
        "character": "Noah Diaz",
        "image": ""
      },
      {
        "name": "Dominique Fishback",
        "character": "Elena Wallace",
        "image": ""
      },
      {
        "name": "Ron Perlman",
        "character": "Optimus Primal (ses)",
        "image": ""
      },
      {
        "name": "Peter Dinklage",
        "character": "Scourge (ses)",
        "image": ""
      },
      {
        "name": "Michelle Yeoh",
        "character": "Airazor (ses)",
        "image": ""
      },
      {
        "name": "Pete Davidson",
        "character": "Mirage (ses)",
        "image": ""
      }
    ],
    "trailerUrl": "https://www.youtube.com/embed/itnqEauWQZM"
  },

   {
    "id": 2,
    "title": "Süleyman'ın Hikayesi",
    "subtitle": "L'histoire de Souleymane",
    "description": "Süleyman’ın Hikayesi, Paris'te yiyecek teslimatı yapan sığınmacı Souleymane'nin hikayesini konu ediyor. Paris’te sığınmacı olan Souleymane, yemek dağıtmak için Paris sokaklarında pedal çevirir. Yasal ikamet hakkı elde etmek amacıyla yapılacak görüşmeye hazırlanmak için sadece iki gün vardır. Souleymane, hayatı için bu çok önemli görüşmeye zamanında hazırlanabilecek midir?",
    "genre": "Dram",
    "rating": 7.6,
    "duration": "93 dk",
    "year": "2024",
    "background": "linear-gradient(135deg, #2e4482 0%, #4169e1 100%)",
    "poster": "/assets/moviePoster/64d6ba8251aa2858484119177e6ae60e.webp",
    "backdropUrl": "",
    "tags": ["Festival", "Fransız Sineması", "Göçmenlik"],
    "genres": ["Dram"],
    "releaseDate": "27 Aralık 2024",
    "director": "Boris Lojkine",
    "writers": ["Boris Lojkine", "Delphine Agut"],
    "cast": [
      {
        "name": "Abou Sangaré",
        "character": "Souleymane",
        "image": ""
      },
      {
        "name": "Nina Meurisse",
        "character": "OFPRA Yetkilisi",
        "image": ""
      },
      {
        "name": "Alpha Oumar Sow",
        "character": "Barry",
        "image": ""
      },
      {
        "name": "Emmanuel Yovanie",
        "character": "Emmanuel",
        "image": ""
      },
      {
        "name": "Younoussa Diallo",
        "character": "Khalil",
        "image": ""
      }
    ],
    "trailerUrl": "https://www.youtube.com/embed/F5kKfJqcLLg"
  },

  
  {
    "id": 3,
    "title": "Kayara",
    "subtitle": "Kayara: La Guerrera del Imperio Inca",
    "description": "Genç ve cesur bir İnka kızı olan Kayara, yalnızca erkeklerin kabul edildiği Chasqui haberciler grubuna katılma hayali kurar. Geleneksel normlara meydan okuyarak, İnka İmparatorluğu'nun resmi habercisi olma yolunda zorlu bir maceraya atılır.",
    "genre": "Animasyon • Macera • Aile",
    "rating": 7.5,
    "duration": "90 dk",
    "year": "2025",
    "background": "linear-gradient(135deg, #2e4482 0%, #4169e1 100%)",
    "poster": "/assets/moviePoster/0ff0d21fc60e3454134e85d31802b968.webp",
    "backdropUrl": "",
    "tags": ["İnka Kültürü", "Kadın Gücü", "Aile Filmi"],
    "genres": ["Animasyon", "Macera", "Aile"],
    "releaseDate": "24 Ocak 2025",
    "director": "César Zelada",
    "writers": ["César Zelada", "Brian Cleveland", "Jason Cleveland"],
    "cast": [
      {
        "name": "Naomi Serrano",
        "character": "Kayara (ses)",
        "image": ""
      },
      {
        "name": "Nate Begle",
        "character": "Martin (ses)",
        "image": ""
      },
      {
        "name": "Charles Gonzales",
        "character": "Paullu (ses)",
        "image": ""
      }
    ],
    "trailerUrl": "https://www.youtube.com/embed/_biCIM1AmwA"
  }

  ];

  // Otomatik kaydırma
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % movies.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, movies.length]);

  // Düzgün çalışan fonksiyonlar
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % movies.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + movies.length) % movies.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const handleGoToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  // Film detay sayfasına yönlendirme fonksiyonu
  const handleViewDetails = () => {
    // Mevcut filmin verilerini alıp detay sayfasına yönlendirme
    navigate(`/filmler/${movies[currentSlide].id}`, { 
      state: { movieData: movies[currentSlide] }
    });
  };

  // Fragman açma fonksiyonu
  const handleWatchTrailer = () => {
    // Mevcut filmin fragmanını izleme işlevi
    navigate(`/filmler/${movies[currentSlide].id}`, { 
      state: { 
        movieData: movies[currentSlide],
        openTrailer: true 
      }
    });
  };

  const currentMovie = movies[currentSlide];

  return (
    <>
      {/* Banner Başlık */}
        <div className="relative rounded-lg border border-gray-300 z-30 bg-white max-w-7xl mx-auto mt-[130px] md:-mb-20 px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
          {/* Logo & Tagline */}
          <div className="text-center sm:text-left mb-3 sm:mb-0">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2F3F8E]">
              TV'de Bu Ay
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-[#3499D2] mt-1">
              Sizin için özenle seçilmiş kanallar ve HD kalitesinde birbirinden güzel içerikler sizlerle...
            </p>
          </div>

          {/* Navigation */}
        </div>
      
      <div className="relative w-full h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg sm:rounded-xl shadow-2xl ++
      + my-2 sm:my-8">
        {/* Ana Banner */}
        <div 
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{ 
            background: 'url(...) no-repeat center',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2F3D8D] to-[#3399D2]"></div>
          
          {/* İçerik */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-3 sm:px-6">
              <div className="grid grid-cols-12 gap-2 sm:gap-4 md:gap-6 items-center">
                
                {/* Sol Taraf - Film Bilgileri */}
                <div className="col-span-8 sm:col-span-7 md:col-span-8 lg:col-span-7 space-y-2 sm:space-y-3 md:space-y-4">
                  {/* Kategori Badge */}
                  <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                    <span className="bg-white/25 backdrop-blur-sm text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium">
                      {currentMovie.genre}
                    </span>
                    <div className="flex flex-wrap items-center gap-1">
                      {currentMovie.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-1.5 sm:px-2 py-0.5 rounded-full text-xs font-bold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Film Başlığı */}
                  <div>
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-white mb-0.5 sm:mb-1 leading-tight">
                      {currentMovie.title}
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 font-light">
                      {currentMovie.subtitle}
                    </p>
                  </div>

                  {/* Film Detayları */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-gray-300 text-xs sm:text-sm">
                    <div className="flex items-center space-x-1">
                      <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                      <span className="font-semibold">{currentMovie.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{currentMovie.duration}</span>
                    </div>
                    <div className="hidden sm:flex items-center space-x-1">
                      <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{currentMovie.year}</span>
                    </div>
                  </div>

                  {/* Açıklama - Mobilde kısa */}
                  <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {currentMovie.description}
                  </p>

                  {/* Butonlar */}
                  <div className="flex flex-col xs:flex-row gap-1.5 sm:gap-2 md:gap-3">
                    <button 
                      onClick={handleWatchTrailer}
                      className="flex items-center justify-center space-x-1.5 sm:space-x-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-md sm:rounded-lg font-semibold transition-all duration-300 shadow-lg text-xs sm:text-sm"
                    >
                      <PlayIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Fragman</span>
                    </button>
                    
                    <button 
                      onClick={handleViewDetails}
                      className="flex items-center justify-center bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-md sm:rounded-lg font-semibold transition-all duration-300 border border-white/30 text-xs sm:text-sm"
                    >
                      <span>Detay</span>
                    </button>
                  </div>
                </div>

                {/* Sağ Taraf - Film Posteri */}
                <div className="col-span-4 sm:col-span-5 md:col-span-4 lg:col-span-5 flex justify-center md:justify-end">
                  <div className="relative group">
                    <img 
                      src={currentMovie.poster} 
                      alt={currentMovie.title}
                      className="w-20 h-28 xs:w-24 xs:h-36 sm:w-32 sm:h-48 md:w-40 md:h-60 lg:w-48 lg:h-72 object-cover rounded-lg sm:rounded-xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105"

                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg sm:rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigasyon Okları */}
          <button 
            onClick={handlePrevSlide}
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-1.5 sm:p-2 md:p-3 rounded-full transition-all duration-200 z-40"
            aria-label="Önceki film"
          >
            <ChevronLeftIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </button>

          <button 
            onClick={handleNextSlide}
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-1.5 sm:p-2 md:p-3 rounded-full transition-all duration-200 z-40"
            aria-label="Sonraki film"
          >
            <ChevronRightIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </button>

          {/* Slide Göstergeleri */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-30">
            {movies.map((_, index) => (
              <button
                key={index}
                onClick={() => handleGoToSlide(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`${index + 1}. filmi göster`}
              />
            ))}
          </div>

          {/* İlerleme Çubuğu */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-white/20">
            <div 
              className="h-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-1000"
              style={{ width: `${((currentSlide + 1) / movies.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieBanner;