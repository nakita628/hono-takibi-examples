import { OpenAPIHono } from '@hono/zod-openapi'
import { getVVersionSitesRoute, getVVersionSitesSiteIdsRoute } from '../routes'

const app = new OpenAPIHono()

export const sitesHandler = app
  .openapi(getVVersionSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVVersionSitesSiteIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
