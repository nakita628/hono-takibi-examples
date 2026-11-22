import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceAppManagementManagedAppStatusesManagedAppStatusIdRoute,
  getDeviceAppManagementManagedAppStatusesCountRoute,
  getDeviceAppManagementManagedAppStatusesManagedAppStatusIdRoute,
  getDeviceAppManagementManagedAppStatusesRoute,
  patchDeviceAppManagementManagedAppStatusesManagedAppStatusIdRoute,
  postDeviceAppManagementManagedAppStatusesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceAppManagementManagedAppStatusHandler = app
  .openapi(getDeviceAppManagementManagedAppStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceAppManagementManagedAppStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementManagedAppStatusesManagedAppStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceAppManagementManagedAppStatusesManagedAppStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceAppManagementManagedAppStatusesManagedAppStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementManagedAppStatusesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
