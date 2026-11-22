import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiPublicFeedbackRoute } from '../routes'

const app = new OpenAPIHono()

export const feedbackHandler = app.openapi(postApiPublicFeedbackRoute, (c) => {
  throw new Error('Not implemented')
})
