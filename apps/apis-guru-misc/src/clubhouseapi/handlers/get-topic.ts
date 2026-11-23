import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetTopicRoute } from '../routes'

const app = new OpenAPIHono()

export const getTopicHandler = app.openapi(postGetTopicRoute, (c) => {
  throw new Error('Not implemented')
})
