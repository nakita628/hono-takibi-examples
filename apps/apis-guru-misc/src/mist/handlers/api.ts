import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1ConstAlarmDefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstApChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstApLedStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstCallEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstClientEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstDefaultGatewayConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstDeviceEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstDeviceModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstInsightMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstMxedgeEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstMxedgeModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstSystemEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConstTrafficTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InstallerOrgsOrgIdAlarmtemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InstallerOrgsOrgIdDeviceprofilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InstallerOrgsOrgIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1InstallerOrgsOrgIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1InstallerOrgsOrgIdDevicesDeviceMacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1InstallerOrgsOrgIdDevicesDeviceMacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1InstallerOrgsOrgIdDevicesDeviceMacLocateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1InstallerOrgsOrgIdDevicesDeviceMacUnlocateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1InstallerOrgsOrgIdDevicesDeviceMacImageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1InstallerOrgsOrgIdDevicesDeviceMacImageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InstallerOrgsOrgIdRftemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InstallerOrgsOrgIdSecpoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InstallerOrgsOrgIdSitegroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InstallerOrgsOrgIdSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1InstallerOrgsOrgIdSitesSiteNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InstallerOrgsOrgIdSitesSiteNameMapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1InstallerOrgsOrgIdSitesSiteNameMapsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1InstallerOrgsOrgIdSitesSiteNameMapsMapIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1InstallerOrgsOrgIdSitesSiteNameMapsMapIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1InstallerOrgsOrgIdSitesSiteNameMapsMapIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InstallerSitesSiteNameOptimizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1InviteVerifyTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LoginLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1LoginOauthProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LoginOauthProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LoginOauthProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LoginTwoFactorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MobileVerifySecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MspsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1MspsMspIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1MspsMspIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1MspsMspIdAdminsAdminIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdAdminsAdminIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1MspsMspIdAdminsAdminIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MspsMspIdClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdInsightsMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdInventoryDeviceMacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MspsMspIdInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1MspsMspIdInvitesInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1MspsMspIdInvitesInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1MspsMspIdLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1MspsMspIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MspsMspIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdLogsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdOrggroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MspsMspIdOrggroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1MspsMspIdOrggroupsOrggroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdOrggroupsOrggroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1MspsMspIdOrggroupsOrggroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MspsMspIdOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1MspsMspIdOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdOrgsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdOrgsOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdSsorolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MspsMspIdSsorolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1MspsMspIdSsorolesSsoroleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1MspsMspIdSsorolesSsoroleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdSsosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MspsMspIdSsosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1MspsMspIdSsosSsoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1MspsMspIdSsosSsoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdSsosSsoIdFailuresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdSsosSsoIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdSsosSsoIdMetadataXmlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdStatsLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdStatsOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdTicketsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgId128routersRegisterCmdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdAdminsAdminIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdAdminsAdminIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdAlarmsAckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdAlarmsAckAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdAlarmsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdAlarmsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdAlarmsUnackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdAlarmsUnackAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdAlarmsAlarmIdAckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdAlarmtemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdAlarmtemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdAlarmtemplatesSuppressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdAlarmtemplatesAlarmtemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdAlarmtemplatesAlarmtemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdAlarmtemplatesAlarmtemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdApitokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdApitokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdApitokensApitokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdApitokensApitokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdApitokensApitokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdAptemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdAptemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdAptemplatesAptemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdAptemplatesAptemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdAptemplatesAptemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdAssetfiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdAssetfiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdAssetfiltersAssetfilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdAssetfiltersAssetfilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdAssetfiltersAssetfilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdAssetsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdCallEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdCallEventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdCertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdCertRegenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdClientsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdClientsEventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdClientsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdClientsSessionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdClientsSessionsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdCrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdCrlTruncateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdDeviceprofilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdDeviceprofilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdDeviceprofilesDeviceprofileIdUnassignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdDevicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdDevicesEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdDevicesEventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdDevicesLastConfigCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdDevicesLastConfigSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdDevicesRadioMacsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdDevicesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdDevicesUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdDevicesUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdDevicesUpgradeUpgradeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdEvpnTopologiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdEvpnTopologiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdEvpnTopologiesEvpnTopologyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdEvpnTopologiesEvpnTopologyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdEvpnTopologiesEvpnTopologyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdGatewaytemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdGatewaytemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdGatewaytemplatesGatewaytemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdGatewaytemplatesGatewaytemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdGatewaytemplatesGatewaytemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdGuestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdGuestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdGuestsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdGuestsGuestMacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdGuestsGuestMacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdGuestsGuestMacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdInsightsSitesSleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdInsightsMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdInventoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdInventoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdInventoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdInventoryReevaluateAutoAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdInventoryReplaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdInvitesInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdInvitesInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdJsiDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdJsiDevicesOutboundSshCmdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdJsiDevicesDeviceMacShellRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdJsiDevicesDeviceMacUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdJsiInventoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdJunosRegisterCmdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdLicensesUsagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdLogsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdMapsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdMxclustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdMxclustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdMxclustersMxclusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdMxclustersMxclusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdMxclustersMxclusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdMxedgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdMxedgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdMxedgesAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdMxedgesClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdMxedgesUnassignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdMxedgesUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdMxedgesUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdMxedgesUpgradeUpgradeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdMxedgesVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdMxedgesMxedgeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdMxedgesMxedgeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdMxedgesMxedgeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdMxedgesMxedgeIdRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdMxedgesMxedgeIdServicesTuntermBouncePortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdMxedgesMxedgeIdServicesNameActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdMxedgesMxedgeIdSupportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdMxedgesMxedgeIdUnregisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdMxedgesMxedgeIdUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdMxtunnelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdMxtunnelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdMxtunnelsMxtunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdMxtunnelsMxtunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdMxtunnelsMxtunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdNacrulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdNacrulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdNacrulesNacruleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdNacrulesNacruleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdNacrulesNacruleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdNactagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdNactagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdNactagsNactagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdNactagsNactagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdNactagsNactagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdNetworktemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdNetworktemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdNetworktemplatesNetworktemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdNetworktemplatesNetworktemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdNetworktemplatesNetworktemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdOcdevicesOutboundSshCmdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdOtherdevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdOtherdevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdOtherdevicesDeviceMacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdOtherdevicesDeviceMacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdOtherdevicesDeviceMacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdPmaDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdPskportalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdPskportalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdPskportalsPskportalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdPskportalsPskportalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdPskportalsPskportalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdPsksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdPsksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdPsksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdPsksImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdPsksPskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdPsksPskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdPsksPskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdPsksPskIdDeleteOldPassphraseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdRftemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdRftemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdRftemplatesRftemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdRftemplatesRftemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdRftemplatesRftemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdSdkclientsSdkclientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSdkinvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSdkinvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdSdkinvitesSdkinviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSdkinvitesSdkinviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdSdkinvitesSdkinviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSdkinvitesSdkinviteIdEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSdkinvitesSdkinviteIdQrcodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSdkinvitesSdkinviteIdSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSdktemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSdktemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdSdktemplatesSdktemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSdktemplatesSdktemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdSdktemplatesSdktemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSecpoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSecpoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdSecpoliciesSecpolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSecpoliciesSecpolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdSecpoliciesSecpolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdServicepoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdServicepoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdServicepoliciesServicepolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdServicepoliciesServicepolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdServicepoliciesServicepolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdSettingBlacklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSettingBlacklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSettingCradlepointSetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSettingCradlepointSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSettingJuniperLinkAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdSettingJuniperLinkedAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSettingPcapBucketSetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSettingPcapBucketVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSettingZscalerSetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdSettingAppNameLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSettingAppNameLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdSettingAppNameLinkAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSettingAppNameLinkAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSitegroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSitegroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdSitegroupsSitegroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSitegroupsSitegroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdSitegroupsSitegroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSitesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSitesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSitesSiteNameMapsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSitetemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSitetemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdSitetemplatesSitetemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSitetemplatesSitetemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdSitetemplatesSitetemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSsorolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSsorolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdSsorolesSsoroleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSsorolesSsoroleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdSsorolesSsoroleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSsosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSsosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdSsosSsoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSsosSsoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdSsosSsoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSsosSsoIdFailuresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSsosSsoIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSsosSsoIdMetadataXmlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSsrUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSsrUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSsrUpgradeUpgradeIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdSsrVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdStatsAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdStatsAssetsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdStatsAssetsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdStatsBgpPeersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdStatsBgpPeersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdStatsDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdStatsMxedgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdStatsMxedgesMxedgeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdStatsOtherdevicesDeviceMacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdStatsPortsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdStatsSwitchPortsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdStatsTunnelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdStatsTunnelsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdStatsVpnPeersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdStatsVpnPeersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdTemplatesTemplateIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdTicketsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdTicketsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdTicketsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdTicketsTicketIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdTroubleshootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdVpnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdVpnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdVpnsVpnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdVpnsVpnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdVpnsVpnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdWiredClientsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdWiredClientsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdWlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdWlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdWlansDerivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdWlansWlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdWlansWlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdWlansWlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdWlansWlanIdPortalImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdWlansWlanIdPortalImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdWlansWlanIdPortalTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdWxrulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdWxrulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdWxrulesDerivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdWxrulesWxrulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdWxrulesWxrulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdWxrulesWxrulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdWxtagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdWxtagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdWxtagsAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdWxtagsWxtagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdWxtagsWxtagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdWxtagsWxtagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdWxtagsWxtagIdClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdWxtunnelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdWxtunnelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdWxtunnelsWxtunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdWxtunnelsWxtunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdWxtunnelsWxtunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RecoverVerifyTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RegisterVerifyTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SelfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SelfApitokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SelfApitokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SelfApitokensApitokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SelfLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SelfOauthProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SelfOauthProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SelfSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SelfTwoFactorTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SelfTwoFactorVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SelfUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SelfUpdateVerifyTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdAlarmsAckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdAlarmsAckAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdAlarmsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdAlarmsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdAlarmsUnackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdAlarmsUnackAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdAlarmsAlarmIdAckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdAlarmsAlarmIdUnackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdAnomalyClientClientMacMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdAnomalyDeviceDeviceMacMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdAnomalyMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdAssetfiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdAssetfiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdAssetfiltersAssetfilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdAssetfiltersAssetfilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdAssetfiltersAssetfilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdAssetsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdBeaconsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdBeaconsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdBeaconsBeaconIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdBeaconsBeaconIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdBeaconsBeaconIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdCallEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdCallEventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdClientsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdClientsDisconnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdClientsEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdClientsEventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdClientsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdClientsSessionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdClientsSessionsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdClientsUnauthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdClientsClientMacDisconnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdClientsClientMacEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdClientsClientMacUnauthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesApChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesConfigHistoryCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesConfigHistorySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesEventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesLastConfigCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesLastConfigSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesReprovisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesResetRadioConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesUpgradeUpgradeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesUpgradeUpgradeIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesZeriozeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdArpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdBouncePortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdCableTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdCheckRadiusServerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdClearArpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdClearBgpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdClearBpduErrorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdClearMacsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesDeviceIdConfigCmdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdDevicesDeviceIdHaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdHaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdDevicesDeviceIdHaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdDevicesDeviceIdImageImageNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdImageImageNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesDeviceIdIotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdDevicesDeviceIdIotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdDevicesDeviceIdLocalPortConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdDevicesDeviceIdLocalPortConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdLocateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdPollStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdReleaseDhcpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdRequestZtpPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdResolveDnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdServicePingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdShowRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdShowSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdSupportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdSyntheticTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdTracerouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdUnlocateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdDevicesDeviceIdVcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdDevicesDeviceIdVcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdVcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdDevicesDeviceIdVcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdDevicesDeviceIdVcVcPortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdEventsFastRoamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdEventsInterferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdEventsSystemCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdEventsSystemSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdEvpnTopologiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdEvpnTopologiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdEvpnTopologiesEvpnTopologyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdEvpnTopologiesEvpnTopologyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdEvpnTopologiesEvpnTopologyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdGuestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdGuestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdGuestsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdGuestsGuestMacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdGuestsGuestMacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdGuestsGuestMacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdInsightsClientClientMacMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdInsightsDeviceDeviceMacMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdInsightsRoguesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdInsightsRoguesClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdInsightsMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdLicensesUsagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdLocationCoverageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdLocationMlCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdLocationMlDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdLocationMlDeviceDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdLocationMlDeviceDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdLocationMlMapMapIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdLocationMlMapMapIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdLocationMlResetMapMapIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdLocationMlUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdMapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMapsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdMapsMapIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdMapsMapIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdMapsMapIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdMapsMapIdAutoOrientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMapsMapIdAutoOrientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdMapsMapIdAutoPlacementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdMapsMapIdAutoPlacementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMapsMapIdAutoPlacementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMapsMapIdClearAutoOrientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMapsMapIdClearAutoplacementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdMapsMapIdImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMapsMapIdImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMapsMapIdReplaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMapsMapIdRevertAutoOrientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMapsMapIdRevertAutoplacementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMapsMapIdSetMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMapsMapIdWayfindingImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdMxedgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMxedgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdMxedgesMxedgeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdMxedgesMxedgeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdMxedgesMxedgeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMxedgesMxedgeIdSupportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdMxtunnelsMxtunnelIdPreemptApsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdOtherdevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdPcapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdPcapsCaptureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdPcapsCaptureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdPcapsCaptureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdPsksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdPsksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdPsksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdPsksImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdPsksPskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdPsksPskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdPsksPskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdRfdiagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdRfdiagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdRfdiagsRfdiagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdRfdiagsRfdiagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdRfdiagsRfdiagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdRfdiagsRfdiagIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdRfdiagsRfdiagIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdRoguesEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdRoguesEventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdRoguesRogueBssidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdRoguesRogueBssidDeauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdRrmCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdRrmCurrentDevicesDeviceIdBandBandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdRrmEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdRrmOptimizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdRssizonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdRssizonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdRssizonesRssizoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdRssizonesRssizoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdRssizonesRssizoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdSettingBlacklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdSettingBlacklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdSettingWatchedStationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdSettingWatchedStationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdSettingWhitelistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdSettingWhitelistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdSkyatpEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdSkyatpEventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdSleScopeScopeIdMetricMetricClassifierClassifierSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdSleScopeScopeIdMetricMetricClassifiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdSleScopeScopeIdMetricMetricHistogramRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedApsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedChassisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedInterfacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedSwitchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdSleScopeScopeIdMetricMetricImpactedUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdSleScopeScopeIdMetricMetricSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdSleScopeScopeIdMetricMetricThresholdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdSleScopeScopeIdMetricMetricThresholdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdSleScopeScopeIdMetricMetricThresholdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdSleScopeScopeIdMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdSsrUpgradeUpgradeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdSsrDeviceIdUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsAppsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsAssetsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsAssetsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsBeaconsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsBgpPeersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsBgpPeersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsCallsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsCallsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsClientsClientMacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsDevicesDeviceIdClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsDiscoveredAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsDiscoveredSwitchMetricsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsDiscoveredSwitchesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsDiscoveredSwitchesMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsDiscoveredSwitchesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsFilteredAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsGatewaysMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsMapsMapIdClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsMapsMapIdDiscoveredAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsMapsMapIdSdkclientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsMapsMapIdUnconnectedClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsMxedgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsMxedgesMxedgeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsPortsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsPortsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsSdkclientsSdkclientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsSwitchPortsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsSwitchPortsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsSwitchesMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsWxrulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdStatsZoneTypeZoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdSyntheticTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdSyntheticTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdUisettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdUisettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdUisettingsDerivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdUisettingsUisettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdUisettingsUisettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdUisettingsUisettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdVbeaconsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdVbeaconsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdVbeaconsVbeaconIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdVbeaconsVbeaconIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdVbeaconsVbeaconIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdWebhooksWebhookIdPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdWiredClientsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdWiredClientsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdWlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdWlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdWlansDerivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdWlansWlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdWlansWlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdWlansWlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdWlansWlanIdPortalImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdWlansWlanIdPortalTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdWxrulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdWxrulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdWxrulesDerivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdWxrulesWxrulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdWxrulesWxrulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdWxrulesWxrulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdWxtagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdWxtagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdWxtagsAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdWxtagsWxtagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdWxtagsWxtagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdWxtagsWxtagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdWxtagsWxtagIdClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdWxtunnelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdWxtunnelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdWxtunnelsWxtunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdWxtunnelsWxtunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdWxtunnelsWxtunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdZonesZoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdZonesZoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdZonesZoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdZoneTypeCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdZoneTypeVisitsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UtilsTestTelstraRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UtilsTestTwilioRoute, (c) => {
    throw new Error('Not implemented')
  })
