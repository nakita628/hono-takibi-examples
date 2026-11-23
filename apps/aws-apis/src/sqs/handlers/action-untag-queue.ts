import { OpenAPIHono } from '@hono/zod-openapi'
import { postActionUntagQueueRoute } from '../routes'

const app = new OpenAPIHono()

export const actionUntagQueueHandler = app.openapi(postActionUntagQueueRoute, (c) => {
  throw new Error('Not implemented')
})
