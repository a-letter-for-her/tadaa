import React from 'react'
import { WiDaySunny, WiNightClear } from 'react-icons/wi'
import './SorryLetter.css'

interface SorryLetterProps {
  title?: string
  message: string
  sunExpression: 'sad' | 'happy' | 'angry'
  moonExpression: 'sad' | 'happy' | 'angry'
  showControls?: boolean
}

const SorryLetter: React.FC<SorryLetterProps> = ({ 
  title = "I'm Sorry", 
  message, 
  sunExpression,
  moonExpression, 
  showControls = false 
}) => {
  return (
    <div className="sorry-container">
      {/* Original Characters - Commented Out */}
      {/* 
      <div className="characters">
        <div className="character">
          <div className="stick-man">
            <div className="head">
              <div className={`face ${expression}`}>
                <div className="eyes">
                  <div className="eye"></div>
                  <div className="eye"></div>
                </div>
                <div className="mouth"></div>
              </div>
            </div>
            <div className="body"></div>
            <div className="arms"></div>
            <div className="legs">
              <div className="leg-left"></div>
              <div className="leg-right"></div>
            </div>
          </div>
          <div className="character-label">Haidar</div>
        </div>

        <div className="character">
          <div className="stick-woman">
            <div className="head">
              <div className="hair"></div>
              <div className={`face ${expression}`}>
                <div className="eyes">
                  <div className="eye"></div>
                  <div className="eye"></div>
                </div>
                <div className="mouth"></div>
              </div>
            </div>
            <div className="body"></div>
            <div className="dress"></div>
            <div className="arms"></div>
            <div className="legs">
              <div className="leg-left"></div>
              <div className="leg-right"></div>
              <div className="shoes">
                <div className="shoe-left"></div>
                <div className="shoe-right"></div>
              </div>
            </div>
          </div>
          <div className="character-label">Zahraa</div>
        </div>
      </div>
      */}

      {/* New Sun and Moon Characters */}
      <div className="celestial-characters">
        <div className="celestial-character">
          <div className="sun-container">
            <WiDaySunny className={`sun-icon ${sunExpression}`} />
            <div className={`sun-face ${sunExpression}`}>
              <div className="celestial-eyes">
                <div className="celestial-eye"></div>
                <div className="celestial-eye"></div>
              </div>
              <div className="celestial-mouth"></div>
            </div>
          </div>
          <div className="character-label">Sun</div>
        </div>

        <div className="celestial-character">
          <div className="moon-container">
            <WiNightClear className={`moon-icon ${moonExpression}`} />
            <div className={`moon-face ${moonExpression}`}>
              <div className="celestial-eyes">
                <div className="celestial-eye"></div>
                <div className="celestial-eye"></div>
              </div>
              <div className="celestial-mouth"></div>
            </div>
          </div>
          <div className="character-label">Moon</div>
        </div>
      </div>

      <h1 className="letter-title">{title}</h1>
      
      <div className="letter-content" dangerouslySetInnerHTML={{ __html: message }} />

      {showControls && (
        <div className="controls">
          <button>This is a static letter page</button>
        </div>
      )}
    </div>
  )
}

export default SorryLetter