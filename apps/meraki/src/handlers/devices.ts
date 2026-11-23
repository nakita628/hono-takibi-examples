import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDevicesSerialSwitchRoutingInterfacesInterfaceIdRoute,
  deleteDevicesSerialSwitchRoutingStaticRoutesStaticRouteIdRoute,
  getDevicesSerialApplianceDhcpSubnetsRoute,
  getDevicesSerialAppliancePerformanceRoute,
  getDevicesSerialAppliancePrefixesDelegatedRoute,
  getDevicesSerialAppliancePrefixesDelegatedVlanAssignmentsRoute,
  getDevicesSerialApplianceRadioSettingsRoute,
  getDevicesSerialApplianceUplinksSettingsRoute,
  getDevicesSerialCameraAnalyticsLiveRoute,
  getDevicesSerialCameraAnalyticsOverviewRoute,
  getDevicesSerialCameraAnalyticsRecentRoute,
  getDevicesSerialCameraAnalyticsZonesRoute,
  getDevicesSerialCameraAnalyticsZonesZoneIdHistoryRoute,
  getDevicesSerialCameraClipRoute,
  getDevicesSerialCameraCustomAnalyticsRoute,
  getDevicesSerialCameraQualityAndRetentionRoute,
  getDevicesSerialCameraSenseObjectDetectionModelsRoute,
  getDevicesSerialCameraSenseRoute,
  getDevicesSerialCameraVideoLinkRoute,
  getDevicesSerialCameraVideoSettingsRoute,
  getDevicesSerialCameraWirelessProfilesRoute,
  getDevicesSerialCellularGatewayLanRoute,
  getDevicesSerialCellularGatewayPortForwardingRulesRoute,
  getDevicesSerialCellularSimsRoute,
  getDevicesSerialClientsRoute,
  getDevicesSerialLiveToolsArpTableArpTableIdRoute,
  getDevicesSerialLiveToolsCableTestIdRoute,
  getDevicesSerialLiveToolsLedsBlinkLedsBlinkIdRoute,
  getDevicesSerialLiveToolsMacTableMacTableIdRoute,
  getDevicesSerialLiveToolsMulticastRoutingMulticastRoutingIdRoute,
  getDevicesSerialLiveToolsPingDeviceIdRoute,
  getDevicesSerialLiveToolsPingIdRoute,
  getDevicesSerialLiveToolsPortsCycleIdRoute,
  getDevicesSerialLiveToolsPortsStatusJobIdRoute,
  getDevicesSerialLiveToolsPowerUsageJobIdRoute,
  getDevicesSerialLiveToolsRouteDetailsJobIdRoute,
  getDevicesSerialLiveToolsRoutingTableLookupsIdRoute,
  getDevicesSerialLiveToolsRoutingTableSummariesIdRoute,
  getDevicesSerialLiveToolsThroughputTestThroughputTestIdRoute,
  getDevicesSerialLiveToolsWakeOnLanWakeOnLanIdRoute,
  getDevicesSerialLldpCdpRoute,
  getDevicesSerialLossAndLatencyHistoryRoute,
  getDevicesSerialManagementInterfaceRoute,
  getDevicesSerialRoute,
  getDevicesSerialSensorCommandsCommandIdRoute,
  getDevicesSerialSensorCommandsRoute,
  getDevicesSerialSensorRelationshipsRoute,
  getDevicesSerialSwitchPortsPortIdRoute,
  getDevicesSerialSwitchPortsRoute,
  getDevicesSerialSwitchPortsStatusesPacketsRoute,
  getDevicesSerialSwitchPortsStatusesRoute,
  getDevicesSerialSwitchRoutingInterfacesInterfaceIdDhcpRoute,
  getDevicesSerialSwitchRoutingInterfacesInterfaceIdRoute,
  getDevicesSerialSwitchRoutingInterfacesRoute,
  getDevicesSerialSwitchRoutingStaticRoutesRoute,
  getDevicesSerialSwitchRoutingStaticRoutesStaticRouteIdRoute,
  getDevicesSerialSwitchWarmSpareRoute,
  getDevicesSerialWirelessBluetoothSettingsRoute,
  getDevicesSerialWirelessConnectionStatsRoute,
  getDevicesSerialWirelessElectronicShelfLabelRoute,
  getDevicesSerialWirelessLatencyStatsRoute,
  getDevicesSerialWirelessRadioOverridesRoute,
  getDevicesSerialWirelessRadioSettingsRoute,
  getDevicesSerialWirelessStatusRoute,
  getDevicesSerialWirelessZigbeeEnrollmentsEnrollmentIdRoute,
  postDevicesSerialApplianceInterfacesPortsUpdateRoute,
  postDevicesSerialApplianceVmxAuthenticationTokenRoute,
  postDevicesSerialBlinkLedsRoute,
  postDevicesSerialCameraGenerateSnapshotRoute,
  postDevicesSerialCellularUplinksBandsMasksUpdateRoute,
  postDevicesSerialCertificatesCertificateSerialRevokeRoute,
  postDevicesSerialLiveToolsArpTableRoute,
  postDevicesSerialLiveToolsCableTestRoute,
  postDevicesSerialLiveToolsLedsBlinkRoute,
  postDevicesSerialLiveToolsMacTableRoute,
  postDevicesSerialLiveToolsMulticastRoutingRoute,
  postDevicesSerialLiveToolsPingDeviceRoute,
  postDevicesSerialLiveToolsPingRoute,
  postDevicesSerialLiveToolsPortsCycleRoute,
  postDevicesSerialLiveToolsPortsStatusRoute,
  postDevicesSerialLiveToolsPowerUsageRoute,
  postDevicesSerialLiveToolsRouteDetailsRoute,
  postDevicesSerialLiveToolsRoutingTableLookupsRoute,
  postDevicesSerialLiveToolsRoutingTableSummariesRoute,
  postDevicesSerialLiveToolsThroughputTestRoute,
  postDevicesSerialLiveToolsWakeOnLanRoute,
  postDevicesSerialRebootRoute,
  postDevicesSerialSensorCommandsRoute,
  postDevicesSerialSwitchPortsCycleRoute,
  postDevicesSerialSwitchRoutingInterfacesRoute,
  postDevicesSerialSwitchRoutingStaticRoutesRoute,
  postDevicesSerialWirelessZigbeeEnrollmentsRoute,
  putDevicesSerialApplianceInterfacesPortsNumberRoute,
  putDevicesSerialApplianceRadioSettingsRoute,
  putDevicesSerialApplianceUplinksSettingsRoute,
  putDevicesSerialCameraCustomAnalyticsRoute,
  putDevicesSerialCameraQualityAndRetentionRoute,
  putDevicesSerialCameraSenseRoute,
  putDevicesSerialCameraVideoSettingsRoute,
  putDevicesSerialCameraWirelessProfilesRoute,
  putDevicesSerialCellularGatewayLanRoute,
  putDevicesSerialCellularGatewayPortForwardingRulesRoute,
  putDevicesSerialCellularGeolocationsRoute,
  putDevicesSerialCellularSimsRoute,
  putDevicesSerialManagementInterfaceRoute,
  putDevicesSerialRoute,
  putDevicesSerialSensorRelationshipsRoute,
  putDevicesSerialSwitchPortsPortIdRoute,
  putDevicesSerialSwitchRoutingInterfacesInterfaceIdDhcpRoute,
  putDevicesSerialSwitchRoutingInterfacesInterfaceIdRoute,
  putDevicesSerialSwitchRoutingStaticRoutesStaticRouteIdRoute,
  putDevicesSerialSwitchWarmSpareRoute,
  putDevicesSerialWirelessAlternateManagementInterfaceIpv6Route,
  putDevicesSerialWirelessBluetoothSettingsRoute,
  putDevicesSerialWirelessElectronicShelfLabelRoute,
  putDevicesSerialWirelessRadioOverridesRoute,
  putDevicesSerialWirelessRadioSettingsRoute,
} from '../routes'

export const getDevicesSerialRouteHandler: RouteHandler<typeof getDevicesSerialRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putDevicesSerialRouteHandler: RouteHandler<typeof putDevicesSerialRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialApplianceDhcpSubnetsRouteHandler: RouteHandler<
  typeof getDevicesSerialApplianceDhcpSubnetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesSerialApplianceInterfacesPortsUpdateRouteHandler: RouteHandler<
  typeof postDevicesSerialApplianceInterfacesPortsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesSerialApplianceInterfacesPortsNumberRouteHandler: RouteHandler<
  typeof putDevicesSerialApplianceInterfacesPortsNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialAppliancePerformanceRouteHandler: RouteHandler<
  typeof getDevicesSerialAppliancePerformanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialAppliancePrefixesDelegatedRouteHandler: RouteHandler<
  typeof getDevicesSerialAppliancePrefixesDelegatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialAppliancePrefixesDelegatedVlanAssignmentsRouteHandler: RouteHandler<
  typeof getDevicesSerialAppliancePrefixesDelegatedVlanAssignmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialApplianceRadioSettingsRouteHandler: RouteHandler<
  typeof getDevicesSerialApplianceRadioSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesSerialApplianceRadioSettingsRouteHandler: RouteHandler<
  typeof putDevicesSerialApplianceRadioSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialApplianceUplinksSettingsRouteHandler: RouteHandler<
  typeof getDevicesSerialApplianceUplinksSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesSerialApplianceUplinksSettingsRouteHandler: RouteHandler<
  typeof putDevicesSerialApplianceUplinksSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesSerialApplianceVmxAuthenticationTokenRouteHandler: RouteHandler<
  typeof postDevicesSerialApplianceVmxAuthenticationTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesSerialBlinkLedsRouteHandler: RouteHandler<
  typeof postDevicesSerialBlinkLedsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialCameraAnalyticsLiveRouteHandler: RouteHandler<
  typeof getDevicesSerialCameraAnalyticsLiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialCameraAnalyticsOverviewRouteHandler: RouteHandler<
  typeof getDevicesSerialCameraAnalyticsOverviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialCameraAnalyticsRecentRouteHandler: RouteHandler<
  typeof getDevicesSerialCameraAnalyticsRecentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialCameraAnalyticsZonesRouteHandler: RouteHandler<
  typeof getDevicesSerialCameraAnalyticsZonesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialCameraAnalyticsZonesZoneIdHistoryRouteHandler: RouteHandler<
  typeof getDevicesSerialCameraAnalyticsZonesZoneIdHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialCameraClipRouteHandler: RouteHandler<
  typeof getDevicesSerialCameraClipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialCameraCustomAnalyticsRouteHandler: RouteHandler<
  typeof getDevicesSerialCameraCustomAnalyticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesSerialCameraCustomAnalyticsRouteHandler: RouteHandler<
  typeof putDevicesSerialCameraCustomAnalyticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesSerialCameraGenerateSnapshotRouteHandler: RouteHandler<
  typeof postDevicesSerialCameraGenerateSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialCameraQualityAndRetentionRouteHandler: RouteHandler<
  typeof getDevicesSerialCameraQualityAndRetentionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesSerialCameraQualityAndRetentionRouteHandler: RouteHandler<
  typeof putDevicesSerialCameraQualityAndRetentionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialCameraSenseRouteHandler: RouteHandler<
  typeof getDevicesSerialCameraSenseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesSerialCameraSenseRouteHandler: RouteHandler<
  typeof putDevicesSerialCameraSenseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialCameraSenseObjectDetectionModelsRouteHandler: RouteHandler<
  typeof getDevicesSerialCameraSenseObjectDetectionModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialCameraVideoSettingsRouteHandler: RouteHandler<
  typeof getDevicesSerialCameraVideoSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesSerialCameraVideoSettingsRouteHandler: RouteHandler<
  typeof putDevicesSerialCameraVideoSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialCameraVideoLinkRouteHandler: RouteHandler<
  typeof getDevicesSerialCameraVideoLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialCameraWirelessProfilesRouteHandler: RouteHandler<
  typeof getDevicesSerialCameraWirelessProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesSerialCameraWirelessProfilesRouteHandler: RouteHandler<
  typeof putDevicesSerialCameraWirelessProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesSerialCellularGeolocationsRouteHandler: RouteHandler<
  typeof putDevicesSerialCellularGeolocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialCellularSimsRouteHandler: RouteHandler<
  typeof getDevicesSerialCellularSimsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesSerialCellularSimsRouteHandler: RouteHandler<
  typeof putDevicesSerialCellularSimsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesSerialCellularUplinksBandsMasksUpdateRouteHandler: RouteHandler<
  typeof postDevicesSerialCellularUplinksBandsMasksUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialCellularGatewayLanRouteHandler: RouteHandler<
  typeof getDevicesSerialCellularGatewayLanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesSerialCellularGatewayLanRouteHandler: RouteHandler<
  typeof putDevicesSerialCellularGatewayLanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialCellularGatewayPortForwardingRulesRouteHandler: RouteHandler<
  typeof getDevicesSerialCellularGatewayPortForwardingRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesSerialCellularGatewayPortForwardingRulesRouteHandler: RouteHandler<
  typeof putDevicesSerialCellularGatewayPortForwardingRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesSerialCertificatesCertificateSerialRevokeRouteHandler: RouteHandler<
  typeof postDevicesSerialCertificatesCertificateSerialRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialClientsRouteHandler: RouteHandler<
  typeof getDevicesSerialClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesSerialLiveToolsArpTableRouteHandler: RouteHandler<
  typeof postDevicesSerialLiveToolsArpTableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialLiveToolsArpTableArpTableIdRouteHandler: RouteHandler<
  typeof getDevicesSerialLiveToolsArpTableArpTableIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesSerialLiveToolsCableTestRouteHandler: RouteHandler<
  typeof postDevicesSerialLiveToolsCableTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialLiveToolsCableTestIdRouteHandler: RouteHandler<
  typeof getDevicesSerialLiveToolsCableTestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesSerialLiveToolsLedsBlinkRouteHandler: RouteHandler<
  typeof postDevicesSerialLiveToolsLedsBlinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialLiveToolsLedsBlinkLedsBlinkIdRouteHandler: RouteHandler<
  typeof getDevicesSerialLiveToolsLedsBlinkLedsBlinkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesSerialLiveToolsMacTableRouteHandler: RouteHandler<
  typeof postDevicesSerialLiveToolsMacTableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialLiveToolsMacTableMacTableIdRouteHandler: RouteHandler<
  typeof getDevicesSerialLiveToolsMacTableMacTableIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesSerialLiveToolsMulticastRoutingRouteHandler: RouteHandler<
  typeof postDevicesSerialLiveToolsMulticastRoutingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialLiveToolsMulticastRoutingMulticastRoutingIdRouteHandler: RouteHandler<
  typeof getDevicesSerialLiveToolsMulticastRoutingMulticastRoutingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesSerialLiveToolsPingRouteHandler: RouteHandler<
  typeof postDevicesSerialLiveToolsPingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialLiveToolsPingIdRouteHandler: RouteHandler<
  typeof getDevicesSerialLiveToolsPingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesSerialLiveToolsPingDeviceRouteHandler: RouteHandler<
  typeof postDevicesSerialLiveToolsPingDeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialLiveToolsPingDeviceIdRouteHandler: RouteHandler<
  typeof getDevicesSerialLiveToolsPingDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesSerialLiveToolsPortsCycleRouteHandler: RouteHandler<
  typeof postDevicesSerialLiveToolsPortsCycleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialLiveToolsPortsCycleIdRouteHandler: RouteHandler<
  typeof getDevicesSerialLiveToolsPortsCycleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesSerialLiveToolsPortsStatusRouteHandler: RouteHandler<
  typeof postDevicesSerialLiveToolsPortsStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialLiveToolsPortsStatusJobIdRouteHandler: RouteHandler<
  typeof getDevicesSerialLiveToolsPortsStatusJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesSerialLiveToolsPowerUsageRouteHandler: RouteHandler<
  typeof postDevicesSerialLiveToolsPowerUsageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialLiveToolsPowerUsageJobIdRouteHandler: RouteHandler<
  typeof getDevicesSerialLiveToolsPowerUsageJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesSerialLiveToolsRouteDetailsRouteHandler: RouteHandler<
  typeof postDevicesSerialLiveToolsRouteDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialLiveToolsRouteDetailsJobIdRouteHandler: RouteHandler<
  typeof getDevicesSerialLiveToolsRouteDetailsJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesSerialLiveToolsRoutingTableLookupsRouteHandler: RouteHandler<
  typeof postDevicesSerialLiveToolsRoutingTableLookupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialLiveToolsRoutingTableLookupsIdRouteHandler: RouteHandler<
  typeof getDevicesSerialLiveToolsRoutingTableLookupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesSerialLiveToolsRoutingTableSummariesRouteHandler: RouteHandler<
  typeof postDevicesSerialLiveToolsRoutingTableSummariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialLiveToolsRoutingTableSummariesIdRouteHandler: RouteHandler<
  typeof getDevicesSerialLiveToolsRoutingTableSummariesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesSerialLiveToolsThroughputTestRouteHandler: RouteHandler<
  typeof postDevicesSerialLiveToolsThroughputTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialLiveToolsThroughputTestThroughputTestIdRouteHandler: RouteHandler<
  typeof getDevicesSerialLiveToolsThroughputTestThroughputTestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesSerialLiveToolsWakeOnLanRouteHandler: RouteHandler<
  typeof postDevicesSerialLiveToolsWakeOnLanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialLiveToolsWakeOnLanWakeOnLanIdRouteHandler: RouteHandler<
  typeof getDevicesSerialLiveToolsWakeOnLanWakeOnLanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialLldpCdpRouteHandler: RouteHandler<
  typeof getDevicesSerialLldpCdpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialLossAndLatencyHistoryRouteHandler: RouteHandler<
  typeof getDevicesSerialLossAndLatencyHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialManagementInterfaceRouteHandler: RouteHandler<
  typeof getDevicesSerialManagementInterfaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesSerialManagementInterfaceRouteHandler: RouteHandler<
  typeof putDevicesSerialManagementInterfaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesSerialRebootRouteHandler: RouteHandler<
  typeof postDevicesSerialRebootRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialSensorCommandsRouteHandler: RouteHandler<
  typeof getDevicesSerialSensorCommandsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesSerialSensorCommandsRouteHandler: RouteHandler<
  typeof postDevicesSerialSensorCommandsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialSensorCommandsCommandIdRouteHandler: RouteHandler<
  typeof getDevicesSerialSensorCommandsCommandIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialSensorRelationshipsRouteHandler: RouteHandler<
  typeof getDevicesSerialSensorRelationshipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesSerialSensorRelationshipsRouteHandler: RouteHandler<
  typeof putDevicesSerialSensorRelationshipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialSwitchPortsRouteHandler: RouteHandler<
  typeof getDevicesSerialSwitchPortsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesSerialSwitchPortsCycleRouteHandler: RouteHandler<
  typeof postDevicesSerialSwitchPortsCycleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialSwitchPortsStatusesRouteHandler: RouteHandler<
  typeof getDevicesSerialSwitchPortsStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialSwitchPortsStatusesPacketsRouteHandler: RouteHandler<
  typeof getDevicesSerialSwitchPortsStatusesPacketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialSwitchPortsPortIdRouteHandler: RouteHandler<
  typeof getDevicesSerialSwitchPortsPortIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesSerialSwitchPortsPortIdRouteHandler: RouteHandler<
  typeof putDevicesSerialSwitchPortsPortIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialSwitchRoutingInterfacesRouteHandler: RouteHandler<
  typeof getDevicesSerialSwitchRoutingInterfacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesSerialSwitchRoutingInterfacesRouteHandler: RouteHandler<
  typeof postDevicesSerialSwitchRoutingInterfacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialSwitchRoutingInterfacesInterfaceIdRouteHandler: RouteHandler<
  typeof getDevicesSerialSwitchRoutingInterfacesInterfaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesSerialSwitchRoutingInterfacesInterfaceIdRouteHandler: RouteHandler<
  typeof putDevicesSerialSwitchRoutingInterfacesInterfaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDevicesSerialSwitchRoutingInterfacesInterfaceIdRouteHandler: RouteHandler<
  typeof deleteDevicesSerialSwitchRoutingInterfacesInterfaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialSwitchRoutingInterfacesInterfaceIdDhcpRouteHandler: RouteHandler<
  typeof getDevicesSerialSwitchRoutingInterfacesInterfaceIdDhcpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesSerialSwitchRoutingInterfacesInterfaceIdDhcpRouteHandler: RouteHandler<
  typeof putDevicesSerialSwitchRoutingInterfacesInterfaceIdDhcpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialSwitchRoutingStaticRoutesRouteHandler: RouteHandler<
  typeof getDevicesSerialSwitchRoutingStaticRoutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesSerialSwitchRoutingStaticRoutesRouteHandler: RouteHandler<
  typeof postDevicesSerialSwitchRoutingStaticRoutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialSwitchRoutingStaticRoutesStaticRouteIdRouteHandler: RouteHandler<
  typeof getDevicesSerialSwitchRoutingStaticRoutesStaticRouteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesSerialSwitchRoutingStaticRoutesStaticRouteIdRouteHandler: RouteHandler<
  typeof putDevicesSerialSwitchRoutingStaticRoutesStaticRouteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDevicesSerialSwitchRoutingStaticRoutesStaticRouteIdRouteHandler: RouteHandler<
  typeof deleteDevicesSerialSwitchRoutingStaticRoutesStaticRouteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialSwitchWarmSpareRouteHandler: RouteHandler<
  typeof getDevicesSerialSwitchWarmSpareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesSerialSwitchWarmSpareRouteHandler: RouteHandler<
  typeof putDevicesSerialSwitchWarmSpareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesSerialWirelessAlternateManagementInterfaceIpv6RouteHandler: RouteHandler<
  typeof putDevicesSerialWirelessAlternateManagementInterfaceIpv6Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialWirelessBluetoothSettingsRouteHandler: RouteHandler<
  typeof getDevicesSerialWirelessBluetoothSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesSerialWirelessBluetoothSettingsRouteHandler: RouteHandler<
  typeof putDevicesSerialWirelessBluetoothSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialWirelessConnectionStatsRouteHandler: RouteHandler<
  typeof getDevicesSerialWirelessConnectionStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialWirelessElectronicShelfLabelRouteHandler: RouteHandler<
  typeof getDevicesSerialWirelessElectronicShelfLabelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesSerialWirelessElectronicShelfLabelRouteHandler: RouteHandler<
  typeof putDevicesSerialWirelessElectronicShelfLabelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialWirelessLatencyStatsRouteHandler: RouteHandler<
  typeof getDevicesSerialWirelessLatencyStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialWirelessRadioOverridesRouteHandler: RouteHandler<
  typeof getDevicesSerialWirelessRadioOverridesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesSerialWirelessRadioOverridesRouteHandler: RouteHandler<
  typeof putDevicesSerialWirelessRadioOverridesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialWirelessRadioSettingsRouteHandler: RouteHandler<
  typeof getDevicesSerialWirelessRadioSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesSerialWirelessRadioSettingsRouteHandler: RouteHandler<
  typeof putDevicesSerialWirelessRadioSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialWirelessStatusRouteHandler: RouteHandler<
  typeof getDevicesSerialWirelessStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesSerialWirelessZigbeeEnrollmentsRouteHandler: RouteHandler<
  typeof postDevicesSerialWirelessZigbeeEnrollmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesSerialWirelessZigbeeEnrollmentsEnrollmentIdRouteHandler: RouteHandler<
  typeof getDevicesSerialWirelessZigbeeEnrollmentsEnrollmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
