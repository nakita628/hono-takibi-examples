import { OpenAPIHono } from '@hono/zod-openapi'
import { getNetworksIdRoute, getNetworksRoute } from '../routes'

const app = new OpenAPIHono()

export const networksHandler = app
  .openapi(getNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
