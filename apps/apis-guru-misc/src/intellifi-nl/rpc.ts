import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAuthinfo(options?: ClientRequestOptions) {
  return await parseResponse(client.authinfo.$get(undefined, options))
}

export async function getBlobs(
  args: InferRequestType<typeof client.blobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blobs.$get(args, options))
}

export async function postBlobs(
  args: InferRequestType<typeof client.blobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blobs.$post(args, options))
}

export async function getBlobsId(
  args: InferRequestType<(typeof client.blobs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blobs[':id'].$get(args, options))
}

export async function deleteBlobsId(
  args: InferRequestType<(typeof client.blobs)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blobs[':id'].$delete(args, options))
}

export async function getBlobsIdDownloadFilename(
  args: InferRequestType<(typeof client.blobs)[':id']['download'][':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blobs[':id'].download[':filename'].$get(args, options))
}

export async function postBlobsIdUpload(
  args: InferRequestType<(typeof client.blobs)[':id']['upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blobs[':id'].upload.$post(args, options))
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

export async function getItems(
  args: InferRequestType<typeof client.items.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.items.$get(args, options))
}

export async function postItems(
  args: InferRequestType<typeof client.items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.items.$post(args, options))
}

export async function getItemsId(
  args: InferRequestType<(typeof client.items)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.items[':id'].$get(args, options))
}

export async function putItemsId(
  args: InferRequestType<(typeof client.items)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.items[':id'].$put(args, options))
}

export async function deleteItemsId(
  args: InferRequestType<(typeof client.items)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.items[':id'].$delete(args, options))
}

export async function getKeys(
  args: InferRequestType<typeof client.keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys.$get(args, options))
}

export async function postKeys(
  args: InferRequestType<typeof client.keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys.$post(args, options))
}

export async function getKeysId(
  args: InferRequestType<(typeof client.keys)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':id'].$get(args, options))
}

export async function putKeysId(
  args: InferRequestType<(typeof client.keys)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':id'].$put(args, options))
}

export async function deleteKeysId(
  args: InferRequestType<(typeof client.keys)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':id'].$delete(args, options))
}

export async function getKvpairs(
  args: InferRequestType<typeof client.kvpairs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kvpairs.$get(args, options))
}

export async function postKvpairs(
  args: InferRequestType<typeof client.kvpairs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kvpairs.$post(args, options))
}

export async function getKvpairsId(
  args: InferRequestType<(typeof client.kvpairs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kvpairs[':id'].$get(args, options))
}

export async function putKvpairsId(
  args: InferRequestType<(typeof client.kvpairs)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kvpairs[':id'].$put(args, options))
}

export async function deleteKvpairsId(
  args: InferRequestType<(typeof client.kvpairs)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kvpairs[':id'].$delete(args, options))
}

export async function getLocationrules(
  args: InferRequestType<typeof client.locationrules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locationrules.$get(args, options))
}

export async function postLocationrules(
  args: InferRequestType<typeof client.locationrules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locationrules.$post(args, options))
}

export async function getLocationrulesId(
  args: InferRequestType<(typeof client.locationrules)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locationrules[':id'].$get(args, options))
}

export async function putLocationrulesId(
  args: InferRequestType<(typeof client.locationrules)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locationrules[':id'].$put(args, options))
}

export async function deleteLocationrulesId(
  args: InferRequestType<(typeof client.locationrules)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locationrules[':id'].$delete(args, options))
}

export async function getLocations(
  args: InferRequestType<typeof client.locations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locations.$get(args, options))
}

export async function postLocations(
  args: InferRequestType<typeof client.locations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locations.$post(args, options))
}

export async function getLocationsId(
  args: InferRequestType<(typeof client.locations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locations[':id'].$get(args, options))
}

export async function putLocationsId(
  args: InferRequestType<(typeof client.locations)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locations[':id'].$put(args, options))
}

export async function deleteLocationsId(
  args: InferRequestType<(typeof client.locations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locations[':id'].$delete(args, options))
}

export async function getPresences(
  args: InferRequestType<typeof client.presences.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.presences.$get(args, options))
}

export async function getPresencesId(
  args: InferRequestType<(typeof client.presences)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.presences[':id'].$get(args, options))
}

export async function getServices(
  args: InferRequestType<typeof client.services.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.$get(args, options))
}

export async function getServicesId(
  args: InferRequestType<(typeof client.services)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':id'].$get(args, options))
}

export async function putServicesId(
  args: InferRequestType<(typeof client.services)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':id'].$put(args, options))
}

export async function getSetsItemlists(
  args: InferRequestType<typeof client.sets.itemlists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sets.itemlists.$get(args, options))
}

export async function postSetsItemlists(
  args: InferRequestType<typeof client.sets.itemlists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sets.itemlists.$post(args, options))
}

export async function getSetsItemlistsId(
  args: InferRequestType<(typeof client.sets.itemlists)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sets.itemlists[':id'].$get(args, options))
}

export async function putSetsItemlistsId(
  args: InferRequestType<(typeof client.sets.itemlists)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sets.itemlists[':id'].$put(args, options))
}

export async function deleteSetsItemlistsId(
  args: InferRequestType<(typeof client.sets.itemlists)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sets.itemlists[':id'].$delete(args, options))
}

export async function getSetsItemlistsIdIds(
  args: InferRequestType<(typeof client.sets.itemlists)[':id']['ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sets.itemlists[':id'].ids.$get(args, options))
}

export async function postSetsItemlistsIdIds(
  args: InferRequestType<(typeof client.sets.itemlists)[':id']['ids']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sets.itemlists[':id'].ids.$post(args, options))
}

export async function deleteSetsItemlistsIdIdsItemId(
  args: InferRequestType<(typeof client.sets.itemlists)[':id']['ids'][':itemId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sets.itemlists[':id'].ids[':itemId'].$delete(args, options))
}

export async function getSetsSpotlists(
  args: InferRequestType<typeof client.sets.spotlists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sets.spotlists.$get(args, options))
}

export async function postSetsSpotlists(
  args: InferRequestType<typeof client.sets.spotlists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sets.spotlists.$post(args, options))
}

export async function getSetsSpotlistsId(
  args: InferRequestType<(typeof client.sets.spotlists)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sets.spotlists[':id'].$get(args, options))
}

export async function putSetsSpotlistsId(
  args: InferRequestType<(typeof client.sets.spotlists)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sets.spotlists[':id'].$put(args, options))
}

export async function deleteSetsSpotlistsId(
  args: InferRequestType<(typeof client.sets.spotlists)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sets.spotlists[':id'].$delete(args, options))
}

export async function getSetsSpotlistsIdIds(
  args: InferRequestType<(typeof client.sets.spotlists)[':id']['ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sets.spotlists[':id'].ids.$get(args, options))
}

export async function postSetsSpotlistsIdIds(
  args: InferRequestType<(typeof client.sets.spotlists)[':id']['ids']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sets.spotlists[':id'].ids.$post(args, options))
}

export async function deleteSetsSpotlistsIdIdsItemId(
  args: InferRequestType<(typeof client.sets.spotlists)[':id']['ids'][':itemId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sets.spotlists[':id'].ids[':itemId'].$delete(args, options))
}

export async function getSpots(
  args: InferRequestType<typeof client.spots.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spots.$get(args, options))
}

export async function getSpotsId(
  args: InferRequestType<(typeof client.spots)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spots[':id'].$get(args, options))
}

export async function putSpotsId(
  args: InferRequestType<(typeof client.spots)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spots[':id'].$put(args, options))
}

export async function getSpotsIdSets(
  args: InferRequestType<(typeof client.spots)[':id']['sets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spots[':id'].sets.$get(args, options))
}

export async function postSpotsIdSets(
  args: InferRequestType<(typeof client.spots)[':id']['sets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spots[':id'].sets.$post(args, options))
}

export async function getSpotsIdSetsSetId(
  args: InferRequestType<(typeof client.spots)[':id']['sets'][':setId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spots[':id'].sets[':setId'].$get(args, options))
}

export async function putSpotsIdSetsSetId(
  args: InferRequestType<(typeof client.spots)[':id']['sets'][':setId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spots[':id'].sets[':setId'].$put(args, options))
}

export async function getSpotsets(options?: ClientRequestOptions) {
  return await parseResponse(client.spotsets.$get(undefined, options))
}

export async function postSpotsets(
  args: InferRequestType<typeof client.spotsets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spotsets.$post(args, options))
}

export async function getSpotsetsId(
  args: InferRequestType<(typeof client.spotsets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spotsets[':id'].$get(args, options))
}

export async function putSpotsetsId(
  args: InferRequestType<(typeof client.spotsets)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.spotsets[':id'].$put(args, options))
}

export async function getSubscriptions(
  args: InferRequestType<typeof client.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions.$get(args, options))
}

export async function postSubscriptions(
  args: InferRequestType<typeof client.subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions.$post(args, options))
}

export async function getSubscriptionsId(
  args: InferRequestType<(typeof client.subscriptions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':id'].$get(args, options))
}

export async function putSubscriptionsId(
  args: InferRequestType<(typeof client.subscriptions)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':id'].$put(args, options))
}

export async function deleteSubscriptionsId(
  args: InferRequestType<(typeof client.subscriptions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':id'].$delete(args, options))
}

export async function getSubscriptionsIdEvents(
  args: InferRequestType<(typeof client.subscriptions)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':id'].events.$get(args, options))
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

export async function putUsersId(
  args: InferRequestType<(typeof client.users)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].$put(args, options))
}

export async function deleteUsersId(
  args: InferRequestType<(typeof client.users)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].$delete(args, options))
}
