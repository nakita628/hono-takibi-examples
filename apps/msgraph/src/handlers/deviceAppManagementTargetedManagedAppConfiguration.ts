import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAppsManagedMobileAppIdRoute,
  deleteDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAssignmentsTargetedManagedAppPolicyAssignmentIdRoute,
  deleteDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdDeploymentSummaryRoute,
  deleteDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdRoute,
  getDeviceAppManagementTargetedManagedAppConfigurationsCountRoute,
  getDeviceAppManagementTargetedManagedAppConfigurationsRoute,
  getDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAppsCountRoute,
  getDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAppsManagedMobileAppIdRoute,
  getDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAppsRoute,
  getDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAssignmentsCountRoute,
  getDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAssignmentsRoute,
  getDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAssignmentsTargetedManagedAppPolicyAssignmentIdRoute,
  getDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdDeploymentSummaryRoute,
  getDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdRoute,
  patchDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAppsManagedMobileAppIdRoute,
  patchDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAssignmentsTargetedManagedAppPolicyAssignmentIdRoute,
  patchDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdDeploymentSummaryRoute,
  patchDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdRoute,
  postDeviceAppManagementTargetedManagedAppConfigurationsRoute,
  postDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAppsRoute,
  postDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAssignmentsRoute,
  postDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAssignRoute,
  postDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdTargetAppsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceAppManagementTargetedManagedAppConfigurationHandler = app
  .openapi(getDeviceAppManagementTargetedManagedAppConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceAppManagementTargetedManagedAppConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAppsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAppsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAppsManagedMobileAppIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAppsManagedMobileAppIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAppsManagedMobileAppIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAppsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAssignmentsTargetedManagedAppPolicyAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAssignmentsTargetedManagedAppPolicyAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAssignmentsTargetedManagedAppPolicyAssignmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAssignmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdDeploymentSummaryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdDeploymentSummaryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdDeploymentSummaryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAssignRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdTargetAppsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceAppManagementTargetedManagedAppConfigurationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
