import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getSettingsTeams202609(
  args: InferRequestType<(typeof client.settings.teams)['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.teams['2026-09'].$get(args, options))
}

export async function postSettingsTeams202609(
  args: InferRequestType<(typeof client.settings.teams)['2026-09']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.teams['2026-09'].$post(args, options))
}

export async function getSettingsTeams202609TeamId(
  args: InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.teams['2026-09'][':teamId'].$get(args, options))
}

export async function deleteSettingsTeams202609TeamId(
  args: InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.teams['2026-09'][':teamId'].$delete(args, options))
}

export async function patchSettingsTeams202609TeamId(
  args: InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.teams['2026-09'][':teamId'].$patch(args, options))
}

export async function getSettingsTeams202609TeamIdMembers(
  args: InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.teams['2026-09'][':teamId'].members.$get(args, options),
  )
}

export async function postSettingsTeams202609TeamIdMembers(
  args: InferRequestType<(typeof client.settings.teams)['2026-09'][':teamId']['members']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.teams['2026-09'][':teamId'].members.$post(args, options),
  )
}

export async function postSettingsTeams202609TeamIdMembersBatch(
  args: InferRequestType<
    (typeof client.settings.teams)['2026-09'][':teamId']['members']['batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.teams['2026-09'][':teamId'].members.batch.$post(args, options),
  )
}

export async function deleteSettingsTeams202609TeamIdMembersUserId(
  args: InferRequestType<
    (typeof client.settings.teams)['2026-09'][':teamId']['members'][':userId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.teams['2026-09'][':teamId'].members[':userId'].$delete(args, options),
  )
}
