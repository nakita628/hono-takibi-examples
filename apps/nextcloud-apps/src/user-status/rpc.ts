import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putOcsV2PhpAppsUserStatusApiV1Heartbeat(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['heartbeat']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.user_status.api.v1.heartbeat.$put(args, options),
  )
}

export async function getOcsV2PhpAppsUserStatusApiV1PredefinedStatuses(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['predefined_statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.user_status.api.v1.predefined_statuses.$get(args, options),
  )
}

export async function getOcsV2PhpAppsUserStatusApiV1Statuses(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.user_status.api.v1.statuses.$get(args, options),
  )
}

export async function getOcsV2PhpAppsUserStatusApiV1StatusesUserId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['statuses'][':userId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.user_status.api.v1.statuses[':userId'].$get(args, options),
  )
}

export async function getOcsV2PhpAppsUserStatusApiV1UserStatus(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.user_status.api.v1.user_status.$get(args, options),
  )
}

export async function putOcsV2PhpAppsUserStatusApiV1UserStatusStatus(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.user_status.api.v1.user_status.status.$put(args, options),
  )
}

export async function putOcsV2PhpAppsUserStatusApiV1UserStatusMessagePredefined(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['message']['predefined']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.user_status.api.v1.user_status.message.predefined.$put(args, options),
  )
}

export async function putOcsV2PhpAppsUserStatusApiV1UserStatusMessageCustom(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['message']['custom']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.user_status.api.v1.user_status.message.custom.$put(args, options),
  )
}

export async function deleteOcsV2PhpAppsUserStatusApiV1UserStatusMessage(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['message']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.user_status.api.v1.user_status.message.$delete(args, options),
  )
}

export async function deleteOcsV2PhpAppsUserStatusApiV1UserStatusRevertMessageId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_status']['api']['v1']['user_status']['revert'][':messageId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.user_status.api.v1.user_status.revert[':messageId'].$delete(
      args,
      options,
    ),
  )
}
