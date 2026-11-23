import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGroupsKey() {
  return ['groups'] as const
}

export function getPostGroupsV1GroupsGroupIdArchiveMutationKey() {
  return ['groups', '/groups/v1/groups/:groupId/archive', 'POST'] as const
}

export function getPostGroupsV1GroupsGroupIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups.v1.groups)[':groupId']['archive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups.v1.groups)[':groupId']['archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsV1GroupsGroupIdArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups.v1.groups)[':groupId']['archive']['$post']>,
    ) {
      return parseResponse(client.groups.v1.groups[':groupId'].archive.$post(args, options))
    },
  })
}

export function createPostGroupsV1GroupsGroupIdArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.groups.v1.groups)[':groupId']['archive']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.groups.v1.groups)[':groupId']['archive']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGroupsV1GroupsGroupIdArchiveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
