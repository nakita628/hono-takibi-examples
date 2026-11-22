import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3QueueStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const queueStatusHandler = app.openapi(getApiV3QueueStatusRoute, (c) => {
  throw new Error('Not implemented')
})
