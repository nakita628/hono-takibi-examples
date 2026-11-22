import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1QueueDetailsRoute } from '../routes'

const app = new OpenAPIHono()

export const queueDetailsHandler = app.openapi(getApiV1QueueDetailsRoute, (c) => {
  throw new Error('Not implemented')
})
