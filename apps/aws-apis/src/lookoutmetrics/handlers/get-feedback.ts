import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetFeedbackRoute } from '../routes'

const app = new OpenAPIHono()

export const getFeedbackHandler = app.openapi(postGetFeedbackRoute, (c) => {
  throw new Error('Not implemented')
})
