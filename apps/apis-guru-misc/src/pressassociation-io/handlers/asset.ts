import { OpenAPIHono } from '@hono/zod-openapi'
import { getAssetAssetIdContributorRoute, getAssetAssetIdRoute, getAssetRoute } from '../routes'

const app = new OpenAPIHono()

export const assetHandler = app
  .openapi(getAssetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetAssetIdContributorRoute, (c) => {
    throw new Error('Not implemented')
  })
