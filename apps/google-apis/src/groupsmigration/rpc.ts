import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postGroupsV1GroupsGroupIdArchive(
  args: InferRequestType<(typeof client.groups.v1.groups)[':groupId']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.v1.groups[':groupId'].archive.$post(args, options))
}
