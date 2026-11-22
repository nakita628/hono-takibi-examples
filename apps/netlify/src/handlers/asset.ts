import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSitesSiteIdAssetsAssetIdRoute,
  getSitesSiteIdAssetsAssetIdRoute,
  getSitesSiteIdAssetsRoute,
  postSitesSiteIdAssetsRoute,
  putSitesSiteIdAssetsAssetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assetHandler = app
  .openapi(getSitesSiteIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
