import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementDetectedAppsDetectedAppIdRoute,
  getDeviceManagementDetectedAppsCountRoute,
  getDeviceManagementDetectedAppsDetectedAppIdManagedDevicesCountRoute,
  getDeviceManagementDetectedAppsDetectedAppIdManagedDevicesManagedDeviceIdRoute,
  getDeviceManagementDetectedAppsDetectedAppIdManagedDevicesRoute,
  getDeviceManagementDetectedAppsDetectedAppIdRoute,
  getDeviceManagementDetectedAppsRoute,
  patchDeviceManagementDetectedAppsDetectedAppIdRoute,
  postDeviceManagementDetectedAppsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementDetectedAppHandler = app
  .openapi(getDeviceManagementDetectedAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementDetectedAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementDetectedAppsDetectedAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementDetectedAppsDetectedAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementDetectedAppsDetectedAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementDetectedAppsDetectedAppIdManagedDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementDetectedAppsDetectedAppIdManagedDevicesManagedDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementDetectedAppsDetectedAppIdManagedDevicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementDetectedAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
