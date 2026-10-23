import React, { useState } from 'react'
import Icon from '@ant-design/icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { arrowLeftIcn, arrowRightIcn, calendarIcn } from '../../assets/CustomIcons'
import './index.less'
import { Day } from './Day'
import dayjs from 'dayjs'
import { DayStateEnum } from '../../helpers/types'

export const Calendar = (): JSX.Element => {
  const [selectedDate, setSelectedDate] = useState(dayjs().millisecond(0).second(0).minute(0).hour(0))
  const [selectedMonth, setSelectedMonth] = useState(dayjs().millisecond(0).second(0).minute(0).hour(0).date(1))

  return (
    <div className="calendar">
      <div className="calendar__month">
        <div className="calendar__month__innerContainer">
          <button className="calendar__month__arrow" onClick={() => setSelectedMonth(selectedMonth.add(-1, 'month'))}>
            <Icon component={() => arrowLeftIcn()} />
          </button>
          <div className="calendar__month__title">
            <div className="calendar__month__title__icn">
              <Icon component={() => calendarIcn()} />
            </div>
            <p>{selectedMonth.format('MMMM')}</p>
          </div>
          <button className="calendar__month__arrow" onClick={() => setSelectedMonth(selectedMonth.add(1, 'month'))}>
            <Icon component={() => arrowRightIcn()} />
          </button>
        </div>
      </div>
      <div className="calendar__days">
        <Swiper spaceBetween={7} slidesPerView={'auto'} grabCursor={true}>
          <div className="transparentOverlay"></div>
          {[...Array(selectedMonth.add(1, 'month').add(-1, 'day').date())]
            .map((_, idx) => selectedMonth.date(idx + 1))
            .map((day) => (
              <SwiperSlide key={day.date()}>
                <Day
                  day={day}
                  date={day.format('D')}
                  dayOfTheWeek={day.format('ddd')}
                  state={selectedDate.unix() === day.unix() ? DayStateEnum.Active : day.day() === 0 || day.day() === 6 ? DayStateEnum.Disabled : DayStateEnum.Basic}
                  select={(day) => setSelectedDate(day)}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  )
}
