import { OpenAPIHono } from '@hono/zod-openapi'
import { postActionDeleteQueueRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteQueueHandler = app.openapi(postActionDeleteQueueRoute, (c) => {
  throw new Error('Not implemented')
})
