import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1SitesSiteIdSsrUpgradeUpgradeIdRoute,
  postApiV1SitesSiteIdDevicesDeviceIdClearArpRoute,
  postApiV1SitesSiteIdDevicesDeviceIdClearBgpRoute,
  postApiV1SitesSiteIdDevicesDeviceIdReleaseDhcpRoute,
  postApiV1SitesSiteIdDevicesDeviceIdResolveDnsRoute,
  postApiV1SitesSiteIdDevicesDeviceIdServicePingRoute,
  postApiV1SitesSiteIdDevicesDeviceIdShowRouteRoute,
  postApiV1SitesSiteIdDevicesDeviceIdShowSessionRoute,
  postApiV1SitesSiteIdSsrDeviceIdUpgradeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesDevicesWANEdgesHandler = app
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdClearArpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdClearBgpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdReleaseDhcpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdResolveDnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdServicePingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdShowRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdShowSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdSsrUpgradeUpgradeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdSsrDeviceIdUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
