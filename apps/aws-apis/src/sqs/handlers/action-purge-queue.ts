import { OpenAPIHono } from '@hono/zod-openapi'
import { postActionPurgeQueueRoute } from '../routes'

const app = new OpenAPIHono()

export const actionPurgeQueueHandler = app.openapi(postActionPurgeQueueRoute, (c) => {
  throw new Error('Not implemented')
})
