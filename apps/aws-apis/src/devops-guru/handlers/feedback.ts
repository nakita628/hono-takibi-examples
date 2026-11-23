import { OpenAPIHono } from '@hono/zod-openapi'
import { postFeedbackRoute, putFeedbackRoute } from '../routes'

const app = new OpenAPIHono()

export const feedbackHandler = app
  .openapi(postFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
