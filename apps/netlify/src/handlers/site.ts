import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSitesSiteIdRoute,
  getAccountSlugSitesRoute,
  getSitesRoute,
  getSitesSiteIdRoute,
  patchSitesSiteIdRoute,
  postAccountSlugSitesRoute,
  postSitesRoute,
  putSitesSiteIdDisableRoute,
  putSitesSiteIdEnableRoute,
  putSitesSiteIdUnlinkRepoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const siteHandler = app
  .openapi(getSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdUnlinkRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountSlugSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountSlugSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
