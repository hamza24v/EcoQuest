import React, { useState, useEffect }  from 'react'
import './comp.css'
export const EcoQuestItem = ({ title, points, label }) => {
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    setProgressPercent(label);
  }, [label]);


  return (
    <div className='quest-div'>
        <div className="quest-title">
            <h1>{title}</h1>
            <h1 className='quest-show-points'>{`+${points} points`}</h1>
        </div>

        <div className="quest-progress-bar" style={{ '--progress-percent': progressPercent }} data-label={`${label}%`}>
        </div>
    </div>
  )
}