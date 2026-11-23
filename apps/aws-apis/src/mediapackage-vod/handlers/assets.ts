import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteAssetsIdRoute, getAssetsIdRoute, getAssetsRoute, postAssetsRoute } from '../routes'

const app = new OpenAPIHono()

export const assetsHandler = app
  .openapi(postAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAssetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
