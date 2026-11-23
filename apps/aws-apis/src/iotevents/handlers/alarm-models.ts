import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAlarmModelsAlarmModelNameRoute,
  getAlarmModelsAlarmModelNameRoute,
  getAlarmModelsAlarmModelNameVersionsRoute,
  getAlarmModelsRoute,
  postAlarmModelsAlarmModelNameRoute,
  postAlarmModelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const alarmModelsHandler = app
  .openapi(postAlarmModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlarmModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAlarmModelsAlarmModelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlarmModelsAlarmModelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlarmModelsAlarmModelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlarmModelsAlarmModelNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
