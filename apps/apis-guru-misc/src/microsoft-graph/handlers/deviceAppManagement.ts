import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDeviceAppManagementAndroidManagedAppProtectionsAndroidManagedAppProtectionIdAppsCountRoute,
  getDeviceAppManagementAndroidManagedAppProtectionsCountRoute,
  getDeviceAppManagementDefaultManagedAppProtectionsCountRoute,
  getDeviceAppManagementDefaultManagedAppProtectionsDefaultManagedAppProtectionIdAppsCountRoute,
  getDeviceAppManagementIosManagedAppProtectionsCountRoute,
  getDeviceAppManagementIosManagedAppProtectionsIosManagedAppProtectionIdAppsCountRoute,
  getDeviceAppManagementManagedAppPoliciesCountRoute,
  getDeviceAppManagementManagedAppRegistrationsCountRoute,
  getDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdAppliedPoliciesCountRoute,
  getDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdIntendedPoliciesCountRoute,
  getDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdOperationsCountRoute,
  getDeviceAppManagementManagedAppStatusesCountRoute,
  getDeviceAppManagementManagedEBooksCountRoute,
  getDeviceAppManagementManagedEBooksManagedEBookIdAssignmentsCountRoute,
  getDeviceAppManagementManagedEBooksManagedEBookIdDeviceStatesCountRoute,
  getDeviceAppManagementManagedEBooksManagedEBookIdUserStateSummaryCountRoute,
  getDeviceAppManagementManagedEBooksManagedEBookIdUserStateSummaryUserInstallStateSummaryIdDeviceStatesCountRoute,
  getDeviceAppManagementMdmWindowsInformationProtectionPoliciesCountRoute,
  getDeviceAppManagementMobileAppCategoriesCountRoute,
  getDeviceAppManagementMobileAppConfigurationsCountRoute,
  getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdAssignmentsCountRoute,
  getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdDeviceStatusesCountRoute,
  getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdUserStatusesCountRoute,
  getDeviceAppManagementMobileAppsCountRoute,
  getDeviceAppManagementMobileAppsMicrosoftGraphManagedMobileLobAppCountRoute,
  getDeviceAppManagementMobileAppsMicrosoftGraphMobileLobAppCountRoute,
  getDeviceAppManagementMobileAppsMobileAppIdAssignmentsCountRoute,
  getDeviceAppManagementMobileAppsMobileAppIdCategoriesCountRoute,
  getDeviceAppManagementTargetedManagedAppConfigurationsCountRoute,
  getDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAppsCountRoute,
  getDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAssignmentsCountRoute,
  getDeviceAppManagementVppTokensCountRoute,
  getDeviceAppManagementWindowsInformationProtectionPoliciesCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceAppManagementHandler = app
  .openapi(getDeviceAppManagementAndroidManagedAppProtectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceAppManagementAndroidManagedAppProtectionsAndroidManagedAppProtectionIdAppsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceAppManagementDefaultManagedAppProtectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceAppManagementDefaultManagedAppProtectionsDefaultManagedAppProtectionIdAppsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceAppManagementIosManagedAppProtectionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceAppManagementIosManagedAppProtectionsIosManagedAppProtectionIdAppsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceAppManagementManagedAppPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementManagedAppRegistrationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdAppliedPoliciesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdIntendedPoliciesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementManagedAppRegistrationsManagedAppRegistrationIdOperationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceAppManagementManagedAppStatusesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementManagedEBooksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementManagedEBooksManagedEBookIdAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementManagedEBooksManagedEBookIdDeviceStatesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementManagedEBooksManagedEBookIdUserStateSummaryCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceAppManagementManagedEBooksManagedEBookIdUserStateSummaryUserInstallStateSummaryIdDeviceStatesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceAppManagementMdmWindowsInformationProtectionPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementMobileAppCategoriesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementMobileAppConfigurationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdAssignmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdDeviceStatusesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceAppManagementMobileAppConfigurationsManagedDeviceMobileAppConfigurationIdUserStatusesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceAppManagementMobileAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementMobileAppsMicrosoftGraphManagedMobileLobAppCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementMobileAppsMicrosoftGraphMobileLobAppCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementMobileAppsMobileAppIdAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementMobileAppsMobileAppIdCategoriesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementTargetedManagedAppConfigurationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceAppManagementTargetedManagedAppConfigurationsTargetedManagedAppConfigurationIdAppsCountRoute,
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
  .openapi(getDeviceAppManagementVppTokensCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAppManagementWindowsInformationProtectionPoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
