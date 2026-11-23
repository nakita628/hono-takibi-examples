import { OpenAPIHono } from '@hono/zod-openapi'
import { getCartPluginListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartPluginListJsonHandler = app.openapi(getCartPluginListJsonRoute, (c) => {
  throw new Error('Not implemented')
})
