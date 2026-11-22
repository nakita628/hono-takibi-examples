import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postDeviceAppManagementManagedAppPoliciesManagedAppPolicyIdMicrosoftGraphTargetAppsRoute,
  postDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdAppliedPoliciesManagedAppPolicyIdMicrosoftGraphTargetAppsRoute,
  postDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdIntendedPoliciesManagedAppPolicyIdMicrosoftGraphTargetAppsRoute,
  postDeviceAppManagementManagedEBooksManagedEBookIdMicrosoftGraphAssignRoute,
  postDeviceAppManagementMicrosoftGraphSyncMicrosoftStoreForBusinessAppsRoute,
  postDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdMicrosoftGraphAssignRoute,
  postDeviceAppManagementMobileAppsMobileAppIdMicrosoftGraphAssignRoute,
  postDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdMicrosoftGraphAssignRoute,
  postDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdMicrosoftGraphTargetAppsRoute,
  postDeviceAppManagementVppTokensVppTokenIdMicrosoftGraphSyncLicensesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceAppManagementActionsHandler = app
  .openapi(
    postDeviceAppManagementManagedAppPoliciesManagedAppPolicyIdMicrosoftGraphTargetAppsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdAppliedPoliciesManagedAppPolicyIdMicrosoftGraphTargetAppsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdIntendedPoliciesManagedAppPolicyIdMicrosoftGraphTargetAppsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postDeviceAppManagementManagedEBooksManagedEBookIdMicrosoftGraphAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceAppManagementMicrosoftGraphSyncMicrosoftStoreForBusinessAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdMicrosoftGraphAssignRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postDeviceAppManagementMobileAppsMobileAppIdMicrosoftGraphAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdMicrosoftGraphAssignRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdMicrosoftGraphTargetAppsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postDeviceAppManagementVppTokensVppTokenIdMicrosoftGraphSyncLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
