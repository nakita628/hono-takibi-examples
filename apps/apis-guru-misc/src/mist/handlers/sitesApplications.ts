import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1SitesSiteIdAppsRoute, getApiV1SitesSiteIdStatsAppsCountRoute } from '../routes'

const app = new OpenAPIHono()

export const sitesApplicationsHandler = app
  .openapi(getApiV1SitesSiteIdAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
