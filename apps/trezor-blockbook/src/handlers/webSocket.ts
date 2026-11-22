import { OpenAPIHono } from '@hono/zod-openapi'
import { getWebsocketRoute } from '../routes'

const app = new OpenAPIHono()

export const webSocketHandler = app.openapi(getWebsocketRoute, (c) => {
  throw new Error('Not implemented')
})
