import { OpenAPIHono } from '@hono/zod-openapi'
import { getSitesSiteIdAssetsAssetIdPublicSignatureRoute } from '../routes'

const app = new OpenAPIHono()

export const assetPublicSignatureHandler = app.openapi(
  getSitesSiteIdAssetsAssetIdPublicSignatureRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
