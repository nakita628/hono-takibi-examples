import { OpenAPIHono } from '@hono/zod-openapi'
import { postBridgeDeleteJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const bridgeDeleteJsonHandler = app.openapi(postBridgeDeleteJsonRoute, (c) => {
  throw new Error('Not implemented')
})
