import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNetworksNetworkIdCampusGatewayClustersClusterIdRoute,
  getOrganizationsOrganizationIdCampusGatewayClientsUsageByNetworkByClusterRoute,
  getOrganizationsOrganizationIdCampusGatewayClustersFailoverTargetsByClusterRoute,
  getOrganizationsOrganizationIdCampusGatewayClustersFailoverTargetsRoute,
  getOrganizationsOrganizationIdCampusGatewayClustersNetworksOverviewsRoute,
  getOrganizationsOrganizationIdCampusGatewayClustersRoute,
  getOrganizationsOrganizationIdCampusGatewayClustersSsidsRoute,
  getOrganizationsOrganizationIdCampusGatewayClustersTunnelableRoute,
  getOrganizationsOrganizationIdCampusGatewayClustersTunnelingByClusterByNetworkRoute,
  getOrganizationsOrganizationIdCampusGatewayConnectionsOverviewRoute,
  getOrganizationsOrganizationIdCampusGatewayConnectionsRoute,
  getOrganizationsOrganizationIdCampusGatewayDevicesSystemCpuLoadRoute,
  getOrganizationsOrganizationIdCampusGatewayDevicesUplinksLocalOverridesByDeviceRoute,
  postNetworksNetworkIdCampusGatewayClustersRoute,
  postOrganizationsOrganizationIdCampusGatewayClustersProvisionRoute,
  postOrganizationsOrganizationIdCampusGatewayClustersTunnelingBatchUpdateRoute,
  putNetworksNetworkIdCampusGatewayClustersClusterIdRoute,
  putNetworksNetworkIdCampusGatewaySsidsNumberMdnsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const campusGatewayHandler = app
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
  .openapi(getOrganizationsOrganizationIdCampusGatewayClientsUsageByNetworkByClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdCampusGatewayClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdCampusGatewayClustersFailoverTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationsOrganizationIdCampusGatewayClustersFailoverTargetsByClusterRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdCampusGatewayClustersNetworksOverviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdCampusGatewayClustersProvisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdCampusGatewayClustersSsidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdCampusGatewayClustersTunnelableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdCampusGatewayClustersTunnelingBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationsOrganizationIdCampusGatewayClustersTunnelingByClusterByNetworkRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdCampusGatewayConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdCampusGatewayConnectionsOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdCampusGatewayDevicesSystemCpuLoadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationsOrganizationIdCampusGatewayDevicesUplinksLocalOverridesByDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
