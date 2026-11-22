import { OpenAPIHono } from '@hono/zod-openapi'
import { postAssetsPricesAdjustedForwardRoute, postAssetsPricesAdjustedRoute } from '../routes'

const app = new OpenAPIHono()

export const assetsPricesHandler = app
  .openapi(postAssetsPricesAdjustedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsPricesAdjustedForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
