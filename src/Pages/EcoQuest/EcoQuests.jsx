import React from 'react'
import { EcoQuestItem } from '../../components/EcoQuestItem.jsx'
import  {SideNavBar} from '../../components/SideNavBar.jsx' 

function EcoQuests() {
  const quests = [
    { title: 'Recycle 20 plastic bottles', points: 20, label:50},
    { title: 'Reduce water usage by 10%', points: 30, label: 25 },
    { title: 'Plant a tree', points: 50, label: 75 },
  ];
  return (
    <div >
      <h1 style={{marginLeft: '200px'}}>EcoQuests</h1>
     <SideNavBar />
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