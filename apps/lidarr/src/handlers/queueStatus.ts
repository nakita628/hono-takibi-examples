import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1QueueStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const queueStatusHandler = app.openapi(getApiV1QueueStatusRoute, (c) => {
  throw new Error('Not implemented')
})
