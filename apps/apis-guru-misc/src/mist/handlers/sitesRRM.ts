import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1SitesSiteIdRrmCurrentDevicesDeviceIdBandBandRoute,
  getApiV1SitesSiteIdRrmCurrentRoute,
  getApiV1SitesSiteIdRrmEventsRoute,
  postApiV1SitesSiteIdRrmOptimizeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesRRMHandler = app
  .openapi(getApiV1SitesSiteIdRrmCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdRrmCurrentDevicesDeviceIdBandBandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdRrmEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdRrmOptimizeRoute, (c) => {
    throw new Error('Not implemented')
  })
