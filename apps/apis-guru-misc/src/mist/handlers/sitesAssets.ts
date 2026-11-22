import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SitesSiteIdAssetsAssetIdRoute,
  getApiV1SitesSiteIdAssetsAssetIdRoute,
  getApiV1SitesSiteIdAssetsRoute,
  getApiV1SitesSiteIdStatsAssetsCountRoute,
  getApiV1SitesSiteIdStatsAssetsSearchRoute,
  getApiV1SitesSiteIdStatsFilteredAssetsRoute,
  postApiV1SitesSiteIdAssetsImportRoute,
  postApiV1SitesSiteIdAssetsRoute,
  putApiV1SitesSiteIdAssetsAssetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesAssetsHandler = app
  .openapi(getApiV1SitesSiteIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdAssetsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsAssetsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsAssetsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsFilteredAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
