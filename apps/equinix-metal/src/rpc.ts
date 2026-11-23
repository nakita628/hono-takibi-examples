import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function deleteApiKeysId(
  args: InferRequestType<(typeof client)['api-keys'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['api-keys'][':id'].$delete(args, options))
}

export async function getBatchesId(
  args: InferRequestType<(typeof client.batches)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batches[':id'].$get(args, options))
}

export async function deleteBatchesId(
  args: InferRequestType<(typeof client.batches)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batches[':id'].$delete(args, options))
}

export async function getBgpSessionsId(
  args: InferRequestType<(typeof client.bgp.sessions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bgp.sessions[':id'].$get(args, options))
}

export async function putBgpSessionsId(
  args: InferRequestType<(typeof client.bgp.sessions)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bgp.sessions[':id'].$put(args, options))
}

export async function deleteBgpSessionsId(
  args: InferRequestType<(typeof client.bgp.sessions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bgp.sessions[':id'].$delete(args, options))
}

export async function getBgpDynamicNeighborsId(
  args: InferRequestType<(typeof client)['bgp-dynamic-neighbors'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['bgp-dynamic-neighbors'][':id'].$get(args, options))
}

export async function deleteBgpDynamicNeighborsId(
  args: InferRequestType<(typeof client)['bgp-dynamic-neighbors'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['bgp-dynamic-neighbors'][':id'].$delete(args, options))
}

export async function getCapacity(options?: ClientRequestOptions) {
  return await parseResponse(client.capacity.$get(undefined, options))
}

export async function postCapacity(
  args: InferRequestType<typeof client.capacity.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.capacity.$post(args, options))
}

export async function getCapacityMetros(options?: ClientRequestOptions) {
  return await parseResponse(client.capacity.metros.$get(undefined, options))
}

export async function postCapacityMetros(
  args: InferRequestType<typeof client.capacity.metros.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.capacity.metros.$post(args, options))
}

export async function getConnectionsConnectionId(
  args: InferRequestType<(typeof client.connections)[':connection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':connection_id'].$get(args, options))
}

export async function putConnectionsConnectionId(
  args: InferRequestType<(typeof client.connections)[':connection_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':connection_id'].$put(args, options))
}

export async function deleteConnectionsConnectionId(
  args: InferRequestType<(typeof client.connections)[':connection_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':connection_id'].$delete(args, options))
}

export async function getConnectionsConnectionIdEvents(
  args: InferRequestType<(typeof client.connections)[':connection_id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':connection_id'].events.$get(args, options))
}

export async function getConnectionsConnectionIdPorts(
  args: InferRequestType<(typeof client.connections)[':connection_id']['ports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':connection_id'].ports.$get(args, options))
}

export async function getConnectionsConnectionIdVirtualCircuits(
  args: InferRequestType<(typeof client.connections)[':connection_id']['virtual-circuits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.connections[':connection_id']['virtual-circuits'].$get(args, options),
  )
}

export async function getConnectionsConnectionIdPortsId(
  args: InferRequestType<(typeof client.connections)[':connection_id']['ports'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':connection_id'].ports[':id'].$get(args, options))
}

export async function getConnectionsConnectionIdPortsIdEvents(
  args: InferRequestType<
    (typeof client.connections)[':connection_id']['ports'][':id']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.connections[':connection_id'].ports[':id'].events.$get(args, options),
  )
}

export async function getConnectionsConnectionIdPortsPortIdVirtualCircuits(
  args: InferRequestType<
    (typeof client.connections)[':connection_id']['ports'][':port_id']['virtual-circuits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.connections[':connection_id'].ports[':port_id']['virtual-circuits'].$get(args, options),
  )
}

export async function postConnectionsConnectionIdPortsPortIdVirtualCircuits(
  args: InferRequestType<
    (typeof client.connections)[':connection_id']['ports'][':port_id']['virtual-circuits']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.connections[':connection_id'].ports[':port_id']['virtual-circuits'].$post(args, options),
  )
}

export async function getDevicesId(
  args: InferRequestType<(typeof client.devices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':id'].$get(args, options))
}

export async function putDevicesId(
  args: InferRequestType<(typeof client.devices)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':id'].$put(args, options))
}

export async function deleteDevicesId(
  args: InferRequestType<(typeof client.devices)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':id'].$delete(args, options))
}

export async function postDevicesIdActions(
  args: InferRequestType<(typeof client.devices)[':id']['actions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':id'].actions.$post(args, options))
}

export async function getDevicesIdBandwidth(
  args: InferRequestType<(typeof client.devices)[':id']['bandwidth']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':id'].bandwidth.$get(args, options))
}

export async function getDevicesIdBgpNeighbors(
  args: InferRequestType<(typeof client.devices)[':id']['bgp']['neighbors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':id'].bgp.neighbors.$get(args, options))
}

export async function getDevicesIdBgpSessions(
  args: InferRequestType<(typeof client.devices)[':id']['bgp']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':id'].bgp.sessions.$get(args, options))
}

export async function postDevicesIdBgpSessions(
  args: InferRequestType<(typeof client.devices)[':id']['bgp']['sessions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':id'].bgp.sessions.$post(args, options))
}

export async function getDevicesIdCustomdata(
  args: InferRequestType<(typeof client.devices)[':id']['customdata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':id'].customdata.$get(args, options))
}

export async function getDevicesIdDiagnosticsScreenshot(
  args: InferRequestType<(typeof client.devices)[':id']['diagnostics']['screenshot']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':id'].diagnostics.screenshot.$get(args, options))
}

export async function getDevicesIdDiagnosticsHealthRollup(
  args: InferRequestType<(typeof client.devices)[':id']['diagnostics']['health']['rollup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':id'].diagnostics.health.rollup.$get(args, options))
}

export async function getDevicesIdEvents(
  args: InferRequestType<(typeof client.devices)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':id'].events.$get(args, options))
}

export async function getDevicesIdFirmwareSets(
  args: InferRequestType<(typeof client.devices)[':id']['firmware-sets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':id']['firmware-sets'].$get(args, options))
}

export async function getDevicesIdIps(
  args: InferRequestType<(typeof client.devices)[':id']['ips']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':id'].ips.$get(args, options))
}

export async function postDevicesIdIps(
  args: InferRequestType<(typeof client.devices)[':id']['ips']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':id'].ips.$post(args, options))
}

export async function getDevicesIdMetadata(
  args: InferRequestType<(typeof client.devices)[':id']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':id'].metadata.$get(args, options))
}

export async function getDevicesIdSshKeys(
  args: InferRequestType<(typeof client.devices)[':id']['ssh-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':id']['ssh-keys'].$get(args, options))
}

export async function getDevicesIdTraffic(
  args: InferRequestType<(typeof client.devices)[':id']['traffic']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':id'].traffic.$get(args, options))
}

export async function getDevicesIdUsages(
  args: InferRequestType<(typeof client.devices)[':id']['usages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':id'].usages.$get(args, options))
}

export async function getDevicesIdUserdata(
  args: InferRequestType<(typeof client.devices)[':id']['userdata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':id'].userdata.$get(args, options))
}

export async function getDevicesInstanceIdIpsIdCustomdata(
  args: InferRequestType<
    (typeof client.devices)[':instance_id']['ips'][':id']['customdata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':instance_id'].ips[':id'].customdata.$get(args, options),
  )
}

export async function postEmails(
  args: InferRequestType<typeof client.emails.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emails.$post(args, options))
}

export async function getEmailsId(
  args: InferRequestType<(typeof client.emails)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emails[':id'].$get(args, options))
}

export async function putEmailsId(
  args: InferRequestType<(typeof client.emails)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emails[':id'].$put(args, options))
}

export async function deleteEmailsId(
  args: InferRequestType<(typeof client.emails)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emails[':id'].$delete(args, options))
}

export async function getEvents(
  args: InferRequestType<typeof client.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$get(args, options))
}

export async function getEventsId(
  args: InferRequestType<(typeof client.events)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':id'].$get(args, options))
}

export async function getFacilities(
  args: InferRequestType<typeof client.facilities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.facilities.$get(args, options))
}

export async function getHardwareReservationsId(
  args: InferRequestType<(typeof client)['hardware-reservations'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['hardware-reservations'][':id'].$get(args, options))
}

export async function postHardwareReservationsIdActivate(
  args: InferRequestType<(typeof client)['hardware-reservations'][':id']['activate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['hardware-reservations'][':id'].activate.$post(args, options))
}

export async function postHardwareReservationsIdMove(
  args: InferRequestType<(typeof client)['hardware-reservations'][':id']['move']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['hardware-reservations'][':id'].move.$post(args, options))
}

export async function getIncidents(
  args: InferRequestType<typeof client.incidents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.incidents.$get(args, options))
}

export async function getInvitations(
  args: InferRequestType<typeof client.invitations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitations.$get(args, options))
}

export async function getInvitationsId(
  args: InferRequestType<(typeof client.invitations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitations[':id'].$get(args, options))
}

export async function putInvitationsId(
  args: InferRequestType<(typeof client.invitations)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitations[':id'].$put(args, options))
}

export async function deleteInvitationsId(
  args: InferRequestType<(typeof client.invitations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitations[':id'].$delete(args, options))
}

export async function getInvoicesId(
  args: InferRequestType<(typeof client.invoices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':id'].$get(args, options))
}

export async function getIpsId(
  args: InferRequestType<(typeof client.ips)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips[':id'].$get(args, options))
}

export async function deleteIpsId(
  args: InferRequestType<(typeof client.ips)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips[':id'].$delete(args, options))
}

export async function patchIpsId(
  args: InferRequestType<(typeof client.ips)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips[':id'].$patch(args, options))
}

export async function getIpsIdAvailable(
  args: InferRequestType<(typeof client.ips)[':id']['available']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips[':id'].available.$get(args, options))
}

export async function getIpsIdCustomdata(
  args: InferRequestType<(typeof client.ips)[':id']['customdata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ips[':id'].customdata.$get(args, options))
}

export async function getLicensesId(
  args: InferRequestType<(typeof client.licenses)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.licenses[':id'].$get(args, options))
}

export async function putLicensesId(
  args: InferRequestType<(typeof client.licenses)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.licenses[':id'].$put(args, options))
}

export async function deleteLicensesId(
  args: InferRequestType<(typeof client.licenses)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.licenses[':id'].$delete(args, options))
}

export async function getLocationsMetros(options?: ClientRequestOptions) {
  return await parseResponse(client.locations.metros.$get(undefined, options))
}

export async function getLocationsMetrosId(
  args: InferRequestType<(typeof client.locations.metros)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locations.metros[':id'].$get(args, options))
}

export async function getMarketSpotPrices(
  args: InferRequestType<typeof client.market.spot.prices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.market.spot.prices.$get(args, options))
}

export async function getMarketSpotPricesHistory(
  args: InferRequestType<typeof client.market.spot.prices.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.market.spot.prices.history.$get(args, options))
}

export async function getMarketSpotPricesMetros(
  args: InferRequestType<typeof client.market.spot.prices.metros.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.market.spot.prices.metros.$get(args, options))
}

export async function getMembershipsId(
  args: InferRequestType<(typeof client.memberships)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.memberships[':id'].$get(args, options))
}

export async function putMembershipsId(
  args: InferRequestType<(typeof client.memberships)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.memberships[':id'].$put(args, options))
}

export async function deleteMembershipsId(
  args: InferRequestType<(typeof client.memberships)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.memberships[':id'].$delete(args, options))
}

export async function getMetalGatewaysId(
  args: InferRequestType<(typeof client)['metal-gateways'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['metal-gateways'][':id'].$get(args, options))
}

export async function deleteMetalGatewaysId(
  args: InferRequestType<(typeof client)['metal-gateways'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['metal-gateways'][':id'].$delete(args, options))
}

export async function getMetalGatewaysIdBgpDynamicNeighbors(
  args: InferRequestType<(typeof client)['metal-gateways'][':id']['bgp-dynamic-neighbors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['metal-gateways'][':id']['bgp-dynamic-neighbors'].$get(args, options),
  )
}

export async function postMetalGatewaysIdBgpDynamicNeighbors(
  args: InferRequestType<
    (typeof client)['metal-gateways'][':id']['bgp-dynamic-neighbors']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['metal-gateways'][':id']['bgp-dynamic-neighbors'].$post(args, options),
  )
}

export async function getMetalGatewaysIdIps(
  args: InferRequestType<(typeof client)['metal-gateways'][':id']['ips']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['metal-gateways'][':id'].ips.$get(args, options))
}

export async function postMetalGatewaysIdIps(
  args: InferRequestType<(typeof client)['metal-gateways'][':id']['ips']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['metal-gateways'][':id'].ips.$post(args, options))
}

export async function getOperatingSystemVersions(options?: ClientRequestOptions) {
  return await parseResponse(client['operating-system-versions'].$get(undefined, options))
}

export async function getOperatingSystems(options?: ClientRequestOptions) {
  return await parseResponse(client['operating-systems'].$get(undefined, options))
}

export async function getOrganizations(
  args: InferRequestType<typeof client.organizations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.$get(args, options))
}

export async function postOrganizations(
  args: InferRequestType<typeof client.organizations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations.$post(args, options))
}

export async function getOrganizationsId(
  args: InferRequestType<(typeof client.organizations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].$get(args, options))
}

export async function putOrganizationsId(
  args: InferRequestType<(typeof client.organizations)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].$put(args, options))
}

export async function deleteOrganizationsId(
  args: InferRequestType<(typeof client.organizations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].$delete(args, options))
}

export async function getOrganizationsIdCapacity(
  args: InferRequestType<(typeof client.organizations)[':id']['capacity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].capacity.$get(args, options))
}

export async function getOrganizationsIdCapacityMetros(
  args: InferRequestType<(typeof client.organizations)[':id']['capacity']['metros']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].capacity.metros.$get(args, options))
}

export async function getOrganizationsIdCustomdata(
  args: InferRequestType<(typeof client.organizations)[':id']['customdata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].customdata.$get(args, options))
}

export async function getOrganizationsIdDevices(
  args: InferRequestType<(typeof client.organizations)[':id']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].devices.$get(args, options))
}

export async function getOrganizationsIdEvents(
  args: InferRequestType<(typeof client.organizations)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].events.$get(args, options))
}

export async function getOrganizationsIdFacilities(
  args: InferRequestType<(typeof client.organizations)[':id']['facilities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].facilities.$get(args, options))
}

export async function getOrganizationsIdFirmwareSets(
  args: InferRequestType<(typeof client.organizations)[':id']['firmware-sets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id']['firmware-sets'].$get(args, options))
}

export async function getOrganizationsIdInvitations(
  args: InferRequestType<(typeof client.organizations)[':id']['invitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].invitations.$get(args, options))
}

export async function postOrganizationsIdInvitations(
  args: InferRequestType<(typeof client.organizations)[':id']['invitations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].invitations.$post(args, options))
}

export async function getOrganizationsIdInvoices(
  args: InferRequestType<(typeof client.organizations)[':id']['invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].invoices.$get(args, options))
}

export async function getOrganizationsIdOperatingSystems(
  args: InferRequestType<(typeof client.organizations)[':id']['operating-systems']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id']['operating-systems'].$get(args, options))
}

export async function getOrganizationsIdPaymentMethods(
  args: InferRequestType<(typeof client.organizations)[':id']['payment-methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id']['payment-methods'].$get(args, options))
}

export async function postOrganizationsIdPaymentMethods(
  args: InferRequestType<(typeof client.organizations)[':id']['payment-methods']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id']['payment-methods'].$post(args, options))
}

export async function getOrganizationsIdPlans(
  args: InferRequestType<(typeof client.organizations)[':id']['plans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].plans.$get(args, options))
}

export async function getOrganizationsIdProjects(
  args: InferRequestType<(typeof client.organizations)[':id']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].projects.$get(args, options))
}

export async function postOrganizationsIdProjects(
  args: InferRequestType<(typeof client.organizations)[':id']['projects']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].projects.$post(args, options))
}

export async function getOrganizationsIdTransfers(
  args: InferRequestType<(typeof client.organizations)[':id']['transfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organizations[':id'].transfers.$get(args, options))
}

export async function getOrganizationsOrganizationIdConnections(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].connections.$get(args, options),
  )
}

export async function postOrganizationsOrganizationIdConnections(
  args: InferRequestType<(typeof client.organizations)[':organization_id']['connections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organizations[':organization_id'].connections.$post(args, options),
  )
}

export async function getPaymentMethodsId(
  args: InferRequestType<(typeof client)['payment-methods'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['payment-methods'][':id'].$get(args, options))
}

export async function putPaymentMethodsId(
  args: InferRequestType<(typeof client)['payment-methods'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['payment-methods'][':id'].$put(args, options))
}

export async function deletePaymentMethodsId(
  args: InferRequestType<(typeof client)['payment-methods'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['payment-methods'][':id'].$delete(args, options))
}

export async function getPlans(
  args: InferRequestType<typeof client.plans.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans.$get(args, options))
}

export async function getPortsId(
  args: InferRequestType<(typeof client.ports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ports[':id'].$get(args, options))
}

export async function postPortsIdAssign(
  args: InferRequestType<(typeof client.ports)[':id']['assign']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ports[':id'].assign.$post(args, options))
}

export async function postPortsIdBond(
  args: InferRequestType<(typeof client.ports)[':id']['bond']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ports[':id'].bond.$post(args, options))
}

export async function postPortsIdConvertLayer2(
  args: InferRequestType<(typeof client.ports)[':id']['convert']['layer-2']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ports[':id'].convert['layer-2'].$post(args, options))
}

export async function postPortsIdConvertLayer3(
  args: InferRequestType<(typeof client.ports)[':id']['convert']['layer-3']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ports[':id'].convert['layer-3'].$post(args, options))
}

export async function postPortsIdDisbond(
  args: InferRequestType<(typeof client.ports)[':id']['disbond']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ports[':id'].disbond.$post(args, options))
}

export async function postPortsIdNativeVlan(
  args: InferRequestType<(typeof client.ports)[':id']['native-vlan']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ports[':id']['native-vlan'].$post(args, options))
}

export async function deletePortsIdNativeVlan(
  args: InferRequestType<(typeof client.ports)[':id']['native-vlan']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ports[':id']['native-vlan'].$delete(args, options))
}

export async function postPortsIdUnassign(
  args: InferRequestType<(typeof client.ports)[':id']['unassign']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ports[':id'].unassign.$post(args, options))
}

export async function getPortsIdVlanAssignments(
  args: InferRequestType<(typeof client.ports)[':id']['vlan-assignments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ports[':id']['vlan-assignments'].$get(args, options))
}

export async function getPortsIdVlanAssignmentsAssignmentId(
  args: InferRequestType<
    (typeof client.ports)[':id']['vlan-assignments'][':assignment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ports[':id']['vlan-assignments'][':assignment_id'].$get(args, options),
  )
}

export async function getPortsIdVlanAssignmentsBatches(
  args: InferRequestType<(typeof client.ports)[':id']['vlan-assignments']['batches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ports[':id']['vlan-assignments'].batches.$get(args, options))
}

export async function postPortsIdVlanAssignmentsBatches(
  args: InferRequestType<(typeof client.ports)[':id']['vlan-assignments']['batches']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ports[':id']['vlan-assignments'].batches.$post(args, options))
}

export async function getPortsIdVlanAssignmentsBatchesBatchId(
  args: InferRequestType<
    (typeof client.ports)[':id']['vlan-assignments']['batches'][':batch_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ports[':id']['vlan-assignments'].batches[':batch_id'].$get(args, options),
  )
}

export async function getProjects(
  args: InferRequestType<typeof client.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.$get(args, options))
}

export async function postProjects(
  args: InferRequestType<typeof client.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.$post(args, options))
}

export async function getProjectsId(
  args: InferRequestType<(typeof client.projects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].$get(args, options))
}

export async function putProjectsId(
  args: InferRequestType<(typeof client.projects)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].$put(args, options))
}

export async function deleteProjectsId(
  args: InferRequestType<(typeof client.projects)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].$delete(args, options))
}

export async function getProjectsIdApiKeys(
  args: InferRequestType<(typeof client.projects)[':id']['api-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id']['api-keys'].$get(args, options))
}

export async function postProjectsIdApiKeys(
  args: InferRequestType<(typeof client.projects)[':id']['api-keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id']['api-keys'].$post(args, options))
}

export async function getProjectsIdBatches(
  args: InferRequestType<(typeof client.projects)[':id']['batches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].batches.$get(args, options))
}

export async function getProjectsIdBgpConfig(
  args: InferRequestType<(typeof client.projects)[':id']['bgp-config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id']['bgp-config'].$get(args, options))
}

export async function postProjectsIdBgpConfigs(
  args: InferRequestType<(typeof client.projects)[':id']['bgp-configs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id']['bgp-configs'].$post(args, options))
}

export async function getProjectsIdBgpSessions(
  args: InferRequestType<(typeof client.projects)[':id']['bgp']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].bgp.sessions.$get(args, options))
}

export async function getProjectsIdCustomdata(
  args: InferRequestType<(typeof client.projects)[':id']['customdata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].customdata.$get(args, options))
}

export async function getProjectsIdDevices(
  args: InferRequestType<(typeof client.projects)[':id']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].devices.$get(args, options))
}

export async function postProjectsIdDevices(
  args: InferRequestType<(typeof client.projects)[':id']['devices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].devices.$post(args, options))
}

export async function postProjectsIdDevicesBatch(
  args: InferRequestType<(typeof client.projects)[':id']['devices']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].devices.batch.$post(args, options))
}

export async function getProjectsIdEvents(
  args: InferRequestType<(typeof client.projects)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].events.$get(args, options))
}

export async function getProjectsIdFacilities(
  args: InferRequestType<(typeof client.projects)[':id']['facilities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].facilities.$get(args, options))
}

export async function getProjectsIdFirmwareSets(
  args: InferRequestType<(typeof client.projects)[':id']['firmware-sets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id']['firmware-sets'].$get(args, options))
}

export async function getProjectsIdGlobalBgpRanges(
  args: InferRequestType<(typeof client.projects)[':id']['global-bgp-ranges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id']['global-bgp-ranges'].$get(args, options))
}

export async function getProjectsIdHardwareReservations(
  args: InferRequestType<(typeof client.projects)[':id']['hardware-reservations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id']['hardware-reservations'].$get(args, options))
}

export async function getProjectsIdIps(
  args: InferRequestType<(typeof client.projects)[':id']['ips']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].ips.$get(args, options))
}

export async function postProjectsIdIps(
  args: InferRequestType<(typeof client.projects)[':id']['ips']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].ips.$post(args, options))
}

export async function getProjectsIdLicenses(
  args: InferRequestType<(typeof client.projects)[':id']['licenses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].licenses.$get(args, options))
}

export async function postProjectsIdLicenses(
  args: InferRequestType<(typeof client.projects)[':id']['licenses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].licenses.$post(args, options))
}

export async function getProjectsIdPlans(
  args: InferRequestType<(typeof client.projects)[':id']['plans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].plans.$get(args, options))
}

export async function getProjectsIdSpotMarketRequests(
  args: InferRequestType<(typeof client.projects)[':id']['spot-market-requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id']['spot-market-requests'].$get(args, options))
}

export async function postProjectsIdSpotMarketRequests(
  args: InferRequestType<(typeof client.projects)[':id']['spot-market-requests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id']['spot-market-requests'].$post(args, options))
}

export async function getProjectsIdSshKeys(
  args: InferRequestType<(typeof client.projects)[':id']['ssh-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id']['ssh-keys'].$get(args, options))
}

export async function postProjectsIdSshKeys(
  args: InferRequestType<(typeof client.projects)[':id']['ssh-keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id']['ssh-keys'].$post(args, options))
}

export async function postProjectsIdTransfers(
  args: InferRequestType<(typeof client.projects)[':id']['transfers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].transfers.$post(args, options))
}

export async function getProjectsIdUsages(
  args: InferRequestType<(typeof client.projects)[':id']['usages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].usages.$get(args, options))
}

export async function getProjectsIdVirtualNetworks(
  args: InferRequestType<(typeof client.projects)[':id']['virtual-networks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id']['virtual-networks'].$get(args, options))
}

export async function postProjectsIdVirtualNetworks(
  args: InferRequestType<(typeof client.projects)[':id']['virtual-networks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id']['virtual-networks'].$post(args, options))
}

export async function getProjectsIdVrfs(
  args: InferRequestType<(typeof client.projects)[':id']['vrfs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].vrfs.$get(args, options))
}

export async function postProjectsIdVrfs(
  args: InferRequestType<(typeof client.projects)[':id']['vrfs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].vrfs.$post(args, options))
}

export async function getProjectsProjectIdConnections(
  args: InferRequestType<(typeof client.projects)[':project_id']['connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].connections.$get(args, options))
}

export async function postProjectsProjectIdConnections(
  args: InferRequestType<(typeof client.projects)[':project_id']['connections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].connections.$post(args, options))
}

export async function getProjectsProjectIdInvitations(
  args: InferRequestType<(typeof client.projects)[':project_id']['invitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].invitations.$get(args, options))
}

export async function postProjectsProjectIdInvitations(
  args: InferRequestType<(typeof client.projects)[':project_id']['invitations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].invitations.$post(args, options))
}

export async function getProjectsProjectIdIpsIdCustomdata(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['ips'][':id']['customdata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id'].ips[':id'].customdata.$get(args, options),
  )
}

export async function getProjectsProjectIdMemberships(
  args: InferRequestType<(typeof client.projects)[':project_id']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].memberships.$get(args, options))
}

export async function getProjectsProjectIdMetalGateways(
  args: InferRequestType<(typeof client.projects)[':project_id']['metal-gateways']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id']['metal-gateways'].$get(args, options))
}

export async function postProjectsProjectIdMetalGateways(
  args: InferRequestType<(typeof client.projects)[':project_id']['metal-gateways']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id']['metal-gateways'].$post(args, options))
}

export async function getProjectsProjectIdSelfServiceReservations(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['self-service']['reservations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id']['self-service'].reservations.$get(args, options),
  )
}

export async function postProjectsProjectIdSelfServiceReservations(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['self-service']['reservations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id']['self-service'].reservations.$post(args, options),
  )
}

export async function getProjectsProjectIdSelfServiceReservationsId(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['self-service']['reservations'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':project_id']['self-service'].reservations[':id'].$get(args, options),
  )
}

export async function postResetPassword(
  args: InferRequestType<(typeof client)['reset-password']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['reset-password'].$post(args, options))
}

export async function deleteResetPassword(options?: ClientRequestOptions) {
  return await parseResponse(client['reset-password'].$delete(undefined, options))
}

export async function getRoutesId(
  args: InferRequestType<(typeof client.routes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routes[':id'].$get(args, options))
}

export async function putRoutesId(
  args: InferRequestType<(typeof client.routes)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routes[':id'].$put(args, options))
}

export async function deleteRoutesId(
  args: InferRequestType<(typeof client.routes)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routes[':id'].$delete(args, options))
}

export async function getRoutesIdEvents(
  args: InferRequestType<(typeof client.routes)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routes[':id'].events.$get(args, options))
}

export async function getSpotMarketRequestsId(
  args: InferRequestType<(typeof client)['spot-market-requests'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['spot-market-requests'][':id'].$get(args, options))
}

export async function deleteSpotMarketRequestsId(
  args: InferRequestType<(typeof client)['spot-market-requests'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['spot-market-requests'][':id'].$delete(args, options))
}

export async function getSshKeys(
  args: InferRequestType<(typeof client)['ssh-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ssh-keys'].$get(args, options))
}

export async function postSshKeys(
  args: InferRequestType<(typeof client)['ssh-keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ssh-keys'].$post(args, options))
}

export async function getSshKeysId(
  args: InferRequestType<(typeof client)['ssh-keys'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ssh-keys'][':id'].$get(args, options))
}

export async function putSshKeysId(
  args: InferRequestType<(typeof client)['ssh-keys'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ssh-keys'][':id'].$put(args, options))
}

export async function deleteSshKeysId(
  args: InferRequestType<(typeof client)['ssh-keys'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ssh-keys'][':id'].$delete(args, options))
}

export async function postSupportRequests(
  args: InferRequestType<(typeof client)['support-requests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['support-requests'].$post(args, options))
}

export async function getTransfersId(
  args: InferRequestType<(typeof client.transfers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfers[':id'].$get(args, options))
}

export async function putTransfersId(
  args: InferRequestType<(typeof client.transfers)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfers[':id'].$put(args, options))
}

export async function deleteTransfersId(
  args: InferRequestType<(typeof client.transfers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transfers[':id'].$delete(args, options))
}

export async function getUser(
  args: InferRequestType<typeof client.user.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.$get(args, options))
}

export async function putUser(
  args: InferRequestType<typeof client.user.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.$put(args, options))
}

export async function getUserApiKeys(
  args: InferRequestType<(typeof client.user)['api-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user['api-keys'].$get(args, options))
}

export async function postUserApiKeys(
  args: InferRequestType<(typeof client.user)['api-keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user['api-keys'].$post(args, options))
}

export async function deleteUserApiKeysId(
  args: InferRequestType<(typeof client.user)['api-keys'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user['api-keys'][':id'].$delete(args, options))
}

export async function postUserOtpApp(options?: ClientRequestOptions) {
  return await parseResponse(client.user.otp.app.$post(undefined, options))
}

export async function deleteUserOtpApp(options?: ClientRequestOptions) {
  return await parseResponse(client.user.otp.app.$delete(undefined, options))
}

export async function getUserOtpRecoveryCodes(options?: ClientRequestOptions) {
  return await parseResponse(client.user.otp['recovery-codes'].$get(undefined, options))
}

export async function postUserOtpRecoveryCodes(options?: ClientRequestOptions) {
  return await parseResponse(client.user.otp['recovery-codes'].$post(undefined, options))
}

export async function postUserOtpSms(options?: ClientRequestOptions) {
  return await parseResponse(client.user.otp.sms.$post(undefined, options))
}

export async function deleteUserOtpSms(options?: ClientRequestOptions) {
  return await parseResponse(client.user.otp.sms.$delete(undefined, options))
}

export async function postUserOtpSmsReceive(options?: ClientRequestOptions) {
  return await parseResponse(client.user.otp.sms.receive.$post(undefined, options))
}

export async function postUserOtpVerifyOtp(
  args: InferRequestType<(typeof client.user.otp.verify)[':otp']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.otp.verify[':otp'].$post(args, options))
}

export async function postUserdataValidate(
  args: InferRequestType<typeof client.userdata.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.userdata.validate.$post(args, options))
}

export async function getUsers(
  args: InferRequestType<typeof client.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$get(args, options))
}

export async function postUsers(
  args: InferRequestType<typeof client.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$post(args, options))
}

export async function getUsersId(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].$get(args, options))
}

export async function getUsersIdCustomdata(
  args: InferRequestType<(typeof client.users)[':id']['customdata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].customdata.$get(args, options))
}

export async function putVerifyEmail(
  args: InferRequestType<(typeof client)['verify-email']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['verify-email'].$put(args, options))
}

export async function postVerifyEmail(
  args: InferRequestType<(typeof client)['verify-email']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['verify-email'].$post(args, options))
}

export async function getVirtualCircuitsIdEvents(
  args: InferRequestType<(typeof client)['virtual-circuits'][':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['virtual-circuits'][':id'].events.$get(args, options))
}

export async function getVirtualCircuitsId(
  args: InferRequestType<(typeof client)['virtual-circuits'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['virtual-circuits'][':id'].$get(args, options))
}

export async function putVirtualCircuitsId(
  args: InferRequestType<(typeof client)['virtual-circuits'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['virtual-circuits'][':id'].$put(args, options))
}

export async function deleteVirtualCircuitsId(
  args: InferRequestType<(typeof client)['virtual-circuits'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['virtual-circuits'][':id'].$delete(args, options))
}

export async function getVirtualNetworksId(
  args: InferRequestType<(typeof client)['virtual-networks'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['virtual-networks'][':id'].$get(args, options))
}

export async function deleteVirtualNetworksId(
  args: InferRequestType<(typeof client)['virtual-networks'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['virtual-networks'][':id'].$delete(args, options))
}

export async function getVrfsId(
  args: InferRequestType<(typeof client.vrfs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vrfs[':id'].$get(args, options))
}

export async function putVrfsId(
  args: InferRequestType<(typeof client.vrfs)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vrfs[':id'].$put(args, options))
}

export async function deleteVrfsId(
  args: InferRequestType<(typeof client.vrfs)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vrfs[':id'].$delete(args, options))
}

export async function getVrfsIdIps(
  args: InferRequestType<(typeof client.vrfs)[':id']['ips']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vrfs[':id'].ips.$get(args, options))
}

export async function getVrfsVrfIdIpsId(
  args: InferRequestType<(typeof client.vrfs)[':vrf_id']['ips'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vrfs[':vrf_id'].ips[':id'].$get(args, options))
}

export async function getVrfsIdRoutes(
  args: InferRequestType<(typeof client.vrfs)[':id']['routes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vrfs[':id'].routes.$get(args, options))
}

export async function postVrfsIdRoutes(
  args: InferRequestType<(typeof client.vrfs)[':id']['routes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vrfs[':id'].routes.$post(args, options))
}
