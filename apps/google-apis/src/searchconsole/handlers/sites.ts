import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebmastersV3SitesSiteUrlRoute,
  getWebmastersV3SitesRoute,
  getWebmastersV3SitesSiteUrlRoute,
  putWebmastersV3SitesSiteUrlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesHandler = app
  .openapi(getWebmastersV3SitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebmastersV3SitesSiteUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebmastersV3SitesSiteUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWebmastersV3SitesSiteUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
