import React from 'react'

import { TrainingCard } from '../TrainingCard'
import { TRAININGS_LIST } from '../../helpers/fakeData'
import './index.css'

export const TrainingsList = () => {
  return (
    <div className="trainingsList">
      <div className="trainingsList__innerWrap">
        {TRAININGS_LIST.map((item, index) => (
          <TrainingCard training={item} key={index} />
        ))}
      </div>
    </div>
  )
}
