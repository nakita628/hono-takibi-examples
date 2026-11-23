import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const networksHandler = app
  .openapi(getNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdAlertsHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdAlertsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdAlertsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceClientsClientIdSecurityEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceConnectivityMonitoringDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceConnectivityMonitoringDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceContentFilteringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceContentFilteringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceContentFilteringCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceDevicesRedundancyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdApplianceDevicesRedundancySwapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceFirewallCellularFirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceFirewallCellularFirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceFirewallFirewalledServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceFirewallFirewalledServicesServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceFirewallFirewalledServicesServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceFirewallInboundCellularFirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceFirewallInboundCellularFirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceFirewallInboundFirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceFirewallInboundFirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceFirewallL3FirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceFirewallL3FirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceFirewallL7FirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceFirewallL7FirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceFirewallL7FirewallRulesApplicationCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceFirewallMulticastForwardingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceFirewallOneToManyNatRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceFirewallOneToManyNatRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceFirewallOneToOneNatRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceFirewallOneToOneNatRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceFirewallPortForwardingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceFirewallPortForwardingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceFirewallSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceFirewallSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdApplianceInterfacesL3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceInterfacesL3InterfaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdApplianceInterfacesL3InterfaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdAppliancePortsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdAppliancePortsPortIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdAppliancePortsPortIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdAppliancePrefixesDelegatedStaticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdAppliancePrefixesDelegatedStaticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getNetworksNetworkIdAppliancePrefixesDelegatedStaticsStaticDelegatedPrefixIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putNetworksNetworkIdAppliancePrefixesDelegatedStaticsStaticDelegatedPrefixIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteNetworksNetworkIdAppliancePrefixesDelegatedStaticsStaticDelegatedPrefixIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getNetworksNetworkIdApplianceRfProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdApplianceRfProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceRfProfilesRfProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdApplianceRfProfilesRfProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceRfProfilesRfProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceSdwanInternetPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceSecurityEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceSecurityHttpsInspectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceSecurityIntrusionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceSecurityIntrusionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceSecurityMalwareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceSecurityMalwareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceSingleLanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceSingleLanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceSsidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceSsidsNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceSsidsNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceStaticRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdApplianceStaticRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceStaticRoutesStaticRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceStaticRoutesStaticRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdApplianceStaticRoutesStaticRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceTrafficShapingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceTrafficShapingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceTrafficShapingCustomPerformanceClassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdApplianceTrafficShapingCustomPerformanceClassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getNetworksNetworkIdApplianceTrafficShapingCustomPerformanceClassesCustomPerformanceClassIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putNetworksNetworkIdApplianceTrafficShapingCustomPerformanceClassesCustomPerformanceClassIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteNetworksNetworkIdApplianceTrafficShapingCustomPerformanceClassesCustomPerformanceClassIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putNetworksNetworkIdApplianceTrafficShapingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceTrafficShapingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceTrafficShapingUplinkBandwidthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceTrafficShapingUplinkBandwidthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceTrafficShapingUplinkSelectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceTrafficShapingUplinkSelectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceTrafficShapingVpnExclusionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdApplianceUmbrellaAccountConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdApplianceUmbrellaAccountDisconnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceUmbrellaDomainsExclusionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdApplianceUmbrellaPoliciesAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdApplianceUmbrellaPoliciesRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceUmbrellaProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceUplinksNatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceUplinksUsageHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceVlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdApplianceVlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceVlansSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceVlansSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceVlansVlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceVlansVlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdApplianceVlansVlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceVpnBgpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceVpnBgpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceVpnSiteToSiteVpnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceVpnSiteToSiteVpnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceWarmSpareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceWarmSpareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdApplianceWarmSpareSwapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdBindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdBluetoothClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdBluetoothClientsBluetoothClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdCameraQualityRetentionProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdCameraQualityRetentionProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getNetworksNetworkIdCameraSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdCameraWirelessProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdCameraWirelessProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdCameraWirelessProfilesWirelessProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdCameraWirelessProfilesWirelessProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdCameraWirelessProfilesWirelessProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdCampusGatewayClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdCampusGatewayClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdCampusGatewayClustersClusterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdCampusGatewaySsidsNumberMdnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdCellularGatewayConnectivityMonitoringDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdCellularGatewayConnectivityMonitoringDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdCellularGatewayDhcpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdCellularGatewayDhcpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdCellularGatewaySubnetPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdCellularGatewaySubnetPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdCellularGatewayUplinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdCellularGatewayUplinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsApplicationUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsBandwidthUsageHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdClientsProvisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsUsageHistoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsClientIdPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdClientsClientIdPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsClientIdSplashAuthorizationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdClientsClientIdSplashAuthorizationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsClientIdTrafficHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsClientIdUsageHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdDevicesClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdDevicesClaimVmxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdDevicesRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdDevicesSyslogServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdEventsEventTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdFirmwareUpgradesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdFirmwareUpgradesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdFirmwareUpgradesRollbacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdFirmwareUpgradesStagedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdFirmwareUpgradesStagedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdFirmwareUpgradesStagedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdFirmwareUpgradesStagedEventsDeferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdFirmwareUpgradesStagedEventsRollbacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdFirmwareUpgradesStagedGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdFirmwareUpgradesStagedGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdFirmwareUpgradesStagedGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdFirmwareUpgradesStagedGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdFirmwareUpgradesStagedGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdFirmwareUpgradesStagedStagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdFirmwareUpgradesStagedStagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdFloorPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdFloorPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdFloorPlansAutoLocateJobsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdFloorPlansAutoLocateJobsJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdFloorPlansAutoLocateJobsJobIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdFloorPlansAutoLocateJobsJobIdRecalculateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdFloorPlansDevicesBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdFloorPlansFloorPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdFloorPlansFloorPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdFloorPlansFloorPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdGroupPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdGroupPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdGroupPoliciesGroupPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdGroupPoliciesGroupPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdGroupPoliciesGroupPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdHealthAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdInsightApplicationsApplicationIdHealthByTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdMerakiAuthUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdMerakiAuthUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdMqttBrokersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdMqttBrokersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdMqttBrokersMqttBrokerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdMqttBrokersMqttBrokerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdMqttBrokersMqttBrokerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdNetflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdNetflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdNetworkHealthChannelUtilizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdPiiPiiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdPiiRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdPiiRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdPiiRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdPiiRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdPiiSmDevicesForKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdPiiSmOwnersForKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdPoliciesByClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSensorAlertsCurrentOverviewByMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSensorAlertsOverviewByMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSensorAlertsProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSensorAlertsProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSensorAlertsProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSensorAlertsProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdSensorAlertsProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSensorMqttBrokersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSensorMqttBrokersMqttBrokerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSensorMqttBrokersMqttBrokerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSensorRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmBypassActivationLockAttemptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmBypassActivationLockAttemptsAttemptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmDevicesCheckinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSmDevicesFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmDevicesLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmDevicesModifyTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmDevicesMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmDevicesRebootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmDevicesShutdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmDevicesWipeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDevicesDeviceIdCellularUsageHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDevicesDeviceIdCertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDevicesDeviceIdConnectivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDevicesDeviceIdDesktopLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDevicesDeviceIdDeviceCommandLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDevicesDeviceIdDeviceProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmDevicesDeviceIdInstallAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDevicesDeviceIdNetworkAdaptersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDevicesDeviceIdPerformanceHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmDevicesDeviceIdRefreshDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDevicesDeviceIdRestrictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDevicesDeviceIdSecurityCentersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDevicesDeviceIdSoftwaresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmDevicesDeviceIdUnenrollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmDevicesDeviceIdUninstallAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDevicesDeviceIdWlanListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmTargetGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmTargetGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmTrustedAccessConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmUserAccessDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdSmUserAccessDevicesUserAccessDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmUsersUserIdDeviceProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmUsersUserIdSoftwaresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSnmpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSnmpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSplashLoginAttemptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSplitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchAccessControlListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchAccessControlListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchAccessPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSwitchAccessPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchAccessPoliciesAccessPolicyNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchAccessPoliciesAccessPolicyNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdSwitchAccessPoliciesAccessPolicyNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchAlternateManagementInterfaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchAlternateManagementInterfaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchDhcpV4ServersSeenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchDhcpServerPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchDhcpServerPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchDhcpServerPolicyArpInspectionTrustedServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSwitchDhcpServerPolicyArpInspectionTrustedServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putNetworksNetworkIdSwitchDhcpServerPolicyArpInspectionTrustedServersTrustedServerIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteNetworksNetworkIdSwitchDhcpServerPolicyArpInspectionTrustedServersTrustedServerIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getNetworksNetworkIdSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchDscpToCosMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchDscpToCosMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchLinkAggregationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSwitchLinkAggregationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchMtuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchMtuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchPortSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSwitchPortSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdSwitchPortSchedulesPortScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchPortSchedulesPortScheduleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchQosRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSwitchQosRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchQosRulesOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchQosRulesOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchQosRulesQosRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdSwitchQosRulesQosRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchQosRulesQosRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchRoutingMulticastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchRoutingMulticastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchRoutingMulticastRendezvousPointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSwitchRoutingMulticastRendezvousPointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getNetworksNetworkIdSwitchRoutingMulticastRendezvousPointsRendezvousPointIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteNetworksNetworkIdSwitchRoutingMulticastRendezvousPointsRendezvousPointIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putNetworksNetworkIdSwitchRoutingMulticastRendezvousPointsRendezvousPointIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getNetworksNetworkIdSwitchRoutingOspfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchRoutingOspfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchStacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSwitchStacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchStacksSwitchStackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchStacksSwitchStackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdSwitchStacksSwitchStackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSwitchStacksSwitchStackIdAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSwitchStacksSwitchStackIdRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesInterfaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesInterfaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesInterfaceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesInterfaceIdDhcpRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesInterfaceIdDhcpRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getNetworksNetworkIdSwitchStacksSwitchStackIdRoutingStaticRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSwitchStacksSwitchStackIdRoutingStaticRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getNetworksNetworkIdSwitchStacksSwitchStackIdRoutingStaticRoutesStaticRouteIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putNetworksNetworkIdSwitchStacksSwitchStackIdRoutingStaticRoutesStaticRouteIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteNetworksNetworkIdSwitchStacksSwitchStackIdRoutingStaticRoutesStaticRouteIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getNetworksNetworkIdSwitchStormControlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchStormControlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchStpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchStpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSyslogServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSyslogServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdTopologyLinkLayerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdTrafficRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdTrafficAnalysisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdTrafficAnalysisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdTrafficShapingApplicationCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdTrafficShapingDscpTaggingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdUnbindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdVlanProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdVlanProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdVlanProfilesAssignmentsByDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdVlanProfilesAssignmentsReassignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdVlanProfilesInameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdVlanProfilesInameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdVlanProfilesInameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWebhooksHttpServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdWebhooksHttpServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWebhooksHttpServersHttpServerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWebhooksHttpServersHttpServerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdWebhooksHttpServersHttpServerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWebhooksPayloadTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdWebhooksPayloadTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWebhooksPayloadTemplatesPayloadTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdWebhooksPayloadTemplatesPayloadTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWebhooksPayloadTemplatesPayloadTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdWebhooksWebhookTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWebhooksWebhookTestsWebhookTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessAirMarshalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdWirelessAirMarshalRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessAirMarshalRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdWirelessAirMarshalRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessAirMarshalSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessAlternateManagementInterfaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessAlternateManagementInterfaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessBillingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessBillingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessBluetoothSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessBluetoothSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessChannelUtilizationHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessClientCountHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessClientsConnectionStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessClientsLatencyStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessClientsClientIdConnectionStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessClientsClientIdConnectivityEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessClientsClientIdLatencyHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessClientsClientIdLatencyStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessConnectionStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessDataRateHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessDevicesConnectionStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessDevicesLatencyStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessElectronicShelfLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessElectronicShelfLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessElectronicShelfLabelConfiguredDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessEthernetPortsProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdWirelessEthernetPortsProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdWirelessEthernetPortsProfilesAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdWirelessEthernetPortsProfilesSetDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessEthernetPortsProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessEthernetPortsProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdWirelessEthernetPortsProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessFailedConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessLatencyHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessLatencyStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessLocationScanningRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessMeshStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessRadioRrmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessRfProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdWirelessRfProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessRfProfilesRfProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdWirelessRfProfilesRfProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessRfProfilesRfProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessSignalQualityHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessSsidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessSsidsOweRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessSsidsNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessSsidsNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessSsidsNumberBonjourForwardingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessSsidsNumberBonjourForwardingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessSsidsNumberDeviceTypeGroupPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessSsidsNumberDeviceTypeGroupPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessSsidsNumberEapOverrideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessSsidsNumberEapOverrideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessSsidsNumberFirewallL3FirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessSsidsNumberFirewallL3FirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessSsidsNumberFirewallL7FirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessSsidsNumberFirewallL7FirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessSsidsNumberHotspot20Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessSsidsNumberHotspot20Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessSsidsNumberIdentityPsksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdWirelessSsidsNumberIdentityPsksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessSsidsNumberIdentityPsksIdentityPskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessSsidsNumberIdentityPsksIdentityPskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdWirelessSsidsNumberIdentityPsksIdentityPskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessSsidsNumberOpenRoamingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessSsidsNumberOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessSsidsNumberOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessSsidsNumberSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessSsidsNumberSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessSsidsNumberSplashSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessSsidsNumberSplashSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessSsidsNumberTrafficShapingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessSsidsNumberTrafficShapingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessSsidsNumberVpnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessSsidsNumberVpnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessUsageHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessZigbeeRoute, (c) => {
    throw new Error('Not implemented')
  })
