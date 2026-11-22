import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdCellularGatewayEsimsServiceProvidersAccountsAccountIdRoute,
  getDevicesSerialCellularGatewayLanRoute,
  getDevicesSerialCellularGatewayPortForwardingRulesRoute,
  getNetworksNetworkIdCellularGatewayConnectivityMonitoringDestinationsRoute,
  getNetworksNetworkIdCellularGatewayDhcpRoute,
  getNetworksNetworkIdCellularGatewaySubnetPoolRoute,
  getNetworksNetworkIdCellularGatewayUplinkRoute,
  getOrganizationsOrganizationIdCellularGatewayEsimsInventoryRoute,
  getOrganizationsOrganizationIdCellularGatewayEsimsServiceProvidersAccountsCommunicationPlansRoute,
  getOrganizationsOrganizationIdCellularGatewayEsimsServiceProvidersAccountsRatePlansRoute,
  getOrganizationsOrganizationIdCellularGatewayEsimsServiceProvidersAccountsRoute,
  getOrganizationsOrganizationIdCellularGatewayEsimsServiceProvidersRoute,
  getOrganizationsOrganizationIdCellularGatewayUplinkStatusesRoute,
  postOrganizationsOrganizationIdCellularGatewayEsimsServiceProvidersAccountsRoute,
  postOrganizationsOrganizationIdCellularGatewayEsimsSwapRoute,
  putDevicesSerialCellularGatewayLanRoute,
  putDevicesSerialCellularGatewayPortForwardingRulesRoute,
  putNetworksNetworkIdCellularGatewayConnectivityMonitoringDestinationsRoute,
  putNetworksNetworkIdCellularGatewayDhcpRoute,
  putNetworksNetworkIdCellularGatewaySubnetPoolRoute,
  putNetworksNetworkIdCellularGatewayUplinkRoute,
  putOrganizationsOrganizationIdCellularGatewayEsimsInventoryIdRoute,
  putOrganizationsOrganizationIdCellularGatewayEsimsServiceProvidersAccountsAccountIdRoute,
  putOrganizationsOrganizationIdCellularGatewayEsimsSwapIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cellularGatewayHandler = app
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
  .openapi(getOrganizationsOrganizationIdCellularGatewayEsimsInventoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdCellularGatewayEsimsInventoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdCellularGatewayEsimsServiceProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdCellularGatewayEsimsServiceProvidersAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postOrganizationsOrganizationIdCellularGatewayEsimsServiceProvidersAccountsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdCellularGatewayEsimsServiceProvidersAccountsCommunicationPlansRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdCellularGatewayEsimsServiceProvidersAccountsRatePlansRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putOrganizationsOrganizationIdCellularGatewayEsimsServiceProvidersAccountsAccountIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteOrganizationsOrganizationIdCellularGatewayEsimsServiceProvidersAccountsAccountIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postOrganizationsOrganizationIdCellularGatewayEsimsSwapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdCellularGatewayEsimsSwapIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdCellularGatewayUplinkStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
