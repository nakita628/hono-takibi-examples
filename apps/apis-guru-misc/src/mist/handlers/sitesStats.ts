import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1SitesSiteIdStatsAssetsAssetIdRoute,
  getApiV1SitesSiteIdStatsAssetsRoute,
  getApiV1SitesSiteIdStatsBeaconsRoute,
  getApiV1SitesSiteIdStatsClientsClientMacRoute,
  getApiV1SitesSiteIdStatsClientsRoute,
  getApiV1SitesSiteIdStatsDiscoveredAssetsRoute,
  getApiV1SitesSiteIdStatsDiscoveredSwitchesCountRoute,
  getApiV1SitesSiteIdStatsDiscoveredSwitchesMetricsRoute,
  getApiV1SitesSiteIdStatsDiscoveredSwitchesSearchRoute,
  getApiV1SitesSiteIdStatsDiscoveredSwitchMetricsSearchRoute,
  getApiV1SitesSiteIdStatsGatewaysMetricsRoute,
  getApiV1SitesSiteIdStatsMapsMapIdClientsRoute,
  getApiV1SitesSiteIdStatsMapsMapIdDiscoveredAssetsRoute,
  getApiV1SitesSiteIdStatsMapsMapIdSdkclientsRoute,
  getApiV1SitesSiteIdStatsMapsMapIdUnconnectedClientsRoute,
  getApiV1SitesSiteIdStatsRoute,
  getApiV1SitesSiteIdStatsSdkclientsSdkclientIdRoute,
  getApiV1SitesSiteIdStatsWxrulesRoute,
  getApiV1SitesSiteIdStatsZonesRoute,
  getApiV1SitesSiteIdStatsZoneTypeZoneIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesStatsHandler = app
  .openapi(getApiV1SitesSiteIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsBeaconsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsClientsClientMacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsDiscoveredAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsDiscoveredSwitchMetricsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsDiscoveredSwitchesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsDiscoveredSwitchesMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsDiscoveredSwitchesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsGatewaysMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsMapsMapIdClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsMapsMapIdDiscoveredAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsMapsMapIdSdkclientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsMapsMapIdUnconnectedClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsSdkclientsSdkclientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsWxrulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsZoneTypeZoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
