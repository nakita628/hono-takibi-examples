import { OpenAPIHono } from '@hono/zod-openapi'
import { postBotPnpPushRoute } from '../routes'

const app = new OpenAPIHono()

export const botHandler = app.openapi(postBotPnpPushRoute, (c) => {
  throw new Error('Not implemented')
})
