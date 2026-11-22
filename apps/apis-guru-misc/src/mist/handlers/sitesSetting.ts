import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SitesSiteIdSettingBlacklistRoute,
  deleteApiV1SitesSiteIdSettingWatchedStationRoute,
  deleteApiV1SitesSiteIdSettingWhitelistRoute,
  getApiV1SitesSiteIdSettingRoute,
  postApiV1SitesSiteIdSettingBlacklistRoute,
  postApiV1SitesSiteIdSettingWatchedStationRoute,
  postApiV1SitesSiteIdSettingWhitelistRoute,
  putApiV1SitesSiteIdSettingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesSettingHandler = app
  .openapi(getApiV1SitesSiteIdSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdSettingBlacklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdSettingBlacklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdSettingWatchedStationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdSettingWatchedStationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdSettingWhitelistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdSettingWhitelistRoute, (c) => {
    throw new Error('Not implemented')
  })
