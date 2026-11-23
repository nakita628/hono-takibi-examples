import { OpenAPIHono } from '@hono/zod-openapi'
import { getSendFeedbackRoute, postSendFeedbackRoute } from '../routes'

const app = new OpenAPIHono()

export const sendFeedbackHandler = app
  .openapi(getSendFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSendFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
