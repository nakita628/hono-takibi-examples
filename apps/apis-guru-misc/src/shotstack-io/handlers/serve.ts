import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteAssetsIdRoute, getAssetsIdRoute, getAssetsRenderIdRoute } from '../routes'

const app = new OpenAPIHono()

export const serveHandler = app
  .openapi(getAssetsRenderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAssetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
