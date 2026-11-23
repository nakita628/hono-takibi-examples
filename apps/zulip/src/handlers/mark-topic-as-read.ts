import { OpenAPIHono } from '@hono/zod-openapi'
import { postMarkTopicAsReadRoute } from '../routes'

const app = new OpenAPIHono()

export const markTopicAsReadHandler = app.openapi(postMarkTopicAsReadRoute, (c) => {
  throw new Error('Not implemented')
})
