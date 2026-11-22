import { OpenAPIHono } from '@hono/zod-openapi'
import { postActionListQueueTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListQueueTagsHandler = app.openapi(postActionListQueueTagsRoute, (c) => {
  throw new Error('Not implemented')
})
