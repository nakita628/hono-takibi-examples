import { OpenAPIHono } from '@hono/zod-openapi'
import { postSendPollRoute } from '../routes'

const app = new OpenAPIHono()

export const sendPollHandler = app.openapi(postSendPollRoute, (c) => {
  throw new Error('Not implemented')
})
