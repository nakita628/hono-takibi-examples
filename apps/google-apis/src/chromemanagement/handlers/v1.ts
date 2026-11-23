import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1CustomerAppsCountChromeAppRequestsRoute,
  getV1CustomerReportsCountChromeBrowsersNeedingAttentionRoute,
  getV1CustomerReportsCountChromeDevicesReachingAutoExpirationDateRoute,
  getV1CustomerReportsCountChromeDevicesThatNeedAttentionRoute,
  getV1CustomerReportsCountChromeHardwareFleetDevicesRoute,
  getV1CustomerReportsCountChromeVersionsRoute,
  getV1CustomerReportsCountInstalledAppsRoute,
  getV1CustomerReportsFindInstalledAppDevicesRoute,
  getV1NameRoute,
  getV1ParentTelemetryDevicesRoute,
  getV1ParentTelemetryEventsRoute,
  getV1ParentTelemetryUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1CustomerAppsCountChromeAppRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomerReportsCountChromeBrowsersNeedingAttentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomerReportsCountChromeDevicesReachingAutoExpirationDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomerReportsCountChromeDevicesThatNeedAttentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomerReportsCountChromeHardwareFleetDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomerReportsCountChromeVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomerReportsCountInstalledAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomerReportsFindInstalledAppDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentTelemetryDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentTelemetryEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentTelemetryUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
