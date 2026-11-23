import { OpenAPIHono } from '@hono/zod-openapi'
import { postPutFeedbackRoute } from '../routes'

const app = new OpenAPIHono()

export const putFeedbackHandler = app.openapi(postPutFeedbackRoute, (c) => {
  throw new Error('Not implemented')
})
