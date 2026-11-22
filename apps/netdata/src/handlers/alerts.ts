import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1AlarmCountRoute,
  getApiV1AlarmLogRoute,
  getApiV1AlarmsRoute,
  getApiV1AlarmsValuesRoute,
  getApiV1AlarmVariablesRoute,
  getApiV2AlertConfigRoute,
  getApiV2AlertsRoute,
  getApiV2AlertTransitionsRoute,
  getApiV3AlertConfigRoute,
  getApiV3AlertsRoute,
  getApiV3AlertTransitionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const alertsHandler = app
  .openapi(getApiV3AlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AlertTransitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AlertConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AlertTransitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AlertConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AlarmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AlarmsValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AlarmLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AlarmCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AlarmVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
