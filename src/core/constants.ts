// noinspection AllyPlainJsInspection

import { v4 as uuid } from 'uuid'

let browserId = localStorage.getItem('io.icure.browser.id')
!browserId && localStorage.setItem('io.icure.browser.id', (browserId = uuid()))

export const BROWSER_ID = browserId
export const host = window.location.host.replace(/:[0-9]+$/, '')
export const environment =
  {
    'trainer.ucclesport.be': 'prod',
    '127.0.0.1': 'dev',
    localhost: 'dev',
  }[host] ?? 'prod'
export const API_URL =
  {
    prod: 'https://api.ucclesport.be',
    dev: 'http://127.0.0.1:8888',
  }[environment] ?? 'https://api.ucclesport.be'
