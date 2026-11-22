import { OpenAPIHono } from '@hono/zod-openapi'
import { getAssetsAssetIdRoute, getAssetsAssetIdSignedUrlRoute, postAssetsRoute } from '../routes'

const app = new OpenAPIHono()

export const assetsHandler = app
  .openapi(postAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetsAssetIdSignedUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
