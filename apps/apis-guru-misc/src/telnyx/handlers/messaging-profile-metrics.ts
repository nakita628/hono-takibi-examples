import { OpenAPIHono } from '@hono/zod-openapi'
import { getMessagingProfileMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const messagingProfileMetricsHandler = app.openapi(getMessagingProfileMetricsRoute, (c) => {
  throw new Error('Not implemented')
})
