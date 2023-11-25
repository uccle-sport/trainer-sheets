import React from 'react'

import { DayStateEnum } from '../../../helpers/types'
import './index.css'

interface DayProps {
  date: string
  dayOfTheWeek: string
  state: DayStateEnum
}

export const Day = ({ date, dayOfTheWeek, state }: DayProps): JSX.Element => {
  return (
    <div className={`${state === DayStateEnum.Active ? 'day day--active' : state === DayStateEnum.Disabled ? 'day day--disabled' : 'day'}`}>
      <p className="day__title">{dayOfTheWeek}</p>
      <div className="day__number">
        <p>{date}</p>
      </div>
    </div>
  )
}
