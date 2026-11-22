import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SitesSiteIdLocationMlDeviceDeviceIdRoute,
  deleteApiV1SitesSiteIdLocationMlMapMapIdRoute,
  getApiV1SitesSiteIdLocationCoverageRoute,
  getApiV1SitesSiteIdLocationMlCurrentRoute,
  getApiV1SitesSiteIdLocationMlDefaultsRoute,
  getApiV1SitesSiteIdLocationMlUpdatesRoute,
  postApiV1SitesSiteIdLocationMlResetMapMapIdRoute,
  putApiV1SitesSiteIdLocationMlDeviceDeviceIdRoute,
  putApiV1SitesSiteIdLocationMlMapMapIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesLocationHandler = app
  .openapi(getApiV1SitesSiteIdLocationCoverageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdLocationMlCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdLocationMlDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdLocationMlDeviceDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdLocationMlDeviceDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdLocationMlMapMapIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdLocationMlMapMapIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdLocationMlResetMapMapIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdLocationMlUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
