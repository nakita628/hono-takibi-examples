import { OpenAPIHono } from '@hono/zod-openapi'
import { postTopicsTopicRoute } from '../routes'

const app = new OpenAPIHono()

export const topicsHandler = app.openapi(postTopicsTopicRoute, (c) => {
  throw new Error('Not implemented')
})
