import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDevicesSerialCameraAnalyticsLiveRoute,
  getDevicesSerialCameraAnalyticsOverviewRoute,
  getDevicesSerialCameraAnalyticsRecentRoute,
  getDevicesSerialCameraAnalyticsZonesRoute,
  getDevicesSerialCameraAnalyticsZonesZoneIdHistoryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mvSenseHandler = app
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
