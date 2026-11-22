import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1SitesSiteIdCallEventsCountRoute,
  getApiV1SitesSiteIdCallEventsSearchRoute,
  getApiV1SitesSiteIdStatsCallsCountRoute,
  getApiV1SitesSiteIdStatsCallsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesCallsHandler = app
  .openapi(getApiV1SitesSiteIdCallEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdCallEventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsCallsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsCallsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
