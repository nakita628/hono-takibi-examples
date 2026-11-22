import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworksNetworkIdWirelessAirMarshalRulesRuleIdRoute,
  deleteNetworksNetworkIdWirelessEthernetPortsProfilesProfileIdRoute,
  deleteNetworksNetworkIdWirelessRfProfilesRfProfileIdRoute,
  deleteNetworksNetworkIdWirelessSsidsNumberIdentityPsksIdentityPskIdRoute,
  deleteOrganizationsOrganizationIdWirelessDevicesProvisioningDeploymentsDeploymentIdRoute,
  deleteOrganizationsOrganizationIdWirelessLocationScanningReceiversReceiverIdRoute,
  deleteOrganizationsOrganizationIdWirelessSsidsFirewallIsolationAllowlistEntriesEntryIdRoute,
  deleteOrganizationsOrganizationIdWirelessSsidsProfilesAssignmentsRoute,
  deleteOrganizationsOrganizationIdWirelessSsidsProfilesIdRoute,
  getDevicesSerialWirelessBluetoothSettingsRoute,
  getDevicesSerialWirelessConnectionStatsRoute,
  getDevicesSerialWirelessElectronicShelfLabelRoute,
  getDevicesSerialWirelessLatencyStatsRoute,
  getDevicesSerialWirelessRadioOverridesRoute,
  getDevicesSerialWirelessRadioSettingsRoute,
  getDevicesSerialWirelessStatusRoute,
  getDevicesSerialWirelessZigbeeEnrollmentsEnrollmentIdRoute,
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
  getOrganizationsOrganizationIdAssuranceImpactedDeviceWirelessByNetworkRoute,
  getOrganizationsOrganizationIdAssuranceWirelessExperienceSuccessfulConnectionsByNetworkRoute,
  getOrganizationsOrganizationIdWirelessAirMarshalRulesRoute,
  getOrganizationsOrganizationIdWirelessAirMarshalSettingsByNetworkRoute,
  getOrganizationsOrganizationIdWirelessClientsConnectionsImpactedByNetworkBySsidRoute,
  getOrganizationsOrganizationIdWirelessClientsOverviewByDeviceRoute,
  getOrganizationsOrganizationIdWirelessClientsUsageByNetworkBySsidRoute,
  getOrganizationsOrganizationIdWirelessClientsUsageByNetworkRoute,
  getOrganizationsOrganizationIdWirelessClientsUsageBySsidRoute,
  getOrganizationsOrganizationIdWirelessDevicesChannelUtilizationByDeviceRoute,
  getOrganizationsOrganizationIdWirelessDevicesChannelUtilizationByNetworkRoute,
  getOrganizationsOrganizationIdWirelessDevicesChannelUtilizationHistoryByDeviceByIntervalRoute,
  getOrganizationsOrganizationIdWirelessDevicesChannelUtilizationHistoryByNetworkByIntervalRoute,
  getOrganizationsOrganizationIdWirelessDevicesEthernetStatusesRoute,
  getOrganizationsOrganizationIdWirelessDevicesPacketLossByClientRoute,
  getOrganizationsOrganizationIdWirelessDevicesPacketLossByDeviceRoute,
  getOrganizationsOrganizationIdWirelessDevicesPacketLossByNetworkRoute,
  getOrganizationsOrganizationIdWirelessDevicesPowerModeHistoryRoute,
  getOrganizationsOrganizationIdWirelessDevicesProvisioningDeploymentsRoute,
  getOrganizationsOrganizationIdWirelessDevicesRadsecCertificatesAuthoritiesCrlsDeltasRoute,
  getOrganizationsOrganizationIdWirelessDevicesRadsecCertificatesAuthoritiesCrlsRoute,
  getOrganizationsOrganizationIdWirelessDevicesRadsecCertificatesAuthoritiesRoute,
  getOrganizationsOrganizationIdWirelessDevicesSystemCpuLoadHistoryRoute,
  getOrganizationsOrganizationIdWirelessDevicesWirelessControllersByDeviceRoute,
  getOrganizationsOrganizationIdWirelessLocationScanningByNetworkRoute,
  getOrganizationsOrganizationIdWirelessLocationScanningReceiversRoute,
  getOrganizationsOrganizationIdWirelessMqttSettingsRoute,
  getOrganizationsOrganizationIdWirelessRadioOverridesByDeviceRoute,
  getOrganizationsOrganizationIdWirelessRadioRrmByNetworkRoute,
  getOrganizationsOrganizationIdWirelessRfProfilesAssignmentsByDeviceRoute,
  getOrganizationsOrganizationIdWirelessSsidsFirewallIsolationAllowlistEntriesRoute,
  getOrganizationsOrganizationIdWirelessSsidsOpenRoamingByNetworkRoute,
  getOrganizationsOrganizationIdWirelessSsidsOweByNetworkRoute,
  getOrganizationsOrganizationIdWirelessSsidsProfilesAssignmentsByNetworkRoute,
  getOrganizationsOrganizationIdWirelessSsidsProfilesAssignmentsRoute,
  getOrganizationsOrganizationIdWirelessSsidsProfilesOverviewsRoute,
  getOrganizationsOrganizationIdWirelessSsidsProfilesRoute,
  getOrganizationsOrganizationIdWirelessSsidsStatusesByDeviceRoute,
  getOrganizationsOrganizationIdWirelessZigbeeByNetworkRoute,
  getOrganizationsOrganizationIdWirelessZigbeeDevicesRoute,
  getOrganizationsOrganizationIdWirelessZigbeeDisenrollmentsDisenrollmentIdRoute,
  getOrganizationsOrganizationIdWirelessZigbeeDoorLocksRoute,
  postDevicesSerialWirelessZigbeeEnrollmentsRoute,
  postNetworksNetworkIdWirelessAirMarshalRulesRoute,
  postNetworksNetworkIdWirelessEthernetPortsProfilesAssignRoute,
  postNetworksNetworkIdWirelessEthernetPortsProfilesRoute,
  postNetworksNetworkIdWirelessEthernetPortsProfilesSetDefaultRoute,
  postNetworksNetworkIdWirelessRfProfilesRoute,
  postNetworksNetworkIdWirelessSsidsNumberIdentityPsksRoute,
  postOrganizationsOrganizationIdWirelessDevicesProvisioningDeploymentsRoute,
  postOrganizationsOrganizationIdWirelessDevicesRadsecCertificatesAuthoritiesRoute,
  postOrganizationsOrganizationIdWirelessLocationScanningReceiversRoute,
  postOrganizationsOrganizationIdWirelessRadioAutoRfChannelsRecalculateRoute,
  postOrganizationsOrganizationIdWirelessSsidsFirewallIsolationAllowlistEntriesRoute,
  postOrganizationsOrganizationIdWirelessSsidsProfilesAssignmentsRoute,
  postOrganizationsOrganizationIdWirelessSsidsProfilesRoute,
  postOrganizationsOrganizationIdWirelessZigbeeDisenrollmentsRoute,
  putDevicesSerialWirelessAlternateManagementInterfaceIpv6Route,
  putDevicesSerialWirelessBluetoothSettingsRoute,
  putDevicesSerialWirelessElectronicShelfLabelRoute,
  putDevicesSerialWirelessRadioOverridesRoute,
  putDevicesSerialWirelessRadioSettingsRoute,
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
  putOrganizationsOrganizationIdWirelessDevicesProvisioningDeploymentsRoute,
  putOrganizationsOrganizationIdWirelessDevicesRadsecCertificatesAuthoritiesRoute,
  putOrganizationsOrganizationIdWirelessLocationScanningReceiversReceiverIdRoute,
  putOrganizationsOrganizationIdWirelessMqttSettingsRoute,
  putOrganizationsOrganizationIdWirelessSsidsFirewallIsolationAllowlistEntriesEntryIdRoute,
  putOrganizationsOrganizationIdWirelessSsidsProfilesIdRoute,
  putOrganizationsOrganizationIdWirelessZigbeeDevicesIdRoute,
  putOrganizationsOrganizationIdWirelessZigbeeDoorLocksDoorLockIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wirelessHandler = app
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
  .openapi(getOrganizationsOrganizationIdAssuranceImpactedDeviceWirelessByNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationsOrganizationIdAssuranceWirelessExperienceSuccessfulConnectionsByNetworkRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdWirelessAirMarshalRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWirelessAirMarshalSettingsByNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationsOrganizationIdWirelessClientsConnectionsImpactedByNetworkBySsidRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdWirelessClientsOverviewByDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWirelessClientsUsageByNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWirelessClientsUsageByNetworkBySsidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWirelessClientsUsageBySsidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWirelessDevicesChannelUtilizationByDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWirelessDevicesChannelUtilizationByNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationsOrganizationIdWirelessDevicesChannelUtilizationHistoryByDeviceByIntervalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdWirelessDevicesChannelUtilizationHistoryByNetworkByIntervalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdWirelessDevicesEthernetStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWirelessDevicesPacketLossByClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWirelessDevicesPacketLossByDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWirelessDevicesPacketLossByNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWirelessDevicesPowerModeHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWirelessDevicesProvisioningDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdWirelessDevicesProvisioningDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdWirelessDevicesProvisioningDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteOrganizationsOrganizationIdWirelessDevicesProvisioningDeploymentsDeploymentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdWirelessDevicesRadsecCertificatesAuthoritiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdWirelessDevicesRadsecCertificatesAuthoritiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postOrganizationsOrganizationIdWirelessDevicesRadsecCertificatesAuthoritiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdWirelessDevicesRadsecCertificatesAuthoritiesCrlsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdWirelessDevicesRadsecCertificatesAuthoritiesCrlsDeltasRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdWirelessDevicesSystemCpuLoadHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWirelessDevicesWirelessControllersByDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWirelessLocationScanningByNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWirelessLocationScanningReceiversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdWirelessLocationScanningReceiversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdWirelessLocationScanningReceiversReceiverIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteOrganizationsOrganizationIdWirelessLocationScanningReceiversReceiverIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdWirelessMqttSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdWirelessMqttSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdWirelessRadioAutoRfChannelsRecalculateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWirelessRadioOverridesByDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWirelessRadioRrmByNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWirelessRfProfilesAssignmentsByDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationsOrganizationIdWirelessSsidsFirewallIsolationAllowlistEntriesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationsOrganizationIdWirelessSsidsFirewallIsolationAllowlistEntriesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteOrganizationsOrganizationIdWirelessSsidsFirewallIsolationAllowlistEntriesEntryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putOrganizationsOrganizationIdWirelessSsidsFirewallIsolationAllowlistEntriesEntryIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdWirelessSsidsOpenRoamingByNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWirelessSsidsOweByNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWirelessSsidsProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdWirelessSsidsProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWirelessSsidsProfilesAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdWirelessSsidsProfilesAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdWirelessSsidsProfilesAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWirelessSsidsProfilesAssignmentsByNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWirelessSsidsProfilesOverviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdWirelessSsidsProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdWirelessSsidsProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWirelessSsidsStatusesByDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWirelessZigbeeByNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWirelessZigbeeDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdWirelessZigbeeDevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdWirelessZigbeeDisenrollmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWirelessZigbeeDisenrollmentsDisenrollmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdWirelessZigbeeDoorLocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdWirelessZigbeeDoorLocksDoorLockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
