import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1ConstAlarmDefsRoute,
  getApiV1ConstApChannelsRoute,
  getApiV1ConstApLedStatusRoute,
  getApiV1ConstApplicationsRoute,
  getApiV1ConstCallEventsRoute,
  getApiV1ConstClientEventsRoute,
  getApiV1ConstCountriesRoute,
  getApiV1ConstDefaultGatewayConfigRoute,
  getApiV1ConstDeviceEventsRoute,
  getApiV1ConstDeviceModelsRoute,
  getApiV1ConstInsightMetricsRoute,
  getApiV1ConstLanguagesRoute,
  getApiV1ConstMxedgeEventsRoute,
  getApiV1ConstMxedgeModelsRoute,
  getApiV1ConstSystemEventsRoute,
  getApiV1ConstTrafficTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const constantsHandler = app
  .openapi(getApiV1ConstAlarmDefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstApChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstApLedStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstCallEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstClientEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstDefaultGatewayConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstDeviceEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstDeviceModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstInsightMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstMxedgeEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstMxedgeModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstSystemEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstTrafficTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
