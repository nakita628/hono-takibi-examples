import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDevicesSerialCameraAnalyticsLiveRoute,
  getDevicesSerialCameraAnalyticsOverviewRoute,
  getDevicesSerialCameraAnalyticsRecentRoute,
  getDevicesSerialCameraAnalyticsZonesRoute,
  getDevicesSerialCameraAnalyticsZonesZoneIdHistoryRoute,
  getDevicesSerialCameraQualityAndRetentionSettingsRoute,
  getDevicesSerialCameraVideoSettingsRoute,
  getDevicesSerialCellularGatewaySettingsPortForwardingRulesRoute,
  getDevicesSerialCellularGatewaySettingsRoute,
  getDevicesSerialClientsRoute,
  getDevicesSerialSwitchPortStatusesPacketsRoute,
  getDevicesSerialSwitchPortStatusesRoute,
  postDevicesSerialSwitchPortsCycleRoute,
  putDevicesSerialCameraQualityAndRetentionSettingsRoute,
  putDevicesSerialCameraVideoSettingsRoute,
  putDevicesSerialCellularGatewaySettingsPortForwardingRulesRoute,
  putDevicesSerialCellularGatewaySettingsRoute,
  putDevicesSerialWirelessBluetoothSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicesHandler = app
  .openapi(getDevicesSerialCameraAnalyticsLiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraAnalyticsOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraAnalyticsRecentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraAnalyticsZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraAnalyticsZonesZoneIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraQualityAndRetentionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialCameraQualityAndRetentionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraVideoSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialCameraVideoSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCellularGatewaySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialCellularGatewaySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCellularGatewaySettingsPortForwardingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialCellularGatewaySettingsPortForwardingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialSwitchPortsCycleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialSwitchPortStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialSwitchPortStatusesPacketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialWirelessBluetoothSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
