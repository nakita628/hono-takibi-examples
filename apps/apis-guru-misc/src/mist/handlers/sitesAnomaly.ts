import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1SitesSiteIdAnomalyClientClientMacMetricRoute,
  getApiV1SitesSiteIdAnomalyDeviceDeviceMacMetricRoute,
  getApiV1SitesSiteIdAnomalyMetricRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesAnomalyHandler = app
  .openapi(getApiV1SitesSiteIdAnomalyClientClientMacMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdAnomalyDeviceDeviceMacMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdAnomalyMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
