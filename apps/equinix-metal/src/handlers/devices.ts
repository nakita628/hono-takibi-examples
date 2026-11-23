import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDevicesIdRoute,
  getDevicesIdBandwidthRoute,
  getDevicesIdBgpNeighborsRoute,
  getDevicesIdBgpSessionsRoute,
  getDevicesIdCustomdataRoute,
  getDevicesIdDiagnosticsHealthRollupRoute,
  getDevicesIdDiagnosticsScreenshotRoute,
  getDevicesIdEventsRoute,
  getDevicesIdFirmwareSetsRoute,
  getDevicesIdIpsRoute,
  getDevicesIdMetadataRoute,
  getDevicesIdRoute,
  getDevicesIdSshKeysRoute,
  getDevicesIdTrafficRoute,
  getDevicesIdUsagesRoute,
  getDevicesIdUserdataRoute,
  getDevicesInstanceIdIpsIdCustomdataRoute,
  postDevicesIdActionsRoute,
  postDevicesIdBgpSessionsRoute,
  postDevicesIdIpsRoute,
  putDevicesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicesHandler = app
  .openapi(deleteDevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdBandwidthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdBgpNeighborsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdBgpSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesIdBgpSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdCustomdataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdDiagnosticsScreenshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdDiagnosticsHealthRollupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdFirmwareSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesIdIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdSshKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdTrafficRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdUsagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdUserdataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesInstanceIdIpsIdCustomdataRoute, (c) => {
    throw new Error('Not implemented')
  })
