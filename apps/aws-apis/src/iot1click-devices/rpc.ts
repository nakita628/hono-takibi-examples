import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putClaimsClaimCode(
  args: InferRequestType<(typeof client.claims)[':claimCode']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.claims[':claimCode'].$put(args, options))
}

export async function getDevicesDeviceId(
  args: InferRequestType<(typeof client.devices)[':deviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':deviceId'].$get(args, options))
}

export async function putDevicesDeviceIdFinalizeClaim(
  args: InferRequestType<(typeof client.devices)[':deviceId']['finalize-claim']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':deviceId']['finalize-claim'].$put(args, options))
}

export async function getDevicesDeviceIdMethods(
  args: InferRequestType<(typeof client.devices)[':deviceId']['methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':deviceId'].methods.$get(args, options))
}

export async function postDevicesDeviceIdMethods(
  args: InferRequestType<(typeof client.devices)[':deviceId']['methods']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':deviceId'].methods.$post(args, options))
}

export async function putDevicesDeviceIdInitiateClaim(
  args: InferRequestType<(typeof client.devices)[':deviceId']['initiate-claim']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':deviceId']['initiate-claim'].$put(args, options))
}

export async function getDevicesDeviceIdEventsFromTimeStampToTimeStamp(
  args: InferRequestType<
    (typeof client.devices)[':deviceId']['events#fromTimeStamp&toTimeStamp']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.devices[':deviceId']['events#fromTimeStamp&toTimeStamp'].$get(args, options),
  )
}

export async function getDevices(
  args: InferRequestType<typeof client.devices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices.$get(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resource-arn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resource-arn'].$post(args, options))
}

export async function putDevicesDeviceIdUnclaim(
  args: InferRequestType<(typeof client.devices)[':deviceId']['unclaim']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':deviceId'].unclaim.$put(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resource-arn#tagKeys'].$delete(args, options))
}

export async function putDevicesDeviceIdState(
  args: InferRequestType<(typeof client.devices)[':deviceId']['state']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices[':deviceId'].state.$put(args, options))
}
