import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1OrgsOrgIdStatsPortsSearchRoute,
  getApiV1SitesSiteIdStatsDevicesDeviceIdClientsRoute,
  getApiV1SitesSiteIdStatsDevicesDeviceIdRoute,
  getApiV1SitesSiteIdStatsDevicesRoute,
  getApiV1SitesSiteIdStatsMxedgesMxedgeIdRoute,
  getApiV1SitesSiteIdStatsMxedgesRoute,
  getApiV1SitesSiteIdStatsPortsCountRoute,
  getApiV1SitesSiteIdStatsPortsSearchRoute,
  getApiV1SitesSiteIdStatsSwitchPortsCountRoute,
  getApiV1SitesSiteIdStatsSwitchPortsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesDevicesStatsHandler = app
  .openapi(getApiV1OrgsOrgIdStatsPortsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsDevicesDeviceIdClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsMxedgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsMxedgesMxedgeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsPortsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsPortsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsSwitchPortsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsSwitchPortsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
