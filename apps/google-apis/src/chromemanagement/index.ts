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
} from './routes'
import {
  getV1CustomerAppsCountChromeAppRequestsRouteHandler,
  getV1CustomerReportsCountChromeBrowsersNeedingAttentionRouteHandler,
  getV1CustomerReportsCountChromeDevicesReachingAutoExpirationDateRouteHandler,
  getV1CustomerReportsCountChromeDevicesThatNeedAttentionRouteHandler,
  getV1CustomerReportsCountChromeHardwareFleetDevicesRouteHandler,
  getV1CustomerReportsCountChromeVersionsRouteHandler,
  getV1CustomerReportsCountInstalledAppsRouteHandler,
  getV1CustomerReportsFindInstalledAppDevicesRouteHandler,
  getV1NameRouteHandler,
  getV1ParentTelemetryDevicesRouteHandler,
  getV1ParentTelemetryEventsRouteHandler,
  getV1ParentTelemetryUsersRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getV1CustomerAppsCountChromeAppRequestsRoute,
    getV1CustomerAppsCountChromeAppRequestsRouteHandler,
  )
  .openapi(
    getV1CustomerReportsCountChromeBrowsersNeedingAttentionRoute,
    getV1CustomerReportsCountChromeBrowsersNeedingAttentionRouteHandler,
  )
  .openapi(
    getV1CustomerReportsCountChromeDevicesReachingAutoExpirationDateRoute,
    getV1CustomerReportsCountChromeDevicesReachingAutoExpirationDateRouteHandler,
  )
  .openapi(
    getV1CustomerReportsCountChromeDevicesThatNeedAttentionRoute,
    getV1CustomerReportsCountChromeDevicesThatNeedAttentionRouteHandler,
  )
  .openapi(
    getV1CustomerReportsCountChromeHardwareFleetDevicesRoute,
    getV1CustomerReportsCountChromeHardwareFleetDevicesRouteHandler,
  )
  .openapi(
    getV1CustomerReportsCountChromeVersionsRoute,
    getV1CustomerReportsCountChromeVersionsRouteHandler,
  )
  .openapi(
    getV1CustomerReportsCountInstalledAppsRoute,
    getV1CustomerReportsCountInstalledAppsRouteHandler,
  )
  .openapi(
    getV1CustomerReportsFindInstalledAppDevicesRoute,
    getV1CustomerReportsFindInstalledAppDevicesRouteHandler,
  )
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(getV1ParentTelemetryDevicesRoute, getV1ParentTelemetryDevicesRouteHandler)
  .openapi(getV1ParentTelemetryEventsRoute, getV1ParentTelemetryEventsRouteHandler)
  .openapi(getV1ParentTelemetryUsersRoute, getV1ParentTelemetryUsersRouteHandler)

export default app
