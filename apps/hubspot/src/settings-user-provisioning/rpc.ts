import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getSettingsUsers202609(
  args: InferRequestType<(typeof client.settings.users)['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.users['2026-09'].$get(args, options))
}

export async function postSettingsUsers202609(
  args: InferRequestType<(typeof client.settings.users)['2026-09']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.users['2026-09'].$post(args, options))
}

export async function getSettingsUsers202609Roles(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.users['2026-09'].roles.$get(undefined, options))
}

export async function getSettingsUsers202609Seats(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.users['2026-09'].seats.$get(undefined, options))
}

export async function getSettingsUsers202609Teams(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.users['2026-09'].teams.$get(undefined, options))
}

export async function getSettingsUsers202609UserId(
  args: InferRequestType<(typeof client.settings.users)['2026-09'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.users['2026-09'][':userId'].$get(args, options))
}

export async function putSettingsUsers202609UserId(
  args: InferRequestType<(typeof client.settings.users)['2026-09'][':userId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.users['2026-09'][':userId'].$put(args, options))
}

export async function deleteSettingsUsers202609UserId(
  args: InferRequestType<(typeof client.settings.users)['2026-09'][':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.users['2026-09'][':userId'].$delete(args, options))
}
