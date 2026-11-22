import { OpenAPIHono } from '@hono/zod-openapi'
import { getTwilioRoute, postTwilioRoute } from '../routes'

const app = new OpenAPIHono()

export const twilioHandler = app
  .openapi(getTwilioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTwilioRoute, (c) => {
    throw new Error('Not implemented')
  })
