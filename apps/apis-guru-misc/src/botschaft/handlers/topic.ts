import { OpenAPIHono } from '@hono/zod-openapi'
import { getTopicTopicNameRoute } from '../routes'

const app = new OpenAPIHono()

export const topicHandler = app.openapi(getTopicTopicNameRoute, (c) => {
  throw new Error('Not implemented')
})
