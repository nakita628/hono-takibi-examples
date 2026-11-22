import { OpenAPIHono } from '@hono/zod-openapi'
import { getMetroAreaNetworksIdRoute, getMetroAreaNetworksRoute } from '../routes'

const app = new OpenAPIHono()

export const metroAreaNetworksHandler = app
  .openapi(getMetroAreaNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetroAreaNetworksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
