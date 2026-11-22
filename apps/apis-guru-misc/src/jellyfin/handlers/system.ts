import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSystemEndpointRoute,
  getSystemInfoPublicRoute,
  getSystemInfoRoute,
  getSystemLogsLogRoute,
  getSystemLogsRoute,
  getSystemPingRoute,
  getSystemWakeOnLanInfoRoute,
  postSystemPingRoute,
  postSystemRestartRoute,
  postSystemShutdownRoute,
} from '../routes'

const app = new OpenAPIHono()

export const systemHandler = app
  .openapi(getSystemEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemInfoPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemLogsLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemShutdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemWakeOnLanInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
