import React, { useState } from 'react'
import Icon from '@ant-design/icons'
import { Select, Button, Form, ConfigProvider } from 'antd'

import './index.css'
import { cancelIcn, confirmedIcn, faceIcn, pitchIcn, teamIcn, reassignIcn } from '../../assets/CustomIcons'
import { SUBSTITUTE_TRAINER } from '../../helpers/fakeData'

interface TrainingCardProps {
  training: {
    timeSlot: string
    trainer: string
    team: string
    pitch: string
    isTrainingConfirmed: boolean
  }
}

export const ANTD_THEME_CONFIRMED = {
  token: {
    colorPrimary: '#009290',
  },
}

export const TrainingCard = ({ training }: TrainingCardProps): JSX.Element => {
  const { timeSlot, trainer, team, pitch, isTrainingConfirmed } = training
  const [substituteTrainerMenuIsOpen, setSubstituteTrainerMenuOpen] = useState(false)
  const [form] = Form.useForm()
  const onSearch = (value: string) => {
    console.log('search:', value)
  }

  const handleSubmit = (values: any) => {
    console.log(values)
  }

  const onResetForm = () => {
    form.resetFields()
    setSubstituteTrainerMenuOpen(false)
  }

  // Filter `option.label` match the user type `input`
  const filterOption = (input: string, option?: { label: string; value: string }) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())

  return (
    <div className={`${isTrainingConfirmed ? 'trainingCard--confirmed trainingCard' : 'trainingCard'}`}>
      <div className="trainingCard__mainInfo">
        <div className="trainingCard__mainInfo__time">
          <span>{timeSlot}</span>
        </div>
        <div className="trainingCard__mainInfo__trainingInfoWrap">
          <div className="trainingCard__mainInfo__trainingInfoItem">
            <div className="trainingCard__mainInfo__trainingInfoItem__title">
              <Icon component={faceIcn} />
              <p>Trainer:</p>
            </div>
            <div className="trainingCard__mainInfo__trainingInfoItem__value">
              <span>{trainer}</span>
            </div>
          </div>
          <div className="trainingCard__mainInfo__trainingInfoWrap__devider"></div>
          <div className="trainingCard__mainInfo__trainingInfoItem">
            <div className="trainingCard__mainInfo__trainingInfoItem__title">
              <Icon component={teamIcn} />
              <p>Team:</p>
            </div>
            <div className="trainingCard__mainInfo__trainingInfoItem__value">
              <span>{team}</span>
            </div>
          </div>
          <div className="trainingCard__mainInfo__trainingInfoWrap__devider"></div>
          <div className="trainingCard__mainInfo__trainingInfoItem">
            <div className="trainingCard__mainInfo__trainingInfoItem__title">
              <Icon component={pitchIcn} />
              <p>Pitch:</p>
            </div>
            <div className="trainingCard__mainInfo__trainingInfoItem__value">
              <span>{pitch}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="trainingCard__devider"></div>
      {isTrainingConfirmed ? (
        <ConfigProvider theme={ANTD_THEME_CONFIRMED}>
          <div className="trainingCard__buttons">
            <Button block type="primary">
              <Icon component={confirmedIcn} /> <span>Confirmed</span>
            </Button>
          </div>
        </ConfigProvider>
      ) : (
        <>
          {substituteTrainerMenuIsOpen ? (
            <Form layout="vertical" className="trainingCard__substituteTrainer" form={form} onFinish={(values) => handleSubmit(values)}>
              <Form.Item label="Choose a substitute trainer:">
                <Select showSearch placeholder="Select a person" optionFilterProp="children" onSearch={onSearch} filterOption={filterOption} options={SUBSTITUTE_TRAINER} />
              </Form.Item>

              <ConfigProvider theme={ANTD_THEME_CONFIRMED}>
                <div className="trainingCard__substituteTrainer__buttons">
                  <Button block onClick={() => onResetForm()}>
                    <Icon component={cancelIcn} /> <span>Cancel</span>
                  </Button>
                  <Button block type="primary" htmlType="submit" onClick={() => setSubstituteTrainerMenuOpen(false)}>
                    <Icon component={confirmedIcn} /> <span>Save changes</span>
                  </Button>
                </div>
              </ConfigProvider>
            </Form>
          ) : (
            <div className="trainingCard__buttons">
              <Button block onClick={() => setSubstituteTrainerMenuOpen(true)}>
                <Icon component={reassignIcn} /> <span>Reassign</span>
              </Button>
              <Button block type="primary">
                <Icon component={confirmedIcn} /> <span>Confirm</span>
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
