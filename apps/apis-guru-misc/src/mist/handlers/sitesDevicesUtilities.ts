import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1SitesSiteIdStatsBgpPeersCountRoute,
  getApiV1SitesSiteIdStatsBgpPeersSearchRoute,
  postApiV1SitesSiteIdDevicesDeviceIdArpRoute,
  postApiV1SitesSiteIdDevicesDeviceIdPingRoute,
  postApiV1SitesSiteIdDevicesDeviceIdSnapshotRoute,
  postApiV1SitesSiteIdDevicesDeviceIdTracerouteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesDevicesUtilitiesHandler = app
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdArpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdTracerouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsBgpPeersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsBgpPeersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
