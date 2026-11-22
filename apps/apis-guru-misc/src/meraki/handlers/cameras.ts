import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDevicesSerialCameraQualityAndRetentionSettingsRoute,
  getDevicesSerialCameraVideoSettingsRoute,
  getNetworksNetworkIdCameraSchedulesRoute,
  getNetworksNetworkIdCamerasSerialVideoLinkRoute,
  postNetworksNetworkIdCamerasSerialSnapshotRoute,
  putDevicesSerialCameraQualityAndRetentionSettingsRoute,
  putDevicesSerialCameraVideoSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const camerasHandler = app
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
  .openapi(getNetworksNetworkIdCameraSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdCamerasSerialSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdCamerasSerialVideoLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
