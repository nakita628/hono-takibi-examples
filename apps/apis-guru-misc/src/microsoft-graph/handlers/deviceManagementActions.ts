import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdMicrosoftGraphAssignRoute,
  postDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdMicrosoftGraphScheduleActionsForRulesRoute,
  postDeviceManagementDeviceConfigurationsDeviceConfigurationIdMicrosoftGraphAssignRoute,
  postDeviceManagementDeviceEnrollmentConfigurationsDeviceEnrollmentConfigurationIdMicrosoftGraphAssignRoute,
  postDeviceManagementDeviceEnrollmentConfigurationsDeviceEnrollmentConfigurationIdMicrosoftGraphSetPriorityRoute,
  postDeviceManagementDeviceManagementPartnersDeviceManagementPartnerIdMicrosoftGraphTerminateRoute,
  postDeviceManagementExchangeConnectorsDeviceManagementExchangeConnectorIdMicrosoftGraphSyncRoute,
  postDeviceManagementImportedWindowsAutopilotDeviceIdentitiesMicrosoftGraphImportRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphBypassActivationLockRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphCleanWindowsDeviceRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphDeleteUserFromSharedAppleDeviceRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphDisableLostModeRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphLocateDeviceRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphLogoutSharedAppleDeviceActiveUserRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphRebootNowRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphRecoverPasscodeRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphRemoteLockRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphRequestRemoteAssistanceRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphResetPasscodeRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphRetireRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphShutDownRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphSyncDeviceRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphUpdateWindowsDeviceAccountRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphWindowsDefenderScanRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphWindowsDefenderUpdateSignaturesRoute,
  postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphWipeRoute,
  postDeviceManagementNotificationMessageTemplatesNotificationMessageTemplateIdMicrosoftGraphSendTestMessageRoute,
  postDeviceManagementRemoteAssistancePartnersRemoteAssistancePartnerIdMicrosoftGraphBeginOnboardingRoute,
  postDeviceManagementRemoteAssistancePartnersRemoteAssistancePartnerIdMicrosoftGraphDisconnectRoute,
  postDeviceManagementReportsMicrosoftGraphGetCachedReportRoute,
  postDeviceManagementReportsMicrosoftGraphGetCompliancePolicyNonComplianceReportRoute,
  postDeviceManagementReportsMicrosoftGraphGetCompliancePolicyNonComplianceSummaryReportRoute,
  postDeviceManagementReportsMicrosoftGraphGetComplianceSettingNonComplianceReportRoute,
  postDeviceManagementReportsMicrosoftGraphGetConfigurationPolicyNonComplianceReportRoute,
  postDeviceManagementReportsMicrosoftGraphGetConfigurationPolicyNonComplianceSummaryReportRoute,
  postDeviceManagementReportsMicrosoftGraphGetConfigurationSettingNonComplianceReportRoute,
  postDeviceManagementReportsMicrosoftGraphGetDeviceManagementIntentPerSettingContributingProfilesRoute,
  postDeviceManagementReportsMicrosoftGraphGetDeviceManagementIntentSettingsReportRoute,
  postDeviceManagementReportsMicrosoftGraphGetDeviceNonComplianceReportRoute,
  postDeviceManagementReportsMicrosoftGraphGetDevicesWithoutCompliancePolicyReportRoute,
  postDeviceManagementReportsMicrosoftGraphGetHistoricalReportRoute,
  postDeviceManagementReportsMicrosoftGraphGetNoncompliantDevicesAndSettingsReportRoute,
  postDeviceManagementReportsMicrosoftGraphGetPolicyNonComplianceMetadataRoute,
  postDeviceManagementReportsMicrosoftGraphGetPolicyNonComplianceReportRoute,
  postDeviceManagementReportsMicrosoftGraphGetPolicyNonComplianceSummaryReportRoute,
  postDeviceManagementReportsMicrosoftGraphGetReportFiltersRoute,
  postDeviceManagementReportsMicrosoftGraphGetSettingNonComplianceReportRoute,
  postDeviceManagementWindowsAutopilotDeviceIdentitiesWindowsAutopilotDeviceIdentityIdMicrosoftGraphAssignUserToDeviceRoute,
  postDeviceManagementWindowsAutopilotDeviceIdentitiesWindowsAutopilotDeviceIdentityIdMicrosoftGraphUnassignUserFromDeviceRoute,
  postDeviceManagementWindowsAutopilotDeviceIdentitiesWindowsAutopilotDeviceIdentityIdMicrosoftGraphUpdateDevicePropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementActionsHandler = app
  .openapi(
    postDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdMicrosoftGraphAssignRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementDeviceCompliancePoliciesDeviceCompliancePolicyIdMicrosoftGraphScheduleActionsForRulesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementDeviceConfigurationsDeviceConfigurationIdMicrosoftGraphAssignRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementDeviceEnrollmentConfigurationsDeviceEnrollmentConfigurationIdMicrosoftGraphAssignRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementDeviceEnrollmentConfigurationsDeviceEnrollmentConfigurationIdMicrosoftGraphSetPriorityRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementDeviceManagementPartnersDeviceManagementPartnerIdMicrosoftGraphTerminateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementExchangeConnectorsDeviceManagementExchangeConnectorIdMicrosoftGraphSyncRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementImportedWindowsAutopilotDeviceIdentitiesMicrosoftGraphImportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphBypassActivationLockRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphCleanWindowsDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphDeleteUserFromSharedAppleDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphDisableLostModeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphLocateDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphLogoutSharedAppleDeviceActiveUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphRebootNowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphRecoverPasscodeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphRemoteLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphRequestRemoteAssistanceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphResetPasscodeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphRetireRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphShutDownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphSyncDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphUpdateWindowsDeviceAccountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphWindowsDefenderScanRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphWindowsDefenderUpdateSignaturesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postDeviceManagementManagedDevicesManagedDeviceIdMicrosoftGraphWipeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postDeviceManagementNotificationMessageTemplatesNotificationMessageTemplateIdMicrosoftGraphSendTestMessageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementRemoteAssistancePartnersRemoteAssistancePartnerIdMicrosoftGraphBeginOnboardingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementRemoteAssistancePartnersRemoteAssistancePartnerIdMicrosoftGraphDisconnectRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postDeviceManagementReportsMicrosoftGraphGetCachedReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postDeviceManagementReportsMicrosoftGraphGetCompliancePolicyNonComplianceReportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementReportsMicrosoftGraphGetCompliancePolicyNonComplianceSummaryReportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementReportsMicrosoftGraphGetComplianceSettingNonComplianceReportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementReportsMicrosoftGraphGetConfigurationPolicyNonComplianceReportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementReportsMicrosoftGraphGetConfigurationPolicyNonComplianceSummaryReportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementReportsMicrosoftGraphGetConfigurationSettingNonComplianceReportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementReportsMicrosoftGraphGetDeviceManagementIntentPerSettingContributingProfilesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementReportsMicrosoftGraphGetDeviceManagementIntentSettingsReportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postDeviceManagementReportsMicrosoftGraphGetDeviceNonComplianceReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postDeviceManagementReportsMicrosoftGraphGetDevicesWithoutCompliancePolicyReportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postDeviceManagementReportsMicrosoftGraphGetHistoricalReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postDeviceManagementReportsMicrosoftGraphGetNoncompliantDevicesAndSettingsReportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postDeviceManagementReportsMicrosoftGraphGetPolicyNonComplianceMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementReportsMicrosoftGraphGetPolicyNonComplianceReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postDeviceManagementReportsMicrosoftGraphGetPolicyNonComplianceSummaryReportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postDeviceManagementReportsMicrosoftGraphGetReportFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementReportsMicrosoftGraphGetSettingNonComplianceReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postDeviceManagementWindowsAutopilotDeviceIdentitiesWindowsAutopilotDeviceIdentityIdMicrosoftGraphAssignUserToDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementWindowsAutopilotDeviceIdentitiesWindowsAutopilotDeviceIdentityIdMicrosoftGraphUnassignUserFromDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementWindowsAutopilotDeviceIdentitiesWindowsAutopilotDeviceIdentityIdMicrosoftGraphUpdateDevicePropertiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
