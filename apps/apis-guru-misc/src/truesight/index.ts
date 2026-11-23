import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHardwareApplicationsApplicationIdRoute,
  getHardwareApplicationsRoute,
  getHardwareDeviceMonitorsDeviceIdRoute,
  getHardwareDevicesDeviceIdAgentDevicesRoute,
  getHardwareDevicesDeviceIdAgentRoute,
  getHardwareDevicesDeviceIdParameterHistoryRoute,
  getHardwareDevicesDeviceIdRoute,
  getHardwareDevicesRoute,
  getHardwareDevicesSummaryRoute,
  getHardwareEnergyUsageDeviceIdRoute,
  getHardwareGroupsGroupIdRoute,
  getHardwareGroupsRoute,
  getHardwareHeatingMarginDevicesRoute,
  getHardwareHistoryRoute,
  getHardwareSearchDevicesRoute,
  getHardwareServicesRoute,
  getHardwareServicesServiceIdRoute,
  postHardwareActionsDeviceIdCollectNowRoute,
  postHardwareActionsDeviceIdRediscoverRoute,
  postHardwareActionsDeviceIdReinitializeRoute,
  postHardwareActionsDeviceIdRemoveRoute,
  postHardwareActionsDeviceIdResetErrorCountRoute,
  putHardwareGroupsGroupIdRoute,
} from './routes'
import {
  getHardwareApplicationsApplicationIdRouteHandler,
  getHardwareApplicationsRouteHandler,
  getHardwareDeviceMonitorsDeviceIdRouteHandler,
  getHardwareDevicesDeviceIdAgentDevicesRouteHandler,
  getHardwareDevicesDeviceIdAgentRouteHandler,
  getHardwareDevicesDeviceIdParameterHistoryRouteHandler,
  getHardwareDevicesDeviceIdRouteHandler,
  getHardwareDevicesRouteHandler,
  getHardwareDevicesSummaryRouteHandler,
  getHardwareEnergyUsageDeviceIdRouteHandler,
  getHardwareGroupsGroupIdRouteHandler,
  getHardwareGroupsRouteHandler,
  getHardwareHeatingMarginDevicesRouteHandler,
  getHardwareHistoryRouteHandler,
  getHardwareSearchDevicesRouteHandler,
  getHardwareServicesRouteHandler,
  getHardwareServicesServiceIdRouteHandler,
  postHardwareActionsDeviceIdCollectNowRouteHandler,
  postHardwareActionsDeviceIdRediscoverRouteHandler,
  postHardwareActionsDeviceIdReinitializeRouteHandler,
  postHardwareActionsDeviceIdRemoveRouteHandler,
  postHardwareActionsDeviceIdResetErrorCountRouteHandler,
  putHardwareGroupsGroupIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postHardwareActionsDeviceIdCollectNowRoute,
    postHardwareActionsDeviceIdCollectNowRouteHandler,
  )
  .openapi(
    postHardwareActionsDeviceIdRediscoverRoute,
    postHardwareActionsDeviceIdRediscoverRouteHandler,
  )
  .openapi(
    postHardwareActionsDeviceIdReinitializeRoute,
    postHardwareActionsDeviceIdReinitializeRouteHandler,
  )
  .openapi(postHardwareActionsDeviceIdRemoveRoute, postHardwareActionsDeviceIdRemoveRouteHandler)
  .openapi(
    postHardwareActionsDeviceIdResetErrorCountRoute,
    postHardwareActionsDeviceIdResetErrorCountRouteHandler,
  )
  .openapi(getHardwareApplicationsRoute, getHardwareApplicationsRouteHandler)
  .openapi(
    getHardwareApplicationsApplicationIdRoute,
    getHardwareApplicationsApplicationIdRouteHandler,
  )
  .openapi(getHardwareDeviceMonitorsDeviceIdRoute, getHardwareDeviceMonitorsDeviceIdRouteHandler)
  .openapi(getHardwareDevicesRoute, getHardwareDevicesRouteHandler)
  .openapi(getHardwareDevicesSummaryRoute, getHardwareDevicesSummaryRouteHandler)
  .openapi(getHardwareDevicesDeviceIdRoute, getHardwareDevicesDeviceIdRouteHandler)
  .openapi(getHardwareDevicesDeviceIdAgentRoute, getHardwareDevicesDeviceIdAgentRouteHandler)
  .openapi(
    getHardwareDevicesDeviceIdAgentDevicesRoute,
    getHardwareDevicesDeviceIdAgentDevicesRouteHandler,
  )
  .openapi(
    getHardwareDevicesDeviceIdParameterHistoryRoute,
    getHardwareDevicesDeviceIdParameterHistoryRouteHandler,
  )
  .openapi(getHardwareEnergyUsageDeviceIdRoute, getHardwareEnergyUsageDeviceIdRouteHandler)
  .openapi(getHardwareGroupsRoute, getHardwareGroupsRouteHandler)
  .openapi(getHardwareGroupsGroupIdRoute, getHardwareGroupsGroupIdRouteHandler)
  .openapi(putHardwareGroupsGroupIdRoute, putHardwareGroupsGroupIdRouteHandler)
  .openapi(getHardwareHeatingMarginDevicesRoute, getHardwareHeatingMarginDevicesRouteHandler)
  .openapi(getHardwareHistoryRoute, getHardwareHistoryRouteHandler)
  .openapi(getHardwareSearchDevicesRoute, getHardwareSearchDevicesRouteHandler)
  .openapi(getHardwareServicesRoute, getHardwareServicesRouteHandler)
  .openapi(getHardwareServicesServiceIdRoute, getHardwareServicesServiceIdRouteHandler)

export default app
