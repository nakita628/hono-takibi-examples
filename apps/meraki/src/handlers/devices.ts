import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const devicesHandler = app
  .openapi(getDevicesSerialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialApplianceDhcpSubnetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialApplianceInterfacesPortsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialApplianceInterfacesPortsNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialAppliancePerformanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialAppliancePrefixesDelegatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialAppliancePrefixesDelegatedVlanAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialApplianceRadioSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialApplianceRadioSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialApplianceUplinksSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialApplianceUplinksSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialApplianceVmxAuthenticationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialBlinkLedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraAnalyticsLiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraAnalyticsOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraAnalyticsRecentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraAnalyticsZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraAnalyticsZonesZoneIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraClipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraCustomAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialCameraCustomAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialCameraGenerateSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraQualityAndRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialCameraQualityAndRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraSenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialCameraSenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraSenseObjectDetectionModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraVideoSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialCameraVideoSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraVideoLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCameraWirelessProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialCameraWirelessProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialCellularGeolocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCellularSimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialCellularSimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialCellularUplinksBandsMasksUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCellularGatewayLanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialCellularGatewayLanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialCellularGatewayPortForwardingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialCellularGatewayPortForwardingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialCertificatesCertificateSerialRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsArpTableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsArpTableArpTableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsCableTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsCableTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsLedsBlinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsLedsBlinkLedsBlinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsMacTableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsMacTableMacTableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsMulticastRoutingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsMulticastRoutingMulticastRoutingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsPingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsPingDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsPingDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsPortsCycleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsPortsCycleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsPortsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsPortsStatusJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsPowerUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsPowerUsageJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsRouteDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsRouteDetailsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsRoutingTableLookupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsRoutingTableLookupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsRoutingTableSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsRoutingTableSummariesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsThroughputTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsThroughputTestThroughputTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialLiveToolsWakeOnLanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLiveToolsWakeOnLanWakeOnLanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLldpCdpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialLossAndLatencyHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialManagementInterfaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialManagementInterfaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialRebootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialSensorCommandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialSensorCommandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialSensorCommandsCommandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialSensorRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialSensorRelationshipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialSwitchPortsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialSwitchPortsCycleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialSwitchPortsStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialSwitchPortsStatusesPacketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialSwitchPortsPortIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialSwitchPortsPortIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialSwitchRoutingInterfacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialSwitchRoutingInterfacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialSwitchRoutingInterfacesInterfaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialSwitchRoutingInterfacesInterfaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDevicesSerialSwitchRoutingInterfacesInterfaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialSwitchRoutingInterfacesInterfaceIdDhcpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialSwitchRoutingInterfacesInterfaceIdDhcpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialSwitchRoutingStaticRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialSwitchRoutingStaticRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialSwitchRoutingStaticRoutesStaticRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialSwitchRoutingStaticRoutesStaticRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDevicesSerialSwitchRoutingStaticRoutesStaticRouteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialSwitchWarmSpareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialSwitchWarmSpareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialWirelessAlternateManagementInterfaceIpv6Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialWirelessBluetoothSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialWirelessBluetoothSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialWirelessConnectionStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialWirelessElectronicShelfLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialWirelessElectronicShelfLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialWirelessLatencyStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialWirelessRadioOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialWirelessRadioOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialWirelessRadioSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesSerialWirelessRadioSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialWirelessStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesSerialWirelessZigbeeEnrollmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesSerialWirelessZigbeeEnrollmentsEnrollmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
