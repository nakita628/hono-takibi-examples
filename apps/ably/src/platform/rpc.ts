import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getChannelsChannelIdMessages(
  args: InferRequestType<(typeof client.channels)[':channel_id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].messages.$get(args, options))
}

export async function postChannelsChannelIdMessages(
  args: InferRequestType<(typeof client.channels)[':channel_id']['messages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].messages.$post(args, options))
}

export async function getChannelsChannelIdPresence(
  args: InferRequestType<(typeof client.channels)[':channel_id']['presence']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].presence.$get(args, options))
}

export async function getChannelsChannelIdPresenceHistory(
  args: InferRequestType<(typeof client.channels)[':channel_id']['presence']['history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].presence.history.$get(args, options))
}

export async function getChannelsChannelId(
  args: InferRequestType<(typeof client.channels)[':channel_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels[':channel_id'].$get(args, options))
}

export async function getChannels(
  args: InferRequestType<typeof client.channels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.$get(args, options))
}

export async function getPushDeviceRegistrations(
  args: InferRequestType<typeof client.push.deviceRegistrations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.push.deviceRegistrations.$get(args, options))
}

export async function postPushDeviceRegistrations(
  args: InferRequestType<typeof client.push.deviceRegistrations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.push.deviceRegistrations.$post(args, options))
}

export async function deletePushDeviceRegistrations(
  args: InferRequestType<typeof client.push.deviceRegistrations.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.push.deviceRegistrations.$delete(args, options))
}

export async function getPushDeviceRegistrationsDeviceId(
  args: InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.push.deviceRegistrations[':device_id'].$get(args, options))
}

export async function putPushDeviceRegistrationsDeviceId(
  args: InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.push.deviceRegistrations[':device_id'].$put(args, options))
}

export async function deletePushDeviceRegistrationsDeviceId(
  args: InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.push.deviceRegistrations[':device_id'].$delete(args, options))
}

export async function patchPushDeviceRegistrationsDeviceId(
  args: InferRequestType<(typeof client.push.deviceRegistrations)[':device_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.push.deviceRegistrations[':device_id'].$patch(args, options))
}

export async function getPushDeviceRegistrationsDeviceIdResetUpdateToken(
  args: InferRequestType<
    (typeof client.push.deviceRegistrations)[':device_id']['resetUpdateToken']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.push.deviceRegistrations[':device_id'].resetUpdateToken.$get(args, options),
  )
}

export async function getPushChannelSubscriptions(
  args: InferRequestType<typeof client.push.channelSubscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.push.channelSubscriptions.$get(args, options))
}

export async function postPushChannelSubscriptions(
  args: InferRequestType<typeof client.push.channelSubscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.push.channelSubscriptions.$post(args, options))
}

export async function deletePushChannelSubscriptions(
  args: InferRequestType<typeof client.push.channelSubscriptions.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.push.channelSubscriptions.$delete(args, options))
}

export async function getPushChannels(
  args: InferRequestType<typeof client.push.channels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.push.channels.$get(args, options))
}

export async function postPushPublish(
  args: InferRequestType<typeof client.push.publish.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.push.publish.$post(args, options))
}

export async function postKeysKeyNameRequestToken(
  args: InferRequestType<(typeof client.keys)[':keyName']['requestToken']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':keyName'].requestToken.$post(args, options))
}

export async function getStats(
  args: InferRequestType<typeof client.stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats.$get(args, options))
}

export async function getTime(
  args: InferRequestType<typeof client.time.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.time.$get(args, options))
}
