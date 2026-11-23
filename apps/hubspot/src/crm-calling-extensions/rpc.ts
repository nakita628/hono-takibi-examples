import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCrmExtensionsCalling202609InboundCall(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09']['inbound-call']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.extensions.calling['2026-09']['inbound-call'].$post(args, options),
  )
}

export async function postCrmExtensionsCalling202609RecordingsReady(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09']['recordings']['ready']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.extensions.calling['2026-09'].recordings.ready.$post(args, options),
  )
}

export async function getCrmExtensionsCalling202609AppIdSettings(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.extensions.calling['2026-09'][':appId'].settings.$get(args, options),
  )
}

export async function postCrmExtensionsCalling202609AppIdSettings(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.extensions.calling['2026-09'][':appId'].settings.$post(args, options),
  )
}

export async function deleteCrmExtensionsCalling202609AppIdSettings(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.extensions.calling['2026-09'][':appId'].settings.$delete(args, options),
  )
}

export async function patchCrmExtensionsCalling202609AppIdSettings(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.extensions.calling['2026-09'][':appId'].settings.$patch(args, options),
  )
}

export async function getCrmExtensionsCalling202609AppIdSettingsChannelConnection(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.extensions.calling['2026-09'][':appId'].settings['channel-connection'].$get(
      args,
      options,
    ),
  )
}

export async function postCrmExtensionsCalling202609AppIdSettingsChannelConnection(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.extensions.calling['2026-09'][':appId'].settings['channel-connection'].$post(
      args,
      options,
    ),
  )
}

export async function deleteCrmExtensionsCalling202609AppIdSettingsChannelConnection(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.extensions.calling['2026-09'][':appId'].settings['channel-connection'].$delete(
      args,
      options,
    ),
  )
}

export async function patchCrmExtensionsCalling202609AppIdSettingsChannelConnection(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['channel-connection']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.extensions.calling['2026-09'][':appId'].settings['channel-connection'].$patch(
      args,
      options,
    ),
  )
}

export async function getCrmExtensionsCalling202609AppIdSettingsRecording(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.extensions.calling['2026-09'][':appId'].settings.recording.$get(args, options),
  )
}

export async function postCrmExtensionsCalling202609AppIdSettingsRecording(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.extensions.calling['2026-09'][':appId'].settings.recording.$post(args, options),
  )
}

export async function patchCrmExtensionsCalling202609AppIdSettingsRecording(
  args: InferRequestType<
    (typeof client.crm.extensions.calling)['2026-09'][':appId']['settings']['recording']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.extensions.calling['2026-09'][':appId'].settings.recording.$patch(args, options),
  )
}
