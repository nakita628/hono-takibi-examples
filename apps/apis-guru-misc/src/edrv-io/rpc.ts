import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Chargestations(
  args: InferRequestType<typeof client.v1.chargestations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.chargestations.$get(args, options))
}

export async function postV1Chargestations(
  args: InferRequestType<typeof client.v1.chargestations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.chargestations.$post(args, options))
}

export async function getV1ChargestationsId(
  args: InferRequestType<(typeof client.v1.chargestations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.chargestations[':id'].$get(args, options))
}

export async function deleteV1ChargestationsId(
  args: InferRequestType<(typeof client.v1.chargestations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.chargestations[':id'].$delete(args, options))
}

export async function patchV1ChargestationsId(
  args: InferRequestType<(typeof client.v1.chargestations)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.chargestations[':id'].$patch(args, options))
}

export async function getV1ChargestationsIdConnectors(
  args: InferRequestType<(typeof client.v1.chargestations)[':id']['connectors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.chargestations[':id'].connectors.$get(args, options))
}

export async function getV1Commands(
  args: InferRequestType<typeof client.v1.commands.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commands.$get(args, options))
}

export async function postV1CommandsCancelreservation(
  args: InferRequestType<typeof client.v1.commands.cancelreservation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commands.cancelreservation.$post(args, options))
}

export async function postV1CommandsChargingschedule(
  args: InferRequestType<typeof client.v1.commands.chargingschedule.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commands.chargingschedule.$post(args, options))
}

export async function deleteV1CommandsChargingschedule(
  args: InferRequestType<typeof client.v1.commands.chargingschedule.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commands.chargingschedule.$delete(args, options))
}

export async function postV1CommandsRemotestart(
  args: InferRequestType<typeof client.v1.commands.remotestart.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commands.remotestart.$post(args, options))
}

export async function postV1CommandsRemotestop(
  args: InferRequestType<typeof client.v1.commands.remotestop.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commands.remotestop.$post(args, options))
}

export async function postV1CommandsReserve(
  args: InferRequestType<typeof client.v1.commands.reserve.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commands.reserve.$post(args, options))
}

export async function postV1CommandsReset(
  args: InferRequestType<typeof client.v1.commands.reset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commands.reset.$post(args, options))
}

export async function postV1CommandsUnlockconnector(
  args: InferRequestType<typeof client.v1.commands.unlockconnector.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commands.unlockconnector.$post(args, options))
}

export async function getV1CommandsIdVariables(
  args: InferRequestType<(typeof client.v1.commands)[':id']['variables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commands[':id'].variables.$get(args, options))
}

export async function patchV1CommandsIdVariables(
  args: InferRequestType<(typeof client.v1.commands)[':id']['variables']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.commands[':id'].variables.$patch(args, options))
}

export async function getV1Configurations(
  args: InferRequestType<typeof client.v1.configurations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configurations.$get(args, options))
}

export async function postV1Configurations(
  args: InferRequestType<typeof client.v1.configurations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configurations.$post(args, options))
}

export async function getV1ConfigurationsId(
  args: InferRequestType<(typeof client.v1.configurations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configurations[':id'].$get(args, options))
}

export async function getV1Connectors(
  args: InferRequestType<typeof client.v1.connectors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connectors.$get(args, options))
}

export async function postV1Connectors(
  args: InferRequestType<typeof client.v1.connectors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connectors.$post(args, options))
}

export async function getV1ConnectorsId(
  args: InferRequestType<(typeof client.v1.connectors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connectors[':id'].$get(args, options))
}

export async function deleteV1ConnectorsId(
  args: InferRequestType<(typeof client.v1.connectors)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connectors[':id'].$delete(args, options))
}

export async function patchV1ConnectorsId(
  args: InferRequestType<(typeof client.v1.connectors)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connectors[':id'].$patch(args, options))
}

export async function getV1Drivers(
  args: InferRequestType<typeof client.v1.drivers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.drivers.$get(args, options))
}

export async function postV1Drivers(
  args: InferRequestType<typeof client.v1.drivers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.drivers.$post(args, options))
}

export async function getV1DriversId(
  args: InferRequestType<(typeof client.v1.drivers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.drivers[':id'].$get(args, options))
}

export async function deleteV1DriversId(
  args: InferRequestType<(typeof client.v1.drivers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.drivers[':id'].$delete(args, options))
}

export async function patchV1DriversId(
  args: InferRequestType<(typeof client.v1.drivers)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.drivers[':id'].$patch(args, options))
}

export async function getV1LocationId(
  args: InferRequestType<(typeof client.v1.location)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.location[':id'].$get(args, options))
}

export async function deleteV1LocationId(
  args: InferRequestType<(typeof client.v1.location)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.location[':id'].$delete(args, options))
}

export async function patchV1LocationId(
  args: InferRequestType<(typeof client.v1.location)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.location[':id'].$patch(args, options))
}

export async function getV1Locations(
  args: InferRequestType<typeof client.v1.locations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.locations.$get(args, options))
}

export async function postV1Locations(
  args: InferRequestType<typeof client.v1.locations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.locations.$post(args, options))
}

export async function getV1Organizations(
  args: InferRequestType<typeof client.v1.organizations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations.$get(args, options))
}

export async function getV1OrganizationsId(
  args: InferRequestType<(typeof client.v1.organizations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations[':id'].$get(args, options))
}

export async function patchV1OrganizationsId(
  args: InferRequestType<(typeof client.v1.organizations)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations[':id'].$patch(args, options))
}

export async function getV1Realtime(
  args: InferRequestType<typeof client.v1.realtime.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.realtime.$get(args, options))
}

export async function getV1Reservations(
  args: InferRequestType<typeof client.v1.reservations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reservations.$get(args, options))
}

export async function getV1ReservationsId(
  args: InferRequestType<(typeof client.v1.reservations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reservations[':id'].$get(args, options))
}

export async function patchV1ReservationsId(
  args: InferRequestType<(typeof client.v1.reservations)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reservations[':id'].$patch(args, options))
}

export async function getV1Tokens(
  args: InferRequestType<typeof client.v1.tokens.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tokens.$get(args, options))
}

export async function postV1Tokens(
  args: InferRequestType<typeof client.v1.tokens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tokens.$post(args, options))
}

export async function getV1TokensId(
  args: InferRequestType<(typeof client.v1.tokens)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tokens[':id'].$get(args, options))
}

export async function deleteV1TokensId(
  args: InferRequestType<(typeof client.v1.tokens)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tokens[':id'].$delete(args, options))
}

export async function patchV1TokensId(
  args: InferRequestType<(typeof client.v1.tokens)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tokens[':id'].$patch(args, options))
}

export async function getV1Transactions(
  args: InferRequestType<typeof client.v1.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.transactions.$get(args, options))
}

export async function getV1TransactionsId(
  args: InferRequestType<(typeof client.v1.transactions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.transactions[':id'].$get(args, options))
}

export async function getV1TransactionsIdCost(
  args: InferRequestType<(typeof client.v1.transactions)[':id']['cost']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.transactions[':id'].cost.$get(args, options))
}

export async function getV1Vehicles(
  args: InferRequestType<typeof client.v1.vehicles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.vehicles.$get(args, options))
}

export async function getV1VehiclesId(
  args: InferRequestType<(typeof client.v1.vehicles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.vehicles[':id'].$get(args, options))
}

export async function getV1VehiclesIdBattery(
  args: InferRequestType<(typeof client.v1.vehicles)[':id']['battery']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.vehicles[':id'].battery.$get(args, options))
}

export async function getV1VehiclesIdCharge(
  args: InferRequestType<(typeof client.v1.vehicles)[':id']['charge']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.vehicles[':id'].charge.$get(args, options))
}

export async function postV1VehiclesIdCharge(
  args: InferRequestType<(typeof client.v1.vehicles)[':id']['charge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.vehicles[':id'].charge.$post(args, options))
}

export async function getV1VehiclesIdLocation(
  args: InferRequestType<(typeof client.v1.vehicles)[':id']['location']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.vehicles[':id'].location.$get(args, options))
}

export async function getV1VehiclesIdOdometer(
  args: InferRequestType<(typeof client.v1.vehicles)[':id']['odometer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.vehicles[':id'].odometer.$get(args, options))
}
