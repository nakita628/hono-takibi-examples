import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SitesSiteIdDevicesDeviceIdHaRoute,
  postApiV1SitesSiteIdDevicesDeviceIdHaRoute,
  putApiV1SitesSiteIdDevicesDeviceIdHaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesDevicesWANEdgesHAHandler = app
  .openapi(deleteApiV1SitesSiteIdDevicesDeviceIdHaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdHaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdDevicesDeviceIdHaRoute, (c) => {
    throw new Error('Not implemented')
  })
