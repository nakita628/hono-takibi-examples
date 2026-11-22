import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1SitesSiteIdEventsFastRoamRoute,
  getApiV1SitesSiteIdEventsInterferenceRoute,
  getApiV1SitesSiteIdEventsSystemCountRoute,
  getApiV1SitesSiteIdEventsSystemSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesEventsHandler = app
  .openapi(getApiV1SitesSiteIdEventsFastRoamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdEventsInterferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdEventsSystemCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdEventsSystemSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
