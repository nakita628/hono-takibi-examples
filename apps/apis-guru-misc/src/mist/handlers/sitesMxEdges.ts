import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SitesSiteIdMxedgesMxedgeIdRoute,
  getApiV1SitesSiteIdMxedgesMxedgeIdRoute,
  getApiV1SitesSiteIdMxedgesRoute,
  postApiV1SitesSiteIdMxedgesMxedgeIdSupportRoute,
  postApiV1SitesSiteIdMxedgesRoute,
  putApiV1SitesSiteIdMxedgesMxedgeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesMxEdgesHandler = app
  .openapi(getApiV1SitesSiteIdMxedgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMxedgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdMxedgesMxedgeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdMxedgesMxedgeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdMxedgesMxedgeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMxedgesMxedgeIdSupportRoute, (c) => {
    throw new Error('Not implemented')
  })
