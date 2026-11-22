import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SitesSiteIdDevicesDeviceIdVcRoute,
  getApiV1SitesSiteIdDevicesDeviceIdVcRoute,
  postApiV1SitesSiteIdDevicesDeviceIdVcRoute,
  postApiV1SitesSiteIdDevicesDeviceIdVcVcPortRoute,
  putApiV1SitesSiteIdDevicesDeviceIdVcRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesDevicesSwitchesVirtualChassisHandler = app
  .openapi(deleteApiV1SitesSiteIdDevicesDeviceIdVcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesDeviceIdVcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdVcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdDevicesDeviceIdVcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdVcVcPortRoute, (c) => {
    throw new Error('Not implemented')
  })
