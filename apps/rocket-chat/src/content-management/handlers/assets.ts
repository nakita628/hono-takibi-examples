import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1AssetsSetAssetRoute, postApiV1AssetsUnsetAssetRoute } from '../routes'

const app = new OpenAPIHono()

export const assetsHandler = app
  .openapi(postApiV1AssetsSetAssetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AssetsUnsetAssetRoute, (c) => {
    throw new Error('Not implemented')
  })
