import { OpenAPIHono } from '@hono/zod-openapi'
import { postBridgeDeleteJsonRoute, postBridgeUpdateJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const bridgeHandler = app
  .openapi(postBridgeDeleteJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBridgeUpdateJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
