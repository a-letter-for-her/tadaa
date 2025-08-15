import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SorryLetter from './SorryLetter'
import './PaginatedSorryLetter.css'

interface LetterData {
  title: string
  message: string
  sunExpression: 'sad' | 'happy' | 'angry'
  moonExpression: 'sad' | 'happy' | 'angry'
}

const letterData: LetterData[] = [
  {
    title: "",
    message: "هول حيدر و زهراء",
    sunExpression: 'happy',
    moonExpression: 'happy'
  },
  {
    title: "",
    message: "حيدر و زهراء عم يتحدثوا و مبسوطين",
    sunExpression: 'happy',
    moonExpression: 'happy'
  },
  {
    title: "",
    message: "حيدر مبسوط و مكيّف انو زهراء بدها تلبس عباية، بس ما بده يبيّن حماسه كتير",
    sunExpression: 'happy',
    moonExpression: 'happy'
  },
  {
    title: "",
    message: "و بعداااااان",
    sunExpression: 'happy',
    moonExpression: 'happy'
  },
  {
    title: "",
    message: "زهراء بتمزح معه....",
    sunExpression: 'sad',
    moonExpression: 'happy'
  },
  {
    title: "",
    message: "حيدر ما فهم انه مزحة، و دغري اتذكر حكي النهار اللي قبل، و ما قدر يستوعِب الموضوع..",
    sunExpression: 'angry',
    moonExpression: 'happy'
  },
  {
    title: "",
    message: "حاول حيدر يركّز عالاشيا الحلوة، بس ما تحمّل و عقله نسي كل شي",
    sunExpression: 'angry',
    moonExpression: 'happy'
  },
  {
    title: "",
    message: "و زهراء قاعدة ناطرة يحكيها، مش عارفة انه متضايق انو مش قادر يحكيها (عميقة)",
    sunExpression: 'sad',
    moonExpression: 'sad'
  },
  {
    title: "",
    message: "ما اختلفنا انو حيدر استغبى، بس حيدر كان متضايق",
    sunExpression: 'sad',
    moonExpression: 'sad'
  },
  {
    title: "",
    message: "وشوية و الموضوع كبر كتير، و الاتنان بلشوا يخبصوا بالحكي",
    sunExpression: 'angry',
    moonExpression: 'angry'
  },
  {
    title: "",
    message: "و زهراء بتبق البحصة و بتقول لحيدر انو هوي غبي لأن مش عم ينتبه للاشيا اللي عم تعملهن كرماله..",
    sunExpression: 'angry',
    moonExpression: 'angry'
  },
  {
    title: "",
    message: "و هون حيدر فاق من حالته العبيطة و اتذكر كل شي و اتذكر انو زهراء جد بتهتم لأمره بس هيي زنخة",
    sunExpression: 'happy',
    moonExpression: 'angry'
  },
  {
    title: "",
    message: "بس زهراء بطّلت مقتنعة انو اللي صار مع حيدر هوي بس للحظة وحدة ما كان قادر يشوف فيها متل الخلق، لأن كل اللي براسه انو ما بده تنتهي",
    sunExpression: 'sad',
    moonExpression: 'angry'
  },
  {
    title: "",
    message: "حيدر اتضايق اكتر انو زهراء معتبرة انو هوي ما عم يقدّر تقديرها لقلو",
    sunExpression: 'sad',
    moonExpression: 'angry'
  },
  {
    title: "",
    message: "بس حيدر كل يوم و يوم بصير بده زهراء اكتر و اكتر بسبب هيدي الأفعال، اللي زهراء العبيطة معتبرة انو مش عم يقدرها، بس هوي مش عم ينساها",
    sunExpression: 'sad',
    moonExpression: 'angry'
  },
  {
    title: "",
    message: "صار في تخبيص و عناد كتير، وزهراء صارت موجوعة",
    sunExpression: 'sad',
    moonExpression: 'sad'
  },
  {
    title: "",
    message: "و حيدر موجوع عليها اكتر منها، و مع هيك ما قادر يسكت كرمال ما بده يخسرها",
    sunExpression: 'sad',
    moonExpression: 'sad'
  },
  {
    title: "",
    message: "و بعد احاديث طويلة و تبريرات كتار، زهراء بعدها مش مقتنعة انو حيدر جد بقدّرها، و حيدر جد ما بينسى اي شي بتعمله، و حيدر جد كل يوم عم تصير تعنيله اكتر و اكتر ،و مش العكس ابدا",
    sunExpression: 'sad',
    moonExpression: 'sad'
  },
  {
    title: "",
    message: "حيدر صار يحكي شو ما كان بحيلا طريقة ممكنة كرمال زهراء تفهمه، و تتفهمّه، و تعرف انه كان متضايق بهيدي اللحظة ما اكتر من هيك، و انو العبيطة انكسر شي جواتها بس حيدر انكسر كلّه لما حسها راحت من بين ايديه",
    sunExpression: 'sad',
    moonExpression: 'sad'
  },
  {
    title: "",
    message: "و خاصة انو ما في سبب غير انو بلّشت بمزحة و تحليلات و سوء تفاهم و الله يلعن الشّيطان",
    sunExpression: 'angry',
    moonExpression: 'angry'
  },
  {
    title: "",
    message: "حيدر اجا بده يعتذر من زهراء بس حيدر ما عارف شو يكتب",
    sunExpression: 'sad',
    moonExpression: 'sad'
  },
  {
    title: "",
    message: "ب اخر رسالة اعتذار حيدر كتب كل شي بقلبه من دون ما يفكّر",
    sunExpression: 'sad',
    moonExpression: 'sad'
  },
  {
    title: "",
    message: "بس هلق اللي بقلب حيدر انو ما بده يخسر زهراء",
    sunExpression: 'sad',
    moonExpression: 'sad'
  },
  {
    title: "",
    message: "فا ما عندي شي غير انو من كل قلبي، والله من كل قلبي، بعتذر عتخبيص مبارح.",
    sunExpression: 'happy',
    moonExpression: 'happy'
  }
]

const PaginatedSorryLetter: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : letterData.length - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < letterData.length - 1 ? prev + 1 : 0))
  }

  const currentLetter = letterData[currentIndex]

  return (
    <div className="paginated-container">
      <div className="pagination-controls">
        <button 
          className="nav-button prev-button" 
          onClick={goToPrevious}
          aria-label="Previous letter"
        >
          <ChevronLeft size={28} strokeWidth={3} />
        </button>
        
        <div className="letter-wrapper">
          <SorryLetter 
            title={currentLetter.title}
            message={currentLetter.message}
            sunExpression={currentLetter.sunExpression}
            moonExpression={currentLetter.moonExpression}
          />
        </div>
        
        <button 
          className="nav-button next-button" 
          onClick={goToNext}
          aria-label="Next letter"
        >
          <ChevronRight size={28} strokeWidth={3} />
        </button>
      </div>
      
      <div className="pagination-indicator">
        {/* <div className="dots-container">
          {(() => {
            const maxDots = 7;
            const totalPages = letterData.length;
            
            if (totalPages <= maxDots) {
              // Show all dots if we have few pages
              return letterData.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to letter ${index + 1}`}
                />
              ));
            }
            
            // Show smart pagination for many pages
            let startIndex = Math.max(0, currentIndex - 3);
            const endIndex = Math.min(totalPages - 1, startIndex + maxDots - 1);
            
            if (endIndex - startIndex < maxDots - 1) {
              startIndex = Math.max(0, endIndex - maxDots + 1);
            }
            
            const dots = [];
            
            // First page dot
            if (startIndex > 0) {
              dots.push(
                <button
                  key={0}
                  className={`dot ${0 === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(0)}
                  aria-label="Go to letter 1"
                />
              );
              if (startIndex > 1) {
                dots.push(<span key="ellipsis1" className="ellipsis">...</span>);
              }
            }
            
            // Middle dots
            for (let i = startIndex; i <= endIndex; i++) {
              dots.push(
                <button
                  key={i}
                  className={`dot ${i === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to letter ${i + 1}`}
                />
              );
            }
            
            // Last page dot
            if (endIndex < totalPages - 1) {
              if (endIndex < totalPages - 2) {
                dots.push(<span key="ellipsis2" className="ellipsis">...</span>);
              }
              dots.push(
                <button
                  key={totalPages - 1}
                  className={`dot ${totalPages - 1 === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(totalPages - 1)}
                  aria-label={`Go to letter ${totalPages}`}
                />
              );
            }
            
            return dots;
          })()}
        </div> */}
        <div className="page-info">
          {currentIndex + 1} of {letterData.length}
        </div>
      </div>
    </div>
  )
}

export default PaginatedSorryLetter