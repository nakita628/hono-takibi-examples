import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAlarmsAlarmModelNameKeyValuesIndexRoute,
  getAlarmsAlarmModelNameRoute,
  postAlarmsAcknowledgeRoute,
  postAlarmsDisableRoute,
  postAlarmsEnableRoute,
  postAlarmsResetRoute,
  postAlarmsSnoozeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const alarmsHandler = app
  .openapi(postAlarmsAcknowledgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlarmsDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlarmsEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlarmsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlarmsSnoozeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlarmsAlarmModelNameKeyValuesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlarmsAlarmModelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
