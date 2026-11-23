import { OpenAPIHono } from '@hono/zod-openapi'
import { getScheduledPaymentsRoute } from '../routes'

const app = new OpenAPIHono()

export const scheduledPaymentsHandler = app.openapi(getScheduledPaymentsRoute, (c) => {
  throw new Error('Not implemented')
})
