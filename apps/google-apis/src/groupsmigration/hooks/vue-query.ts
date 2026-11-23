import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
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

export function usePostGroupsV1GroupsGroupIdArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGroupsV1GroupsGroupIdArchiveMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
