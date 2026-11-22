import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDevicesSerialSwitchRoutingInterfacesInterfaceIdRoute,
  deleteDevicesSerialSwitchRoutingStaticRoutesStaticRouteIdRoute,
  deleteNetworksNetworkIdSwitchAccessPoliciesAccessPolicyNumberRoute,
  deleteNetworksNetworkIdSwitchDhcpServerPolicyArpInspectionTrustedServersTrustedServerIdRoute,
  deleteNetworksNetworkIdSwitchLinkAggregationsLinkAggregationIdRoute,
  deleteNetworksNetworkIdSwitchPortSchedulesPortScheduleIdRoute,
  deleteNetworksNetworkIdSwitchQosRulesQosRuleIdRoute,
  deleteNetworksNetworkIdSwitchRoutingMulticastRendezvousPointsRendezvousPointIdRoute,
  deleteNetworksNetworkIdSwitchStacksSwitchStackIdRoute,
  deleteNetworksNetworkIdSwitchStacksSwitchStackIdRoutingInterfacesInterfaceIdRoute,
  deleteNetworksNetworkIdSwitchStacksSwitchStackIdRoutingStaticRoutesStaticRouteIdRoute,
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
  getOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesProfileIdPortsPortIdRoute,
  getOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesProfileIdPortsRoute,
  getOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesRoute,
  getOrganizationsOrganizationIdSummarySwitchPowerHistoryRoute,
  getOrganizationsOrganizationIdSwitchPortsBySwitchRoute,
  getOrganizationsOrganizationIdSwitchPortsClientsOverviewByDeviceRoute,
  getOrganizationsOrganizationIdSwitchPortsOverviewRoute,
  getOrganizationsOrganizationIdSwitchPortsStatusesBySwitchRoute,
  getOrganizationsOrganizationIdSwitchPortsTopologyDiscoveryByDeviceRoute,
  getOrganizationsOrganizationIdSwitchPortsUsageHistoryByDeviceByIntervalRoute,
  postDevicesSerialSwitchPortsCycleRoute,
  postDevicesSerialSwitchRoutingInterfacesRoute,
  postDevicesSerialSwitchRoutingStaticRoutesRoute,
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
  postOrganizationsOrganizationIdSwitchDevicesCloneRoute,
  putDevicesSerialSwitchPortsPortIdRoute,
  putDevicesSerialSwitchRoutingInterfacesInterfaceIdDhcpRoute,
  putDevicesSerialSwitchRoutingInterfacesInterfaceIdRoute,
  putDevicesSerialSwitchRoutingStaticRoutesStaticRouteIdRoute,
  putDevicesSerialSwitchWarmSpareRoute,
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
  putOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesProfileIdPortsPortIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const switchHandler = app
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
  .openapi(
    getOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesProfileIdPortsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesProfileIdPortsPortIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putOrganizationsOrganizationIdConfigTemplatesConfigTemplateIdSwitchProfilesProfileIdPortsPortIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdSummarySwitchPowerHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdSwitchDevicesCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSwitchPortsBySwitchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSwitchPortsClientsOverviewByDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSwitchPortsOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSwitchPortsStatusesBySwitchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSwitchPortsTopologyDiscoveryByDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdSwitchPortsUsageHistoryByDeviceByIntervalRoute, (c) => {
    throw new Error('Not implemented')
  })
