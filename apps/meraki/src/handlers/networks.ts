import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteNetworksNetworkIdApplianceInterfacesL3InterfaceIdRoute,
  deleteNetworksNetworkIdAppliancePrefixesDelegatedStaticsStaticDelegatedPrefixIdRoute,
  deleteNetworksNetworkIdApplianceRfProfilesRfProfileIdRoute,
  deleteNetworksNetworkIdApplianceStaticRoutesStaticRouteIdRoute,
  deleteNetworksNetworkIdApplianceTrafficShapingCustomPerformanceClassesCustomPerformanceClassIdRoute,
  deleteNetworksNetworkIdApplianceVlansVlanIdRoute,
  deleteNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute,
  deleteNetworksNetworkIdCameraWirelessProfilesWirelessProfileIdRoute,
  deleteNetworksNetworkIdCampusGatewayClustersClusterIdRoute,
  deleteNetworksNetworkIdFirmwareUpgradesStagedGroupsGroupIdRoute,
  deleteNetworksNetworkIdFloorPlansFloorPlanIdRoute,
  deleteNetworksNetworkIdGroupPoliciesGroupPolicyIdRoute,
  deleteNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdRoute,
  deleteNetworksNetworkIdMqttBrokersMqttBrokerIdRoute,
  deleteNetworksNetworkIdPiiRequestsRequestIdRoute,
  deleteNetworksNetworkIdRoute,
  deleteNetworksNetworkIdSensorAlertsProfilesIdRoute,
  deleteNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute,
  deleteNetworksNetworkIdSmUserAccessDevicesUserAccessDeviceIdRoute,
  deleteNetworksNetworkIdSwitchAccessPoliciesAccessPolicyNumberRoute,
  deleteNetworksNetworkIdSwitchDhcpServerPolicyArpInspectionTrustedServersTrustedServerIdRoute,
  deleteNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdRoute,
  deleteNetworksNetworkIdSwitchPortSchedulesPortScheduleIdRoute,
  deleteNetworksNetworkIdSwitchQosRulesQosRuleIdRoute,
  deleteNetworksNetworkIdSwitchRoutingMulticastRendezvousPointsRendezvousPointIdRoute,
  deleteNetworksNetworkIdSwitchStacksSwitchStackIdRoute,
  deleteNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesInterfaceIdRoute,
  deleteNetworksNetworkIdSwitchStacksSwitchStackIdRoutingStaticRoutesStaticRouteIdRoute,
  deleteNetworksNetworkIdVlanProfilesInameRoute,
  deleteNetworksNetworkIdWebhooksHttpServersHttpServerIdRoute,
  deleteNetworksNetworkIdWebhooksPayloadTemplatesPayloadTemplateIdRoute,
  deleteNetworksNetworkIdWirelessAirMarshalRulesRuleIdRoute,
  deleteNetworksNetworkIdWirelessEthernetPortsProfilesProfileIdRoute,
  deleteNetworksNetworkIdWirelessRfProfilesRfProfileIdRoute,
  deleteNetworksNetworkIdWirelessSsidsNumberIdentityPsksIdentityPskIdRoute,
  getNetworksNetworkIdAlertsHistoryRoute,
  getNetworksNetworkIdAlertsSettingsRoute,
  getNetworksNetworkIdApplianceClientsClientIdSecurityEventsRoute,
  getNetworksNetworkIdApplianceConnectivityMonitoringDestinationsRoute,
  getNetworksNetworkIdApplianceContentFilteringCategoriesRoute,
  getNetworksNetworkIdApplianceContentFilteringRoute,
  getNetworksNetworkIdApplianceFirewallCellularFirewallRulesRoute,
  getNetworksNetworkIdApplianceFirewallFirewalledServicesRoute,
  getNetworksNetworkIdApplianceFirewallFirewalledServicesServiceRoute,
  getNetworksNetworkIdApplianceFirewallInboundCellularFirewallRulesRoute,
  getNetworksNetworkIdApplianceFirewallInboundFirewallRulesRoute,
  getNetworksNetworkIdApplianceFirewallL3FirewallRulesRoute,
  getNetworksNetworkIdApplianceFirewallL7FirewallRulesApplicationCategoriesRoute,
  getNetworksNetworkIdApplianceFirewallL7FirewallRulesRoute,
  getNetworksNetworkIdApplianceFirewallOneToManyNatRulesRoute,
  getNetworksNetworkIdApplianceFirewallOneToOneNatRulesRoute,
  getNetworksNetworkIdApplianceFirewallPortForwardingRulesRoute,
  getNetworksNetworkIdApplianceFirewallSettingsRoute,
  getNetworksNetworkIdAppliancePortsPortIdRoute,
  getNetworksNetworkIdAppliancePortsRoute,
  getNetworksNetworkIdAppliancePrefixesDelegatedStaticsRoute,
  getNetworksNetworkIdAppliancePrefixesDelegatedStaticsStaticDelegatedPrefixIdRoute,
  getNetworksNetworkIdApplianceRfProfilesRfProfileIdRoute,
  getNetworksNetworkIdApplianceRfProfilesRoute,
  getNetworksNetworkIdApplianceSecurityEventsRoute,
  getNetworksNetworkIdApplianceSecurityIntrusionRoute,
  getNetworksNetworkIdApplianceSecurityMalwareRoute,
  getNetworksNetworkIdApplianceSettingsRoute,
  getNetworksNetworkIdApplianceSingleLanRoute,
  getNetworksNetworkIdApplianceSsidsNumberRoute,
  getNetworksNetworkIdApplianceSsidsRoute,
  getNetworksNetworkIdApplianceStaticRoutesRoute,
  getNetworksNetworkIdApplianceStaticRoutesStaticRouteIdRoute,
  getNetworksNetworkIdApplianceTrafficShapingCustomPerformanceClassesCustomPerformanceClassIdRoute,
  getNetworksNetworkIdApplianceTrafficShapingCustomPerformanceClassesRoute,
  getNetworksNetworkIdApplianceTrafficShapingRoute,
  getNetworksNetworkIdApplianceTrafficShapingRulesRoute,
  getNetworksNetworkIdApplianceTrafficShapingUplinkBandwidthRoute,
  getNetworksNetworkIdApplianceTrafficShapingUplinkSelectionRoute,
  getNetworksNetworkIdApplianceUplinksUsageHistoryRoute,
  getNetworksNetworkIdApplianceVlansRoute,
  getNetworksNetworkIdApplianceVlansSettingsRoute,
  getNetworksNetworkIdApplianceVlansVlanIdRoute,
  getNetworksNetworkIdApplianceVpnBgpRoute,
  getNetworksNetworkIdApplianceVpnSiteToSiteVpnRoute,
  getNetworksNetworkIdApplianceWarmSpareRoute,
  getNetworksNetworkIdBluetoothClientsBluetoothClientIdRoute,
  getNetworksNetworkIdBluetoothClientsRoute,
  getNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute,
  getNetworksNetworkIdCameraQualityRetentionProfilesRoute,
  getNetworksNetworkIdCameraSchedulesRoute,
  getNetworksNetworkIdCameraWirelessProfilesRoute,
  getNetworksNetworkIdCameraWirelessProfilesWirelessProfileIdRoute,
  getNetworksNetworkIdCellularGatewayConnectivityMonitoringDestinationsRoute,
  getNetworksNetworkIdCellularGatewayDhcpRoute,
  getNetworksNetworkIdCellularGatewaySubnetPoolRoute,
  getNetworksNetworkIdCellularGatewayUplinkRoute,
  getNetworksNetworkIdClientsApplicationUsageRoute,
  getNetworksNetworkIdClientsBandwidthUsageHistoryRoute,
  getNetworksNetworkIdClientsClientIdPolicyRoute,
  getNetworksNetworkIdClientsClientIdRoute,
  getNetworksNetworkIdClientsClientIdSplashAuthorizationStatusRoute,
  getNetworksNetworkIdClientsClientIdTrafficHistoryRoute,
  getNetworksNetworkIdClientsClientIdUsageHistoryRoute,
  getNetworksNetworkIdClientsOverviewRoute,
  getNetworksNetworkIdClientsRoute,
  getNetworksNetworkIdClientsUsageHistoriesRoute,
  getNetworksNetworkIdDevicesRoute,
  getNetworksNetworkIdEventsEventTypesRoute,
  getNetworksNetworkIdEventsRoute,
  getNetworksNetworkIdFirmwareUpgradesRoute,
  getNetworksNetworkIdFirmwareUpgradesStagedEventsRoute,
  getNetworksNetworkIdFirmwareUpgradesStagedGroupsGroupIdRoute,
  getNetworksNetworkIdFirmwareUpgradesStagedGroupsRoute,
  getNetworksNetworkIdFirmwareUpgradesStagedStagesRoute,
  getNetworksNetworkIdFloorPlansFloorPlanIdRoute,
  getNetworksNetworkIdFloorPlansRoute,
  getNetworksNetworkIdGroupPoliciesGroupPolicyIdRoute,
  getNetworksNetworkIdGroupPoliciesRoute,
  getNetworksNetworkIdHealthAlertsRoute,
  getNetworksNetworkIdInsightApplicationsApplicationIdHealthByTimeRoute,
  getNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdRoute,
  getNetworksNetworkIdMerakiAuthUsersRoute,
  getNetworksNetworkIdMqttBrokersMqttBrokerIdRoute,
  getNetworksNetworkIdMqttBrokersRoute,
  getNetworksNetworkIdNetflowRoute,
  getNetworksNetworkIdNetworkHealthChannelUtilizationRoute,
  getNetworksNetworkIdPiiPiiKeysRoute,
  getNetworksNetworkIdPiiRequestsRequestIdRoute,
  getNetworksNetworkIdPiiRequestsRoute,
  getNetworksNetworkIdPiiSmDevicesForKeyRoute,
  getNetworksNetworkIdPiiSmOwnersForKeyRoute,
  getNetworksNetworkIdPoliciesByClientRoute,
  getNetworksNetworkIdRoute,
  getNetworksNetworkIdSensorAlertsCurrentOverviewByMetricRoute,
  getNetworksNetworkIdSensorAlertsOverviewByMetricRoute,
  getNetworksNetworkIdSensorAlertsProfilesIdRoute,
  getNetworksNetworkIdSensorAlertsProfilesRoute,
  getNetworksNetworkIdSensorMqttBrokersMqttBrokerIdRoute,
  getNetworksNetworkIdSensorMqttBrokersRoute,
  getNetworksNetworkIdSensorRelationshipsRoute,
  getNetworksNetworkIdSettingsRoute,
  getNetworksNetworkIdSmBypassActivationLockAttemptsAttemptIdRoute,
  getNetworksNetworkIdSmDevicesDeviceIdCellularUsageHistoryRoute,
  getNetworksNetworkIdSmDevicesDeviceIdCertsRoute,
  getNetworksNetworkIdSmDevicesDeviceIdConnectivityRoute,
  getNetworksNetworkIdSmDevicesDeviceIdDesktopLogsRoute,
  getNetworksNetworkIdSmDevicesDeviceIdDeviceCommandLogsRoute,
  getNetworksNetworkIdSmDevicesDeviceIdDeviceProfilesRoute,
  getNetworksNetworkIdSmDevicesDeviceIdNetworkAdaptersRoute,
  getNetworksNetworkIdSmDevicesDeviceIdPerformanceHistoryRoute,
  getNetworksNetworkIdSmDevicesDeviceIdRestrictionsRoute,
  getNetworksNetworkIdSmDevicesDeviceIdSecurityCentersRoute,
  getNetworksNetworkIdSmDevicesDeviceIdSoftwaresRoute,
  getNetworksNetworkIdSmDevicesDeviceIdWlanListsRoute,
  getNetworksNetworkIdSmDevicesRoute,
  getNetworksNetworkIdSmProfilesRoute,
  getNetworksNetworkIdSmTargetGroupsRoute,
  getNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute,
  getNetworksNetworkIdSmTrustedAccessConfigsRoute,
  getNetworksNetworkIdSmUserAccessDevicesRoute,
  getNetworksNetworkIdSmUsersRoute,
  getNetworksNetworkIdSmUsersUserIdDeviceProfilesRoute,
  getNetworksNetworkIdSmUsersUserIdSoftwaresRoute,
  getNetworksNetworkIdSnmpRoute,
  getNetworksNetworkIdSplashLoginAttemptsRoute,
  getNetworksNetworkIdSwitchAccessControlListsRoute,
  getNetworksNetworkIdSwitchAccessPoliciesAccessPolicyNumberRoute,
  getNetworksNetworkIdSwitchAccessPoliciesRoute,
  getNetworksNetworkIdSwitchAlternateManagementInterfaceRoute,
  getNetworksNetworkIdSwitchDhcpServerPolicyArpInspectionTrustedServersRoute,
  getNetworksNetworkIdSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRoute,
  getNetworksNetworkIdSwitchDhcpServerPolicyRoute,
  getNetworksNetworkIdSwitchDhcpV4ServersSeenRoute,
  getNetworksNetworkIdSwitchDscpToCosMappingsRoute,
  getNetworksNetworkIdSwitchLinkAggregationsRoute,
  getNetworksNetworkIdSwitchMtuRoute,
  getNetworksNetworkIdSwitchPortSchedulesRoute,
  getNetworksNetworkIdSwitchQosRulesOrderRoute,
  getNetworksNetworkIdSwitchQosRulesQosRuleIdRoute,
  getNetworksNetworkIdSwitchQosRulesRoute,
  getNetworksNetworkIdSwitchRoutingMulticastRendezvousPointsRendezvousPointIdRoute,
  getNetworksNetworkIdSwitchRoutingMulticastRendezvousPointsRoute,
  getNetworksNetworkIdSwitchRoutingMulticastRoute,
  getNetworksNetworkIdSwitchRoutingOspfRoute,
  getNetworksNetworkIdSwitchSettingsRoute,
  getNetworksNetworkIdSwitchStacksRoute,
  getNetworksNetworkIdSwitchStacksSwitchStackIdRoute,
  getNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesInterfaceIdDhcpRoute,
  getNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesInterfaceIdRoute,
  getNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesRoute,
  getNetworksNetworkIdSwitchStacksSwitchStackIdRoutingStaticRoutesRoute,
  getNetworksNetworkIdSwitchStacksSwitchStackIdRoutingStaticRoutesStaticRouteIdRoute,
  getNetworksNetworkIdSwitchStormControlRoute,
  getNetworksNetworkIdSwitchStpRoute,
  getNetworksNetworkIdSyslogServersRoute,
  getNetworksNetworkIdTopologyLinkLayerRoute,
  getNetworksNetworkIdTrafficAnalysisRoute,
  getNetworksNetworkIdTrafficRoute,
  getNetworksNetworkIdTrafficShapingApplicationCategoriesRoute,
  getNetworksNetworkIdTrafficShapingDscpTaggingOptionsRoute,
  getNetworksNetworkIdVlanProfilesAssignmentsByDeviceRoute,
  getNetworksNetworkIdVlanProfilesInameRoute,
  getNetworksNetworkIdVlanProfilesRoute,
  getNetworksNetworkIdWebhooksHttpServersHttpServerIdRoute,
  getNetworksNetworkIdWebhooksHttpServersRoute,
  getNetworksNetworkIdWebhooksPayloadTemplatesPayloadTemplateIdRoute,
  getNetworksNetworkIdWebhooksPayloadTemplatesRoute,
  getNetworksNetworkIdWebhooksWebhookTestsWebhookTestIdRoute,
  getNetworksNetworkIdWirelessAirMarshalRoute,
  getNetworksNetworkIdWirelessAlternateManagementInterfaceRoute,
  getNetworksNetworkIdWirelessBillingRoute,
  getNetworksNetworkIdWirelessBluetoothSettingsRoute,
  getNetworksNetworkIdWirelessChannelUtilizationHistoryRoute,
  getNetworksNetworkIdWirelessClientCountHistoryRoute,
  getNetworksNetworkIdWirelessClientsClientIdConnectionStatsRoute,
  getNetworksNetworkIdWirelessClientsClientIdConnectivityEventsRoute,
  getNetworksNetworkIdWirelessClientsClientIdLatencyHistoryRoute,
  getNetworksNetworkIdWirelessClientsClientIdLatencyStatsRoute,
  getNetworksNetworkIdWirelessClientsConnectionStatsRoute,
  getNetworksNetworkIdWirelessClientsLatencyStatsRoute,
  getNetworksNetworkIdWirelessConnectionStatsRoute,
  getNetworksNetworkIdWirelessDataRateHistoryRoute,
  getNetworksNetworkIdWirelessDevicesConnectionStatsRoute,
  getNetworksNetworkIdWirelessDevicesLatencyStatsRoute,
  getNetworksNetworkIdWirelessElectronicShelfLabelConfiguredDevicesRoute,
  getNetworksNetworkIdWirelessElectronicShelfLabelRoute,
  getNetworksNetworkIdWirelessEthernetPortsProfilesProfileIdRoute,
  getNetworksNetworkIdWirelessEthernetPortsProfilesRoute,
  getNetworksNetworkIdWirelessFailedConnectionsRoute,
  getNetworksNetworkIdWirelessLatencyHistoryRoute,
  getNetworksNetworkIdWirelessLatencyStatsRoute,
  getNetworksNetworkIdWirelessMeshStatusesRoute,
  getNetworksNetworkIdWirelessRfProfilesRfProfileIdRoute,
  getNetworksNetworkIdWirelessRfProfilesRoute,
  getNetworksNetworkIdWirelessSettingsRoute,
  getNetworksNetworkIdWirelessSignalQualityHistoryRoute,
  getNetworksNetworkIdWirelessSsidsNumberBonjourForwardingRoute,
  getNetworksNetworkIdWirelessSsidsNumberDeviceTypeGroupPoliciesRoute,
  getNetworksNetworkIdWirelessSsidsNumberEapOverrideRoute,
  getNetworksNetworkIdWirelessSsidsNumberFirewallL3FirewallRulesRoute,
  getNetworksNetworkIdWirelessSsidsNumberFirewallL7FirewallRulesRoute,
  getNetworksNetworkIdWirelessSsidsNumberHotspot20Route,
  getNetworksNetworkIdWirelessSsidsNumberIdentityPsksIdentityPskIdRoute,
  getNetworksNetworkIdWirelessSsidsNumberIdentityPsksRoute,
  getNetworksNetworkIdWirelessSsidsNumberOverridesRoute,
  getNetworksNetworkIdWirelessSsidsNumberRoute,
  getNetworksNetworkIdWirelessSsidsNumberSchedulesRoute,
  getNetworksNetworkIdWirelessSsidsNumberSplashSettingsRoute,
  getNetworksNetworkIdWirelessSsidsNumberTrafficShapingRulesRoute,
  getNetworksNetworkIdWirelessSsidsNumberVpnRoute,
  getNetworksNetworkIdWirelessSsidsRoute,
  getNetworksNetworkIdWirelessUsageHistoryRoute,
  postNetworksNetworkIdApplianceDevicesRedundancySwapRoute,
  postNetworksNetworkIdApplianceInterfacesL3Route,
  postNetworksNetworkIdAppliancePrefixesDelegatedStaticsRoute,
  postNetworksNetworkIdApplianceRfProfilesRoute,
  postNetworksNetworkIdApplianceStaticRoutesRoute,
  postNetworksNetworkIdApplianceTrafficShapingCustomPerformanceClassesRoute,
  postNetworksNetworkIdApplianceUmbrellaAccountConnectRoute,
  postNetworksNetworkIdApplianceUmbrellaAccountDisconnectRoute,
  postNetworksNetworkIdApplianceUmbrellaPoliciesAddRoute,
  postNetworksNetworkIdApplianceUmbrellaPoliciesRemoveRoute,
  postNetworksNetworkIdApplianceVlansRoute,
  postNetworksNetworkIdApplianceWarmSpareSwapRoute,
  postNetworksNetworkIdBindRoute,
  postNetworksNetworkIdCameraQualityRetentionProfilesRoute,
  postNetworksNetworkIdCameraWirelessProfilesRoute,
  postNetworksNetworkIdCampusGatewayClustersRoute,
  postNetworksNetworkIdClientsProvisionRoute,
  postNetworksNetworkIdDevicesClaimRoute,
  postNetworksNetworkIdDevicesClaimVmxRoute,
  postNetworksNetworkIdDevicesRemoveRoute,
  postNetworksNetworkIdFirmwareUpgradesRollbacksRoute,
  postNetworksNetworkIdFirmwareUpgradesStagedEventsDeferRoute,
  postNetworksNetworkIdFirmwareUpgradesStagedEventsRollbacksRoute,
  postNetworksNetworkIdFirmwareUpgradesStagedEventsRoute,
  postNetworksNetworkIdFirmwareUpgradesStagedGroupsRoute,
  postNetworksNetworkIdFloorPlansAutoLocateJobsBatchRoute,
  postNetworksNetworkIdFloorPlansAutoLocateJobsJobIdCancelRoute,
  postNetworksNetworkIdFloorPlansAutoLocateJobsJobIdPublishRoute,
  postNetworksNetworkIdFloorPlansAutoLocateJobsJobIdRecalculateRoute,
  postNetworksNetworkIdFloorPlansDevicesBatchUpdateRoute,
  postNetworksNetworkIdFloorPlansRoute,
  postNetworksNetworkIdGroupPoliciesRoute,
  postNetworksNetworkIdMerakiAuthUsersRoute,
  postNetworksNetworkIdMqttBrokersRoute,
  postNetworksNetworkIdPiiRequestsRoute,
  postNetworksNetworkIdSensorAlertsProfilesRoute,
  postNetworksNetworkIdSmBypassActivationLockAttemptsRoute,
  postNetworksNetworkIdSmDevicesCheckinRoute,
  postNetworksNetworkIdSmDevicesDeviceIdInstallAppsRoute,
  postNetworksNetworkIdSmDevicesDeviceIdRefreshDetailsRoute,
  postNetworksNetworkIdSmDevicesDeviceIdUnenrollRoute,
  postNetworksNetworkIdSmDevicesDeviceIdUninstallAppsRoute,
  postNetworksNetworkIdSmDevicesLockRoute,
  postNetworksNetworkIdSmDevicesModifyTagsRoute,
  postNetworksNetworkIdSmDevicesMoveRoute,
  postNetworksNetworkIdSmDevicesRebootRoute,
  postNetworksNetworkIdSmDevicesShutdownRoute,
  postNetworksNetworkIdSmDevicesWipeRoute,
  postNetworksNetworkIdSmTargetGroupsRoute,
  postNetworksNetworkIdSplitRoute,
  postNetworksNetworkIdSwitchAccessPoliciesRoute,
  postNetworksNetworkIdSwitchDhcpServerPolicyArpInspectionTrustedServersRoute,
  postNetworksNetworkIdSwitchLinkAggregationsRoute,
  postNetworksNetworkIdSwitchPortSchedulesRoute,
  postNetworksNetworkIdSwitchQosRulesRoute,
  postNetworksNetworkIdSwitchRoutingMulticastRendezvousPointsRoute,
  postNetworksNetworkIdSwitchStacksRoute,
  postNetworksNetworkIdSwitchStacksSwitchStackIdAddRoute,
  postNetworksNetworkIdSwitchStacksSwitchStackIdRemoveRoute,
  postNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesRoute,
  postNetworksNetworkIdSwitchStacksSwitchStackIdRoutingStaticRoutesRoute,
  postNetworksNetworkIdUnbindRoute,
  postNetworksNetworkIdVlanProfilesAssignmentsReassignRoute,
  postNetworksNetworkIdVlanProfilesRoute,
  postNetworksNetworkIdWebhooksHttpServersRoute,
  postNetworksNetworkIdWebhooksPayloadTemplatesRoute,
  postNetworksNetworkIdWebhooksWebhookTestsRoute,
  postNetworksNetworkIdWirelessAirMarshalRulesRoute,
  postNetworksNetworkIdWirelessEthernetPortsProfilesAssignRoute,
  postNetworksNetworkIdWirelessEthernetPortsProfilesRoute,
  postNetworksNetworkIdWirelessEthernetPortsProfilesSetDefaultRoute,
  postNetworksNetworkIdWirelessRfProfilesRoute,
  postNetworksNetworkIdWirelessSsidsNumberIdentityPsksRoute,
  putNetworksNetworkIdAlertsSettingsRoute,
  putNetworksNetworkIdApplianceConnectivityMonitoringDestinationsRoute,
  putNetworksNetworkIdApplianceContentFilteringRoute,
  putNetworksNetworkIdApplianceDevicesRedundancyRoute,
  putNetworksNetworkIdApplianceFirewallCellularFirewallRulesRoute,
  putNetworksNetworkIdApplianceFirewallFirewalledServicesServiceRoute,
  putNetworksNetworkIdApplianceFirewallInboundCellularFirewallRulesRoute,
  putNetworksNetworkIdApplianceFirewallInboundFirewallRulesRoute,
  putNetworksNetworkIdApplianceFirewallL3FirewallRulesRoute,
  putNetworksNetworkIdApplianceFirewallL7FirewallRulesRoute,
  putNetworksNetworkIdApplianceFirewallMulticastForwardingRoute,
  putNetworksNetworkIdApplianceFirewallOneToManyNatRulesRoute,
  putNetworksNetworkIdApplianceFirewallOneToOneNatRulesRoute,
  putNetworksNetworkIdApplianceFirewallPortForwardingRulesRoute,
  putNetworksNetworkIdApplianceFirewallSettingsRoute,
  putNetworksNetworkIdApplianceInterfacesL3InterfaceIdRoute,
  putNetworksNetworkIdAppliancePortsPortIdRoute,
  putNetworksNetworkIdAppliancePrefixesDelegatedStaticsStaticDelegatedPrefixIdRoute,
  putNetworksNetworkIdApplianceRfProfilesRfProfileIdRoute,
  putNetworksNetworkIdApplianceSdwanInternetPoliciesRoute,
  putNetworksNetworkIdApplianceSecurityHttpsInspectionRoute,
  putNetworksNetworkIdApplianceSecurityIntrusionRoute,
  putNetworksNetworkIdApplianceSecurityMalwareRoute,
  putNetworksNetworkIdApplianceSettingsRoute,
  putNetworksNetworkIdApplianceSingleLanRoute,
  putNetworksNetworkIdApplianceSsidsNumberRoute,
  putNetworksNetworkIdApplianceStaticRoutesStaticRouteIdRoute,
  putNetworksNetworkIdApplianceTrafficShapingCustomPerformanceClassesCustomPerformanceClassIdRoute,
  putNetworksNetworkIdApplianceTrafficShapingRoute,
  putNetworksNetworkIdApplianceTrafficShapingRulesRoute,
  putNetworksNetworkIdApplianceTrafficShapingUplinkBandwidthRoute,
  putNetworksNetworkIdApplianceTrafficShapingUplinkSelectionRoute,
  putNetworksNetworkIdApplianceTrafficShapingVpnExclusionsRoute,
  putNetworksNetworkIdApplianceUmbrellaDomainsExclusionsRoute,
  putNetworksNetworkIdApplianceUmbrellaProtectionRoute,
  putNetworksNetworkIdApplianceUplinksNatRoute,
  putNetworksNetworkIdApplianceVlansSettingsRoute,
  putNetworksNetworkIdApplianceVlansVlanIdRoute,
  putNetworksNetworkIdApplianceVpnBgpRoute,
  putNetworksNetworkIdApplianceVpnSiteToSiteVpnRoute,
  putNetworksNetworkIdApplianceWarmSpareRoute,
  putNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute,
  putNetworksNetworkIdCameraWirelessProfilesWirelessProfileIdRoute,
  putNetworksNetworkIdCampusGatewayClustersClusterIdRoute,
  putNetworksNetworkIdCampusGatewaySsidsNumberMdnsRoute,
  putNetworksNetworkIdCellularGatewayConnectivityMonitoringDestinationsRoute,
  putNetworksNetworkIdCellularGatewayDhcpRoute,
  putNetworksNetworkIdCellularGatewaySubnetPoolRoute,
  putNetworksNetworkIdCellularGatewayUplinkRoute,
  putNetworksNetworkIdClientsClientIdPolicyRoute,
  putNetworksNetworkIdClientsClientIdSplashAuthorizationStatusRoute,
  putNetworksNetworkIdDevicesSyslogServersRoute,
  putNetworksNetworkIdFirmwareUpgradesRoute,
  putNetworksNetworkIdFirmwareUpgradesStagedEventsRoute,
  putNetworksNetworkIdFirmwareUpgradesStagedGroupsGroupIdRoute,
  putNetworksNetworkIdFirmwareUpgradesStagedStagesRoute,
  putNetworksNetworkIdFloorPlansFloorPlanIdRoute,
  putNetworksNetworkIdGroupPoliciesGroupPolicyIdRoute,
  putNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdRoute,
  putNetworksNetworkIdMqttBrokersMqttBrokerIdRoute,
  putNetworksNetworkIdNetflowRoute,
  putNetworksNetworkIdRoute,
  putNetworksNetworkIdSensorAlertsProfilesIdRoute,
  putNetworksNetworkIdSensorMqttBrokersMqttBrokerIdRoute,
  putNetworksNetworkIdSettingsRoute,
  putNetworksNetworkIdSmDevicesFieldsRoute,
  putNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute,
  putNetworksNetworkIdSnmpRoute,
  putNetworksNetworkIdSwitchAccessControlListsRoute,
  putNetworksNetworkIdSwitchAccessPoliciesAccessPolicyNumberRoute,
  putNetworksNetworkIdSwitchAlternateManagementInterfaceRoute,
  putNetworksNetworkIdSwitchDhcpServerPolicyArpInspectionTrustedServersTrustedServerIdRoute,
  putNetworksNetworkIdSwitchDhcpServerPolicyRoute,
  putNetworksNetworkIdSwitchDscpToCosMappingsRoute,
  putNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdRoute,
  putNetworksNetworkIdSwitchMtuRoute,
  putNetworksNetworkIdSwitchPortSchedulesPortScheduleIdRoute,
  putNetworksNetworkIdSwitchQosRulesOrderRoute,
  putNetworksNetworkIdSwitchQosRulesQosRuleIdRoute,
  putNetworksNetworkIdSwitchRoutingMulticastRendezvousPointsRendezvousPointIdRoute,
  putNetworksNetworkIdSwitchRoutingMulticastRoute,
  putNetworksNetworkIdSwitchRoutingOspfRoute,
  putNetworksNetworkIdSwitchSettingsRoute,
  putNetworksNetworkIdSwitchStacksSwitchStackIdRoute,
  putNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesInterfaceIdDhcpRoute,
  putNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesInterfaceIdRoute,
  putNetworksNetworkIdSwitchStacksSwitchStackIdRoutingStaticRoutesStaticRouteIdRoute,
  putNetworksNetworkIdSwitchStormControlRoute,
  putNetworksNetworkIdSwitchStpRoute,
  putNetworksNetworkIdSyslogServersRoute,
  putNetworksNetworkIdTrafficAnalysisRoute,
  putNetworksNetworkIdVlanProfilesInameRoute,
  putNetworksNetworkIdWebhooksHttpServersHttpServerIdRoute,
  putNetworksNetworkIdWebhooksPayloadTemplatesPayloadTemplateIdRoute,
  putNetworksNetworkIdWirelessAirMarshalRulesRuleIdRoute,
  putNetworksNetworkIdWirelessAirMarshalSettingsRoute,
  putNetworksNetworkIdWirelessAlternateManagementInterfaceRoute,
  putNetworksNetworkIdWirelessBillingRoute,
  putNetworksNetworkIdWirelessBluetoothSettingsRoute,
  putNetworksNetworkIdWirelessElectronicShelfLabelRoute,
  putNetworksNetworkIdWirelessEthernetPortsProfilesProfileIdRoute,
  putNetworksNetworkIdWirelessLocationScanningRoute,
  putNetworksNetworkIdWirelessRadioRrmRoute,
  putNetworksNetworkIdWirelessRfProfilesRfProfileIdRoute,
  putNetworksNetworkIdWirelessSettingsRoute,
  putNetworksNetworkIdWirelessSsidsNumberBonjourForwardingRoute,
  putNetworksNetworkIdWirelessSsidsNumberDeviceTypeGroupPoliciesRoute,
  putNetworksNetworkIdWirelessSsidsNumberEapOverrideRoute,
  putNetworksNetworkIdWirelessSsidsNumberFirewallL3FirewallRulesRoute,
  putNetworksNetworkIdWirelessSsidsNumberFirewallL7FirewallRulesRoute,
  putNetworksNetworkIdWirelessSsidsNumberHotspot20Route,
  putNetworksNetworkIdWirelessSsidsNumberIdentityPsksIdentityPskIdRoute,
  putNetworksNetworkIdWirelessSsidsNumberOpenRoamingRoute,
  putNetworksNetworkIdWirelessSsidsNumberOverridesRoute,
  putNetworksNetworkIdWirelessSsidsNumberRoute,
  putNetworksNetworkIdWirelessSsidsNumberSchedulesRoute,
  putNetworksNetworkIdWirelessSsidsNumberSplashSettingsRoute,
  putNetworksNetworkIdWirelessSsidsNumberTrafficShapingRulesRoute,
  putNetworksNetworkIdWirelessSsidsNumberVpnRoute,
  putNetworksNetworkIdWirelessSsidsOweRoute,
  putNetworksNetworkIdWirelessZigbeeRoute,
} from '../routes'

export const getNetworksNetworkIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdAlertsHistoryRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdAlertsHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdAlertsSettingsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdAlertsSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdAlertsSettingsRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdAlertsSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceClientsClientIdSecurityEventsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceClientsClientIdSecurityEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceConnectivityMonitoringDestinationsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceConnectivityMonitoringDestinationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceConnectivityMonitoringDestinationsRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceConnectivityMonitoringDestinationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceContentFilteringRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceContentFilteringRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceContentFilteringRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceContentFilteringRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceContentFilteringCategoriesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceContentFilteringCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceDevicesRedundancyRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceDevicesRedundancyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdApplianceDevicesRedundancySwapRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdApplianceDevicesRedundancySwapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceFirewallCellularFirewallRulesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceFirewallCellularFirewallRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceFirewallCellularFirewallRulesRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceFirewallCellularFirewallRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceFirewallFirewalledServicesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceFirewallFirewalledServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceFirewallFirewalledServicesServiceRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceFirewallFirewalledServicesServiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceFirewallFirewalledServicesServiceRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceFirewallFirewalledServicesServiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceFirewallInboundCellularFirewallRulesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceFirewallInboundCellularFirewallRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceFirewallInboundCellularFirewallRulesRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceFirewallInboundCellularFirewallRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceFirewallInboundFirewallRulesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceFirewallInboundFirewallRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceFirewallInboundFirewallRulesRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceFirewallInboundFirewallRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceFirewallL3FirewallRulesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceFirewallL3FirewallRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceFirewallL3FirewallRulesRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceFirewallL3FirewallRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceFirewallL7FirewallRulesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceFirewallL7FirewallRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceFirewallL7FirewallRulesRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceFirewallL7FirewallRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceFirewallL7FirewallRulesApplicationCategoriesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceFirewallL7FirewallRulesApplicationCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceFirewallMulticastForwardingRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceFirewallMulticastForwardingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceFirewallOneToManyNatRulesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceFirewallOneToManyNatRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceFirewallOneToManyNatRulesRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceFirewallOneToManyNatRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceFirewallOneToOneNatRulesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceFirewallOneToOneNatRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceFirewallOneToOneNatRulesRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceFirewallOneToOneNatRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceFirewallPortForwardingRulesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceFirewallPortForwardingRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceFirewallPortForwardingRulesRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceFirewallPortForwardingRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceFirewallSettingsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceFirewallSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceFirewallSettingsRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceFirewallSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdApplianceInterfacesL3RouteHandler: RouteHandler<
  typeof postNetworksNetworkIdApplianceInterfacesL3Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceInterfacesL3InterfaceIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceInterfacesL3InterfaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdApplianceInterfacesL3InterfaceIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdApplianceInterfacesL3InterfaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdAppliancePortsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdAppliancePortsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdAppliancePortsPortIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdAppliancePortsPortIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdAppliancePortsPortIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdAppliancePortsPortIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdAppliancePrefixesDelegatedStaticsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdAppliancePrefixesDelegatedStaticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdAppliancePrefixesDelegatedStaticsRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdAppliancePrefixesDelegatedStaticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdAppliancePrefixesDelegatedStaticsStaticDelegatedPrefixIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdAppliancePrefixesDelegatedStaticsStaticDelegatedPrefixIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdAppliancePrefixesDelegatedStaticsStaticDelegatedPrefixIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdAppliancePrefixesDelegatedStaticsStaticDelegatedPrefixIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdAppliancePrefixesDelegatedStaticsStaticDelegatedPrefixIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdAppliancePrefixesDelegatedStaticsStaticDelegatedPrefixIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceRfProfilesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceRfProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdApplianceRfProfilesRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdApplianceRfProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceRfProfilesRfProfileIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceRfProfilesRfProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdApplianceRfProfilesRfProfileIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdApplianceRfProfilesRfProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceRfProfilesRfProfileIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceRfProfilesRfProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceSdwanInternetPoliciesRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceSdwanInternetPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceSecurityEventsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceSecurityEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceSecurityHttpsInspectionRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceSecurityHttpsInspectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceSecurityIntrusionRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceSecurityIntrusionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceSecurityIntrusionRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceSecurityIntrusionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceSecurityMalwareRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceSecurityMalwareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceSecurityMalwareRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceSecurityMalwareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceSettingsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceSettingsRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceSingleLanRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceSingleLanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceSingleLanRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceSingleLanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceSsidsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceSsidsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceSsidsNumberRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceSsidsNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceSsidsNumberRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceSsidsNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceStaticRoutesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceStaticRoutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdApplianceStaticRoutesRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdApplianceStaticRoutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceStaticRoutesStaticRouteIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceStaticRoutesStaticRouteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceStaticRoutesStaticRouteIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceStaticRoutesStaticRouteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdApplianceStaticRoutesStaticRouteIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdApplianceStaticRoutesStaticRouteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceTrafficShapingRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceTrafficShapingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceTrafficShapingRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceTrafficShapingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceTrafficShapingCustomPerformanceClassesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceTrafficShapingCustomPerformanceClassesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdApplianceTrafficShapingCustomPerformanceClassesRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdApplianceTrafficShapingCustomPerformanceClassesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceTrafficShapingCustomPerformanceClassesCustomPerformanceClassIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceTrafficShapingCustomPerformanceClassesCustomPerformanceClassIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceTrafficShapingCustomPerformanceClassesCustomPerformanceClassIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceTrafficShapingCustomPerformanceClassesCustomPerformanceClassIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdApplianceTrafficShapingCustomPerformanceClassesCustomPerformanceClassIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdApplianceTrafficShapingCustomPerformanceClassesCustomPerformanceClassIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceTrafficShapingRulesRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceTrafficShapingRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceTrafficShapingRulesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceTrafficShapingRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceTrafficShapingUplinkBandwidthRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceTrafficShapingUplinkBandwidthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceTrafficShapingUplinkBandwidthRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceTrafficShapingUplinkBandwidthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceTrafficShapingUplinkSelectionRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceTrafficShapingUplinkSelectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceTrafficShapingUplinkSelectionRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceTrafficShapingUplinkSelectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceTrafficShapingVpnExclusionsRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceTrafficShapingVpnExclusionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdApplianceUmbrellaAccountConnectRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdApplianceUmbrellaAccountConnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdApplianceUmbrellaAccountDisconnectRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdApplianceUmbrellaAccountDisconnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceUmbrellaDomainsExclusionsRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceUmbrellaDomainsExclusionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdApplianceUmbrellaPoliciesAddRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdApplianceUmbrellaPoliciesAddRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdApplianceUmbrellaPoliciesRemoveRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdApplianceUmbrellaPoliciesRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceUmbrellaProtectionRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceUmbrellaProtectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceUplinksNatRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceUplinksNatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceUplinksUsageHistoryRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceUplinksUsageHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceVlansRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceVlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdApplianceVlansRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdApplianceVlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceVlansSettingsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceVlansSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceVlansSettingsRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceVlansSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceVlansVlanIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceVlansVlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceVlansVlanIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceVlansVlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdApplianceVlansVlanIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdApplianceVlansVlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceVpnBgpRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceVpnBgpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceVpnBgpRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceVpnBgpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceVpnSiteToSiteVpnRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceVpnSiteToSiteVpnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceVpnSiteToSiteVpnRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceVpnSiteToSiteVpnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdApplianceWarmSpareRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdApplianceWarmSpareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdApplianceWarmSpareRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdApplianceWarmSpareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdApplianceWarmSpareSwapRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdApplianceWarmSpareSwapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdBindRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdBindRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdBluetoothClientsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdBluetoothClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdBluetoothClientsBluetoothClientIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdBluetoothClientsBluetoothClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdCameraQualityRetentionProfilesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdCameraQualityRetentionProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdCameraQualityRetentionProfilesRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdCameraQualityRetentionProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdCameraSchedulesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdCameraSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdCameraWirelessProfilesRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdCameraWirelessProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdCameraWirelessProfilesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdCameraWirelessProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdCameraWirelessProfilesWirelessProfileIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdCameraWirelessProfilesWirelessProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdCameraWirelessProfilesWirelessProfileIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdCameraWirelessProfilesWirelessProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdCameraWirelessProfilesWirelessProfileIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdCameraWirelessProfilesWirelessProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdCampusGatewayClustersRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdCampusGatewayClustersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdCampusGatewayClustersClusterIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdCampusGatewayClustersClusterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdCampusGatewayClustersClusterIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdCampusGatewayClustersClusterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdCampusGatewaySsidsNumberMdnsRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdCampusGatewaySsidsNumberMdnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdCellularGatewayConnectivityMonitoringDestinationsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdCellularGatewayConnectivityMonitoringDestinationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdCellularGatewayConnectivityMonitoringDestinationsRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdCellularGatewayConnectivityMonitoringDestinationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdCellularGatewayDhcpRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdCellularGatewayDhcpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdCellularGatewayDhcpRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdCellularGatewayDhcpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdCellularGatewaySubnetPoolRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdCellularGatewaySubnetPoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdCellularGatewaySubnetPoolRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdCellularGatewaySubnetPoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdCellularGatewayUplinkRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdCellularGatewayUplinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdCellularGatewayUplinkRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdCellularGatewayUplinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdClientsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdClientsApplicationUsageRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdClientsApplicationUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdClientsBandwidthUsageHistoryRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdClientsBandwidthUsageHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdClientsOverviewRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdClientsOverviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdClientsProvisionRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdClientsProvisionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdClientsUsageHistoriesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdClientsUsageHistoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdClientsClientIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdClientsClientIdPolicyRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdClientsClientIdPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdClientsClientIdPolicyRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdClientsClientIdPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdClientsClientIdSplashAuthorizationStatusRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdClientsClientIdSplashAuthorizationStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdClientsClientIdSplashAuthorizationStatusRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdClientsClientIdSplashAuthorizationStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdClientsClientIdTrafficHistoryRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdClientsClientIdTrafficHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdClientsClientIdUsageHistoryRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdClientsClientIdUsageHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdDevicesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdDevicesClaimRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdDevicesClaimRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdDevicesClaimVmxRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdDevicesClaimVmxRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdDevicesRemoveRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdDevicesRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdDevicesSyslogServersRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdDevicesSyslogServersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdEventsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdEventsEventTypesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdEventsEventTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdFirmwareUpgradesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdFirmwareUpgradesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdFirmwareUpgradesRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdFirmwareUpgradesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdFirmwareUpgradesRollbacksRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdFirmwareUpgradesRollbacksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdFirmwareUpgradesStagedEventsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdFirmwareUpgradesStagedEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdFirmwareUpgradesStagedEventsRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdFirmwareUpgradesStagedEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdFirmwareUpgradesStagedEventsRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdFirmwareUpgradesStagedEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdFirmwareUpgradesStagedEventsDeferRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdFirmwareUpgradesStagedEventsDeferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdFirmwareUpgradesStagedEventsRollbacksRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdFirmwareUpgradesStagedEventsRollbacksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdFirmwareUpgradesStagedGroupsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdFirmwareUpgradesStagedGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdFirmwareUpgradesStagedGroupsRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdFirmwareUpgradesStagedGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdFirmwareUpgradesStagedGroupsGroupIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdFirmwareUpgradesStagedGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdFirmwareUpgradesStagedGroupsGroupIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdFirmwareUpgradesStagedGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdFirmwareUpgradesStagedGroupsGroupIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdFirmwareUpgradesStagedGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdFirmwareUpgradesStagedStagesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdFirmwareUpgradesStagedStagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdFirmwareUpgradesStagedStagesRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdFirmwareUpgradesStagedStagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdFloorPlansRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdFloorPlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdFloorPlansRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdFloorPlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdFloorPlansAutoLocateJobsBatchRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdFloorPlansAutoLocateJobsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdFloorPlansAutoLocateJobsJobIdCancelRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdFloorPlansAutoLocateJobsJobIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdFloorPlansAutoLocateJobsJobIdPublishRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdFloorPlansAutoLocateJobsJobIdPublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdFloorPlansAutoLocateJobsJobIdRecalculateRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdFloorPlansAutoLocateJobsJobIdRecalculateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdFloorPlansDevicesBatchUpdateRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdFloorPlansDevicesBatchUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdFloorPlansFloorPlanIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdFloorPlansFloorPlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdFloorPlansFloorPlanIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdFloorPlansFloorPlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdFloorPlansFloorPlanIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdFloorPlansFloorPlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdGroupPoliciesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdGroupPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdGroupPoliciesRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdGroupPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdGroupPoliciesGroupPolicyIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdGroupPoliciesGroupPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdGroupPoliciesGroupPolicyIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdGroupPoliciesGroupPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdGroupPoliciesGroupPolicyIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdGroupPoliciesGroupPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdHealthAlertsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdHealthAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdInsightApplicationsApplicationIdHealthByTimeRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdInsightApplicationsApplicationIdHealthByTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdMerakiAuthUsersRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdMerakiAuthUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdMerakiAuthUsersRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdMerakiAuthUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdMqttBrokersRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdMqttBrokersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdMqttBrokersRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdMqttBrokersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdMqttBrokersMqttBrokerIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdMqttBrokersMqttBrokerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdMqttBrokersMqttBrokerIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdMqttBrokersMqttBrokerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdMqttBrokersMqttBrokerIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdMqttBrokersMqttBrokerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdNetflowRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdNetflowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdNetflowRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdNetflowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdNetworkHealthChannelUtilizationRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdNetworkHealthChannelUtilizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdPiiPiiKeysRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdPiiPiiKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdPiiRequestsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdPiiRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdPiiRequestsRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdPiiRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdPiiRequestsRequestIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdPiiRequestsRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdPiiRequestsRequestIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdPiiRequestsRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdPiiSmDevicesForKeyRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdPiiSmDevicesForKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdPiiSmOwnersForKeyRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdPiiSmOwnersForKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdPoliciesByClientRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdPoliciesByClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSensorAlertsCurrentOverviewByMetricRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSensorAlertsCurrentOverviewByMetricRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSensorAlertsOverviewByMetricRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSensorAlertsOverviewByMetricRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSensorAlertsProfilesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSensorAlertsProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSensorAlertsProfilesRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSensorAlertsProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSensorAlertsProfilesIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSensorAlertsProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSensorAlertsProfilesIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSensorAlertsProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdSensorAlertsProfilesIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdSensorAlertsProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSensorMqttBrokersRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSensorMqttBrokersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSensorMqttBrokersMqttBrokerIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSensorMqttBrokersMqttBrokerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSensorMqttBrokersMqttBrokerIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSensorMqttBrokersMqttBrokerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSensorRelationshipsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSensorRelationshipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSettingsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSettingsRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSmBypassActivationLockAttemptsRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSmBypassActivationLockAttemptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmBypassActivationLockAttemptsAttemptIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmBypassActivationLockAttemptsAttemptIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmDevicesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSmDevicesCheckinRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSmDevicesCheckinRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSmDevicesFieldsRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSmDevicesFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSmDevicesLockRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSmDevicesLockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSmDevicesModifyTagsRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSmDevicesModifyTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSmDevicesMoveRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSmDevicesMoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSmDevicesRebootRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSmDevicesRebootRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSmDevicesShutdownRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSmDevicesShutdownRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSmDevicesWipeRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSmDevicesWipeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmDevicesDeviceIdCellularUsageHistoryRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmDevicesDeviceIdCellularUsageHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmDevicesDeviceIdCertsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmDevicesDeviceIdCertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmDevicesDeviceIdConnectivityRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmDevicesDeviceIdConnectivityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmDevicesDeviceIdDesktopLogsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmDevicesDeviceIdDesktopLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmDevicesDeviceIdDeviceCommandLogsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmDevicesDeviceIdDeviceCommandLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmDevicesDeviceIdDeviceProfilesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmDevicesDeviceIdDeviceProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSmDevicesDeviceIdInstallAppsRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSmDevicesDeviceIdInstallAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmDevicesDeviceIdNetworkAdaptersRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmDevicesDeviceIdNetworkAdaptersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmDevicesDeviceIdPerformanceHistoryRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmDevicesDeviceIdPerformanceHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSmDevicesDeviceIdRefreshDetailsRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSmDevicesDeviceIdRefreshDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmDevicesDeviceIdRestrictionsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmDevicesDeviceIdRestrictionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmDevicesDeviceIdSecurityCentersRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmDevicesDeviceIdSecurityCentersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmDevicesDeviceIdSoftwaresRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmDevicesDeviceIdSoftwaresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSmDevicesDeviceIdUnenrollRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSmDevicesDeviceIdUnenrollRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSmDevicesDeviceIdUninstallAppsRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSmDevicesDeviceIdUninstallAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmDevicesDeviceIdWlanListsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmDevicesDeviceIdWlanListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmProfilesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmTargetGroupsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmTargetGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSmTargetGroupsRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSmTargetGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmTargetGroupsTargetGroupIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSmTargetGroupsTargetGroupIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdSmTargetGroupsTargetGroupIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmTrustedAccessConfigsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmTrustedAccessConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmUserAccessDevicesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmUserAccessDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdSmUserAccessDevicesUserAccessDeviceIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdSmUserAccessDevicesUserAccessDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmUsersRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmUsersUserIdDeviceProfilesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmUsersUserIdDeviceProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmUsersUserIdSoftwaresRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmUsersUserIdSoftwaresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSnmpRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSnmpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSnmpRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSnmpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSplashLoginAttemptsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSplashLoginAttemptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSplitRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSplitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchAccessControlListsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchAccessControlListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSwitchAccessControlListsRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSwitchAccessControlListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchAccessPoliciesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchAccessPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSwitchAccessPoliciesRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSwitchAccessPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchAccessPoliciesAccessPolicyNumberRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchAccessPoliciesAccessPolicyNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSwitchAccessPoliciesAccessPolicyNumberRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSwitchAccessPoliciesAccessPolicyNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdSwitchAccessPoliciesAccessPolicyNumberRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdSwitchAccessPoliciesAccessPolicyNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchAlternateManagementInterfaceRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchAlternateManagementInterfaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSwitchAlternateManagementInterfaceRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSwitchAlternateManagementInterfaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchDhcpV4ServersSeenRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchDhcpV4ServersSeenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchDhcpServerPolicyRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchDhcpServerPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSwitchDhcpServerPolicyRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSwitchDhcpServerPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchDhcpServerPolicyArpInspectionTrustedServersRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchDhcpServerPolicyArpInspectionTrustedServersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSwitchDhcpServerPolicyArpInspectionTrustedServersRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSwitchDhcpServerPolicyArpInspectionTrustedServersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSwitchDhcpServerPolicyArpInspectionTrustedServersTrustedServerIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSwitchDhcpServerPolicyArpInspectionTrustedServersTrustedServerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdSwitchDhcpServerPolicyArpInspectionTrustedServersTrustedServerIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdSwitchDhcpServerPolicyArpInspectionTrustedServersTrustedServerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchDscpToCosMappingsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchDscpToCosMappingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSwitchDscpToCosMappingsRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSwitchDscpToCosMappingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchLinkAggregationsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchLinkAggregationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSwitchLinkAggregationsRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSwitchLinkAggregationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchMtuRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchMtuRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSwitchMtuRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSwitchMtuRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchPortSchedulesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchPortSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSwitchPortSchedulesRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSwitchPortSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdSwitchPortSchedulesPortScheduleIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdSwitchPortSchedulesPortScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSwitchPortSchedulesPortScheduleIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSwitchPortSchedulesPortScheduleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchQosRulesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchQosRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSwitchQosRulesRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSwitchQosRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchQosRulesOrderRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchQosRulesOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSwitchQosRulesOrderRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSwitchQosRulesOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchQosRulesQosRuleIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchQosRulesQosRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdSwitchQosRulesQosRuleIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdSwitchQosRulesQosRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSwitchQosRulesQosRuleIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSwitchQosRulesQosRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchRoutingMulticastRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchRoutingMulticastRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSwitchRoutingMulticastRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSwitchRoutingMulticastRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchRoutingMulticastRendezvousPointsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchRoutingMulticastRendezvousPointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSwitchRoutingMulticastRendezvousPointsRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSwitchRoutingMulticastRendezvousPointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchRoutingMulticastRendezvousPointsRendezvousPointIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchRoutingMulticastRendezvousPointsRendezvousPointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdSwitchRoutingMulticastRendezvousPointsRendezvousPointIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdSwitchRoutingMulticastRendezvousPointsRendezvousPointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSwitchRoutingMulticastRendezvousPointsRendezvousPointIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSwitchRoutingMulticastRendezvousPointsRendezvousPointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchRoutingOspfRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchRoutingOspfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSwitchRoutingOspfRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSwitchRoutingOspfRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchSettingsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSwitchSettingsRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSwitchSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchStacksRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchStacksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSwitchStacksRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSwitchStacksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSwitchStacksSwitchStackIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSwitchStacksSwitchStackIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchStacksSwitchStackIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchStacksSwitchStackIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdSwitchStacksSwitchStackIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdSwitchStacksSwitchStackIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSwitchStacksSwitchStackIdAddRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSwitchStacksSwitchStackIdAddRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSwitchStacksSwitchStackIdRemoveRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSwitchStacksSwitchStackIdRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesInterfaceIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesInterfaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesInterfaceIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesInterfaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesInterfaceIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesInterfaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesInterfaceIdDhcpRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesInterfaceIdDhcpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesInterfaceIdDhcpRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesInterfaceIdDhcpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchStacksSwitchStackIdRoutingStaticRoutesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchStacksSwitchStackIdRoutingStaticRoutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSwitchStacksSwitchStackIdRoutingStaticRoutesRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSwitchStacksSwitchStackIdRoutingStaticRoutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchStacksSwitchStackIdRoutingStaticRoutesStaticRouteIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchStacksSwitchStackIdRoutingStaticRoutesStaticRouteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSwitchStacksSwitchStackIdRoutingStaticRoutesStaticRouteIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSwitchStacksSwitchStackIdRoutingStaticRoutesStaticRouteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdSwitchStacksSwitchStackIdRoutingStaticRoutesStaticRouteIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdSwitchStacksSwitchStackIdRoutingStaticRoutesStaticRouteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchStormControlRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchStormControlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSwitchStormControlRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSwitchStormControlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchStpRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchStpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSwitchStpRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSwitchStpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSyslogServersRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSyslogServersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSyslogServersRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSyslogServersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdTopologyLinkLayerRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdTopologyLinkLayerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdTrafficRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdTrafficRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdTrafficAnalysisRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdTrafficAnalysisRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdTrafficAnalysisRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdTrafficAnalysisRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdTrafficShapingApplicationCategoriesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdTrafficShapingApplicationCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdTrafficShapingDscpTaggingOptionsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdTrafficShapingDscpTaggingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdUnbindRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdUnbindRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdVlanProfilesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdVlanProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdVlanProfilesRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdVlanProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdVlanProfilesAssignmentsByDeviceRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdVlanProfilesAssignmentsByDeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdVlanProfilesAssignmentsReassignRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdVlanProfilesAssignmentsReassignRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdVlanProfilesInameRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdVlanProfilesInameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdVlanProfilesInameRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdVlanProfilesInameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdVlanProfilesInameRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdVlanProfilesInameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWebhooksHttpServersRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWebhooksHttpServersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdWebhooksHttpServersRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdWebhooksHttpServersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWebhooksHttpServersHttpServerIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWebhooksHttpServersHttpServerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWebhooksHttpServersHttpServerIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWebhooksHttpServersHttpServerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdWebhooksHttpServersHttpServerIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdWebhooksHttpServersHttpServerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWebhooksPayloadTemplatesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWebhooksPayloadTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdWebhooksPayloadTemplatesRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdWebhooksPayloadTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWebhooksPayloadTemplatesPayloadTemplateIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWebhooksPayloadTemplatesPayloadTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdWebhooksPayloadTemplatesPayloadTemplateIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdWebhooksPayloadTemplatesPayloadTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWebhooksPayloadTemplatesPayloadTemplateIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWebhooksPayloadTemplatesPayloadTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdWebhooksWebhookTestsRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdWebhooksWebhookTestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWebhooksWebhookTestsWebhookTestIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWebhooksWebhookTestsWebhookTestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessAirMarshalRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessAirMarshalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdWirelessAirMarshalRulesRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdWirelessAirMarshalRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWirelessAirMarshalRulesRuleIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWirelessAirMarshalRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdWirelessAirMarshalRulesRuleIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdWirelessAirMarshalRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWirelessAirMarshalSettingsRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWirelessAirMarshalSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessAlternateManagementInterfaceRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessAlternateManagementInterfaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWirelessAlternateManagementInterfaceRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWirelessAlternateManagementInterfaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessBillingRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessBillingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWirelessBillingRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWirelessBillingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessBluetoothSettingsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessBluetoothSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWirelessBluetoothSettingsRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWirelessBluetoothSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessChannelUtilizationHistoryRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessChannelUtilizationHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessClientCountHistoryRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessClientCountHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessClientsConnectionStatsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessClientsConnectionStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessClientsLatencyStatsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessClientsLatencyStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessClientsClientIdConnectionStatsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessClientsClientIdConnectionStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessClientsClientIdConnectivityEventsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessClientsClientIdConnectivityEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessClientsClientIdLatencyHistoryRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessClientsClientIdLatencyHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessClientsClientIdLatencyStatsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessClientsClientIdLatencyStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessConnectionStatsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessConnectionStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessDataRateHistoryRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessDataRateHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessDevicesConnectionStatsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessDevicesConnectionStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessDevicesLatencyStatsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessDevicesLatencyStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessElectronicShelfLabelRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessElectronicShelfLabelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWirelessElectronicShelfLabelRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWirelessElectronicShelfLabelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessElectronicShelfLabelConfiguredDevicesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessElectronicShelfLabelConfiguredDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessEthernetPortsProfilesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessEthernetPortsProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdWirelessEthernetPortsProfilesRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdWirelessEthernetPortsProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdWirelessEthernetPortsProfilesAssignRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdWirelessEthernetPortsProfilesAssignRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdWirelessEthernetPortsProfilesSetDefaultRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdWirelessEthernetPortsProfilesSetDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessEthernetPortsProfilesProfileIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessEthernetPortsProfilesProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWirelessEthernetPortsProfilesProfileIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWirelessEthernetPortsProfilesProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdWirelessEthernetPortsProfilesProfileIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdWirelessEthernetPortsProfilesProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessFailedConnectionsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessFailedConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessLatencyHistoryRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessLatencyHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessLatencyStatsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessLatencyStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWirelessLocationScanningRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWirelessLocationScanningRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessMeshStatusesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessMeshStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWirelessRadioRrmRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWirelessRadioRrmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessRfProfilesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessRfProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdWirelessRfProfilesRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdWirelessRfProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWirelessRfProfilesRfProfileIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWirelessRfProfilesRfProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdWirelessRfProfilesRfProfileIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdWirelessRfProfilesRfProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessRfProfilesRfProfileIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessRfProfilesRfProfileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessSettingsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWirelessSettingsRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWirelessSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessSignalQualityHistoryRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessSignalQualityHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessSsidsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessSsidsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWirelessSsidsOweRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWirelessSsidsOweRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessSsidsNumberRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessSsidsNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWirelessSsidsNumberRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWirelessSsidsNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessSsidsNumberBonjourForwardingRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessSsidsNumberBonjourForwardingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWirelessSsidsNumberBonjourForwardingRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWirelessSsidsNumberBonjourForwardingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessSsidsNumberDeviceTypeGroupPoliciesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessSsidsNumberDeviceTypeGroupPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWirelessSsidsNumberDeviceTypeGroupPoliciesRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWirelessSsidsNumberDeviceTypeGroupPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessSsidsNumberEapOverrideRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessSsidsNumberEapOverrideRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWirelessSsidsNumberEapOverrideRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWirelessSsidsNumberEapOverrideRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessSsidsNumberFirewallL3FirewallRulesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessSsidsNumberFirewallL3FirewallRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWirelessSsidsNumberFirewallL3FirewallRulesRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWirelessSsidsNumberFirewallL3FirewallRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessSsidsNumberFirewallL7FirewallRulesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessSsidsNumberFirewallL7FirewallRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWirelessSsidsNumberFirewallL7FirewallRulesRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWirelessSsidsNumberFirewallL7FirewallRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessSsidsNumberHotspot20RouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessSsidsNumberHotspot20Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWirelessSsidsNumberHotspot20RouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWirelessSsidsNumberHotspot20Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessSsidsNumberIdentityPsksRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessSsidsNumberIdentityPsksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdWirelessSsidsNumberIdentityPsksRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdWirelessSsidsNumberIdentityPsksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessSsidsNumberIdentityPsksIdentityPskIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessSsidsNumberIdentityPsksIdentityPskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWirelessSsidsNumberIdentityPsksIdentityPskIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWirelessSsidsNumberIdentityPsksIdentityPskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdWirelessSsidsNumberIdentityPsksIdentityPskIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdWirelessSsidsNumberIdentityPsksIdentityPskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWirelessSsidsNumberOpenRoamingRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWirelessSsidsNumberOpenRoamingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessSsidsNumberOverridesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessSsidsNumberOverridesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWirelessSsidsNumberOverridesRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWirelessSsidsNumberOverridesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessSsidsNumberSchedulesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessSsidsNumberSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWirelessSsidsNumberSchedulesRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWirelessSsidsNumberSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessSsidsNumberSplashSettingsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessSsidsNumberSplashSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWirelessSsidsNumberSplashSettingsRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWirelessSsidsNumberSplashSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWirelessSsidsNumberTrafficShapingRulesRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWirelessSsidsNumberTrafficShapingRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessSsidsNumberTrafficShapingRulesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessSsidsNumberTrafficShapingRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessSsidsNumberVpnRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessSsidsNumberVpnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWirelessSsidsNumberVpnRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWirelessSsidsNumberVpnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWirelessUsageHistoryRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWirelessUsageHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWirelessZigbeeRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWirelessZigbeeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
