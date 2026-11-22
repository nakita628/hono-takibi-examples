import { OpenAPIHono } from '@hono/zod-openapi'
import {
  acceleratorTypesHandler,
  addressesHandler,
  autoscalersHandler,
  backendBucketsHandler,
  backendServicesHandler,
  disksHandler,
  diskTypesHandler,
  externalVpnGatewaysHandler,
  firewallPoliciesHandler,
  firewallsHandler,
  forwardingRulesHandler,
  globalAddressesHandler,
  globalForwardingRulesHandler,
  globalNetworkEndpointGroupsHandler,
  globalOperationsHandler,
  globalOrganizationOperationsHandler,
  globalPublicDelegatedPrefixesHandler,
  healthChecksHandler,
  httpHealthChecksHandler,
  httpsHealthChecksHandler,
  imageFamilyViewsHandler,
  imagesHandler,
  instanceGroupManagersHandler,
  instanceGroupsHandler,
  instancesHandler,
  instanceTemplatesHandler,
  instantSnapshotsHandler,
  interconnectAttachmentsHandler,
  interconnectLocationsHandler,
  interconnectRemoteLocationsHandler,
  interconnectsHandler,
  licenseCodesHandler,
  licensesHandler,
  machineImagesHandler,
  machineTypesHandler,
  networkAttachmentsHandler,
  networkEdgeSecurityServicesHandler,
  networkEndpointGroupsHandler,
  networkFirewallPoliciesHandler,
  networksHandler,
  nodeGroupsHandler,
  nodeTemplatesHandler,
  nodeTypesHandler,
  packetMirroringsHandler,
  projectsHandler,
  publicAdvertisedPrefixesHandler,
  publicDelegatedPrefixesHandler,
  regionAutoscalersHandler,
  regionBackendServicesHandler,
  regionCommitmentsHandler,
  regionDisksHandler,
  regionDiskTypesHandler,
  regionHealthCheckServicesHandler,
  regionHealthChecksHandler,
  regionInstanceGroupManagersHandler,
  regionInstanceGroupsHandler,
  regionInstancesHandler,
  regionInstanceTemplatesHandler,
  regionInstantSnapshotsHandler,
  regionNetworkEndpointGroupsHandler,
  regionNetworkFirewallPoliciesHandler,
  regionNotificationEndpointsHandler,
  regionOperationsHandler,
  regionSecurityPoliciesHandler,
  regionsHandler,
  regionSslCertificatesHandler,
  regionSslPoliciesHandler,
  regionTargetHttpProxiesHandler,
  regionTargetHttpsProxiesHandler,
  regionTargetTcpProxiesHandler,
  regionUrlMapsHandler,
  regionZonesHandler,
  reservationsHandler,
  resourcePoliciesHandler,
  routersHandler,
  routesHandler,
  securityPoliciesHandler,
  serviceAttachmentsHandler,
  snapshotSettingsHandler,
  snapshotsHandler,
  sslCertificatesHandler,
  sslPoliciesHandler,
  subnetworksHandler,
  targetGrpcProxiesHandler,
  targetHttpProxiesHandler,
  targetHttpsProxiesHandler,
  targetInstancesHandler,
  targetPoolsHandler,
  targetSslProxiesHandler,
  targetTcpProxiesHandler,
  targetVpnGatewaysHandler,
  urlMapsHandler,
  vpnGatewaysHandler,
  vpnTunnelsHandler,
  zoneOperationsHandler,
  zonesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', firewallPoliciesHandler)
  .route('/', globalOrganizationOperationsHandler)
  .route('/', projectsHandler)
  .route('/', acceleratorTypesHandler)
  .route('/', addressesHandler)
  .route('/', autoscalersHandler)
  .route('/', backendServicesHandler)
  .route('/', regionCommitmentsHandler)
  .route('/', diskTypesHandler)
  .route('/', disksHandler)
  .route('/', forwardingRulesHandler)
  .route('/', healthChecksHandler)
  .route('/', instanceGroupManagersHandler)
  .route('/', instanceGroupsHandler)
  .route('/', instanceTemplatesHandler)
  .route('/', instancesHandler)
  .route('/', instantSnapshotsHandler)
  .route('/', interconnectAttachmentsHandler)
  .route('/', machineTypesHandler)
  .route('/', networkAttachmentsHandler)
  .route('/', networkEdgeSecurityServicesHandler)
  .route('/', networkEndpointGroupsHandler)
  .route('/', nodeGroupsHandler)
  .route('/', nodeTemplatesHandler)
  .route('/', nodeTypesHandler)
  .route('/', globalOperationsHandler)
  .route('/', packetMirroringsHandler)
  .route('/', publicDelegatedPrefixesHandler)
  .route('/', reservationsHandler)
  .route('/', resourcePoliciesHandler)
  .route('/', routersHandler)
  .route('/', securityPoliciesHandler)
  .route('/', serviceAttachmentsHandler)
  .route('/', sslCertificatesHandler)
  .route('/', sslPoliciesHandler)
  .route('/', subnetworksHandler)
  .route('/', targetHttpProxiesHandler)
  .route('/', targetHttpsProxiesHandler)
  .route('/', targetInstancesHandler)
  .route('/', targetPoolsHandler)
  .route('/', targetTcpProxiesHandler)
  .route('/', targetVpnGatewaysHandler)
  .route('/', urlMapsHandler)
  .route('/', vpnGatewaysHandler)
  .route('/', vpnTunnelsHandler)
  .route('/', globalAddressesHandler)
  .route('/', backendBucketsHandler)
  .route('/', externalVpnGatewaysHandler)
  .route('/', networkFirewallPoliciesHandler)
  .route('/', firewallsHandler)
  .route('/', globalForwardingRulesHandler)
  .route('/', httpHealthChecksHandler)
  .route('/', httpsHealthChecksHandler)
  .route('/', imagesHandler)
  .route('/', interconnectLocationsHandler)
  .route('/', interconnectRemoteLocationsHandler)
  .route('/', interconnectsHandler)
  .route('/', licenseCodesHandler)
  .route('/', licensesHandler)
  .route('/', machineImagesHandler)
  .route('/', globalNetworkEndpointGroupsHandler)
  .route('/', networksHandler)
  .route('/', publicAdvertisedPrefixesHandler)
  .route('/', globalPublicDelegatedPrefixesHandler)
  .route('/', routesHandler)
  .route('/', snapshotSettingsHandler)
  .route('/', snapshotsHandler)
  .route('/', targetGrpcProxiesHandler)
  .route('/', targetSslProxiesHandler)
  .route('/', regionsHandler)
  .route('/', regionAutoscalersHandler)
  .route('/', regionBackendServicesHandler)
  .route('/', regionDiskTypesHandler)
  .route('/', regionDisksHandler)
  .route('/', regionNetworkFirewallPoliciesHandler)
  .route('/', regionHealthCheckServicesHandler)
  .route('/', regionHealthChecksHandler)
  .route('/', regionInstanceGroupManagersHandler)
  .route('/', regionInstanceGroupsHandler)
  .route('/', regionInstanceTemplatesHandler)
  .route('/', regionInstancesHandler)
  .route('/', regionInstantSnapshotsHandler)
  .route('/', regionNetworkEndpointGroupsHandler)
  .route('/', regionNotificationEndpointsHandler)
  .route('/', regionOperationsHandler)
  .route('/', regionSecurityPoliciesHandler)
  .route('/', regionSslCertificatesHandler)
  .route('/', regionSslPoliciesHandler)
  .route('/', regionTargetHttpProxiesHandler)
  .route('/', regionTargetHttpsProxiesHandler)
  .route('/', regionTargetTcpProxiesHandler)
  .route('/', regionUrlMapsHandler)
  .route('/', regionZonesHandler)
  .route('/', zonesHandler)
  .route('/', imageFamilyViewsHandler)
  .route('/', zoneOperationsHandler)

export default app
