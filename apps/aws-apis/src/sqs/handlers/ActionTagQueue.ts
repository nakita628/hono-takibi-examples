import { OpenAPIHono } from '@hono/zod-openapi'
import { postActionTagQueueRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionTagQueueHandler = app.openapi(postActionTagQueueRoute, (c) => {
  throw new Error('Not implemented')
})
