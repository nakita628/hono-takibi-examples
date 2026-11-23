import { OpenAPIHono } from '@hono/zod-openapi'
import { getRelayRelayIdRoute, postRelayRoute } from '../routes'

const app = new OpenAPIHono()

export const relayHandler = app
  .openapi(postRelayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRelayRelayIdRoute, (c) => {
    throw new Error('Not implemented')
  })
