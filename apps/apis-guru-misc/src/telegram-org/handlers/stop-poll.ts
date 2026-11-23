import { OpenAPIHono } from '@hono/zod-openapi'
import { postStopPollRoute } from '../routes'

const app = new OpenAPIHono()

export const stopPollHandler = app.openapi(postStopPollRoute, (c) => {
  throw new Error('Not implemented')
})
