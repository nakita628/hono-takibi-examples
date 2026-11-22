import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SitesSiteIdRssizonesRssizoneIdRoute,
  getApiV1SitesSiteIdRssizonesRoute,
  getApiV1SitesSiteIdRssizonesRssizoneIdRoute,
  postApiV1SitesSiteIdRssizonesRoute,
  putApiV1SitesSiteIdRssizonesRssizoneIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesRssizonesHandler = app
  .openapi(getApiV1SitesSiteIdRssizonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdRssizonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdRssizonesRssizoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdRssizonesRssizoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdRssizonesRssizoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
