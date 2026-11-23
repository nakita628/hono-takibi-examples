import { OpenAPIHono } from '@hono/zod-openapi'
import { getAlertsRoute } from '../routes'

const app = new OpenAPIHono()

export const alertsHandler = app.openapi(getAlertsRoute, (c) => {
  throw new Error('Not implemented')
})
