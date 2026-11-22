import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1FeedbackRoute } from '../routes'

const app = new OpenAPIHono()

export const feedbackHandler = app.openapi(postV1FeedbackRoute, (c) => {
  throw new Error('Not implemented')
})
