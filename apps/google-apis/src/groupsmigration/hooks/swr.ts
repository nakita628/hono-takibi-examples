import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGroupsKey() {
  return ['groups'] as const
}

export function getPostGroupsV1GroupsGroupIdArchiveKey() {
  return ['groups', '/groups/v1/groups/:groupId/archive', 'POST'] as const
}

export function usePostGroupsV1GroupsGroupIdArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups.v1.groups)[':groupId']['archive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups.v1.groups)[':groupId']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsV1GroupsGroupIdArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.groups.v1.groups)[':groupId']['archive']['$post']>
        },
      ) => parseResponse(client.groups.v1.groups[':groupId'].archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
