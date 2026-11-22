import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SitesSiteIdDevicesDeviceIdLocalPortConfigRoute,
  getApiV1SitesSiteIdStatsSwitchesMetricsRoute,
  postApiV1SitesSiteIdDevicesDeviceIdBouncePortRoute,
  postApiV1SitesSiteIdDevicesDeviceIdCableTestRoute,
  postApiV1SitesSiteIdDevicesDeviceIdClearBpduErrorRoute,
  postApiV1SitesSiteIdDevicesDeviceIdClearMacsRoute,
  postApiV1SitesSiteIdDevicesDeviceIdPollStatsRoute,
  putApiV1SitesSiteIdDevicesDeviceIdLocalPortConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesDevicesSwitchesHandler = app
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdBouncePortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdCableTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdClearBpduErrorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdClearMacsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdDevicesDeviceIdLocalPortConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdDevicesDeviceIdLocalPortConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdPollStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsSwitchesMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
