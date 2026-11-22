import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1SitesSiteIdSyntheticTestRoute,
  postApiV1SitesSiteIdDevicesDeviceIdCheckRadiusServerRoute,
  postApiV1SitesSiteIdDevicesDeviceIdSyntheticTestRoute,
  postApiV1SitesSiteIdSyntheticTestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesSyntheticTestsHandler = app
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdCheckRadiusServerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdSyntheticTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdSyntheticTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdSyntheticTestRoute, (c) => {
    throw new Error('Not implemented')
  })
