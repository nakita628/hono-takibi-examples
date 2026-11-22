import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1SitesSiteIdInsightsClientClientMacMetricRoute,
  getApiV1SitesSiteIdInsightsDeviceDeviceMacMetricRoute,
  getApiV1SitesSiteIdInsightsMetricRoute,
  getApiV1SitesSiteIdInsightsRoguesClientsRoute,
  getApiV1SitesSiteIdInsightsRoguesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesInsightsHandler = app
  .openapi(getApiV1SitesSiteIdInsightsClientClientMacMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdInsightsDeviceDeviceMacMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdInsightsRoguesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdInsightsRoguesClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdInsightsMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
