import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteVirtualNetworksIdRoute, getVirtualNetworksIdRoute } from '../routes'

const app = new OpenAPIHono()

export const virtualNetworksHandler = app
  .openapi(deleteVirtualNetworksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVirtualNetworksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
