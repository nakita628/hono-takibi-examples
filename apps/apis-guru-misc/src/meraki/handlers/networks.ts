import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute,
  deleteNetworksNetworkIdFloorPlansFloorPlanIdRoute,
  deleteNetworksNetworkIdPiiRequestsRequestIdRoute,
  deleteNetworksNetworkIdRoute,
  deleteNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute,
  deleteNetworksNetworkIdStaticRoutesStaticRouteIdRoute,
  deleteNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdRoute,
  deleteNetworksNetworkIdSwitchPortSchedulesPortScheduleIdRoute,
  deleteNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdRoute,
  deleteNetworksNetworkIdSwitchStacksSwitchStackIdRoute,
  deleteNetworksNetworkIdVlansVlanIdRoute,
  deleteNetworksNetworkIdWirelessRfProfilesRfProfileIdRoute,
  getNetworksNetworkIdAccessPoliciesRoute,
  getNetworksNetworkIdAirMarshalRoute,
  getNetworksNetworkIdAlertSettingsRoute,
  getNetworksNetworkIdApplianceFirewallInboundFirewallRulesRoute,
  getNetworksNetworkIdAppliancePortsAppliancePortIdRoute,
  getNetworksNetworkIdAppliancePortsRoute,
  getNetworksNetworkIdBluetoothClientsBluetoothClientIdRoute,
  getNetworksNetworkIdBluetoothClientsRoute,
  getNetworksNetworkIdBluetoothSettingsRoute,
  getNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute,
  getNetworksNetworkIdCameraQualityRetentionProfilesRoute,
  getNetworksNetworkIdCameraSchedulesRoute,
  getNetworksNetworkIdCamerasSerialVideoLinkRoute,
  getNetworksNetworkIdCellularFirewallRulesRoute,
  getNetworksNetworkIdClientsClientIdConnectionStatsRoute,
  getNetworksNetworkIdClientsClientIdEventsRoute,
  getNetworksNetworkIdClientsClientIdLatencyHistoryRoute,
  getNetworksNetworkIdClientsClientIdLatencyStatsRoute,
  getNetworksNetworkIdClientsClientIdPolicyRoute,
  getNetworksNetworkIdClientsClientIdRoute,
  getNetworksNetworkIdClientsClientIdSplashAuthorizationStatusRoute,
  getNetworksNetworkIdClientsClientIdUsageHistoryRoute,
  getNetworksNetworkIdClientsConnectionStatsRoute,
  getNetworksNetworkIdClientsLatencyStatsRoute,
  getNetworksNetworkIdClientsRoute,
  getNetworksNetworkIdConnectionStatsRoute,
  getNetworksNetworkIdContentFilteringCategoriesRoute,
  getNetworksNetworkIdContentFilteringRoute,
  getNetworksNetworkIdDevicesConnectionStatsRoute,
  getNetworksNetworkIdDevicesLatencyStatsRoute,
  getNetworksNetworkIdDevicesRoute,
  getNetworksNetworkIdDevicesSerialConnectionStatsRoute,
  getNetworksNetworkIdDevicesSerialLatencyStatsRoute,
  getNetworksNetworkIdDevicesSerialLossAndLatencyHistoryRoute,
  getNetworksNetworkIdDevicesSerialPerformanceRoute,
  getNetworksNetworkIdDevicesSerialRoute,
  getNetworksNetworkIdDevicesSerialUplinkRoute,
  getNetworksNetworkIdDevicesSerialWirelessStatusRoute,
  getNetworksNetworkIdEventsEventTypesRoute,
  getNetworksNetworkIdEventsRoute,
  getNetworksNetworkIdFailedConnectionsRoute,
  getNetworksNetworkIdFirewalledServicesRoute,
  getNetworksNetworkIdFirewalledServicesServiceRoute,
  getNetworksNetworkIdFloorPlansFloorPlanIdRoute,
  getNetworksNetworkIdFloorPlansRoute,
  getNetworksNetworkIdL3FirewallRulesRoute,
  getNetworksNetworkIdL7FirewallRulesApplicationCategoriesRoute,
  getNetworksNetworkIdL7FirewallRulesRoute,
  getNetworksNetworkIdLatencyStatsRoute,
  getNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdRoute,
  getNetworksNetworkIdMerakiAuthUsersRoute,
  getNetworksNetworkIdOneToManyNatRulesRoute,
  getNetworksNetworkIdOneToOneNatRulesRoute,
  getNetworksNetworkIdPiiPiiKeysRoute,
  getNetworksNetworkIdPiiRequestsRequestIdRoute,
  getNetworksNetworkIdPiiRequestsRoute,
  getNetworksNetworkIdPiiSmDevicesForKeyRoute,
  getNetworksNetworkIdPiiSmOwnersForKeyRoute,
  getNetworksNetworkIdPortForwardingRulesRoute,
  getNetworksNetworkIdRoute,
  getNetworksNetworkIdSecurityEventsRoute,
  getNetworksNetworkIdSecurityIntrusionSettingsRoute,
  getNetworksNetworkIdSecurityMalwareSettingsRoute,
  getNetworksNetworkIdSiteToSiteVpnRoute,
  getNetworksNetworkIdSmBypassActivationLockAttemptsAttemptIdRoute,
  getNetworksNetworkIdSmDeviceIdCellularUsageHistoryRoute,
  getNetworksNetworkIdSmDeviceIdCertsRoute,
  getNetworksNetworkIdSmDeviceIdDeviceProfilesRoute,
  getNetworksNetworkIdSmDeviceIdNetworkAdaptersRoute,
  getNetworksNetworkIdSmDeviceIdRestrictionsRoute,
  getNetworksNetworkIdSmDeviceIdSecurityCentersRoute,
  getNetworksNetworkIdSmDeviceIdSoftwaresRoute,
  getNetworksNetworkIdSmDeviceIdWlanListsRoute,
  getNetworksNetworkIdSmDevicesRoute,
  getNetworksNetworkIdSmIdConnectivityRoute,
  getNetworksNetworkIdSmIdDesktopLogsRoute,
  getNetworksNetworkIdSmIdDeviceCommandLogsRoute,
  getNetworksNetworkIdSmIdPerformanceHistoryRoute,
  getNetworksNetworkIdSmProfilesRoute,
  getNetworksNetworkIdSmTargetGroupsRoute,
  getNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute,
  getNetworksNetworkIdSmUsersRoute,
  getNetworksNetworkIdSmUserUserIdDeviceProfilesRoute,
  getNetworksNetworkIdSmUserUserIdSoftwaresRoute,
  getNetworksNetworkIdSnmpSettingsRoute,
  getNetworksNetworkIdSplashLoginAttemptsRoute,
  getNetworksNetworkIdSsidsNumberL3FirewallRulesRoute,
  getNetworksNetworkIdSsidsNumberRoute,
  getNetworksNetworkIdSsidsNumberSplashSettingsRoute,
  getNetworksNetworkIdSsidsRoute,
  getNetworksNetworkIdStaticRoutesRoute,
  getNetworksNetworkIdStaticRoutesStaticRouteIdRoute,
  getNetworksNetworkIdSwitchLinkAggregationsRoute,
  getNetworksNetworkIdSwitchPortSchedulesRoute,
  getNetworksNetworkIdSwitchSettingsMtuRoute,
  getNetworksNetworkIdSwitchSettingsMulticastRoute,
  getNetworksNetworkIdSwitchSettingsQosRulesOrderRoute,
  getNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdRoute,
  getNetworksNetworkIdSwitchSettingsQosRulesRoute,
  getNetworksNetworkIdSwitchSettingsRoute,
  getNetworksNetworkIdSwitchSettingsStormControlRoute,
  getNetworksNetworkIdSwitchStacksRoute,
  getNetworksNetworkIdSwitchStacksSwitchStackIdRoute,
  getNetworksNetworkIdSyslogServersRoute,
  getNetworksNetworkIdTrafficRoute,
  getNetworksNetworkIdUplinkSettingsRoute,
  getNetworksNetworkIdVlansEnabledStateRoute,
  getNetworksNetworkIdVlansRoute,
  getNetworksNetworkIdVlansVlanIdRoute,
  getNetworksNetworkIdWarmSpareSettingsRoute,
  getNetworksNetworkIdWirelessRfProfilesRfProfileIdRoute,
  getNetworksNetworkIdWirelessRfProfilesRoute,
  getNetworksNetworkIdWirelessSettingsRoute,
  postNetworksNetworkIdBindRoute,
  postNetworksNetworkIdCameraQualityRetentionProfilesRoute,
  postNetworksNetworkIdCamerasSerialSnapshotRoute,
  postNetworksNetworkIdClientsProvisionRoute,
  postNetworksNetworkIdDevicesClaimRoute,
  postNetworksNetworkIdDevicesSerialRebootRoute,
  postNetworksNetworkIdDevicesSerialRemoveRoute,
  postNetworksNetworkIdFloorPlansRoute,
  postNetworksNetworkIdPiiRequestsRoute,
  postNetworksNetworkIdSmBypassActivationLockAttemptsRoute,
  postNetworksNetworkIdSmDeviceDeviceIdRefreshDetailsRoute,
  postNetworksNetworkIdSmDevicesDeviceIdUnenrollRoute,
  postNetworksNetworkIdSmTargetGroupsRoute,
  postNetworksNetworkIdSplitRoute,
  postNetworksNetworkIdStaticRoutesRoute,
  postNetworksNetworkIdSwapWarmSpareRoute,
  postNetworksNetworkIdSwitchLinkAggregationsRoute,
  postNetworksNetworkIdSwitchPortSchedulesRoute,
  postNetworksNetworkIdSwitchSettingsQosRulesRoute,
  postNetworksNetworkIdSwitchStacksRoute,
  postNetworksNetworkIdSwitchStacksSwitchStackIdAddRoute,
  postNetworksNetworkIdSwitchStacksSwitchStackIdRemoveRoute,
  postNetworksNetworkIdUnbindRoute,
  postNetworksNetworkIdVlansRoute,
  postNetworksNetworkIdWirelessRfProfilesRoute,
  putNetworksNetworkIdAlertSettingsRoute,
  putNetworksNetworkIdApplianceFirewallInboundFirewallRulesRoute,
  putNetworksNetworkIdAppliancePortsAppliancePortIdRoute,
  putNetworksNetworkIdBluetoothSettingsRoute,
  putNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute,
  putNetworksNetworkIdCellularFirewallRulesRoute,
  putNetworksNetworkIdClientsClientIdPolicyRoute,
  putNetworksNetworkIdClientsClientIdSplashAuthorizationStatusRoute,
  putNetworksNetworkIdContentFilteringRoute,
  putNetworksNetworkIdDevicesSerialRoute,
  putNetworksNetworkIdFirewalledServicesServiceRoute,
  putNetworksNetworkIdFloorPlansFloorPlanIdRoute,
  putNetworksNetworkIdL3FirewallRulesRoute,
  putNetworksNetworkIdL7FirewallRulesRoute,
  putNetworksNetworkIdOneToManyNatRulesRoute,
  putNetworksNetworkIdOneToOneNatRulesRoute,
  putNetworksNetworkIdPortForwardingRulesRoute,
  putNetworksNetworkIdRoute,
  putNetworksNetworkIdSecurityIntrusionSettingsRoute,
  putNetworksNetworkIdSecurityMalwareSettingsRoute,
  putNetworksNetworkIdSiteToSiteVpnRoute,
  putNetworksNetworkIdSmDeviceFieldsRoute,
  putNetworksNetworkIdSmDevicesCheckinRoute,
  putNetworksNetworkIdSmDevicesLockRoute,
  putNetworksNetworkIdSmDevicesTagsRoute,
  putNetworksNetworkIdSmDeviceWipeRoute,
  putNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute,
  putNetworksNetworkIdSsidsNumberL3FirewallRulesRoute,
  putNetworksNetworkIdSsidsNumberRoute,
  putNetworksNetworkIdSsidsNumberSplashSettingsRoute,
  putNetworksNetworkIdStaticRoutesStaticRouteIdRoute,
  putNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdRoute,
  putNetworksNetworkIdSwitchPortSchedulesPortScheduleIdRoute,
  putNetworksNetworkIdSwitchSettingsMtuRoute,
  putNetworksNetworkIdSwitchSettingsMulticastRoute,
  putNetworksNetworkIdSwitchSettingsQosRulesOrderRoute,
  putNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdRoute,
  putNetworksNetworkIdSwitchSettingsRoute,
  putNetworksNetworkIdSwitchSettingsStormControlRoute,
  putNetworksNetworkIdSyslogServersRoute,
  putNetworksNetworkIdUplinkSettingsRoute,
  putNetworksNetworkIdVlansEnabledStateRoute,
  putNetworksNetworkIdVlansVlanIdRoute,
  putNetworksNetworkIdWarmSpareSettingsRoute,
  putNetworksNetworkIdWirelessRfProfilesRfProfileIdRoute,
  putNetworksNetworkIdWirelessSettingsRoute,
} from '../routes'

export const deleteNetworksNetworkIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

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

export const getNetworksNetworkIdAccessPoliciesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdAccessPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdAirMarshalRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdAirMarshalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdAlertSettingsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdAlertSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdAlertSettingsRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdAlertSettingsRoute
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

export const getNetworksNetworkIdAppliancePortsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdAppliancePortsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdAppliancePortsAppliancePortIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdAppliancePortsAppliancePortIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdAppliancePortsAppliancePortIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdAppliancePortsAppliancePortIdRoute
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

export const getNetworksNetworkIdBluetoothSettingsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdBluetoothSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdBluetoothSettingsRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdBluetoothSettingsRoute
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

export const deleteNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute
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

export const getNetworksNetworkIdCameraSchedulesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdCameraSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdCamerasSerialSnapshotRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdCamerasSerialSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdCamerasSerialVideoLinkRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdCamerasSerialVideoLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdCellularFirewallRulesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdCellularFirewallRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdCellularFirewallRulesRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdCellularFirewallRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdClientsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdClientsConnectionStatsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdClientsConnectionStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdClientsLatencyStatsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdClientsLatencyStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdClientsProvisionRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdClientsProvisionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdClientsClientIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdClientsClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdClientsClientIdConnectionStatsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdClientsClientIdConnectionStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdClientsClientIdEventsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdClientsClientIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdClientsClientIdLatencyHistoryRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdClientsClientIdLatencyHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdClientsClientIdLatencyStatsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdClientsClientIdLatencyStatsRoute
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

export const getNetworksNetworkIdClientsClientIdUsageHistoryRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdClientsClientIdUsageHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdConnectionStatsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdConnectionStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdContentFilteringRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdContentFilteringRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdContentFilteringRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdContentFilteringRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdContentFilteringCategoriesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdContentFilteringCategoriesRoute
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

export const getNetworksNetworkIdDevicesConnectionStatsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdDevicesConnectionStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdDevicesLatencyStatsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdDevicesLatencyStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdDevicesSerialRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdDevicesSerialRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdDevicesSerialRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdDevicesSerialRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdDevicesSerialConnectionStatsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdDevicesSerialConnectionStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdDevicesSerialLatencyStatsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdDevicesSerialLatencyStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdDevicesSerialLossAndLatencyHistoryRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdDevicesSerialLossAndLatencyHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdDevicesSerialPerformanceRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdDevicesSerialPerformanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdDevicesSerialRebootRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdDevicesSerialRebootRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdDevicesSerialRemoveRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdDevicesSerialRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdDevicesSerialUplinkRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdDevicesSerialUplinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdDevicesSerialWirelessStatusRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdDevicesSerialWirelessStatusRoute
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

export const getNetworksNetworkIdFailedConnectionsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdFailedConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdFirewalledServicesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdFirewalledServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdFirewalledServicesServiceRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdFirewalledServicesServiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdFirewalledServicesServiceRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdFirewalledServicesServiceRoute
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

export const deleteNetworksNetworkIdFloorPlansFloorPlanIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdFloorPlansFloorPlanIdRoute
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

export const getNetworksNetworkIdL3FirewallRulesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdL3FirewallRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdL3FirewallRulesRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdL3FirewallRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdL7FirewallRulesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdL7FirewallRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdL7FirewallRulesRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdL7FirewallRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdL7FirewallRulesApplicationCategoriesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdL7FirewallRulesApplicationCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdLatencyStatsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdLatencyStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdMerakiAuthUsersRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdMerakiAuthUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdOneToManyNatRulesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdOneToManyNatRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdOneToManyNatRulesRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdOneToManyNatRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdOneToOneNatRulesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdOneToOneNatRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdOneToOneNatRulesRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdOneToOneNatRulesRoute
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

export const deleteNetworksNetworkIdPiiRequestsRequestIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdPiiRequestsRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdPiiRequestsRequestIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdPiiRequestsRequestIdRoute
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

export const getNetworksNetworkIdPortForwardingRulesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdPortForwardingRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdPortForwardingRulesRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdPortForwardingRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSecurityIntrusionSettingsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSecurityIntrusionSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSecurityIntrusionSettingsRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSecurityIntrusionSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSecurityMalwareSettingsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSecurityMalwareSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSecurityMalwareSettingsRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSecurityMalwareSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSecurityEventsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSecurityEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSiteToSiteVpnRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSiteToSiteVpnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSiteToSiteVpnRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSiteToSiteVpnRoute
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

export const putNetworksNetworkIdSmDeviceFieldsRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSmDeviceFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSmDeviceWipeRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSmDeviceWipeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSmDeviceDeviceIdRefreshDetailsRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSmDeviceDeviceIdRefreshDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmDevicesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSmDevicesCheckinRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSmDevicesCheckinRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSmDevicesTagsRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSmDevicesTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSmDevicesDeviceIdUnenrollRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSmDevicesDeviceIdUnenrollRoute
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

export const deleteNetworksNetworkIdSmTargetGroupsTargetGroupIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute
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

export const getNetworksNetworkIdSmUserUserIdDeviceProfilesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmUserUserIdDeviceProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmUserUserIdSoftwaresRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmUserUserIdSoftwaresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmUsersRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmDeviceIdCellularUsageHistoryRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmDeviceIdCellularUsageHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmDeviceIdCertsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmDeviceIdCertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmDeviceIdDeviceProfilesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmDeviceIdDeviceProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmDeviceIdNetworkAdaptersRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmDeviceIdNetworkAdaptersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmDeviceIdRestrictionsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmDeviceIdRestrictionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmDeviceIdSecurityCentersRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmDeviceIdSecurityCentersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmDeviceIdSoftwaresRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmDeviceIdSoftwaresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmDeviceIdWlanListsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmDeviceIdWlanListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSnmpSettingsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSnmpSettingsRoute
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

export const getNetworksNetworkIdSsidsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSsidsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSsidsNumberRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSsidsNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSsidsNumberRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSsidsNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSsidsNumberL3FirewallRulesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSsidsNumberL3FirewallRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSsidsNumberL3FirewallRulesRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSsidsNumberL3FirewallRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSsidsNumberSplashSettingsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSsidsNumberSplashSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSsidsNumberSplashSettingsRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSsidsNumberSplashSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdStaticRoutesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdStaticRoutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdStaticRoutesRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdStaticRoutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdStaticRoutesStaticRouteIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdStaticRoutesStaticRouteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdStaticRoutesStaticRouteIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdStaticRoutesStaticRouteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdStaticRoutesStaticRouteIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdStaticRoutesStaticRouteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSwapWarmSpareRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSwapWarmSpareRoute
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

export const deleteNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdRoute
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

export const getNetworksNetworkIdSwitchSettingsMtuRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchSettingsMtuRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSwitchSettingsMtuRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSwitchSettingsMtuRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchSettingsMulticastRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchSettingsMulticastRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSwitchSettingsMulticastRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSwitchSettingsMulticastRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchSettingsQosRulesRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchSettingsQosRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdSwitchSettingsQosRulesRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdSwitchSettingsQosRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchSettingsQosRulesOrderRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchSettingsQosRulesOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSwitchSettingsQosRulesOrderRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSwitchSettingsQosRulesOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchSettingsStormControlRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchSettingsStormControlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdSwitchSettingsStormControlRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSwitchSettingsStormControlRoute
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

export const deleteNetworksNetworkIdSwitchStacksSwitchStackIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdSwitchStacksSwitchStackIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSwitchStacksSwitchStackIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSwitchStacksSwitchStackIdRoute
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

export const getNetworksNetworkIdTrafficRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdTrafficRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdUnbindRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdUnbindRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdUplinkSettingsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdUplinkSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdUplinkSettingsRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdUplinkSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdVlansRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdVlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNetworksNetworkIdVlansRouteHandler: RouteHandler<
  typeof postNetworksNetworkIdVlansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteNetworksNetworkIdVlansVlanIdRouteHandler: RouteHandler<
  typeof deleteNetworksNetworkIdVlansVlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdVlansVlanIdRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdVlansVlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdVlansVlanIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdVlansVlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdVlansEnabledStateRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdVlansEnabledStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdVlansEnabledStateRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdVlansEnabledStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdWarmSpareSettingsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdWarmSpareSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putNetworksNetworkIdWarmSpareSettingsRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWarmSpareSettingsRoute
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

export const putNetworksNetworkIdWirelessRfProfilesRfProfileIdRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdWirelessRfProfilesRfProfileIdRoute
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

export const putNetworksNetworkIdSmDevicesLockRouteHandler: RouteHandler<
  typeof putNetworksNetworkIdSmDevicesLockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmIdConnectivityRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmIdConnectivityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmIdDesktopLogsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmIdDesktopLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmIdDeviceCommandLogsRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmIdDeviceCommandLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksNetworkIdSmIdPerformanceHistoryRouteHandler: RouteHandler<
  typeof getNetworksNetworkIdSmIdPerformanceHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
