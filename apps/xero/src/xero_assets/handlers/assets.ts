import { OpenAPIHono } from '@hono/zod-openapi'
import { getAssetsIdRoute, getAssetsRoute, postAssetsRoute } from '../routes'

const app = new OpenAPIHono()

export const assetsHandler = app
  .openapi(getAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
