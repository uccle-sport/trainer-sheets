import React from 'react'
import { ConfigProvider } from 'antd'

import { Header } from './Header'
import { Calendar } from './Calendar'
import { TrainingsList } from './TrainingsList'
import './App.less'
import { ANTD_NEW_THEME } from '../helpers/antdTheme'

export const App = (): JSX.Element => {
  return (
    <ConfigProvider theme={ANTD_NEW_THEME}>
      <div className="app">
        <div className="app__innerContainer">
          <Header />
          <Calendar />
          <TrainingsList />
        </div>
      </div>
    </ConfigProvider>
  )
}

export default App
