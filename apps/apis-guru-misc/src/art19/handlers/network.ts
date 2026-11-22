import { OpenAPIHono } from '@hono/zod-openapi'
import { getNetworksIdRoute, getNetworksRoute } from '../routes'

const app = new OpenAPIHono()

export const networkHandler = app
  .openapi(getNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
