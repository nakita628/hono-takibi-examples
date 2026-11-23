import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const networksHandler = app
  .openapi(deleteNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdAccessPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdAirMarshalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdAlertSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdAlertSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdApplianceFirewallInboundFirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdApplianceFirewallInboundFirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdAppliancePortsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdAppliancePortsAppliancePortIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdAppliancePortsAppliancePortIdRoute, (c) => {
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
  .openapi(getNetworksNetworkIdBluetoothSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdBluetoothSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdCameraQualityRetentionProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdCameraQualityRetentionProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteNetworksNetworkIdCameraQualityRetentionProfilesQualityRetentionProfileIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
  .openapi(getNetworksNetworkIdCameraSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdCamerasSerialSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdCamerasSerialVideoLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdCellularFirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdCellularFirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsConnectionStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsLatencyStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdClientsProvisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsClientIdConnectionStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsClientIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsClientIdLatencyHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdClientsClientIdLatencyStatsRoute, (c) => {
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
  .openapi(getNetworksNetworkIdClientsClientIdUsageHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdConnectionStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdContentFilteringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdContentFilteringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdContentFilteringCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdDevicesClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdDevicesConnectionStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdDevicesLatencyStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdDevicesSerialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdDevicesSerialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdDevicesSerialConnectionStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdDevicesSerialLatencyStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdDevicesSerialLossAndLatencyHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdDevicesSerialPerformanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdDevicesSerialRebootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdDevicesSerialRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdDevicesSerialUplinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdDevicesSerialWirelessStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdEventsEventTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdFailedConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdFirewalledServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdFirewalledServicesServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdFirewalledServicesServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdFloorPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdFloorPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdFloorPlansFloorPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdFloorPlansFloorPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdFloorPlansFloorPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdL3FirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdL3FirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdL7FirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdL7FirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdL7FirewallRulesApplicationCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdLatencyStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdMerakiAuthUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdMerakiAuthUsersMerakiAuthUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdOneToManyNatRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdOneToManyNatRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdOneToOneNatRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdOneToOneNatRulesRoute, (c) => {
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
  .openapi(deleteNetworksNetworkIdPiiRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdPiiRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdPiiSmDevicesForKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdPiiSmOwnersForKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdPortForwardingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdPortForwardingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSecurityIntrusionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSecurityIntrusionSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSecurityMalwareSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSecurityMalwareSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSecurityEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSiteToSiteVpnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSiteToSiteVpnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmBypassActivationLockAttemptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmBypassActivationLockAttemptsAttemptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSmDeviceFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSmDeviceWipeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmDeviceDeviceIdRefreshDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSmDevicesCheckinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSmDevicesTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSmDevicesDeviceIdUnenrollRoute, (c) => {
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
  .openapi(deleteNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSmTargetGroupsTargetGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmUserUserIdDeviceProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmUserUserIdSoftwaresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDeviceIdCellularUsageHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDeviceIdCertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDeviceIdDeviceProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDeviceIdNetworkAdaptersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDeviceIdRestrictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDeviceIdSecurityCentersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDeviceIdSoftwaresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmDeviceIdWlanListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSnmpSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSplashLoginAttemptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSplitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSsidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSsidsNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSsidsNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSsidsNumberL3FirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSsidsNumberL3FirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSsidsNumberSplashSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSsidsNumberSplashSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdStaticRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdStaticRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdStaticRoutesStaticRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdStaticRoutesStaticRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdStaticRoutesStaticRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSwapWarmSpareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchLinkAggregationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSwitchLinkAggregationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdRoute, (c) => {
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
  .openapi(getNetworksNetworkIdSwitchSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchSettingsMtuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchSettingsMtuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchSettingsMulticastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchSettingsMulticastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchSettingsQosRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSwitchSettingsQosRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchSettingsQosRulesOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchSettingsQosRulesOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchSettingsQosRulesQosRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchSettingsStormControlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSwitchSettingsStormControlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchStacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSwitchStacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdSwitchStacksSwitchStackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSwitchStacksSwitchStackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSwitchStacksSwitchStackIdAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdSwitchStacksSwitchStackIdRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSyslogServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSyslogServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdTrafficRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdUnbindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdUplinkSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdUplinkSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdVlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdVlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdVlansVlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdVlansVlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdVlansVlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdVlansEnabledStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdVlansEnabledStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWarmSpareSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWarmSpareSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessRfProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNetworksNetworkIdWirelessRfProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNetworksNetworkIdWirelessRfProfilesRfProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessRfProfilesRfProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessRfProfilesRfProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdWirelessSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdWirelessSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNetworksNetworkIdSmDevicesLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmIdConnectivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmIdDesktopLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmIdDeviceCommandLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworksNetworkIdSmIdPerformanceHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
