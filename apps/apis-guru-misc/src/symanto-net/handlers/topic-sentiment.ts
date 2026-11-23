import { OpenAPIHono } from '@hono/zod-openapi'
import { postTopicSentimentRoute } from '../routes'

const app = new OpenAPIHono()

export const topicSentimentHandler = app.openapi(postTopicSentimentRoute, (c) => {
  throw new Error('Not implemented')
})
