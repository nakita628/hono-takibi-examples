import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceAppManagementAndroidManagedAppProtectionsAndroidManagedAppProtectionIdAppsManagedMobileAppIdRoute,
  deleteDeviceAppManagementAndroidManagedAppProtectionsAndroidManagedAppProtectionIdDeploymentSummaryRoute,
  deleteDeviceAppManagementAndroidManagedAppProtectionsAndroidManagedAppProtectionIdRoute,
  getDeviceAppManagementAndroidManagedAppProtectionsAndroidManagedAppProtectionIdAppsManagedMobileAppIdRoute,
  getDeviceAppManagementAndroidManagedAppProtectionsAndroidManagedAppProtectionIdAppsRoute,
  getDeviceAppManagementAndroidManagedAppProtectionsAndroidManagedAppProtectionIdDeploymentSummaryRoute,
  getDeviceAppManagementAndroidManagedAppProtectionsAndroidManagedAppProtectionIdRoute,
  getDeviceAppManagementAndroidManagedAppProtectionsRoute,
  patchDeviceAppManagementAndroidManagedAppProtectionsAndroidManagedAppProtectionIdAppsManagedMobileAppIdRoute,
  patchDeviceAppManagementAndroidManagedAppProtectionsAndroidManagedAppProtectionIdDeploymentSummaryRoute,
  patchDeviceAppManagementAndroidManagedAppProtectionsAndroidManagedAppProtectionIdRoute,
  postDeviceAppManagementAndroidManagedAppProtectionsAndroidManagedAppProtectionIdAppsRoute,
  postDeviceAppManagementAndroidManagedAppProtectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceAppManagementAndroidManagedAppProtectionHandler = app
  .openapi(getDeviceAppManagementAndroidManagedAppProtectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceAppManagementAndroidManagedAppProtectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDeviceAppManagementAndroidManagedAppProtectionsAndroidManagedAppProtectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementAndroidManagedAppProtectionsAndroidManagedAppProtectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementAndroidManagedAppProtectionsAndroidManagedAppProtectionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementAndroidManagedAppProtectionsAndroidManagedAppProtectionIdAppsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceAppManagementAndroidManagedAppProtectionsAndroidManagedAppProtectionIdAppsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceAppManagementAndroidManagedAppProtectionsAndroidManagedAppProtectionIdAppsManagedMobileAppIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementAndroidManagedAppProtectionsAndroidManagedAppProtectionIdAppsManagedMobileAppIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementAndroidManagedAppProtectionsAndroidManagedAppProtectionIdAppsManagedMobileAppIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceAppManagementAndroidManagedAppProtectionsAndroidManagedAppProtectionIdDeploymentSummaryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementAndroidManagedAppProtectionsAndroidManagedAppProtectionIdDeploymentSummaryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementAndroidManagedAppProtectionsAndroidManagedAppProtectionIdDeploymentSummaryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
