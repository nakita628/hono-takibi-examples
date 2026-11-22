import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSitesRoute,
  getSitesSiteIdRoute,
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
  .openapi(getSitesSiteIdSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdSitesSiteId1Route, (c) => {
    throw new Error('Not implemented')
  })
