import { OpenAPIHono } from '@hono/zod-openapi'
import { postChatUnfurlRoute } from '../routes'

const app = new OpenAPIHono()

export const chatUnfurlHandler = app.openapi(postChatUnfurlRoute, (c) => {
  throw new Error('Not implemented')
})
