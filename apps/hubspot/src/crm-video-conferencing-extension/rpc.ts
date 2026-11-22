import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmExtensionsVideoconferencing202609SettingsAppId(
  args: InferRequestType<
    (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.extensions.videoconferencing['2026-09'].settings[':appId'].$get(args, options),
  )
}

export async function putCrmExtensionsVideoconferencing202609SettingsAppId(
  args: InferRequestType<
    (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.extensions.videoconferencing['2026-09'].settings[':appId'].$put(args, options),
  )
}

export async function deleteCrmExtensionsVideoconferencing202609SettingsAppId(
  args: InferRequestType<
    (typeof client.crm.extensions.videoconferencing)['2026-09']['settings'][':appId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.crm.extensions.videoconferencing['2026-09'].settings[':appId'].$delete(args, options),
  )
}
