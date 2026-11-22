import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SitesSiteIdAssetfiltersAssetfilterIdRoute,
  getApiV1SitesSiteIdAssetfiltersAssetfilterIdRoute,
  getApiV1SitesSiteIdAssetfiltersRoute,
  postApiV1SitesSiteIdAssetfiltersRoute,
  putApiV1SitesSiteIdAssetfiltersAssetfilterIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesAssetFiltersHandler = app
  .openapi(getApiV1SitesSiteIdAssetfiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdAssetfiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdAssetfiltersAssetfilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdAssetfiltersAssetfilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdAssetfiltersAssetfilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
