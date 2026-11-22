import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiMonitorStatusLogIdRoute, getApiMonitorStatusLogRoute } from '../routes'

const app = new OpenAPIHono()

export const monitorStatusLogHandler = app
  .openapi(getApiMonitorStatusLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMonitorStatusLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
