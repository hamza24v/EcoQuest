import React from 'react'
import { EcoQuestItem } from '../components/EcoQuestItem.jsx'
import  {SideNavBar} from '../components/SideNavBar.jsx' 
import './Page.css'
import { quests } from '../constant/quests.js'

function EcoQuests() {
  return (
    <div className='ecoquest'>
      <SideNavBar />
      <h1 >EcoQuests</h1>
     {quests.map((quest, index) => (
        <EcoQuestItem
          key={index}
          title={quest.title}
          points={quest.points}
          label={quest.label}
        />
      ))}
    </div>
  )
}

export default EcoQuests;