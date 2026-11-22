import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMonitorMonitorIdRoute,
  getMonitorMonitorIdChecksCheckIdRoute,
  getMonitorMonitorIdChecksRoute,
  getMonitorMonitorIdRoute,
  getMonitorRoute,
  patchMonitorMonitorIdRoute,
  postMonitorMonitorIdRunRoute,
  postMonitorRoute,
} from '../routes'

const app = new OpenAPIHono()

export const monitoringHandler = app
  .openapi(postMonitorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMonitorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMonitorMonitorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMonitorMonitorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMonitorMonitorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMonitorMonitorIdRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMonitorMonitorIdChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMonitorMonitorIdChecksCheckIdRoute, (c) => {
    throw new Error('Not implemented')
  })
