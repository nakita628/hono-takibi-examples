import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceAppManagementDefaultManagedAppProtectionsDefaultManagedAppProtectionIdAppsManagedMobileAppIdRoute,
  deleteDeviceAppManagementDefaultManagedAppProtectionsDefaultManagedAppProtectionIdDeploymentSummaryRoute,
  deleteDeviceAppManagementDefaultManagedAppProtectionsDefaultManagedAppProtectionIdRoute,
  getDeviceAppManagementDefaultManagedAppProtectionsDefaultManagedAppProtectionIdAppsManagedMobileAppIdRoute,
  getDeviceAppManagementDefaultManagedAppProtectionsDefaultManagedAppProtectionIdAppsRoute,
  getDeviceAppManagementDefaultManagedAppProtectionsDefaultManagedAppProtectionIdDeploymentSummaryRoute,
  getDeviceAppManagementDefaultManagedAppProtectionsDefaultManagedAppProtectionIdRoute,
  getDeviceAppManagementDefaultManagedAppProtectionsRoute,
  patchDeviceAppManagementDefaultManagedAppProtectionsDefaultManagedAppProtectionIdAppsManagedMobileAppIdRoute,
  patchDeviceAppManagementDefaultManagedAppProtectionsDefaultManagedAppProtectionIdDeploymentSummaryRoute,
  patchDeviceAppManagementDefaultManagedAppProtectionsDefaultManagedAppProtectionIdRoute,
  postDeviceAppManagementDefaultManagedAppProtectionsDefaultManagedAppProtectionIdAppsRoute,
  postDeviceAppManagementDefaultManagedAppProtectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceAppManagementDefaultManagedAppProtectionHandler = app
  .openapi(getDeviceAppManagementDefaultManagedAppProtectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceAppManagementDefaultManagedAppProtectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDeviceAppManagementDefaultManagedAppProtectionsDefaultManagedAppProtectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementDefaultManagedAppProtectionsDefaultManagedAppProtectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementDefaultManagedAppProtectionsDefaultManagedAppProtectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementDefaultManagedAppProtectionsDefaultManagedAppProtectionIdAppsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceAppManagementDefaultManagedAppProtectionsDefaultManagedAppProtectionIdAppsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceAppManagementDefaultManagedAppProtectionsDefaultManagedAppProtectionIdAppsManagedMobileAppIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementDefaultManagedAppProtectionsDefaultManagedAppProtectionIdAppsManagedMobileAppIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementDefaultManagedAppProtectionsDefaultManagedAppProtectionIdAppsManagedMobileAppIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceAppManagementDefaultManagedAppProtectionsDefaultManagedAppProtectionIdDeploymentSummaryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementDefaultManagedAppProtectionsDefaultManagedAppProtectionIdDeploymentSummaryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementDefaultManagedAppProtectionsDefaultManagedAppProtectionIdDeploymentSummaryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
