import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceAppManagementIosManagedAppProtectionsIosManagedAppProtectionIdAppsManagedMobileAppIdRoute,
  deleteDeviceAppManagementIosManagedAppProtectionsIosManagedAppProtectionIdDeploymentSummaryRoute,
  deleteDeviceAppManagementIosManagedAppProtectionsIosManagedAppProtectionIdRoute,
  getDeviceAppManagementIosManagedAppProtectionsIosManagedAppProtectionIdAppsManagedMobileAppIdRoute,
  getDeviceAppManagementIosManagedAppProtectionsIosManagedAppProtectionIdAppsRoute,
  getDeviceAppManagementIosManagedAppProtectionsIosManagedAppProtectionIdDeploymentSummaryRoute,
  getDeviceAppManagementIosManagedAppProtectionsIosManagedAppProtectionIdRoute,
  getDeviceAppManagementIosManagedAppProtectionsRoute,
  patchDeviceAppManagementIosManagedAppProtectionsIosManagedAppProtectionIdAppsManagedMobileAppIdRoute,
  patchDeviceAppManagementIosManagedAppProtectionsIosManagedAppProtectionIdDeploymentSummaryRoute,
  patchDeviceAppManagementIosManagedAppProtectionsIosManagedAppProtectionIdRoute,
  postDeviceAppManagementIosManagedAppProtectionsIosManagedAppProtectionIdAppsRoute,
  postDeviceAppManagementIosManagedAppProtectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceAppManagementIosManagedAppProtectionHandler = app
  .openapi(getDeviceAppManagementIosManagedAppProtectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceAppManagementIosManagedAppProtectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceAppManagementIosManagedAppProtectionsIosManagedAppProtectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementIosManagedAppProtectionsIosManagedAppProtectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceAppManagementIosManagedAppProtectionsIosManagedAppProtectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceAppManagementIosManagedAppProtectionsIosManagedAppProtectionIdAppsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceAppManagementIosManagedAppProtectionsIosManagedAppProtectionIdAppsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceAppManagementIosManagedAppProtectionsIosManagedAppProtectionIdAppsManagedMobileAppIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementIosManagedAppProtectionsIosManagedAppProtectionIdAppsManagedMobileAppIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementIosManagedAppProtectionsIosManagedAppProtectionIdAppsManagedMobileAppIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceAppManagementIosManagedAppProtectionsIosManagedAppProtectionIdDeploymentSummaryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementIosManagedAppProtectionsIosManagedAppProtectionIdDeploymentSummaryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementIosManagedAppProtectionsIosManagedAppProtectionIdDeploymentSummaryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
