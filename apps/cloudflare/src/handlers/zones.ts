import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteZonesZoneIdAccessAppsAppIdCaRoute,
  deleteZonesZoneIdAccessAppsAppIdPoliciesPolicyIdRoute,
  deleteZonesZoneIdAccessAppsAppIdRoute,
  deleteZonesZoneIdAccessCertificatesCertificateIdRoute,
  deleteZonesZoneIdAccessGroupsGroupIdRoute,
  deleteZonesZoneIdAccessIdentityProvidersIdentityProviderIdRoute,
  deleteZonesZoneIdAccessServiceTokensServiceTokenIdRoute,
  deleteZonesZoneIdAcmCustomTrustStoreCustomOriginTrustStoreIdRoute,
  deleteZonesZoneIdAddressingRegionalHostnamesHostnameRoute,
  deleteZonesZoneIdApiGatewayLabelsUserNameRoute,
  deleteZonesZoneIdApiGatewayLabelsUserRoute,
  deleteZonesZoneIdApiGatewayOperationsLabelsRoute,
  deleteZonesZoneIdApiGatewayOperationsOperationIdLabelsRoute,
  deleteZonesZoneIdApiGatewayOperationsOperationIdRoute,
  deleteZonesZoneIdApiGatewayOperationsRoute,
  deleteZonesZoneIdApiGatewayUserSchemasSchemaIdRoute,
  deleteZonesZoneIdCacheOriginCloudRegionsBatchRoute,
  deleteZonesZoneIdCacheOriginCloudRegionsOriginIpRoute,
  deleteZonesZoneIdCacheTieredCacheSmartTopologyEnableRoute,
  deleteZonesZoneIdCacheVariantsRoute,
  deleteZonesZoneIdClientCertificatesClientCertificateIdRoute,
  deleteZonesZoneIdContentUploadScanPayloadsExpressionIdRoute,
  deleteZonesZoneIdCustomCertificatesCustomCertificateIdRoute,
  deleteZonesZoneIdCustomCsrsCustomCsrIdRoute,
  deleteZonesZoneIdCustomHostnamesCustomHostnameIdCertificatePackCertificatePackIdCertificatesCertificateIdRoute,
  deleteZonesZoneIdCustomHostnamesCustomHostnameIdRoute,
  deleteZonesZoneIdCustomHostnamesFallbackOriginRoute,
  deleteZonesZoneIdCustomPagesAssetsAssetNameRoute,
  deleteZonesZoneIdDnsRecordsDnsRecordIdRoute,
  deleteZonesZoneIdDnssecRoute,
  deleteZonesZoneIdEmailRoutingDnsRoute,
  deleteZonesZoneIdEmailRoutingRulesRuleIdentifierRoute,
  deleteZonesZoneIdEmailSendingSubdomainsSubdomainIdRoute,
  deleteZonesZoneIdEnvironmentsEnvironmentIdRoute,
  deleteZonesZoneIdFiltersFilterIdRoute,
  deleteZonesZoneIdFiltersRoute,
  deleteZonesZoneIdFirewallAccessRulesRulesRuleIdRoute,
  deleteZonesZoneIdFirewallLockdownsLockDownsIdRoute,
  deleteZonesZoneIdFirewallPayloadLoggingKeyRoute,
  deleteZonesZoneIdFirewallRulesRoute,
  deleteZonesZoneIdFirewallRulesRuleIdRoute,
  deleteZonesZoneIdFirewallUaRulesUaRuleIdRoute,
  deleteZonesZoneIdFirewallWafOverridesOverridesIdRoute,
  deleteZonesZoneIdHealthchecksHealthcheckIdRoute,
  deleteZonesZoneIdHealthchecksPreviewHealthcheckIdRoute,
  deleteZonesZoneIdHoldRoute,
  deleteZonesZoneIdHostnamesSettingsSettingIdHostnameRoute,
  deleteZonesZoneIdIntelSinkholesSinkholeIdIngressesIngressIdRoute,
  deleteZonesZoneIdKeylessCertificatesKeylessCertificateIdRoute,
  deleteZonesZoneIdLeakedCredentialChecksDetectionsDetectionIdRoute,
  deleteZonesZoneIdLoadBalancersLoadBalancerIdRoute,
  deleteZonesZoneIdLogpushJobsJobIdRoute,
  deleteZonesZoneIdLogsExplorerDatasetsDatasetIdRoute,
  deleteZonesZoneIdManagedHeadersRoute,
  deleteZonesZoneIdMonetizationRulesRoute,
  deleteZonesZoneIdMonetizationRulesRuleIdRoute,
  deleteZonesZoneIdObservabilityTracingRulesRoute,
  deleteZonesZoneIdObservabilityTracingSettingsRoute,
  deleteZonesZoneIdOriginCloudRegionsBatchRoute,
  deleteZonesZoneIdOriginCloudRegionsOriginIpRoute,
  deleteZonesZoneIdOriginTlsClientAuthCertificateIdRoute,
  deleteZonesZoneIdOriginTlsClientAuthHostnamesCertificatesCertificateIdRoute,
  deleteZonesZoneIdPagerulesPageruleIdRoute,
  deleteZonesZoneIdPageShieldPoliciesPolicyIdRoute,
  deleteZonesZoneIdPayPerUseOperatorsOperatorIdPriceRoute,
  deleteZonesZoneIdRateLimitsRateLimitIdRoute,
  deleteZonesZoneIdRoute,
  deleteZonesZoneIdRulesetsRulesetIdRoute,
  deleteZonesZoneIdRulesetsRulesetIdRulesRuleIdRoute,
  deleteZonesZoneIdRulesetsRulesetIdVersionsRulesetVersionRoute,
  deleteZonesZoneIdSchemaValidationSchemasSchemaIdRoute,
  deleteZonesZoneIdSchemaValidationSettingsOperationsOperationIdRoute,
  deleteZonesZoneIdSecondaryDnsIncomingRoute,
  deleteZonesZoneIdSecondaryDnsOutgoingRoute,
  deleteZonesZoneIdSecurityCenterSecuritytxtRoute,
  deleteZonesZoneIdSettingsAegisRoute,
  deleteZonesZoneIdSettingsOhttpGatewayRoute,
  deleteZonesZoneIdSettingsOriginTlsComplianceModesRoute,
  deleteZonesZoneIdSmartShieldHealthchecksHealthcheckIdRoute,
  deleteZonesZoneIdSnippetsSnippetNameRoute,
  deleteZonesZoneIdSnippetsSnippetRulesRoute,
  deleteZonesZoneIdSpectrumAppsAppIdRoute,
  deleteZonesZoneIdSpeedApiPagesUrlTestsRoute,
  deleteZonesZoneIdSpeedApiScheduleUrlRoute,
  deleteZonesZoneIdSslCertificatePacksCertificatePackIdRoute,
  deleteZonesZoneIdSubscriptionRoute,
  deleteZonesZoneIdSubscriptionsRoute,
  deleteZonesZoneIdTagsRoute,
  deleteZonesZoneIdTokenValidationConfigConfigIdRoute,
  deleteZonesZoneIdTokenValidationRulesRuleIdRoute,
  deleteZonesZoneIdUrlNormalizationRoute,
  deleteZonesZoneIdWaitingRoomsWaitingRoomIdEventsEventIdRoute,
  deleteZonesZoneIdWaitingRoomsWaitingRoomIdRoute,
  deleteZonesZoneIdWaitingRoomsWaitingRoomIdRulesRuleIdRoute,
  deleteZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListEntriesContentListEntryIdentifierRoute,
  deleteZonesZoneIdWeb3HostnamesIdentifierRoute,
  deleteZonesZoneIdWorkersRoutesRouteIdRoute,
  getZonesRoute,
  getZonesZoneIdAccessAppsAppIdCaRoute,
  getZonesZoneIdAccessAppsAppIdPoliciesPolicyIdRoute,
  getZonesZoneIdAccessAppsAppIdPoliciesRoute,
  getZonesZoneIdAccessAppsAppIdRoute,
  getZonesZoneIdAccessAppsAppIdUserPolicyChecksRoute,
  getZonesZoneIdAccessAppsCaRoute,
  getZonesZoneIdAccessAppsRoute,
  getZonesZoneIdAccessCertificatesCertificateIdRoute,
  getZonesZoneIdAccessCertificatesRoute,
  getZonesZoneIdAccessCertificatesSettingsRoute,
  getZonesZoneIdAccessGroupsGroupIdRoute,
  getZonesZoneIdAccessGroupsRoute,
  getZonesZoneIdAccessIdentityProvidersIdentityProviderIdRoute,
  getZonesZoneIdAccessIdentityProvidersRoute,
  getZonesZoneIdAccessOrganizationsRoute,
  getZonesZoneIdAccessServiceTokensRoute,
  getZonesZoneIdAccessServiceTokensServiceTokenIdRoute,
  getZonesZoneIdAcmCustomTrustStoreCustomOriginTrustStoreIdRoute,
  getZonesZoneIdAcmCustomTrustStoreRoute,
  getZonesZoneIdAcmTotalTlsRoute,
  getZonesZoneIdAddressingRegionalHostnamesHostnameRoute,
  getZonesZoneIdAddressingRegionalHostnamesRoute,
  getZonesZoneIdAiAuditRobotsRoute,
  getZonesZoneIdAiSecurityCustomTopicsRoute,
  getZonesZoneIdAiSecuritySettingsRoute,
  getZonesZoneIdAnalyticsColosRoute,
  getZonesZoneIdAnalyticsDashboardRoute,
  getZonesZoneIdAnalyticsLatencyColosRoute,
  getZonesZoneIdAnalyticsLatencyRoute,
  getZonesZoneIdApiGatewayConfigurationRoute,
  getZonesZoneIdApiGatewayDiscoveryOperationsDiscoveryIdRoute,
  getZonesZoneIdApiGatewayDiscoveryOperationsRoute,
  getZonesZoneIdApiGatewayDiscoveryRoute,
  getZonesZoneIdApiGatewayLabelsManagedNameRoute,
  getZonesZoneIdApiGatewayLabelsRoute,
  getZonesZoneIdApiGatewayLabelsUserNameRoute,
  getZonesZoneIdApiGatewayOperationsOperationIdRoute,
  getZonesZoneIdApiGatewayOperationsOperationIdSchemaValidationRoute,
  getZonesZoneIdApiGatewayOperationsRoute,
  getZonesZoneIdApiGatewaySchemasRoute,
  getZonesZoneIdApiGatewaySettingsSchemaValidationRoute,
  getZonesZoneIdApiGatewayUserSchemasHostsRoute,
  getZonesZoneIdApiGatewayUserSchemasRoute,
  getZonesZoneIdApiGatewayUserSchemasSchemaIdOperationsRoute,
  getZonesZoneIdApiGatewayUserSchemasSchemaIdRoute,
  getZonesZoneIdArgoSmartRoutingRoute,
  getZonesZoneIdArgoTieredCachingRoute,
  getZonesZoneIdAvailablePlansPlanIdentifierRoute,
  getZonesZoneIdAvailablePlansRoute,
  getZonesZoneIdAvailableRatePlansRoute,
  getZonesZoneIdBotManagementFeedbackRoute,
  getZonesZoneIdBotManagementRoute,
  getZonesZoneIdCacheCacheReserveClearRoute,
  getZonesZoneIdCacheCacheReserveRoute,
  getZonesZoneIdCacheOriginCloudRegionsOriginIpRoute,
  getZonesZoneIdCacheOriginCloudRegionsRoute,
  getZonesZoneIdCacheOriginCloudRegionsSupportedRegionsRoute,
  getZonesZoneIdCacheOriginPostQuantumEncryptionRoute,
  getZonesZoneIdCacheRegionalTieredCacheRoute,
  getZonesZoneIdCacheTieredCacheSmartTopologyEnableRoute,
  getZonesZoneIdCacheVariantsRoute,
  getZonesZoneIdCertificateAuthoritiesHostnameAssociationsRoute,
  getZonesZoneIdClientCertificatesClientCertificateIdRoute,
  getZonesZoneIdClientCertificatesRoute,
  getZonesZoneIdCloudConnectorRulesRoute,
  getZonesZoneIdContentUploadScanPayloadsRoute,
  getZonesZoneIdContentUploadScanSettingsRoute,
  getZonesZoneIdCtAlertingRoute,
  getZonesZoneIdCustomCertificatesCustomCertificateIdRoute,
  getZonesZoneIdCustomCertificatesRoute,
  getZonesZoneIdCustomCsrsCustomCsrIdRoute,
  getZonesZoneIdCustomCsrsRoute,
  getZonesZoneIdCustomHostnamesCustomHostnameIdRoute,
  getZonesZoneIdCustomHostnamesFallbackOriginRoute,
  getZonesZoneIdCustomHostnamesQuotaRoute,
  getZonesZoneIdCustomHostnamesRoute,
  getZonesZoneIdCustomNsRoute,
  getZonesZoneIdCustomPagesAssetsAssetNameRoute,
  getZonesZoneIdCustomPagesAssetsRoute,
  getZonesZoneIdCustomPagesIdentifierRoute,
  getZonesZoneIdCustomPagesRoute,
  getZonesZoneIdDcvDelegationUuidRoute,
  getZonesZoneIdDevicesPolicyCertificatesRoute,
  getZonesZoneIdDnsAnalyticsReportBytimeRoute,
  getZonesZoneIdDnsAnalyticsReportRoute,
  getZonesZoneIdDnsRecordsDnsRecordIdRoute,
  getZonesZoneIdDnsRecordsExportRoute,
  getZonesZoneIdDnsRecordsRoute,
  getZonesZoneIdDnsRecordsScanReviewRoute,
  getZonesZoneIdDnsRecordsUsageRoute,
  getZonesZoneIdDnssecRoute,
  getZonesZoneIdDnssecZskRoute,
  getZonesZoneIdDnsSettingsRoute,
  getZonesZoneIdEmailAuthDmarcReportsRoute,
  getZonesZoneIdEmailAuthSpfInspectRoute,
  getZonesZoneIdEmailRoutingDnsRoute,
  getZonesZoneIdEmailRoutingRoute,
  getZonesZoneIdEmailRoutingRulesCatchAllRoute,
  getZonesZoneIdEmailRoutingRulesRoute,
  getZonesZoneIdEmailRoutingRulesRuleIdentifierRoute,
  getZonesZoneIdEmailSendingSubdomainsRoute,
  getZonesZoneIdEmailSendingSubdomainsSubdomainIdDnsRoute,
  getZonesZoneIdEmailSendingSubdomainsSubdomainIdDnsStatusRoute,
  getZonesZoneIdEmailSendingSubdomainsSubdomainIdReputationComplaintsRoute,
  getZonesZoneIdEmailSendingSubdomainsSubdomainIdRoute,
  getZonesZoneIdEntitlementsRoute,
  getZonesZoneIdEnvironmentsRoute,
  getZonesZoneIdFiltersFilterIdRoute,
  getZonesZoneIdFiltersRoute,
  getZonesZoneIdFirewallAccessRulesRulesRoute,
  getZonesZoneIdFirewallLockdownsLockDownsIdRoute,
  getZonesZoneIdFirewallLockdownsRoute,
  getZonesZoneIdFirewallPayloadLoggingKeyRoute,
  getZonesZoneIdFirewallRulesRoute,
  getZonesZoneIdFirewallRulesRuleIdRoute,
  getZonesZoneIdFirewallUaRulesRoute,
  getZonesZoneIdFirewallUaRulesUaRuleIdRoute,
  getZonesZoneIdFirewallWafOverridesOverridesIdRoute,
  getZonesZoneIdFirewallWafOverridesRoute,
  getZonesZoneIdFirewallWafPackagesPackageIdGroupsGroupIdRoute,
  getZonesZoneIdFirewallWafPackagesPackageIdGroupsRoute,
  getZonesZoneIdFirewallWafPackagesPackageIdRoute,
  getZonesZoneIdFirewallWafPackagesPackageIdRulesRoute,
  getZonesZoneIdFirewallWafPackagesPackageIdRulesRuleIdRoute,
  getZonesZoneIdFirewallWafPackagesRoute,
  getZonesZoneIdFraudDetectionSettingsRoute,
  getZonesZoneIdHealthchecksHealthcheckIdRoute,
  getZonesZoneIdHealthchecksPreviewHealthcheckIdRoute,
  getZonesZoneIdHealthchecksRoute,
  getZonesZoneIdHoldRoute,
  getZonesZoneIdHostnamesSettingsSettingIdHostnameRoute,
  getZonesZoneIdHostnamesSettingsSettingIdRoute,
  getZonesZoneIdImagesV1FlowsRoute,
  getZonesZoneIdIntelSinkholesSinkholeIdIngressesIngressIdRoute,
  getZonesZoneIdKeylessCertificatesKeylessCertificateIdRoute,
  getZonesZoneIdKeylessCertificatesRoute,
  getZonesZoneIdLeakedCredentialChecksDetectionsDetectionIdRoute,
  getZonesZoneIdLeakedCredentialChecksDetectionsRoute,
  getZonesZoneIdLeakedCredentialChecksRoute,
  getZonesZoneIdLoadBalancersLoadBalancerIdRoute,
  getZonesZoneIdLoadBalancersRoute,
  getZonesZoneIdLogpushDatasetsDatasetIdFieldsRoute,
  getZonesZoneIdLogpushDatasetsDatasetIdJobsRoute,
  getZonesZoneIdLogpushEdgeJobsRoute,
  getZonesZoneIdLogpushJobsJobIdRoute,
  getZonesZoneIdLogpushJobsRoute,
  getZonesZoneIdLogsControlRetentionFlagRoute,
  getZonesZoneIdLogsExplorerDatasetsAvailableRoute,
  getZonesZoneIdLogsExplorerDatasetsDatasetIdRoute,
  getZonesZoneIdLogsExplorerDatasetsRoute,
  getZonesZoneIdLogsExplorerQuerySqlRoute,
  getZonesZoneIdLogsRayidsRayIdRoute,
  getZonesZoneIdLogsReceivedFieldsRoute,
  getZonesZoneIdLogsReceivedRoute,
  getZonesZoneIdManagedHeadersRoute,
  getZonesZoneIdMediaUsageRoute,
  getZonesZoneIdMonetizationRoute,
  getZonesZoneIdMonetizationRulesRoute,
  getZonesZoneIdMonetizationRulesRuleIdRoute,
  getZonesZoneIdObservabilityTracingRulesRoute,
  getZonesZoneIdObservabilityTracingSettingsRoute,
  getZonesZoneIdOriginCloudRegionsOriginIpRoute,
  getZonesZoneIdOriginCloudRegionsRoute,
  getZonesZoneIdOriginCloudRegionsSupportedRegionsRoute,
  getZonesZoneIdOriginTlsClientAuthCertificateIdRoute,
  getZonesZoneIdOriginTlsClientAuthHostnamesCertificatesCertificateIdRoute,
  getZonesZoneIdOriginTlsClientAuthHostnamesCertificatesRoute,
  getZonesZoneIdOriginTlsClientAuthHostnamesHostnameRoute,
  getZonesZoneIdOriginTlsClientAuthHostnamesRoute,
  getZonesZoneIdOriginTlsClientAuthRoute,
  getZonesZoneIdOriginTlsClientAuthSettingsRoute,
  getZonesZoneIdPagerulesPageruleIdRoute,
  getZonesZoneIdPagerulesRoute,
  getZonesZoneIdPagerulesSettingsRoute,
  getZonesZoneIdPageShieldConnectionsConnectionIdRoute,
  getZonesZoneIdPageShieldConnectionsRoute,
  getZonesZoneIdPageShieldCookiesCookieIdRoute,
  getZonesZoneIdPageShieldCookiesRoute,
  getZonesZoneIdPageShieldPoliciesPolicyIdRoute,
  getZonesZoneIdPageShieldPoliciesRoute,
  getZonesZoneIdPageShieldRoute,
  getZonesZoneIdPageShieldScriptsRoute,
  getZonesZoneIdPageShieldScriptsScriptIdRoute,
  getZonesZoneIdPayPerCrawlCanBeEnabledRoute,
  getZonesZoneIdPayPerCrawlConfigurationRoute,
  getZonesZoneIdPayPerUseCanBeEnabledRoute,
  getZonesZoneIdPayPerUseConfigurationRoute,
  getZonesZoneIdPayPerUseOperatorsRoute,
  getZonesZoneIdPayPerUseUsageStatsRoute,
  getZonesZoneIdPrecursorRoute,
  getZonesZoneIdRateLimitAnalyticsRoute,
  getZonesZoneIdRateLimitsRateLimitIdRoute,
  getZonesZoneIdRateLimitsRoute,
  getZonesZoneIdRoute,
  getZonesZoneIdRulesetsPhasesRulesetPhaseEntrypointRoute,
  getZonesZoneIdRulesetsPhasesRulesetPhaseEntrypointVersionsRoute,
  getZonesZoneIdRulesetsPhasesRulesetPhaseEntrypointVersionsRulesetVersionRoute,
  getZonesZoneIdRulesetsRoute,
  getZonesZoneIdRulesetsRulesetIdRoute,
  getZonesZoneIdRulesetsRulesetIdVersionsRoute,
  getZonesZoneIdRulesetsRulesetIdVersionsRulesetVersionByTagRuleTagRoute,
  getZonesZoneIdRulesetsRulesetIdVersionsRulesetVersionRoute,
  getZonesZoneIdSchemaValidationSchemasHostsRoute,
  getZonesZoneIdSchemaValidationSchemasRoute,
  getZonesZoneIdSchemaValidationSchemasSchemaIdOperationsRoute,
  getZonesZoneIdSchemaValidationSchemasSchemaIdRoute,
  getZonesZoneIdSchemaValidationSettingsOperationsOperationIdRoute,
  getZonesZoneIdSchemaValidationSettingsOperationsRoute,
  getZonesZoneIdSchemaValidationSettingsRoute,
  getZonesZoneIdSecondaryDnsIncomingRoute,
  getZonesZoneIdSecondaryDnsOutgoingRoute,
  getZonesZoneIdSecondaryDnsOutgoingStatusRoute,
  getZonesZoneIdSecurityCenterInsightsAuditLogRoute,
  getZonesZoneIdSecurityCenterInsightsClassRoute,
  getZonesZoneIdSecurityCenterInsightsIssueIdAuditLogRoute,
  getZonesZoneIdSecurityCenterInsightsPartnerCountRoute,
  getZonesZoneIdSecurityCenterInsightsRoute,
  getZonesZoneIdSecurityCenterInsightsScansRoute,
  getZonesZoneIdSecurityCenterInsightsSeverityRoute,
  getZonesZoneIdSecurityCenterInsightsTypeRoute,
  getZonesZoneIdSecurityCenterPartnersPartnerShadowHostsRoute,
  getZonesZoneIdSecurityCenterSecuritytxtRoute,
  getZonesZoneIdSettingsAegisRoute,
  getZonesZoneIdSettingsAutomaticPlatformOptimizationRoute,
  getZonesZoneIdSettingsAutoOriginTlsKexRoute,
  getZonesZoneIdSettingsBinaryAstRoute,
  getZonesZoneIdSettingsCsamScannerThirdPartyRoute,
  getZonesZoneIdSettingsFontsRoute,
  getZonesZoneIdSettingsGoogleTagGatewayConfigRoute,
  getZonesZoneIdSettingsH2PrioritizationRoute,
  getZonesZoneIdSettingsImageResizingRoute,
  getZonesZoneIdSettingsNelRoute,
  getZonesZoneIdSettingsOhttpGatewayRoute,
  getZonesZoneIdSettingsOriginH2MaxStreamsRoute,
  getZonesZoneIdSettingsOriginMaxHttpVersionRoute,
  getZonesZoneIdSettingsOriginTlsComplianceModesRoute,
  getZonesZoneIdSettingsRoute,
  getZonesZoneIdSettingsRumRoute,
  getZonesZoneIdSettingsSettingIdRoute,
  getZonesZoneIdSettingsSpeedBrainRoute,
  getZonesZoneIdSettingsSslAutomaticModeRoute,
  getZonesZoneIdSettingsTransformationsAllowedOriginsRoute,
  getZonesZoneIdSettingsTransformationsC2paRoute,
  getZonesZoneIdSettingsTransformationsConfigRoute,
  getZonesZoneIdSettingsZarazConfigRoute,
  getZonesZoneIdSettingsZarazDefaultRoute,
  getZonesZoneIdSettingsZarazExportRoute,
  getZonesZoneIdSettingsZarazHistoryConfigsRoute,
  getZonesZoneIdSettingsZarazHistoryRoute,
  getZonesZoneIdSettingsZarazWorkflowRoute,
  getZonesZoneIdSmartShieldCacheReserveClearRoute,
  getZonesZoneIdSmartShieldHealthchecksHealthcheckIdRoute,
  getZonesZoneIdSmartShieldHealthchecksRoute,
  getZonesZoneIdSmartShieldRoute,
  getZonesZoneIdSnippetsRoute,
  getZonesZoneIdSnippetsSnippetNameContentRoute,
  getZonesZoneIdSnippetsSnippetNameRoute,
  getZonesZoneIdSnippetsSnippetRulesRoute,
  getZonesZoneIdSpectrumAnalyticsAggregateCurrentRoute,
  getZonesZoneIdSpectrumAnalyticsEventsBytimeRoute,
  getZonesZoneIdSpectrumAnalyticsEventsSummaryRoute,
  getZonesZoneIdSpectrumAppsAppIdRoute,
  getZonesZoneIdSpectrumAppsRoute,
  getZonesZoneIdSpectrumProtocolsRoute,
  getZonesZoneIdSpeedApiAvailabilitiesRoute,
  getZonesZoneIdSpeedApiPagesRoute,
  getZonesZoneIdSpeedApiPagesUrlTestsRoute,
  getZonesZoneIdSpeedApiPagesUrlTestsTestIdRoute,
  getZonesZoneIdSpeedApiPagesUrlTrendRoute,
  getZonesZoneIdSpeedApiScheduleUrlRoute,
  getZonesZoneIdSslCertificatePacksCertificatePackIdRoute,
  getZonesZoneIdSslCertificatePacksQuotaRoute,
  getZonesZoneIdSslCertificatePacksRoute,
  getZonesZoneIdSslRecommendationRoute,
  getZonesZoneIdSslUniversalSettingsRoute,
  getZonesZoneIdSslVerificationRoute,
  getZonesZoneIdStreamUsageRoute,
  getZonesZoneIdSubscriptionRoute,
  getZonesZoneIdTagsRoute,
  getZonesZoneIdTokenValidationConfigConfigIdRoute,
  getZonesZoneIdTokenValidationConfigRoute,
  getZonesZoneIdTokenValidationRulesRoute,
  getZonesZoneIdTokenValidationRulesRuleIdRoute,
  getZonesZoneIdUrlNormalizationRoute,
  getZonesZoneIdWaitingRoomsRoute,
  getZonesZoneIdWaitingRoomsSettingsRoute,
  getZonesZoneIdWaitingRoomsWaitingRoomIdEventsEventIdDetailsRoute,
  getZonesZoneIdWaitingRoomsWaitingRoomIdEventsEventIdRoute,
  getZonesZoneIdWaitingRoomsWaitingRoomIdEventsRoute,
  getZonesZoneIdWaitingRoomsWaitingRoomIdRoute,
  getZonesZoneIdWaitingRoomsWaitingRoomIdRulesRoute,
  getZonesZoneIdWaitingRoomsWaitingRoomIdStatusRoute,
  getZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListEntriesContentListEntryIdentifierRoute,
  getZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListEntriesRoute,
  getZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListRoute,
  getZonesZoneIdWeb3HostnamesIdentifierRoute,
  getZonesZoneIdWeb3HostnamesRoute,
  getZonesZoneIdWorkersRoutesRoute,
  getZonesZoneIdWorkersRoutesRouteIdRoute,
  patchZonesZoneIdAccessAppsAppIdSettingsRoute,
  patchZonesZoneIdAddressingRegionalHostnamesHostnameRoute,
  patchZonesZoneIdApiGatewayDiscoveryOperationsDiscoveryIdRoute,
  patchZonesZoneIdApiGatewayDiscoveryOperationsRoute,
  patchZonesZoneIdApiGatewayLabelsUserNameRoute,
  patchZonesZoneIdApiGatewayOperationsSchemaValidationRoute,
  patchZonesZoneIdApiGatewaySettingsSchemaValidationRoute,
  patchZonesZoneIdApiGatewayUserSchemasSchemaIdRoute,
  patchZonesZoneIdArgoSmartRoutingRoute,
  patchZonesZoneIdArgoTieredCachingRoute,
  patchZonesZoneIdCacheCacheReserveRoute,
  patchZonesZoneIdCacheOriginCloudRegionsBatchRoute,
  patchZonesZoneIdCacheOriginCloudRegionsRoute,
  patchZonesZoneIdCacheRegionalTieredCacheRoute,
  patchZonesZoneIdCacheTieredCacheSmartTopologyEnableRoute,
  patchZonesZoneIdCacheVariantsRoute,
  patchZonesZoneIdClientCertificatesClientCertificateIdRoute,
  patchZonesZoneIdContentUploadScanPayloadsExpressionIdRoute,
  patchZonesZoneIdCtAlertingRoute,
  patchZonesZoneIdCustomCertificatesCustomCertificateIdRoute,
  patchZonesZoneIdCustomHostnamesCustomHostnameIdRoute,
  patchZonesZoneIdDevicesPolicyCertificatesRoute,
  patchZonesZoneIdDnsRecordsDnsRecordIdRoute,
  patchZonesZoneIdDnssecRoute,
  patchZonesZoneIdDnsSettingsRoute,
  patchZonesZoneIdEmailAuthDmarcReportsRoute,
  patchZonesZoneIdEmailRoutingDnsRoute,
  patchZonesZoneIdEmailRoutingRoute,
  patchZonesZoneIdEmailSendingSubdomainsSubdomainIdRoute,
  patchZonesZoneIdEnvironmentsRoute,
  patchZonesZoneIdFirewallAccessRulesRulesRuleIdRoute,
  patchZonesZoneIdFirewallRulesRoute,
  patchZonesZoneIdFirewallRulesRuleIdRoute,
  patchZonesZoneIdFirewallWafPackagesPackageIdGroupsGroupIdRoute,
  patchZonesZoneIdFirewallWafPackagesPackageIdRoute,
  patchZonesZoneIdFirewallWafPackagesPackageIdRulesRuleIdRoute,
  patchZonesZoneIdHealthchecksHealthcheckIdRoute,
  patchZonesZoneIdHoldRoute,
  patchZonesZoneIdKeylessCertificatesKeylessCertificateIdRoute,
  patchZonesZoneIdLoadBalancersLoadBalancerIdRoute,
  patchZonesZoneIdManagedHeadersRoute,
  patchZonesZoneIdMonetizationRulesRuleIdRoute,
  patchZonesZoneIdObservabilityTracingSettingsRoute,
  patchZonesZoneIdPagerulesPageruleIdRoute,
  patchZonesZoneIdPayPerCrawlConfigurationRoute,
  patchZonesZoneIdPayPerUseConfigurationRoute,
  patchZonesZoneIdRoute,
  patchZonesZoneIdRulesetsRulesetIdRulesRuleIdRoute,
  patchZonesZoneIdSchemaValidationSchemasSchemaIdRoute,
  patchZonesZoneIdSchemaValidationSettingsOperationsRoute,
  patchZonesZoneIdSchemaValidationSettingsRoute,
  patchZonesZoneIdSecurityCenterInsightsIssueIdClassificationRoute,
  patchZonesZoneIdSettingsAegisRoute,
  patchZonesZoneIdSettingsAutomaticPlatformOptimizationRoute,
  patchZonesZoneIdSettingsAutoOriginTlsKexRoute,
  patchZonesZoneIdSettingsBinaryAstRoute,
  patchZonesZoneIdSettingsCsamScannerThirdPartyRoute,
  patchZonesZoneIdSettingsFontsRoute,
  patchZonesZoneIdSettingsH2PrioritizationRoute,
  patchZonesZoneIdSettingsImageResizingRoute,
  patchZonesZoneIdSettingsNelRoute,
  patchZonesZoneIdSettingsOriginH2MaxStreamsRoute,
  patchZonesZoneIdSettingsOriginMaxHttpVersionRoute,
  patchZonesZoneIdSettingsOriginTlsComplianceModesRoute,
  patchZonesZoneIdSettingsRoute,
  patchZonesZoneIdSettingsRumRoute,
  patchZonesZoneIdSettingsSettingIdRoute,
  patchZonesZoneIdSettingsSpeedBrainRoute,
  patchZonesZoneIdSettingsSslAutomaticModeRoute,
  patchZonesZoneIdSettingsTransformationsAllowedOriginsRoute,
  patchZonesZoneIdSettingsTransformationsC2paRoute,
  patchZonesZoneIdSettingsTransformationsConfigRoute,
  patchZonesZoneIdSmartShieldHealthchecksHealthcheckIdRoute,
  patchZonesZoneIdSmartShieldRoute,
  patchZonesZoneIdSslCertificatePacksCertificatePackIdRoute,
  patchZonesZoneIdSslUniversalSettingsRoute,
  patchZonesZoneIdSslVerificationCertificatePackIdRoute,
  patchZonesZoneIdTokenValidationConfigConfigIdCredentialsRoute,
  patchZonesZoneIdTokenValidationConfigConfigIdRoute,
  patchZonesZoneIdTokenValidationRulesBulkRoute,
  patchZonesZoneIdTokenValidationRulesRuleIdRoute,
  patchZonesZoneIdWaitingRoomsSettingsRoute,
  patchZonesZoneIdWaitingRoomsWaitingRoomIdEventsEventIdRoute,
  patchZonesZoneIdWaitingRoomsWaitingRoomIdRoute,
  patchZonesZoneIdWaitingRoomsWaitingRoomIdRulesRuleIdRoute,
  patchZonesZoneIdWeb3HostnamesIdentifierRoute,
  postZonesRoute,
  postZonesZoneIdAccessAppsAppIdCaRoute,
  postZonesZoneIdAccessAppsAppIdPoliciesRoute,
  postZonesZoneIdAccessAppsAppIdRevokeTokensRoute,
  postZonesZoneIdAccessAppsRoute,
  postZonesZoneIdAccessCertificatesRoute,
  postZonesZoneIdAccessGroupsRoute,
  postZonesZoneIdAccessIdentityProvidersRoute,
  postZonesZoneIdAccessOrganizationsRevokeUserRoute,
  postZonesZoneIdAccessOrganizationsRoute,
  postZonesZoneIdAccessServiceTokensRoute,
  postZonesZoneIdAcmCustomTrustStoreRoute,
  postZonesZoneIdAcmTotalTlsRoute,
  postZonesZoneIdAddressingRegionalHostnamesRoute,
  postZonesZoneIdAiAuditRobotsBulkRoute,
  postZonesZoneIdApiGatewayExpressionTemplateFallthroughRoute,
  postZonesZoneIdApiGatewayLabelsUserRoute,
  postZonesZoneIdApiGatewayOperationsItemRoute,
  postZonesZoneIdApiGatewayOperationsLabelsRoute,
  postZonesZoneIdApiGatewayOperationsOperationIdLabelsRoute,
  postZonesZoneIdApiGatewayOperationsRoute,
  postZonesZoneIdApiGatewayUserSchemasRoute,
  postZonesZoneIdBotManagementFeedbackRoute,
  postZonesZoneIdCacheCacheReserveClearRoute,
  postZonesZoneIdCacheOriginCloudRegionsRoute,
  postZonesZoneIdCacheTieredCacheSmartTopologyEnableRoute,
  postZonesZoneIdClientCertificatesRoute,
  postZonesZoneIdContentUploadScanDisableRoute,
  postZonesZoneIdContentUploadScanEnableRoute,
  postZonesZoneIdContentUploadScanPayloadsRoute,
  postZonesZoneIdCustomCertificatesRoute,
  postZonesZoneIdCustomCsrsRoute,
  postZonesZoneIdCustomHostnamesRoute,
  postZonesZoneIdCustomPagesAssetsRoute,
  postZonesZoneIdCustomPagesPreviewTokensRoute,
  postZonesZoneIdDnsRecordsBatchRoute,
  postZonesZoneIdDnsRecordsImportRoute,
  postZonesZoneIdDnsRecordsRoute,
  postZonesZoneIdDnsRecordsScanReviewRoute,
  postZonesZoneIdDnsRecordsScanRoute,
  postZonesZoneIdDnsRecordsScanTriggerRoute,
  postZonesZoneIdEmailRoutingDisableRoute,
  postZonesZoneIdEmailRoutingDnsRoute,
  postZonesZoneIdEmailRoutingEnableRoute,
  postZonesZoneIdEmailRoutingRulesRoute,
  postZonesZoneIdEmailRoutingUnlockRoute,
  postZonesZoneIdEmailSendingSubdomainsPreviewRoute,
  postZonesZoneIdEmailSendingSubdomainsRoute,
  postZonesZoneIdEmailSendingSubdomainsSubdomainIdDnsRoute,
  postZonesZoneIdEnvironmentsEnvironmentIdInvalidateCacheRoute,
  postZonesZoneIdEnvironmentsEnvironmentIdPurgeCacheRoute,
  postZonesZoneIdEnvironmentsEnvironmentIdRollbackRoute,
  postZonesZoneIdEnvironmentsRoute,
  postZonesZoneIdFiltersRoute,
  postZonesZoneIdFirewallAccessRulesRulesRoute,
  postZonesZoneIdFirewallLockdownsRoute,
  postZonesZoneIdFirewallRulesRoute,
  postZonesZoneIdFirewallUaRulesRoute,
  postZonesZoneIdFirewallWafOverridesRoute,
  postZonesZoneIdHealthchecksPreviewRoute,
  postZonesZoneIdHealthchecksRoute,
  postZonesZoneIdHoldRoute,
  postZonesZoneIdIntelSinkholesSinkholeIdIngressesRoute,
  postZonesZoneIdInvalidateCacheRoute,
  postZonesZoneIdKeylessCertificatesRoute,
  postZonesZoneIdLeakedCredentialChecksDetectionsRoute,
  postZonesZoneIdLeakedCredentialChecksRoute,
  postZonesZoneIdLoadBalancersRoute,
  postZonesZoneIdLogpushEdgeJobsRoute,
  postZonesZoneIdLogpushJobsRoute,
  postZonesZoneIdLogpushOwnershipRoute,
  postZonesZoneIdLogpushOwnershipValidateRoute,
  postZonesZoneIdLogpushValidateDestinationExistsRoute,
  postZonesZoneIdLogpushValidateDestinationRoute,
  postZonesZoneIdLogpushValidateOriginRoute,
  postZonesZoneIdLogsControlRetentionFlagRoute,
  postZonesZoneIdLogsExplorerDatasetsRoute,
  postZonesZoneIdLogsExplorerQuerySqlRoute,
  postZonesZoneIdMonetizationRoute,
  postZonesZoneIdOriginTlsClientAuthHostnamesCertificatesRoute,
  postZonesZoneIdOriginTlsClientAuthRoute,
  postZonesZoneIdPagerulesRoute,
  postZonesZoneIdPageShieldPoliciesRoute,
  postZonesZoneIdPayPerCrawlConfigurationRoute,
  postZonesZoneIdPayPerUseOperatorsOperatorIdPriceRoute,
  postZonesZoneIdPurgeCacheRoute,
  postZonesZoneIdRateLimitsRoute,
  postZonesZoneIdRulesetsRoute,
  postZonesZoneIdRulesetsRulesetIdRulesRoute,
  postZonesZoneIdSchemaValidationSchemasRoute,
  postZonesZoneIdSecondaryDnsForceAxfrRoute,
  postZonesZoneIdSecondaryDnsIncomingRoute,
  postZonesZoneIdSecondaryDnsOutgoingDisableRoute,
  postZonesZoneIdSecondaryDnsOutgoingEnableRoute,
  postZonesZoneIdSecondaryDnsOutgoingForceNotifyRoute,
  postZonesZoneIdSecondaryDnsOutgoingRoute,
  postZonesZoneIdSecurityCenterInsightsScansRoute,
  postZonesZoneIdSettingsZarazPublishRoute,
  postZonesZoneIdSmartShieldCacheReserveClearRoute,
  postZonesZoneIdSmartShieldHealthchecksRoute,
  postZonesZoneIdSpectrumAppsRoute,
  postZonesZoneIdSpeedApiPagesUrlTestsRoute,
  postZonesZoneIdSpeedApiScheduleUrlRoute,
  postZonesZoneIdSslAnalyzeRoute,
  postZonesZoneIdSslCertificatePacksOrderRoute,
  postZonesZoneIdSubscriptionRoute,
  postZonesZoneIdSubscriptionsRoute,
  postZonesZoneIdTokenValidationConfigRoute,
  postZonesZoneIdTokenValidationRulesBulkRoute,
  postZonesZoneIdTokenValidationRulesPreviewRoute,
  postZonesZoneIdTokenValidationRulesRoute,
  postZonesZoneIdWaitingRoomsPreviewRoute,
  postZonesZoneIdWaitingRoomsRoute,
  postZonesZoneIdWaitingRoomsWaitingRoomIdEventsRoute,
  postZonesZoneIdWaitingRoomsWaitingRoomIdRulesRoute,
  postZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListEntriesRoute,
  postZonesZoneIdWeb3HostnamesRoute,
  postZonesZoneIdWorkersRoutesRoute,
  putZonesZoneIdAccessAppsAppIdPoliciesPolicyIdRoute,
  putZonesZoneIdAccessAppsAppIdRoute,
  putZonesZoneIdAccessAppsAppIdSettingsRoute,
  putZonesZoneIdAccessCertificatesCertificateIdRoute,
  putZonesZoneIdAccessCertificatesSettingsRoute,
  putZonesZoneIdAccessGroupsGroupIdRoute,
  putZonesZoneIdAccessIdentityProvidersIdentityProviderIdRoute,
  putZonesZoneIdAccessOrganizationsRoute,
  putZonesZoneIdAccessServiceTokensServiceTokenIdRoute,
  putZonesZoneIdActivationCheckRoute,
  putZonesZoneIdAiSecurityCustomTopicsRoute,
  putZonesZoneIdAiSecuritySettingsRoute,
  putZonesZoneIdApiGatewayConfigurationRoute,
  putZonesZoneIdApiGatewayLabelsManagedNameResourcesOperationRoute,
  putZonesZoneIdApiGatewayLabelsUserNameResourcesOperationRoute,
  putZonesZoneIdApiGatewayLabelsUserNameRoute,
  putZonesZoneIdApiGatewayOperationsLabelsRoute,
  putZonesZoneIdApiGatewayOperationsOperationIdLabelsRoute,
  putZonesZoneIdApiGatewayOperationsOperationIdSchemaValidationRoute,
  putZonesZoneIdApiGatewaySettingsSchemaValidationRoute,
  putZonesZoneIdBotManagementRoute,
  putZonesZoneIdCacheOriginPostQuantumEncryptionRoute,
  putZonesZoneIdCertificateAuthoritiesHostnameAssociationsRoute,
  putZonesZoneIdCloudConnectorRulesRoute,
  putZonesZoneIdContentUploadScanSettingsRoute,
  putZonesZoneIdCustomCertificatesPrioritizeRoute,
  putZonesZoneIdCustomHostnamesCustomHostnameIdCertificatePackCertificatePackIdCertificatesCertificateIdRoute,
  putZonesZoneIdCustomHostnamesFallbackOriginRoute,
  putZonesZoneIdCustomNsRoute,
  putZonesZoneIdCustomPagesAssetsAssetNameRoute,
  putZonesZoneIdCustomPagesIdentifierRoute,
  putZonesZoneIdDnsRecordsDnsRecordIdRoute,
  putZonesZoneIdEmailRoutingRoute,
  putZonesZoneIdEmailRoutingRulesCatchAllRoute,
  putZonesZoneIdEmailRoutingRulesRuleIdentifierRoute,
  putZonesZoneIdEnvironmentsRoute,
  putZonesZoneIdFiltersFilterIdRoute,
  putZonesZoneIdFiltersRoute,
  putZonesZoneIdFirewallLockdownsLockDownsIdRoute,
  putZonesZoneIdFirewallPayloadLoggingKeyRoute,
  putZonesZoneIdFirewallRulesRoute,
  putZonesZoneIdFirewallRulesRuleIdRoute,
  putZonesZoneIdFirewallUaRulesUaRuleIdRoute,
  putZonesZoneIdFirewallWafOverridesOverridesIdRoute,
  putZonesZoneIdFraudDetectionSettingsRoute,
  putZonesZoneIdHealthchecksHealthcheckIdRoute,
  putZonesZoneIdHostnamesSettingsSettingIdHostnameRoute,
  putZonesZoneIdImagesV1FlowsRoute,
  putZonesZoneIdIntelSinkholesSinkholeIdIngressesIngressIdRoute,
  putZonesZoneIdLeakedCredentialChecksDetectionsDetectionIdRoute,
  putZonesZoneIdLoadBalancersLoadBalancerIdRoute,
  putZonesZoneIdLogpushJobsJobIdRoute,
  putZonesZoneIdLogsExplorerDatasetsDatasetIdRoute,
  putZonesZoneIdMonetizationRulesRoute,
  putZonesZoneIdObservabilityTracingRulesRoute,
  putZonesZoneIdOriginCloudRegionsBatchRoute,
  putZonesZoneIdOriginCloudRegionsOriginIpRoute,
  putZonesZoneIdOriginTlsClientAuthHostnamesRoute,
  putZonesZoneIdOriginTlsClientAuthSettingsRoute,
  putZonesZoneIdPagerulesPageruleIdRoute,
  putZonesZoneIdPageShieldPoliciesPolicyIdRoute,
  putZonesZoneIdPageShieldRoute,
  putZonesZoneIdPrecursorRoute,
  putZonesZoneIdRateLimitsRateLimitIdRoute,
  putZonesZoneIdRulesetsPhasesRulesetPhaseEntrypointRoute,
  putZonesZoneIdRulesetsRulesetIdRoute,
  putZonesZoneIdSchemaValidationSettingsOperationsOperationIdRoute,
  putZonesZoneIdSchemaValidationSettingsRoute,
  putZonesZoneIdSecondaryDnsIncomingRoute,
  putZonesZoneIdSecondaryDnsOutgoingRoute,
  putZonesZoneIdSecurityCenterInsightsIssueIdDismissRoute,
  putZonesZoneIdSecurityCenterSecuritytxtRoute,
  putZonesZoneIdSettingsGoogleTagGatewayConfigRoute,
  putZonesZoneIdSettingsOhttpGatewayRoute,
  putZonesZoneIdSettingsOriginTlsComplianceModesRoute,
  putZonesZoneIdSettingsZarazConfigRoute,
  putZonesZoneIdSettingsZarazHistoryRoute,
  putZonesZoneIdSettingsZarazWorkflowRoute,
  putZonesZoneIdSmartShieldHealthchecksHealthcheckIdRoute,
  putZonesZoneIdSnippetsSnippetNameRoute,
  putZonesZoneIdSnippetsSnippetRulesRoute,
  putZonesZoneIdSpectrumAppsAppIdRoute,
  putZonesZoneIdSubscriptionRoute,
  putZonesZoneIdSubscriptionsRoute,
  putZonesZoneIdTagsRoute,
  putZonesZoneIdTokenValidationConfigConfigIdCredentialsRoute,
  putZonesZoneIdUrlNormalizationRoute,
  putZonesZoneIdWaitingRoomsSettingsRoute,
  putZonesZoneIdWaitingRoomsWaitingRoomIdEventsEventIdRoute,
  putZonesZoneIdWaitingRoomsWaitingRoomIdRoute,
  putZonesZoneIdWaitingRoomsWaitingRoomIdRulesRoute,
  putZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListEntriesContentListEntryIdentifierRoute,
  putZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListRoute,
  putZonesZoneIdWorkersRoutesRouteIdRoute,
} from '../routes'

export const getZonesRouteHandler: RouteHandler<typeof getZonesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesRouteHandler: RouteHandler<typeof postZonesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdRouteHandler: RouteHandler<typeof deleteZonesZoneIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdRouteHandler: RouteHandler<typeof getZonesZoneIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdRouteHandler: RouteHandler<typeof patchZonesZoneIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAccessAppsRouteHandler: RouteHandler<
  typeof getZonesZoneIdAccessAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdAccessAppsRouteHandler: RouteHandler<
  typeof postZonesZoneIdAccessAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAccessAppsCaRouteHandler: RouteHandler<
  typeof getZonesZoneIdAccessAppsCaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdAccessAppsAppIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdAccessAppsAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAccessAppsAppIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdAccessAppsAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdAccessAppsAppIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdAccessAppsAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdAccessAppsAppIdCaRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdAccessAppsAppIdCaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAccessAppsAppIdCaRouteHandler: RouteHandler<
  typeof getZonesZoneIdAccessAppsAppIdCaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdAccessAppsAppIdCaRouteHandler: RouteHandler<
  typeof postZonesZoneIdAccessAppsAppIdCaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAccessAppsAppIdPoliciesRouteHandler: RouteHandler<
  typeof getZonesZoneIdAccessAppsAppIdPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdAccessAppsAppIdPoliciesRouteHandler: RouteHandler<
  typeof postZonesZoneIdAccessAppsAppIdPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdAccessAppsAppIdPoliciesPolicyIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdAccessAppsAppIdPoliciesPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAccessAppsAppIdPoliciesPolicyIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdAccessAppsAppIdPoliciesPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdAccessAppsAppIdPoliciesPolicyIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdAccessAppsAppIdPoliciesPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdAccessAppsAppIdRevokeTokensRouteHandler: RouteHandler<
  typeof postZonesZoneIdAccessAppsAppIdRevokeTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdAccessAppsAppIdSettingsRouteHandler: RouteHandler<
  typeof patchZonesZoneIdAccessAppsAppIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdAccessAppsAppIdSettingsRouteHandler: RouteHandler<
  typeof putZonesZoneIdAccessAppsAppIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAccessAppsAppIdUserPolicyChecksRouteHandler: RouteHandler<
  typeof getZonesZoneIdAccessAppsAppIdUserPolicyChecksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAccessCertificatesRouteHandler: RouteHandler<
  typeof getZonesZoneIdAccessCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdAccessCertificatesRouteHandler: RouteHandler<
  typeof postZonesZoneIdAccessCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAccessCertificatesSettingsRouteHandler: RouteHandler<
  typeof getZonesZoneIdAccessCertificatesSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdAccessCertificatesSettingsRouteHandler: RouteHandler<
  typeof putZonesZoneIdAccessCertificatesSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdAccessCertificatesCertificateIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdAccessCertificatesCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAccessCertificatesCertificateIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdAccessCertificatesCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdAccessCertificatesCertificateIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdAccessCertificatesCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAccessGroupsRouteHandler: RouteHandler<
  typeof getZonesZoneIdAccessGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdAccessGroupsRouteHandler: RouteHandler<
  typeof postZonesZoneIdAccessGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdAccessGroupsGroupIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdAccessGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAccessGroupsGroupIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdAccessGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdAccessGroupsGroupIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdAccessGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAccessIdentityProvidersRouteHandler: RouteHandler<
  typeof getZonesZoneIdAccessIdentityProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdAccessIdentityProvidersRouteHandler: RouteHandler<
  typeof postZonesZoneIdAccessIdentityProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdAccessIdentityProvidersIdentityProviderIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdAccessIdentityProvidersIdentityProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAccessIdentityProvidersIdentityProviderIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdAccessIdentityProvidersIdentityProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdAccessIdentityProvidersIdentityProviderIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdAccessIdentityProvidersIdentityProviderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAccessOrganizationsRouteHandler: RouteHandler<
  typeof getZonesZoneIdAccessOrganizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdAccessOrganizationsRouteHandler: RouteHandler<
  typeof postZonesZoneIdAccessOrganizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdAccessOrganizationsRouteHandler: RouteHandler<
  typeof putZonesZoneIdAccessOrganizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdAccessOrganizationsRevokeUserRouteHandler: RouteHandler<
  typeof postZonesZoneIdAccessOrganizationsRevokeUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAccessServiceTokensRouteHandler: RouteHandler<
  typeof getZonesZoneIdAccessServiceTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdAccessServiceTokensRouteHandler: RouteHandler<
  typeof postZonesZoneIdAccessServiceTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdAccessServiceTokensServiceTokenIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdAccessServiceTokensServiceTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAccessServiceTokensServiceTokenIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdAccessServiceTokensServiceTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdAccessServiceTokensServiceTokenIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdAccessServiceTokensServiceTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAcmCustomTrustStoreRouteHandler: RouteHandler<
  typeof getZonesZoneIdAcmCustomTrustStoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdAcmCustomTrustStoreRouteHandler: RouteHandler<
  typeof postZonesZoneIdAcmCustomTrustStoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdAcmCustomTrustStoreCustomOriginTrustStoreIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdAcmCustomTrustStoreCustomOriginTrustStoreIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAcmCustomTrustStoreCustomOriginTrustStoreIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdAcmCustomTrustStoreCustomOriginTrustStoreIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAcmTotalTlsRouteHandler: RouteHandler<
  typeof getZonesZoneIdAcmTotalTlsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdAcmTotalTlsRouteHandler: RouteHandler<
  typeof postZonesZoneIdAcmTotalTlsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdActivationCheckRouteHandler: RouteHandler<
  typeof putZonesZoneIdActivationCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAddressingRegionalHostnamesRouteHandler: RouteHandler<
  typeof getZonesZoneIdAddressingRegionalHostnamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdAddressingRegionalHostnamesRouteHandler: RouteHandler<
  typeof postZonesZoneIdAddressingRegionalHostnamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdAddressingRegionalHostnamesHostnameRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdAddressingRegionalHostnamesHostnameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAddressingRegionalHostnamesHostnameRouteHandler: RouteHandler<
  typeof getZonesZoneIdAddressingRegionalHostnamesHostnameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdAddressingRegionalHostnamesHostnameRouteHandler: RouteHandler<
  typeof patchZonesZoneIdAddressingRegionalHostnamesHostnameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAiAuditRobotsRouteHandler: RouteHandler<
  typeof getZonesZoneIdAiAuditRobotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdAiAuditRobotsBulkRouteHandler: RouteHandler<
  typeof postZonesZoneIdAiAuditRobotsBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAiSecurityCustomTopicsRouteHandler: RouteHandler<
  typeof getZonesZoneIdAiSecurityCustomTopicsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdAiSecurityCustomTopicsRouteHandler: RouteHandler<
  typeof putZonesZoneIdAiSecurityCustomTopicsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAiSecuritySettingsRouteHandler: RouteHandler<
  typeof getZonesZoneIdAiSecuritySettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdAiSecuritySettingsRouteHandler: RouteHandler<
  typeof putZonesZoneIdAiSecuritySettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAnalyticsColosRouteHandler: RouteHandler<
  typeof getZonesZoneIdAnalyticsColosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAnalyticsDashboardRouteHandler: RouteHandler<
  typeof getZonesZoneIdAnalyticsDashboardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAnalyticsLatencyRouteHandler: RouteHandler<
  typeof getZonesZoneIdAnalyticsLatencyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAnalyticsLatencyColosRouteHandler: RouteHandler<
  typeof getZonesZoneIdAnalyticsLatencyColosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdApiGatewayConfigurationRouteHandler: RouteHandler<
  typeof getZonesZoneIdApiGatewayConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdApiGatewayConfigurationRouteHandler: RouteHandler<
  typeof putZonesZoneIdApiGatewayConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdApiGatewayDiscoveryRouteHandler: RouteHandler<
  typeof getZonesZoneIdApiGatewayDiscoveryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdApiGatewayDiscoveryOperationsRouteHandler: RouteHandler<
  typeof getZonesZoneIdApiGatewayDiscoveryOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdApiGatewayDiscoveryOperationsRouteHandler: RouteHandler<
  typeof patchZonesZoneIdApiGatewayDiscoveryOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdApiGatewayDiscoveryOperationsDiscoveryIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdApiGatewayDiscoveryOperationsDiscoveryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdApiGatewayDiscoveryOperationsDiscoveryIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdApiGatewayDiscoveryOperationsDiscoveryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdApiGatewayExpressionTemplateFallthroughRouteHandler: RouteHandler<
  typeof postZonesZoneIdApiGatewayExpressionTemplateFallthroughRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdApiGatewayLabelsRouteHandler: RouteHandler<
  typeof getZonesZoneIdApiGatewayLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdApiGatewayLabelsManagedNameRouteHandler: RouteHandler<
  typeof getZonesZoneIdApiGatewayLabelsManagedNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdApiGatewayLabelsManagedNameResourcesOperationRouteHandler: RouteHandler<
  typeof putZonesZoneIdApiGatewayLabelsManagedNameResourcesOperationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdApiGatewayLabelsUserRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdApiGatewayLabelsUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdApiGatewayLabelsUserRouteHandler: RouteHandler<
  typeof postZonesZoneIdApiGatewayLabelsUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdApiGatewayLabelsUserNameRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdApiGatewayLabelsUserNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdApiGatewayLabelsUserNameRouteHandler: RouteHandler<
  typeof getZonesZoneIdApiGatewayLabelsUserNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdApiGatewayLabelsUserNameRouteHandler: RouteHandler<
  typeof patchZonesZoneIdApiGatewayLabelsUserNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdApiGatewayLabelsUserNameRouteHandler: RouteHandler<
  typeof putZonesZoneIdApiGatewayLabelsUserNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdApiGatewayLabelsUserNameResourcesOperationRouteHandler: RouteHandler<
  typeof putZonesZoneIdApiGatewayLabelsUserNameResourcesOperationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdApiGatewayOperationsRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdApiGatewayOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdApiGatewayOperationsRouteHandler: RouteHandler<
  typeof getZonesZoneIdApiGatewayOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdApiGatewayOperationsRouteHandler: RouteHandler<
  typeof postZonesZoneIdApiGatewayOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdApiGatewayOperationsItemRouteHandler: RouteHandler<
  typeof postZonesZoneIdApiGatewayOperationsItemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdApiGatewayOperationsLabelsRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdApiGatewayOperationsLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdApiGatewayOperationsLabelsRouteHandler: RouteHandler<
  typeof postZonesZoneIdApiGatewayOperationsLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdApiGatewayOperationsLabelsRouteHandler: RouteHandler<
  typeof putZonesZoneIdApiGatewayOperationsLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdApiGatewayOperationsSchemaValidationRouteHandler: RouteHandler<
  typeof patchZonesZoneIdApiGatewayOperationsSchemaValidationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdApiGatewayOperationsOperationIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdApiGatewayOperationsOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdApiGatewayOperationsOperationIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdApiGatewayOperationsOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdApiGatewayOperationsOperationIdLabelsRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdApiGatewayOperationsOperationIdLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdApiGatewayOperationsOperationIdLabelsRouteHandler: RouteHandler<
  typeof postZonesZoneIdApiGatewayOperationsOperationIdLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdApiGatewayOperationsOperationIdLabelsRouteHandler: RouteHandler<
  typeof putZonesZoneIdApiGatewayOperationsOperationIdLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdApiGatewayOperationsOperationIdSchemaValidationRouteHandler: RouteHandler<
  typeof getZonesZoneIdApiGatewayOperationsOperationIdSchemaValidationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdApiGatewayOperationsOperationIdSchemaValidationRouteHandler: RouteHandler<
  typeof putZonesZoneIdApiGatewayOperationsOperationIdSchemaValidationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdApiGatewaySchemasRouteHandler: RouteHandler<
  typeof getZonesZoneIdApiGatewaySchemasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdApiGatewaySettingsSchemaValidationRouteHandler: RouteHandler<
  typeof getZonesZoneIdApiGatewaySettingsSchemaValidationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdApiGatewaySettingsSchemaValidationRouteHandler: RouteHandler<
  typeof patchZonesZoneIdApiGatewaySettingsSchemaValidationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdApiGatewaySettingsSchemaValidationRouteHandler: RouteHandler<
  typeof putZonesZoneIdApiGatewaySettingsSchemaValidationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdApiGatewayUserSchemasRouteHandler: RouteHandler<
  typeof getZonesZoneIdApiGatewayUserSchemasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdApiGatewayUserSchemasRouteHandler: RouteHandler<
  typeof postZonesZoneIdApiGatewayUserSchemasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdApiGatewayUserSchemasHostsRouteHandler: RouteHandler<
  typeof getZonesZoneIdApiGatewayUserSchemasHostsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdApiGatewayUserSchemasSchemaIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdApiGatewayUserSchemasSchemaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdApiGatewayUserSchemasSchemaIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdApiGatewayUserSchemasSchemaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdApiGatewayUserSchemasSchemaIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdApiGatewayUserSchemasSchemaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdApiGatewayUserSchemasSchemaIdOperationsRouteHandler: RouteHandler<
  typeof getZonesZoneIdApiGatewayUserSchemasSchemaIdOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdArgoSmartRoutingRouteHandler: RouteHandler<
  typeof getZonesZoneIdArgoSmartRoutingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdArgoSmartRoutingRouteHandler: RouteHandler<
  typeof patchZonesZoneIdArgoSmartRoutingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdArgoTieredCachingRouteHandler: RouteHandler<
  typeof getZonesZoneIdArgoTieredCachingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdArgoTieredCachingRouteHandler: RouteHandler<
  typeof patchZonesZoneIdArgoTieredCachingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAvailablePlansRouteHandler: RouteHandler<
  typeof getZonesZoneIdAvailablePlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAvailablePlansPlanIdentifierRouteHandler: RouteHandler<
  typeof getZonesZoneIdAvailablePlansPlanIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdAvailableRatePlansRouteHandler: RouteHandler<
  typeof getZonesZoneIdAvailableRatePlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdBotManagementRouteHandler: RouteHandler<
  typeof getZonesZoneIdBotManagementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdBotManagementRouteHandler: RouteHandler<
  typeof putZonesZoneIdBotManagementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdBotManagementFeedbackRouteHandler: RouteHandler<
  typeof getZonesZoneIdBotManagementFeedbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdBotManagementFeedbackRouteHandler: RouteHandler<
  typeof postZonesZoneIdBotManagementFeedbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdCacheCacheReserveRouteHandler: RouteHandler<
  typeof getZonesZoneIdCacheCacheReserveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdCacheCacheReserveRouteHandler: RouteHandler<
  typeof patchZonesZoneIdCacheCacheReserveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdCacheCacheReserveClearRouteHandler: RouteHandler<
  typeof getZonesZoneIdCacheCacheReserveClearRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdCacheCacheReserveClearRouteHandler: RouteHandler<
  typeof postZonesZoneIdCacheCacheReserveClearRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdCacheOriginCloudRegionsRouteHandler: RouteHandler<
  typeof getZonesZoneIdCacheOriginCloudRegionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdCacheOriginCloudRegionsRouteHandler: RouteHandler<
  typeof patchZonesZoneIdCacheOriginCloudRegionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdCacheOriginCloudRegionsRouteHandler: RouteHandler<
  typeof postZonesZoneIdCacheOriginCloudRegionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdCacheOriginCloudRegionsBatchRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdCacheOriginCloudRegionsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdCacheOriginCloudRegionsBatchRouteHandler: RouteHandler<
  typeof patchZonesZoneIdCacheOriginCloudRegionsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdCacheOriginCloudRegionsSupportedRegionsRouteHandler: RouteHandler<
  typeof getZonesZoneIdCacheOriginCloudRegionsSupportedRegionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdCacheOriginCloudRegionsOriginIpRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdCacheOriginCloudRegionsOriginIpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdCacheOriginCloudRegionsOriginIpRouteHandler: RouteHandler<
  typeof getZonesZoneIdCacheOriginCloudRegionsOriginIpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdCacheOriginPostQuantumEncryptionRouteHandler: RouteHandler<
  typeof getZonesZoneIdCacheOriginPostQuantumEncryptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdCacheOriginPostQuantumEncryptionRouteHandler: RouteHandler<
  typeof putZonesZoneIdCacheOriginPostQuantumEncryptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdCacheRegionalTieredCacheRouteHandler: RouteHandler<
  typeof getZonesZoneIdCacheRegionalTieredCacheRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdCacheRegionalTieredCacheRouteHandler: RouteHandler<
  typeof patchZonesZoneIdCacheRegionalTieredCacheRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdCacheTieredCacheSmartTopologyEnableRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdCacheTieredCacheSmartTopologyEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdCacheTieredCacheSmartTopologyEnableRouteHandler: RouteHandler<
  typeof getZonesZoneIdCacheTieredCacheSmartTopologyEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdCacheTieredCacheSmartTopologyEnableRouteHandler: RouteHandler<
  typeof patchZonesZoneIdCacheTieredCacheSmartTopologyEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdCacheTieredCacheSmartTopologyEnableRouteHandler: RouteHandler<
  typeof postZonesZoneIdCacheTieredCacheSmartTopologyEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdCacheVariantsRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdCacheVariantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdCacheVariantsRouteHandler: RouteHandler<
  typeof getZonesZoneIdCacheVariantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdCacheVariantsRouteHandler: RouteHandler<
  typeof patchZonesZoneIdCacheVariantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdCertificateAuthoritiesHostnameAssociationsRouteHandler: RouteHandler<
  typeof getZonesZoneIdCertificateAuthoritiesHostnameAssociationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdCertificateAuthoritiesHostnameAssociationsRouteHandler: RouteHandler<
  typeof putZonesZoneIdCertificateAuthoritiesHostnameAssociationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdClientCertificatesRouteHandler: RouteHandler<
  typeof getZonesZoneIdClientCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdClientCertificatesRouteHandler: RouteHandler<
  typeof postZonesZoneIdClientCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdClientCertificatesClientCertificateIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdClientCertificatesClientCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdClientCertificatesClientCertificateIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdClientCertificatesClientCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdClientCertificatesClientCertificateIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdClientCertificatesClientCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdCloudConnectorRulesRouteHandler: RouteHandler<
  typeof getZonesZoneIdCloudConnectorRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdCloudConnectorRulesRouteHandler: RouteHandler<
  typeof putZonesZoneIdCloudConnectorRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdContentUploadScanDisableRouteHandler: RouteHandler<
  typeof postZonesZoneIdContentUploadScanDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdContentUploadScanEnableRouteHandler: RouteHandler<
  typeof postZonesZoneIdContentUploadScanEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdContentUploadScanPayloadsRouteHandler: RouteHandler<
  typeof getZonesZoneIdContentUploadScanPayloadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdContentUploadScanPayloadsRouteHandler: RouteHandler<
  typeof postZonesZoneIdContentUploadScanPayloadsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdContentUploadScanPayloadsExpressionIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdContentUploadScanPayloadsExpressionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdContentUploadScanPayloadsExpressionIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdContentUploadScanPayloadsExpressionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdContentUploadScanSettingsRouteHandler: RouteHandler<
  typeof getZonesZoneIdContentUploadScanSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdContentUploadScanSettingsRouteHandler: RouteHandler<
  typeof putZonesZoneIdContentUploadScanSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdCtAlertingRouteHandler: RouteHandler<
  typeof getZonesZoneIdCtAlertingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdCtAlertingRouteHandler: RouteHandler<
  typeof patchZonesZoneIdCtAlertingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdCustomCertificatesRouteHandler: RouteHandler<
  typeof getZonesZoneIdCustomCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdCustomCertificatesRouteHandler: RouteHandler<
  typeof postZonesZoneIdCustomCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdCustomCertificatesPrioritizeRouteHandler: RouteHandler<
  typeof putZonesZoneIdCustomCertificatesPrioritizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdCustomCertificatesCustomCertificateIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdCustomCertificatesCustomCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdCustomCertificatesCustomCertificateIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdCustomCertificatesCustomCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdCustomCertificatesCustomCertificateIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdCustomCertificatesCustomCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdCustomCsrsRouteHandler: RouteHandler<
  typeof getZonesZoneIdCustomCsrsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdCustomCsrsRouteHandler: RouteHandler<
  typeof postZonesZoneIdCustomCsrsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdCustomCsrsCustomCsrIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdCustomCsrsCustomCsrIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdCustomCsrsCustomCsrIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdCustomCsrsCustomCsrIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdCustomHostnamesRouteHandler: RouteHandler<
  typeof getZonesZoneIdCustomHostnamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdCustomHostnamesRouteHandler: RouteHandler<
  typeof postZonesZoneIdCustomHostnamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdCustomHostnamesFallbackOriginRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdCustomHostnamesFallbackOriginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdCustomHostnamesFallbackOriginRouteHandler: RouteHandler<
  typeof getZonesZoneIdCustomHostnamesFallbackOriginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdCustomHostnamesFallbackOriginRouteHandler: RouteHandler<
  typeof putZonesZoneIdCustomHostnamesFallbackOriginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdCustomHostnamesQuotaRouteHandler: RouteHandler<
  typeof getZonesZoneIdCustomHostnamesQuotaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdCustomHostnamesCustomHostnameIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdCustomHostnamesCustomHostnameIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdCustomHostnamesCustomHostnameIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdCustomHostnamesCustomHostnameIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdCustomHostnamesCustomHostnameIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdCustomHostnamesCustomHostnameIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdCustomHostnamesCustomHostnameIdCertificatePackCertificatePackIdCertificatesCertificateIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdCustomHostnamesCustomHostnameIdCertificatePackCertificatePackIdCertificatesCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdCustomHostnamesCustomHostnameIdCertificatePackCertificatePackIdCertificatesCertificateIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdCustomHostnamesCustomHostnameIdCertificatePackCertificatePackIdCertificatesCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdCustomNsRouteHandler: RouteHandler<
  typeof getZonesZoneIdCustomNsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdCustomNsRouteHandler: RouteHandler<
  typeof putZonesZoneIdCustomNsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdCustomPagesRouteHandler: RouteHandler<
  typeof getZonesZoneIdCustomPagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdCustomPagesAssetsRouteHandler: RouteHandler<
  typeof getZonesZoneIdCustomPagesAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdCustomPagesAssetsRouteHandler: RouteHandler<
  typeof postZonesZoneIdCustomPagesAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdCustomPagesAssetsAssetNameRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdCustomPagesAssetsAssetNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdCustomPagesAssetsAssetNameRouteHandler: RouteHandler<
  typeof getZonesZoneIdCustomPagesAssetsAssetNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdCustomPagesAssetsAssetNameRouteHandler: RouteHandler<
  typeof putZonesZoneIdCustomPagesAssetsAssetNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdCustomPagesPreviewTokensRouteHandler: RouteHandler<
  typeof postZonesZoneIdCustomPagesPreviewTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdCustomPagesIdentifierRouteHandler: RouteHandler<
  typeof getZonesZoneIdCustomPagesIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdCustomPagesIdentifierRouteHandler: RouteHandler<
  typeof putZonesZoneIdCustomPagesIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdDcvDelegationUuidRouteHandler: RouteHandler<
  typeof getZonesZoneIdDcvDelegationUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdDevicesPolicyCertificatesRouteHandler: RouteHandler<
  typeof getZonesZoneIdDevicesPolicyCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdDevicesPolicyCertificatesRouteHandler: RouteHandler<
  typeof patchZonesZoneIdDevicesPolicyCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdDnsAnalyticsReportRouteHandler: RouteHandler<
  typeof getZonesZoneIdDnsAnalyticsReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdDnsAnalyticsReportBytimeRouteHandler: RouteHandler<
  typeof getZonesZoneIdDnsAnalyticsReportBytimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdDnsRecordsRouteHandler: RouteHandler<
  typeof getZonesZoneIdDnsRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdDnsRecordsRouteHandler: RouteHandler<
  typeof postZonesZoneIdDnsRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdDnsRecordsBatchRouteHandler: RouteHandler<
  typeof postZonesZoneIdDnsRecordsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdDnsRecordsExportRouteHandler: RouteHandler<
  typeof getZonesZoneIdDnsRecordsExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdDnsRecordsImportRouteHandler: RouteHandler<
  typeof postZonesZoneIdDnsRecordsImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdDnsRecordsScanRouteHandler: RouteHandler<
  typeof postZonesZoneIdDnsRecordsScanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdDnsRecordsScanReviewRouteHandler: RouteHandler<
  typeof getZonesZoneIdDnsRecordsScanReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdDnsRecordsScanReviewRouteHandler: RouteHandler<
  typeof postZonesZoneIdDnsRecordsScanReviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdDnsRecordsScanTriggerRouteHandler: RouteHandler<
  typeof postZonesZoneIdDnsRecordsScanTriggerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdDnsRecordsUsageRouteHandler: RouteHandler<
  typeof getZonesZoneIdDnsRecordsUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdDnsRecordsDnsRecordIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdDnsRecordsDnsRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdDnsRecordsDnsRecordIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdDnsRecordsDnsRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdDnsRecordsDnsRecordIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdDnsRecordsDnsRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdDnsRecordsDnsRecordIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdDnsRecordsDnsRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdDnsSettingsRouteHandler: RouteHandler<
  typeof getZonesZoneIdDnsSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdDnsSettingsRouteHandler: RouteHandler<
  typeof patchZonesZoneIdDnsSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdDnssecRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdDnssecRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdDnssecRouteHandler: RouteHandler<
  typeof getZonesZoneIdDnssecRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdDnssecRouteHandler: RouteHandler<
  typeof patchZonesZoneIdDnssecRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdDnssecZskRouteHandler: RouteHandler<
  typeof getZonesZoneIdDnssecZskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdEmailAuthDmarcReportsRouteHandler: RouteHandler<
  typeof getZonesZoneIdEmailAuthDmarcReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdEmailAuthDmarcReportsRouteHandler: RouteHandler<
  typeof patchZonesZoneIdEmailAuthDmarcReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdEmailAuthSpfInspectRouteHandler: RouteHandler<
  typeof getZonesZoneIdEmailAuthSpfInspectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdEmailRoutingRouteHandler: RouteHandler<
  typeof getZonesZoneIdEmailRoutingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdEmailRoutingRouteHandler: RouteHandler<
  typeof patchZonesZoneIdEmailRoutingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdEmailRoutingRouteHandler: RouteHandler<
  typeof putZonesZoneIdEmailRoutingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdEmailRoutingDisableRouteHandler: RouteHandler<
  typeof postZonesZoneIdEmailRoutingDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdEmailRoutingDnsRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdEmailRoutingDnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdEmailRoutingDnsRouteHandler: RouteHandler<
  typeof getZonesZoneIdEmailRoutingDnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdEmailRoutingDnsRouteHandler: RouteHandler<
  typeof patchZonesZoneIdEmailRoutingDnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdEmailRoutingDnsRouteHandler: RouteHandler<
  typeof postZonesZoneIdEmailRoutingDnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdEmailRoutingEnableRouteHandler: RouteHandler<
  typeof postZonesZoneIdEmailRoutingEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdEmailRoutingRulesRouteHandler: RouteHandler<
  typeof getZonesZoneIdEmailRoutingRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdEmailRoutingRulesRouteHandler: RouteHandler<
  typeof postZonesZoneIdEmailRoutingRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdEmailRoutingRulesCatchAllRouteHandler: RouteHandler<
  typeof getZonesZoneIdEmailRoutingRulesCatchAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdEmailRoutingRulesCatchAllRouteHandler: RouteHandler<
  typeof putZonesZoneIdEmailRoutingRulesCatchAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdEmailRoutingRulesRuleIdentifierRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdEmailRoutingRulesRuleIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdEmailRoutingRulesRuleIdentifierRouteHandler: RouteHandler<
  typeof getZonesZoneIdEmailRoutingRulesRuleIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdEmailRoutingRulesRuleIdentifierRouteHandler: RouteHandler<
  typeof putZonesZoneIdEmailRoutingRulesRuleIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdEmailRoutingUnlockRouteHandler: RouteHandler<
  typeof postZonesZoneIdEmailRoutingUnlockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdEmailSendingSubdomainsRouteHandler: RouteHandler<
  typeof getZonesZoneIdEmailSendingSubdomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdEmailSendingSubdomainsRouteHandler: RouteHandler<
  typeof postZonesZoneIdEmailSendingSubdomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdEmailSendingSubdomainsPreviewRouteHandler: RouteHandler<
  typeof postZonesZoneIdEmailSendingSubdomainsPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdEmailSendingSubdomainsSubdomainIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdEmailSendingSubdomainsSubdomainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdEmailSendingSubdomainsSubdomainIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdEmailSendingSubdomainsSubdomainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdEmailSendingSubdomainsSubdomainIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdEmailSendingSubdomainsSubdomainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdEmailSendingSubdomainsSubdomainIdDnsRouteHandler: RouteHandler<
  typeof getZonesZoneIdEmailSendingSubdomainsSubdomainIdDnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdEmailSendingSubdomainsSubdomainIdDnsRouteHandler: RouteHandler<
  typeof postZonesZoneIdEmailSendingSubdomainsSubdomainIdDnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdEmailSendingSubdomainsSubdomainIdDnsStatusRouteHandler: RouteHandler<
  typeof getZonesZoneIdEmailSendingSubdomainsSubdomainIdDnsStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdEmailSendingSubdomainsSubdomainIdReputationComplaintsRouteHandler: RouteHandler<
  typeof getZonesZoneIdEmailSendingSubdomainsSubdomainIdReputationComplaintsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdEntitlementsRouteHandler: RouteHandler<
  typeof getZonesZoneIdEntitlementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdEnvironmentsRouteHandler: RouteHandler<
  typeof getZonesZoneIdEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdEnvironmentsRouteHandler: RouteHandler<
  typeof patchZonesZoneIdEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdEnvironmentsRouteHandler: RouteHandler<
  typeof postZonesZoneIdEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdEnvironmentsRouteHandler: RouteHandler<
  typeof putZonesZoneIdEnvironmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdEnvironmentsEnvironmentIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdEnvironmentsEnvironmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdEnvironmentsEnvironmentIdInvalidateCacheRouteHandler: RouteHandler<
  typeof postZonesZoneIdEnvironmentsEnvironmentIdInvalidateCacheRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdEnvironmentsEnvironmentIdPurgeCacheRouteHandler: RouteHandler<
  typeof postZonesZoneIdEnvironmentsEnvironmentIdPurgeCacheRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdEnvironmentsEnvironmentIdRollbackRouteHandler: RouteHandler<
  typeof postZonesZoneIdEnvironmentsEnvironmentIdRollbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdFiltersRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdFiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdFiltersRouteHandler: RouteHandler<
  typeof getZonesZoneIdFiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdFiltersRouteHandler: RouteHandler<
  typeof postZonesZoneIdFiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdFiltersRouteHandler: RouteHandler<
  typeof putZonesZoneIdFiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdFiltersFilterIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdFiltersFilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdFiltersFilterIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdFiltersFilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdFiltersFilterIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdFiltersFilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdFirewallAccessRulesRulesRouteHandler: RouteHandler<
  typeof getZonesZoneIdFirewallAccessRulesRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdFirewallAccessRulesRulesRouteHandler: RouteHandler<
  typeof postZonesZoneIdFirewallAccessRulesRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdFirewallAccessRulesRulesRuleIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdFirewallAccessRulesRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdFirewallAccessRulesRulesRuleIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdFirewallAccessRulesRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdFirewallLockdownsRouteHandler: RouteHandler<
  typeof getZonesZoneIdFirewallLockdownsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdFirewallLockdownsRouteHandler: RouteHandler<
  typeof postZonesZoneIdFirewallLockdownsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdFirewallLockdownsLockDownsIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdFirewallLockdownsLockDownsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdFirewallLockdownsLockDownsIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdFirewallLockdownsLockDownsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdFirewallLockdownsLockDownsIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdFirewallLockdownsLockDownsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdFirewallPayloadLoggingKeyRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdFirewallPayloadLoggingKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdFirewallPayloadLoggingKeyRouteHandler: RouteHandler<
  typeof getZonesZoneIdFirewallPayloadLoggingKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdFirewallPayloadLoggingKeyRouteHandler: RouteHandler<
  typeof putZonesZoneIdFirewallPayloadLoggingKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdFirewallRulesRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdFirewallRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdFirewallRulesRouteHandler: RouteHandler<
  typeof getZonesZoneIdFirewallRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdFirewallRulesRouteHandler: RouteHandler<
  typeof patchZonesZoneIdFirewallRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdFirewallRulesRouteHandler: RouteHandler<
  typeof postZonesZoneIdFirewallRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdFirewallRulesRouteHandler: RouteHandler<
  typeof putZonesZoneIdFirewallRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdFirewallRulesRuleIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdFirewallRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdFirewallRulesRuleIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdFirewallRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdFirewallRulesRuleIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdFirewallRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdFirewallRulesRuleIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdFirewallRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdFirewallUaRulesRouteHandler: RouteHandler<
  typeof getZonesZoneIdFirewallUaRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdFirewallUaRulesRouteHandler: RouteHandler<
  typeof postZonesZoneIdFirewallUaRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdFirewallUaRulesUaRuleIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdFirewallUaRulesUaRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdFirewallUaRulesUaRuleIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdFirewallUaRulesUaRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdFirewallUaRulesUaRuleIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdFirewallUaRulesUaRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdFirewallWafOverridesRouteHandler: RouteHandler<
  typeof getZonesZoneIdFirewallWafOverridesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdFirewallWafOverridesRouteHandler: RouteHandler<
  typeof postZonesZoneIdFirewallWafOverridesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdFirewallWafOverridesOverridesIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdFirewallWafOverridesOverridesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdFirewallWafOverridesOverridesIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdFirewallWafOverridesOverridesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdFirewallWafOverridesOverridesIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdFirewallWafOverridesOverridesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdFirewallWafPackagesRouteHandler: RouteHandler<
  typeof getZonesZoneIdFirewallWafPackagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdFirewallWafPackagesPackageIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdFirewallWafPackagesPackageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdFirewallWafPackagesPackageIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdFirewallWafPackagesPackageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdFirewallWafPackagesPackageIdGroupsRouteHandler: RouteHandler<
  typeof getZonesZoneIdFirewallWafPackagesPackageIdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdFirewallWafPackagesPackageIdGroupsGroupIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdFirewallWafPackagesPackageIdGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdFirewallWafPackagesPackageIdGroupsGroupIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdFirewallWafPackagesPackageIdGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdFirewallWafPackagesPackageIdRulesRouteHandler: RouteHandler<
  typeof getZonesZoneIdFirewallWafPackagesPackageIdRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdFirewallWafPackagesPackageIdRulesRuleIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdFirewallWafPackagesPackageIdRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdFirewallWafPackagesPackageIdRulesRuleIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdFirewallWafPackagesPackageIdRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdFraudDetectionSettingsRouteHandler: RouteHandler<
  typeof getZonesZoneIdFraudDetectionSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdFraudDetectionSettingsRouteHandler: RouteHandler<
  typeof putZonesZoneIdFraudDetectionSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdHealthchecksRouteHandler: RouteHandler<
  typeof getZonesZoneIdHealthchecksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdHealthchecksRouteHandler: RouteHandler<
  typeof postZonesZoneIdHealthchecksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdHealthchecksPreviewRouteHandler: RouteHandler<
  typeof postZonesZoneIdHealthchecksPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdHealthchecksPreviewHealthcheckIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdHealthchecksPreviewHealthcheckIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdHealthchecksPreviewHealthcheckIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdHealthchecksPreviewHealthcheckIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdHealthchecksHealthcheckIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdHealthchecksHealthcheckIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdHealthchecksHealthcheckIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdHealthchecksHealthcheckIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdHealthchecksHealthcheckIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdHealthchecksHealthcheckIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdHealthchecksHealthcheckIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdHealthchecksHealthcheckIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdHoldRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdHoldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdHoldRouteHandler: RouteHandler<typeof getZonesZoneIdHoldRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdHoldRouteHandler: RouteHandler<
  typeof patchZonesZoneIdHoldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdHoldRouteHandler: RouteHandler<
  typeof postZonesZoneIdHoldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdHostnamesSettingsSettingIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdHostnamesSettingsSettingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdHostnamesSettingsSettingIdHostnameRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdHostnamesSettingsSettingIdHostnameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdHostnamesSettingsSettingIdHostnameRouteHandler: RouteHandler<
  typeof getZonesZoneIdHostnamesSettingsSettingIdHostnameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdHostnamesSettingsSettingIdHostnameRouteHandler: RouteHandler<
  typeof putZonesZoneIdHostnamesSettingsSettingIdHostnameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdImagesV1FlowsRouteHandler: RouteHandler<
  typeof getZonesZoneIdImagesV1FlowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdImagesV1FlowsRouteHandler: RouteHandler<
  typeof putZonesZoneIdImagesV1FlowsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdIntelSinkholesSinkholeIdIngressesRouteHandler: RouteHandler<
  typeof postZonesZoneIdIntelSinkholesSinkholeIdIngressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdIntelSinkholesSinkholeIdIngressesIngressIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdIntelSinkholesSinkholeIdIngressesIngressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdIntelSinkholesSinkholeIdIngressesIngressIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdIntelSinkholesSinkholeIdIngressesIngressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdIntelSinkholesSinkholeIdIngressesIngressIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdIntelSinkholesSinkholeIdIngressesIngressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdInvalidateCacheRouteHandler: RouteHandler<
  typeof postZonesZoneIdInvalidateCacheRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdKeylessCertificatesRouteHandler: RouteHandler<
  typeof getZonesZoneIdKeylessCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdKeylessCertificatesRouteHandler: RouteHandler<
  typeof postZonesZoneIdKeylessCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdKeylessCertificatesKeylessCertificateIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdKeylessCertificatesKeylessCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdKeylessCertificatesKeylessCertificateIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdKeylessCertificatesKeylessCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdKeylessCertificatesKeylessCertificateIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdKeylessCertificatesKeylessCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdLeakedCredentialChecksRouteHandler: RouteHandler<
  typeof getZonesZoneIdLeakedCredentialChecksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdLeakedCredentialChecksRouteHandler: RouteHandler<
  typeof postZonesZoneIdLeakedCredentialChecksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdLeakedCredentialChecksDetectionsRouteHandler: RouteHandler<
  typeof getZonesZoneIdLeakedCredentialChecksDetectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdLeakedCredentialChecksDetectionsRouteHandler: RouteHandler<
  typeof postZonesZoneIdLeakedCredentialChecksDetectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdLeakedCredentialChecksDetectionsDetectionIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdLeakedCredentialChecksDetectionsDetectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdLeakedCredentialChecksDetectionsDetectionIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdLeakedCredentialChecksDetectionsDetectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdLeakedCredentialChecksDetectionsDetectionIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdLeakedCredentialChecksDetectionsDetectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdLoadBalancersRouteHandler: RouteHandler<
  typeof getZonesZoneIdLoadBalancersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdLoadBalancersRouteHandler: RouteHandler<
  typeof postZonesZoneIdLoadBalancersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdLoadBalancersLoadBalancerIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdLoadBalancersLoadBalancerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdLoadBalancersLoadBalancerIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdLoadBalancersLoadBalancerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdLoadBalancersLoadBalancerIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdLoadBalancersLoadBalancerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdLoadBalancersLoadBalancerIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdLoadBalancersLoadBalancerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdLogpushDatasetsDatasetIdFieldsRouteHandler: RouteHandler<
  typeof getZonesZoneIdLogpushDatasetsDatasetIdFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdLogpushDatasetsDatasetIdJobsRouteHandler: RouteHandler<
  typeof getZonesZoneIdLogpushDatasetsDatasetIdJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdLogpushEdgeJobsRouteHandler: RouteHandler<
  typeof getZonesZoneIdLogpushEdgeJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdLogpushEdgeJobsRouteHandler: RouteHandler<
  typeof postZonesZoneIdLogpushEdgeJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdLogpushJobsRouteHandler: RouteHandler<
  typeof getZonesZoneIdLogpushJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdLogpushJobsRouteHandler: RouteHandler<
  typeof postZonesZoneIdLogpushJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdLogpushJobsJobIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdLogpushJobsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdLogpushJobsJobIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdLogpushJobsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdLogpushJobsJobIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdLogpushJobsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdLogpushOwnershipRouteHandler: RouteHandler<
  typeof postZonesZoneIdLogpushOwnershipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdLogpushOwnershipValidateRouteHandler: RouteHandler<
  typeof postZonesZoneIdLogpushOwnershipValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdLogpushValidateDestinationRouteHandler: RouteHandler<
  typeof postZonesZoneIdLogpushValidateDestinationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdLogpushValidateDestinationExistsRouteHandler: RouteHandler<
  typeof postZonesZoneIdLogpushValidateDestinationExistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdLogpushValidateOriginRouteHandler: RouteHandler<
  typeof postZonesZoneIdLogpushValidateOriginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdLogsControlRetentionFlagRouteHandler: RouteHandler<
  typeof getZonesZoneIdLogsControlRetentionFlagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdLogsControlRetentionFlagRouteHandler: RouteHandler<
  typeof postZonesZoneIdLogsControlRetentionFlagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdLogsExplorerDatasetsRouteHandler: RouteHandler<
  typeof getZonesZoneIdLogsExplorerDatasetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdLogsExplorerDatasetsRouteHandler: RouteHandler<
  typeof postZonesZoneIdLogsExplorerDatasetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdLogsExplorerDatasetsAvailableRouteHandler: RouteHandler<
  typeof getZonesZoneIdLogsExplorerDatasetsAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdLogsExplorerDatasetsDatasetIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdLogsExplorerDatasetsDatasetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdLogsExplorerDatasetsDatasetIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdLogsExplorerDatasetsDatasetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdLogsExplorerDatasetsDatasetIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdLogsExplorerDatasetsDatasetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdLogsExplorerQuerySqlRouteHandler: RouteHandler<
  typeof getZonesZoneIdLogsExplorerQuerySqlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdLogsExplorerQuerySqlRouteHandler: RouteHandler<
  typeof postZonesZoneIdLogsExplorerQuerySqlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdLogsRayidsRayIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdLogsRayidsRayIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdLogsReceivedRouteHandler: RouteHandler<
  typeof getZonesZoneIdLogsReceivedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdLogsReceivedFieldsRouteHandler: RouteHandler<
  typeof getZonesZoneIdLogsReceivedFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdManagedHeadersRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdManagedHeadersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdManagedHeadersRouteHandler: RouteHandler<
  typeof getZonesZoneIdManagedHeadersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdManagedHeadersRouteHandler: RouteHandler<
  typeof patchZonesZoneIdManagedHeadersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdMediaUsageRouteHandler: RouteHandler<
  typeof getZonesZoneIdMediaUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdMonetizationRouteHandler: RouteHandler<
  typeof getZonesZoneIdMonetizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdMonetizationRouteHandler: RouteHandler<
  typeof postZonesZoneIdMonetizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdMonetizationRulesRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdMonetizationRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdMonetizationRulesRouteHandler: RouteHandler<
  typeof getZonesZoneIdMonetizationRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdMonetizationRulesRouteHandler: RouteHandler<
  typeof putZonesZoneIdMonetizationRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdMonetizationRulesRuleIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdMonetizationRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdMonetizationRulesRuleIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdMonetizationRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdMonetizationRulesRuleIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdMonetizationRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdObservabilityTracingRulesRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdObservabilityTracingRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdObservabilityTracingRulesRouteHandler: RouteHandler<
  typeof getZonesZoneIdObservabilityTracingRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdObservabilityTracingRulesRouteHandler: RouteHandler<
  typeof putZonesZoneIdObservabilityTracingRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdObservabilityTracingSettingsRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdObservabilityTracingSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdObservabilityTracingSettingsRouteHandler: RouteHandler<
  typeof getZonesZoneIdObservabilityTracingSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdObservabilityTracingSettingsRouteHandler: RouteHandler<
  typeof patchZonesZoneIdObservabilityTracingSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdOriginCloudRegionsRouteHandler: RouteHandler<
  typeof getZonesZoneIdOriginCloudRegionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdOriginCloudRegionsBatchRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdOriginCloudRegionsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdOriginCloudRegionsBatchRouteHandler: RouteHandler<
  typeof putZonesZoneIdOriginCloudRegionsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdOriginCloudRegionsSupportedRegionsRouteHandler: RouteHandler<
  typeof getZonesZoneIdOriginCloudRegionsSupportedRegionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdOriginCloudRegionsOriginIpRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdOriginCloudRegionsOriginIpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdOriginCloudRegionsOriginIpRouteHandler: RouteHandler<
  typeof getZonesZoneIdOriginCloudRegionsOriginIpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdOriginCloudRegionsOriginIpRouteHandler: RouteHandler<
  typeof putZonesZoneIdOriginCloudRegionsOriginIpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdOriginTlsClientAuthRouteHandler: RouteHandler<
  typeof getZonesZoneIdOriginTlsClientAuthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdOriginTlsClientAuthRouteHandler: RouteHandler<
  typeof postZonesZoneIdOriginTlsClientAuthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdOriginTlsClientAuthHostnamesRouteHandler: RouteHandler<
  typeof getZonesZoneIdOriginTlsClientAuthHostnamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdOriginTlsClientAuthHostnamesRouteHandler: RouteHandler<
  typeof putZonesZoneIdOriginTlsClientAuthHostnamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdOriginTlsClientAuthHostnamesCertificatesRouteHandler: RouteHandler<
  typeof getZonesZoneIdOriginTlsClientAuthHostnamesCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdOriginTlsClientAuthHostnamesCertificatesRouteHandler: RouteHandler<
  typeof postZonesZoneIdOriginTlsClientAuthHostnamesCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdOriginTlsClientAuthHostnamesCertificatesCertificateIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdOriginTlsClientAuthHostnamesCertificatesCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdOriginTlsClientAuthHostnamesCertificatesCertificateIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdOriginTlsClientAuthHostnamesCertificatesCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdOriginTlsClientAuthHostnamesHostnameRouteHandler: RouteHandler<
  typeof getZonesZoneIdOriginTlsClientAuthHostnamesHostnameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdOriginTlsClientAuthSettingsRouteHandler: RouteHandler<
  typeof getZonesZoneIdOriginTlsClientAuthSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdOriginTlsClientAuthSettingsRouteHandler: RouteHandler<
  typeof putZonesZoneIdOriginTlsClientAuthSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdOriginTlsClientAuthCertificateIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdOriginTlsClientAuthCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdOriginTlsClientAuthCertificateIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdOriginTlsClientAuthCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdPageShieldRouteHandler: RouteHandler<
  typeof getZonesZoneIdPageShieldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdPageShieldRouteHandler: RouteHandler<
  typeof putZonesZoneIdPageShieldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdPageShieldConnectionsRouteHandler: RouteHandler<
  typeof getZonesZoneIdPageShieldConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdPageShieldConnectionsConnectionIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdPageShieldConnectionsConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdPageShieldCookiesRouteHandler: RouteHandler<
  typeof getZonesZoneIdPageShieldCookiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdPageShieldCookiesCookieIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdPageShieldCookiesCookieIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdPageShieldPoliciesRouteHandler: RouteHandler<
  typeof getZonesZoneIdPageShieldPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdPageShieldPoliciesRouteHandler: RouteHandler<
  typeof postZonesZoneIdPageShieldPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdPageShieldPoliciesPolicyIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdPageShieldPoliciesPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdPageShieldPoliciesPolicyIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdPageShieldPoliciesPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdPageShieldPoliciesPolicyIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdPageShieldPoliciesPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdPageShieldScriptsRouteHandler: RouteHandler<
  typeof getZonesZoneIdPageShieldScriptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdPageShieldScriptsScriptIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdPageShieldScriptsScriptIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdPagerulesRouteHandler: RouteHandler<
  typeof getZonesZoneIdPagerulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdPagerulesRouteHandler: RouteHandler<
  typeof postZonesZoneIdPagerulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdPagerulesSettingsRouteHandler: RouteHandler<
  typeof getZonesZoneIdPagerulesSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdPagerulesPageruleIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdPagerulesPageruleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdPagerulesPageruleIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdPagerulesPageruleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdPagerulesPageruleIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdPagerulesPageruleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdPagerulesPageruleIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdPagerulesPageruleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdPayPerCrawlCanBeEnabledRouteHandler: RouteHandler<
  typeof getZonesZoneIdPayPerCrawlCanBeEnabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdPayPerCrawlConfigurationRouteHandler: RouteHandler<
  typeof getZonesZoneIdPayPerCrawlConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdPayPerCrawlConfigurationRouteHandler: RouteHandler<
  typeof patchZonesZoneIdPayPerCrawlConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdPayPerCrawlConfigurationRouteHandler: RouteHandler<
  typeof postZonesZoneIdPayPerCrawlConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdPayPerUseCanBeEnabledRouteHandler: RouteHandler<
  typeof getZonesZoneIdPayPerUseCanBeEnabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdPayPerUseConfigurationRouteHandler: RouteHandler<
  typeof getZonesZoneIdPayPerUseConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdPayPerUseConfigurationRouteHandler: RouteHandler<
  typeof patchZonesZoneIdPayPerUseConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdPayPerUseOperatorsRouteHandler: RouteHandler<
  typeof getZonesZoneIdPayPerUseOperatorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdPayPerUseOperatorsOperatorIdPriceRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdPayPerUseOperatorsOperatorIdPriceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdPayPerUseOperatorsOperatorIdPriceRouteHandler: RouteHandler<
  typeof postZonesZoneIdPayPerUseOperatorsOperatorIdPriceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdPayPerUseUsageStatsRouteHandler: RouteHandler<
  typeof getZonesZoneIdPayPerUseUsageStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdPrecursorRouteHandler: RouteHandler<
  typeof getZonesZoneIdPrecursorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdPrecursorRouteHandler: RouteHandler<
  typeof putZonesZoneIdPrecursorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdPurgeCacheRouteHandler: RouteHandler<
  typeof postZonesZoneIdPurgeCacheRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdRateLimitAnalyticsRouteHandler: RouteHandler<
  typeof getZonesZoneIdRateLimitAnalyticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdRateLimitsRouteHandler: RouteHandler<
  typeof getZonesZoneIdRateLimitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdRateLimitsRouteHandler: RouteHandler<
  typeof postZonesZoneIdRateLimitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdRateLimitsRateLimitIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdRateLimitsRateLimitIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdRateLimitsRateLimitIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdRateLimitsRateLimitIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdRateLimitsRateLimitIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdRateLimitsRateLimitIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdRulesetsRouteHandler: RouteHandler<
  typeof getZonesZoneIdRulesetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdRulesetsRouteHandler: RouteHandler<
  typeof postZonesZoneIdRulesetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdRulesetsPhasesRulesetPhaseEntrypointRouteHandler: RouteHandler<
  typeof getZonesZoneIdRulesetsPhasesRulesetPhaseEntrypointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdRulesetsPhasesRulesetPhaseEntrypointRouteHandler: RouteHandler<
  typeof putZonesZoneIdRulesetsPhasesRulesetPhaseEntrypointRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdRulesetsPhasesRulesetPhaseEntrypointVersionsRouteHandler: RouteHandler<
  typeof getZonesZoneIdRulesetsPhasesRulesetPhaseEntrypointVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdRulesetsPhasesRulesetPhaseEntrypointVersionsRulesetVersionRouteHandler: RouteHandler<
  typeof getZonesZoneIdRulesetsPhasesRulesetPhaseEntrypointVersionsRulesetVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdRulesetsRulesetIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdRulesetsRulesetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdRulesetsRulesetIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdRulesetsRulesetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdRulesetsRulesetIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdRulesetsRulesetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdRulesetsRulesetIdRulesRouteHandler: RouteHandler<
  typeof postZonesZoneIdRulesetsRulesetIdRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdRulesetsRulesetIdRulesRuleIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdRulesetsRulesetIdRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdRulesetsRulesetIdRulesRuleIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdRulesetsRulesetIdRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdRulesetsRulesetIdVersionsRouteHandler: RouteHandler<
  typeof getZonesZoneIdRulesetsRulesetIdVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdRulesetsRulesetIdVersionsRulesetVersionRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdRulesetsRulesetIdVersionsRulesetVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdRulesetsRulesetIdVersionsRulesetVersionRouteHandler: RouteHandler<
  typeof getZonesZoneIdRulesetsRulesetIdVersionsRulesetVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdRulesetsRulesetIdVersionsRulesetVersionByTagRuleTagRouteHandler: RouteHandler<
  typeof getZonesZoneIdRulesetsRulesetIdVersionsRulesetVersionByTagRuleTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSchemaValidationSchemasRouteHandler: RouteHandler<
  typeof getZonesZoneIdSchemaValidationSchemasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdSchemaValidationSchemasRouteHandler: RouteHandler<
  typeof postZonesZoneIdSchemaValidationSchemasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSchemaValidationSchemasHostsRouteHandler: RouteHandler<
  typeof getZonesZoneIdSchemaValidationSchemasHostsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdSchemaValidationSchemasSchemaIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdSchemaValidationSchemasSchemaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSchemaValidationSchemasSchemaIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdSchemaValidationSchemasSchemaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSchemaValidationSchemasSchemaIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSchemaValidationSchemasSchemaIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSchemaValidationSchemasSchemaIdOperationsRouteHandler: RouteHandler<
  typeof getZonesZoneIdSchemaValidationSchemasSchemaIdOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSchemaValidationSettingsRouteHandler: RouteHandler<
  typeof getZonesZoneIdSchemaValidationSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSchemaValidationSettingsRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSchemaValidationSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdSchemaValidationSettingsRouteHandler: RouteHandler<
  typeof putZonesZoneIdSchemaValidationSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSchemaValidationSettingsOperationsRouteHandler: RouteHandler<
  typeof getZonesZoneIdSchemaValidationSettingsOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSchemaValidationSettingsOperationsRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSchemaValidationSettingsOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdSchemaValidationSettingsOperationsOperationIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdSchemaValidationSettingsOperationsOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSchemaValidationSettingsOperationsOperationIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdSchemaValidationSettingsOperationsOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdSchemaValidationSettingsOperationsOperationIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdSchemaValidationSettingsOperationsOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdSecondaryDnsForceAxfrRouteHandler: RouteHandler<
  typeof postZonesZoneIdSecondaryDnsForceAxfrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdSecondaryDnsIncomingRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdSecondaryDnsIncomingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSecondaryDnsIncomingRouteHandler: RouteHandler<
  typeof getZonesZoneIdSecondaryDnsIncomingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdSecondaryDnsIncomingRouteHandler: RouteHandler<
  typeof postZonesZoneIdSecondaryDnsIncomingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdSecondaryDnsIncomingRouteHandler: RouteHandler<
  typeof putZonesZoneIdSecondaryDnsIncomingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdSecondaryDnsOutgoingRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdSecondaryDnsOutgoingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSecondaryDnsOutgoingRouteHandler: RouteHandler<
  typeof getZonesZoneIdSecondaryDnsOutgoingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdSecondaryDnsOutgoingRouteHandler: RouteHandler<
  typeof postZonesZoneIdSecondaryDnsOutgoingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdSecondaryDnsOutgoingRouteHandler: RouteHandler<
  typeof putZonesZoneIdSecondaryDnsOutgoingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdSecondaryDnsOutgoingDisableRouteHandler: RouteHandler<
  typeof postZonesZoneIdSecondaryDnsOutgoingDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdSecondaryDnsOutgoingEnableRouteHandler: RouteHandler<
  typeof postZonesZoneIdSecondaryDnsOutgoingEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdSecondaryDnsOutgoingForceNotifyRouteHandler: RouteHandler<
  typeof postZonesZoneIdSecondaryDnsOutgoingForceNotifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSecondaryDnsOutgoingStatusRouteHandler: RouteHandler<
  typeof getZonesZoneIdSecondaryDnsOutgoingStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSecurityCenterInsightsRouteHandler: RouteHandler<
  typeof getZonesZoneIdSecurityCenterInsightsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSecurityCenterInsightsAuditLogRouteHandler: RouteHandler<
  typeof getZonesZoneIdSecurityCenterInsightsAuditLogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSecurityCenterInsightsClassRouteHandler: RouteHandler<
  typeof getZonesZoneIdSecurityCenterInsightsClassRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSecurityCenterInsightsPartnerCountRouteHandler: RouteHandler<
  typeof getZonesZoneIdSecurityCenterInsightsPartnerCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSecurityCenterInsightsScansRouteHandler: RouteHandler<
  typeof getZonesZoneIdSecurityCenterInsightsScansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdSecurityCenterInsightsScansRouteHandler: RouteHandler<
  typeof postZonesZoneIdSecurityCenterInsightsScansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSecurityCenterInsightsSeverityRouteHandler: RouteHandler<
  typeof getZonesZoneIdSecurityCenterInsightsSeverityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSecurityCenterInsightsTypeRouteHandler: RouteHandler<
  typeof getZonesZoneIdSecurityCenterInsightsTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSecurityCenterInsightsIssueIdAuditLogRouteHandler: RouteHandler<
  typeof getZonesZoneIdSecurityCenterInsightsIssueIdAuditLogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSecurityCenterInsightsIssueIdClassificationRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSecurityCenterInsightsIssueIdClassificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdSecurityCenterInsightsIssueIdDismissRouteHandler: RouteHandler<
  typeof putZonesZoneIdSecurityCenterInsightsIssueIdDismissRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSecurityCenterPartnersPartnerShadowHostsRouteHandler: RouteHandler<
  typeof getZonesZoneIdSecurityCenterPartnersPartnerShadowHostsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdSecurityCenterSecuritytxtRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdSecurityCenterSecuritytxtRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSecurityCenterSecuritytxtRouteHandler: RouteHandler<
  typeof getZonesZoneIdSecurityCenterSecuritytxtRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdSecurityCenterSecuritytxtRouteHandler: RouteHandler<
  typeof putZonesZoneIdSecurityCenterSecuritytxtRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSettingsRouteHandler: RouteHandler<
  typeof getZonesZoneIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSettingsRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdSettingsAegisRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdSettingsAegisRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSettingsAegisRouteHandler: RouteHandler<
  typeof getZonesZoneIdSettingsAegisRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSettingsAegisRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSettingsAegisRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSettingsAutoOriginTlsKexRouteHandler: RouteHandler<
  typeof getZonesZoneIdSettingsAutoOriginTlsKexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSettingsAutoOriginTlsKexRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSettingsAutoOriginTlsKexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSettingsAutomaticPlatformOptimizationRouteHandler: RouteHandler<
  typeof getZonesZoneIdSettingsAutomaticPlatformOptimizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSettingsAutomaticPlatformOptimizationRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSettingsAutomaticPlatformOptimizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSettingsBinaryAstRouteHandler: RouteHandler<
  typeof getZonesZoneIdSettingsBinaryAstRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSettingsBinaryAstRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSettingsBinaryAstRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSettingsCsamScannerThirdPartyRouteHandler: RouteHandler<
  typeof getZonesZoneIdSettingsCsamScannerThirdPartyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSettingsCsamScannerThirdPartyRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSettingsCsamScannerThirdPartyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSettingsFontsRouteHandler: RouteHandler<
  typeof getZonesZoneIdSettingsFontsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSettingsFontsRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSettingsFontsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSettingsGoogleTagGatewayConfigRouteHandler: RouteHandler<
  typeof getZonesZoneIdSettingsGoogleTagGatewayConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdSettingsGoogleTagGatewayConfigRouteHandler: RouteHandler<
  typeof putZonesZoneIdSettingsGoogleTagGatewayConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSettingsH2PrioritizationRouteHandler: RouteHandler<
  typeof getZonesZoneIdSettingsH2PrioritizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSettingsH2PrioritizationRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSettingsH2PrioritizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSettingsImageResizingRouteHandler: RouteHandler<
  typeof getZonesZoneIdSettingsImageResizingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSettingsImageResizingRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSettingsImageResizingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSettingsNelRouteHandler: RouteHandler<
  typeof getZonesZoneIdSettingsNelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSettingsNelRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSettingsNelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdSettingsOhttpGatewayRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdSettingsOhttpGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSettingsOhttpGatewayRouteHandler: RouteHandler<
  typeof getZonesZoneIdSettingsOhttpGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdSettingsOhttpGatewayRouteHandler: RouteHandler<
  typeof putZonesZoneIdSettingsOhttpGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSettingsOriginH2MaxStreamsRouteHandler: RouteHandler<
  typeof getZonesZoneIdSettingsOriginH2MaxStreamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSettingsOriginH2MaxStreamsRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSettingsOriginH2MaxStreamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSettingsOriginMaxHttpVersionRouteHandler: RouteHandler<
  typeof getZonesZoneIdSettingsOriginMaxHttpVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSettingsOriginMaxHttpVersionRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSettingsOriginMaxHttpVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdSettingsOriginTlsComplianceModesRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdSettingsOriginTlsComplianceModesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSettingsOriginTlsComplianceModesRouteHandler: RouteHandler<
  typeof getZonesZoneIdSettingsOriginTlsComplianceModesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSettingsOriginTlsComplianceModesRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSettingsOriginTlsComplianceModesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdSettingsOriginTlsComplianceModesRouteHandler: RouteHandler<
  typeof putZonesZoneIdSettingsOriginTlsComplianceModesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSettingsRumRouteHandler: RouteHandler<
  typeof getZonesZoneIdSettingsRumRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSettingsRumRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSettingsRumRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSettingsSpeedBrainRouteHandler: RouteHandler<
  typeof getZonesZoneIdSettingsSpeedBrainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSettingsSpeedBrainRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSettingsSpeedBrainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSettingsSslAutomaticModeRouteHandler: RouteHandler<
  typeof getZonesZoneIdSettingsSslAutomaticModeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSettingsSslAutomaticModeRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSettingsSslAutomaticModeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSettingsTransformationsAllowedOriginsRouteHandler: RouteHandler<
  typeof getZonesZoneIdSettingsTransformationsAllowedOriginsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSettingsTransformationsAllowedOriginsRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSettingsTransformationsAllowedOriginsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSettingsTransformationsC2paRouteHandler: RouteHandler<
  typeof getZonesZoneIdSettingsTransformationsC2paRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSettingsTransformationsC2paRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSettingsTransformationsC2paRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSettingsTransformationsConfigRouteHandler: RouteHandler<
  typeof getZonesZoneIdSettingsTransformationsConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSettingsTransformationsConfigRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSettingsTransformationsConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSettingsZarazConfigRouteHandler: RouteHandler<
  typeof getZonesZoneIdSettingsZarazConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdSettingsZarazConfigRouteHandler: RouteHandler<
  typeof putZonesZoneIdSettingsZarazConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSettingsZarazDefaultRouteHandler: RouteHandler<
  typeof getZonesZoneIdSettingsZarazDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSettingsZarazExportRouteHandler: RouteHandler<
  typeof getZonesZoneIdSettingsZarazExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSettingsZarazHistoryRouteHandler: RouteHandler<
  typeof getZonesZoneIdSettingsZarazHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdSettingsZarazHistoryRouteHandler: RouteHandler<
  typeof putZonesZoneIdSettingsZarazHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSettingsZarazHistoryConfigsRouteHandler: RouteHandler<
  typeof getZonesZoneIdSettingsZarazHistoryConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdSettingsZarazPublishRouteHandler: RouteHandler<
  typeof postZonesZoneIdSettingsZarazPublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSettingsZarazWorkflowRouteHandler: RouteHandler<
  typeof getZonesZoneIdSettingsZarazWorkflowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdSettingsZarazWorkflowRouteHandler: RouteHandler<
  typeof putZonesZoneIdSettingsZarazWorkflowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSettingsSettingIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdSettingsSettingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSettingsSettingIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSettingsSettingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSmartShieldRouteHandler: RouteHandler<
  typeof getZonesZoneIdSmartShieldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSmartShieldRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSmartShieldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSmartShieldCacheReserveClearRouteHandler: RouteHandler<
  typeof getZonesZoneIdSmartShieldCacheReserveClearRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdSmartShieldCacheReserveClearRouteHandler: RouteHandler<
  typeof postZonesZoneIdSmartShieldCacheReserveClearRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSmartShieldHealthchecksRouteHandler: RouteHandler<
  typeof getZonesZoneIdSmartShieldHealthchecksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdSmartShieldHealthchecksRouteHandler: RouteHandler<
  typeof postZonesZoneIdSmartShieldHealthchecksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdSmartShieldHealthchecksHealthcheckIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdSmartShieldHealthchecksHealthcheckIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSmartShieldHealthchecksHealthcheckIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdSmartShieldHealthchecksHealthcheckIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSmartShieldHealthchecksHealthcheckIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSmartShieldHealthchecksHealthcheckIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdSmartShieldHealthchecksHealthcheckIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdSmartShieldHealthchecksHealthcheckIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSnippetsRouteHandler: RouteHandler<
  typeof getZonesZoneIdSnippetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdSnippetsSnippetRulesRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdSnippetsSnippetRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSnippetsSnippetRulesRouteHandler: RouteHandler<
  typeof getZonesZoneIdSnippetsSnippetRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdSnippetsSnippetRulesRouteHandler: RouteHandler<
  typeof putZonesZoneIdSnippetsSnippetRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdSnippetsSnippetNameRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdSnippetsSnippetNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSnippetsSnippetNameRouteHandler: RouteHandler<
  typeof getZonesZoneIdSnippetsSnippetNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdSnippetsSnippetNameRouteHandler: RouteHandler<
  typeof putZonesZoneIdSnippetsSnippetNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSnippetsSnippetNameContentRouteHandler: RouteHandler<
  typeof getZonesZoneIdSnippetsSnippetNameContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSpectrumAnalyticsAggregateCurrentRouteHandler: RouteHandler<
  typeof getZonesZoneIdSpectrumAnalyticsAggregateCurrentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSpectrumAnalyticsEventsBytimeRouteHandler: RouteHandler<
  typeof getZonesZoneIdSpectrumAnalyticsEventsBytimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSpectrumAnalyticsEventsSummaryRouteHandler: RouteHandler<
  typeof getZonesZoneIdSpectrumAnalyticsEventsSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSpectrumAppsRouteHandler: RouteHandler<
  typeof getZonesZoneIdSpectrumAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdSpectrumAppsRouteHandler: RouteHandler<
  typeof postZonesZoneIdSpectrumAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdSpectrumAppsAppIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdSpectrumAppsAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSpectrumAppsAppIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdSpectrumAppsAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdSpectrumAppsAppIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdSpectrumAppsAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSpectrumProtocolsRouteHandler: RouteHandler<
  typeof getZonesZoneIdSpectrumProtocolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSpeedApiAvailabilitiesRouteHandler: RouteHandler<
  typeof getZonesZoneIdSpeedApiAvailabilitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSpeedApiPagesRouteHandler: RouteHandler<
  typeof getZonesZoneIdSpeedApiPagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdSpeedApiPagesUrlTestsRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdSpeedApiPagesUrlTestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSpeedApiPagesUrlTestsRouteHandler: RouteHandler<
  typeof getZonesZoneIdSpeedApiPagesUrlTestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdSpeedApiPagesUrlTestsRouteHandler: RouteHandler<
  typeof postZonesZoneIdSpeedApiPagesUrlTestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSpeedApiPagesUrlTestsTestIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdSpeedApiPagesUrlTestsTestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSpeedApiPagesUrlTrendRouteHandler: RouteHandler<
  typeof getZonesZoneIdSpeedApiPagesUrlTrendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdSpeedApiScheduleUrlRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdSpeedApiScheduleUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSpeedApiScheduleUrlRouteHandler: RouteHandler<
  typeof getZonesZoneIdSpeedApiScheduleUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdSpeedApiScheduleUrlRouteHandler: RouteHandler<
  typeof postZonesZoneIdSpeedApiScheduleUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdSslAnalyzeRouteHandler: RouteHandler<
  typeof postZonesZoneIdSslAnalyzeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSslCertificatePacksRouteHandler: RouteHandler<
  typeof getZonesZoneIdSslCertificatePacksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdSslCertificatePacksOrderRouteHandler: RouteHandler<
  typeof postZonesZoneIdSslCertificatePacksOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSslCertificatePacksQuotaRouteHandler: RouteHandler<
  typeof getZonesZoneIdSslCertificatePacksQuotaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdSslCertificatePacksCertificatePackIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdSslCertificatePacksCertificatePackIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSslCertificatePacksCertificatePackIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdSslCertificatePacksCertificatePackIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSslCertificatePacksCertificatePackIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSslCertificatePacksCertificatePackIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSslRecommendationRouteHandler: RouteHandler<
  typeof getZonesZoneIdSslRecommendationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSslUniversalSettingsRouteHandler: RouteHandler<
  typeof getZonesZoneIdSslUniversalSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSslUniversalSettingsRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSslUniversalSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSslVerificationRouteHandler: RouteHandler<
  typeof getZonesZoneIdSslVerificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdSslVerificationCertificatePackIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdSslVerificationCertificatePackIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdStreamUsageRouteHandler: RouteHandler<
  typeof getZonesZoneIdStreamUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdSubscriptionRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdSubscriptionRouteHandler: RouteHandler<
  typeof getZonesZoneIdSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdSubscriptionRouteHandler: RouteHandler<
  typeof postZonesZoneIdSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdSubscriptionRouteHandler: RouteHandler<
  typeof putZonesZoneIdSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdSubscriptionsRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdSubscriptionsRouteHandler: RouteHandler<
  typeof postZonesZoneIdSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdSubscriptionsRouteHandler: RouteHandler<
  typeof putZonesZoneIdSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdTagsRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdTagsRouteHandler: RouteHandler<typeof getZonesZoneIdTagsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdTagsRouteHandler: RouteHandler<typeof putZonesZoneIdTagsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdTokenValidationConfigRouteHandler: RouteHandler<
  typeof getZonesZoneIdTokenValidationConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdTokenValidationConfigRouteHandler: RouteHandler<
  typeof postZonesZoneIdTokenValidationConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdTokenValidationConfigConfigIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdTokenValidationConfigConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdTokenValidationConfigConfigIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdTokenValidationConfigConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdTokenValidationConfigConfigIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdTokenValidationConfigConfigIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdTokenValidationConfigConfigIdCredentialsRouteHandler: RouteHandler<
  typeof patchZonesZoneIdTokenValidationConfigConfigIdCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdTokenValidationConfigConfigIdCredentialsRouteHandler: RouteHandler<
  typeof putZonesZoneIdTokenValidationConfigConfigIdCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdTokenValidationRulesRouteHandler: RouteHandler<
  typeof getZonesZoneIdTokenValidationRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdTokenValidationRulesRouteHandler: RouteHandler<
  typeof postZonesZoneIdTokenValidationRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdTokenValidationRulesBulkRouteHandler: RouteHandler<
  typeof patchZonesZoneIdTokenValidationRulesBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdTokenValidationRulesBulkRouteHandler: RouteHandler<
  typeof postZonesZoneIdTokenValidationRulesBulkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdTokenValidationRulesPreviewRouteHandler: RouteHandler<
  typeof postZonesZoneIdTokenValidationRulesPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdTokenValidationRulesRuleIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdTokenValidationRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdTokenValidationRulesRuleIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdTokenValidationRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdTokenValidationRulesRuleIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdTokenValidationRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdUrlNormalizationRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdUrlNormalizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdUrlNormalizationRouteHandler: RouteHandler<
  typeof getZonesZoneIdUrlNormalizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdUrlNormalizationRouteHandler: RouteHandler<
  typeof putZonesZoneIdUrlNormalizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdWaitingRoomsRouteHandler: RouteHandler<
  typeof getZonesZoneIdWaitingRoomsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdWaitingRoomsRouteHandler: RouteHandler<
  typeof postZonesZoneIdWaitingRoomsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdWaitingRoomsPreviewRouteHandler: RouteHandler<
  typeof postZonesZoneIdWaitingRoomsPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdWaitingRoomsSettingsRouteHandler: RouteHandler<
  typeof getZonesZoneIdWaitingRoomsSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdWaitingRoomsSettingsRouteHandler: RouteHandler<
  typeof patchZonesZoneIdWaitingRoomsSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdWaitingRoomsSettingsRouteHandler: RouteHandler<
  typeof putZonesZoneIdWaitingRoomsSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdWaitingRoomsWaitingRoomIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdWaitingRoomsWaitingRoomIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdWaitingRoomsWaitingRoomIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdWaitingRoomsWaitingRoomIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdWaitingRoomsWaitingRoomIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdWaitingRoomsWaitingRoomIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdWaitingRoomsWaitingRoomIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdWaitingRoomsWaitingRoomIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdWaitingRoomsWaitingRoomIdEventsRouteHandler: RouteHandler<
  typeof getZonesZoneIdWaitingRoomsWaitingRoomIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdWaitingRoomsWaitingRoomIdEventsRouteHandler: RouteHandler<
  typeof postZonesZoneIdWaitingRoomsWaitingRoomIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdWaitingRoomsWaitingRoomIdEventsEventIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdWaitingRoomsWaitingRoomIdEventsEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdWaitingRoomsWaitingRoomIdEventsEventIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdWaitingRoomsWaitingRoomIdEventsEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdWaitingRoomsWaitingRoomIdEventsEventIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdWaitingRoomsWaitingRoomIdEventsEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdWaitingRoomsWaitingRoomIdEventsEventIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdWaitingRoomsWaitingRoomIdEventsEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdWaitingRoomsWaitingRoomIdEventsEventIdDetailsRouteHandler: RouteHandler<
  typeof getZonesZoneIdWaitingRoomsWaitingRoomIdEventsEventIdDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdWaitingRoomsWaitingRoomIdRulesRouteHandler: RouteHandler<
  typeof getZonesZoneIdWaitingRoomsWaitingRoomIdRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdWaitingRoomsWaitingRoomIdRulesRouteHandler: RouteHandler<
  typeof postZonesZoneIdWaitingRoomsWaitingRoomIdRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdWaitingRoomsWaitingRoomIdRulesRouteHandler: RouteHandler<
  typeof putZonesZoneIdWaitingRoomsWaitingRoomIdRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdWaitingRoomsWaitingRoomIdRulesRuleIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdWaitingRoomsWaitingRoomIdRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdWaitingRoomsWaitingRoomIdRulesRuleIdRouteHandler: RouteHandler<
  typeof patchZonesZoneIdWaitingRoomsWaitingRoomIdRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdWaitingRoomsWaitingRoomIdStatusRouteHandler: RouteHandler<
  typeof getZonesZoneIdWaitingRoomsWaitingRoomIdStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdWeb3HostnamesRouteHandler: RouteHandler<
  typeof getZonesZoneIdWeb3HostnamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdWeb3HostnamesRouteHandler: RouteHandler<
  typeof postZonesZoneIdWeb3HostnamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdWeb3HostnamesIdentifierRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdWeb3HostnamesIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdWeb3HostnamesIdentifierRouteHandler: RouteHandler<
  typeof getZonesZoneIdWeb3HostnamesIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchZonesZoneIdWeb3HostnamesIdentifierRouteHandler: RouteHandler<
  typeof patchZonesZoneIdWeb3HostnamesIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListRouteHandler: RouteHandler<
  typeof getZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListRouteHandler: RouteHandler<
  typeof putZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListEntriesRouteHandler: RouteHandler<
  typeof getZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListEntriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListEntriesRouteHandler: RouteHandler<
  typeof postZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListEntriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListEntriesContentListEntryIdentifierRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListEntriesContentListEntryIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListEntriesContentListEntryIdentifierRouteHandler: RouteHandler<
  typeof getZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListEntriesContentListEntryIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListEntriesContentListEntryIdentifierRouteHandler: RouteHandler<
  typeof putZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListEntriesContentListEntryIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdWorkersRoutesRouteHandler: RouteHandler<
  typeof getZonesZoneIdWorkersRoutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postZonesZoneIdWorkersRoutesRouteHandler: RouteHandler<
  typeof postZonesZoneIdWorkersRoutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteZonesZoneIdWorkersRoutesRouteIdRouteHandler: RouteHandler<
  typeof deleteZonesZoneIdWorkersRoutesRouteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getZonesZoneIdWorkersRoutesRouteIdRouteHandler: RouteHandler<
  typeof getZonesZoneIdWorkersRoutesRouteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putZonesZoneIdWorkersRoutesRouteIdRouteHandler: RouteHandler<
  typeof putZonesZoneIdWorkersRoutesRouteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
