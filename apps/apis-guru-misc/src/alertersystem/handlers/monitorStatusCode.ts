import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiMonitorStatusCodeIdRoute, getApiMonitorStatusCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const monitorStatusCodeHandler = app
  .openapi(getApiMonitorStatusCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMonitorStatusCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
