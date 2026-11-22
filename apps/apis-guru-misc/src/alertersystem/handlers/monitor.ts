import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiMonitorIdRoute,
  getApiMonitorIdRoute,
  getApiMonitorRoute,
  postApiMonitorRoute,
  putApiMonitorIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const monitorHandler = app
  .openapi(getApiMonitorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMonitorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiMonitorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMonitorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiMonitorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
