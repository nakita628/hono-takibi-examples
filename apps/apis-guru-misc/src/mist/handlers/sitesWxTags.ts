import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SitesSiteIdWxtagsWxtagIdRoute,
  getApiV1SitesSiteIdWxtagsAppsRoute,
  getApiV1SitesSiteIdWxtagsRoute,
  getApiV1SitesSiteIdWxtagsWxtagIdClientsRoute,
  getApiV1SitesSiteIdWxtagsWxtagIdRoute,
  postApiV1SitesSiteIdWxtagsRoute,
  putApiV1SitesSiteIdWxtagsWxtagIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesWxTagsHandler = app
  .openapi(getApiV1SitesSiteIdWxtagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdWxtagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdWxtagsAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdWxtagsWxtagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdWxtagsWxtagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdWxtagsWxtagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdWxtagsWxtagIdClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
