import { OpenAPIHono } from '@hono/zod-openapi'
import { getNetworkErasRoute, getNetworkRoute } from '../routes'

const app = new OpenAPIHono()

export const networkHandler = app
  .openapi(getNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworkErasRoute, (c) => {
    throw new Error('Not implemented')
  })
