import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSitesCountRoute,
  getSitesRoute,
  getSitesSiteIdGetByPathPathPathSitesRoute,
  getSitesSiteIdRoute,
  getSitesSiteIdSitesCountRoute,
  getSitesSiteIdSitesRoute,
  getSitesSiteIdSitesSiteId1Route,
  patchSitesSiteIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesSiteHandler = app
  .openapi(getSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdGetByPathPathPathSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdSitesSiteId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdSitesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
