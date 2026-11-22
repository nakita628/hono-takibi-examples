import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMonitorsMonitorUidRoute,
  getMonitorsMonitorUidRoute,
  getMonitorsRoute,
  postMonitorsMonitorUidRunRoute,
  postMonitorsRoute,
  putMonitorsMonitorUidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const monitorsHandler = app
  .openapi(getMonitorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMonitorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMonitorsMonitorUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMonitorsMonitorUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMonitorsMonitorUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMonitorsMonitorUidRunRoute, (c) => {
    throw new Error('Not implemented')
  })
