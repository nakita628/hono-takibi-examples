import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getChargers(
  args: InferRequestType<typeof client.chargers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chargers.$get(args, options))
}

export async function getChargersChargerId(
  args: InferRequestType<(typeof client.chargers)[':chargerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chargers[':chargerId'].$get(args, options))
}

export async function postChargersChargerIdCharging(
  args: InferRequestType<(typeof client.chargers)[':chargerId']['charging']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chargers[':chargerId'].charging.$post(args, options))
}

export async function getChargingLocations(options?: ClientRequestOptions) {
  return await parseResponse(client['charging-locations'].$get(undefined, options))
}

export async function postChargingLocations(
  args: InferRequestType<(typeof client)['charging-locations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['charging-locations'].$post(args, options))
}

export async function getChargingLocationsChargingLocationId(
  args: InferRequestType<(typeof client)['charging-locations'][':chargingLocationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['charging-locations'][':chargingLocationId'].$get(args, options),
  )
}

export async function putChargingLocationsChargingLocationId(
  args: InferRequestType<(typeof client)['charging-locations'][':chargingLocationId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['charging-locations'][':chargingLocationId'].$put(args, options),
  )
}

export async function deleteChargingLocationsChargingLocationId(
  args: InferRequestType<(typeof client)['charging-locations'][':chargingLocationId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['charging-locations'][':chargingLocationId'].$delete(args, options),
  )
}

export async function getHealthReady(options?: ClientRequestOptions) {
  return await parseResponse(client.health.ready.$get(undefined, options))
}

export async function getHealthVendors(options?: ClientRequestOptions) {
  return await parseResponse(client.health.vendors.$get(undefined, options))
}

export async function getMe(options?: ClientRequestOptions) {
  return await parseResponse(client.me.$get(undefined, options))
}

export async function deleteMeVendorsVendor(
  args: InferRequestType<(typeof client.me.vendors)[':vendor']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.vendors[':vendor'].$delete(args, options))
}

export async function getStatisticsCharging(
  args: InferRequestType<typeof client.statistics.charging.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.statistics.charging.$get(args, options))
}

export async function deleteUsersUserId(
  args: InferRequestType<(typeof client.users)[':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].$delete(args, options))
}

export async function deleteUsersUserIdAuthorization(
  args: InferRequestType<(typeof client.users)[':userId']['authorization']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].authorization.$delete(args, options))
}

export async function postUsersUserIdLink(
  args: InferRequestType<(typeof client.users)[':userId']['link']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].link.$post(args, options))
}

export async function getVehicles(
  args: InferRequestType<typeof client.vehicles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vehicles.$get(args, options))
}

export async function getVehiclesVehicleId(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vehicles[':vehicleId'].$get(args, options))
}

export async function getVehiclesVehicleIdChargeState(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['charge-state']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vehicles[':vehicleId']['charge-state'].$get(args, options))
}

export async function postVehiclesVehicleIdCharging(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['charging']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vehicles[':vehicleId'].charging.$post(args, options))
}

export async function getVehiclesVehicleIdInformation(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['information']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vehicles[':vehicleId'].information.$get(args, options))
}

export async function getVehiclesVehicleIdLocation(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['location']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vehicles[':vehicleId'].location.$get(args, options))
}

export async function getVehiclesVehicleIdOdometer(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['odometer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vehicles[':vehicleId'].odometer.$get(args, options))
}

export async function getVehiclesVehicleIdSmartChargingPolicy(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['smart-charging-policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vehicles[':vehicleId']['smart-charging-policy'].$get(args, options),
  )
}

export async function putVehiclesVehicleIdSmartChargingPolicy(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['smart-charging-policy']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vehicles[':vehicleId']['smart-charging-policy'].$put(args, options),
  )
}

export async function postVehiclesVehicleIdWatch(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['watch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vehicles[':vehicleId'].watch.$post(args, options))
}

export async function putWebhooksFirehose(
  args: InferRequestType<typeof client.webhooks.firehose.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.firehose.$put(args, options))
}

export async function postWebhooksFirehoseTest(options?: ClientRequestOptions) {
  return await parseResponse(client.webhooks.firehose.test.$post(undefined, options))
}
