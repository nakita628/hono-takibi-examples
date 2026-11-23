import { OpenAPIHono } from '@hono/zod-openapi'
import { getWebsocketRoute } from '../routes'

const app = new OpenAPIHono()

export const websocketHandler = app.openapi(getWebsocketRoute, (c) => {
  throw new Error('Not implemented')
})
