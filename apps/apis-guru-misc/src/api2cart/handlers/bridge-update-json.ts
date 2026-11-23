import { OpenAPIHono } from '@hono/zod-openapi'
import { postBridgeUpdateJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const bridgeUpdateJsonHandler = app.openapi(postBridgeUpdateJsonRoute, (c) => {
  throw new Error('Not implemented')
})
