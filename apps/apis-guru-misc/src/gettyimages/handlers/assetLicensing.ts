import { OpenAPIHono } from '@hono/zod-openapi'
import { postV3AssetLicensingAssetIdRoute } from '../routes'

const app = new OpenAPIHono()

export const assetLicensingHandler = app.openapi(postV3AssetLicensingAssetIdRoute, (c) => {
  throw new Error('Not implemented')
})
