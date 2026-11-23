import { OpenAPIHono } from '@hono/zod-openapi'
import { postSendGameRoute } from '../routes'

const app = new OpenAPIHono()

export const sendGameHandler = app.openapi(postSendGameRoute, (c) => {
  throw new Error('Not implemented')
})
