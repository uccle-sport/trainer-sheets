import React from 'react'

import { DayStateEnum } from '../../../helpers/types'
import './index.less'
import { Dayjs } from 'dayjs'

interface DayProps {
  day: Dayjs
  date: string
  dayOfTheWeek: string
  state: DayStateEnum
  select: (date: Dayjs) => void
}

export const Day = ({ day, date, dayOfTheWeek, state, select }: DayProps): JSX.Element => {
  return (
    <div className={`${state === DayStateEnum.Active ? 'day day--active' : state === DayStateEnum.Disabled ? 'day day--disabled' : 'day'}`} onClick={() => select(day)}>
      <p className="day__title">{dayOfTheWeek}</p>
      <div className="day__number">
        <p>{date}</p>
      </div>
    </div>
  )
}
