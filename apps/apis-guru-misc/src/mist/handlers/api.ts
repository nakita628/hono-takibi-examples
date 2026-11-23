import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiV1InstallerOrgsOrgIdDevicesDeviceMacImageNameRoute,
  deleteApiV1InstallerOrgsOrgIdDevicesDeviceMacRoute,
  deleteApiV1InstallerOrgsOrgIdSitesSiteNameMapsMapIdRoute,
  deleteApiV1LoginOauthProviderRoute,
  deleteApiV1MspsMspIdAdminsAdminIdRoute,
  deleteApiV1MspsMspIdInvitesInviteIdRoute,
  deleteApiV1MspsMspIdLogoRoute,
  deleteApiV1MspsMspIdOrggroupsOrggroupIdRoute,
  deleteApiV1MspsMspIdRoute,
  deleteApiV1MspsMspIdSsorolesSsoroleIdRoute,
  deleteApiV1MspsMspIdSsosSsoIdRoute,
  deleteApiV1OrgsOrgIdAdminsAdminIdRoute,
  deleteApiV1OrgsOrgIdAlarmtemplatesAlarmtemplateIdRoute,
  deleteApiV1OrgsOrgIdApitokensApitokenIdRoute,
  deleteApiV1OrgsOrgIdAptemplatesAptemplateIdRoute,
  deleteApiV1OrgsOrgIdAssetfiltersAssetfilterIdRoute,
  deleteApiV1OrgsOrgIdAssetsAssetIdRoute,
  deleteApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdRoute,
  deleteApiV1OrgsOrgIdEvpnTopologiesEvpnTopologyIdRoute,
  deleteApiV1OrgsOrgIdGatewaytemplatesGatewaytemplateIdRoute,
  deleteApiV1OrgsOrgIdGuestsGuestMacRoute,
  deleteApiV1OrgsOrgIdInvitesInviteIdRoute,
  deleteApiV1OrgsOrgIdMxclustersMxclusterIdRoute,
  deleteApiV1OrgsOrgIdMxedgesMxedgeIdRoute,
  deleteApiV1OrgsOrgIdMxtunnelsMxtunnelIdRoute,
  deleteApiV1OrgsOrgIdNacrulesNacruleIdRoute,
  deleteApiV1OrgsOrgIdNactagsNactagIdRoute,
  deleteApiV1OrgsOrgIdNetworksNetworkIdRoute,
  deleteApiV1OrgsOrgIdNetworktemplatesNetworktemplateIdRoute,
  deleteApiV1OrgsOrgIdOtherdevicesDeviceMacRoute,
  deleteApiV1OrgsOrgIdPskportalsPskportalIdRoute,
  deleteApiV1OrgsOrgIdPsksPskIdRoute,
  deleteApiV1OrgsOrgIdRftemplatesRftemplateIdRoute,
  deleteApiV1OrgsOrgIdRoute,
  deleteApiV1OrgsOrgIdSdkinvitesSdkinviteIdRoute,
  deleteApiV1OrgsOrgIdSdktemplatesSdktemplateIdRoute,
  deleteApiV1OrgsOrgIdSecpoliciesSecpolicyIdRoute,
  deleteApiV1OrgsOrgIdServicepoliciesServicepolicyIdRoute,
  deleteApiV1OrgsOrgIdServicesServiceIdRoute,
  deleteApiV1OrgsOrgIdSettingAppNameLinkAccountsRoute,
  deleteApiV1OrgsOrgIdSettingAppNameLinkRoute,
  deleteApiV1OrgsOrgIdSettingBlacklistRoute,
  deleteApiV1OrgsOrgIdSettingJuniperLinkedAccountRoute,
  deleteApiV1OrgsOrgIdSitegroupsSitegroupIdRoute,
  deleteApiV1OrgsOrgIdSitetemplatesSitetemplateIdRoute,
  deleteApiV1OrgsOrgIdSsorolesSsoroleIdRoute,
  deleteApiV1OrgsOrgIdSsosSsoIdRoute,
  deleteApiV1OrgsOrgIdSubscriptionsRoute,
  deleteApiV1OrgsOrgIdTemplatesTemplateIdRoute,
  deleteApiV1OrgsOrgIdVpnsVpnIdRoute,
  deleteApiV1OrgsOrgIdWebhooksWebhookIdRoute,
  deleteApiV1OrgsOrgIdWlansWlanIdPortalImageRoute,
  deleteApiV1OrgsOrgIdWlansWlanIdRoute,
  deleteApiV1OrgsOrgIdWxrulesWxrulesIdRoute,
  deleteApiV1OrgsOrgIdWxtagsWxtagIdRoute,
  deleteApiV1OrgsOrgIdWxtunnelsWxtunnelIdRoute,
  deleteApiV1SelfApitokensApitokenIdRoute,
  deleteApiV1SelfRoute,
  deleteApiV1SitesSiteIdAssetfiltersAssetfilterIdRoute,
  deleteApiV1SitesSiteIdAssetsAssetIdRoute,
  deleteApiV1SitesSiteIdBeaconsBeaconIdRoute,
  deleteApiV1SitesSiteIdDevicesDeviceIdHaRoute,
  deleteApiV1SitesSiteIdDevicesDeviceIdImageImageNumberRoute,
  deleteApiV1SitesSiteIdDevicesDeviceIdLocalPortConfigRoute,
  deleteApiV1SitesSiteIdDevicesDeviceIdRoute,
  deleteApiV1SitesSiteIdDevicesDeviceIdVcRoute,
  deleteApiV1SitesSiteIdEvpnTopologiesEvpnTopologyIdRoute,
  deleteApiV1SitesSiteIdGuestsGuestMacRoute,
  deleteApiV1SitesSiteIdLocationMlDeviceDeviceIdRoute,
  deleteApiV1SitesSiteIdLocationMlMapMapIdRoute,
  deleteApiV1SitesSiteIdMapsMapIdAutoOrientRoute,
  deleteApiV1SitesSiteIdMapsMapIdAutoPlacementRoute,
  deleteApiV1SitesSiteIdMapsMapIdImageRoute,
  deleteApiV1SitesSiteIdMapsMapIdRoute,
  deleteApiV1SitesSiteIdMxedgesMxedgeIdRoute,
  deleteApiV1SitesSiteIdPcapsCaptureRoute,
  deleteApiV1SitesSiteIdPsksPskIdRoute,
  deleteApiV1SitesSiteIdRfdiagsRfdiagIdRoute,
  deleteApiV1SitesSiteIdRoute,
  deleteApiV1SitesSiteIdRssizonesRssizoneIdRoute,
  deleteApiV1SitesSiteIdSettingBlacklistRoute,
  deleteApiV1SitesSiteIdSettingWatchedStationRoute,
  deleteApiV1SitesSiteIdSettingWhitelistRoute,
  deleteApiV1SitesSiteIdSubscriptionsRoute,
  deleteApiV1SitesSiteIdUisettingsUisettingIdRoute,
  deleteApiV1SitesSiteIdVbeaconsVbeaconIdRoute,
  deleteApiV1SitesSiteIdWebhooksWebhookIdRoute,
  deleteApiV1SitesSiteIdWlansWlanIdRoute,
  deleteApiV1SitesSiteIdWxrulesWxrulesIdRoute,
  deleteApiV1SitesSiteIdWxtagsWxtagIdRoute,
  deleteApiV1SitesSiteIdWxtunnelsWxtunnelIdRoute,
  deleteApiV1SitesSiteIdZonesZoneIdRoute,
  getApiV1ConstAlarmDefsRoute,
  getApiV1ConstApChannelsRoute,
  getApiV1ConstApLedStatusRoute,
  getApiV1ConstApplicationsRoute,
  getApiV1ConstCallEventsRoute,
  getApiV1ConstClientEventsRoute,
  getApiV1ConstCountriesRoute,
  getApiV1ConstDefaultGatewayConfigRoute,
  getApiV1ConstDeviceEventsRoute,
  getApiV1ConstDeviceModelsRoute,
  getApiV1ConstInsightMetricsRoute,
  getApiV1ConstLanguagesRoute,
  getApiV1ConstMxedgeEventsRoute,
  getApiV1ConstMxedgeModelsRoute,
  getApiV1ConstSystemEventsRoute,
  getApiV1ConstTrafficTypesRoute,
  getApiV1InstallerOrgsOrgIdAlarmtemplatesRoute,
  getApiV1InstallerOrgsOrgIdDeviceprofilesRoute,
  getApiV1InstallerOrgsOrgIdDevicesRoute,
  getApiV1InstallerOrgsOrgIdRftemplatesRoute,
  getApiV1InstallerOrgsOrgIdSecpoliciesRoute,
  getApiV1InstallerOrgsOrgIdSitegroupsRoute,
  getApiV1InstallerOrgsOrgIdSitesRoute,
  getApiV1InstallerOrgsOrgIdSitesSiteNameMapsRoute,
  getApiV1InstallerSitesSiteNameOptimizeRoute,
  getApiV1LoginOauthProviderRoute,
  getApiV1MspsMspIdAdminsAdminIdRoute,
  getApiV1MspsMspIdAdminsRoute,
  getApiV1MspsMspIdInsightsMetricRoute,
  getApiV1MspsMspIdInventoryDeviceMacRoute,
  getApiV1MspsMspIdLicensesRoute,
  getApiV1MspsMspIdLogsCountRoute,
  getApiV1MspsMspIdLogsRoute,
  getApiV1MspsMspIdOrggroupsOrggroupIdRoute,
  getApiV1MspsMspIdOrggroupsRoute,
  getApiV1MspsMspIdOrgsOrgIdRoute,
  getApiV1MspsMspIdOrgsRoute,
  getApiV1MspsMspIdOrgsSearchRoute,
  getApiV1MspsMspIdRoute,
  getApiV1MspsMspIdSearchRoute,
  getApiV1MspsMspIdSsorolesRoute,
  getApiV1MspsMspIdSsosRoute,
  getApiV1MspsMspIdSsosSsoIdFailuresRoute,
  getApiV1MspsMspIdSsosSsoIdMetadataRoute,
  getApiV1MspsMspIdSsosSsoIdMetadataXmlRoute,
  getApiV1MspsMspIdStatsLicensesRoute,
  getApiV1MspsMspIdStatsOrgsRoute,
  getApiV1MspsMspIdTicketsCountRoute,
  getApiV1MspsMspIdTicketsRoute,
  getApiV1OrgsOrgId128routersRegisterCmdRoute,
  getApiV1OrgsOrgIdAdminsRoute,
  getApiV1OrgsOrgIdAlarmsCountRoute,
  getApiV1OrgsOrgIdAlarmsSearchRoute,
  getApiV1OrgsOrgIdAlarmtemplatesAlarmtemplateIdRoute,
  getApiV1OrgsOrgIdAlarmtemplatesRoute,
  getApiV1OrgsOrgIdApitokensApitokenIdRoute,
  getApiV1OrgsOrgIdApitokensRoute,
  getApiV1OrgsOrgIdAptemplatesAptemplateIdRoute,
  getApiV1OrgsOrgIdAptemplatesRoute,
  getApiV1OrgsOrgIdAssetfiltersAssetfilterIdRoute,
  getApiV1OrgsOrgIdAssetfiltersRoute,
  getApiV1OrgsOrgIdAssetsAssetIdRoute,
  getApiV1OrgsOrgIdAssetsRoute,
  getApiV1OrgsOrgIdCallEventsCountRoute,
  getApiV1OrgsOrgIdCallEventsSearchRoute,
  getApiV1OrgsOrgIdCertRoute,
  getApiV1OrgsOrgIdClientsCountRoute,
  getApiV1OrgsOrgIdClientsEventsSearchRoute,
  getApiV1OrgsOrgIdClientsSearchRoute,
  getApiV1OrgsOrgIdClientsSessionsCountRoute,
  getApiV1OrgsOrgIdClientsSessionsSearchRoute,
  getApiV1OrgsOrgIdCrlRoute,
  getApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdRoute,
  getApiV1OrgsOrgIdDeviceprofilesRoute,
  getApiV1OrgsOrgIdDevicesCountRoute,
  getApiV1OrgsOrgIdDevicesEventsCountRoute,
  getApiV1OrgsOrgIdDevicesEventsSearchRoute,
  getApiV1OrgsOrgIdDevicesLastConfigCountRoute,
  getApiV1OrgsOrgIdDevicesLastConfigSearchRoute,
  getApiV1OrgsOrgIdDevicesRadioMacsRoute,
  getApiV1OrgsOrgIdDevicesRoute,
  getApiV1OrgsOrgIdDevicesSearchRoute,
  getApiV1OrgsOrgIdDevicesUpgradeRoute,
  getApiV1OrgsOrgIdDevicesUpgradeUpgradeIdRoute,
  getApiV1OrgsOrgIdEvpnTopologiesEvpnTopologyIdRoute,
  getApiV1OrgsOrgIdEvpnTopologiesRoute,
  getApiV1OrgsOrgIdGatewaytemplatesGatewaytemplateIdRoute,
  getApiV1OrgsOrgIdGatewaytemplatesRoute,
  getApiV1OrgsOrgIdGuestsCountRoute,
  getApiV1OrgsOrgIdGuestsGuestMacRoute,
  getApiV1OrgsOrgIdGuestsRoute,
  getApiV1OrgsOrgIdGuestsSearchRoute,
  getApiV1OrgsOrgIdInsightsMetricRoute,
  getApiV1OrgsOrgIdInsightsSitesSleRoute,
  getApiV1OrgsOrgIdInventoryRoute,
  getApiV1OrgsOrgIdJsiDevicesOutboundSshCmdRoute,
  getApiV1OrgsOrgIdJsiDevicesRoute,
  getApiV1OrgsOrgIdJsiInventoryRoute,
  getApiV1OrgsOrgIdJunosRegisterCmdRoute,
  getApiV1OrgsOrgIdLicensesRoute,
  getApiV1OrgsOrgIdLicensesUsagesRoute,
  getApiV1OrgsOrgIdLogsCountRoute,
  getApiV1OrgsOrgIdLogsRoute,
  getApiV1OrgsOrgIdMxclustersMxclusterIdRoute,
  getApiV1OrgsOrgIdMxclustersRoute,
  getApiV1OrgsOrgIdMxedgesMxedgeIdRoute,
  getApiV1OrgsOrgIdMxedgesRoute,
  getApiV1OrgsOrgIdMxedgesUpgradeRoute,
  getApiV1OrgsOrgIdMxedgesUpgradeUpgradeIdRoute,
  getApiV1OrgsOrgIdMxedgesVersionRoute,
  getApiV1OrgsOrgIdMxtunnelsMxtunnelIdRoute,
  getApiV1OrgsOrgIdMxtunnelsRoute,
  getApiV1OrgsOrgIdNacrulesNacruleIdRoute,
  getApiV1OrgsOrgIdNacrulesRoute,
  getApiV1OrgsOrgIdNactagsNactagIdRoute,
  getApiV1OrgsOrgIdNactagsRoute,
  getApiV1OrgsOrgIdNetworksNetworkIdRoute,
  getApiV1OrgsOrgIdNetworksRoute,
  getApiV1OrgsOrgIdNetworktemplatesNetworktemplateIdRoute,
  getApiV1OrgsOrgIdNetworktemplatesRoute,
  getApiV1OrgsOrgIdOcdevicesOutboundSshCmdRoute,
  getApiV1OrgsOrgIdOtherdevicesDeviceMacRoute,
  getApiV1OrgsOrgIdOtherdevicesRoute,
  getApiV1OrgsOrgIdPmaDashboardsRoute,
  getApiV1OrgsOrgIdPskportalsPskportalIdRoute,
  getApiV1OrgsOrgIdPskportalsRoute,
  getApiV1OrgsOrgIdPsksPskIdRoute,
  getApiV1OrgsOrgIdPsksRoute,
  getApiV1OrgsOrgIdRftemplatesRftemplateIdRoute,
  getApiV1OrgsOrgIdRftemplatesRoute,
  getApiV1OrgsOrgIdRoute,
  getApiV1OrgsOrgIdSdkinvitesRoute,
  getApiV1OrgsOrgIdSdkinvitesSdkinviteIdQrcodeRoute,
  getApiV1OrgsOrgIdSdkinvitesSdkinviteIdRoute,
  getApiV1OrgsOrgIdSdktemplatesRoute,
  getApiV1OrgsOrgIdSdktemplatesSdktemplateIdRoute,
  getApiV1OrgsOrgIdSecpoliciesRoute,
  getApiV1OrgsOrgIdSecpoliciesSecpolicyIdRoute,
  getApiV1OrgsOrgIdServicepoliciesRoute,
  getApiV1OrgsOrgIdServicepoliciesServicepolicyIdRoute,
  getApiV1OrgsOrgIdServicesRoute,
  getApiV1OrgsOrgIdServicesServiceIdRoute,
  getApiV1OrgsOrgIdSettingAppNameLinkAccountsRoute,
  getApiV1OrgsOrgIdSettingAppNameLinkRoute,
  getApiV1OrgsOrgIdSettingRoute,
  getApiV1OrgsOrgIdSitegroupsRoute,
  getApiV1OrgsOrgIdSitegroupsSitegroupIdRoute,
  getApiV1OrgsOrgIdSitesCountRoute,
  getApiV1OrgsOrgIdSitesRoute,
  getApiV1OrgsOrgIdSitesSearchRoute,
  getApiV1OrgsOrgIdSitetemplatesRoute,
  getApiV1OrgsOrgIdSitetemplatesSitetemplateIdRoute,
  getApiV1OrgsOrgIdSsorolesRoute,
  getApiV1OrgsOrgIdSsorolesSsoroleIdRoute,
  getApiV1OrgsOrgIdSsosRoute,
  getApiV1OrgsOrgIdSsosSsoIdFailuresRoute,
  getApiV1OrgsOrgIdSsosSsoIdMetadataRoute,
  getApiV1OrgsOrgIdSsosSsoIdMetadataXmlRoute,
  getApiV1OrgsOrgIdSsosSsoIdRoute,
  getApiV1OrgsOrgIdSsrUpgradeRoute,
  getApiV1OrgsOrgIdSsrVersionsRoute,
  getApiV1OrgsOrgIdStatsAssetsCountRoute,
  getApiV1OrgsOrgIdStatsAssetsRoute,
  getApiV1OrgsOrgIdStatsAssetsSearchRoute,
  getApiV1OrgsOrgIdStatsBgpPeersCountRoute,
  getApiV1OrgsOrgIdStatsBgpPeersSearchRoute,
  getApiV1OrgsOrgIdStatsDevicesRoute,
  getApiV1OrgsOrgIdStatsMxedgesMxedgeIdRoute,
  getApiV1OrgsOrgIdStatsMxedgesRoute,
  getApiV1OrgsOrgIdStatsOtherdevicesDeviceMacRoute,
  getApiV1OrgsOrgIdStatsPortsSearchRoute,
  getApiV1OrgsOrgIdStatsRoute,
  getApiV1OrgsOrgIdStatsSwitchPortsCountRoute,
  getApiV1OrgsOrgIdStatsTunnelsCountRoute,
  getApiV1OrgsOrgIdStatsTunnelsSearchRoute,
  getApiV1OrgsOrgIdStatsVpnPeersCountRoute,
  getApiV1OrgsOrgIdStatsVpnPeersSearchRoute,
  getApiV1OrgsOrgIdTemplatesRoute,
  getApiV1OrgsOrgIdTemplatesTemplateIdRoute,
  getApiV1OrgsOrgIdTicketsCountRoute,
  getApiV1OrgsOrgIdTicketsRoute,
  getApiV1OrgsOrgIdTicketsTicketIdRoute,
  getApiV1OrgsOrgIdTroubleshootRoute,
  getApiV1OrgsOrgIdVpnsRoute,
  getApiV1OrgsOrgIdVpnsVpnIdRoute,
  getApiV1OrgsOrgIdWebhooksRoute,
  getApiV1OrgsOrgIdWebhooksWebhookIdRoute,
  getApiV1OrgsOrgIdWiredClientsCountRoute,
  getApiV1OrgsOrgIdWiredClientsSearchRoute,
  getApiV1OrgsOrgIdWlansDerivedRoute,
  getApiV1OrgsOrgIdWlansRoute,
  getApiV1OrgsOrgIdWlansWlanIdRoute,
  getApiV1OrgsOrgIdWxrulesDerivedRoute,
  getApiV1OrgsOrgIdWxrulesRoute,
  getApiV1OrgsOrgIdWxrulesWxrulesIdRoute,
  getApiV1OrgsOrgIdWxtagsAppsRoute,
  getApiV1OrgsOrgIdWxtagsRoute,
  getApiV1OrgsOrgIdWxtagsWxtagIdClientsRoute,
  getApiV1OrgsOrgIdWxtagsWxtagIdRoute,
  getApiV1OrgsOrgIdWxtunnelsRoute,
  getApiV1OrgsOrgIdWxtunnelsWxtunnelIdRoute,
  getApiV1SelfApitokensRoute,
  getApiV1SelfLogsRoute,
  getApiV1SelfOauthProviderRoute,
  getApiV1SelfRoute,
  getApiV1SelfSubscriptionsRoute,
  getApiV1SelfTwoFactorTokenRoute,
  getApiV1SelfUpdateVerifyTokenRoute,
  getApiV1SitesSiteIdAlarmsCountRoute,
  getApiV1SitesSiteIdAlarmsSearchRoute,
  getApiV1SitesSiteIdAnomalyClientClientMacMetricRoute,
  getApiV1SitesSiteIdAnomalyDeviceDeviceMacMetricRoute,
  getApiV1SitesSiteIdAnomalyMetricRoute,
  getApiV1SitesSiteIdAppsRoute,
  getApiV1SitesSiteIdAssetfiltersAssetfilterIdRoute,
  getApiV1SitesSiteIdAssetfiltersRoute,
  getApiV1SitesSiteIdAssetsAssetIdRoute,
  getApiV1SitesSiteIdAssetsRoute,
  getApiV1SitesSiteIdBeaconsBeaconIdRoute,
  getApiV1SitesSiteIdBeaconsRoute,
  getApiV1SitesSiteIdCallEventsCountRoute,
  getApiV1SitesSiteIdCallEventsSearchRoute,
  getApiV1SitesSiteIdClientsClientMacEventsRoute,
  getApiV1SitesSiteIdClientsCountRoute,
  getApiV1SitesSiteIdClientsEventsCountRoute,
  getApiV1SitesSiteIdClientsEventsSearchRoute,
  getApiV1SitesSiteIdClientsSearchRoute,
  getApiV1SitesSiteIdClientsSessionsCountRoute,
  getApiV1SitesSiteIdClientsSessionsSearchRoute,
  getApiV1SitesSiteIdDevicesApChannelsRoute,
  getApiV1SitesSiteIdDevicesConfigHistoryCountRoute,
  getApiV1SitesSiteIdDevicesConfigHistorySearchRoute,
  getApiV1SitesSiteIdDevicesCountRoute,
  getApiV1SitesSiteIdDevicesDeviceIdConfigCmdRoute,
  getApiV1SitesSiteIdDevicesDeviceIdIotRoute,
  getApiV1SitesSiteIdDevicesDeviceIdRoute,
  getApiV1SitesSiteIdDevicesDeviceIdVcRoute,
  getApiV1SitesSiteIdDevicesEventsCountRoute,
  getApiV1SitesSiteIdDevicesEventsSearchRoute,
  getApiV1SitesSiteIdDevicesExportRoute,
  getApiV1SitesSiteIdDevicesLastConfigCountRoute,
  getApiV1SitesSiteIdDevicesLastConfigSearchRoute,
  getApiV1SitesSiteIdDevicesRoute,
  getApiV1SitesSiteIdDevicesSearchRoute,
  getApiV1SitesSiteIdDevicesUpgradeRoute,
  getApiV1SitesSiteIdDevicesUpgradeUpgradeIdRoute,
  getApiV1SitesSiteIdDevicesVersionsRoute,
  getApiV1SitesSiteIdEventsFastRoamRoute,
  getApiV1SitesSiteIdEventsInterferenceRoute,
  getApiV1SitesSiteIdEventsSystemCountRoute,
  getApiV1SitesSiteIdEventsSystemSearchRoute,
  getApiV1SitesSiteIdEvpnTopologiesEvpnTopologyIdRoute,
  getApiV1SitesSiteIdEvpnTopologiesRoute,
  getApiV1SitesSiteIdGuestsCountRoute,
  getApiV1SitesSiteIdGuestsGuestMacRoute,
  getApiV1SitesSiteIdGuestsRoute,
  getApiV1SitesSiteIdGuestsSearchRoute,
  getApiV1SitesSiteIdInsightsClientClientMacMetricRoute,
  getApiV1SitesSiteIdInsightsDeviceDeviceMacMetricRoute,
  getApiV1SitesSiteIdInsightsMetricRoute,
  getApiV1SitesSiteIdInsightsRoguesClientsRoute,
  getApiV1SitesSiteIdInsightsRoguesRoute,
  getApiV1SitesSiteIdLicensesUsagesRoute,
  getApiV1SitesSiteIdLocationCoverageRoute,
  getApiV1SitesSiteIdLocationMlCurrentRoute,
  getApiV1SitesSiteIdLocationMlDefaultsRoute,
  getApiV1SitesSiteIdLocationMlUpdatesRoute,
  getApiV1SitesSiteIdMapsMapIdAutoPlacementRoute,
  getApiV1SitesSiteIdMapsMapIdRoute,
  getApiV1SitesSiteIdMapsRoute,
  getApiV1SitesSiteIdMxedgesMxedgeIdRoute,
  getApiV1SitesSiteIdMxedgesRoute,
  getApiV1SitesSiteIdOtherdevicesRoute,
  getApiV1SitesSiteIdPcapsCaptureRoute,
  getApiV1SitesSiteIdPcapsRoute,
  getApiV1SitesSiteIdPsksPskIdRoute,
  getApiV1SitesSiteIdPsksRoute,
  getApiV1SitesSiteIdRfdiagsRfdiagIdDownloadRoute,
  getApiV1SitesSiteIdRfdiagsRfdiagIdRoute,
  getApiV1SitesSiteIdRfdiagsRoute,
  getApiV1SitesSiteIdRoguesEventsCountRoute,
  getApiV1SitesSiteIdRoguesEventsSearchRoute,
  getApiV1SitesSiteIdRoguesRogueBssidRoute,
  getApiV1SitesSiteIdRoute,
  getApiV1SitesSiteIdRrmCurrentDevicesDeviceIdBandBandRoute,
  getApiV1SitesSiteIdRrmCurrentRoute,
  getApiV1SitesSiteIdRrmEventsRoute,
  getApiV1SitesSiteIdRssizonesRoute,
  getApiV1SitesSiteIdRssizonesRssizoneIdRoute,
  getApiV1SitesSiteIdSettingRoute,
  getApiV1SitesSiteIdSkyatpEventsCountRoute,
  getApiV1SitesSiteIdSkyatpEventsSearchRoute,
  getApiV1SitesSiteIdSleScopeScopeIdMetricMetricClassifierClassifierSummaryRoute,
  getApiV1SitesSiteIdSleScopeScopeIdMetricMetricClassifiersRoute,
  getApiV1SitesSiteIdSleScopeScopeIdMetricMetricHistogramRoute,
  getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedApplicationsRoute,
  getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedApsRoute,
  getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedChassisRoute,
  getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedClientsRoute,
  getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedGatewaysRoute,
  getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedInterfacesRoute,
  getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedSwitchesRoute,
  getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedUsersRoute,
  getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactSummaryRoute,
  getApiV1SitesSiteIdSleScopeScopeIdMetricMetricSummaryRoute,
  getApiV1SitesSiteIdSleScopeScopeIdMetricMetricThresholdRoute,
  getApiV1SitesSiteIdSleScopeScopeIdMetricsRoute,
  getApiV1SitesSiteIdSsrUpgradeUpgradeIdRoute,
  getApiV1SitesSiteIdStatsAppsCountRoute,
  getApiV1SitesSiteIdStatsAssetsAssetIdRoute,
  getApiV1SitesSiteIdStatsAssetsCountRoute,
  getApiV1SitesSiteIdStatsAssetsRoute,
  getApiV1SitesSiteIdStatsAssetsSearchRoute,
  getApiV1SitesSiteIdStatsBeaconsRoute,
  getApiV1SitesSiteIdStatsBgpPeersCountRoute,
  getApiV1SitesSiteIdStatsBgpPeersSearchRoute,
  getApiV1SitesSiteIdStatsCallsCountRoute,
  getApiV1SitesSiteIdStatsCallsSearchRoute,
  getApiV1SitesSiteIdStatsClientsClientMacRoute,
  getApiV1SitesSiteIdStatsClientsRoute,
  getApiV1SitesSiteIdStatsDevicesDeviceIdClientsRoute,
  getApiV1SitesSiteIdStatsDevicesDeviceIdRoute,
  getApiV1SitesSiteIdStatsDevicesRoute,
  getApiV1SitesSiteIdStatsDiscoveredAssetsRoute,
  getApiV1SitesSiteIdStatsDiscoveredSwitchesCountRoute,
  getApiV1SitesSiteIdStatsDiscoveredSwitchesMetricsRoute,
  getApiV1SitesSiteIdStatsDiscoveredSwitchesSearchRoute,
  getApiV1SitesSiteIdStatsDiscoveredSwitchMetricsSearchRoute,
  getApiV1SitesSiteIdStatsFilteredAssetsRoute,
  getApiV1SitesSiteIdStatsGatewaysMetricsRoute,
  getApiV1SitesSiteIdStatsMapsMapIdClientsRoute,
  getApiV1SitesSiteIdStatsMapsMapIdDiscoveredAssetsRoute,
  getApiV1SitesSiteIdStatsMapsMapIdSdkclientsRoute,
  getApiV1SitesSiteIdStatsMapsMapIdUnconnectedClientsRoute,
  getApiV1SitesSiteIdStatsMxedgesMxedgeIdRoute,
  getApiV1SitesSiteIdStatsMxedgesRoute,
  getApiV1SitesSiteIdStatsPortsCountRoute,
  getApiV1SitesSiteIdStatsPortsSearchRoute,
  getApiV1SitesSiteIdStatsRoute,
  getApiV1SitesSiteIdStatsSdkclientsSdkclientIdRoute,
  getApiV1SitesSiteIdStatsSwitchesMetricsRoute,
  getApiV1SitesSiteIdStatsSwitchPortsCountRoute,
  getApiV1SitesSiteIdStatsSwitchPortsSearchRoute,
  getApiV1SitesSiteIdStatsWxrulesRoute,
  getApiV1SitesSiteIdStatsZonesRoute,
  getApiV1SitesSiteIdStatsZoneTypeZoneIdRoute,
  getApiV1SitesSiteIdSyntheticTestRoute,
  getApiV1SitesSiteIdUisettingsDerivedRoute,
  getApiV1SitesSiteIdUisettingsRoute,
  getApiV1SitesSiteIdUisettingsUisettingIdRoute,
  getApiV1SitesSiteIdVbeaconsRoute,
  getApiV1SitesSiteIdVbeaconsVbeaconIdRoute,
  getApiV1SitesSiteIdWebhooksRoute,
  getApiV1SitesSiteIdWebhooksWebhookIdRoute,
  getApiV1SitesSiteIdWiredClientsCountRoute,
  getApiV1SitesSiteIdWiredClientsSearchRoute,
  getApiV1SitesSiteIdWlansDerivedRoute,
  getApiV1SitesSiteIdWlansRoute,
  getApiV1SitesSiteIdWlansWlanIdRoute,
  getApiV1SitesSiteIdWxrulesDerivedRoute,
  getApiV1SitesSiteIdWxrulesRoute,
  getApiV1SitesSiteIdWxrulesWxrulesIdRoute,
  getApiV1SitesSiteIdWxtagsAppsRoute,
  getApiV1SitesSiteIdWxtagsRoute,
  getApiV1SitesSiteIdWxtagsWxtagIdClientsRoute,
  getApiV1SitesSiteIdWxtagsWxtagIdRoute,
  getApiV1SitesSiteIdWxtunnelsRoute,
  getApiV1SitesSiteIdWxtunnelsWxtunnelIdRoute,
  getApiV1SitesSiteIdZonesRoute,
  getApiV1SitesSiteIdZonesZoneIdRoute,
  getApiV1SitesSiteIdZoneTypeCountRoute,
  getApiV1SitesSiteIdZoneTypeVisitsSearchRoute,
  getApiV1UtilsTestTelstraRoute,
  postApiV1InstallerOrgsOrgIdDevicesDeviceMacImageNameRoute,
  postApiV1InstallerOrgsOrgIdDevicesDeviceMacLocateRoute,
  postApiV1InstallerOrgsOrgIdDevicesDeviceMacUnlocateRoute,
  postApiV1InstallerOrgsOrgIdDevicesRoute,
  postApiV1InstallerOrgsOrgIdSitesSiteNameMapsImportRoute,
  postApiV1InstallerOrgsOrgIdSitesSiteNameMapsMapIdRoute,
  postApiV1InviteVerifyTokenRoute,
  postApiV1LoginLookupRoute,
  postApiV1LoginOauthProviderRoute,
  postApiV1LoginRoute,
  postApiV1LoginTwoFactorRoute,
  postApiV1LogoutRoute,
  postApiV1MobileVerifySecretRoute,
  postApiV1MspsMspIdClaimRoute,
  postApiV1MspsMspIdInvitesRoute,
  postApiV1MspsMspIdLogoRoute,
  postApiV1MspsMspIdOrggroupsRoute,
  postApiV1MspsMspIdOrgsRoute,
  postApiV1MspsMspIdSsorolesRoute,
  postApiV1MspsMspIdSsosRoute,
  postApiV1MspsRoute,
  postApiV1OrgsOrgIdAlarmsAckAllRoute,
  postApiV1OrgsOrgIdAlarmsAckRoute,
  postApiV1OrgsOrgIdAlarmsAlarmIdAckRoute,
  postApiV1OrgsOrgIdAlarmsUnackAllRoute,
  postApiV1OrgsOrgIdAlarmsUnackRoute,
  postApiV1OrgsOrgIdAlarmtemplatesRoute,
  postApiV1OrgsOrgIdAlarmtemplatesSuppressRoute,
  postApiV1OrgsOrgIdApitokensRoute,
  postApiV1OrgsOrgIdAptemplatesRoute,
  postApiV1OrgsOrgIdAssetfiltersRoute,
  postApiV1OrgsOrgIdAssetsImportRoute,
  postApiV1OrgsOrgIdAssetsRoute,
  postApiV1OrgsOrgIdCertRegenerateRoute,
  postApiV1OrgsOrgIdClaimRoute,
  postApiV1OrgsOrgIdCloneRoute,
  postApiV1OrgsOrgIdCrlTruncateRoute,
  postApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdAssignRoute,
  postApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdUnassignRoute,
  postApiV1OrgsOrgIdDeviceprofilesRoute,
  postApiV1OrgsOrgIdDevicesUpgradeRoute,
  postApiV1OrgsOrgIdEvpnTopologiesRoute,
  postApiV1OrgsOrgIdGatewaytemplatesRoute,
  postApiV1OrgsOrgIdInventoryReevaluateAutoAssignmentRoute,
  postApiV1OrgsOrgIdInventoryReplaceRoute,
  postApiV1OrgsOrgIdInventoryRoute,
  postApiV1OrgsOrgIdInvitesRoute,
  postApiV1OrgsOrgIdJsiDevicesDeviceMacShellRoute,
  postApiV1OrgsOrgIdJsiDevicesDeviceMacUpgradeRoute,
  postApiV1OrgsOrgIdMapsImportRoute,
  postApiV1OrgsOrgIdMxclustersRoute,
  postApiV1OrgsOrgIdMxedgesAssignRoute,
  postApiV1OrgsOrgIdMxedgesClaimRoute,
  postApiV1OrgsOrgIdMxedgesMxedgeIdRestartRoute,
  postApiV1OrgsOrgIdMxedgesMxedgeIdServicesNameActionRoute,
  postApiV1OrgsOrgIdMxedgesMxedgeIdServicesTuntermBouncePortRoute,
  postApiV1OrgsOrgIdMxedgesMxedgeIdSupportRoute,
  postApiV1OrgsOrgIdMxedgesMxedgeIdUnregisterRoute,
  postApiV1OrgsOrgIdMxedgesMxedgeIdUpgradeRoute,
  postApiV1OrgsOrgIdMxedgesRoute,
  postApiV1OrgsOrgIdMxedgesUnassignRoute,
  postApiV1OrgsOrgIdMxedgesUpgradeRoute,
  postApiV1OrgsOrgIdMxtunnelsRoute,
  postApiV1OrgsOrgIdNacrulesRoute,
  postApiV1OrgsOrgIdNactagsRoute,
  postApiV1OrgsOrgIdNetworksRoute,
  postApiV1OrgsOrgIdNetworktemplatesRoute,
  postApiV1OrgsOrgIdPskportalsRoute,
  postApiV1OrgsOrgIdPsksImportRoute,
  postApiV1OrgsOrgIdPsksPskIdDeleteOldPassphraseRoute,
  postApiV1OrgsOrgIdPsksRoute,
  postApiV1OrgsOrgIdRftemplatesRoute,
  postApiV1OrgsOrgIdSdkinvitesRoute,
  postApiV1OrgsOrgIdSdkinvitesSdkinviteIdEmailRoute,
  postApiV1OrgsOrgIdSdkinvitesSdkinviteIdSmsRoute,
  postApiV1OrgsOrgIdSdktemplatesRoute,
  postApiV1OrgsOrgIdSecpoliciesRoute,
  postApiV1OrgsOrgIdServicepoliciesRoute,
  postApiV1OrgsOrgIdServicesRoute,
  postApiV1OrgsOrgIdSettingBlacklistRoute,
  postApiV1OrgsOrgIdSettingCradlepointSetupRoute,
  postApiV1OrgsOrgIdSettingCradlepointSyncRoute,
  postApiV1OrgsOrgIdSettingJuniperLinkAccountsRoute,
  postApiV1OrgsOrgIdSettingPcapBucketSetupRoute,
  postApiV1OrgsOrgIdSettingPcapBucketVerifyRoute,
  postApiV1OrgsOrgIdSettingZscalerSetupRoute,
  postApiV1OrgsOrgIdSitegroupsRoute,
  postApiV1OrgsOrgIdSitesRoute,
  postApiV1OrgsOrgIdSitesSiteNameMapsImportRoute,
  postApiV1OrgsOrgIdSitetemplatesRoute,
  postApiV1OrgsOrgIdSsorolesRoute,
  postApiV1OrgsOrgIdSsosRoute,
  postApiV1OrgsOrgIdSsrUpgradeRoute,
  postApiV1OrgsOrgIdSsrUpgradeUpgradeIdCancelRoute,
  postApiV1OrgsOrgIdSubscriptionsRoute,
  postApiV1OrgsOrgIdTemplatesRoute,
  postApiV1OrgsOrgIdTemplatesTemplateIdCloneRoute,
  postApiV1OrgsOrgIdTicketsRoute,
  postApiV1OrgsOrgIdTicketsTicketIdCommentsRoute,
  postApiV1OrgsOrgIdVpnsRoute,
  postApiV1OrgsOrgIdWebhooksRoute,
  postApiV1OrgsOrgIdWlansRoute,
  postApiV1OrgsOrgIdWlansWlanIdPortalImageRoute,
  postApiV1OrgsOrgIdWxrulesRoute,
  postApiV1OrgsOrgIdWxtagsRoute,
  postApiV1OrgsOrgIdWxtunnelsRoute,
  postApiV1OrgsRoute,
  postApiV1RecoverRoute,
  postApiV1RecoverVerifyTokenRoute,
  postApiV1RegisterRoute,
  postApiV1RegisterVerifyTokenRoute,
  postApiV1SelfApitokensRoute,
  postApiV1SelfOauthProviderRoute,
  postApiV1SelfTwoFactorVerifyRoute,
  postApiV1SelfUpdateRoute,
  postApiV1SitesSiteIdAlarmsAckAllRoute,
  postApiV1SitesSiteIdAlarmsAckRoute,
  postApiV1SitesSiteIdAlarmsAlarmIdAckRoute,
  postApiV1SitesSiteIdAlarmsAlarmIdUnackRoute,
  postApiV1SitesSiteIdAlarmsUnackAllRoute,
  postApiV1SitesSiteIdAlarmsUnackRoute,
  postApiV1SitesSiteIdAssetfiltersRoute,
  postApiV1SitesSiteIdAssetsImportRoute,
  postApiV1SitesSiteIdAssetsRoute,
  postApiV1SitesSiteIdBeaconsRoute,
  postApiV1SitesSiteIdClientsClientMacDisconnectRoute,
  postApiV1SitesSiteIdClientsClientMacUnauthorizeRoute,
  postApiV1SitesSiteIdClientsDisconnectRoute,
  postApiV1SitesSiteIdClientsUnauthorizeRoute,
  postApiV1SitesSiteIdDevicesDeviceIdArpRoute,
  postApiV1SitesSiteIdDevicesDeviceIdBouncePortRoute,
  postApiV1SitesSiteIdDevicesDeviceIdCableTestRoute,
  postApiV1SitesSiteIdDevicesDeviceIdCheckRadiusServerRoute,
  postApiV1SitesSiteIdDevicesDeviceIdClearArpRoute,
  postApiV1SitesSiteIdDevicesDeviceIdClearBgpRoute,
  postApiV1SitesSiteIdDevicesDeviceIdClearBpduErrorRoute,
  postApiV1SitesSiteIdDevicesDeviceIdClearMacsRoute,
  postApiV1SitesSiteIdDevicesDeviceIdHaRoute,
  postApiV1SitesSiteIdDevicesDeviceIdImageImageNumberRoute,
  postApiV1SitesSiteIdDevicesDeviceIdLocateRoute,
  postApiV1SitesSiteIdDevicesDeviceIdPingRoute,
  postApiV1SitesSiteIdDevicesDeviceIdPollStatsRoute,
  postApiV1SitesSiteIdDevicesDeviceIdReleaseDhcpRoute,
  postApiV1SitesSiteIdDevicesDeviceIdRequestZtpPasswordRoute,
  postApiV1SitesSiteIdDevicesDeviceIdResolveDnsRoute,
  postApiV1SitesSiteIdDevicesDeviceIdRestartRoute,
  postApiV1SitesSiteIdDevicesDeviceIdServicePingRoute,
  postApiV1SitesSiteIdDevicesDeviceIdShowRouteRoute,
  postApiV1SitesSiteIdDevicesDeviceIdShowSessionRoute,
  postApiV1SitesSiteIdDevicesDeviceIdSnapshotRoute,
  postApiV1SitesSiteIdDevicesDeviceIdSupportRoute,
  postApiV1SitesSiteIdDevicesDeviceIdSyntheticTestRoute,
  postApiV1SitesSiteIdDevicesDeviceIdTracerouteRoute,
  postApiV1SitesSiteIdDevicesDeviceIdUnlocateRoute,
  postApiV1SitesSiteIdDevicesDeviceIdUpgradeRoute,
  postApiV1SitesSiteIdDevicesDeviceIdVcRoute,
  postApiV1SitesSiteIdDevicesDeviceIdVcVcPortRoute,
  postApiV1SitesSiteIdDevicesImportRoute,
  postApiV1SitesSiteIdDevicesReprovisionRoute,
  postApiV1SitesSiteIdDevicesResetRadioConfigRoute,
  postApiV1SitesSiteIdDevicesRestartRoute,
  postApiV1SitesSiteIdDevicesRoute,
  postApiV1SitesSiteIdDevicesUpgradeRoute,
  postApiV1SitesSiteIdDevicesUpgradeUpgradeIdCancelRoute,
  postApiV1SitesSiteIdDevicesZeriozeRoute,
  postApiV1SitesSiteIdEvpnTopologiesRoute,
  postApiV1SitesSiteIdLocationMlResetMapMapIdRoute,
  postApiV1SitesSiteIdMapsImportRoute,
  postApiV1SitesSiteIdMapsMapIdAutoOrientRoute,
  postApiV1SitesSiteIdMapsMapIdAutoPlacementRoute,
  postApiV1SitesSiteIdMapsMapIdClearAutoOrientRoute,
  postApiV1SitesSiteIdMapsMapIdClearAutoplacementRoute,
  postApiV1SitesSiteIdMapsMapIdImageRoute,
  postApiV1SitesSiteIdMapsMapIdReplaceRoute,
  postApiV1SitesSiteIdMapsMapIdRevertAutoOrientRoute,
  postApiV1SitesSiteIdMapsMapIdRevertAutoplacementRoute,
  postApiV1SitesSiteIdMapsMapIdSetMapRoute,
  postApiV1SitesSiteIdMapsMapIdWayfindingImportRoute,
  postApiV1SitesSiteIdMapsRoute,
  postApiV1SitesSiteIdMxedgesMxedgeIdSupportRoute,
  postApiV1SitesSiteIdMxedgesRoute,
  postApiV1SitesSiteIdMxtunnelsMxtunnelIdPreemptApsRoute,
  postApiV1SitesSiteIdPcapsCaptureRoute,
  postApiV1SitesSiteIdPsksImportRoute,
  postApiV1SitesSiteIdPsksRoute,
  postApiV1SitesSiteIdRfdiagsRfdiagIdStopRoute,
  postApiV1SitesSiteIdRfdiagsRoute,
  postApiV1SitesSiteIdRoguesRogueBssidDeauthClientsRoute,
  postApiV1SitesSiteIdRrmOptimizeRoute,
  postApiV1SitesSiteIdRssizonesRoute,
  postApiV1SitesSiteIdSettingBlacklistRoute,
  postApiV1SitesSiteIdSettingWatchedStationRoute,
  postApiV1SitesSiteIdSettingWhitelistRoute,
  postApiV1SitesSiteIdSleScopeScopeIdMetricMetricThresholdRoute,
  postApiV1SitesSiteIdSsrDeviceIdUpgradeRoute,
  postApiV1SitesSiteIdSubscriptionsRoute,
  postApiV1SitesSiteIdSyntheticTestRoute,
  postApiV1SitesSiteIdUisettingsRoute,
  postApiV1SitesSiteIdUisettingsUisettingIdRoute,
  postApiV1SitesSiteIdVbeaconsRoute,
  postApiV1SitesSiteIdWebhooksRoute,
  postApiV1SitesSiteIdWebhooksWebhookIdPingRoute,
  postApiV1SitesSiteIdWlansRoute,
  postApiV1SitesSiteIdWlansWlanIdPortalImageRoute,
  postApiV1SitesSiteIdWxrulesRoute,
  postApiV1SitesSiteIdWxtagsRoute,
  postApiV1SitesSiteIdWxtunnelsRoute,
  postApiV1SitesSiteIdZonesRoute,
  postApiV1UtilsTestTwilioRoute,
  putApiV1InstallerOrgsOrgIdDevicesDeviceMacRoute,
  putApiV1InstallerOrgsOrgIdSitesSiteNameMapsMapIdRoute,
  putApiV1InstallerOrgsOrgIdSitesSiteNameRoute,
  putApiV1MspsMspIdAdminsAdminIdRoute,
  putApiV1MspsMspIdInvitesInviteIdRoute,
  putApiV1MspsMspIdLicensesRoute,
  putApiV1MspsMspIdOrggroupsOrggroupIdRoute,
  putApiV1MspsMspIdOrgsRoute,
  putApiV1MspsMspIdRoute,
  putApiV1MspsMspIdSsorolesSsoroleIdRoute,
  putApiV1MspsMspIdSsosSsoIdRoute,
  putApiV1OrgsOrgIdAdminsAdminIdRoute,
  putApiV1OrgsOrgIdAlarmtemplatesAlarmtemplateIdRoute,
  putApiV1OrgsOrgIdApitokensApitokenIdRoute,
  putApiV1OrgsOrgIdAptemplatesAptemplateIdRoute,
  putApiV1OrgsOrgIdAssetfiltersAssetfilterIdRoute,
  putApiV1OrgsOrgIdAssetsAssetIdRoute,
  putApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdRoute,
  putApiV1OrgsOrgIdEvpnTopologiesEvpnTopologyIdRoute,
  putApiV1OrgsOrgIdGatewaytemplatesGatewaytemplateIdRoute,
  putApiV1OrgsOrgIdGuestsGuestMacRoute,
  putApiV1OrgsOrgIdInventoryRoute,
  putApiV1OrgsOrgIdInvitesInviteIdRoute,
  putApiV1OrgsOrgIdLicensesRoute,
  putApiV1OrgsOrgIdMxclustersMxclusterIdRoute,
  putApiV1OrgsOrgIdMxedgesMxedgeIdRoute,
  putApiV1OrgsOrgIdMxtunnelsMxtunnelIdRoute,
  putApiV1OrgsOrgIdNacrulesNacruleIdRoute,
  putApiV1OrgsOrgIdNactagsNactagIdRoute,
  putApiV1OrgsOrgIdNetworksNetworkIdRoute,
  putApiV1OrgsOrgIdNetworktemplatesNetworktemplateIdRoute,
  putApiV1OrgsOrgIdOtherdevicesDeviceMacRoute,
  putApiV1OrgsOrgIdOtherdevicesRoute,
  putApiV1OrgsOrgIdPskportalsPskportalIdRoute,
  putApiV1OrgsOrgIdPsksPskIdRoute,
  putApiV1OrgsOrgIdPsksRoute,
  putApiV1OrgsOrgIdRftemplatesRftemplateIdRoute,
  putApiV1OrgsOrgIdRoute,
  putApiV1OrgsOrgIdSdkclientsSdkclientIdRoute,
  putApiV1OrgsOrgIdSdkinvitesSdkinviteIdRoute,
  putApiV1OrgsOrgIdSdktemplatesSdktemplateIdRoute,
  putApiV1OrgsOrgIdSecpoliciesSecpolicyIdRoute,
  putApiV1OrgsOrgIdServicepoliciesServicepolicyIdRoute,
  putApiV1OrgsOrgIdServicesServiceIdRoute,
  putApiV1OrgsOrgIdSettingRoute,
  putApiV1OrgsOrgIdSitegroupsSitegroupIdRoute,
  putApiV1OrgsOrgIdSitetemplatesSitetemplateIdRoute,
  putApiV1OrgsOrgIdSsorolesSsoroleIdRoute,
  putApiV1OrgsOrgIdSsosSsoIdRoute,
  putApiV1OrgsOrgIdTemplatesTemplateIdRoute,
  putApiV1OrgsOrgIdTicketsTicketIdRoute,
  putApiV1OrgsOrgIdVpnsVpnIdRoute,
  putApiV1OrgsOrgIdWebhooksWebhookIdRoute,
  putApiV1OrgsOrgIdWlansWlanIdPortalTemplateRoute,
  putApiV1OrgsOrgIdWlansWlanIdRoute,
  putApiV1OrgsOrgIdWxrulesWxrulesIdRoute,
  putApiV1OrgsOrgIdWxtagsWxtagIdRoute,
  putApiV1OrgsOrgIdWxtunnelsWxtunnelIdRoute,
  putApiV1SelfRoute,
  putApiV1SitesSiteIdAssetfiltersAssetfilterIdRoute,
  putApiV1SitesSiteIdAssetsAssetIdRoute,
  putApiV1SitesSiteIdBeaconsBeaconIdRoute,
  putApiV1SitesSiteIdDevicesDeviceIdHaRoute,
  putApiV1SitesSiteIdDevicesDeviceIdIotRoute,
  putApiV1SitesSiteIdDevicesDeviceIdLocalPortConfigRoute,
  putApiV1SitesSiteIdDevicesDeviceIdRoute,
  putApiV1SitesSiteIdDevicesDeviceIdVcRoute,
  putApiV1SitesSiteIdEvpnTopologiesEvpnTopologyIdRoute,
  putApiV1SitesSiteIdGuestsGuestMacRoute,
  putApiV1SitesSiteIdLocationMlDeviceDeviceIdRoute,
  putApiV1SitesSiteIdLocationMlMapMapIdRoute,
  putApiV1SitesSiteIdMapsMapIdRoute,
  putApiV1SitesSiteIdMxedgesMxedgeIdRoute,
  putApiV1SitesSiteIdPsksPskIdRoute,
  putApiV1SitesSiteIdPsksRoute,
  putApiV1SitesSiteIdRfdiagsRfdiagIdRoute,
  putApiV1SitesSiteIdRoute,
  putApiV1SitesSiteIdRssizonesRssizoneIdRoute,
  putApiV1SitesSiteIdSettingRoute,
  putApiV1SitesSiteIdSleScopeScopeIdMetricMetricThresholdRoute,
  putApiV1SitesSiteIdVbeaconsVbeaconIdRoute,
  putApiV1SitesSiteIdWebhooksWebhookIdRoute,
  putApiV1SitesSiteIdWlansWlanIdPortalTemplateRoute,
  putApiV1SitesSiteIdWlansWlanIdRoute,
  putApiV1SitesSiteIdWxrulesWxrulesIdRoute,
  putApiV1SitesSiteIdWxtagsWxtagIdRoute,
  putApiV1SitesSiteIdWxtunnelsWxtunnelIdRoute,
  putApiV1SitesSiteIdZonesZoneIdRoute,
} from '../routes'

export const getApiV1ConstAlarmDefsRouteHandler: RouteHandler<
  typeof getApiV1ConstAlarmDefsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ConstApChannelsRouteHandler: RouteHandler<
  typeof getApiV1ConstApChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ConstApLedStatusRouteHandler: RouteHandler<
  typeof getApiV1ConstApLedStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ConstApplicationsRouteHandler: RouteHandler<
  typeof getApiV1ConstApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ConstCallEventsRouteHandler: RouteHandler<
  typeof getApiV1ConstCallEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ConstClientEventsRouteHandler: RouteHandler<
  typeof getApiV1ConstClientEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ConstCountriesRouteHandler: RouteHandler<
  typeof getApiV1ConstCountriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ConstDefaultGatewayConfigRouteHandler: RouteHandler<
  typeof getApiV1ConstDefaultGatewayConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ConstDeviceEventsRouteHandler: RouteHandler<
  typeof getApiV1ConstDeviceEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ConstDeviceModelsRouteHandler: RouteHandler<
  typeof getApiV1ConstDeviceModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ConstInsightMetricsRouteHandler: RouteHandler<
  typeof getApiV1ConstInsightMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ConstLanguagesRouteHandler: RouteHandler<
  typeof getApiV1ConstLanguagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ConstMxedgeEventsRouteHandler: RouteHandler<
  typeof getApiV1ConstMxedgeEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ConstMxedgeModelsRouteHandler: RouteHandler<
  typeof getApiV1ConstMxedgeModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ConstSystemEventsRouteHandler: RouteHandler<
  typeof getApiV1ConstSystemEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ConstTrafficTypesRouteHandler: RouteHandler<
  typeof getApiV1ConstTrafficTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1InstallerOrgsOrgIdAlarmtemplatesRouteHandler: RouteHandler<
  typeof getApiV1InstallerOrgsOrgIdAlarmtemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1InstallerOrgsOrgIdDeviceprofilesRouteHandler: RouteHandler<
  typeof getApiV1InstallerOrgsOrgIdDeviceprofilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1InstallerOrgsOrgIdDevicesRouteHandler: RouteHandler<
  typeof getApiV1InstallerOrgsOrgIdDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1InstallerOrgsOrgIdDevicesRouteHandler: RouteHandler<
  typeof postApiV1InstallerOrgsOrgIdDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1InstallerOrgsOrgIdDevicesDeviceMacRouteHandler: RouteHandler<
  typeof deleteApiV1InstallerOrgsOrgIdDevicesDeviceMacRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1InstallerOrgsOrgIdDevicesDeviceMacRouteHandler: RouteHandler<
  typeof putApiV1InstallerOrgsOrgIdDevicesDeviceMacRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1InstallerOrgsOrgIdDevicesDeviceMacLocateRouteHandler: RouteHandler<
  typeof postApiV1InstallerOrgsOrgIdDevicesDeviceMacLocateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1InstallerOrgsOrgIdDevicesDeviceMacUnlocateRouteHandler: RouteHandler<
  typeof postApiV1InstallerOrgsOrgIdDevicesDeviceMacUnlocateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1InstallerOrgsOrgIdDevicesDeviceMacImageNameRouteHandler: RouteHandler<
  typeof deleteApiV1InstallerOrgsOrgIdDevicesDeviceMacImageNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1InstallerOrgsOrgIdDevicesDeviceMacImageNameRouteHandler: RouteHandler<
  typeof postApiV1InstallerOrgsOrgIdDevicesDeviceMacImageNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1InstallerOrgsOrgIdRftemplatesRouteHandler: RouteHandler<
  typeof getApiV1InstallerOrgsOrgIdRftemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1InstallerOrgsOrgIdSecpoliciesRouteHandler: RouteHandler<
  typeof getApiV1InstallerOrgsOrgIdSecpoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1InstallerOrgsOrgIdSitegroupsRouteHandler: RouteHandler<
  typeof getApiV1InstallerOrgsOrgIdSitegroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1InstallerOrgsOrgIdSitesRouteHandler: RouteHandler<
  typeof getApiV1InstallerOrgsOrgIdSitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1InstallerOrgsOrgIdSitesSiteNameRouteHandler: RouteHandler<
  typeof putApiV1InstallerOrgsOrgIdSitesSiteNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1InstallerOrgsOrgIdSitesSiteNameMapsRouteHandler: RouteHandler<
  typeof getApiV1InstallerOrgsOrgIdSitesSiteNameMapsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1InstallerOrgsOrgIdSitesSiteNameMapsImportRouteHandler: RouteHandler<
  typeof postApiV1InstallerOrgsOrgIdSitesSiteNameMapsImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1InstallerOrgsOrgIdSitesSiteNameMapsMapIdRouteHandler: RouteHandler<
  typeof deleteApiV1InstallerOrgsOrgIdSitesSiteNameMapsMapIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1InstallerOrgsOrgIdSitesSiteNameMapsMapIdRouteHandler: RouteHandler<
  typeof postApiV1InstallerOrgsOrgIdSitesSiteNameMapsMapIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1InstallerOrgsOrgIdSitesSiteNameMapsMapIdRouteHandler: RouteHandler<
  typeof putApiV1InstallerOrgsOrgIdSitesSiteNameMapsMapIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1InstallerSitesSiteNameOptimizeRouteHandler: RouteHandler<
  typeof getApiV1InstallerSitesSiteNameOptimizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1InviteVerifyTokenRouteHandler: RouteHandler<
  typeof postApiV1InviteVerifyTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LoginRouteHandler: RouteHandler<typeof postApiV1LoginRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LoginLookupRouteHandler: RouteHandler<
  typeof postApiV1LoginLookupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1LoginOauthProviderRouteHandler: RouteHandler<
  typeof deleteApiV1LoginOauthProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1LoginOauthProviderRouteHandler: RouteHandler<
  typeof getApiV1LoginOauthProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LoginOauthProviderRouteHandler: RouteHandler<
  typeof postApiV1LoginOauthProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LoginTwoFactorRouteHandler: RouteHandler<
  typeof postApiV1LoginTwoFactorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1LogoutRouteHandler: RouteHandler<typeof postApiV1LogoutRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1MobileVerifySecretRouteHandler: RouteHandler<
  typeof postApiV1MobileVerifySecretRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1MspsRouteHandler: RouteHandler<typeof postApiV1MspsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1MspsMspIdRouteHandler: RouteHandler<
  typeof deleteApiV1MspsMspIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MspsMspIdRouteHandler: RouteHandler<typeof getApiV1MspsMspIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiV1MspsMspIdRouteHandler: RouteHandler<typeof putApiV1MspsMspIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1MspsMspIdAdminsRouteHandler: RouteHandler<
  typeof getApiV1MspsMspIdAdminsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1MspsMspIdAdminsAdminIdRouteHandler: RouteHandler<
  typeof deleteApiV1MspsMspIdAdminsAdminIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MspsMspIdAdminsAdminIdRouteHandler: RouteHandler<
  typeof getApiV1MspsMspIdAdminsAdminIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1MspsMspIdAdminsAdminIdRouteHandler: RouteHandler<
  typeof putApiV1MspsMspIdAdminsAdminIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1MspsMspIdClaimRouteHandler: RouteHandler<
  typeof postApiV1MspsMspIdClaimRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MspsMspIdInsightsMetricRouteHandler: RouteHandler<
  typeof getApiV1MspsMspIdInsightsMetricRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MspsMspIdInventoryDeviceMacRouteHandler: RouteHandler<
  typeof getApiV1MspsMspIdInventoryDeviceMacRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1MspsMspIdInvitesRouteHandler: RouteHandler<
  typeof postApiV1MspsMspIdInvitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1MspsMspIdInvitesInviteIdRouteHandler: RouteHandler<
  typeof deleteApiV1MspsMspIdInvitesInviteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1MspsMspIdInvitesInviteIdRouteHandler: RouteHandler<
  typeof putApiV1MspsMspIdInvitesInviteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MspsMspIdLicensesRouteHandler: RouteHandler<
  typeof getApiV1MspsMspIdLicensesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1MspsMspIdLicensesRouteHandler: RouteHandler<
  typeof putApiV1MspsMspIdLicensesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1MspsMspIdLogoRouteHandler: RouteHandler<
  typeof deleteApiV1MspsMspIdLogoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1MspsMspIdLogoRouteHandler: RouteHandler<
  typeof postApiV1MspsMspIdLogoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MspsMspIdLogsRouteHandler: RouteHandler<
  typeof getApiV1MspsMspIdLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MspsMspIdLogsCountRouteHandler: RouteHandler<
  typeof getApiV1MspsMspIdLogsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MspsMspIdOrggroupsRouteHandler: RouteHandler<
  typeof getApiV1MspsMspIdOrggroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1MspsMspIdOrggroupsRouteHandler: RouteHandler<
  typeof postApiV1MspsMspIdOrggroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1MspsMspIdOrggroupsOrggroupIdRouteHandler: RouteHandler<
  typeof deleteApiV1MspsMspIdOrggroupsOrggroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MspsMspIdOrggroupsOrggroupIdRouteHandler: RouteHandler<
  typeof getApiV1MspsMspIdOrggroupsOrggroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1MspsMspIdOrggroupsOrggroupIdRouteHandler: RouteHandler<
  typeof putApiV1MspsMspIdOrggroupsOrggroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MspsMspIdOrgsRouteHandler: RouteHandler<
  typeof getApiV1MspsMspIdOrgsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1MspsMspIdOrgsRouteHandler: RouteHandler<
  typeof postApiV1MspsMspIdOrgsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1MspsMspIdOrgsRouteHandler: RouteHandler<
  typeof putApiV1MspsMspIdOrgsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MspsMspIdOrgsSearchRouteHandler: RouteHandler<
  typeof getApiV1MspsMspIdOrgsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MspsMspIdOrgsOrgIdRouteHandler: RouteHandler<
  typeof getApiV1MspsMspIdOrgsOrgIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MspsMspIdSearchRouteHandler: RouteHandler<
  typeof getApiV1MspsMspIdSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MspsMspIdSsorolesRouteHandler: RouteHandler<
  typeof getApiV1MspsMspIdSsorolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1MspsMspIdSsorolesRouteHandler: RouteHandler<
  typeof postApiV1MspsMspIdSsorolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1MspsMspIdSsorolesSsoroleIdRouteHandler: RouteHandler<
  typeof deleteApiV1MspsMspIdSsorolesSsoroleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1MspsMspIdSsorolesSsoroleIdRouteHandler: RouteHandler<
  typeof putApiV1MspsMspIdSsorolesSsoroleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MspsMspIdSsosRouteHandler: RouteHandler<
  typeof getApiV1MspsMspIdSsosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1MspsMspIdSsosRouteHandler: RouteHandler<
  typeof postApiV1MspsMspIdSsosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1MspsMspIdSsosSsoIdRouteHandler: RouteHandler<
  typeof deleteApiV1MspsMspIdSsosSsoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1MspsMspIdSsosSsoIdRouteHandler: RouteHandler<
  typeof putApiV1MspsMspIdSsosSsoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MspsMspIdSsosSsoIdFailuresRouteHandler: RouteHandler<
  typeof getApiV1MspsMspIdSsosSsoIdFailuresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MspsMspIdSsosSsoIdMetadataRouteHandler: RouteHandler<
  typeof getApiV1MspsMspIdSsosSsoIdMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MspsMspIdSsosSsoIdMetadataXmlRouteHandler: RouteHandler<
  typeof getApiV1MspsMspIdSsosSsoIdMetadataXmlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MspsMspIdStatsLicensesRouteHandler: RouteHandler<
  typeof getApiV1MspsMspIdStatsLicensesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MspsMspIdStatsOrgsRouteHandler: RouteHandler<
  typeof getApiV1MspsMspIdStatsOrgsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MspsMspIdTicketsRouteHandler: RouteHandler<
  typeof getApiV1MspsMspIdTicketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MspsMspIdTicketsCountRouteHandler: RouteHandler<
  typeof getApiV1MspsMspIdTicketsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsRouteHandler: RouteHandler<typeof postApiV1OrgsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdRouteHandler: RouteHandler<typeof getApiV1OrgsOrgIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdRouteHandler: RouteHandler<typeof putApiV1OrgsOrgIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgId128routersRegisterCmdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgId128routersRegisterCmdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdAdminsRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdAdminsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdAdminsAdminIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdAdminsAdminIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdAdminsAdminIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdAdminsAdminIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdAlarmsAckRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdAlarmsAckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdAlarmsAckAllRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdAlarmsAckAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdAlarmsCountRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdAlarmsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdAlarmsSearchRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdAlarmsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdAlarmsUnackRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdAlarmsUnackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdAlarmsUnackAllRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdAlarmsUnackAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdAlarmsAlarmIdAckRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdAlarmsAlarmIdAckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdAlarmtemplatesRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdAlarmtemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdAlarmtemplatesRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdAlarmtemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdAlarmtemplatesSuppressRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdAlarmtemplatesSuppressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdAlarmtemplatesAlarmtemplateIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdAlarmtemplatesAlarmtemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdAlarmtemplatesAlarmtemplateIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdAlarmtemplatesAlarmtemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdAlarmtemplatesAlarmtemplateIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdAlarmtemplatesAlarmtemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdApitokensRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdApitokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdApitokensRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdApitokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdApitokensApitokenIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdApitokensApitokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdApitokensApitokenIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdApitokensApitokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdApitokensApitokenIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdApitokensApitokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdAptemplatesRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdAptemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdAptemplatesRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdAptemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdAptemplatesAptemplateIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdAptemplatesAptemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdAptemplatesAptemplateIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdAptemplatesAptemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdAptemplatesAptemplateIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdAptemplatesAptemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdAssetfiltersRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdAssetfiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdAssetfiltersRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdAssetfiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdAssetfiltersAssetfilterIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdAssetfiltersAssetfilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdAssetfiltersAssetfilterIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdAssetfiltersAssetfilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdAssetfiltersAssetfilterIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdAssetfiltersAssetfilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdAssetsRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdAssetsRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdAssetsImportRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdAssetsImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdAssetsAssetIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdAssetsAssetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdAssetsAssetIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdAssetsAssetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdAssetsAssetIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdAssetsAssetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdCallEventsCountRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdCallEventsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdCallEventsSearchRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdCallEventsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdCertRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdCertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdCertRegenerateRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdCertRegenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdClaimRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdClaimRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdClientsCountRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdClientsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdClientsEventsSearchRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdClientsEventsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdClientsSearchRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdClientsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdClientsSessionsCountRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdClientsSessionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdClientsSessionsSearchRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdClientsSessionsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdCloneRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdCloneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdCrlRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdCrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdCrlTruncateRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdCrlTruncateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdDeviceprofilesRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdDeviceprofilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdDeviceprofilesRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdDeviceprofilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdAssignRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdAssignRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdUnassignRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdUnassignRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdDevicesRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdDevicesCountRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdDevicesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdDevicesEventsCountRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdDevicesEventsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdDevicesEventsSearchRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdDevicesEventsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdDevicesLastConfigCountRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdDevicesLastConfigCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdDevicesLastConfigSearchRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdDevicesLastConfigSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdDevicesRadioMacsRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdDevicesRadioMacsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdDevicesSearchRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdDevicesSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdDevicesUpgradeRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdDevicesUpgradeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdDevicesUpgradeRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdDevicesUpgradeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdDevicesUpgradeUpgradeIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdDevicesUpgradeUpgradeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdEvpnTopologiesRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdEvpnTopologiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdEvpnTopologiesRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdEvpnTopologiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdEvpnTopologiesEvpnTopologyIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdEvpnTopologiesEvpnTopologyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdEvpnTopologiesEvpnTopologyIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdEvpnTopologiesEvpnTopologyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdEvpnTopologiesEvpnTopologyIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdEvpnTopologiesEvpnTopologyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdGatewaytemplatesRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdGatewaytemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdGatewaytemplatesRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdGatewaytemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdGatewaytemplatesGatewaytemplateIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdGatewaytemplatesGatewaytemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdGatewaytemplatesGatewaytemplateIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdGatewaytemplatesGatewaytemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdGatewaytemplatesGatewaytemplateIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdGatewaytemplatesGatewaytemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdGuestsRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdGuestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdGuestsCountRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdGuestsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdGuestsSearchRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdGuestsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdGuestsGuestMacRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdGuestsGuestMacRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdGuestsGuestMacRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdGuestsGuestMacRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdGuestsGuestMacRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdGuestsGuestMacRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdInsightsSitesSleRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdInsightsSitesSleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdInsightsMetricRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdInsightsMetricRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdInventoryRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdInventoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdInventoryRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdInventoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdInventoryRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdInventoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdInventoryReevaluateAutoAssignmentRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdInventoryReevaluateAutoAssignmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdInventoryReplaceRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdInventoryReplaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdInvitesRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdInvitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdInvitesInviteIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdInvitesInviteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdInvitesInviteIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdInvitesInviteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdJsiDevicesRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdJsiDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdJsiDevicesOutboundSshCmdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdJsiDevicesOutboundSshCmdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdJsiDevicesDeviceMacShellRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdJsiDevicesDeviceMacShellRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdJsiDevicesDeviceMacUpgradeRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdJsiDevicesDeviceMacUpgradeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdJsiInventoryRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdJsiInventoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdJunosRegisterCmdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdJunosRegisterCmdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdLicensesRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdLicensesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdLicensesRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdLicensesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdLicensesUsagesRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdLicensesUsagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdLogsRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdLogsCountRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdLogsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdMapsImportRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdMapsImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdMxclustersRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdMxclustersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdMxclustersRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdMxclustersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdMxclustersMxclusterIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdMxclustersMxclusterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdMxclustersMxclusterIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdMxclustersMxclusterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdMxclustersMxclusterIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdMxclustersMxclusterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdMxedgesRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdMxedgesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdMxedgesRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdMxedgesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdMxedgesAssignRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdMxedgesAssignRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdMxedgesClaimRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdMxedgesClaimRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdMxedgesUnassignRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdMxedgesUnassignRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdMxedgesUpgradeRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdMxedgesUpgradeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdMxedgesUpgradeRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdMxedgesUpgradeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdMxedgesUpgradeUpgradeIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdMxedgesUpgradeUpgradeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdMxedgesVersionRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdMxedgesVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdMxedgesMxedgeIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdMxedgesMxedgeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdMxedgesMxedgeIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdMxedgesMxedgeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdMxedgesMxedgeIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdMxedgesMxedgeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdMxedgesMxedgeIdRestartRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdMxedgesMxedgeIdRestartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdMxedgesMxedgeIdServicesTuntermBouncePortRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdMxedgesMxedgeIdServicesTuntermBouncePortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdMxedgesMxedgeIdServicesNameActionRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdMxedgesMxedgeIdServicesNameActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdMxedgesMxedgeIdSupportRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdMxedgesMxedgeIdSupportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdMxedgesMxedgeIdUnregisterRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdMxedgesMxedgeIdUnregisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdMxedgesMxedgeIdUpgradeRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdMxedgesMxedgeIdUpgradeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdMxtunnelsRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdMxtunnelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdMxtunnelsRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdMxtunnelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdMxtunnelsMxtunnelIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdMxtunnelsMxtunnelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdMxtunnelsMxtunnelIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdMxtunnelsMxtunnelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdMxtunnelsMxtunnelIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdMxtunnelsMxtunnelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdNacrulesRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdNacrulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdNacrulesRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdNacrulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdNacrulesNacruleIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdNacrulesNacruleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdNacrulesNacruleIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdNacrulesNacruleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdNacrulesNacruleIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdNacrulesNacruleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdNactagsRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdNactagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdNactagsRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdNactagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdNactagsNactagIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdNactagsNactagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdNactagsNactagIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdNactagsNactagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdNactagsNactagIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdNactagsNactagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdNetworksRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdNetworksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdNetworksRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdNetworksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdNetworksNetworkIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdNetworksNetworkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdNetworksNetworkIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdNetworksNetworkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdNetworksNetworkIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdNetworksNetworkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdNetworktemplatesRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdNetworktemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdNetworktemplatesRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdNetworktemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdNetworktemplatesNetworktemplateIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdNetworktemplatesNetworktemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdNetworktemplatesNetworktemplateIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdNetworktemplatesNetworktemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdNetworktemplatesNetworktemplateIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdNetworktemplatesNetworktemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdOcdevicesOutboundSshCmdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdOcdevicesOutboundSshCmdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdOtherdevicesRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdOtherdevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdOtherdevicesRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdOtherdevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdOtherdevicesDeviceMacRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdOtherdevicesDeviceMacRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdOtherdevicesDeviceMacRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdOtherdevicesDeviceMacRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdOtherdevicesDeviceMacRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdOtherdevicesDeviceMacRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdPmaDashboardsRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdPmaDashboardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdPskportalsRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdPskportalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdPskportalsRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdPskportalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdPskportalsPskportalIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdPskportalsPskportalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdPskportalsPskportalIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdPskportalsPskportalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdPskportalsPskportalIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdPskportalsPskportalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdPsksRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdPsksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdPsksRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdPsksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdPsksRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdPsksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdPsksImportRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdPsksImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdPsksPskIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdPsksPskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdPsksPskIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdPsksPskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdPsksPskIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdPsksPskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdPsksPskIdDeleteOldPassphraseRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdPsksPskIdDeleteOldPassphraseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdRftemplatesRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdRftemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdRftemplatesRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdRftemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdRftemplatesRftemplateIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdRftemplatesRftemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdRftemplatesRftemplateIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdRftemplatesRftemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdRftemplatesRftemplateIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdRftemplatesRftemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdSdkclientsSdkclientIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdSdkclientsSdkclientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdSdkinvitesRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdSdkinvitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdSdkinvitesRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdSdkinvitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdSdkinvitesSdkinviteIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdSdkinvitesSdkinviteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdSdkinvitesSdkinviteIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdSdkinvitesSdkinviteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdSdkinvitesSdkinviteIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdSdkinvitesSdkinviteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdSdkinvitesSdkinviteIdEmailRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdSdkinvitesSdkinviteIdEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdSdkinvitesSdkinviteIdQrcodeRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdSdkinvitesSdkinviteIdQrcodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdSdkinvitesSdkinviteIdSmsRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdSdkinvitesSdkinviteIdSmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdSdktemplatesRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdSdktemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdSdktemplatesRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdSdktemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdSdktemplatesSdktemplateIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdSdktemplatesSdktemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdSdktemplatesSdktemplateIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdSdktemplatesSdktemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdSdktemplatesSdktemplateIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdSdktemplatesSdktemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdSecpoliciesRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdSecpoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdSecpoliciesRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdSecpoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdSecpoliciesSecpolicyIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdSecpoliciesSecpolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdSecpoliciesSecpolicyIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdSecpoliciesSecpolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdSecpoliciesSecpolicyIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdSecpoliciesSecpolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdServicepoliciesRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdServicepoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdServicepoliciesRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdServicepoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdServicepoliciesServicepolicyIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdServicepoliciesServicepolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdServicepoliciesServicepolicyIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdServicepoliciesServicepolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdServicepoliciesServicepolicyIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdServicepoliciesServicepolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdServicesRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdServicesRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdServicesServiceIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdServicesServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdServicesServiceIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdServicesServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdServicesServiceIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdServicesServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdSettingRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdSettingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdSettingRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdSettingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdSettingBlacklistRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdSettingBlacklistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdSettingBlacklistRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdSettingBlacklistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdSettingCradlepointSetupRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdSettingCradlepointSetupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdSettingCradlepointSyncRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdSettingCradlepointSyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdSettingJuniperLinkAccountsRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdSettingJuniperLinkAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdSettingJuniperLinkedAccountRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdSettingJuniperLinkedAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdSettingPcapBucketSetupRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdSettingPcapBucketSetupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdSettingPcapBucketVerifyRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdSettingPcapBucketVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdSettingZscalerSetupRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdSettingZscalerSetupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdSettingAppNameLinkRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdSettingAppNameLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdSettingAppNameLinkRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdSettingAppNameLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdSettingAppNameLinkAccountsRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdSettingAppNameLinkAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdSettingAppNameLinkAccountsRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdSettingAppNameLinkAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdSitegroupsRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdSitegroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdSitegroupsRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdSitegroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdSitegroupsSitegroupIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdSitegroupsSitegroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdSitegroupsSitegroupIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdSitegroupsSitegroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdSitegroupsSitegroupIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdSitegroupsSitegroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdSitesRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdSitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdSitesRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdSitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdSitesCountRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdSitesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdSitesSearchRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdSitesSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdSitesSiteNameMapsImportRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdSitesSiteNameMapsImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdSitetemplatesRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdSitetemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdSitetemplatesRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdSitetemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdSitetemplatesSitetemplateIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdSitetemplatesSitetemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdSitetemplatesSitetemplateIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdSitetemplatesSitetemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdSitetemplatesSitetemplateIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdSitetemplatesSitetemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdSsorolesRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdSsorolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdSsorolesRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdSsorolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdSsorolesSsoroleIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdSsorolesSsoroleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdSsorolesSsoroleIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdSsorolesSsoroleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdSsorolesSsoroleIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdSsorolesSsoroleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdSsosRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdSsosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdSsosRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdSsosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdSsosSsoIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdSsosSsoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdSsosSsoIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdSsosSsoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdSsosSsoIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdSsosSsoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdSsosSsoIdFailuresRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdSsosSsoIdFailuresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdSsosSsoIdMetadataRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdSsosSsoIdMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdSsosSsoIdMetadataXmlRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdSsosSsoIdMetadataXmlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdSsrUpgradeRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdSsrUpgradeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdSsrUpgradeRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdSsrUpgradeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdSsrUpgradeUpgradeIdCancelRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdSsrUpgradeUpgradeIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdSsrVersionsRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdSsrVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdStatsRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdStatsAssetsRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdStatsAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdStatsAssetsCountRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdStatsAssetsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdStatsAssetsSearchRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdStatsAssetsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdStatsBgpPeersCountRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdStatsBgpPeersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdStatsBgpPeersSearchRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdStatsBgpPeersSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdStatsDevicesRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdStatsDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdStatsMxedgesRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdStatsMxedgesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdStatsMxedgesMxedgeIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdStatsMxedgesMxedgeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdStatsOtherdevicesDeviceMacRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdStatsOtherdevicesDeviceMacRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdStatsPortsSearchRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdStatsPortsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdStatsSwitchPortsCountRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdStatsSwitchPortsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdStatsTunnelsCountRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdStatsTunnelsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdStatsTunnelsSearchRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdStatsTunnelsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdStatsVpnPeersCountRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdStatsVpnPeersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdStatsVpnPeersSearchRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdStatsVpnPeersSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdSubscriptionsRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdSubscriptionsRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdTemplatesRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdTemplatesRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdTemplatesTemplateIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdTemplatesTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdTemplatesTemplateIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdTemplatesTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdTemplatesTemplateIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdTemplatesTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdTemplatesTemplateIdCloneRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdTemplatesTemplateIdCloneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdTicketsRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdTicketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdTicketsRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdTicketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdTicketsCountRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdTicketsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdTicketsTicketIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdTicketsTicketIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdTicketsTicketIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdTicketsTicketIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdTicketsTicketIdCommentsRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdTicketsTicketIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdTroubleshootRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdTroubleshootRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdVpnsRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdVpnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdVpnsRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdVpnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdVpnsVpnIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdVpnsVpnIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdVpnsVpnIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdVpnsVpnIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdVpnsVpnIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdVpnsVpnIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdWebhooksRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdWebhooksRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdWiredClientsCountRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdWiredClientsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdWiredClientsSearchRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdWiredClientsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdWlansRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdWlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdWlansRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdWlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdWlansDerivedRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdWlansDerivedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdWlansWlanIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdWlansWlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdWlansWlanIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdWlansWlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdWlansWlanIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdWlansWlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdWlansWlanIdPortalImageRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdWlansWlanIdPortalImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdWlansWlanIdPortalImageRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdWlansWlanIdPortalImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdWlansWlanIdPortalTemplateRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdWlansWlanIdPortalTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdWxrulesRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdWxrulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdWxrulesRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdWxrulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdWxrulesDerivedRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdWxrulesDerivedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdWxrulesWxrulesIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdWxrulesWxrulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdWxrulesWxrulesIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdWxrulesWxrulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdWxrulesWxrulesIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdWxrulesWxrulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdWxtagsRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdWxtagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdWxtagsRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdWxtagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdWxtagsAppsRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdWxtagsAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdWxtagsWxtagIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdWxtagsWxtagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdWxtagsWxtagIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdWxtagsWxtagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdWxtagsWxtagIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdWxtagsWxtagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdWxtagsWxtagIdClientsRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdWxtagsWxtagIdClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdWxtunnelsRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdWxtunnelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1OrgsOrgIdWxtunnelsRouteHandler: RouteHandler<
  typeof postApiV1OrgsOrgIdWxtunnelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1OrgsOrgIdWxtunnelsWxtunnelIdRouteHandler: RouteHandler<
  typeof deleteApiV1OrgsOrgIdWxtunnelsWxtunnelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1OrgsOrgIdWxtunnelsWxtunnelIdRouteHandler: RouteHandler<
  typeof getApiV1OrgsOrgIdWxtunnelsWxtunnelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1OrgsOrgIdWxtunnelsWxtunnelIdRouteHandler: RouteHandler<
  typeof putApiV1OrgsOrgIdWxtunnelsWxtunnelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RecoverRouteHandler: RouteHandler<typeof postApiV1RecoverRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1RecoverVerifyTokenRouteHandler: RouteHandler<
  typeof postApiV1RecoverVerifyTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1RegisterRouteHandler: RouteHandler<typeof postApiV1RegisterRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1RegisterVerifyTokenRouteHandler: RouteHandler<
  typeof postApiV1RegisterVerifyTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SelfRouteHandler: RouteHandler<typeof deleteApiV1SelfRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SelfRouteHandler: RouteHandler<typeof getApiV1SelfRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SelfRouteHandler: RouteHandler<typeof putApiV1SelfRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SelfApitokensRouteHandler: RouteHandler<
  typeof getApiV1SelfApitokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SelfApitokensRouteHandler: RouteHandler<
  typeof postApiV1SelfApitokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SelfApitokensApitokenIdRouteHandler: RouteHandler<
  typeof deleteApiV1SelfApitokensApitokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SelfLogsRouteHandler: RouteHandler<typeof getApiV1SelfLogsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1SelfOauthProviderRouteHandler: RouteHandler<
  typeof getApiV1SelfOauthProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SelfOauthProviderRouteHandler: RouteHandler<
  typeof postApiV1SelfOauthProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SelfSubscriptionsRouteHandler: RouteHandler<
  typeof getApiV1SelfSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SelfTwoFactorTokenRouteHandler: RouteHandler<
  typeof getApiV1SelfTwoFactorTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SelfTwoFactorVerifyRouteHandler: RouteHandler<
  typeof postApiV1SelfTwoFactorVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SelfUpdateRouteHandler: RouteHandler<
  typeof postApiV1SelfUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SelfUpdateVerifyTokenRouteHandler: RouteHandler<
  typeof getApiV1SelfUpdateVerifyTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdAlarmsAckRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdAlarmsAckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdAlarmsAckAllRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdAlarmsAckAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdAlarmsCountRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdAlarmsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdAlarmsSearchRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdAlarmsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdAlarmsUnackRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdAlarmsUnackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdAlarmsUnackAllRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdAlarmsUnackAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdAlarmsAlarmIdAckRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdAlarmsAlarmIdAckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdAlarmsAlarmIdUnackRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdAlarmsAlarmIdUnackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdAnomalyClientClientMacMetricRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdAnomalyClientClientMacMetricRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdAnomalyDeviceDeviceMacMetricRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdAnomalyDeviceDeviceMacMetricRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdAnomalyMetricRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdAnomalyMetricRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdAppsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdAssetfiltersRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdAssetfiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdAssetfiltersRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdAssetfiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdAssetfiltersAssetfilterIdRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdAssetfiltersAssetfilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdAssetfiltersAssetfilterIdRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdAssetfiltersAssetfilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdAssetfiltersAssetfilterIdRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdAssetfiltersAssetfilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdAssetsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdAssetsRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdAssetsImportRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdAssetsImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdAssetsAssetIdRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdAssetsAssetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdAssetsAssetIdRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdAssetsAssetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdAssetsAssetIdRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdAssetsAssetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdBeaconsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdBeaconsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdBeaconsRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdBeaconsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdBeaconsBeaconIdRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdBeaconsBeaconIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdBeaconsBeaconIdRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdBeaconsBeaconIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdBeaconsBeaconIdRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdBeaconsBeaconIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdCallEventsCountRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdCallEventsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdCallEventsSearchRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdCallEventsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdClientsCountRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdClientsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdClientsDisconnectRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdClientsDisconnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdClientsEventsCountRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdClientsEventsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdClientsEventsSearchRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdClientsEventsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdClientsSearchRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdClientsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdClientsSessionsCountRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdClientsSessionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdClientsSessionsSearchRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdClientsSessionsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdClientsUnauthorizeRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdClientsUnauthorizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdClientsClientMacDisconnectRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdClientsClientMacDisconnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdClientsClientMacEventsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdClientsClientMacEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdClientsClientMacUnauthorizeRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdClientsClientMacUnauthorizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdDevicesRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdDevicesApChannelsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdDevicesApChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdDevicesConfigHistoryCountRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdDevicesConfigHistoryCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdDevicesConfigHistorySearchRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdDevicesConfigHistorySearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdDevicesCountRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdDevicesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdDevicesEventsCountRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdDevicesEventsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdDevicesEventsSearchRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdDevicesEventsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdDevicesExportRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdDevicesExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesImportRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdDevicesLastConfigCountRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdDevicesLastConfigCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdDevicesLastConfigSearchRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdDevicesLastConfigSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesReprovisionRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesReprovisionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesResetRadioConfigRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesResetRadioConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesRestartRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesRestartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdDevicesSearchRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdDevicesSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdDevicesUpgradeRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdDevicesUpgradeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesUpgradeRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesUpgradeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdDevicesUpgradeUpgradeIdRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdDevicesUpgradeUpgradeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesUpgradeUpgradeIdCancelRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesUpgradeUpgradeIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdDevicesVersionsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdDevicesVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesZeriozeRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesZeriozeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdDevicesDeviceIdRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdDevicesDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdDevicesDeviceIdRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdDevicesDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdDevicesDeviceIdRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdDevicesDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesDeviceIdArpRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesDeviceIdArpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesDeviceIdBouncePortRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesDeviceIdBouncePortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesDeviceIdCableTestRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesDeviceIdCableTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesDeviceIdCheckRadiusServerRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesDeviceIdCheckRadiusServerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesDeviceIdClearArpRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesDeviceIdClearArpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesDeviceIdClearBgpRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesDeviceIdClearBgpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesDeviceIdClearBpduErrorRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesDeviceIdClearBpduErrorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesDeviceIdClearMacsRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesDeviceIdClearMacsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdDevicesDeviceIdConfigCmdRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdDevicesDeviceIdConfigCmdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdDevicesDeviceIdHaRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdDevicesDeviceIdHaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesDeviceIdHaRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesDeviceIdHaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdDevicesDeviceIdHaRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdDevicesDeviceIdHaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdDevicesDeviceIdImageImageNumberRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdDevicesDeviceIdImageImageNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesDeviceIdImageImageNumberRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesDeviceIdImageImageNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdDevicesDeviceIdIotRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdDevicesDeviceIdIotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdDevicesDeviceIdIotRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdDevicesDeviceIdIotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdDevicesDeviceIdLocalPortConfigRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdDevicesDeviceIdLocalPortConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdDevicesDeviceIdLocalPortConfigRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdDevicesDeviceIdLocalPortConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesDeviceIdLocateRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesDeviceIdLocateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesDeviceIdPingRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesDeviceIdPingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesDeviceIdPollStatsRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesDeviceIdPollStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesDeviceIdReleaseDhcpRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesDeviceIdReleaseDhcpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesDeviceIdRequestZtpPasswordRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesDeviceIdRequestZtpPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesDeviceIdResolveDnsRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesDeviceIdResolveDnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesDeviceIdRestartRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesDeviceIdRestartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesDeviceIdServicePingRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesDeviceIdServicePingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesDeviceIdShowRouteRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesDeviceIdShowRouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesDeviceIdShowSessionRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesDeviceIdShowSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesDeviceIdSnapshotRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesDeviceIdSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesDeviceIdSupportRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesDeviceIdSupportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesDeviceIdSyntheticTestRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesDeviceIdSyntheticTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesDeviceIdTracerouteRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesDeviceIdTracerouteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesDeviceIdUnlocateRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesDeviceIdUnlocateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesDeviceIdUpgradeRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesDeviceIdUpgradeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdDevicesDeviceIdVcRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdDevicesDeviceIdVcRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdDevicesDeviceIdVcRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdDevicesDeviceIdVcRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesDeviceIdVcRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesDeviceIdVcRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdDevicesDeviceIdVcRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdDevicesDeviceIdVcRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdDevicesDeviceIdVcVcPortRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdDevicesDeviceIdVcVcPortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdEventsFastRoamRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdEventsFastRoamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdEventsInterferenceRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdEventsInterferenceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdEventsSystemCountRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdEventsSystemCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdEventsSystemSearchRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdEventsSystemSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdEvpnTopologiesRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdEvpnTopologiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdEvpnTopologiesRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdEvpnTopologiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdEvpnTopologiesEvpnTopologyIdRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdEvpnTopologiesEvpnTopologyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdEvpnTopologiesEvpnTopologyIdRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdEvpnTopologiesEvpnTopologyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdEvpnTopologiesEvpnTopologyIdRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdEvpnTopologiesEvpnTopologyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdGuestsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdGuestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdGuestsCountRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdGuestsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdGuestsSearchRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdGuestsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdGuestsGuestMacRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdGuestsGuestMacRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdGuestsGuestMacRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdGuestsGuestMacRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdGuestsGuestMacRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdGuestsGuestMacRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdInsightsClientClientMacMetricRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdInsightsClientClientMacMetricRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdInsightsDeviceDeviceMacMetricRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdInsightsDeviceDeviceMacMetricRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdInsightsRoguesRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdInsightsRoguesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdInsightsRoguesClientsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdInsightsRoguesClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdInsightsMetricRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdInsightsMetricRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdLicensesUsagesRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdLicensesUsagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdLocationCoverageRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdLocationCoverageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdLocationMlCurrentRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdLocationMlCurrentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdLocationMlDefaultsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdLocationMlDefaultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdLocationMlDeviceDeviceIdRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdLocationMlDeviceDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdLocationMlDeviceDeviceIdRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdLocationMlDeviceDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdLocationMlMapMapIdRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdLocationMlMapMapIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdLocationMlMapMapIdRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdLocationMlMapMapIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdLocationMlResetMapMapIdRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdLocationMlResetMapMapIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdLocationMlUpdatesRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdLocationMlUpdatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdMapsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdMapsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdMapsRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdMapsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdMapsImportRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdMapsImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdMapsMapIdRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdMapsMapIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdMapsMapIdRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdMapsMapIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdMapsMapIdRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdMapsMapIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdMapsMapIdAutoOrientRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdMapsMapIdAutoOrientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdMapsMapIdAutoOrientRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdMapsMapIdAutoOrientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdMapsMapIdAutoPlacementRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdMapsMapIdAutoPlacementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdMapsMapIdAutoPlacementRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdMapsMapIdAutoPlacementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdMapsMapIdAutoPlacementRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdMapsMapIdAutoPlacementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdMapsMapIdClearAutoOrientRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdMapsMapIdClearAutoOrientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdMapsMapIdClearAutoplacementRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdMapsMapIdClearAutoplacementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdMapsMapIdImageRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdMapsMapIdImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdMapsMapIdImageRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdMapsMapIdImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdMapsMapIdReplaceRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdMapsMapIdReplaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdMapsMapIdRevertAutoOrientRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdMapsMapIdRevertAutoOrientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdMapsMapIdRevertAutoplacementRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdMapsMapIdRevertAutoplacementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdMapsMapIdSetMapRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdMapsMapIdSetMapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdMapsMapIdWayfindingImportRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdMapsMapIdWayfindingImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdMxedgesRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdMxedgesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdMxedgesRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdMxedgesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdMxedgesMxedgeIdRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdMxedgesMxedgeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdMxedgesMxedgeIdRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdMxedgesMxedgeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdMxedgesMxedgeIdRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdMxedgesMxedgeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdMxedgesMxedgeIdSupportRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdMxedgesMxedgeIdSupportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdMxtunnelsMxtunnelIdPreemptApsRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdMxtunnelsMxtunnelIdPreemptApsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdOtherdevicesRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdOtherdevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdPcapsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdPcapsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdPcapsCaptureRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdPcapsCaptureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdPcapsCaptureRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdPcapsCaptureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdPcapsCaptureRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdPcapsCaptureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdPsksRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdPsksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdPsksRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdPsksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdPsksRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdPsksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdPsksImportRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdPsksImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdPsksPskIdRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdPsksPskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdPsksPskIdRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdPsksPskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdPsksPskIdRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdPsksPskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdRfdiagsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdRfdiagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdRfdiagsRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdRfdiagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdRfdiagsRfdiagIdRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdRfdiagsRfdiagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdRfdiagsRfdiagIdRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdRfdiagsRfdiagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdRfdiagsRfdiagIdRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdRfdiagsRfdiagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdRfdiagsRfdiagIdDownloadRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdRfdiagsRfdiagIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdRfdiagsRfdiagIdStopRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdRfdiagsRfdiagIdStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdRoguesEventsCountRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdRoguesEventsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdRoguesEventsSearchRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdRoguesEventsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdRoguesRogueBssidRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdRoguesRogueBssidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdRoguesRogueBssidDeauthClientsRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdRoguesRogueBssidDeauthClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdRrmCurrentRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdRrmCurrentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdRrmCurrentDevicesDeviceIdBandBandRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdRrmCurrentDevicesDeviceIdBandBandRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdRrmEventsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdRrmEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdRrmOptimizeRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdRrmOptimizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdRssizonesRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdRssizonesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdRssizonesRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdRssizonesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdRssizonesRssizoneIdRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdRssizonesRssizoneIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdRssizonesRssizoneIdRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdRssizonesRssizoneIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdRssizonesRssizoneIdRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdRssizonesRssizoneIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdSettingRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdSettingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdSettingRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdSettingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdSettingBlacklistRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdSettingBlacklistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdSettingBlacklistRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdSettingBlacklistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdSettingWatchedStationRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdSettingWatchedStationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdSettingWatchedStationRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdSettingWatchedStationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdSettingWhitelistRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdSettingWhitelistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdSettingWhitelistRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdSettingWhitelistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdSkyatpEventsCountRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdSkyatpEventsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdSkyatpEventsSearchRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdSkyatpEventsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdSleScopeScopeIdMetricMetricClassifierClassifierSummaryRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdSleScopeScopeIdMetricMetricClassifierClassifierSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdSleScopeScopeIdMetricMetricClassifiersRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdSleScopeScopeIdMetricMetricClassifiersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdSleScopeScopeIdMetricMetricHistogramRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdSleScopeScopeIdMetricMetricHistogramRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactSummaryRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedApplicationsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedApsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedApsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedChassisRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedChassisRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedClientsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedGatewaysRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedGatewaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedInterfacesRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedInterfacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedSwitchesRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedSwitchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedUsersRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdSleScopeScopeIdMetricMetricSummaryRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdSleScopeScopeIdMetricMetricSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdSleScopeScopeIdMetricMetricThresholdRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdSleScopeScopeIdMetricMetricThresholdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdSleScopeScopeIdMetricMetricThresholdRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdSleScopeScopeIdMetricMetricThresholdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdSleScopeScopeIdMetricMetricThresholdRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdSleScopeScopeIdMetricMetricThresholdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdSleScopeScopeIdMetricsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdSleScopeScopeIdMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdSsrUpgradeUpgradeIdRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdSsrUpgradeUpgradeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdSsrDeviceIdUpgradeRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdSsrDeviceIdUpgradeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsAppsCountRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsAppsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsAssetsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsAssetsAssetIdRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsAssetsAssetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsAssetsCountRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsAssetsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsAssetsSearchRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsAssetsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsBeaconsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsBeaconsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsBgpPeersCountRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsBgpPeersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsBgpPeersSearchRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsBgpPeersSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsCallsCountRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsCallsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsCallsSearchRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsCallsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsClientsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsClientsClientMacRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsClientsClientMacRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsDevicesRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsDevicesDeviceIdRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsDevicesDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsDevicesDeviceIdClientsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsDevicesDeviceIdClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsDiscoveredAssetsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsDiscoveredAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsDiscoveredSwitchMetricsSearchRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsDiscoveredSwitchMetricsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsDiscoveredSwitchesCountRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsDiscoveredSwitchesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsDiscoveredSwitchesMetricsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsDiscoveredSwitchesMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsDiscoveredSwitchesSearchRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsDiscoveredSwitchesSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsFilteredAssetsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsFilteredAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsGatewaysMetricsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsGatewaysMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsMapsMapIdClientsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsMapsMapIdClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsMapsMapIdDiscoveredAssetsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsMapsMapIdDiscoveredAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsMapsMapIdSdkclientsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsMapsMapIdSdkclientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsMapsMapIdUnconnectedClientsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsMapsMapIdUnconnectedClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsMxedgesRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsMxedgesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsMxedgesMxedgeIdRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsMxedgesMxedgeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsPortsCountRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsPortsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsPortsSearchRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsPortsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsSdkclientsSdkclientIdRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsSdkclientsSdkclientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsSwitchPortsCountRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsSwitchPortsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsSwitchPortsSearchRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsSwitchPortsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsSwitchesMetricsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsSwitchesMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsWxrulesRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsWxrulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsZonesRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsZonesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdStatsZoneTypeZoneIdRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdStatsZoneTypeZoneIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdSubscriptionsRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdSubscriptionsRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdSubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdSyntheticTestRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdSyntheticTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdSyntheticTestRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdSyntheticTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdUisettingsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdUisettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdUisettingsRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdUisettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdUisettingsDerivedRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdUisettingsDerivedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdUisettingsUisettingIdRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdUisettingsUisettingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdUisettingsUisettingIdRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdUisettingsUisettingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdUisettingsUisettingIdRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdUisettingsUisettingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdVbeaconsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdVbeaconsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdVbeaconsRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdVbeaconsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdVbeaconsVbeaconIdRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdVbeaconsVbeaconIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdVbeaconsVbeaconIdRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdVbeaconsVbeaconIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdVbeaconsVbeaconIdRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdVbeaconsVbeaconIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdWebhooksRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdWebhooksRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdWebhooksWebhookIdRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdWebhooksWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdWebhooksWebhookIdPingRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdWebhooksWebhookIdPingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdWiredClientsCountRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdWiredClientsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdWiredClientsSearchRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdWiredClientsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdWlansRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdWlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdWlansRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdWlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdWlansDerivedRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdWlansDerivedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdWlansWlanIdRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdWlansWlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdWlansWlanIdRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdWlansWlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdWlansWlanIdRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdWlansWlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdWlansWlanIdPortalImageRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdWlansWlanIdPortalImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdWlansWlanIdPortalTemplateRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdWlansWlanIdPortalTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdWxrulesRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdWxrulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdWxrulesRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdWxrulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdWxrulesDerivedRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdWxrulesDerivedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdWxrulesWxrulesIdRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdWxrulesWxrulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdWxrulesWxrulesIdRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdWxrulesWxrulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdWxrulesWxrulesIdRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdWxrulesWxrulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdWxtagsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdWxtagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdWxtagsRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdWxtagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdWxtagsAppsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdWxtagsAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdWxtagsWxtagIdRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdWxtagsWxtagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdWxtagsWxtagIdRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdWxtagsWxtagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdWxtagsWxtagIdRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdWxtagsWxtagIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdWxtagsWxtagIdClientsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdWxtagsWxtagIdClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdWxtunnelsRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdWxtunnelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdWxtunnelsRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdWxtunnelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdWxtunnelsWxtunnelIdRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdWxtunnelsWxtunnelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdWxtunnelsWxtunnelIdRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdWxtunnelsWxtunnelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdWxtunnelsWxtunnelIdRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdWxtunnelsWxtunnelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdZonesRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdZonesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SitesSiteIdZonesRouteHandler: RouteHandler<
  typeof postApiV1SitesSiteIdZonesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SitesSiteIdZonesZoneIdRouteHandler: RouteHandler<
  typeof deleteApiV1SitesSiteIdZonesZoneIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdZonesZoneIdRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdZonesZoneIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SitesSiteIdZonesZoneIdRouteHandler: RouteHandler<
  typeof putApiV1SitesSiteIdZonesZoneIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdZoneTypeCountRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdZoneTypeCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SitesSiteIdZoneTypeVisitsSearchRouteHandler: RouteHandler<
  typeof getApiV1SitesSiteIdZoneTypeVisitsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1UtilsTestTelstraRouteHandler: RouteHandler<
  typeof getApiV1UtilsTestTelstraRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1UtilsTestTwilioRouteHandler: RouteHandler<
  typeof postApiV1UtilsTestTwilioRoute
> = async (c) => {
  throw new Error('Not implemented')
}
