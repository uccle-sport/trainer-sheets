import React from 'react'
import Icon from '@ant-design/icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { arrowLeftIcn, arrowRightIcn, calendarIcn } from '../../assets/CustomIcons'
import './index.css'
import { Day } from './Day'
import { FAKE_MONTH } from '../../helpers/fakeData'

interface CalendarProps {
  monthTitle: string
}

export const Calendar = ({ monthTitle }: CalendarProps): JSX.Element => {
  return (
    <div className="calendar">
      <div className="calendar__month">
        <div className="calendar__month__innerContainer">
          <button className="calendar__month__arrow">
            <Icon component={() => arrowLeftIcn()} />
          </button>
          <div className="calendar__month__title">
            <div className="calendar__month__title__icn">
              <Icon component={() => calendarIcn()} />
            </div>
            <p>{monthTitle}</p>
          </div>
          <button className="calendar__month__arrow">
            <Icon component={() => arrowRightIcn()} />
          </button>
        </div>
      </div>
      <div className="calendar__days">
        <Swiper spaceBetween={7} slidesPerView={'auto'} grabCursor={true}>
          <div className="transparentOverlay"></div>
          {FAKE_MONTH.map((item, index) => (
            <SwiperSlide key={index}>
              <Day date={item.date} dayOfTheWeek={item.dayOfTheWeek} state={item.state} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
