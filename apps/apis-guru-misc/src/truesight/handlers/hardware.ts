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
} from '../routes'

const app = new OpenAPIHono()

export const hardwareHandler = app
  .openapi(postHardwareActionsDeviceIdCollectNowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHardwareActionsDeviceIdRediscoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHardwareActionsDeviceIdReinitializeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHardwareActionsDeviceIdRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHardwareActionsDeviceIdResetErrorCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHardwareApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHardwareApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHardwareDeviceMonitorsDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHardwareDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHardwareDevicesSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHardwareDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHardwareDevicesDeviceIdAgentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHardwareDevicesDeviceIdAgentDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHardwareDevicesDeviceIdParameterHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHardwareEnergyUsageDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHardwareGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHardwareGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putHardwareGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHardwareHeatingMarginDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHardwareHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHardwareSearchDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHardwareServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHardwareServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
