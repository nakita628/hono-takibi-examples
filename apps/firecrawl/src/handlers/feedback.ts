import { OpenAPIHono } from '@hono/zod-openapi'
import { postFeedbackRoute } from '../routes'

const app = new OpenAPIHono()

export const feedbackHandler = app.openapi(postFeedbackRoute, (c) => {
  throw new Error('Not implemented')
})
