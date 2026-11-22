import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminAdminHandler,
  adminAdminMicrosoft365AppsHandler,
  adminAdminReportSettingsHandler,
  adminConfigurationManagementHandler,
  adminEdgeHandler,
  adminExchangeAdminHandler,
  adminPeopleAdminSettingsHandler,
  adminServiceAnnouncementHandler,
  adminSharepointHandler,
  adminTeamsAdminRootHandler,
  agreementAcceptancesAgreementAcceptanceHandler,
  agreementsAgreementAcceptanceHandler,
  agreementsAgreementFileHandler,
  agreementsAgreementFileLocalizationHandler,
  agreementsAgreementHandler,
  appCatalogsAppCatalogsHandler,
  appCatalogsTeamsAppHandler,
  applicationsApplicationActionsHandler,
  applicationsApplicationFunctionsHandler,
  applicationsApplicationHandler,
  applicationsAppManagementPolicyHandler,
  applicationsDirectoryObjectHandler,
  applicationsExtensionPropertyHandler,
  applicationsFederatedIdentityCredentialHandler,
  applicationsHomeRealmDiscoveryPolicyHandler,
  applicationsSynchronizationHandler,
  applicationsTokenIssuancePolicyHandler,
  applicationsTokenLifetimePolicyHandler,
  applicationTemplatesApplicationTemplateActionsHandler,
  applicationTemplatesApplicationTemplateHandler,
  auditLogsAuditLogRootHandler,
  auditLogsDirectoryAuditHandler,
  auditLogsProvisioningObjectSummaryHandler,
  auditLogsSignInHandler,
  authenticationMethodConfigurationsAuthenticationMethodConfigurationHandler,
  authenticationMethodsPolicyAuthenticationMethodConfigurationHandler,
  authenticationMethodsPolicyAuthenticationMethodsPolicyHandler,
  certificateBasedAuthConfigurationCertificateBasedAuthConfigurationHandler,
  chatsChatActionsHandler,
  chatsChatFunctionsHandler,
  chatsChatHandler,
  chatsChatMessageHandler,
  chatsChatMessageInfoHandler,
  chatsConversationMemberHandler,
  chatsPinnedChatMessageInfoHandler,
  chatsResourceSpecificPermissionGrantHandler,
  chatsTargetedChatMessageHandler,
  chatsTeamsAppInstallationHandler,
  chatsTeamsTabHandler,
  communicationsAdhocCallHandler,
  communicationsCallHandler,
  communicationsCallRecordHandler,
  communicationsCloudCommunicationsActionsHandler,
  communicationsCloudCommunicationsFunctionsHandler,
  communicationsCloudCommunicationsHandler,
  communicationsOnlineMeetingEngagementConversationHandler,
  communicationsOnlineMeetingHandler,
  communicationsPresenceHandler,
  complianceComplianceHandler,
  connectionsConnectionOperationHandler,
  connectionsExternalConnectionHandler,
  connectionsExternalGroupHandler,
  connectionsExternalItemHandler,
  connectionsSchemaHandler,
  contactsDirectoryObjectHandler,
  contactsOnPremisesSyncBehaviorHandler,
  contactsOrgContactActionsHandler,
  contactsOrgContactFunctionsHandler,
  contactsOrgContactHandler,
  contactsServiceProvisioningErrorHandler,
  contractsContractActionsHandler,
  contractsContractFunctionsHandler,
  contractsContractHandler,
  copilotAiInteractionHistoryHandler,
  copilotAiUserHandler,
  copilotCopilotAdminHandler,
  copilotCopilotReportRootHandler,
  copilotCopilotRootActionsHandler,
  copilotCopilotRootHandler,
  dataPolicyOperationsDataPolicyOperationHandler,
  deviceAppManagementAndroidManagedAppProtectionHandler,
  deviceAppManagementDefaultManagedAppProtectionHandler,
  deviceAppManagementDeviceAppManagementActionsHandler,
  deviceAppManagementDeviceAppManagementHandler,
  deviceAppManagementIosManagedAppProtectionHandler,
  deviceAppManagementManagedAppPolicyHandler,
  deviceAppManagementManagedAppRegistrationHandler,
  deviceAppManagementManagedAppStatusHandler,
  deviceAppManagementManagedDeviceMobileAppConfigurationHandler,
  deviceAppManagementManagedEBookHandler,
  deviceAppManagementMdmWindowsInformationProtectionPolicyHandler,
  deviceAppManagementMobileAppCategoryHandler,
  deviceAppManagementMobileAppHandler,
  deviceAppManagementMobileAppRelationshipHandler,
  deviceAppManagementTargetedManagedAppConfigurationHandler,
  deviceAppManagementVppTokenHandler,
  deviceAppManagementWindowsInformationProtectionPolicyHandler,
  deviceManagementApplePushNotificationCertificateHandler,
  deviceManagementAuditEventHandler,
  deviceManagementComplianceManagementPartnerHandler,
  deviceManagementDetectedAppHandler,
  deviceManagementDeviceAndAppManagementRoleAssignmentHandler,
  deviceManagementDeviceCategoryHandler,
  deviceManagementDeviceCompliancePolicyDeviceStateSummaryHandler,
  deviceManagementDeviceCompliancePolicyHandler,
  deviceManagementDeviceCompliancePolicySettingStateSummaryHandler,
  deviceManagementDeviceConfigurationDeviceStateSummaryHandler,
  deviceManagementDeviceConfigurationHandler,
  deviceManagementDeviceEnrollmentConfigurationHandler,
  deviceManagementDeviceManagementExchangeConnectorHandler,
  deviceManagementDeviceManagementFunctionsHandler,
  deviceManagementDeviceManagementHandler,
  deviceManagementDeviceManagementPartnerHandler,
  deviceManagementDeviceManagementReportsHandler,
  deviceManagementDeviceManagementTroubleshootingEventHandler,
  deviceManagementImportedWindowsAutopilotDeviceIdentityHandler,
  deviceManagementIosUpdateDeviceStatusHandler,
  deviceManagementManagedDeviceHandler,
  deviceManagementManagedDeviceOverviewHandler,
  deviceManagementMobileAppTroubleshootingEventHandler,
  deviceManagementMobileThreatDefenseConnectorHandler,
  deviceManagementNotificationMessageTemplateHandler,
  deviceManagementOnPremisesConditionalAccessSettingsHandler,
  deviceManagementRemoteAssistancePartnerHandler,
  deviceManagementResourceOperationHandler,
  deviceManagementRoleDefinitionHandler,
  deviceManagementSoftwareUpdateStatusSummaryHandler,
  deviceManagementTermsAndConditionsHandler,
  deviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceHandler,
  deviceManagementUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsHandler,
  deviceManagementUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdHandler,
  deviceManagementUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionHandler,
  deviceManagementUserExperienceAnalyticsAppHealthDeviceModelPerformanceHandler,
  deviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceDetailsHandler,
  deviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceHandler,
  deviceManagementUserExperienceAnalyticsAppHealthOSVersionPerformanceHandler,
  deviceManagementUserExperienceAnalyticsBaselineHandler,
  deviceManagementUserExperienceAnalyticsCategoryHandler,
  deviceManagementUserExperienceAnalyticsDevicePerformanceHandler,
  deviceManagementUserExperienceAnalyticsDeviceScoresHandler,
  deviceManagementUserExperienceAnalyticsDeviceStartupHistoryHandler,
  deviceManagementUserExperienceAnalyticsDeviceStartupProcessHandler,
  deviceManagementUserExperienceAnalyticsDeviceStartupProcessPerformanceHandler,
  deviceManagementUserExperienceAnalyticsMetricHistoryHandler,
  deviceManagementUserExperienceAnalyticsModelScoresHandler,
  deviceManagementUserExperienceAnalyticsOverviewHandler,
  deviceManagementUserExperienceAnalyticsScoreHistoryHandler,
  deviceManagementUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricHandler,
  deviceManagementUserExperienceAnalyticsWorkFromAnywhereMetricHandler,
  deviceManagementUserExperienceAnalyticsWorkFromAnywhereModelPerformanceHandler,
  deviceManagementVirtualEndpointHandler,
  deviceManagementWindowsAutopilotDeviceIdentityHandler,
  deviceManagementWindowsInformationProtectionAppLearningSummaryHandler,
  deviceManagementWindowsInformationProtectionNetworkLearningSummaryHandler,
  deviceManagementWindowsMalwareInformationHandler,
  devicesDeviceActionsHandler,
  devicesDeviceFunctionsHandler,
  devicesDeviceHandler,
  devicesDirectoryObjectHandler,
  devicesExtensionHandler,
  directoryAdministrativeUnitHandler,
  directoryAttributeSetHandler,
  directoryCompanySubscriptionHandler,
  directoryCustomSecurityAttributeDefinitionHandler,
  directoryDeviceLocalCredentialInfoHandler,
  directoryDirectoryHandler,
  directoryDirectoryObjectHandler,
  directoryIdentityProviderBaseHandler,
  directoryObjectsDirectoryObjectActionsHandler,
  directoryObjectsDirectoryObjectFunctionsHandler,
  directoryObjectsDirectoryObjectHandler,
  directoryOnPremisesDirectorySynchronizationHandler,
  directoryPublicKeyInfrastructureRootHandler,
  directoryRecoveryHandler,
  directoryRemoteTenantGroupHandler,
  directoryRolesDirectoryObjectHandler,
  directoryRolesDirectoryRoleActionsHandler,
  directoryRolesDirectoryRoleFunctionsHandler,
  directoryRolesDirectoryRoleHandler,
  directoryRolesScopedRoleMembershipHandler,
  directoryRoleTemplatesDirectoryRoleTemplateActionsHandler,
  directoryRoleTemplatesDirectoryRoleTemplateFunctionsHandler,
  directoryRoleTemplatesDirectoryRoleTemplateHandler,
  directoryTenantGovernanceHandler,
  domainDnsRecordsDomainDnsRecordHandler,
  domainsDirectoryObjectHandler,
  domainsDomainActionsHandler,
  domainsDomainDnsRecordHandler,
  domainsDomainHandler,
  domainsInternalDomainFederationHandler,
  drivesDriveActionsHandler,
  drivesDriveFunctionsHandler,
  drivesDriveHandler,
  drivesDriveItemHandler,
  drivesListHandler,
  drivesUserHandler,
  educationEducationClassHandler,
  educationEducationRootHandler,
  educationEducationSchoolHandler,
  educationEducationUserHandler,
  educationReportsRootHandler,
  employeeExperienceCommunityHandler,
  employeeExperienceEmployeeExperienceHandler,
  employeeExperienceEngagementAsyncOperationHandler,
  employeeExperienceEngagementRoleHandler,
  employeeExperienceLearningCourseActivityHandler,
  employeeExperienceLearningProviderHandler,
  externalExternalConnectionHandler,
  externalExternalHandler,
  filterOperatorsFilterOperatorSchemaHandler,
  functionsAttributeMappingFunctionSchemaHandler,
  groupLifecyclePoliciesGroupLifecyclePolicyActionsHandler,
  groupLifecyclePoliciesGroupLifecyclePolicyHandler,
  groupsAppRoleAssignmentHandler,
  groupsCalendarHandler,
  groupsConversationHandler,
  groupsConversationThreadHandler,
  groupsDirectoryObjectHandler,
  groupsDriveHandler,
  groupSettingsGroupSettingHandler,
  groupSettingTemplatesGroupSettingTemplateActionsHandler,
  groupSettingTemplatesGroupSettingTemplateFunctionsHandler,
  groupSettingTemplatesGroupSettingTemplateHandler,
  groupsEventHandler,
  groupsExtensionHandler,
  groupsGroupActionsHandler,
  groupsGroupFunctionsHandler,
  groupsGroupHandler,
  groupsGroupLifecyclePolicyHandler,
  groupsGroupSettingHandler,
  groupsOnenoteHandler,
  groupsOnPremisesSyncBehaviorHandler,
  groupsPlannerGroupHandler,
  groupsProfilePhotoHandler,
  groupsResourceSpecificPermissionGrantHandler,
  groupsServiceProvisioningErrorHandler,
  groupsSiteHandler,
  groupsTeamHandler,
  identityAuthenticationEventListenerHandler,
  identityAuthenticationEventsFlowHandler,
  identityB2xIdentityUserFlowHandler,
  identityConditionalAccessRootHandler,
  identityCustomAuthenticationExtensionHandler,
  identityGovernanceAccessPackageCatalogHandler,
  identityGovernanceAccessReviewSetHandler,
  identityGovernanceAppConsentApprovalRouteHandler,
  identityGovernanceEntitlementManagementHandler,
  identityGovernanceIdentityGovernanceHandler,
  identityGovernanceLifecycleWorkflowsContainerHandler,
  identityGovernancePrivilegedAccessRootHandler,
  identityGovernanceTermsOfUseContainerHandler,
  identityIdentityApiConnectorHandler,
  identityIdentityContainerHandler,
  identityIdentityProviderBaseHandler,
  identityIdentityUserFlowAttributeHandler,
  identityIdentityVerifiedIdRootHandler,
  identityProtectionIdentityProtectionRootHandler,
  identityProtectionRiskDetectionHandler,
  identityProtectionRiskyServicePrincipalHandler,
  identityProtectionRiskyUserHandler,
  identityProtectionServicePrincipalRiskDetectionHandler,
  identityProvidersIdentityProviderFunctionsHandler,
  identityProvidersIdentityProviderHandler,
  identityRiskPreventionContainerHandler,
  informationProtectionBitlockerHandler,
  informationProtectionInformationProtectionHandler,
  informationProtectionThreatAssessmentRequestHandler,
  invitationsDirectoryObjectHandler,
  invitationsInvitationHandler,
  invitationsUserHandler,
  meAdhocCallHandler,
  meAgreementAcceptanceHandler,
  meAppRoleAssignmentHandler,
  meAuthenticationHandler,
  meCalendarGroupHandler,
  meCalendarHandler,
  meChatHandler,
  meCloudClipboardRootHandler,
  meCloudPCHandler,
  meContactFolderHandler,
  meContactHandler,
  meDeviceManagementTroubleshootingEventHandler,
  meDirectoryObjectHandler,
  meDistributionListHandler,
  meDriveHandler,
  meEmployeeExperienceUserHandler,
  meEventHandler,
  meExtensionHandler,
  meInferenceClassificationHandler,
  meItemInsightsHandler,
  meLicenseDetailsHandler,
  meMailboxSettingsHandler,
  meMailFolderHandler,
  meManagedAppRegistrationHandler,
  meManagedDeviceHandler,
  meMessageHandler,
  meNoteHandler,
  meOAuth2PermissionGrantHandler,
  meOnenoteHandler,
  meOnlineMeetingHandler,
  meOnPremisesSyncBehaviorHandler,
  meOutlookUserHandler,
  mePersonHandler,
  mePlannerUserHandler,
  mePresenceHandler,
  meProfilePhotoHandler,
  meResourceSpecificPermissionGrantHandler,
  meScopedRoleMembershipHandler,
  meServiceProvisioningErrorHandler,
  meSiteHandler,
  meTeamHandler,
  meTodoHandler,
  meUserActionsHandler,
  meUserActivityHandler,
  meUserDataSecurityAndGovernanceHandler,
  meUserFunctionsHandler,
  meUserHandler,
  meUserSettingsHandler,
  meUserSolutionRootHandler,
  meUserTeamworkHandler,
  oauth2PermissionGrantsOAuth2PermissionGrantFunctionsHandler,
  oauth2PermissionGrantsOAuth2PermissionGrantHandler,
  organizationCertificateBasedAuthConfigurationHandler,
  organizationExtensionHandler,
  organizationOrganizationActionsHandler,
  organizationOrganizationalBrandingHandler,
  organizationOrganizationFunctionsHandler,
  organizationOrganizationHandler,
  permissionGrantsResourceSpecificPermissionGrantActionsHandler,
  permissionGrantsResourceSpecificPermissionGrantFunctionsHandler,
  permissionGrantsResourceSpecificPermissionGrantHandler,
  placesBuildingMapHandler,
  placesCheckInClaimHandler,
  placesPlaceFunctionsHandler,
  placesPlaceHandler,
  placesRoomHandler,
  placesWorkspaceHandler,
  plannerPlannerBucketHandler,
  plannerPlannerHandler,
  plannerPlannerPlanHandler,
  plannerPlannerTaskHandler,
  policiesActivityBasedTimeoutPolicyHandler,
  policiesAdminConsentRequestPolicyHandler,
  policiesAppManagementPolicyHandler,
  policiesAuthenticationFlowsPolicyHandler,
  policiesAuthenticationMethodsPolicyHandler,
  policiesAuthenticationStrengthPolicyHandler,
  policiesAuthorizationPolicyHandler,
  policiesClaimsMappingPolicyHandler,
  policiesConditionalAccessPolicyHandler,
  policiesCrossTenantAccessPolicyHandler,
  policiesDeviceRegistrationPolicyHandler,
  policiesFeatureRolloutPolicyHandler,
  policiesFederatedTokenValidationPolicyHandler,
  policiesHomeRealmDiscoveryPolicyHandler,
  policiesIdentitySecurityDefaultsEnforcementPolicyHandler,
  policiesOwnerlessGroupPolicyHandler,
  policiesPermissionGrantPolicyHandler,
  policiesPolicyRootHandler,
  policiesTenantAppManagementPolicyHandler,
  policiesTokenIssuancePolicyHandler,
  policiesTokenLifetimePolicyHandler,
  policiesUnifiedRoleManagementPolicyAssignmentHandler,
  policiesUnifiedRoleManagementPolicyHandler,
  printPrintConnectorHandler,
  printPrinterHandler,
  printPrinterShareHandler,
  printPrintHandler,
  printPrintOperationHandler,
  printPrintServiceHandler,
  printPrintTaskDefinitionHandler,
  privacyPrivacyHandler,
  privacySubjectRightsRequestHandler,
  reportsAuthenticationMethodsRootHandler,
  reportsPartnersHandler,
  reportsPrintUsageByPrinterHandler,
  reportsPrintUsageByUserHandler,
  reportsReportRootFunctionsHandler,
  reportsReportRootHandler,
  reportsSecurityReportsRootHandler,
  roleManagementRbacApplicationHandler,
  roleManagementRoleManagementHandler,
  schemaExtensionsSchemaExtensionHandler,
  scopedRoleMembershipsScopedRoleMembershipHandler,
  searchAcronymHandler,
  searchBookmarkHandler,
  searchQnaHandler,
  searchSearchEntityActionsHandler,
  searchSearchEntityHandler,
  securityAlertHandler,
  securityAttackSimulationRootHandler,
  securityAuditCoreRootHandler,
  securityCasesRootHandler,
  securityCollaborationRootHandler,
  securityIdentityContainerHandler,
  securityIncidentHandler,
  securityLabelsRootHandler,
  securityRulesRootHandler,
  securitySecureScoreControlProfileHandler,
  securitySecureScoreHandler,
  securitySecurityActionsHandler,
  securitySecurityHandler,
  securitySubjectRightsRequestHandler,
  securityTenantDataSecurityAndGovernanceHandler,
  securityThreatIntelligenceHandler,
  securityTriggersRootHandler,
  securityTriggerTypesRootHandler,
  servicePrincipalsAppManagementPolicyHandler,
  servicePrincipalsAppRoleAssignmentHandler,
  servicePrincipalsClaimsMappingPolicyHandler,
  servicePrincipalsDelegatedPermissionClassificationHandler,
  servicePrincipalsDirectoryObjectHandler,
  servicePrincipalsEndpointHandler,
  servicePrincipalsFederatedIdentityCredentialHandler,
  servicePrincipalsHomeRealmDiscoveryPolicyHandler,
  servicePrincipalsOAuth2PermissionGrantHandler,
  servicePrincipalsRemoteDesktopSecurityConfigurationHandler,
  servicePrincipalsServicePrincipalActionsHandler,
  servicePrincipalsServicePrincipalFunctionsHandler,
  servicePrincipalsServicePrincipalHandler,
  servicePrincipalsSynchronizationHandler,
  servicePrincipalsTokenIssuancePolicyHandler,
  servicePrincipalsTokenLifetimePolicyHandler,
  sharesDriveItemHandler,
  sharesListHandler,
  sharesListItemHandler,
  sharesPermissionHandler,
  sharesSharedDriveItemHandler,
  sharesSiteHandler,
  sharesUserHandler,
  sitesBaseItemHandler,
  sitesBaseSitePageHandler,
  sitesColumnDefinitionHandler,
  sitesContentTypeHandler,
  sitesDriveHandler,
  sitesItemAnalyticsHandler,
  sitesListHandler,
  sitesOnenoteHandler,
  sitesPermissionHandler,
  sitesRichLongRunningOperationHandler,
  sitesSiteActionsHandler,
  sitesSiteFunctionsHandler,
  sitesSiteHandler,
  sitesStoreHandler,
  sitesUserHandler,
  solutionsBackupRestoreRootHandler,
  solutionsBookingBusinessHandler,
  solutionsBookingCurrencyHandler,
  solutionsMigrationsRootHandler,
  solutionsSolutionsRootHandler,
  solutionsVirtualEventsRootHandler,
  storageFileStorageHandler,
  storageStorageHandler,
  storageStorageSettingsHandler,
  subscribedSkusSubscribedSkuHandler,
  subscriptionsSubscriptionActionsHandler,
  subscriptionsSubscriptionFunctionsHandler,
  subscriptionsSubscriptionHandler,
  teamsChannelHandler,
  teamsConversationMemberHandler,
  teamsGroupHandler,
  teamsProfilePhotoHandler,
  teamsResourceSpecificPermissionGrantHandler,
  teamsScheduleHandler,
  teamsTeamActionsHandler,
  teamsTeamFunctionsHandler,
  teamsTeamHandler,
  teamsTeamsAppInstallationHandler,
  teamsTeamsAsyncOperationHandler,
  teamsTeamsTemplateHandler,
  teamsTeamworkTagHandler,
  teamsTemplatesTeamsTemplateHandler,
  teamworkDeletedChatHandler,
  teamworkDeletedTeamHandler,
  teamworkTeamsAppSettingsHandler,
  teamworkTeamworkActionsHandler,
  teamworkTeamworkHandler,
  teamworkWorkforceIntegrationHandler,
  tenantRelationshipsDelegatedAdminCustomerHandler,
  tenantRelationshipsDelegatedAdminRelationshipHandler,
  tenantRelationshipsMultiTenantOrganizationHandler,
  tenantRelationshipsTenantRelationshipFunctionsHandler,
  tenantRelationshipsTenantRelationshipHandler,
  usersAdhocCallHandler,
  usersAgreementAcceptanceHandler,
  usersAppRoleAssignmentHandler,
  usersAuthenticationHandler,
  usersCalendarGroupHandler,
  usersCalendarHandler,
  usersChatHandler,
  usersCloudClipboardRootHandler,
  usersCloudPCHandler,
  usersContactFolderHandler,
  usersContactHandler,
  usersDeviceManagementTroubleshootingEventHandler,
  usersDirectoryObjectHandler,
  usersDistributionListHandler,
  usersDriveHandler,
  usersEmployeeExperienceUserHandler,
  usersEventHandler,
  usersExtensionHandler,
  usersInferenceClassificationHandler,
  usersItemInsightsHandler,
  usersLicenseDetailsHandler,
  usersMailboxSettingsHandler,
  usersMailFolderHandler,
  usersManagedAppRegistrationHandler,
  usersManagedDeviceHandler,
  usersMessageHandler,
  usersNoteHandler,
  usersOAuth2PermissionGrantHandler,
  usersOnenoteHandler,
  usersOnlineMeetingHandler,
  usersOnPremisesSyncBehaviorHandler,
  usersOutlookUserHandler,
  usersPersonHandler,
  usersPlannerUserHandler,
  usersPresenceHandler,
  usersProfilePhotoHandler,
  usersResourceSpecificPermissionGrantHandler,
  usersScopedRoleMembershipHandler,
  usersServiceProvisioningErrorHandler,
  usersSiteHandler,
  usersTeamHandler,
  usersTodoHandler,
  usersUserActionsHandler,
  usersUserActivityHandler,
  usersUserDataSecurityAndGovernanceHandler,
  usersUserFunctionsHandler,
  usersUserHandler,
  usersUserSettingsHandler,
  usersUserSolutionRootHandler,
  usersUserTeamworkHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', adminAdminHandler)
  .route('/', adminConfigurationManagementHandler)
  .route('/', adminEdgeHandler)
  .route('/', adminExchangeAdminHandler)
  .route('/', adminAdminMicrosoft365AppsHandler)
  .route('/', adminPeopleAdminSettingsHandler)
  .route('/', adminAdminReportSettingsHandler)
  .route('/', adminServiceAnnouncementHandler)
  .route('/', adminSharepointHandler)
  .route('/', adminTeamsAdminRootHandler)
  .route('/', agreementAcceptancesAgreementAcceptanceHandler)
  .route('/', agreementsAgreementHandler)
  .route('/', agreementsAgreementAcceptanceHandler)
  .route('/', agreementsAgreementFileHandler)
  .route('/', agreementsAgreementFileLocalizationHandler)
  .route('/', appCatalogsAppCatalogsHandler)
  .route('/', appCatalogsTeamsAppHandler)
  .route('/', applicationsApplicationHandler)
  .route('/', applicationsAppManagementPolicyHandler)
  .route('/', applicationsDirectoryObjectHandler)
  .route('/', applicationsExtensionPropertyHandler)
  .route('/', applicationsFederatedIdentityCredentialHandler)
  .route('/', applicationsHomeRealmDiscoveryPolicyHandler)
  .route('/', applicationsApplicationActionsHandler)
  .route('/', applicationsSynchronizationHandler)
  .route('/', applicationsTokenIssuancePolicyHandler)
  .route('/', applicationsTokenLifetimePolicyHandler)
  .route('/', applicationsApplicationFunctionsHandler)
  .route('/', applicationTemplatesApplicationTemplateHandler)
  .route('/', applicationTemplatesApplicationTemplateActionsHandler)
  .route('/', auditLogsAuditLogRootHandler)
  .route('/', auditLogsDirectoryAuditHandler)
  .route('/', auditLogsProvisioningObjectSummaryHandler)
  .route('/', auditLogsSignInHandler)
  .route('/', authenticationMethodConfigurationsAuthenticationMethodConfigurationHandler)
  .route('/', authenticationMethodsPolicyAuthenticationMethodsPolicyHandler)
  .route('/', authenticationMethodsPolicyAuthenticationMethodConfigurationHandler)
  .route('/', certificateBasedAuthConfigurationCertificateBasedAuthConfigurationHandler)
  .route('/', chatsChatHandler)
  .route('/', chatsTeamsAppInstallationHandler)
  .route('/', chatsChatMessageInfoHandler)
  .route('/', chatsConversationMemberHandler)
  .route('/', chatsChatMessageHandler)
  .route('/', chatsChatActionsHandler)
  .route('/', chatsResourceSpecificPermissionGrantHandler)
  .route('/', chatsPinnedChatMessageInfoHandler)
  .route('/', chatsTeamsTabHandler)
  .route('/', chatsTargetedChatMessageHandler)
  .route('/', chatsChatFunctionsHandler)
  .route('/', communicationsCloudCommunicationsHandler)
  .route('/', communicationsAdhocCallHandler)
  .route('/', communicationsCallRecordHandler)
  .route('/', communicationsCallHandler)
  .route('/', communicationsCloudCommunicationsFunctionsHandler)
  .route('/', communicationsCloudCommunicationsActionsHandler)
  .route('/', communicationsOnlineMeetingEngagementConversationHandler)
  .route('/', communicationsOnlineMeetingHandler)
  .route('/', communicationsPresenceHandler)
  .route('/', complianceComplianceHandler)
  .route('/', connectionsExternalConnectionHandler)
  .route('/', connectionsExternalGroupHandler)
  .route('/', connectionsExternalItemHandler)
  .route('/', connectionsConnectionOperationHandler)
  .route('/', connectionsSchemaHandler)
  .route('/', contactsOrgContactHandler)
  .route('/', contactsDirectoryObjectHandler)
  .route('/', contactsOrgContactActionsHandler)
  .route('/', contactsOnPremisesSyncBehaviorHandler)
  .route('/', contactsServiceProvisioningErrorHandler)
  .route('/', contactsOrgContactFunctionsHandler)
  .route('/', contractsContractHandler)
  .route('/', contractsContractActionsHandler)
  .route('/', contractsContractFunctionsHandler)
  .route('/', copilotCopilotRootHandler)
  .route('/', copilotCopilotAdminHandler)
  .route('/', copilotAiInteractionHistoryHandler)
  .route('/', copilotCopilotRootActionsHandler)
  .route('/', copilotCopilotReportRootHandler)
  .route('/', copilotAiUserHandler)
  .route('/', dataPolicyOperationsDataPolicyOperationHandler)
  .route('/', deviceAppManagementDeviceAppManagementHandler)
  .route('/', deviceAppManagementAndroidManagedAppProtectionHandler)
  .route('/', deviceAppManagementDefaultManagedAppProtectionHandler)
  .route('/', deviceAppManagementIosManagedAppProtectionHandler)
  .route('/', deviceAppManagementManagedAppPolicyHandler)
  .route('/', deviceAppManagementManagedAppRegistrationHandler)
  .route('/', deviceAppManagementManagedAppStatusHandler)
  .route('/', deviceAppManagementManagedEBookHandler)
  .route('/', deviceAppManagementMdmWindowsInformationProtectionPolicyHandler)
  .route('/', deviceAppManagementDeviceAppManagementActionsHandler)
  .route('/', deviceAppManagementMobileAppCategoryHandler)
  .route('/', deviceAppManagementManagedDeviceMobileAppConfigurationHandler)
  .route('/', deviceAppManagementMobileAppRelationshipHandler)
  .route('/', deviceAppManagementMobileAppHandler)
  .route('/', deviceAppManagementTargetedManagedAppConfigurationHandler)
  .route('/', deviceAppManagementVppTokenHandler)
  .route('/', deviceAppManagementWindowsInformationProtectionPolicyHandler)
  .route('/', deviceManagementDeviceManagementHandler)
  .route('/', deviceManagementApplePushNotificationCertificateHandler)
  .route('/', deviceManagementAuditEventHandler)
  .route('/', deviceManagementComplianceManagementPartnerHandler)
  .route('/', deviceManagementOnPremisesConditionalAccessSettingsHandler)
  .route('/', deviceManagementDetectedAppHandler)
  .route('/', deviceManagementDeviceCategoryHandler)
  .route('/', deviceManagementDeviceCompliancePolicyHandler)
  .route('/', deviceManagementDeviceCompliancePolicyDeviceStateSummaryHandler)
  .route('/', deviceManagementDeviceCompliancePolicySettingStateSummaryHandler)
  .route('/', deviceManagementDeviceConfigurationDeviceStateSummaryHandler)
  .route('/', deviceManagementDeviceConfigurationHandler)
  .route('/', deviceManagementDeviceEnrollmentConfigurationHandler)
  .route('/', deviceManagementDeviceManagementPartnerHandler)
  .route('/', deviceManagementDeviceManagementExchangeConnectorHandler)
  .route('/', deviceManagementImportedWindowsAutopilotDeviceIdentityHandler)
  .route('/', deviceManagementIosUpdateDeviceStatusHandler)
  .route('/', deviceManagementManagedDeviceOverviewHandler)
  .route('/', deviceManagementManagedDeviceHandler)
  .route('/', deviceManagementDeviceManagementFunctionsHandler)
  .route('/', deviceManagementMobileAppTroubleshootingEventHandler)
  .route('/', deviceManagementMobileThreatDefenseConnectorHandler)
  .route('/', deviceManagementNotificationMessageTemplateHandler)
  .route('/', deviceManagementRemoteAssistancePartnerHandler)
  .route('/', deviceManagementDeviceManagementReportsHandler)
  .route('/', deviceManagementResourceOperationHandler)
  .route('/', deviceManagementDeviceAndAppManagementRoleAssignmentHandler)
  .route('/', deviceManagementRoleDefinitionHandler)
  .route('/', deviceManagementSoftwareUpdateStatusSummaryHandler)
  .route('/', deviceManagementTermsAndConditionsHandler)
  .route('/', deviceManagementDeviceManagementTroubleshootingEventHandler)
  .route('/', deviceManagementUserExperienceAnalyticsAppHealthApplicationPerformanceHandler)
  .route(
    '/',
    deviceManagementUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetailsHandler,
  )
  .route(
    '/',
    deviceManagementUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceIdHandler,
  )
  .route('/', deviceManagementUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionHandler)
  .route('/', deviceManagementUserExperienceAnalyticsAppHealthDeviceModelPerformanceHandler)
  .route('/', deviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceHandler)
  .route('/', deviceManagementUserExperienceAnalyticsAppHealthDevicePerformanceDetailsHandler)
  .route('/', deviceManagementUserExperienceAnalyticsAppHealthOSVersionPerformanceHandler)
  .route('/', deviceManagementUserExperienceAnalyticsCategoryHandler)
  .route('/', deviceManagementUserExperienceAnalyticsBaselineHandler)
  .route('/', deviceManagementUserExperienceAnalyticsDevicePerformanceHandler)
  .route('/', deviceManagementUserExperienceAnalyticsDeviceScoresHandler)
  .route('/', deviceManagementUserExperienceAnalyticsDeviceStartupHistoryHandler)
  .route('/', deviceManagementUserExperienceAnalyticsDeviceStartupProcessHandler)
  .route('/', deviceManagementUserExperienceAnalyticsDeviceStartupProcessPerformanceHandler)
  .route('/', deviceManagementUserExperienceAnalyticsMetricHistoryHandler)
  .route('/', deviceManagementUserExperienceAnalyticsModelScoresHandler)
  .route('/', deviceManagementUserExperienceAnalyticsOverviewHandler)
  .route('/', deviceManagementUserExperienceAnalyticsScoreHistoryHandler)
  .route('/', deviceManagementUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricHandler)
  .route('/', deviceManagementUserExperienceAnalyticsWorkFromAnywhereMetricHandler)
  .route('/', deviceManagementUserExperienceAnalyticsWorkFromAnywhereModelPerformanceHandler)
  .route('/', deviceManagementVirtualEndpointHandler)
  .route('/', deviceManagementWindowsAutopilotDeviceIdentityHandler)
  .route('/', deviceManagementWindowsInformationProtectionAppLearningSummaryHandler)
  .route('/', deviceManagementWindowsInformationProtectionNetworkLearningSummaryHandler)
  .route('/', deviceManagementWindowsMalwareInformationHandler)
  .route('/', devicesDeviceHandler)
  .route('/', devicesExtensionHandler)
  .route('/', devicesDirectoryObjectHandler)
  .route('/', devicesDeviceActionsHandler)
  .route('/', devicesDeviceFunctionsHandler)
  .route('/', directoryDirectoryHandler)
  .route('/', directoryAdministrativeUnitHandler)
  .route('/', directoryAttributeSetHandler)
  .route('/', directoryCustomSecurityAttributeDefinitionHandler)
  .route('/', directoryDirectoryObjectHandler)
  .route('/', directoryDeviceLocalCredentialInfoHandler)
  .route('/', directoryIdentityProviderBaseHandler)
  .route('/', directoryOnPremisesDirectorySynchronizationHandler)
  .route('/', directoryPublicKeyInfrastructureRootHandler)
  .route('/', directoryRecoveryHandler)
  .route('/', directoryRemoteTenantGroupHandler)
  .route('/', directoryCompanySubscriptionHandler)
  .route('/', directoryTenantGovernanceHandler)
  .route('/', directoryObjectsDirectoryObjectHandler)
  .route('/', directoryObjectsDirectoryObjectActionsHandler)
  .route('/', directoryObjectsDirectoryObjectFunctionsHandler)
  .route('/', directoryRolesDirectoryRoleHandler)
  .route('/', directoryRolesDirectoryObjectHandler)
  .route('/', directoryRolesDirectoryRoleActionsHandler)
  .route('/', directoryRolesScopedRoleMembershipHandler)
  .route('/', directoryRolesDirectoryRoleFunctionsHandler)
  .route('/', directoryRoleTemplatesDirectoryRoleTemplateHandler)
  .route('/', directoryRoleTemplatesDirectoryRoleTemplateActionsHandler)
  .route('/', directoryRoleTemplatesDirectoryRoleTemplateFunctionsHandler)
  .route('/', domainDnsRecordsDomainDnsRecordHandler)
  .route('/', domainsDomainHandler)
  .route('/', domainsDirectoryObjectHandler)
  .route('/', domainsInternalDomainFederationHandler)
  .route('/', domainsDomainActionsHandler)
  .route('/', domainsDomainDnsRecordHandler)
  .route('/', drivesDriveHandler)
  .route('/', drivesDriveItemHandler)
  .route('/', drivesUserHandler)
  .route('/', drivesDriveFunctionsHandler)
  .route('/', drivesDriveActionsHandler)
  .route('/', drivesListHandler)
  .route('/', educationEducationRootHandler)
  .route('/', educationEducationClassHandler)
  .route('/', educationEducationUserHandler)
  .route('/', educationReportsRootHandler)
  .route('/', educationEducationSchoolHandler)
  .route('/', employeeExperienceEmployeeExperienceHandler)
  .route('/', employeeExperienceCommunityHandler)
  .route('/', employeeExperienceEngagementAsyncOperationHandler)
  .route('/', employeeExperienceLearningCourseActivityHandler)
  .route('/', employeeExperienceLearningProviderHandler)
  .route('/', employeeExperienceEngagementRoleHandler)
  .route('/', externalExternalHandler)
  .route('/', externalExternalConnectionHandler)
  .route('/', filterOperatorsFilterOperatorSchemaHandler)
  .route('/', functionsAttributeMappingFunctionSchemaHandler)
  .route('/', groupLifecyclePoliciesGroupLifecyclePolicyHandler)
  .route('/', groupLifecyclePoliciesGroupLifecyclePolicyActionsHandler)
  .route('/', groupsGroupHandler)
  .route('/', groupsDirectoryObjectHandler)
  .route('/', groupsAppRoleAssignmentHandler)
  .route('/', groupsCalendarHandler)
  .route('/', groupsEventHandler)
  .route('/', groupsConversationHandler)
  .route('/', groupsDriveHandler)
  .route('/', groupsExtensionHandler)
  .route('/', groupsGroupLifecyclePolicyHandler)
  .route('/', groupsGroupActionsHandler)
  .route('/', groupsOnenoteHandler)
  .route('/', groupsOnPremisesSyncBehaviorHandler)
  .route('/', groupsResourceSpecificPermissionGrantHandler)
  .route('/', groupsProfilePhotoHandler)
  .route('/', groupsPlannerGroupHandler)
  .route('/', groupsServiceProvisioningErrorHandler)
  .route('/', groupsGroupSettingHandler)
  .route('/', groupsSiteHandler)
  .route('/', groupsGroupFunctionsHandler)
  .route('/', groupsTeamHandler)
  .route('/', groupsConversationThreadHandler)
  .route('/', groupSettingsGroupSettingHandler)
  .route('/', groupSettingTemplatesGroupSettingTemplateHandler)
  .route('/', groupSettingTemplatesGroupSettingTemplateActionsHandler)
  .route('/', groupSettingTemplatesGroupSettingTemplateFunctionsHandler)
  .route('/', identityIdentityContainerHandler)
  .route('/', identityIdentityApiConnectorHandler)
  .route('/', identityAuthenticationEventListenerHandler)
  .route('/', identityAuthenticationEventsFlowHandler)
  .route('/', identityB2xIdentityUserFlowHandler)
  .route('/', identityConditionalAccessRootHandler)
  .route('/', identityCustomAuthenticationExtensionHandler)
  .route('/', identityIdentityProviderBaseHandler)
  .route('/', identityRiskPreventionContainerHandler)
  .route('/', identityIdentityUserFlowAttributeHandler)
  .route('/', identityIdentityVerifiedIdRootHandler)
  .route('/', identityGovernanceIdentityGovernanceHandler)
  .route('/', identityGovernanceAccessReviewSetHandler)
  .route('/', identityGovernanceAppConsentApprovalRouteHandler)
  .route('/', identityGovernanceAccessPackageCatalogHandler)
  .route('/', identityGovernanceEntitlementManagementHandler)
  .route('/', identityGovernanceLifecycleWorkflowsContainerHandler)
  .route('/', identityGovernancePrivilegedAccessRootHandler)
  .route('/', identityGovernanceTermsOfUseContainerHandler)
  .route('/', identityProtectionIdentityProtectionRootHandler)
  .route('/', identityProtectionRiskDetectionHandler)
  .route('/', identityProtectionRiskyServicePrincipalHandler)
  .route('/', identityProtectionRiskyUserHandler)
  .route('/', identityProtectionServicePrincipalRiskDetectionHandler)
  .route('/', identityProvidersIdentityProviderHandler)
  .route('/', identityProvidersIdentityProviderFunctionsHandler)
  .route('/', informationProtectionInformationProtectionHandler)
  .route('/', informationProtectionBitlockerHandler)
  .route('/', informationProtectionThreatAssessmentRequestHandler)
  .route('/', invitationsInvitationHandler)
  .route('/', invitationsUserHandler)
  .route('/', invitationsDirectoryObjectHandler)
  .route('/', meUserHandler)
  .route('/', meUserActivityHandler)
  .route('/', meAdhocCallHandler)
  .route('/', meAgreementAcceptanceHandler)
  .route('/', meAppRoleAssignmentHandler)
  .route('/', meAuthenticationHandler)
  .route('/', meCalendarHandler)
  .route('/', meCalendarGroupHandler)
  .route('/', meEventHandler)
  .route('/', meChatHandler)
  .route('/', meCloudClipboardRootHandler)
  .route('/', meCloudPCHandler)
  .route('/', meContactFolderHandler)
  .route('/', meContactHandler)
  .route('/', meDirectoryObjectHandler)
  .route('/', meUserDataSecurityAndGovernanceHandler)
  .route('/', meDeviceManagementTroubleshootingEventHandler)
  .route('/', meDistributionListHandler)
  .route('/', meDriveHandler)
  .route('/', meEmployeeExperienceUserHandler)
  .route('/', meExtensionHandler)
  .route('/', meSiteHandler)
  .route('/', meInferenceClassificationHandler)
  .route('/', meItemInsightsHandler)
  .route('/', meTeamHandler)
  .route('/', meLicenseDetailsHandler)
  .route('/', meMailboxSettingsHandler)
  .route('/', meMailFolderHandler)
  .route('/', meManagedAppRegistrationHandler)
  .route('/', meManagedDeviceHandler)
  .route('/', meMessageHandler)
  .route('/', meUserActionsHandler)
  .route('/', meUserFunctionsHandler)
  .route('/', meNoteHandler)
  .route('/', meOAuth2PermissionGrantHandler)
  .route('/', meOnenoteHandler)
  .route('/', meOnlineMeetingHandler)
  .route('/', meOnPremisesSyncBehaviorHandler)
  .route('/', meOutlookUserHandler)
  .route('/', mePersonHandler)
  .route('/', meResourceSpecificPermissionGrantHandler)
  .route('/', meProfilePhotoHandler)
  .route('/', mePlannerUserHandler)
  .route('/', mePresenceHandler)
  .route('/', meScopedRoleMembershipHandler)
  .route('/', meServiceProvisioningErrorHandler)
  .route('/', meUserSettingsHandler)
  .route('/', meUserSolutionRootHandler)
  .route('/', meUserTeamworkHandler)
  .route('/', meTodoHandler)
  .route('/', oauth2PermissionGrantsOAuth2PermissionGrantHandler)
  .route('/', oauth2PermissionGrantsOAuth2PermissionGrantFunctionsHandler)
  .route('/', organizationOrganizationHandler)
  .route('/', organizationOrganizationalBrandingHandler)
  .route('/', organizationCertificateBasedAuthConfigurationHandler)
  .route('/', organizationExtensionHandler)
  .route('/', organizationOrganizationActionsHandler)
  .route('/', organizationOrganizationFunctionsHandler)
  .route('/', permissionGrantsResourceSpecificPermissionGrantHandler)
  .route('/', permissionGrantsResourceSpecificPermissionGrantActionsHandler)
  .route('/', permissionGrantsResourceSpecificPermissionGrantFunctionsHandler)
  .route('/', placesPlaceHandler)
  .route('/', placesCheckInClaimHandler)
  .route('/', placesBuildingMapHandler)
  .route('/', placesPlaceFunctionsHandler)
  .route('/', placesRoomHandler)
  .route('/', placesWorkspaceHandler)
  .route('/', plannerPlannerHandler)
  .route('/', plannerPlannerBucketHandler)
  .route('/', plannerPlannerPlanHandler)
  .route('/', plannerPlannerTaskHandler)
  .route('/', policiesPolicyRootHandler)
  .route('/', policiesActivityBasedTimeoutPolicyHandler)
  .route('/', policiesAdminConsentRequestPolicyHandler)
  .route('/', policiesAppManagementPolicyHandler)
  .route('/', policiesAuthenticationFlowsPolicyHandler)
  .route('/', policiesAuthenticationMethodsPolicyHandler)
  .route('/', policiesAuthenticationStrengthPolicyHandler)
  .route('/', policiesAuthorizationPolicyHandler)
  .route('/', policiesClaimsMappingPolicyHandler)
  .route('/', policiesConditionalAccessPolicyHandler)
  .route('/', policiesCrossTenantAccessPolicyHandler)
  .route('/', policiesTenantAppManagementPolicyHandler)
  .route('/', policiesDeviceRegistrationPolicyHandler)
  .route('/', policiesFeatureRolloutPolicyHandler)
  .route('/', policiesFederatedTokenValidationPolicyHandler)
  .route('/', policiesHomeRealmDiscoveryPolicyHandler)
  .route('/', policiesIdentitySecurityDefaultsEnforcementPolicyHandler)
  .route('/', policiesOwnerlessGroupPolicyHandler)
  .route('/', policiesPermissionGrantPolicyHandler)
  .route('/', policiesUnifiedRoleManagementPolicyHandler)
  .route('/', policiesUnifiedRoleManagementPolicyAssignmentHandler)
  .route('/', policiesTokenIssuancePolicyHandler)
  .route('/', policiesTokenLifetimePolicyHandler)
  .route('/', printPrintHandler)
  .route('/', printPrintConnectorHandler)
  .route('/', printPrintOperationHandler)
  .route('/', printPrinterHandler)
  .route('/', printPrintServiceHandler)
  .route('/', printPrinterShareHandler)
  .route('/', printPrintTaskDefinitionHandler)
  .route('/', privacyPrivacyHandler)
  .route('/', privacySubjectRightsRequestHandler)
  .route('/', reportsReportRootHandler)
  .route('/', reportsAuthenticationMethodsRootHandler)
  .route('/', reportsPrintUsageByPrinterHandler)
  .route('/', reportsPrintUsageByUserHandler)
  .route('/', reportsReportRootFunctionsHandler)
  .route('/', reportsPartnersHandler)
  .route('/', reportsSecurityReportsRootHandler)
  .route('/', roleManagementRoleManagementHandler)
  .route('/', roleManagementRbacApplicationHandler)
  .route('/', schemaExtensionsSchemaExtensionHandler)
  .route('/', scopedRoleMembershipsScopedRoleMembershipHandler)
  .route('/', searchSearchEntityHandler)
  .route('/', searchAcronymHandler)
  .route('/', searchBookmarkHandler)
  .route('/', searchSearchEntityActionsHandler)
  .route('/', searchQnaHandler)
  .route('/', securitySecurityHandler)
  .route('/', securityAlertHandler)
  .route('/', securityAttackSimulationRootHandler)
  .route('/', securityAuditCoreRootHandler)
  .route('/', securityCasesRootHandler)
  .route('/', securityCollaborationRootHandler)
  .route('/', securityTenantDataSecurityAndGovernanceHandler)
  .route('/', securityIdentityContainerHandler)
  .route('/', securityIncidentHandler)
  .route('/', securityLabelsRootHandler)
  .route('/', securitySecurityActionsHandler)
  .route('/', securityRulesRootHandler)
  .route('/', securitySecureScoreControlProfileHandler)
  .route('/', securitySecureScoreHandler)
  .route('/', securitySubjectRightsRequestHandler)
  .route('/', securityThreatIntelligenceHandler)
  .route('/', securityTriggersRootHandler)
  .route('/', securityTriggerTypesRootHandler)
  .route('/', servicePrincipalsServicePrincipalHandler)
  .route('/', servicePrincipalsAppManagementPolicyHandler)
  .route('/', servicePrincipalsAppRoleAssignmentHandler)
  .route('/', servicePrincipalsClaimsMappingPolicyHandler)
  .route('/', servicePrincipalsDirectoryObjectHandler)
  .route('/', servicePrincipalsDelegatedPermissionClassificationHandler)
  .route('/', servicePrincipalsEndpointHandler)
  .route('/', servicePrincipalsFederatedIdentityCredentialHandler)
  .route('/', servicePrincipalsHomeRealmDiscoveryPolicyHandler)
  .route('/', servicePrincipalsServicePrincipalActionsHandler)
  .route('/', servicePrincipalsOAuth2PermissionGrantHandler)
  .route('/', servicePrincipalsRemoteDesktopSecurityConfigurationHandler)
  .route('/', servicePrincipalsSynchronizationHandler)
  .route('/', servicePrincipalsTokenIssuancePolicyHandler)
  .route('/', servicePrincipalsTokenLifetimePolicyHandler)
  .route('/', servicePrincipalsServicePrincipalFunctionsHandler)
  .route('/', sharesSharedDriveItemHandler)
  .route('/', sharesUserHandler)
  .route('/', sharesDriveItemHandler)
  .route('/', sharesListHandler)
  .route('/', sharesListItemHandler)
  .route('/', sharesPermissionHandler)
  .route('/', sharesSiteHandler)
  .route('/', sitesSiteHandler)
  .route('/', sitesItemAnalyticsHandler)
  .route('/', sitesColumnDefinitionHandler)
  .route('/', sitesContentTypeHandler)
  .route('/', sitesUserHandler)
  .route('/', sitesDriveHandler)
  .route('/', sitesBaseItemHandler)
  .route('/', sitesListHandler)
  .route('/', sitesSiteFunctionsHandler)
  .route('/', sitesOnenoteHandler)
  .route('/', sitesRichLongRunningOperationHandler)
  .route('/', sitesBaseSitePageHandler)
  .route('/', sitesPermissionHandler)
  .route('/', sitesStoreHandler)
  .route('/', sitesSiteActionsHandler)
  .route('/', solutionsSolutionsRootHandler)
  .route('/', solutionsBackupRestoreRootHandler)
  .route('/', solutionsBookingBusinessHandler)
  .route('/', solutionsBookingCurrencyHandler)
  .route('/', solutionsMigrationsRootHandler)
  .route('/', solutionsVirtualEventsRootHandler)
  .route('/', storageStorageHandler)
  .route('/', storageFileStorageHandler)
  .route('/', storageStorageSettingsHandler)
  .route('/', subscribedSkusSubscribedSkuHandler)
  .route('/', subscriptionsSubscriptionHandler)
  .route('/', subscriptionsSubscriptionActionsHandler)
  .route('/', subscriptionsSubscriptionFunctionsHandler)
  .route('/', teamsTeamHandler)
  .route('/', teamsChannelHandler)
  .route('/', teamsGroupHandler)
  .route('/', teamsTeamsAppInstallationHandler)
  .route('/', teamsConversationMemberHandler)
  .route('/', teamsTeamActionsHandler)
  .route('/', teamsTeamsAsyncOperationHandler)
  .route('/', teamsResourceSpecificPermissionGrantHandler)
  .route('/', teamsProfilePhotoHandler)
  .route('/', teamsScheduleHandler)
  .route('/', teamsTeamworkTagHandler)
  .route('/', teamsTeamsTemplateHandler)
  .route('/', teamsTeamFunctionsHandler)
  .route('/', teamsTemplatesTeamsTemplateHandler)
  .route('/', teamworkTeamworkHandler)
  .route('/', teamworkDeletedChatHandler)
  .route('/', teamworkDeletedTeamHandler)
  .route('/', teamworkTeamworkActionsHandler)
  .route('/', teamworkTeamsAppSettingsHandler)
  .route('/', teamworkWorkforceIntegrationHandler)
  .route('/', tenantRelationshipsTenantRelationshipHandler)
  .route('/', tenantRelationshipsDelegatedAdminCustomerHandler)
  .route('/', tenantRelationshipsDelegatedAdminRelationshipHandler)
  .route('/', tenantRelationshipsTenantRelationshipFunctionsHandler)
  .route('/', tenantRelationshipsMultiTenantOrganizationHandler)
  .route('/', usersUserHandler)
  .route('/', usersUserActivityHandler)
  .route('/', usersAdhocCallHandler)
  .route('/', usersAgreementAcceptanceHandler)
  .route('/', usersAppRoleAssignmentHandler)
  .route('/', usersAuthenticationHandler)
  .route('/', usersCalendarHandler)
  .route('/', usersCalendarGroupHandler)
  .route('/', usersEventHandler)
  .route('/', usersChatHandler)
  .route('/', usersCloudClipboardRootHandler)
  .route('/', usersCloudPCHandler)
  .route('/', usersContactFolderHandler)
  .route('/', usersContactHandler)
  .route('/', usersDirectoryObjectHandler)
  .route('/', usersUserDataSecurityAndGovernanceHandler)
  .route('/', usersDeviceManagementTroubleshootingEventHandler)
  .route('/', usersDistributionListHandler)
  .route('/', usersDriveHandler)
  .route('/', usersEmployeeExperienceUserHandler)
  .route('/', usersExtensionHandler)
  .route('/', usersSiteHandler)
  .route('/', usersInferenceClassificationHandler)
  .route('/', usersItemInsightsHandler)
  .route('/', usersTeamHandler)
  .route('/', usersLicenseDetailsHandler)
  .route('/', usersMailboxSettingsHandler)
  .route('/', usersMailFolderHandler)
  .route('/', usersManagedAppRegistrationHandler)
  .route('/', usersManagedDeviceHandler)
  .route('/', usersMessageHandler)
  .route('/', usersUserActionsHandler)
  .route('/', usersUserFunctionsHandler)
  .route('/', usersNoteHandler)
  .route('/', usersOAuth2PermissionGrantHandler)
  .route('/', usersOnenoteHandler)
  .route('/', usersOnlineMeetingHandler)
  .route('/', usersOnPremisesSyncBehaviorHandler)
  .route('/', usersOutlookUserHandler)
  .route('/', usersPersonHandler)
  .route('/', usersResourceSpecificPermissionGrantHandler)
  .route('/', usersProfilePhotoHandler)
  .route('/', usersPlannerUserHandler)
  .route('/', usersPresenceHandler)
  .route('/', usersScopedRoleMembershipHandler)
  .route('/', usersServiceProvisioningErrorHandler)
  .route('/', usersUserSettingsHandler)
  .route('/', usersUserSolutionRootHandler)
  .route('/', usersUserTeamworkHandler)
  .route('/', usersTodoHandler)

export default app
