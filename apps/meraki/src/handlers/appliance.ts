import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworksNetworkIdApplianceInterfacesL3InterfaceIdRoute,
  deleteNetworksNetworkIdAppliancePrefixesDelegatedStaticsStaticDelegatedPrefixIdRoute,
  deleteNetworksNetworkIdApplianceRfProfilesRfProfileIdRoute,
  deleteNetworksNetworkIdApplianceStaticRoutesStaticRouteIdRoute,
  deleteNetworksNetworkIdApplianceTrafficShapingCustomPerformanceClassesCustomPerformanceClassIdRoute,
  deleteNetworksNetworkIdApplianceVlansVlanIdRoute,
  deleteOrganizationsOrganizationIdApplianceDnsLocalProfilesProfileIdRoute,
  deleteOrganizationsOrganizationIdApplianceDnsLocalRecordsRecordIdRoute,
  deleteOrganizationsOrganizationIdApplianceDnsSplitProfilesProfileIdRoute,
  deleteOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesPolicyIdRoute,
  deleteOrganizationsOrganizationIdApplianceSecurityIntrusionRuleGroupsOverridesOverrideIdRoute,
  deleteOrganizationsOrganizationIdApplianceSecurityIntrusionRulesOverridesOverrideIdRoute,
  getDevicesSerialApplianceDhcpSubnetsRoute,
  getDevicesSerialAppliancePerformanceRoute,
  getDevicesSerialAppliancePrefixesDelegatedRoute,
  getDevicesSerialAppliancePrefixesDelegatedVlanAssignmentsRoute,
  getDevicesSerialApplianceRadioSettingsRoute,
  getDevicesSerialApplianceUplinksSettingsRoute,
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
  getOrganizationsOrganizationIdApplianceDevicesInterfacesL3Route,
  getOrganizationsOrganizationIdApplianceDevicesInterfacesPortsByDeviceRoute,
  getOrganizationsOrganizationIdApplianceDevicesInterfacesPortsProfilesAssignmentsRoute,
  getOrganizationsOrganizationIdApplianceDevicesPortsTransceiversReadingsHistoryByDeviceRoute,
  getOrganizationsOrganizationIdApplianceDevicesRedundancyByNetworkRoute,
  getOrganizationsOrganizationIdApplianceDnsLocalProfilesAssignmentsRoute,
  getOrganizationsOrganizationIdApplianceDnsLocalProfilesRoute,
  getOrganizationsOrganizationIdApplianceDnsLocalRecordsRoute,
  getOrganizationsOrganizationIdApplianceDnsSplitProfilesAssignmentsRoute,
  getOrganizationsOrganizationIdApplianceDnsSplitProfilesRoute,
  getOrganizationsOrganizationIdApplianceFirewallMulticastForwardingByNetworkRoute,
  getOrganizationsOrganizationIdApplianceInterfacesPacketsOverviewsByDeviceRoute,
  getOrganizationsOrganizationIdApplianceRoutingVrfsSettingsRoute,
  getOrganizationsOrganizationIdApplianceSecurityEventsRoute,
  getOrganizationsOrganizationIdApplianceSecurityHttpsInspectionByNetworkRoute,
  getOrganizationsOrganizationIdApplianceSecurityHttpsiRoute,
  getOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesOverviewsRoute,
  getOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesRoute,
  getOrganizationsOrganizationIdApplianceSecurityIntrusionRoute,
  getOrganizationsOrganizationIdApplianceSecurityIntrusionRuleGroupsOverridesRoute,
  getOrganizationsOrganizationIdApplianceSecurityIntrusionRuleGroupsOverviewsRoute,
  getOrganizationsOrganizationIdApplianceSecurityIntrusionRuleGroupsRoute,
  getOrganizationsOrganizationIdApplianceSecurityIntrusionRulesOverridesRoute,
  getOrganizationsOrganizationIdApplianceSecurityIntrusionRulesRoute,
  getOrganizationsOrganizationIdApplianceTrafficShapingVpnExclusionsByNetworkRoute,
  getOrganizationsOrganizationIdApplianceUplinksNatByNetworkRoute,
  getOrganizationsOrganizationIdApplianceUplinksStatusesOverviewRoute,
  getOrganizationsOrganizationIdApplianceUplinkStatusesRoute,
  getOrganizationsOrganizationIdApplianceUplinksUsageByNetworkRoute,
  getOrganizationsOrganizationIdApplianceVpnSiteToSiteIpsecPeersSlasRoute,
  getOrganizationsOrganizationIdApplianceVpnStatsRoute,
  getOrganizationsOrganizationIdApplianceVpnStatusesRoute,
  getOrganizationsOrganizationIdApplianceVpnThirdPartyVPNPeersRoute,
  getOrganizationsOrganizationIdApplianceVpnVpnFirewallRulesRoute,
  getOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesApplianceVlansAssignmentsByVlanRoute,
  getOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesApplianceVlansAssignmentsRoute,
  postDevicesSerialApplianceInterfacesPortsUpdateRoute,
  postDevicesSerialApplianceVmxAuthenticationTokenRoute,
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
  postOrganizationsOrganizationIdApplianceDnsLocalProfilesAssignmentsBulkCreateRoute,
  postOrganizationsOrganizationIdApplianceDnsLocalProfilesAssignmentsBulkDeleteRoute,
  postOrganizationsOrganizationIdApplianceDnsLocalProfilesRoute,
  postOrganizationsOrganizationIdApplianceDnsLocalRecordsRoute,
  postOrganizationsOrganizationIdApplianceDnsSplitProfilesAssignmentsBulkCreateRoute,
  postOrganizationsOrganizationIdApplianceDnsSplitProfilesAssignmentsBulkDeleteRoute,
  postOrganizationsOrganizationIdApplianceDnsSplitProfilesRoute,
  postOrganizationsOrganizationIdApplianceSecurityHttpsiCertificatesRoute,
  postOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesPolicyIdRuleGroupsOverridesDeclareRoute,
  postOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesPolicyIdRuleGroupsRuleGroupIdOverrideRoute,
  postOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesPolicyIdRulesOverridesDeclareRoute,
  postOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesPolicyIdRulesRuleIdOverrideRoute,
  postOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesRoute,
  postOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesApplianceVlansAssignRoute,
  postOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesApplianceVlansRemoveRoute,
  putDevicesSerialApplianceInterfacesPortsNumberRoute,
  putDevicesSerialApplianceRadioSettingsRoute,
  putDevicesSerialApplianceUplinksSettingsRoute,
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
  putOrganizationsOrganizationIdApplianceDnsLocalProfilesProfileIdRoute,
  putOrganizationsOrganizationIdApplianceDnsLocalRecordsRecordIdRoute,
  putOrganizationsOrganizationIdApplianceDnsSplitProfilesProfileIdRoute,
  putOrganizationsOrganizationIdApplianceRoutingVrfsSettingsRoute,
  putOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesPolicyIdRoute,
  putOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesPolicyIdRuleGroupsRuleGroupIdOverrideRoute,
  putOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesPolicyIdRulesRuleIdOverrideRoute,
  putOrganizationsOrganizationIdApplianceSecurityIntrusionRoute,
  putOrganizationsOrganizationIdApplianceVpnSiteToSiteIpsecPeersSlasRoute,
  putOrganizationsOrganizationIdApplianceVpnThirdPartyVPNPeersRoute,
  putOrganizationsOrganizationIdApplianceVpnVpnFirewallRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applianceHandler = app
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
  .openapi(getOrganizationsOrganizationIdApplianceDevicesInterfacesL3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApplianceDevicesInterfacesPortsByDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationsOrganizationIdApplianceDevicesInterfacesPortsProfilesAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdApplianceDevicesPortsTransceiversReadingsHistoryByDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdApplianceDevicesRedundancyByNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApplianceDnsLocalProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdApplianceDnsLocalProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApplianceDnsLocalProfilesAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postOrganizationsOrganizationIdApplianceDnsLocalProfilesAssignmentsBulkCreateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationsOrganizationIdApplianceDnsLocalProfilesAssignmentsBulkDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putOrganizationsOrganizationIdApplianceDnsLocalProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdApplianceDnsLocalProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApplianceDnsLocalRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdApplianceDnsLocalRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdApplianceDnsLocalRecordsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdApplianceDnsLocalRecordsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApplianceDnsSplitProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdApplianceDnsSplitProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApplianceDnsSplitProfilesAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postOrganizationsOrganizationIdApplianceDnsSplitProfilesAssignmentsBulkCreateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationsOrganizationIdApplianceDnsSplitProfilesAssignmentsBulkDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putOrganizationsOrganizationIdApplianceDnsSplitProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdApplianceDnsSplitProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationsOrganizationIdApplianceFirewallMulticastForwardingByNetworkRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdApplianceInterfacesPacketsOverviewsByDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApplianceRoutingVrfsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdApplianceRoutingVrfsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApplianceSecurityEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApplianceSecurityHttpsInspectionByNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApplianceSecurityHttpsiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdApplianceSecurityHttpsiCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApplianceSecurityIntrusionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdApplianceSecurityIntrusionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesOverviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesPolicyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesPolicyIdRuleGroupsOverridesDeclareRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesPolicyIdRuleGroupsRuleGroupIdOverrideRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesPolicyIdRuleGroupsRuleGroupIdOverrideRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesPolicyIdRulesOverridesDeclareRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesPolicyIdRulesRuleIdOverrideRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putOrganizationsOrganizationIdApplianceSecurityIntrusionPoliciesPolicyIdRulesRuleIdOverrideRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdApplianceSecurityIntrusionRuleGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationsOrganizationIdApplianceSecurityIntrusionRuleGroupsOverridesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteOrganizationsOrganizationIdApplianceSecurityIntrusionRuleGroupsOverridesOverrideIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdApplianceSecurityIntrusionRuleGroupsOverviewsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdApplianceSecurityIntrusionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApplianceSecurityIntrusionRulesOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteOrganizationsOrganizationIdApplianceSecurityIntrusionRulesOverridesOverrideIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdApplianceTrafficShapingVpnExclusionsByNetworkRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdApplianceUplinkStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApplianceUplinksNatByNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApplianceUplinksStatusesOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApplianceUplinksUsageByNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApplianceVpnSiteToSiteIpsecPeersSlasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdApplianceVpnSiteToSiteIpsecPeersSlasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApplianceVpnStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApplianceVpnStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApplianceVpnThirdPartyVPNPeersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdApplianceVpnThirdPartyVPNPeersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdApplianceVpnVpnFirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdApplianceVpnVpnFirewallRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesApplianceVlansAssignRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesApplianceVlansAssignmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesApplianceVlansAssignmentsByVlanRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationsOrganizationIdPoliciesGlobalGroupPoliciesApplianceVlansRemoveRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
