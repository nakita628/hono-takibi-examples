import { OpenAPIHono } from '@hono/zod-openapi'
import { getVersionWABABotIDRoute } from '../routes'

const app = new OpenAPIHono()

export const whatsAppBusinessBotHandler = app.openapi(getVersionWABABotIDRoute, (c) => {
  throw new Error('Not implemented')
})
