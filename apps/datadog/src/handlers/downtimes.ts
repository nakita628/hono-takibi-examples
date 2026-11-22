import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2DowntimeDowntimeIdRoute,
  getApiV2DowntimeDowntimeIdRoute,
  getApiV2DowntimeRoute,
  getApiV2MonitorMonitorIdDowntimeMatchesRoute,
  patchApiV2DowntimeDowntimeIdRoute,
  postApiV2DowntimeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const downtimesHandler = app
  .openapi(getApiV2DowntimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DowntimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DowntimeDowntimeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DowntimeDowntimeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DowntimeDowntimeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MonitorMonitorIdDowntimeMatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
