import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3QueueDetailsRoute } from '../routes'

const app = new OpenAPIHono()

export const queueDetailsHandler = app.openapi(getApiV3QueueDetailsRoute, (c) => {
  throw new Error('Not implemented')
})
