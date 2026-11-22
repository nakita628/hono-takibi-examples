import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1SitesSiteIdDevicesApChannelsRoute,
  getApiV1SitesSiteIdDevicesDeviceIdIotRoute,
  postApiV1SitesSiteIdDevicesDeviceIdLocateRoute,
  postApiV1SitesSiteIdDevicesDeviceIdUnlocateRoute,
  postApiV1SitesSiteIdDevicesReprovisionRoute,
  postApiV1SitesSiteIdDevicesResetRadioConfigRoute,
  postApiV1SitesSiteIdDevicesZeriozeRoute,
  putApiV1SitesSiteIdDevicesDeviceIdIotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesDevicesAPsHandler = app
  .openapi(getApiV1SitesSiteIdDevicesApChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesReprovisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesResetRadioConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesZeriozeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesDeviceIdIotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdDevicesDeviceIdIotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdLocateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdUnlocateRoute, (c) => {
    throw new Error('Not implemented')
  })
