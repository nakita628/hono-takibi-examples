import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiFeedbackRoute } from '../routes'

const app = new OpenAPIHono()

export const feedbackHandler = app.openapi(postApiFeedbackRoute, (c) => {
  throw new Error('Not implemented')
})
