import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDeviceManagementAuditEventsCountRoute,
  getDeviceManagementComplianceManagementPartnersCountRoute,
  getDeviceManagementDetectedAppsCountRoute,
  getDeviceManagementDetectedAppsDetectedAppIdManagedDevicesCountRoute,
  getDeviceManagementDeviceCategoriesCountRoute,
  getDeviceManagementDeviceCompliancePoliciesCountRoute,
  getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdAssignmentsCountRoute,
  getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceSettingStateSummariesCountRoute,
  getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceStatusesCountRoute,
  getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduledActionsForRuleCountRoute,
  getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduledActionsForRuleDeviceComplianceScheduledActionForRuleIdScheduledActionConfigurationsCountRoute,
  getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdUserStatusesCountRoute,
  getDeviceManagementDeviceCompliancePolicySettingStateSummariesCountRoute,
  getDeviceManagementDeviceCompliancePolicySettingStateSummariesDeviceCompliancePolicySettingStateSummaryIdDeviceComplianceSettingStatesCountRoute,
  getDeviceManagementDeviceConfigurationsCountRoute,
  getDeviceManagementDeviceConfigurationsDeviceConfigurationIdAssignmentsCountRoute,
  getDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceSettingStateSummariesCountRoute,
  getDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceStatusesCountRoute,
  getDeviceManagementDeviceConfigurationsDeviceConfigurationIdUserStatusesCountRoute,
  getDeviceManagementDeviceEnrollmentConfigurationsCountRoute,
  getDeviceManagementDeviceEnrollmentConfigurationsDeviceEnrollmentConfigurationIdAssignmentsCountRoute,
  getDeviceManagementDeviceManagementPartnersCountRoute,
  getDeviceManagementExchangeConnectorsCountRoute,
  getDeviceManagementImportedWindowsAutopilotDeviceIdentitiesCountRoute,
  getDeviceManagementIosUpdateStatusesCountRoute,
  getDeviceManagementManagedDevicesCountRoute,
  getDeviceManagementManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesCountRoute,
  getDeviceManagementManagedDevicesManagedDeviceIdDeviceConfigurationStatesCountRoute,
  getDeviceManagementMobileThreatDefenseConnectorsCountRoute,
  getDeviceManagementNotificationMessageTemplatesCountRoute,
  getDeviceManagementNotificationMessageTemplatesNotificationMessageTemplateIdLocalizedNotificationMessagesCountRoute,
  getDeviceManagementRemoteAssistancePartnersCountRoute,
  getDeviceManagementReportsExportJobsCountRoute,
  getDeviceManagementResourceOperationsCountRoute,
  getDeviceManagementRoleAssignmentsCountRoute,
  getDeviceManagementRoleDefinitionsCountRoute,
  getDeviceManagementRoleDefinitionsRoleDefinitionIdRoleAssignmentsCountRoute,
  getDeviceManagementTelecomExpenseManagementPartnersCountRoute,
  getDeviceManagementTermsAndConditionsCountRoute,
  getDeviceManagementTermsAndConditionsTermsAndConditionsIdAcceptanceStatusesCountRoute,
  getDeviceManagementTermsAndConditionsTermsAndConditionsIdAssignmentsCountRoute,
  getDeviceManagementTroubleshootingEventsCountRoute,
  getDeviceManagementWindowsAutopilotDeviceIdentitiesCountRoute,
  getDeviceManagementWindowsInformationProtectionAppLearningSummariesCountRoute,
  getDeviceManagementWindowsInformationProtectionNetworkLearningSummariesCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementHandler = app
  .openapi(getDeviceManagementAuditEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementComplianceManagementPartnersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementDetectedAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementDetectedAppsDetectedAppIdManagedDevicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementDeviceCategoriesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementDeviceCompliancePoliciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdAssignmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceSettingStateSummariesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdDeviceStatusesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduledActionsForRuleCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdScheduledActionsForRuleDeviceComplianceScheduledActionForRuleIdScheduledActionConfigurationsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdUserStatusesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementDeviceCompliancePolicySettingStateSummariesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementDeviceCompliancePolicySettingStateSummariesDeviceCompliancePolicySettingStateSummaryIdDeviceComplianceSettingStatesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementDeviceConfigurationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementDeviceConfigurationsDeviceConfigurationIdAssignmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceSettingStateSummariesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceConfigurationsDeviceConfigurationIdDeviceStatusesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementDeviceConfigurationsDeviceConfigurationIdUserStatusesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementDeviceEnrollmentConfigurationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementDeviceEnrollmentConfigurationsDeviceEnrollmentConfigurationIdAssignmentsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementDeviceManagementPartnersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementExchangeConnectorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementImportedWindowsAutopilotDeviceIdentitiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementIosUpdateStatusesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementManagedDevicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementManagedDevicesManagedDeviceIdDeviceCompliancePolicyStatesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementManagedDevicesManagedDeviceIdDeviceConfigurationStatesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementMobileThreatDefenseConnectorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementNotificationMessageTemplatesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementNotificationMessageTemplatesNotificationMessageTemplateIdLocalizedNotificationMessagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementRemoteAssistancePartnersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementReportsExportJobsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementResourceOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementRoleAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementRoleDefinitionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementRoleDefinitionsRoleDefinitionIdRoleAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementTelecomExpenseManagementPartnersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementTermsAndConditionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementTermsAndConditionsTermsAndConditionsIdAcceptanceStatusesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementTermsAndConditionsTermsAndConditionsIdAssignmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementTroubleshootingEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementWindowsAutopilotDeviceIdentitiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementWindowsInformationProtectionAppLearningSummariesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementWindowsInformationProtectionNetworkLearningSummariesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
