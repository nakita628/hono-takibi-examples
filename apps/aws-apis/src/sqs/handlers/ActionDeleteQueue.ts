import { OpenAPIHono } from '@hono/zod-openapi'
import { postActionDeleteQueueRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteQueueHandler = app.openapi(postActionDeleteQueueRoute, (c) => {
  throw new Error('Not implemented')
})
