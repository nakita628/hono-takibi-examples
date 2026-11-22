import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SitesSiteIdWxtunnelsWxtunnelIdRoute,
  getApiV1SitesSiteIdWxtunnelsRoute,
  getApiV1SitesSiteIdWxtunnelsWxtunnelIdRoute,
  postApiV1SitesSiteIdWxtunnelsRoute,
  putApiV1SitesSiteIdWxtunnelsWxtunnelIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesWxTunnelsHandler = app
  .openapi(getApiV1SitesSiteIdWxtunnelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdWxtunnelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdWxtunnelsWxtunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdWxtunnelsWxtunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdWxtunnelsWxtunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
