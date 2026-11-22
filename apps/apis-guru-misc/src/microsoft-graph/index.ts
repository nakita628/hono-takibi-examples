import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminActionsHandler,
  adminAdminHandler,
  adminFunctionsHandler,
  adminHandler,
  adminServiceAnnouncementHandler,
  agreementAcceptancesAgreementAcceptanceHandler,
  agreementsAgreementAcceptanceHandler,
  agreementsAgreementFileHandler,
  agreementsAgreementFileLocalizationHandler,
  agreementsAgreementHandler,
  agreementsHandler,
  appCatalogsAppCatalogsHandler,
  appCatalogsHandler,
  appCatalogsTeamsAppHandler,
  applicationsActionsHandler,
  applicationsApplicationHandler,
  applicationsDirectoryObjectHandler,
  applicationsExtensionPropertyHandler,
  applicationsFederatedIdentityCredentialHandler,
  applicationsFunctionsHandler,
  applicationsHandler,
  applicationsHomeRealmDiscoveryPolicyHandler,
  applicationsTokenIssuancePolicyHandler,
  applicationsTokenLifetimePolicyHandler,
  applicationTemplatesActionsHandler,
  applicationTemplatesApplicationTemplateHandler,
  applicationTemplatesHandler,
  auditLogsAuditLogRootHandler,
  auditLogsDirectoryAuditHandler,
  auditLogsHandler,
  auditLogsProvisioningObjectSummaryHandler,
  auditLogsSignInHandler,
  authenticationMethodConfigurationsAuthenticationMethodConfigurationHandler,
  authenticationMethodConfigurationsHandler,
  authenticationMethodsPolicyAuthenticationMethodConfigurationHandler,
  authenticationMethodsPolicyAuthenticationMethodsPolicyHandler,
  authenticationMethodsPolicyHandler,
  brandingHandler,
  brandingOrganizationalBrandingHandler,
  brandingOrganizationalBrandingLocalizationHandler,
  certificateBasedAuthConfigurationCertificateBasedAuthConfigurationHandler,
  certificateBasedAuthConfigurationHandler,
  chatsActionsHandler,
  chatsChatHandler,
  chatsChatMessageHandler,
  chatsChatMessageInfoHandler,
  chatsConversationMemberHandler,
  chatsFunctionsHandler,
  chatsHandler,
  chatsPinnedChatMessageInfoHandler,
  chatsTeamsAppInstallationHandler,
  chatsTeamsTabHandler,
  communicationsActionsHandler,
  communicationsCallHandler,
  communicationsCallRecordHandler,
  communicationsCloudCommunicationsHandler,
  communicationsFunctionsHandler,
  communicationsHandler,
  communicationsOnlineMeetingHandler,
  communicationsPresenceHandler,
  complianceComplianceHandler,
  connectionsConnectionOperationHandler,
  connectionsExternalConnectionHandler,
  connectionsExternalGroupHandler,
  connectionsExternalItemHandler,
  connectionsHandler,
  connectionsSchemaHandler,
  contactsActionsHandler,
  contactsDirectoryObjectHandler,
  contactsFunctionsHandler,
  contactsHandler,
  contactsOrgContactHandler,
  contractsActionsHandler,
  contractsContractHandler,
  contractsHandler,
  dataPolicyOperationsDataPolicyOperationHandler,
  dataPolicyOperationsHandler,
  deviceAppManagementActionsHandler,
  deviceAppManagementAndroidManagedAppProtectionHandler,
  deviceAppManagementDefaultManagedAppProtectionHandler,
  deviceAppManagementDeviceAppManagementHandler,
  deviceAppManagementFunctionsHandler,
  deviceAppManagementHandler,
  deviceAppManagementIosManagedAppProtectionHandler,
  deviceAppManagementManagedAppPolicyHandler,
  deviceAppManagementManagedAppRegistrationHandler,
  deviceAppManagementManagedAppStatusHandler,
  deviceAppManagementManagedDeviceMobileAppConfigurationHandler,
  deviceAppManagementManagedEBookHandler,
  deviceAppManagementMdmWindowsInformationProtectionPolicyHandler,
  deviceAppManagementMobileAppCategoryHandler,
  deviceAppManagementMobileAppHandler,
  deviceAppManagementTargetedManagedAppConfigurationHandler,
  deviceAppManagementVppTokenHandler,
  deviceAppManagementWindowsInformationProtectionPolicyHandler,
  deviceManagementActionsHandler,
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
  deviceManagementDeviceManagementHandler,
  deviceManagementDeviceManagementPartnerHandler,
  deviceManagementDeviceManagementReportsHandler,
  deviceManagementDeviceManagementTroubleshootingEventHandler,
  deviceManagementFunctionsHandler,
  deviceManagementHandler,
  deviceManagementImportedWindowsAutopilotDeviceIdentityHandler,
  deviceManagementIosUpdateDeviceStatusHandler,
  deviceManagementManagedDeviceHandler,
  deviceManagementManagedDeviceOverviewHandler,
  deviceManagementMobileThreatDefenseConnectorHandler,
  deviceManagementNotificationMessageTemplateHandler,
  deviceManagementOnPremisesConditionalAccessSettingsHandler,
  deviceManagementRemoteAssistancePartnerHandler,
  deviceManagementResourceOperationHandler,
  deviceManagementRoleDefinitionHandler,
  deviceManagementSoftwareUpdateStatusSummaryHandler,
  deviceManagementTelecomExpenseManagementPartnerHandler,
  deviceManagementTermsAndConditionsHandler,
  deviceManagementWindowsAutopilotDeviceIdentityHandler,
  deviceManagementWindowsInformationProtectionAppLearningSummaryHandler,
  deviceManagementWindowsInformationProtectionNetworkLearningSummaryHandler,
  devicesActionsHandler,
  devicesDeviceHandler,
  devicesDirectoryObjectHandler,
  devicesExtensionHandler,
  devicesFunctionsHandler,
  devicesHandler,
  directoryActionsHandler,
  directoryAdministrativeUnitHandler,
  directoryDirectoryHandler,
  directoryDirectoryObjectHandler,
  directoryFunctionsHandler,
  directoryHandler,
  directoryIdentityProviderBaseHandler,
  directoryObjectApplicationHandler,
  directoryObjectAppRoleAssignmentHandler,
  directoryObjectDeviceHandler,
  directoryObjectEndpointHandler,
  directoryObjectGroupHandler,
  directoryObjectOrgContactHandler,
  directoryObjectsActionsHandler,
  directoryObjectsDirectoryObjectHandler,
  directoryObjectServicePrincipalHandler,
  directoryObjectsHandler,
  directoryObjectUserHandler,
  directoryRolesActionsHandler,
  directoryRolesDirectoryObjectHandler,
  directoryRolesDirectoryRoleHandler,
  directoryRolesFunctionsHandler,
  directoryRolesHandler,
  directoryRolesScopedRoleMembershipHandler,
  directoryRoleTemplatesActionsHandler,
  directoryRoleTemplatesDirectoryRoleTemplateHandler,
  directoryRoleTemplatesHandler,
  domainDnsRecordsDomainDnsRecordHandler,
  domainDnsRecordsHandler,
  domainsActionsHandler,
  domainsDirectoryObjectHandler,
  domainsDomainDnsRecordHandler,
  domainsDomainHandler,
  domainsHandler,
  domainsInternalDomainFederationHandler,
  drivesActionsHandler,
  drivesDriveHandler,
  drivesDriveItemHandler,
  drivesFunctionsHandler,
  drivesHandler,
  drivesListHandler,
  educationActionsHandler,
  educationEducationClassHandler,
  educationEducationRootHandler,
  educationEducationSchoolHandler,
  educationEducationUserHandler,
  educationFunctionsHandler,
  educationHandler,
  externalExternalConnectionHandler,
  externalExternalHandler,
  externalHandler,
  groupLifecyclePoliciesActionsHandler,
  groupLifecyclePoliciesGroupLifecyclePolicyHandler,
  groupLifecyclePoliciesHandler,
  groupsActionsHandler,
  groupsAppRoleAssignmentHandler,
  groupsCalendarHandler,
  groupsConversationHandler,
  groupsConversationThreadHandler,
  groupsDirectoryObjectHandler,
  groupsDriveHandler,
  groupSettingsGroupSettingHandler,
  groupSettingsHandler,
  groupSettingTemplatesActionsHandler,
  groupSettingTemplatesGroupSettingTemplateHandler,
  groupSettingTemplatesHandler,
  groupsEventHandler,
  groupsExtensionHandler,
  groupsFunctionsHandler,
  groupsGroupHandler,
  groupsGroupLifecyclePolicyHandler,
  groupsGroupSettingHandler,
  groupsHandler,
  groupsOnenoteHandler,
  groupsPlannerGroupHandler,
  groupsProfilePhotoHandler,
  groupsResourceSpecificPermissionGrantHandler,
  groupsSiteHandler,
  groupsTeamHandler,
  identityActionsHandler,
  identityB2xIdentityUserFlowHandler,
  identityConditionalAccessRootHandler,
  identityFunctionsHandler,
  identityGovernanceAccessReviewSetHandler,
  identityGovernanceActionsHandler,
  identityGovernanceAppConsentApprovalRouteHandler,
  identityGovernanceEntitlementManagementHandler,
  identityGovernanceFunctionsHandler,
  identityGovernanceHandler,
  identityGovernanceIdentityGovernanceHandler,
  identityGovernanceTermsOfUseContainerHandler,
  identityHandler,
  identityIdentityApiConnectorHandler,
  identityIdentityContainerHandler,
  identityIdentityProviderBaseHandler,
  identityIdentityUserFlowAttributeHandler,
  identityProtectionActionsHandler,
  identityProtectionHandler,
  identityProtectionIdentityProtectionRootHandler,
  identityProtectionRiskDetectionHandler,
  identityProtectionRiskyServicePrincipalHandler,
  identityProtectionRiskyUserHandler,
  identityProtectionServicePrincipalRiskDetectionHandler,
  identityProvidersFunctionsHandler,
  identityProvidersHandler,
  identityProvidersIdentityProviderHandler,
  informationProtectionBitlockerHandler,
  informationProtectionHandler,
  informationProtectionInformationProtectionHandler,
  informationProtectionThreatAssessmentRequestHandler,
  invitationsHandler,
  invitationsInvitationHandler,
  invitationsUserHandler,
  localizationsHandler,
  localizationsOrganizationalBrandingLocalizationHandler,
  meActionsHandler,
  meAgreementAcceptanceHandler,
  meAppRoleAssignmentHandler,
  meAuthenticationHandler,
  meCalendarGroupHandler,
  meCalendarHandler,
  meChatHandler,
  meContactFolderHandler,
  meContactHandler,
  meDeviceManagementTroubleshootingEventHandler,
  meDirectoryObjectHandler,
  meDriveHandler,
  meEventHandler,
  meExtensionHandler,
  meFunctionsHandler,
  meHandler,
  meInferenceClassificationHandler,
  meLicenseDetailsHandler,
  meMailFolderHandler,
  meManagedAppRegistrationHandler,
  meManagedDeviceHandler,
  meMessageHandler,
  meOAuth2PermissionGrantHandler,
  meOfficeGraphInsightsHandler,
  meOnenoteHandler,
  meOnlineMeetingHandler,
  meOutlookUserHandler,
  mePersonHandler,
  mePlannerUserHandler,
  mePresenceHandler,
  meProfilePhotoHandler,
  meScopedRoleMembershipHandler,
  meSiteHandler,
  meTeamHandler,
  meTodoHandler,
  meUserActivityHandler,
  meUserHandler,
  meUserSettingsHandler,
  meUserTeamworkHandler,
  mobileAppManagedMobileLobAppHandler,
  mobileAppMobileLobAppHandler,
  oauth2PermissionGrantsFunctionsHandler,
  oauth2PermissionGrantsHandler,
  oauth2PermissionGrantsOAuth2PermissionGrantHandler,
  organizationActionsHandler,
  organizationCertificateBasedAuthConfigurationHandler,
  organizationExtensionHandler,
  organizationHandler,
  organizationOrganizationalBrandingHandler,
  organizationOrganizationHandler,
  permissionGrantsActionsHandler,
  permissionGrantsResourceSpecificPermissionGrantHandler,
  placeRoomHandler,
  placesHandler,
  placesPlaceHandler,
  plannerHandler,
  plannerPlannerBucketHandler,
  plannerPlannerHandler,
  plannerPlannerPlanHandler,
  plannerPlannerTaskHandler,
  policiesActionsHandler,
  policiesActivityBasedTimeoutPolicyHandler,
  policiesAdminConsentRequestPolicyHandler,
  policiesAuthenticationFlowsPolicyHandler,
  policiesAuthenticationMethodsPolicyHandler,
  policiesAuthorizationPolicyHandler,
  policiesClaimsMappingPolicyHandler,
  policiesConditionalAccessPolicyHandler,
  policiesCrossTenantAccessPolicyHandler,
  policiesFeatureRolloutPolicyHandler,
  policiesHandler,
  policiesHomeRealmDiscoveryPolicyHandler,
  policiesIdentitySecurityDefaultsEnforcementPolicyHandler,
  policiesPermissionGrantPolicyHandler,
  policiesPolicyRootHandler,
  policiesTokenIssuancePolicyHandler,
  policiesTokenLifetimePolicyHandler,
  policiesUnifiedRoleManagementPolicyAssignmentHandler,
  policiesUnifiedRoleManagementPolicyHandler,
  printActionsHandler,
  printHandler,
  printPrintConnectorHandler,
  printPrinterHandler,
  printPrinterShareHandler,
  printPrintHandler,
  printPrintOperationHandler,
  printPrintServiceHandler,
  printPrintTaskDefinitionHandler,
  privacyFunctionsHandler,
  privacyHandler,
  privacyPrivacyHandler,
  privacySubjectRightsRequestHandler,
  reportsFunctionsHandler,
  reportsHandler,
  reportsPrintUsageByPrinterHandler,
  reportsPrintUsageByUserHandler,
  reportsReportRootHandler,
  reportsSecurityReportsRootHandler,
  roleManagementActionsHandler,
  roleManagementFunctionsHandler,
  roleManagementHandler,
  roleManagementRbacApplicationHandler,
  roleManagementRoleManagementHandler,
  schemaExtensionsHandler,
  schemaExtensionsSchemaExtensionHandler,
  scopedRoleMembershipsHandler,
  scopedRoleMembershipsScopedRoleMembershipHandler,
  searchActionsHandler,
  searchSearchEntityHandler,
  securityActionsHandler,
  securityAlertHandler,
  securityAttackSimulationRootHandler,
  securityCasesRootHandler,
  securityFunctionsHandler,
  securityHandler,
  securityIncidentHandler,
  securitySecureScoreControlProfileHandler,
  securitySecureScoreHandler,
  securitySecurityHandler,
  servicePrincipalsActionsHandler,
  servicePrincipalsAppRoleAssignmentHandler,
  servicePrincipalsClaimsMappingPolicyHandler,
  servicePrincipalsDelegatedPermissionClassificationHandler,
  servicePrincipalsDirectoryObjectHandler,
  servicePrincipalsEndpointHandler,
  servicePrincipalsFederatedIdentityCredentialHandler,
  servicePrincipalsFunctionsHandler,
  servicePrincipalsHandler,
  servicePrincipalsHomeRealmDiscoveryPolicyHandler,
  servicePrincipalsOAuth2PermissionGrantHandler,
  servicePrincipalsServicePrincipalHandler,
  servicePrincipalsTokenIssuancePolicyHandler,
  servicePrincipalsTokenLifetimePolicyHandler,
  sharesActionsHandler,
  sharesDriveItemHandler,
  sharesFunctionsHandler,
  sharesHandler,
  sharesListHandler,
  sharesListItemHandler,
  sharesPermissionHandler,
  sharesSharedDriveItemHandler,
  sharesSiteHandler,
  sitesActionsHandler,
  sitesBaseItemHandler,
  sitesColumnDefinitionHandler,
  sitesContentTypeHandler,
  sitesDriveHandler,
  sitesFunctionsHandler,
  sitesHandler,
  sitesItemAnalyticsHandler,
  sitesListHandler,
  sitesOnenoteHandler,
  sitesPermissionHandler,
  sitesRichLongRunningOperationHandler,
  sitesSiteHandler,
  sitesStoreHandler,
  solutionsActionsHandler,
  solutionsBookingBusinessHandler,
  solutionsBookingCurrencyHandler,
  solutionsHandler,
  solutionsSolutionsRootHandler,
  subscribedSkusSubscribedSkuHandler,
  subscriptionsActionsHandler,
  subscriptionsSubscriptionHandler,
  teamsActionsHandler,
  teamsChannelHandler,
  teamsConversationMemberHandler,
  teamsFunctionsHandler,
  teamsGroupHandler,
  teamsHandler,
  teamsProfilePhotoHandler,
  teamsScheduleHandler,
  teamsTeamHandler,
  teamsTeamsAppInstallationHandler,
  teamsTeamsAsyncOperationHandler,
  teamsTeamsTemplateHandler,
  teamsTeamworkTagHandler,
  teamsTemplatesHandler,
  teamsTemplatesTeamsTemplateHandler,
  teamworkActionsHandler,
  teamworkHandler,
  teamworkTeamworkHandler,
  teamworkWorkforceIntegrationHandler,
  tenantRelationshipsDelegatedAdminCustomerHandler,
  tenantRelationshipsDelegatedAdminRelationshipHandler,
  tenantRelationshipsHandler,
  tenantRelationshipsTenantRelationshipHandler,
  usersActionsHandler,
  usersAgreementAcceptanceHandler,
  usersAppRoleAssignmentHandler,
  usersAuthenticationHandler,
  usersCalendarGroupHandler,
  usersCalendarHandler,
  usersChatHandler,
  usersContactFolderHandler,
  usersContactHandler,
  usersDeviceManagementTroubleshootingEventHandler,
  usersDirectoryObjectHandler,
  usersDriveHandler,
  usersEventHandler,
  usersExtensionHandler,
  usersFunctionsHandler,
  usersHandler,
  usersInferenceClassificationHandler,
  usersLicenseDetailsHandler,
  usersMailFolderHandler,
  usersManagedAppRegistrationHandler,
  usersManagedDeviceHandler,
  usersMessageHandler,
  usersOAuth2PermissionGrantHandler,
  usersOfficeGraphInsightsHandler,
  usersOnenoteHandler,
  usersOnlineMeetingHandler,
  usersOutlookUserHandler,
  usersPersonHandler,
  usersPlannerUserHandler,
  usersPresenceHandler,
  usersProfilePhotoHandler,
  usersScopedRoleMembershipHandler,
  usersSiteHandler,
  usersTeamHandler,
  usersTodoHandler,
  usersUserActivityHandler,
  usersUserHandler,
  usersUserSettingsHandler,
  usersUserTeamworkHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', adminAdminHandler)
  .route('/', adminServiceAnnouncementHandler)
  .route('/', adminHandler)
  .route('/', adminFunctionsHandler)
  .route('/', adminActionsHandler)
  .route('/', agreementAcceptancesAgreementAcceptanceHandler)
  .route('/', agreementsAgreementHandler)
  .route('/', agreementsAgreementAcceptanceHandler)
  .route('/', agreementsHandler)
  .route('/', agreementsAgreementFileHandler)
  .route('/', agreementsAgreementFileLocalizationHandler)
  .route('/', appCatalogsAppCatalogsHandler)
  .route('/', appCatalogsTeamsAppHandler)
  .route('/', appCatalogsHandler)
  .route('/', applicationTemplatesApplicationTemplateHandler)
  .route('/', applicationTemplatesHandler)
  .route('/', applicationTemplatesActionsHandler)
  .route('/', applicationsApplicationHandler)
  .route('/', applicationsHandler)
  .route('/', applicationsFunctionsHandler)
  .route('/', applicationsActionsHandler)
  .route('/', applicationsDirectoryObjectHandler)
  .route('/', applicationsExtensionPropertyHandler)
  .route('/', applicationsFederatedIdentityCredentialHandler)
  .route('/', applicationsHomeRealmDiscoveryPolicyHandler)
  .route('/', directoryObjectAppRoleAssignmentHandler)
  .route('/', directoryObjectEndpointHandler)
  .route('/', directoryObjectServicePrincipalHandler)
  .route('/', directoryObjectUserHandler)
  .route('/', applicationsTokenIssuancePolicyHandler)
  .route('/', applicationsTokenLifetimePolicyHandler)
  .route('/', auditLogsAuditLogRootHandler)
  .route('/', auditLogsDirectoryAuditHandler)
  .route('/', auditLogsHandler)
  .route('/', auditLogsProvisioningObjectSummaryHandler)
  .route('/', auditLogsSignInHandler)
  .route('/', authenticationMethodConfigurationsAuthenticationMethodConfigurationHandler)
  .route('/', authenticationMethodConfigurationsHandler)
  .route('/', authenticationMethodsPolicyAuthenticationMethodsPolicyHandler)
  .route('/', authenticationMethodsPolicyAuthenticationMethodConfigurationHandler)
  .route('/', authenticationMethodsPolicyHandler)
  .route('/', brandingOrganizationalBrandingHandler)
  .route('/', brandingOrganizationalBrandingLocalizationHandler)
  .route('/', brandingHandler)
  .route('/', certificateBasedAuthConfigurationCertificateBasedAuthConfigurationHandler)
  .route('/', certificateBasedAuthConfigurationHandler)
  .route('/', chatsChatHandler)
  .route('/', chatsHandler)
  .route('/', chatsFunctionsHandler)
  .route('/', chatsTeamsAppInstallationHandler)
  .route('/', chatsActionsHandler)
  .route('/', chatsChatMessageInfoHandler)
  .route('/', chatsConversationMemberHandler)
  .route('/', chatsChatMessageHandler)
  .route('/', chatsPinnedChatMessageInfoHandler)
  .route('/', chatsTeamsTabHandler)
  .route('/', communicationsCloudCommunicationsHandler)
  .route('/', communicationsCallRecordHandler)
  .route('/', communicationsHandler)
  .route('/', communicationsFunctionsHandler)
  .route('/', communicationsCallHandler)
  .route('/', communicationsActionsHandler)
  .route('/', communicationsOnlineMeetingHandler)
  .route('/', communicationsPresenceHandler)
  .route('/', complianceComplianceHandler)
  .route('/', connectionsExternalConnectionHandler)
  .route('/', connectionsHandler)
  .route('/', connectionsExternalGroupHandler)
  .route('/', connectionsExternalItemHandler)
  .route('/', connectionsConnectionOperationHandler)
  .route('/', connectionsSchemaHandler)
  .route('/', contactsOrgContactHandler)
  .route('/', contactsHandler)
  .route('/', contactsFunctionsHandler)
  .route('/', contactsActionsHandler)
  .route('/', contactsDirectoryObjectHandler)
  .route('/', directoryObjectOrgContactHandler)
  .route('/', directoryObjectApplicationHandler)
  .route('/', directoryObjectDeviceHandler)
  .route('/', directoryObjectGroupHandler)
  .route('/', contractsContractHandler)
  .route('/', contractsHandler)
  .route('/', contractsActionsHandler)
  .route('/', dataPolicyOperationsDataPolicyOperationHandler)
  .route('/', dataPolicyOperationsHandler)
  .route('/', deviceAppManagementDeviceAppManagementHandler)
  .route('/', deviceAppManagementAndroidManagedAppProtectionHandler)
  .route('/', deviceAppManagementHandler)
  .route('/', deviceAppManagementDefaultManagedAppProtectionHandler)
  .route('/', deviceAppManagementIosManagedAppProtectionHandler)
  .route('/', deviceAppManagementManagedAppPolicyHandler)
  .route('/', deviceAppManagementActionsHandler)
  .route('/', deviceAppManagementManagedAppRegistrationHandler)
  .route('/', deviceAppManagementFunctionsHandler)
  .route('/', deviceAppManagementManagedAppStatusHandler)
  .route('/', deviceAppManagementManagedEBookHandler)
  .route('/', deviceAppManagementMdmWindowsInformationProtectionPolicyHandler)
  .route('/', deviceAppManagementMobileAppCategoryHandler)
  .route('/', deviceAppManagementManagedDeviceMobileAppConfigurationHandler)
  .route('/', deviceAppManagementMobileAppHandler)
  .route('/', mobileAppManagedMobileLobAppHandler)
  .route('/', mobileAppMobileLobAppHandler)
  .route('/', deviceAppManagementTargetedManagedAppConfigurationHandler)
  .route('/', deviceAppManagementVppTokenHandler)
  .route('/', deviceAppManagementWindowsInformationProtectionPolicyHandler)
  .route('/', deviceManagementDeviceManagementHandler)
  .route('/', deviceManagementApplePushNotificationCertificateHandler)
  .route('/', deviceManagementFunctionsHandler)
  .route('/', deviceManagementAuditEventHandler)
  .route('/', deviceManagementHandler)
  .route('/', deviceManagementComplianceManagementPartnerHandler)
  .route('/', deviceManagementOnPremisesConditionalAccessSettingsHandler)
  .route('/', deviceManagementDetectedAppHandler)
  .route('/', deviceManagementDeviceCategoryHandler)
  .route('/', deviceManagementDeviceCompliancePolicyHandler)
  .route('/', deviceManagementActionsHandler)
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
  .route('/', deviceManagementMobileThreatDefenseConnectorHandler)
  .route('/', deviceManagementNotificationMessageTemplateHandler)
  .route('/', deviceManagementRemoteAssistancePartnerHandler)
  .route('/', deviceManagementDeviceManagementReportsHandler)
  .route('/', deviceManagementResourceOperationHandler)
  .route('/', deviceManagementDeviceAndAppManagementRoleAssignmentHandler)
  .route('/', deviceManagementRoleDefinitionHandler)
  .route('/', deviceManagementSoftwareUpdateStatusSummaryHandler)
  .route('/', deviceManagementTelecomExpenseManagementPartnerHandler)
  .route('/', deviceManagementTermsAndConditionsHandler)
  .route('/', deviceManagementDeviceManagementTroubleshootingEventHandler)
  .route('/', deviceManagementWindowsAutopilotDeviceIdentityHandler)
  .route('/', deviceManagementWindowsInformationProtectionAppLearningSummaryHandler)
  .route('/', deviceManagementWindowsInformationProtectionNetworkLearningSummaryHandler)
  .route('/', devicesDeviceHandler)
  .route('/', devicesHandler)
  .route('/', devicesFunctionsHandler)
  .route('/', devicesActionsHandler)
  .route('/', devicesExtensionHandler)
  .route('/', devicesDirectoryObjectHandler)
  .route('/', directoryDirectoryHandler)
  .route('/', directoryAdministrativeUnitHandler)
  .route('/', directoryHandler)
  .route('/', directoryFunctionsHandler)
  .route('/', directoryDirectoryObjectHandler)
  .route('/', directoryActionsHandler)
  .route('/', directoryIdentityProviderBaseHandler)
  .route('/', directoryObjectsDirectoryObjectHandler)
  .route('/', directoryObjectsHandler)
  .route('/', directoryObjectsActionsHandler)
  .route('/', directoryRoleTemplatesDirectoryRoleTemplateHandler)
  .route('/', directoryRoleTemplatesHandler)
  .route('/', directoryRoleTemplatesActionsHandler)
  .route('/', directoryRolesDirectoryRoleHandler)
  .route('/', directoryRolesHandler)
  .route('/', directoryRolesFunctionsHandler)
  .route('/', directoryRolesActionsHandler)
  .route('/', directoryRolesDirectoryObjectHandler)
  .route('/', directoryRolesScopedRoleMembershipHandler)
  .route('/', domainDnsRecordsDomainDnsRecordHandler)
  .route('/', domainDnsRecordsHandler)
  .route('/', domainsDomainHandler)
  .route('/', domainsHandler)
  .route('/', domainsDirectoryObjectHandler)
  .route('/', domainsInternalDomainFederationHandler)
  .route('/', domainsActionsHandler)
  .route('/', domainsDomainDnsRecordHandler)
  .route('/', drivesDriveHandler)
  .route('/', drivesHandler)
  .route('/', drivesDriveItemHandler)
  .route('/', drivesActionsHandler)
  .route('/', drivesFunctionsHandler)
  .route('/', drivesListHandler)
  .route('/', educationEducationRootHandler)
  .route('/', educationEducationClassHandler)
  .route('/', educationHandler)
  .route('/', educationFunctionsHandler)
  .route('/', educationActionsHandler)
  .route('/', educationEducationUserHandler)
  .route('/', educationEducationSchoolHandler)
  .route('/', externalExternalHandler)
  .route('/', externalExternalConnectionHandler)
  .route('/', externalHandler)
  .route('/', groupLifecyclePoliciesGroupLifecyclePolicyHandler)
  .route('/', groupLifecyclePoliciesHandler)
  .route('/', groupLifecyclePoliciesActionsHandler)
  .route('/', groupSettingTemplatesGroupSettingTemplateHandler)
  .route('/', groupSettingTemplatesHandler)
  .route('/', groupSettingTemplatesActionsHandler)
  .route('/', groupSettingsGroupSettingHandler)
  .route('/', groupSettingsHandler)
  .route('/', groupsGroupHandler)
  .route('/', groupsHandler)
  .route('/', groupsFunctionsHandler)
  .route('/', groupsActionsHandler)
  .route('/', groupsDirectoryObjectHandler)
  .route('/', groupsAppRoleAssignmentHandler)
  .route('/', groupsCalendarHandler)
  .route('/', groupsEventHandler)
  .route('/', groupsConversationHandler)
  .route('/', groupsDriveHandler)
  .route('/', groupsExtensionHandler)
  .route('/', groupsGroupLifecyclePolicyHandler)
  .route('/', groupsOnenoteHandler)
  .route('/', groupsResourceSpecificPermissionGrantHandler)
  .route('/', groupsProfilePhotoHandler)
  .route('/', groupsPlannerGroupHandler)
  .route('/', groupsGroupSettingHandler)
  .route('/', groupsSiteHandler)
  .route('/', groupsTeamHandler)
  .route('/', groupsConversationThreadHandler)
  .route('/', identityIdentityContainerHandler)
  .route('/', identityIdentityApiConnectorHandler)
  .route('/', identityHandler)
  .route('/', identityActionsHandler)
  .route('/', identityB2xIdentityUserFlowHandler)
  .route('/', identityFunctionsHandler)
  .route('/', identityConditionalAccessRootHandler)
  .route('/', identityIdentityProviderBaseHandler)
  .route('/', identityIdentityUserFlowAttributeHandler)
  .route('/', identityGovernanceIdentityGovernanceHandler)
  .route('/', identityGovernanceAccessReviewSetHandler)
  .route('/', identityGovernanceHandler)
  .route('/', identityGovernanceFunctionsHandler)
  .route('/', identityGovernanceActionsHandler)
  .route('/', identityGovernanceAppConsentApprovalRouteHandler)
  .route('/', identityGovernanceEntitlementManagementHandler)
  .route('/', identityGovernanceTermsOfUseContainerHandler)
  .route('/', identityProtectionIdentityProtectionRootHandler)
  .route('/', identityProtectionRiskDetectionHandler)
  .route('/', identityProtectionHandler)
  .route('/', identityProtectionRiskyServicePrincipalHandler)
  .route('/', identityProtectionActionsHandler)
  .route('/', identityProtectionRiskyUserHandler)
  .route('/', identityProtectionServicePrincipalRiskDetectionHandler)
  .route('/', identityProvidersIdentityProviderHandler)
  .route('/', identityProvidersHandler)
  .route('/', identityProvidersFunctionsHandler)
  .route('/', informationProtectionInformationProtectionHandler)
  .route('/', informationProtectionBitlockerHandler)
  .route('/', informationProtectionHandler)
  .route('/', informationProtectionThreatAssessmentRequestHandler)
  .route('/', invitationsInvitationHandler)
  .route('/', invitationsHandler)
  .route('/', invitationsUserHandler)
  .route('/', localizationsOrganizationalBrandingLocalizationHandler)
  .route('/', localizationsHandler)
  .route('/', meUserHandler)
  .route('/', meUserActivityHandler)
  .route('/', meHandler)
  .route('/', meFunctionsHandler)
  .route('/', meAgreementAcceptanceHandler)
  .route('/', meAppRoleAssignmentHandler)
  .route('/', meAuthenticationHandler)
  .route('/', meActionsHandler)
  .route('/', meCalendarHandler)
  .route('/', meCalendarGroupHandler)
  .route('/', meEventHandler)
  .route('/', meChatHandler)
  .route('/', meContactFolderHandler)
  .route('/', meContactHandler)
  .route('/', meDirectoryObjectHandler)
  .route('/', meDeviceManagementTroubleshootingEventHandler)
  .route('/', meDriveHandler)
  .route('/', meExtensionHandler)
  .route('/', meSiteHandler)
  .route('/', meInferenceClassificationHandler)
  .route('/', meOfficeGraphInsightsHandler)
  .route('/', meTeamHandler)
  .route('/', meLicenseDetailsHandler)
  .route('/', meMailFolderHandler)
  .route('/', meManagedAppRegistrationHandler)
  .route('/', meManagedDeviceHandler)
  .route('/', meMessageHandler)
  .route('/', meOAuth2PermissionGrantHandler)
  .route('/', meOnenoteHandler)
  .route('/', meOnlineMeetingHandler)
  .route('/', meOutlookUserHandler)
  .route('/', mePersonHandler)
  .route('/', meProfilePhotoHandler)
  .route('/', mePlannerUserHandler)
  .route('/', mePresenceHandler)
  .route('/', meScopedRoleMembershipHandler)
  .route('/', meUserSettingsHandler)
  .route('/', meUserTeamworkHandler)
  .route('/', meTodoHandler)
  .route('/', oauth2PermissionGrantsOAuth2PermissionGrantHandler)
  .route('/', oauth2PermissionGrantsHandler)
  .route('/', oauth2PermissionGrantsFunctionsHandler)
  .route('/', organizationOrganizationHandler)
  .route('/', organizationHandler)
  .route('/', organizationActionsHandler)
  .route('/', organizationOrganizationalBrandingHandler)
  .route('/', organizationCertificateBasedAuthConfigurationHandler)
  .route('/', organizationExtensionHandler)
  .route('/', permissionGrantsResourceSpecificPermissionGrantHandler)
  .route('/', permissionGrantsActionsHandler)
  .route('/', placesPlaceHandler)
  .route('/', placesHandler)
  .route('/', placeRoomHandler)
  .route('/', plannerPlannerHandler)
  .route('/', plannerPlannerBucketHandler)
  .route('/', plannerHandler)
  .route('/', plannerPlannerPlanHandler)
  .route('/', plannerPlannerTaskHandler)
  .route('/', policiesPolicyRootHandler)
  .route('/', policiesActivityBasedTimeoutPolicyHandler)
  .route('/', policiesHandler)
  .route('/', policiesAdminConsentRequestPolicyHandler)
  .route('/', policiesAuthenticationFlowsPolicyHandler)
  .route('/', policiesAuthenticationMethodsPolicyHandler)
  .route('/', policiesAuthorizationPolicyHandler)
  .route('/', policiesClaimsMappingPolicyHandler)
  .route('/', policiesConditionalAccessPolicyHandler)
  .route('/', policiesCrossTenantAccessPolicyHandler)
  .route('/', policiesActionsHandler)
  .route('/', policiesFeatureRolloutPolicyHandler)
  .route('/', policiesHomeRealmDiscoveryPolicyHandler)
  .route('/', policiesIdentitySecurityDefaultsEnforcementPolicyHandler)
  .route('/', policiesPermissionGrantPolicyHandler)
  .route('/', policiesUnifiedRoleManagementPolicyHandler)
  .route('/', policiesUnifiedRoleManagementPolicyAssignmentHandler)
  .route('/', policiesTokenIssuancePolicyHandler)
  .route('/', policiesTokenLifetimePolicyHandler)
  .route('/', printPrintHandler)
  .route('/', printPrintConnectorHandler)
  .route('/', printHandler)
  .route('/', printPrintOperationHandler)
  .route('/', printPrinterHandler)
  .route('/', printActionsHandler)
  .route('/', printPrintServiceHandler)
  .route('/', printPrinterShareHandler)
  .route('/', printPrintTaskDefinitionHandler)
  .route('/', privacyPrivacyHandler)
  .route('/', privacySubjectRightsRequestHandler)
  .route('/', privacyHandler)
  .route('/', privacyFunctionsHandler)
  .route('/', reportsReportRootHandler)
  .route('/', reportsPrintUsageByPrinterHandler)
  .route('/', reportsHandler)
  .route('/', reportsPrintUsageByUserHandler)
  .route('/', reportsFunctionsHandler)
  .route('/', reportsSecurityReportsRootHandler)
  .route('/', roleManagementRoleManagementHandler)
  .route('/', roleManagementRbacApplicationHandler)
  .route('/', roleManagementHandler)
  .route('/', roleManagementFunctionsHandler)
  .route('/', roleManagementActionsHandler)
  .route('/', schemaExtensionsSchemaExtensionHandler)
  .route('/', schemaExtensionsHandler)
  .route('/', scopedRoleMembershipsScopedRoleMembershipHandler)
  .route('/', scopedRoleMembershipsHandler)
  .route('/', searchSearchEntityHandler)
  .route('/', searchActionsHandler)
  .route('/', securitySecurityHandler)
  .route('/', securityAlertHandler)
  .route('/', securityHandler)
  .route('/', securityAttackSimulationRootHandler)
  .route('/', securityCasesRootHandler)
  .route('/', securityActionsHandler)
  .route('/', securityFunctionsHandler)
  .route('/', securityIncidentHandler)
  .route('/', securitySecureScoreControlProfileHandler)
  .route('/', securitySecureScoreHandler)
  .route('/', servicePrincipalsServicePrincipalHandler)
  .route('/', servicePrincipalsHandler)
  .route('/', servicePrincipalsFunctionsHandler)
  .route('/', servicePrincipalsActionsHandler)
  .route('/', servicePrincipalsAppRoleAssignmentHandler)
  .route('/', servicePrincipalsClaimsMappingPolicyHandler)
  .route('/', servicePrincipalsDirectoryObjectHandler)
  .route('/', servicePrincipalsDelegatedPermissionClassificationHandler)
  .route('/', servicePrincipalsEndpointHandler)
  .route('/', servicePrincipalsFederatedIdentityCredentialHandler)
  .route('/', servicePrincipalsHomeRealmDiscoveryPolicyHandler)
  .route('/', servicePrincipalsOAuth2PermissionGrantHandler)
  .route('/', servicePrincipalsTokenIssuancePolicyHandler)
  .route('/', servicePrincipalsTokenLifetimePolicyHandler)
  .route('/', sharesSharedDriveItemHandler)
  .route('/', sharesHandler)
  .route('/', sharesDriveItemHandler)
  .route('/', sharesListHandler)
  .route('/', sharesActionsHandler)
  .route('/', sharesFunctionsHandler)
  .route('/', sharesListItemHandler)
  .route('/', sharesPermissionHandler)
  .route('/', sharesSiteHandler)
  .route('/', sitesSiteHandler)
  .route('/', sitesHandler)
  .route('/', sitesActionsHandler)
  .route('/', sitesItemAnalyticsHandler)
  .route('/', sitesColumnDefinitionHandler)
  .route('/', sitesContentTypeHandler)
  .route('/', sitesFunctionsHandler)
  .route('/', sitesDriveHandler)
  .route('/', sitesBaseItemHandler)
  .route('/', sitesListHandler)
  .route('/', sitesOnenoteHandler)
  .route('/', sitesRichLongRunningOperationHandler)
  .route('/', sitesPermissionHandler)
  .route('/', sitesStoreHandler)
  .route('/', solutionsSolutionsRootHandler)
  .route('/', solutionsBookingBusinessHandler)
  .route('/', solutionsHandler)
  .route('/', solutionsActionsHandler)
  .route('/', solutionsBookingCurrencyHandler)
  .route('/', subscribedSkusSubscribedSkuHandler)
  .route('/', subscriptionsSubscriptionHandler)
  .route('/', subscriptionsActionsHandler)
  .route('/', teamsTeamHandler)
  .route('/', teamsHandler)
  .route('/', teamsFunctionsHandler)
  .route('/', teamsChannelHandler)
  .route('/', teamsActionsHandler)
  .route('/', teamsGroupHandler)
  .route('/', teamsTeamsAppInstallationHandler)
  .route('/', teamsConversationMemberHandler)
  .route('/', teamsTeamsAsyncOperationHandler)
  .route('/', teamsProfilePhotoHandler)
  .route('/', teamsScheduleHandler)
  .route('/', teamsTeamworkTagHandler)
  .route('/', teamsTeamsTemplateHandler)
  .route('/', teamsTemplatesTeamsTemplateHandler)
  .route('/', teamsTemplatesHandler)
  .route('/', teamworkTeamworkHandler)
  .route('/', teamworkActionsHandler)
  .route('/', teamworkWorkforceIntegrationHandler)
  .route('/', teamworkHandler)
  .route('/', tenantRelationshipsTenantRelationshipHandler)
  .route('/', tenantRelationshipsDelegatedAdminCustomerHandler)
  .route('/', tenantRelationshipsHandler)
  .route('/', tenantRelationshipsDelegatedAdminRelationshipHandler)
  .route('/', usersUserHandler)
  .route('/', usersHandler)
  .route('/', usersFunctionsHandler)
  .route('/', usersActionsHandler)
  .route('/', usersUserActivityHandler)
  .route('/', usersAgreementAcceptanceHandler)
  .route('/', usersAppRoleAssignmentHandler)
  .route('/', usersAuthenticationHandler)
  .route('/', usersCalendarHandler)
  .route('/', usersCalendarGroupHandler)
  .route('/', usersEventHandler)
  .route('/', usersChatHandler)
  .route('/', usersContactFolderHandler)
  .route('/', usersContactHandler)
  .route('/', usersDirectoryObjectHandler)
  .route('/', usersDeviceManagementTroubleshootingEventHandler)
  .route('/', usersDriveHandler)
  .route('/', usersExtensionHandler)
  .route('/', usersSiteHandler)
  .route('/', usersInferenceClassificationHandler)
  .route('/', usersOfficeGraphInsightsHandler)
  .route('/', usersTeamHandler)
  .route('/', usersLicenseDetailsHandler)
  .route('/', usersMailFolderHandler)
  .route('/', usersManagedAppRegistrationHandler)
  .route('/', usersManagedDeviceHandler)
  .route('/', usersMessageHandler)
  .route('/', usersOAuth2PermissionGrantHandler)
  .route('/', usersOnenoteHandler)
  .route('/', usersOnlineMeetingHandler)
  .route('/', usersOutlookUserHandler)
  .route('/', usersPersonHandler)
  .route('/', usersProfilePhotoHandler)
  .route('/', usersPlannerUserHandler)
  .route('/', usersPresenceHandler)
  .route('/', usersScopedRoleMembershipHandler)
  .route('/', usersUserSettingsHandler)
  .route('/', usersUserTeamworkHandler)
  .route('/', usersTodoHandler)

export default app
