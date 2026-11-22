import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHardwareDeviceMonitorsDeviceIdRoute,
  getHardwareDevicesDeviceIdAgentDevicesRoute,
  getHardwareDevicesDeviceIdAgentRoute,
  getHardwareDevicesDeviceIdParameterHistoryRoute,
  getHardwareDevicesDeviceIdRoute,
  getHardwareDevicesRoute,
  getHardwareDevicesSummaryRoute,
  getHardwareEnergyUsageDeviceIdRoute,
  getHardwareHeatingMarginDevicesRoute,
  getHardwareSearchDevicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicesHandler = app
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
  .openapi(getHardwareHeatingMarginDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHardwareSearchDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
