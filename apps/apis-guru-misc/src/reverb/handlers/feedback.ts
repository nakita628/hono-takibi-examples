import { OpenAPIHono } from '@hono/zod-openapi'
import { getFeedbackFeedbackIdRoute } from '../routes'

const app = new OpenAPIHono()

export const feedbackHandler = app.openapi(getFeedbackFeedbackIdRoute, (c) => {
  throw new Error('Not implemented')
})
