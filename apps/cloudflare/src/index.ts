import { OpenAPIHono } from '@hono/zod-openapi'
import {
  abuseReportsOtherHandler,
  accessApplicationScopedPoliciesHandler,
  accessApplicationsHandler,
  accessAuthenticationLogsHandler,
  accessAuthenticatorDeviceAAGUIDsHandler,
  accessBookmarkApplicationsDeprecatedHandler,
  accessCustomPagesHandler,
  accessGroupsHandler,
  accessIdentityProvidersHandler,
  accessIdPFederationGrantsHandler,
  accessJITRequestLogsHandler,
  accessKeyConfigurationHandler,
  accessMTLSAuthenticationHandler,
  accessPolicyTesterHandler,
  accessReusablePoliciesHandler,
  accessSAMLEncryptionCertificatesHandler,
  accessSCIMUpdateLogsHandler,
  accessServiceTokensHandler,
  accessShortLivedCertificateCAsHandler,
  accessTagsHandler,
  accessUserPopulationsHandler,
  accessUserPopulationUsersHandler,
  accountBillingHandler,
  accountBillingHistoryHandler,
  accountBillingProfileHandler,
  accountEntitlementsHandler,
  accountHandler,
  accountLevelCustomNameserversHandler,
  accountLevelCustomNameserversUsageForAZoneHandler,
  accountLoadBalancerMonitorGroupsHandler,
  accountLoadBalancerMonitorsHandler,
  accountLoadBalancerPoolsHandler,
  accountLoadBalancerSearchHandler,
  accountLoadBalancersHandler,
  accountMembersHandler,
  accountOwnedAPITokensHandler,
  accountPaymentMethodsHandler,
  accountPermissionGroupsHandler,
  accountRequestTracerHandler,
  accountResourceGroupsHandler,
  accountRolesHandler,
  accountRulesetsHandler,
  accountSettingsHandler,
  accountsHandler,
  accountSubscriptionsHandler,
  accountUserGroupMembersHandler,
  accountUserGroupsHandler,
  activeSessionHandler,
  advancedDdosProtectionOtherHandler,
  agentsHandler,
  aiAuditHandler,
  aiGatewayCustomDomainsHandler,
  aiGatewayCustomProviderCostsHandler,
  aiGatewayCustomProvidersHandler,
  aiGatewayDatasetsHandler,
  aiGatewayDynamicRoutesHandler,
  aiGatewayEvaluationsHandler,
  aiGatewayGatewaysHandler,
  aiGatewayHandler,
  aiGatewayLogsHandler,
  aiGatewayModelAliasesHandler,
  aiGatewayProviderConfigsHandler,
  aiSearchAccountSearchHandler,
  aiSearchInstancesHandler,
  aiSearchInstancesItemsHandler,
  aiSearchInstancesJobsHandler,
  aiSearchNamespacesHandler,
  aiSearchTokensHandler,
  aiSecurityForAppsHandler,
  analyticsEngineHandler,
  analyticsHandler,
  analyticsSQLHandler,
  analyzeCertificateHandler,
  apiHandler,
  apiShieldAPIDiscoveryHandler,
  apiShieldClientCertificatesForAZoneHandler,
  apiShieldEndpointManagementHandler,
  apiShieldLabelsHandler,
  apiShieldSchemaValidation20Handler,
  apiShieldSettingsHandler,
  apiShieldWAFExpressionTemplatesHandler,
  applicationsHandler,
  approvalsHandler,
  appsHandler,
  argoAnalyticsForGeolocationHandler,
  argoAnalyticsForZoneHandler,
  argoSmartRoutingHandler,
  artAnalyticsHandler,
  artifactsHandler,
  asnIntelligenceHandler,
  assetSchemasHandler,
  attackerHandler,
  auditLogsHandler,
  automaticSSLTLSHandler,
  autoRAGJobsHandler,
  autoRAGRAGHandler,
  autoRAGRAGSearchHandler,
  availablePageRulesSettingsHandler,
  basinCatalogManagementHandler,
  billableUsageHandler,
  billableUsageV2Handler,
  binDBHandler,
  botnetThreatFeedHandler,
  botSettingsHandler,
  brandProtectionHandler,
  brapiHandler,
  browserExtensionConfigHandler,
  browserExtensionInventoriesHandler,
  buildsHandler,
  buildTokensHandler,
  cacheReserveClearHandler,
  categoryHandler,
  certificatePacksHandler,
  changelogHandler,
  clientSideSecurityHandler,
  clientVersionsHandler,
  cloudflareImagesHandler,
  cloudflareImagesKeysHandler,
  cloudflareImagesSourcingKitHandler,
  cloudflareImagesVariantsHandler,
  cloudflareIPsHandler,
  cloudflareK2OtherHandler,
  cloudflarePipelinesOtherHandler,
  cloudflareTunnelConfigurationHandler,
  cloudflareTunnelHandler,
  cloudflareTunnelHostnameHandler,
  cnIsHandler,
  collections__ItemsHandler,
  collectionsHandler,
  communicationPreferencesHandler,
  connectivityServicesHandler,
  containerImagesHandler,
  containerInstancesHandler,
  contentHandler,
  contentScanningHandler,
  countryHandler,
  credentialManagementHandler,
  credentialSetsHandler,
  credentialsHandler,
  csamScannerSettingsHandler,
  ctAlertingHandler,
  customAssetsForAnAccountHandler,
  customAssetsForAZoneHandler,
  customCSRsForAnAccountHandler,
  customCSRsForAZoneHandler,
  customHostnameFallbackOriginForAZoneHandler,
  customHostnameForAZoneHandler,
  customIndicatorFeedsHandler,
  customNameserverSetsForAnAccountHandler,
  customOriginTrustStoreHandler,
  customPagesForAnAccountHandler,
  customPagesForAZoneHandler,
  customSSLForAZoneHandler,
  cwsBasicAuthCredentialsHandler,
  cwsCategoriesHandler,
  cwsDeploymentsHandler,
  cwsDomainACLsHandler,
  cwsFilterSchemaHandler,
  cwsPoliciesHandler,
  cwsPolicySetsHandler,
  cwsRegoMetadataHandler,
  cwsRegoModulesHandler,
  cwsTenantStructuresHandler,
  cwsWorkloadsHandler,
  d1Handler,
  dashboard__UsersHandler,
  dashboardAssetsHandler,
  dataSecurityHandler,
  datasetHandler,
  datasetsHandler,
  dcvDelegationHandler,
  definitionsHandler,
  deployHooksHandler,
  deploymentGroupsHandler,
  destinationsHandler,
  deviceManagedNetworksHandler,
  devicePostureIntegrationsHandler,
  devicePostureRulesHandler,
  devicesHandler,
  devicesResilienceHandler,
  dexNotificationsHandler,
  dexRemoteCommandsHandler,
  dexRulesHandler,
  dexSyntheticApplicationMonitoringHandler,
  diagnosticsHandler,
  dlpCustomPromptTopicsHandler,
  dlpDataClassesHandler,
  dlpDatasetsHandler,
  dlpDataTagCategoriesHandler,
  dlpDataTagCategoryTemplatesHandler,
  dlpDataTagsHandler,
  dlpDocumentFingerprintsHandler,
  dlpEmailHandler,
  dlpEntriesHandler,
  dlpIntegrationEntriesHandler,
  dlpPredefinedEntriesHandler,
  dlpProfilesHandler,
  dlpSensitivityGroupsHandler,
  dlpSensitivityGroupTemplatesHandler,
  dlpSensitivityLevelsHandler,
  dlpSettingsHandler,
  dlpValidatorsHandler,
  dlsRegionalServicesHandler,
  dnsAnalyticsHandler,
  dnsFirewallAnalyticsHandler,
  dnsFirewallHandler,
  dnsInternalViewsForAnAccountHandler,
  dnsRecordsForAnAccountHandler,
  dnsRecordsForAZoneHandler,
  dnssecHandler,
  dnsSettingsForAnAccountHandler,
  dnsSettingsForAZoneHandler,
  domainDiscoveryHandler,
  domainHistoryHandler,
  domainIntelligenceHandler,
  domainSearchHandler,
  domainsHandler,
  durableObjectsNamespaceHandler,
  emailAuthHandler,
  emailRoutingDestinationAddressesHandler,
  emailRoutingRoutingRulesHandler,
  emailRoutingSettingsHandler,
  emailSecurityAnalyticsHandler,
  emailSecurityHandler,
  emailSecuritySettingsHandler,
  emailSendingHandler,
  emailSendingSubdomainsHandler,
  emailSendingSuppressionsHandler,
  endpointHealthChecksHandler,
  environmentVariablesHandler,
  evaluationHandler,
  eventHandler,
  eventsHandler,
  exportsHandler,
  extensionHandler,
  feedbackHandler,
  fieldExtractorsHandler,
  filtersHandler,
  findingsHandler,
  findingTypesHandler,
  finetuneAssetHandler,
  firewallRulesHandler,
  flagsHandler,
  fraudDetectionHandler,
  gatewayCAHandler,
  gitHubIntegrationHandler,
  googleTagGatewayHandler,
  groupsHandler,
  healthChecksHandler,
  hyperdriveHandler,
  imageRegistriesHandler,
  imagesHandler,
  indicatorHandler,
  indicatorsHandler,
  indicatorTypesHandler,
  infrastructureAccessTargetsHandler,
  instantLogsJobsForAZoneHandler,
  integrationsHandler,
  interconnectsHandler,
  ipAccessRulesForAnAccountHandler,
  ipAccessRulesForAUserHandler,
  ipAccessRulesForAZoneHandler,
  ipAddressManagementAddressMapsHandler,
  ipAddressManagementBGPPrefixesHandler,
  ipAddressManagementDynamicAdvertisementHandler,
  ipAddressManagementLeasesHandler,
  ipAddressManagementPrefixDelegationHandler,
  ipAddressManagementPrefixesHandler,
  ipAddressManagementServiceBindingsHandler,
  ipIntelligenceHandler,
  ipListHandler,
  ipProfilesHandler,
  issuesHandler,
  keylessSSLForAZoneHandler,
  keysHandler,
  leakedCredentialChecksHandler,
  listsHandler,
  liveStreamsHandler,
  liveTailHandler,
  loadBalancerHealthcheckEventsHandler,
  loadBalancerMonitorsHandler,
  loadBalancerPoolsHandler,
  loadBalancerRegionsHandler,
  loadBalancersHandler,
  logcontrolCMBConfigForAnAccountHandler,
  logExplorerDatasetsHandler,
  logExplorerQueriesHandler,
  logoMatchHandler,
  logpullHandler,
  logpushJobsForAnAccountHandler,
  logpushJobsForAZoneHandler,
  logpushTransformersHandler,
  logsReceivedHandler,
  magicAccountAppsHandler,
  magicBGPFilterProfilesHandler,
  magicBGPSettingsHandler,
  magicCF1SiteRampsHandler,
  magicCF1SitesHandler,
  magicConnectorsHandler,
  magicGRETunnelsHandler,
  magicInterconnectsHandler,
  magicIPsecTunnelsHandler,
  magicNetworkMonitoringConfigurationHandler,
  magicNetworkMonitoringRulesHandler,
  magicNetworkMonitoringVPCFlowLogsHandler,
  magicPCAPCollectionHandler,
  magicRedundancyGroupsHandler,
  magicSiteACLsHandler,
  magicSiteAppConfigsHandler,
  magicSiteLANsHandler,
  magicSiteNetFlowConfigHandler,
  magicSitesHandler,
  magicSiteWANsHandler,
  magicStaticRoutesHandler,
  maintenanceConfigurationHandler,
  managedTransformsHandler,
  mcpPortalAnalyticsHandler,
  mcpPortalHandler,
  mcpPortalServersHandler,
  meetingsHandler,
  memoryHandler,
  metricsExportHandler,
  miscategorizationHandler,
  monetizationHandler,
  moQRelaysHandler,
  mTLSCertificateManagementHandler,
  namespaceManagementHandler,
  namespacesHandler,
  nelSettingsHandler,
  notificationAlertTypesHandler,
  notificationDestinationsWithPagerDutyHandler,
  notificationHistoryHandler,
  notificationMechanismEligibilityHandler,
  notificationPoliciesHandler,
  notificationSilencesHandler,
  notificationWebhooksHandler,
  oAuthClientsHandler,
  observabilityHandler,
  observatoryHandler,
  ohttpGatewayHandler,
  organizationMembersHandler,
  organizationsHandler,
  originCAHandler,
  originCloudRegionsHandler,
  originPostQuantumHandler,
  originTLSHandler,
  overrideCodesHandler,
  pageRulesHandler,
  pagesAssetsHandler,
  pagesBuildCacheHandler,
  pagesDeployHooksHandler,
  pagesDeploymentHandler,
  pagesDomainsHandler,
  pagesProjectHandler,
  passiveDNSByIPHandler,
  payloadLoggingKeysForAnAccountHandler,
  payloadLoggingKeysForAZoneHandler,
  perHostnameAuthenticatedOriginPullHandler,
  perHostnameTLSSettingsHandler,
  permissionsHandler,
  physicalDevicesHandler,
  policiesHandler,
  ppcConfigHandler,
  ppcCrawlersHandler,
  ppcStripeHandler,
  ppcTermsHandler,
  ppuAgreementsHandler,
  ppuConfigurationHandler,
  ppuEnabledDomainsHandler,
  ppuEnabledPublishersHandler,
  ppuPricingHandler,
  ppuUsageReportsHandler,
  ppuUsageStatsHandler,
  precursorHandler,
  prefixBindingsHandler,
  presetsHandler,
  previewDeploymentsHandler,
  previewsHandler,
  priorityIntelligenceRequirementsHandler,
  priorityIntelligenceRequirementsPIRHandler,
  public__CredentialMonitorHandler,
  queryRunHandler,
  queueHandler,
  r2AccountHandler,
  r2BucketHandler,
  r2CatalogManagementHandler,
  r2ObjectHandler,
  r2SuperSlurperHandler,
  radarAgentReadinessHandler,
  radarAIBotsHandler,
  radarAIInferenceHandler,
  radarAnnotationsHandler,
  radarAS112Handler,
  radarAutonomousSystemsHandler,
  radarBGPHandler,
  radarBotsHandler,
  radarCertificateTransparencyHandler,
  radarDatasetsHandler,
  radarDNSHandler,
  radarDomainsRankingHandler,
  radarEmailRoutingHandler,
  radarEmailSecurityHandler,
  radarGeolocationsHandler,
  radarHTTPHandler,
  radarInternetServicesRankingHandler,
  radarIPHandler,
  radarLayer3AttacksHandler,
  radarLayer7AttacksHandler,
  radarLeakedCredentialChecksHandler,
  radarLocationsHandler,
  radarMarkdownForAgentsHandler,
  radarNetFlowsHandler,
  radarOriginsHandler,
  radarPostQuantumHandler,
  radarQualityHandler,
  radarRobotsTxtHandler,
  radarSearchHandler,
  radarTCPResetsAndTimeoutsHandler,
  radarTopLevelDomainsHandler,
  radarTrafficAnomaliesHandler,
  radarVerifiedBotsHandler,
  radarWebCrawlersHandler,
  rateLimitingAnalyticsHandler,
  rateLimitsForAZoneHandler,
  ratePlansHandler,
  realtimeSFUAppsHandler,
  realtimeTURNKeysHandler,
  recordingsHandler,
  regionsHandler,
  registrarRegistrationHandler,
  registrarTransferHandler,
  registrationsHandler,
  remediationsHandler,
  reportsOtherHandler,
  repositoryConnectionsHandler,
  requestForInformationRFIHandler,
  requests__DashboardHandler,
  resourceSharingHandler,
  resourceTaggingHandler,
  rfiHandler,
  rfiMessagesHandler,
  rolloutsHandler,
  rulesHandler,
  savedQueriesHandler,
  scansHandler,
  schemaValidationHandler,
  schemaValidationSettingsHandler,
  scimDiscoveryHandler,
  scimGroupsHandler,
  scimUsersHandler,
  secondaryDNSACLHandler,
  secondaryDNSPeerHandler,
  secondaryDNSPrimaryZoneHandler,
  secondaryDNSSecondaryZoneHandler,
  secondaryDNSTSIGHandler,
  secretsStoreHandler,
  securityCenterAuditLogHandler,
  securityCenterInsightsHandler,
  securityCenterPartnersHandler,
  securityCenterScansHandler,
  securityTxtHandler,
  sessionsHandler,
  settingsHandler,
  sharedHandler,
  sinkholeConfigHandler,
  slotsHandler,
  smartShieldSettingsHandler,
  smartTieredCacheHandler,
  spectrumAnalyticsHandler,
  spectrumApplicationsHandler,
  spendPoliciesHandler,
  ssltlsModeRecommendationHandler,
  sslVerificationHandler,
  ssoHandler,
  streamAudioTracksHandler,
  streamLiveInputsHandler,
  streamMP4DownloadsHandler,
  streamSigningKeysHandler,
  streamSubtitlesCaptionsHandler,
  streamVideoClippingHandler,
  streamVideosHandler,
  streamWatermarkProfileHandler,
  streamWebhookHandler,
  tableMaintenanceConfigurationHandler,
  tableManagementHandler,
  tagCategoryHandler,
  tagHandler,
  targetEnvironmentsHandler,
  targetIndustryHandler,
  teamsDevicesOtherHandler,
  tenantLevelCustomNameserversHandler,
  tenantsHandler,
  threatIntelligenceHandler,
  threatSignalsHandler,
  tieredCachingHandler,
  tokenValidationTokenConfigurationHandler,
  tokenValidationTokenRulesHandler,
  totalTLSHandler,
  triggersHandler,
  tunnelRoutingHandler,
  tunnelVirtualNetworkHandler,
  turnstileHandler,
  universalSSLSettingsForAZoneHandler,
  urlIntelligenceHandler,
  urlNormalizationHandler,
  urlScannerDeprecatedHandler,
  urlScannerHandler,
  usageAnalyticsHandler,
  usageHandler,
  userAgentBlockingRulesHandler,
  userAnalyticsDeprecatedHandler,
  userAPITokensHandler,
  userBillingHistoryHandler,
  userBillingProfileHandler,
  userHandler,
  userSAccountMembershipsHandler,
  userSInvitesHandler,
  userSOrganizationsHandler,
  userSubscriptionHandler,
  valuesHandler,
  vectorizeBetaDeprecatedHandler,
  vectorizeHandler,
  versionsHandler,
  vulnerabilityDiscoveryHandler,
  wafOverridesHandler,
  wafPackagesHandler,
  wafRuleGroupsHandler,
  wafRulesHandler,
  waitingRoomHandler,
  warpChangeEventsHandler,
  web3HostnameHandler,
  webAnalyticsHandler,
  webhooksHandler,
  whoisRecordHandler,
  workerCronTriggerHandler,
  workerDeploymentsHandler,
  workerEnvironmentHandler,
  workerProfilingHandler,
  workerRoutesHandler,
  workersAccountSettingsHandler,
  workersAIFinetuneHandler,
  workersAIHandler,
  workerScriptHandler,
  workersForPlatformsHandler,
  workersHandler,
  workersKVNamespaceHandler,
  workersSmartPlacementHandler,
  workerSubdomainHandler,
  workerTailLogsHandler,
  workerVersionsHandler,
  workflowsHandler,
  zarazHandler,
  zeroTrustAccountRegionHandler,
  zeroTrustAccountsHandler,
  zeroTrustApplicationsReviewStatusHandler,
  zeroTrustCertificatesHandler,
  zeroTrustConnectivitySettingsHandler,
  zeroTrustGatewayApplicationAndApplicationTypeMappingsHandler,
  zeroTrustGatewayCategoriesHandler,
  zeroTrustGatewayDNSDestinationIPv4AddressPairsHandler,
  zeroTrustGatewayLocationsHandler,
  zeroTrustGatewayOperationsHandler,
  zeroTrustGatewayPACFilesHandler,
  zeroTrustGatewayProxyEndpointsHandler,
  zeroTrustGatewayRulesHandler,
  zeroTrustHostnameRouteHandler,
  zeroTrustListsHandler,
  zeroTrustOrganizationHandler,
  zeroTrustRiskScoringHandler,
  zeroTrustRiskScoringIntegrationsHandler,
  zeroTrustSeatsHandler,
  zeroTrustSSHSettingsHandler,
  zeroTrustSubnetsHandler,
  zeroTrustUsersHandler,
  zoneAnalyticsDeprecatedHandler,
  zoneCacheSettingsHandler,
  zoneCloudConnectorRulesGETHandler,
  zoneCloudConnectorRulesPUTHandler,
  zoneEntitlementsHandler,
  zoneEnvironmentsHandler,
  zoneHandler,
  zoneHoldsHandler,
  zoneLevelAccessApplicationsHandler,
  zoneLevelAccessGroupsHandler,
  zoneLevelAccessIdentityProvidersHandler,
  zoneLevelAccessMTLSAuthenticationHandler,
  zoneLevelAccessPoliciesHandler,
  zoneLevelAccessServiceTokensHandler,
  zoneLevelAccessShortLivedCertificateCAsHandler,
  zoneLevelAuthenticatedOriginPullsHandler,
  zoneLevelZeroTrustOrganizationHandler,
  zoneLockdownHandler,
  zoneRatePlanHandler,
  zoneRulesetsHandler,
  zoneSettingsHandler,
  zoneSnippetsHandler,
  zoneSubscriptionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', abuseReportsOtherHandler)
  .route('/', mcpPortalAnalyticsHandler)
  .route('/', mcpPortalHandler)
  .route('/', mcpPortalServersHandler)
  .route('/', accessApplicationsHandler)
  .route('/', accessShortLivedCertificateCAsHandler)
  .route('/', accessApplicationScopedPoliciesHandler)
  .route('/', accessAuthenticatorDeviceAAGUIDsHandler)
  .route('/', accessBookmarkApplicationsDeprecatedHandler)
  .route('/', accessMTLSAuthenticationHandler)
  .route('/', accessCustomPagesHandler)
  .route('/', gatewayCAHandler)
  .route('/', accessGroupsHandler)
  .route('/', accessIdentityProvidersHandler)
  .route('/', accessIdPFederationGrantsHandler)
  .route('/', accessKeyConfigurationHandler)
  .route('/', accessAuthenticationLogsHandler)
  .route('/', accessJITRequestLogsHandler)
  .route('/', accessSCIMUpdateLogsHandler)
  .route('/', zeroTrustOrganizationHandler)
  .route('/', accessReusablePoliciesHandler)
  .route('/', accessPolicyTesterHandler)
  .route('/', accessSAMLEncryptionCertificatesHandler)
  .route('/', zeroTrustSeatsHandler)
  .route('/', accessServiceTokensHandler)
  .route('/', accessTagsHandler)
  .route('/', accessUserPopulationsHandler)
  .route('/', accessUserPopulationUsersHandler)
  .route('/', zeroTrustUsersHandler)
  .route('/', ipAddressManagementAddressMapsHandler)
  .route('/', ipAddressManagementLeasesHandler)
  .route('/', ipAddressManagementPrefixesHandler)
  .route('/', ipAddressManagementBGPPrefixesHandler)
  .route('/', ipAddressManagementDynamicAdvertisementHandler)
  .route('/', ipAddressManagementServiceBindingsHandler)
  .route('/', ipAddressManagementPrefixDelegationHandler)
  .route('/', dlsRegionalServicesHandler)
  .route('/', namespacesHandler)
  .route('/', memoryHandler)
  .route('/', aiGatewayHandler)
  .route('/', aiGatewayCustomProvidersHandler)
  .route('/', aiGatewayCustomProviderCostsHandler)
  .route('/', aiGatewayEvaluationsHandler)
  .route('/', aiGatewayGatewaysHandler)
  .route('/', aiGatewayCustomDomainsHandler)
  .route('/', aiGatewayDatasetsHandler)
  .route('/', aiGatewayLogsHandler)
  .route('/', aiGatewayModelAliasesHandler)
  .route('/', aiGatewayProviderConfigsHandler)
  .route('/', aiGatewayDynamicRoutesHandler)
  .route('/', accountHandler)
  .route('/', aiSearchInstancesHandler)
  .route('/', aiSearchInstancesJobsHandler)
  .route('/', aiSearchNamespacesHandler)
  .route('/', aiSearchInstancesItemsHandler)
  .route('/', aiSearchAccountSearchHandler)
  .route('/', aiSearchTokensHandler)
  .route('/', workersAIHandler)
  .route('/', workersAIFinetuneHandler)
  .route('/', finetuneAssetHandler)
  .route('/', notificationAlertTypesHandler)
  .route('/', notificationMechanismEligibilityHandler)
  .route('/', notificationDestinationsWithPagerDutyHandler)
  .route('/', notificationWebhooksHandler)
  .route('/', notificationHistoryHandler)
  .route('/', notificationPoliciesHandler)
  .route('/', notificationSilencesHandler)
  .route('/', dataSecurityHandler)
  .route('/', artAnalyticsHandler)
  .route('/', analyticsSQLHandler)
  .route('/', analyticsEngineHandler)
  .route('/', argoSmartRoutingHandler)
  .route('/', artifactsHandler)
  .route('/', auditLogsHandler)
  .route('/', autoRAGRAGSearchHandler)
  .route('/', autoRAGRAGHandler)
  .route('/', autoRAGJobsHandler)
  .route('/', basinCatalogManagementHandler)
  .route('/', credentialManagementHandler)
  .route('/', maintenanceConfigurationHandler)
  .route('/', namespaceManagementHandler)
  .route('/', tableManagementHandler)
  .route('/', tableMaintenanceConfigurationHandler)
  .route('/', billableUsageHandler)
  .route('/', billableUsageV2Handler)
  .route('/', accountBillingHandler)
  .route('/', accountBillingHistoryHandler)
  .route('/', accountBillingProfileHandler)
  .route('/', spendPoliciesHandler)
  .route('/', usageAnalyticsHandler)
  .route('/', botnetThreatFeedHandler)
  .route('/', brandProtectionHandler)
  .route('/', logoMatchHandler)
  .route('/', domainSearchHandler)
  .route('/', browserExtensionConfigHandler)
  .route('/', browserExtensionInventoriesHandler)
  .route('/', brapiHandler)
  .route('/', buildsHandler)
  .route('/', repositoryConnectionsHandler)
  .route('/', gitHubIntegrationHandler)
  .route('/', buildTokensHandler)
  .route('/', triggersHandler)
  .route('/', environmentVariablesHandler)
  .route('/', workersHandler)
  .route('/', deployHooksHandler)
  .route('/', accountSubscriptionsHandler)
  .route('/', realtimeSFUAppsHandler)
  .route('/', realtimeTURNKeysHandler)
  .route('/', cloudflareTunnelHandler)
  .route('/', cloudflareTunnelConfigurationHandler)
  .route('/', turnstileHandler)
  .route('/', scansHandler)
  .route('/', binDBHandler)
  .route('/', eventHandler)
  .route('/', attackerHandler)
  .route('/', categoryHandler)
  .route('/', countryHandler)
  .route('/', datasetHandler)
  .route('/', groupsHandler)
  .route('/', indicatorsHandler)
  .route('/', indicatorHandler)
  .route('/', permissionsHandler)
  .route('/', tagHandler)
  .route('/', targetIndustryHandler)
  .route('/', datasetsHandler)
  .route('/', eventsHandler)
  .route('/', indicatorTypesHandler)
  .route('/', tagCategoryHandler)
  .route('/', requestForInformationRFIHandler)
  .route('/', priorityIntelligenceRequirementsPIRHandler)
  .route('/', rulesHandler)
  .route('/', approvalsHandler)
  .route('/', collectionsHandler)
  .route('/', collections__ItemsHandler)
  .route('/', public__CredentialMonitorHandler)
  .route('/', priorityIntelligenceRequirementsHandler)
  .route('/', requests__DashboardHandler)
  .route('/', rfiHandler)
  .route('/', dashboard__UsersHandler)
  .route('/', dashboardAssetsHandler)
  .route('/', rfiMessagesHandler)
  .route('/', threatIntelligenceHandler)
  .route('/', threatSignalsHandler)
  .route('/', cnIsHandler)
  .route('/', interconnectsHandler)
  .route('/', settingsHandler)
  .route('/', slotsHandler)
  .route('/', connectivityServicesHandler)
  .route('/', applicationsHandler)
  .route('/', containerInstancesHandler)
  .route('/', rolloutsHandler)
  .route('/', containerImagesHandler)
  .route('/', imageRegistriesHandler)
  .route('/', customCSRsForAnAccountHandler)
  .route('/', accountLevelCustomNameserversHandler)
  .route('/', customPagesForAnAccountHandler)
  .route('/', customAssetsForAnAccountHandler)
  .route('/', cwsBasicAuthCredentialsHandler)
  .route('/', cwsDeploymentsHandler)
  .route('/', cwsDomainACLsHandler)
  .route('/', cwsPoliciesHandler)
  .route('/', cwsPolicySetsHandler)
  .route('/', cwsRegoMetadataHandler)
  .route('/', cwsRegoModulesHandler)
  .route('/', cwsTenantStructuresHandler)
  .route('/', cwsWorkloadsHandler)
  .route('/', d1Handler)
  .route('/', assetSchemasHandler)
  .route('/', contentHandler)
  .route('/', exportsHandler)
  .route('/', findingTypesHandler)
  .route('/', findingsHandler)
  .route('/', policiesHandler)
  .route('/', remediationsHandler)
  .route('/', webhooksHandler)
  .route('/', devicesHandler)
  .route('/', clientVersionsHandler)
  .route('/', deploymentGroupsHandler)
  .route('/', ipProfilesHandler)
  .route('/', deviceManagedNetworksHandler)
  .route('/', overrideCodesHandler)
  .route('/', physicalDevicesHandler)
  .route('/', devicePostureRulesHandler)
  .route('/', devicePostureIntegrationsHandler)
  .route('/', registrationsHandler)
  .route('/', teamsDevicesOtherHandler)
  .route('/', devicesResilienceHandler)
  .route('/', zeroTrustAccountsHandler)
  .route('/', dexSyntheticApplicationMonitoringHandler)
  .route('/', dexRemoteCommandsHandler)
  .route('/', dexNotificationsHandler)
  .route('/', dexRulesHandler)
  .route('/', warpChangeEventsHandler)
  .route('/', endpointHealthChecksHandler)
  .route('/', diagnosticsHandler)
  .route('/', dlpCustomPromptTopicsHandler)
  .route('/', dlpDataClassesHandler)
  .route('/', dlpDataTagCategoriesHandler)
  .route('/', dlpDataTagsHandler)
  .route('/', dlpDataTagCategoryTemplatesHandler)
  .route('/', dlpDatasetsHandler)
  .route('/', dlpDocumentFingerprintsHandler)
  .route('/', dlpEmailHandler)
  .route('/', dlpEntriesHandler)
  .route('/', dlpIntegrationEntriesHandler)
  .route('/', dlpPredefinedEntriesHandler)
  .route('/', dlpSettingsHandler)
  .route('/', dlpProfilesHandler)
  .route('/', dlpSensitivityGroupsHandler)
  .route('/', dlpSensitivityGroupTemplatesHandler)
  .route('/', dlpSensitivityLevelsHandler)
  .route('/', dlpValidatorsHandler)
  .route('/', prefixBindingsHandler)
  .route('/', regionsHandler)
  .route('/', dnsFirewallHandler)
  .route('/', dnsFirewallAnalyticsHandler)
  .route('/', dnsRecordsForAnAccountHandler)
  .route('/', dnsSettingsForAnAccountHandler)
  .route('/', customNameserverSetsForAnAccountHandler)
  .route('/', dnsInternalViewsForAnAccountHandler)
  .route('/', emailSecurityAnalyticsHandler)
  .route('/', emailSecurityHandler)
  .route('/', emailSecuritySettingsHandler)
  .route('/', emailRoutingDestinationAddressesHandler)
  .route('/', emailRoutingRoutingRulesHandler)
  .route('/', emailSendingHandler)
  .route('/', emailSendingSuppressionsHandler)
  .route('/', accountEntitlementsHandler)
  .route('/', r2BucketHandler)
  .route('/', queueHandler)
  .route('/', fieldExtractorsHandler)
  .route('/', ipAccessRulesForAnAccountHandler)
  .route('/', payloadLoggingKeysForAnAccountHandler)
  .route('/', appsHandler)
  .route('/', definitionsHandler)
  .route('/', evaluationHandler)
  .route('/', flagsHandler)
  .route('/', changelogHandler)
  .route('/', zeroTrustGatewayApplicationAndApplicationTypeMappingsHandler)
  .route('/', zeroTrustApplicationsReviewStatusHandler)
  .route('/', zeroTrustSSHSettingsHandler)
  .route('/', zeroTrustGatewayCategoriesHandler)
  .route('/', zeroTrustCertificatesHandler)
  .route('/', zeroTrustGatewayDNSDestinationIPv4AddressPairsHandler)
  .route('/', zeroTrustListsHandler)
  .route('/', zeroTrustGatewayLocationsHandler)
  .route('/', zeroTrustGatewayOperationsHandler)
  .route('/', zeroTrustGatewayPACFilesHandler)
  .route('/', zeroTrustGatewayProxyEndpointsHandler)
  .route('/', zeroTrustGatewayRulesHandler)
  .route('/', hyperdriveHandler)
  .route('/', accountPermissionGroupsHandler)
  .route('/', accountResourceGroupsHandler)
  .route('/', accountUserGroupsHandler)
  .route('/', accountUserGroupMembersHandler)
  .route('/', cloudflareImagesHandler)
  .route('/', cloudflareImagesKeysHandler)
  .route('/', cloudflareImagesVariantsHandler)
  .route('/', cloudflareImagesSourcingKitHandler)
  .route('/', infrastructureAccessTargetsHandler)
  .route('/', asnIntelligenceHandler)
  .route('/', securityCenterInsightsHandler)
  .route('/', passiveDNSByIPHandler)
  .route('/', domainIntelligenceHandler)
  .route('/', domainHistoryHandler)
  .route('/', customIndicatorFeedsHandler)
  .route('/', ipIntelligenceHandler)
  .route('/', ipListHandler)
  .route('/', miscategorizationHandler)
  .route('/', sinkholeConfigHandler)
  .route('/', urlIntelligenceHandler)
  .route('/', whoisRecordHandler)
  .route('/', cloudflareK2OtherHandler)
  .route('/', accountLoadBalancersHandler)
  .route('/', accountLoadBalancerMonitorGroupsHandler)
  .route('/', accountLoadBalancerMonitorsHandler)
  .route('/', accountLoadBalancerPoolsHandler)
  .route('/', loadBalancerRegionsHandler)
  .route('/', accountLoadBalancerSearchHandler)
  .route('/', logpushJobsForAnAccountHandler)
  .route('/', logpushTransformersHandler)
  .route('/', logcontrolCMBConfigForAnAccountHandler)
  .route('/', logExplorerDatasetsHandler)
  .route('/', logExplorerQueriesHandler)
  .route('/', logpullHandler)
  .route('/', advancedDdosProtectionOtherHandler)
  .route('/', magicAccountAppsHandler)
  .route('/', magicBGPFilterProfilesHandler)
  .route('/', magicBGPSettingsHandler)
  .route('/', magicCF1SitesHandler)
  .route('/', magicCF1SiteRampsHandler)
  .route('/', magicInterconnectsHandler)
  .route('/', magicConnectorsHandler)
  .route('/', magicGRETunnelsHandler)
  .route('/', magicIPsecTunnelsHandler)
  .route('/', magicRedundancyGroupsHandler)
  .route('/', magicStaticRoutesHandler)
  .route('/', magicSitesHandler)
  .route('/', magicSiteACLsHandler)
  .route('/', magicSiteAppConfigsHandler)
  .route('/', magicSiteLANsHandler)
  .route('/', magicSiteNetFlowConfigHandler)
  .route('/', magicSiteWANsHandler)
  .route('/', vulnerabilityDiscoveryHandler)
  .route('/', accountMembersHandler)
  .route('/', magicNetworkMonitoringConfigurationHandler)
  .route('/', magicNetworkMonitoringRulesHandler)
  .route('/', magicNetworkMonitoringVPCFlowLogsHandler)
  .route('/', monetizationHandler)
  .route('/', moQRelaysHandler)
  .route('/', mTLSCertificateManagementHandler)
  .route('/', oAuthClientsHandler)
  .route('/', observabilityHandler)
  .route('/', integrationsHandler)
  .route('/', pagesProjectHandler)
  .route('/', pagesDeploymentHandler)
  .route('/', pagesDomainsHandler)
  .route('/', pagesBuildCacheHandler)
  .route('/', ppcStripeHandler)
  .route('/', ppcCrawlersHandler)
  .route('/', ppcTermsHandler)
  .route('/', ppcConfigHandler)
  .route('/', ppuAgreementsHandler)
  .route('/', ppuEnabledDomainsHandler)
  .route('/', ppuEnabledPublishersHandler)
  .route('/', ppuConfigurationHandler)
  .route('/', ppuPricingHandler)
  .route('/', ppuUsageReportsHandler)
  .route('/', ppuUsageStatsHandler)
  .route('/', accountPaymentMethodsHandler)
  .route('/', magicPCAPCollectionHandler)
  .route('/', cloudflarePipelinesOtherHandler)
  .route('/', r2CatalogManagementHandler)
  .route('/', r2ObjectHandler)
  .route('/', r2AccountHandler)
  .route('/', analyticsHandler)
  .route('/', liveStreamsHandler)
  .route('/', meetingsHandler)
  .route('/', activeSessionHandler)
  .route('/', presetsHandler)
  .route('/', recordingsHandler)
  .route('/', sessionsHandler)
  .route('/', domainDiscoveryHandler)
  .route('/', extensionHandler)
  .route('/', registrarRegistrationHandler)
  .route('/', registrarTransferHandler)
  .route('/', reportsOtherHandler)
  .route('/', accountRequestTracerHandler)
  .route('/', accountRolesHandler)
  .route('/', listsHandler)
  .route('/', accountRulesetsHandler)
  .route('/', webAnalyticsHandler)
  .route('/', scimGroupsHandler)
  .route('/', scimDiscoveryHandler)
  .route('/', scimUsersHandler)
  .route('/', secondaryDNSACLHandler)
  .route('/', secondaryDNSPeerHandler)
  .route('/', secondaryDNSTSIGHandler)
  .route('/', secretsStoreHandler)
  .route('/', securityCenterAuditLogHandler)
  .route('/', securityCenterScansHandler)
  .route('/', securityCenterPartnersHandler)
  .route('/', accountSettingsHandler)
  .route('/', resourceSharingHandler)
  .route('/', r2SuperSlurperHandler)
  .route('/', ssoHandler)
  .route('/', workersKVNamespaceHandler)
  .route('/', streamVideosHandler)
  .route('/', streamVideoClippingHandler)
  .route('/', streamSigningKeysHandler)
  .route('/', streamLiveInputsHandler)
  .route('/', streamWatermarkProfileHandler)
  .route('/', streamWebhookHandler)
  .route('/', streamAudioTracksHandler)
  .route('/', streamSubtitlesCaptionsHandler)
  .route('/', streamMP4DownloadsHandler)
  .route('/', resourceTaggingHandler)
  .route('/', tunnelRoutingHandler)
  .route('/', tunnelVirtualNetworkHandler)
  .route('/', accountOwnedAPITokensHandler)
  .route('/', workflowsHandler)
  .route('/', cloudflareTunnelHostnameHandler)
  .route('/', urlScannerDeprecatedHandler)
  .route('/', urlScannerHandler)
  .route('/', vectorizeBetaDeprecatedHandler)
  .route('/', vectorizeHandler)
  .route('/', credentialSetsHandler)
  .route('/', credentialsHandler)
  .route('/', targetEnvironmentsHandler)
  .route('/', waitingRoomHandler)
  .route('/', workersAccountSettingsHandler)
  .route('/', workerScriptHandler)
  .route('/', workersForPlatformsHandler)
  .route('/', domainsHandler)
  .route('/', durableObjectsNamespaceHandler)
  .route('/', agentsHandler)
  .route('/', destinationsHandler)
  .route('/', issuesHandler)
  .route('/', metricsExportHandler)
  .route('/', savedQueriesHandler)
  .route('/', sharedHandler)
  .route('/', keysHandler)
  .route('/', liveTailHandler)
  .route('/', queryRunHandler)
  .route('/', valuesHandler)
  .route('/', usageHandler)
  .route('/', workersSmartPlacementHandler)
  .route('/', workerDeploymentsHandler)
  .route('/', workerCronTriggerHandler)
  .route('/', workerTailLogsHandler)
  .route('/', workerVersionsHandler)
  .route('/', workerEnvironmentHandler)
  .route('/', workerSubdomainHandler)
  .route('/', previewsHandler)
  .route('/', previewDeploymentsHandler)
  .route('/', versionsHandler)
  .route('/', workerProfilingHandler)
  .route('/', zeroTrustConnectivitySettingsHandler)
  .route('/', zeroTrustAccountRegionHandler)
  .route('/', zeroTrustHostnameRouteHandler)
  .route('/', zeroTrustSubnetsHandler)
  .route('/', zeroTrustRiskScoringHandler)
  .route('/', zeroTrustRiskScoringIntegrationsHandler)
  .route('/', ratePlansHandler)
  .route('/', originCAHandler)
  .route('/', cwsCategoriesHandler)
  .route('/', cwsFilterSchemaHandler)
  .route('/', feedbackHandler)
  .route('/', cloudflareIPsHandler)
  .route('/', userSAccountMembershipsHandler)
  .route('/', organizationsHandler)
  .route('/', organizationMembersHandler)
  .route('/', pagesAssetsHandler)
  .route('/', pagesDeployHooksHandler)
  .route('/', radarAgentReadinessHandler)
  .route('/', radarAIBotsHandler)
  .route('/', radarAIInferenceHandler)
  .route('/', radarMarkdownForAgentsHandler)
  .route('/', radarAnnotationsHandler)
  .route('/', radarAS112Handler)
  .route('/', radarLayer3AttacksHandler)
  .route('/', radarLayer7AttacksHandler)
  .route('/', radarBGPHandler)
  .route('/', radarBotsHandler)
  .route('/', radarWebCrawlersHandler)
  .route('/', radarCertificateTransparencyHandler)
  .route('/', radarDatasetsHandler)
  .route('/', radarDNSHandler)
  .route('/', radarEmailRoutingHandler)
  .route('/', radarEmailSecurityHandler)
  .route('/', radarAutonomousSystemsHandler)
  .route('/', radarIPHandler)
  .route('/', radarLocationsHandler)
  .route('/', radarGeolocationsHandler)
  .route('/', radarHTTPHandler)
  .route('/', radarLeakedCredentialChecksHandler)
  .route('/', radarNetFlowsHandler)
  .route('/', radarOriginsHandler)
  .route('/', radarPostQuantumHandler)
  .route('/', radarQualityHandler)
  .route('/', radarDomainsRankingHandler)
  .route('/', radarInternetServicesRankingHandler)
  .route('/', radarRobotsTxtHandler)
  .route('/', radarSearchHandler)
  .route('/', radarTCPResetsAndTimeoutsHandler)
  .route('/', radarTopLevelDomainsHandler)
  .route('/', radarTrafficAnomaliesHandler)
  .route('/', radarVerifiedBotsHandler)
  .route('/', tenantsHandler)
  .route('/', tenantLevelCustomNameserversHandler)
  .route('/', userHandler)
  .route('/', userAnalyticsDeprecatedHandler)
  .route('/', userBillingHistoryHandler)
  .route('/', userBillingProfileHandler)
  .route('/', communicationPreferencesHandler)
  .route('/', ipAccessRulesForAUserHandler)
  .route('/', userSInvitesHandler)
  .route('/', loadBalancerMonitorsHandler)
  .route('/', loadBalancerPoolsHandler)
  .route('/', loadBalancerHealthcheckEventsHandler)
  .route('/', userSOrganizationsHandler)
  .route('/', spectrumAnalyticsHandler)
  .route('/', userSubscriptionHandler)
  .route('/', userAPITokensHandler)
  .route('/', apiHandler)
  .route('/', zoneHandler)
  .route('/', zoneLevelAccessApplicationsHandler)
  .route('/', zoneLevelAccessShortLivedCertificateCAsHandler)
  .route('/', zoneLevelAccessPoliciesHandler)
  .route('/', zoneLevelAccessMTLSAuthenticationHandler)
  .route('/', zoneLevelAccessGroupsHandler)
  .route('/', zoneLevelAccessIdentityProvidersHandler)
  .route('/', zoneLevelZeroTrustOrganizationHandler)
  .route('/', zoneLevelAccessServiceTokensHandler)
  .route('/', customOriginTrustStoreHandler)
  .route('/', totalTLSHandler)
  .route('/', aiAuditHandler)
  .route('/', aiSecurityForAppsHandler)
  .route('/', zoneAnalyticsDeprecatedHandler)
  .route('/', argoAnalyticsForZoneHandler)
  .route('/', argoAnalyticsForGeolocationHandler)
  .route('/', apiShieldSettingsHandler)
  .route('/', apiShieldAPIDiscoveryHandler)
  .route('/', apiShieldWAFExpressionTemplatesHandler)
  .route('/', apiShieldLabelsHandler)
  .route('/', apiShieldEndpointManagementHandler)
  .route('/', apiShieldSchemaValidation20Handler)
  .route('/', tieredCachingHandler)
  .route('/', zoneRatePlanHandler)
  .route('/', botSettingsHandler)
  .route('/', zoneCacheSettingsHandler)
  .route('/', originCloudRegionsHandler)
  .route('/', originPostQuantumHandler)
  .route('/', smartTieredCacheHandler)
  .route('/', apiShieldClientCertificatesForAZoneHandler)
  .route('/', zoneCloudConnectorRulesGETHandler)
  .route('/', zoneCloudConnectorRulesPUTHandler)
  .route('/', contentScanningHandler)
  .route('/', ctAlertingHandler)
  .route('/', customSSLForAZoneHandler)
  .route('/', customCSRsForAZoneHandler)
  .route('/', customHostnameForAZoneHandler)
  .route('/', customHostnameFallbackOriginForAZoneHandler)
  .route('/', accountLevelCustomNameserversUsageForAZoneHandler)
  .route('/', customPagesForAZoneHandler)
  .route('/', customAssetsForAZoneHandler)
  .route('/', dcvDelegationHandler)
  .route('/', dnsAnalyticsHandler)
  .route('/', dnsRecordsForAZoneHandler)
  .route('/', dnsSettingsForAZoneHandler)
  .route('/', dnssecHandler)
  .route('/', emailAuthHandler)
  .route('/', emailRoutingSettingsHandler)
  .route('/', emailSendingSubdomainsHandler)
  .route('/', zoneEntitlementsHandler)
  .route('/', zoneEnvironmentsHandler)
  .route('/', filtersHandler)
  .route('/', ipAccessRulesForAZoneHandler)
  .route('/', zoneLockdownHandler)
  .route('/', payloadLoggingKeysForAZoneHandler)
  .route('/', firewallRulesHandler)
  .route('/', userAgentBlockingRulesHandler)
  .route('/', wafOverridesHandler)
  .route('/', wafPackagesHandler)
  .route('/', wafRuleGroupsHandler)
  .route('/', wafRulesHandler)
  .route('/', fraudDetectionHandler)
  .route('/', healthChecksHandler)
  .route('/', zoneHoldsHandler)
  .route('/', perHostnameTLSSettingsHandler)
  .route('/', imagesHandler)
  .route('/', keylessSSLForAZoneHandler)
  .route('/', leakedCredentialChecksHandler)
  .route('/', loadBalancersHandler)
  .route('/', logpushJobsForAZoneHandler)
  .route('/', instantLogsJobsForAZoneHandler)
  .route('/', logsReceivedHandler)
  .route('/', managedTransformsHandler)
  .route('/', zoneLevelAuthenticatedOriginPullsHandler)
  .route('/', perHostnameAuthenticatedOriginPullHandler)
  .route('/', clientSideSecurityHandler)
  .route('/', pageRulesHandler)
  .route('/', availablePageRulesSettingsHandler)
  .route('/', precursorHandler)
  .route('/', rateLimitingAnalyticsHandler)
  .route('/', rateLimitsForAZoneHandler)
  .route('/', zoneRulesetsHandler)
  .route('/', schemaValidationHandler)
  .route('/', schemaValidationSettingsHandler)
  .route('/', secondaryDNSSecondaryZoneHandler)
  .route('/', secondaryDNSPrimaryZoneHandler)
  .route('/', securityTxtHandler)
  .route('/', zoneSettingsHandler)
  .route('/', originTLSHandler)
  .route('/', csamScannerSettingsHandler)
  .route('/', googleTagGatewayHandler)
  .route('/', nelSettingsHandler)
  .route('/', ohttpGatewayHandler)
  .route('/', automaticSSLTLSHandler)
  .route('/', zarazHandler)
  .route('/', smartShieldSettingsHandler)
  .route('/', cacheReserveClearHandler)
  .route('/', zoneSnippetsHandler)
  .route('/', spectrumApplicationsHandler)
  .route('/', observatoryHandler)
  .route('/', analyzeCertificateHandler)
  .route('/', certificatePacksHandler)
  .route('/', ssltlsModeRecommendationHandler)
  .route('/', universalSSLSettingsForAZoneHandler)
  .route('/', sslVerificationHandler)
  .route('/', zoneSubscriptionHandler)
  .route('/', tokenValidationTokenConfigurationHandler)
  .route('/', tokenValidationTokenRulesHandler)
  .route('/', urlNormalizationHandler)
  .route('/', web3HostnameHandler)
  .route('/', workerRoutesHandler)

export default app
