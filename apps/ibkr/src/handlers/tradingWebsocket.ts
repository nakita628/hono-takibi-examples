import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ApiWsRoute } from '../routes'

const app = new OpenAPIHono()

export const tradingWebsocketHandler = app.openapi(getV1ApiWsRoute, (c) => {
  throw new Error('Not implemented')
})
