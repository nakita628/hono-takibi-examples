import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSitesSiteUrlRoute,
  getSitesRoute,
  getSitesSiteUrlRoute,
  putSitesSiteUrlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesHandler = app
  .openapi(getSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
