import { OpenAPIHono } from '@hono/zod-openapi'
import { getAlertsResourceArnRoute } from '../routes'

const app = new OpenAPIHono()

export const alertsResourceArnHandler = app.openapi(getAlertsResourceArnRoute, (c) => {
  throw new Error('Not implemented')
})
