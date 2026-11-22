import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SitesSiteIdDevicesDeviceIdImageImageNumberRoute,
  deleteApiV1SitesSiteIdDevicesDeviceIdRoute,
  getApiV1SitesSiteIdDevicesConfigHistoryCountRoute,
  getApiV1SitesSiteIdDevicesConfigHistorySearchRoute,
  getApiV1SitesSiteIdDevicesCountRoute,
  getApiV1SitesSiteIdDevicesDeviceIdConfigCmdRoute,
  getApiV1SitesSiteIdDevicesDeviceIdRoute,
  getApiV1SitesSiteIdDevicesEventsCountRoute,
  getApiV1SitesSiteIdDevicesEventsSearchRoute,
  getApiV1SitesSiteIdDevicesExportRoute,
  getApiV1SitesSiteIdDevicesLastConfigCountRoute,
  getApiV1SitesSiteIdDevicesLastConfigSearchRoute,
  getApiV1SitesSiteIdDevicesRoute,
  getApiV1SitesSiteIdDevicesSearchRoute,
  getApiV1SitesSiteIdDevicesUpgradeRoute,
  getApiV1SitesSiteIdDevicesUpgradeUpgradeIdRoute,
  getApiV1SitesSiteIdDevicesVersionsRoute,
  postApiV1SitesSiteIdDevicesDeviceIdImageImageNumberRoute,
  postApiV1SitesSiteIdDevicesDeviceIdRequestZtpPasswordRoute,
  postApiV1SitesSiteIdDevicesDeviceIdRestartRoute,
  postApiV1SitesSiteIdDevicesDeviceIdSupportRoute,
  postApiV1SitesSiteIdDevicesDeviceIdUpgradeRoute,
  postApiV1SitesSiteIdDevicesImportRoute,
  postApiV1SitesSiteIdDevicesRestartRoute,
  postApiV1SitesSiteIdDevicesRoute,
  postApiV1SitesSiteIdDevicesUpgradeRoute,
  postApiV1SitesSiteIdDevicesUpgradeUpgradeIdCancelRoute,
  putApiV1SitesSiteIdDevicesDeviceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesDevicesHandler = app
  .openapi(getApiV1SitesSiteIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesConfigHistoryCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesConfigHistorySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesEventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesLastConfigCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesLastConfigSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesUpgradeUpgradeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesUpgradeUpgradeIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesDeviceIdConfigCmdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdDevicesDeviceIdImageImageNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdImageImageNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdRequestZtpPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdSupportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
