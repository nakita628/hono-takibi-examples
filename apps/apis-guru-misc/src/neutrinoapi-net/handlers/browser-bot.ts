import { OpenAPIHono } from '@hono/zod-openapi'
import { postBrowserBotRoute } from '../routes'

const app = new OpenAPIHono()

export const browserBotHandler = app.openapi(postBrowserBotRoute, (c) => {
  throw new Error('Not implemented')
})
