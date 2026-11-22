import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActionsKey() {
  return ['actions'] as const
}

export function getApplicationsKey() {
  return ['applications'] as const
}

export function getBatchKey() {
  return ['batch'] as const
}

export function getBoardsKey() {
  return ['boards'] as const
}

export function getCardsKey() {
  return ['cards'] as const
}

export function getChecklistsKey() {
  return ['checklists'] as const
}

export function getCustomFieldsKey() {
  return ['customFields'] as const
}

export function getEmojiKey() {
  return ['emoji'] as const
}

export function getEnterprisesKey() {
  return ['enterprises'] as const
}

export function getLabelsKey() {
  return ['labels'] as const
}

export function getListsKey() {
  return ['lists'] as const
}

export function getMembersKey() {
  return ['members'] as const
}

export function getNotificationsKey() {
  return ['notifications'] as const
}

export function getOrganizationsKey() {
  return ['organizations'] as const
}

export function getPluginsKey() {
  return ['plugins'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getTokensKey() {
  return ['tokens'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getGetActionsIdKey(args: InferRequestType<(typeof client.actions)[':id']['$get']>) {
  return ['actions', '/actions/:id', args] as const
}

export function useGetActionsId<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionsId<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutActionsIdKey() {
  return ['actions', '/actions/:id', 'PUT'] as const
}

export function usePutActionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.actions)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutActionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.actions)[':id']['$put']> }) =>
        parseResponse(client.actions[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteActionsIdKey() {
  return ['actions', '/actions/:id', 'DELETE'] as const
}

export function useDeleteActionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.actions)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteActionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.actions)[':id']['$delete']> },
      ) => parseResponse(client.actions[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionsIdFieldKey(
  args: InferRequestType<(typeof client.actions)[':id'][':field']['$get']>,
) {
  return ['actions', '/actions/:id/:field', args] as const
}

export function useGetActionsIdField<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':id'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':id'][':field']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionsIdFieldKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':id'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':id'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionsIdField<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':id'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':id'][':field']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionsIdFieldKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':id'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':id'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionsIdBoardKey(
  args: InferRequestType<(typeof client.actions)[':id']['board']['$get']>,
) {
  return ['actions', '/actions/:id/board', args] as const
}

export function useGetActionsIdBoard<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':id']['board']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['board']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionsIdBoardKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['board']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':id'].board.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionsIdBoard<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':id']['board']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['board']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionsIdBoardKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['board']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':id'].board.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionsIdCardKey(
  args: InferRequestType<(typeof client.actions)[':id']['card']['$get']>,
) {
  return ['actions', '/actions/:id/card', args] as const
}

export function useGetActionsIdCard<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':id']['card']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['card']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionsIdCardKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['card']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':id'].card.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionsIdCard<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':id']['card']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['card']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionsIdCardKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['card']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':id'].card.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionsIdListKey(
  args: InferRequestType<(typeof client.actions)[':id']['list']['$get']>,
) {
  return ['actions', '/actions/:id/list', args] as const
}

export function useGetActionsIdList<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':id']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['list']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionsIdListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['list']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':id'].list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionsIdList<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':id']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['list']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionsIdListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['list']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':id'].list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionsIdMemberKey(
  args: InferRequestType<(typeof client.actions)[':id']['member']['$get']>,
) {
  return ['actions', '/actions/:id/member', args] as const
}

export function useGetActionsIdMember<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':id']['member']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':id']['member']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionsIdMemberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':id']['member']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':id'].member.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionsIdMember<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':id']['member']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':id']['member']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionsIdMemberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':id']['member']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':id'].member.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionsIdMemberCreatorKey(
  args: InferRequestType<(typeof client.actions)[':id']['memberCreator']['$get']>,
) {
  return ['actions', '/actions/:id/memberCreator', args] as const
}

export function useGetActionsIdMemberCreator<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':id']['memberCreator']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':id']['memberCreator']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionsIdMemberCreatorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':id']['memberCreator']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':id'].memberCreator.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionsIdMemberCreator<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':id']['memberCreator']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':id']['memberCreator']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionsIdMemberCreatorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':id']['memberCreator']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':id'].memberCreator.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionsIdOrganizationKey(
  args: InferRequestType<(typeof client.actions)[':id']['organization']['$get']>,
) {
  return ['actions', '/actions/:id/organization', args] as const
}

export function useGetActionsIdOrganization<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':id']['organization']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':id']['organization']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionsIdOrganizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':id']['organization']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':id'].organization.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionsIdOrganization<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':id']['organization']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':id']['organization']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionsIdOrganizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':id']['organization']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':id'].organization.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutActionsIdTextKey() {
  return ['actions', '/actions/:id/text', 'PUT'] as const
}

export function usePutActionsIdText<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['text']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.actions)[':id']['text']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutActionsIdTextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.actions)[':id']['text']['$put']> },
      ) => parseResponse(client.actions[':id'].text.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionsIdActionReactionsKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['reactions']['$get']>,
) {
  return ['actions', '/actions/:idAction/reactions', args] as const
}

export function useGetActionsIdActionReactions<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['reactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionsIdActionReactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':idAction'].reactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionsIdActionReactions<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['reactions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionsIdActionReactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':idAction'].reactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionsIdActionReactionsKey() {
  return ['actions', '/actions/:idAction/reactions', 'POST'] as const
}

export function usePostActionsIdActionReactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.actions)[':idAction']['reactions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionsIdActionReactionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.actions)[':idAction']['reactions']['$post']> },
      ) => parseResponse(client.actions[':idAction'].reactions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionsIdActionReactionsIdKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['reactions'][':id']['$get']>,
) {
  return ['actions', '/actions/:idAction/reactions/:id', args] as const
}

export function useGetActionsIdActionReactionsId<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['reactions'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionsIdActionReactionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.actions[':idAction'].reactions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionsIdActionReactionsId<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['reactions'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionsIdActionReactionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.actions[':idAction'].reactions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteActionsIdActionReactionsIdKey() {
  return ['actions', '/actions/:idAction/reactions/:id', 'DELETE'] as const
}

export function useDeleteActionsIdActionReactionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.actions)[':idAction']['reactions'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.actions)[':idAction']['reactions'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteActionsIdActionReactionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.actions)[':idAction']['reactions'][':id']['$delete']>
        },
      ) => parseResponse(client.actions[':idAction'].reactions[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionsIdActionReactionsSummaryKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['reactionsSummary']['$get']>,
) {
  return ['actions', '/actions/:idAction/reactionsSummary', args] as const
}

export function useGetActionsIdActionReactionsSummary<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['reactionsSummary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['reactionsSummary']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionsIdActionReactionsSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['reactionsSummary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.actions[':idAction'].reactionsSummary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionsIdActionReactionsSummary<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['reactionsSummary']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['reactionsSummary']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetActionsIdActionReactionsSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['reactionsSummary']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.actions[':idAction'].reactionsSummary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApplicationsKeyComplianceKey(
  args: InferRequestType<(typeof client.applications)[':key']['compliance']['$get']>,
) {
  return ['applications', '/applications/:key/compliance', args] as const
}

export function useGetApplicationsKeyCompliance<TError = unknown>(
  args: InferRequestType<(typeof client.applications)[':key']['compliance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.applications)[':key']['compliance']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApplicationsKeyComplianceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.applications)[':key']['compliance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.applications[':key'].compliance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApplicationsKeyCompliance<TError = unknown>(
  args: InferRequestType<(typeof client.applications)[':key']['compliance']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.applications)[':key']['compliance']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApplicationsKeyComplianceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.applications)[':key']['compliance']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.applications[':key'].compliance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBatchKey(args: InferRequestType<typeof client.batch.$get>) {
  return ['batch', '/batch', args] as const
}

export function useGetBatch<TError = unknown>(
  args: InferRequestType<typeof client.batch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBatchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.batch.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetBatch<TError = unknown>(
  args: InferRequestType<typeof client.batch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBatchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.batch.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetBoardsIdMembershipsKey(
  args: InferRequestType<(typeof client.boards)[':id']['memberships']['$get']>,
) {
  return ['boards', '/boards/:id/memberships', args] as const
}

export function useGetBoardsIdMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['memberships']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoardsIdMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':id'].memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['memberships']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoardsIdMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':id'].memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBoardsIdKey(args: InferRequestType<(typeof client.boards)[':id']['$get']>) {
  return ['boards', '/boards/:id', args] as const
}

export function useGetBoardsId<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBoardsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsId<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBoardsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBoardsIdKey() {
  return ['boards', '/boards/:id', 'PUT'] as const
}

export function usePutBoardsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.boards)[':id']['$put']> }) =>
        parseResponse(client.boards[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBoardsIdKey() {
  return ['boards', '/boards/:id', 'DELETE'] as const
}

export function useDeleteBoardsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBoardsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.boards)[':id']['$delete']> },
      ) => parseResponse(client.boards[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBoardsIdFieldKey(
  args: InferRequestType<(typeof client.boards)[':id'][':field']['$get']>,
) {
  return ['boards', '/boards/:id/:field', args] as const
}

export function useGetBoardsIdField<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id'][':field']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBoardsIdFieldKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id'][':field']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':id'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdField<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id'][':field']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBoardsIdFieldKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id'][':field']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':id'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBoardsBoardIdActionsKey(
  args: InferRequestType<(typeof client.boards)[':boardId']['actions']['$get']>,
) {
  return ['boards', '/boards/:boardId/actions', args] as const
}

export function useGetBoardsBoardIdActions<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':boardId']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':boardId']['actions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoardsBoardIdActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':boardId']['actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':boardId'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsBoardIdActions<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':boardId']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':boardId']['actions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoardsBoardIdActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':boardId']['actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':boardId'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBoardsBoardIdBoardStarsKey(
  args: InferRequestType<(typeof client.boards)[':boardId']['boardStars']['$get']>,
) {
  return ['boards', '/boards/:boardId/boardStars', args] as const
}

export function useGetBoardsBoardIdBoardStars<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':boardId']['boardStars']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':boardId']['boardStars']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoardsBoardIdBoardStarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':boardId']['boardStars']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':boardId'].boardStars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsBoardIdBoardStars<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':boardId']['boardStars']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':boardId']['boardStars']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoardsBoardIdBoardStarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':boardId']['boardStars']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':boardId'].boardStars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBoardsIdChecklistsKey(
  args: InferRequestType<(typeof client.boards)[':id']['checklists']['$get']>,
) {
  return ['boards', '/boards/:id/checklists', args] as const
}

export function useGetBoardsIdChecklists<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['checklists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['checklists']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoardsIdChecklistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['checklists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':id'].checklists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdChecklists<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['checklists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['checklists']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoardsIdChecklistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['checklists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':id'].checklists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBoardsIdCardsKey(
  args: InferRequestType<(typeof client.boards)[':id']['cards']['$get']>,
) {
  return ['boards', '/boards/:id/cards', args] as const
}

export function useGetBoardsIdCards<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['cards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['cards']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBoardsIdCardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['cards']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':id'].cards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdCards<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['cards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['cards']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBoardsIdCardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['cards']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':id'].cards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBoardsIdCardsFilterKey(
  args: InferRequestType<(typeof client.boards)[':id']['cards'][':filter']['$get']>,
) {
  return ['boards', '/boards/:id/cards/:filter', args] as const
}

export function useGetBoardsIdCardsFilter<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['cards'][':filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['cards'][':filter']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoardsIdCardsFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['cards'][':filter']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':id'].cards[':filter'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdCardsFilter<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['cards'][':filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['cards'][':filter']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoardsIdCardsFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['cards'][':filter']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':id'].cards[':filter'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBoardsIdCustomFieldsKey(
  args: InferRequestType<(typeof client.boards)[':id']['customFields']['$get']>,
) {
  return ['boards', '/boards/:id/customFields', args] as const
}

export function useGetBoardsIdCustomFields<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['customFields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['customFields']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoardsIdCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['customFields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':id'].customFields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdCustomFields<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['customFields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['customFields']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoardsIdCustomFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['customFields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':id'].customFields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBoardsIdLabelsKey(
  args: InferRequestType<(typeof client.boards)[':id']['labels']['$get']>,
) {
  return ['boards', '/boards/:id/labels', args] as const
}

export function useGetBoardsIdLabels<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['labels']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBoardsIdLabelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['labels']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':id'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdLabels<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['labels']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBoardsIdLabelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['labels']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':id'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBoardsIdLabelsKey() {
  return ['boards', '/boards/:id/labels', 'POST'] as const
}

export function usePostBoardsIdLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['labels']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':id']['labels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBoardsIdLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.boards)[':id']['labels']['$post']> },
      ) => parseResponse(client.boards[':id'].labels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBoardsIdListsKey(
  args: InferRequestType<(typeof client.boards)[':id']['lists']['$get']>,
) {
  return ['boards', '/boards/:id/lists', args] as const
}

export function useGetBoardsIdLists<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['lists']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBoardsIdListsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['lists']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':id'].lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdLists<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['lists']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBoardsIdListsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['lists']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':id'].lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBoardsIdListsKey() {
  return ['boards', '/boards/:id/lists', 'POST'] as const
}

export function usePostBoardsIdLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['lists']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':id']['lists']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBoardsIdListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.boards)[':id']['lists']['$post']> },
      ) => parseResponse(client.boards[':id'].lists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBoardsIdListsFilterKey(
  args: InferRequestType<(typeof client.boards)[':id']['lists'][':filter']['$get']>,
) {
  return ['boards', '/boards/:id/lists/:filter', args] as const
}

export function useGetBoardsIdListsFilter<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['lists'][':filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['lists'][':filter']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoardsIdListsFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['lists'][':filter']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':id'].lists[':filter'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdListsFilter<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['lists'][':filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['lists'][':filter']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoardsIdListsFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['lists'][':filter']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':id'].lists[':filter'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBoardsIdMembersKey(
  args: InferRequestType<(typeof client.boards)[':id']['members']['$get']>,
) {
  return ['boards', '/boards/:id/members', args] as const
}

export function useGetBoardsIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoardsIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoardsIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBoardsIdMembersKey() {
  return ['boards', '/boards/:id/members', 'PUT'] as const
}

export function usePutBoardsIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['members']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':id']['members']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.boards)[':id']['members']['$put']> },
      ) => parseResponse(client.boards[':id'].members.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdMembersIdMemberKey() {
  return ['boards', '/boards/:id/members/:idMember', 'PUT'] as const
}

export function usePutBoardsIdMembersIdMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['members'][':idMember']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':id']['members'][':idMember']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdMembersIdMemberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.boards)[':id']['members'][':idMember']['$put']> },
      ) => parseResponse(client.boards[':id'].members[':idMember'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBoardsIdMembersIdMemberKey() {
  return ['boards', '/boards/:id/members/:idMember', 'DELETE'] as const
}

export function useDeleteBoardsIdMembersIdMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['members'][':idMember']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':id']['members'][':idMember']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBoardsIdMembersIdMemberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.boards)[':id']['members'][':idMember']['$delete']>
        },
      ) => parseResponse(client.boards[':id'].members[':idMember'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdMembershipsIdMembershipKey() {
  return ['boards', '/boards/:id/memberships/:idMembership', 'PUT'] as const
}

export function usePutBoardsIdMembershipsIdMembership<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['memberships'][':idMembership']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':id']['memberships'][':idMembership']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdMembershipsIdMembershipKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.boards)[':id']['memberships'][':idMembership']['$put']
          >
        },
      ) =>
        parseResponse(client.boards[':id'].memberships[':idMembership'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdMyPrefsEmailPositionKey() {
  return ['boards', '/boards/:id/myPrefs/emailPosition', 'PUT'] as const
}

export function usePutBoardsIdMyPrefsEmailPosition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['myPrefs']['emailPosition']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':id']['myPrefs']['emailPosition']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdMyPrefsEmailPositionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.boards)[':id']['myPrefs']['emailPosition']['$put']>
        },
      ) => parseResponse(client.boards[':id'].myPrefs.emailPosition.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdMyPrefsIdEmailListKey() {
  return ['boards', '/boards/:id/myPrefs/idEmailList', 'PUT'] as const
}

export function usePutBoardsIdMyPrefsIdEmailList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['myPrefs']['idEmailList']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':id']['myPrefs']['idEmailList']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdMyPrefsIdEmailListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.boards)[':id']['myPrefs']['idEmailList']['$put']>
        },
      ) => parseResponse(client.boards[':id'].myPrefs.idEmailList.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdMyPrefsShowSidebarKey() {
  return ['boards', '/boards/:id/myPrefs/showSidebar', 'PUT'] as const
}

export function usePutBoardsIdMyPrefsShowSidebar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['myPrefs']['showSidebar']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':id']['myPrefs']['showSidebar']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdMyPrefsShowSidebarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.boards)[':id']['myPrefs']['showSidebar']['$put']>
        },
      ) => parseResponse(client.boards[':id'].myPrefs.showSidebar.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdMyPrefsShowSidebarActivityKey() {
  return ['boards', '/boards/:id/myPrefs/showSidebarActivity', 'PUT'] as const
}

export function usePutBoardsIdMyPrefsShowSidebarActivity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.boards)[':id']['myPrefs']['showSidebarActivity']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':id']['myPrefs']['showSidebarActivity']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdMyPrefsShowSidebarActivityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.boards)[':id']['myPrefs']['showSidebarActivity']['$put']
          >
        },
      ) => parseResponse(client.boards[':id'].myPrefs.showSidebarActivity.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdMyPrefsShowSidebarBoardActionsKey() {
  return ['boards', '/boards/:id/myPrefs/showSidebarBoardActions', 'PUT'] as const
}

export function usePutBoardsIdMyPrefsShowSidebarBoardActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.boards)[':id']['myPrefs']['showSidebarBoardActions']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':id']['myPrefs']['showSidebarBoardActions']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdMyPrefsShowSidebarBoardActionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.boards)[':id']['myPrefs']['showSidebarBoardActions']['$put']
          >
        },
      ) =>
        parseResponse(
          client.boards[':id'].myPrefs.showSidebarBoardActions.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdMyPrefsShowSidebarMembersKey() {
  return ['boards', '/boards/:id/myPrefs/showSidebarMembers', 'PUT'] as const
}

export function usePutBoardsIdMyPrefsShowSidebarMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.boards)[':id']['myPrefs']['showSidebarMembers']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':id']['myPrefs']['showSidebarMembers']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdMyPrefsShowSidebarMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.boards)[':id']['myPrefs']['showSidebarMembers']['$put']
          >
        },
      ) => parseResponse(client.boards[':id'].myPrefs.showSidebarMembers.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBoardsIndexKey() {
  return ['boards', '/boards/', 'POST'] as const
}

export function usePostBoardsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.boards.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.boards.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBoardsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.boards.index.$post> }) =>
        parseResponse(client.boards.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBoardsIdCalendarKeyGenerateKey() {
  return ['boards', '/boards/:id/calendarKey/generate', 'POST'] as const
}

export function usePostBoardsIdCalendarKeyGenerate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['calendarKey']['generate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':id']['calendarKey']['generate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBoardsIdCalendarKeyGenerateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.boards)[':id']['calendarKey']['generate']['$post']>
        },
      ) => parseResponse(client.boards[':id'].calendarKey.generate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBoardsIdEmailKeyGenerateKey() {
  return ['boards', '/boards/:id/emailKey/generate', 'POST'] as const
}

export function usePostBoardsIdEmailKeyGenerate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['emailKey']['generate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':id']['emailKey']['generate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBoardsIdEmailKeyGenerateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.boards)[':id']['emailKey']['generate']['$post']>
        },
      ) => parseResponse(client.boards[':id'].emailKey.generate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBoardsIdIdTagsKey() {
  return ['boards', '/boards/:id/idTags', 'POST'] as const
}

export function usePostBoardsIdIdTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['idTags']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':id']['idTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBoardsIdIdTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.boards)[':id']['idTags']['$post']> },
      ) => parseResponse(client.boards[':id'].idTags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBoardsIdMarkAsViewedKey() {
  return ['boards', '/boards/:id/markAsViewed', 'POST'] as const
}

export function usePostBoardsIdMarkAsViewed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['markAsViewed']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':id']['markAsViewed']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBoardsIdMarkAsViewedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.boards)[':id']['markAsViewed']['$post']> },
      ) => parseResponse(client.boards[':id'].markAsViewed.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBoardsIdBoardPluginsKey(
  args: InferRequestType<(typeof client.boards)[':id']['boardPlugins']['$get']>,
) {
  return ['boards', '/boards/:id/boardPlugins', args] as const
}

export function useGetBoardsIdBoardPlugins<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['boardPlugins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['boardPlugins']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoardsIdBoardPluginsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['boardPlugins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':id'].boardPlugins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdBoardPlugins<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['boardPlugins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['boardPlugins']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoardsIdBoardPluginsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['boardPlugins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':id'].boardPlugins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBoardsIdBoardPluginsKey() {
  return ['boards', '/boards/:id/boardPlugins', 'POST'] as const
}

export function usePostBoardsIdBoardPlugins<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['boardPlugins']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':id']['boardPlugins']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBoardsIdBoardPluginsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.boards)[':id']['boardPlugins']['$post']> },
      ) => parseResponse(client.boards[':id'].boardPlugins.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBoardsIdBoardPluginsIdPluginKey() {
  return ['boards', '/boards/:id/boardPlugins/:idPlugin', 'DELETE'] as const
}

export function useDeleteBoardsIdBoardPluginsIdPlugin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['boardPlugins'][':idPlugin']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':id']['boardPlugins'][':idPlugin']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBoardsIdBoardPluginsIdPluginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.boards)[':id']['boardPlugins'][':idPlugin']['$delete']
          >
        },
      ) =>
        parseResponse(client.boards[':id'].boardPlugins[':idPlugin'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBoardsIdPluginsKey(
  args: InferRequestType<(typeof client.boards)[':id']['plugins']['$get']>,
) {
  return ['boards', '/boards/:id/plugins', args] as const
}

export function useGetBoardsIdPlugins<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['plugins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['plugins']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoardsIdPluginsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['plugins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':id'].plugins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdPlugins<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['plugins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['plugins']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoardsIdPluginsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['plugins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':id'].plugins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBoardsIdExportsKey() {
  return ['boards', '/boards/:id/exports', 'POST'] as const
}

export function usePostBoardsIdExports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':id']['exports']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':id']['exports']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBoardsIdExportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.boards)[':id']['exports']['$post']> },
      ) => parseResponse(client.boards[':id'].exports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBoardsIdExportsIdExportKey(
  args: InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['$get']>,
) {
  return ['boards', '/boards/:id/exports/:idExport', args] as const
}

export function useGetBoardsIdExportsIdExport<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoardsIdExportsIdExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.boards[':id'].exports[':idExport'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdExportsIdExport<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoardsIdExportsIdExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.boards[':id'].exports[':idExport'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteBoardsIdExportsIdExportKey() {
  return ['boards', '/boards/:id/exports/:idExport', 'DELETE'] as const
}

export function useDeleteBoardsIdExportsIdExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBoardsIdExportsIdExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['$delete']>
        },
      ) => parseResponse(client.boards[':id'].exports[':idExport'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBoardsIdExportsIdExportDownloadKey(
  args: InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['download']['$get']>,
) {
  return ['boards', '/boards/:id/exports/:idExport/download', args] as const
}

export function useGetBoardsIdExportsIdExportDownload<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['download']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoardsIdExportsIdExportDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['download']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.boards[':id'].exports[':idExport'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdExportsIdExportDownload<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['exports'][':idExport']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['download']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoardsIdExportsIdExportDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.boards)[':id']['exports'][':idExport']['download']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.boards[':id'].exports[':idExport'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBoardsIdExportsMostRecentKey(
  args: InferRequestType<(typeof client.boards)[':id']['exports']['mostRecent']['$get']>,
) {
  return ['boards', '/boards/:id/exports/mostRecent', args] as const
}

export function useGetBoardsIdExportsMostRecent<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['exports']['mostRecent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['exports']['mostRecent']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoardsIdExportsMostRecentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['exports']['mostRecent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':id'].exports.mostRecent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdExportsMostRecent<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':id']['exports']['mostRecent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['exports']['mostRecent']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBoardsIdExportsMostRecentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':id']['exports']['mostRecent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':id'].exports.mostRecent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCardsKey() {
  return ['cards', '/cards', 'POST'] as const
}

export function usePostCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.cards.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cards.$post> }) =>
        parseResponse(client.cards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCardsIdKey(args: InferRequestType<(typeof client.cards)[':id']['$get']>) {
  return ['cards', '/cards/:id', args] as const
}

export function useGetCardsId<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsId<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCardsIdKey() {
  return ['cards', '/cards/:id', 'PUT'] as const
}

export function usePutCardsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCardsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.cards)[':id']['$put']> }) =>
        parseResponse(client.cards[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCardsIdKey() {
  return ['cards', '/cards/:id', 'DELETE'] as const
}

export function useDeleteCardsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCardsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.cards)[':id']['$delete']> }) =>
        parseResponse(client.cards[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCardsIdFieldKey(
  args: InferRequestType<(typeof client.cards)[':id'][':field']['$get']>,
) {
  return ['cards', '/cards/:id/:field', args] as const
}

export function useGetCardsIdField<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id'][':field']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardsIdFieldKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id'][':field']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':id'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdField<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id'][':field']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardsIdFieldKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id'][':field']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':id'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCardsIdActionsKey(
  args: InferRequestType<(typeof client.cards)[':id']['actions']['$get']>,
) {
  return ['cards', '/cards/:id/actions', args] as const
}

export function useGetCardsIdActions<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['actions']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardsIdActionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['actions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':id'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdActions<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['actions']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardsIdActionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['actions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':id'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCardsIdAttachmentsKey(
  args: InferRequestType<(typeof client.cards)[':id']['attachments']['$get']>,
) {
  return ['cards', '/cards/:id/attachments', args] as const
}

export function useGetCardsIdAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['attachments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardsIdAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':id'].attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['attachments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardsIdAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':id'].attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCardsIdAttachmentsKey() {
  return ['cards', '/cards/:id/attachments', 'POST'] as const
}

export function usePostCardsIdAttachments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['attachments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':id']['attachments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsIdAttachmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':id']['attachments']['$post']> },
      ) => parseResponse(client.cards[':id'].attachments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCardsIdAttachmentsIdAttachmentKey(
  args: InferRequestType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$get']>,
) {
  return ['cards', '/cards/:id/attachments/:idAttachment', args] as const
}

export function useGetCardsIdAttachmentsIdAttachment<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardsIdAttachmentsIdAttachmentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cards[':id'].attachments[':idAttachment'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdAttachmentsIdAttachment<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardsIdAttachmentsIdAttachmentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cards[':id'].attachments[':idAttachment'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCardsIdAttachmentsIdAttachmentKey() {
  return ['cards', '/cards/:id/attachments/:idAttachment', 'DELETE'] as const
}

export function useDeleteCardsIdAttachmentsIdAttachment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':id']['attachments'][':idAttachment']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCardsIdAttachmentsIdAttachmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.cards)[':id']['attachments'][':idAttachment']['$delete']
          >
        },
      ) =>
        parseResponse(client.cards[':id'].attachments[':idAttachment'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCardsIdBoardKey(
  args: InferRequestType<(typeof client.cards)[':id']['board']['$get']>,
) {
  return ['cards', '/cards/:id/board', args] as const
}

export function useGetCardsIdBoard<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['board']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['board']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardsIdBoardKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['board']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':id'].board.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdBoard<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['board']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['board']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardsIdBoardKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['board']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':id'].board.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCardsIdCheckItemStatesKey(
  args: InferRequestType<(typeof client.cards)[':id']['checkItemStates']['$get']>,
) {
  return ['cards', '/cards/:id/checkItemStates', args] as const
}

export function useGetCardsIdCheckItemStates<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['checkItemStates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['checkItemStates']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardsIdCheckItemStatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['checkItemStates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':id'].checkItemStates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdCheckItemStates<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['checkItemStates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['checkItemStates']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardsIdCheckItemStatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['checkItemStates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':id'].checkItemStates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCardsIdChecklistsKey(
  args: InferRequestType<(typeof client.cards)[':id']['checklists']['$get']>,
) {
  return ['cards', '/cards/:id/checklists', args] as const
}

export function useGetCardsIdChecklists<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['checklists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['checklists']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardsIdChecklistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['checklists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':id'].checklists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdChecklists<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['checklists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['checklists']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardsIdChecklistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['checklists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':id'].checklists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCardsIdChecklistsKey() {
  return ['cards', '/cards/:id/checklists', 'POST'] as const
}

export function usePostCardsIdChecklists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['checklists']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':id']['checklists']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsIdChecklistsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':id']['checklists']['$post']> },
      ) => parseResponse(client.cards[':id'].checklists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCardsIdCheckItemIdCheckItemKey(
  args: InferRequestType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$get']>,
) {
  return ['cards', '/cards/:id/checkItem/:idCheckItem', args] as const
}

export function useGetCardsIdCheckItemIdCheckItem<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardsIdCheckItemIdCheckItemKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cards[':id'].checkItem[':idCheckItem'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdCheckItemIdCheckItem<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardsIdCheckItemIdCheckItemKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cards[':id'].checkItem[':idCheckItem'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCardsIdCheckItemIdCheckItemKey() {
  return ['cards', '/cards/:id/checkItem/:idCheckItem', 'PUT'] as const
}

export function usePutCardsIdCheckItemIdCheckItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCardsIdCheckItemIdCheckItemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$put']>
        },
      ) => parseResponse(client.cards[':id'].checkItem[':idCheckItem'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCardsIdCheckItemIdCheckItemKey() {
  return ['cards', '/cards/:id/checkItem/:idCheckItem', 'DELETE'] as const
}

export function useDeleteCardsIdCheckItemIdCheckItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':id']['checkItem'][':idCheckItem']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCardsIdCheckItemIdCheckItemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.cards)[':id']['checkItem'][':idCheckItem']['$delete']
          >
        },
      ) => parseResponse(client.cards[':id'].checkItem[':idCheckItem'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCardsIdListKey(
  args: InferRequestType<(typeof client.cards)[':id']['list']['$get']>,
) {
  return ['cards', '/cards/:id/list', args] as const
}

export function useGetCardsIdList<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['list']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardsIdListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['list']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':id'].list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdList<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['list']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardsIdListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['list']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':id'].list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCardsIdMembersKey(
  args: InferRequestType<(typeof client.cards)[':id']['members']['$get']>,
) {
  return ['cards', '/cards/:id/members', args] as const
}

export function useGetCardsIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['members']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardsIdMembersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['members']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['members']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardsIdMembersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['members']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCardsIdMembersVotedKey(
  args: InferRequestType<(typeof client.cards)[':id']['membersVoted']['$get']>,
) {
  return ['cards', '/cards/:id/membersVoted', args] as const
}

export function useGetCardsIdMembersVoted<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['membersVoted']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['membersVoted']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardsIdMembersVotedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['membersVoted']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':id'].membersVoted.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdMembersVoted<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['membersVoted']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['membersVoted']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardsIdMembersVotedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['membersVoted']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':id'].membersVoted.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCardsIdMembersVotedKey() {
  return ['cards', '/cards/:id/membersVoted', 'POST'] as const
}

export function usePostCardsIdMembersVoted<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['membersVoted']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':id']['membersVoted']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsIdMembersVotedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':id']['membersVoted']['$post']> },
      ) => parseResponse(client.cards[':id'].membersVoted.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCardsIdPluginDataKey(
  args: InferRequestType<(typeof client.cards)[':id']['pluginData']['$get']>,
) {
  return ['cards', '/cards/:id/pluginData', args] as const
}

export function useGetCardsIdPluginData<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['pluginData']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['pluginData']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardsIdPluginDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['pluginData']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':id'].pluginData.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdPluginData<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['pluginData']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['pluginData']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardsIdPluginDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['pluginData']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':id'].pluginData.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCardsIdStickersKey(
  args: InferRequestType<(typeof client.cards)[':id']['stickers']['$get']>,
) {
  return ['cards', '/cards/:id/stickers', args] as const
}

export function useGetCardsIdStickers<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['stickers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['stickers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardsIdStickersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['stickers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':id'].stickers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdStickers<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['stickers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['stickers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardsIdStickersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['stickers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':id'].stickers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCardsIdStickersKey() {
  return ['cards', '/cards/:id/stickers', 'POST'] as const
}

export function usePostCardsIdStickers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['stickers']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':id']['stickers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsIdStickersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':id']['stickers']['$post']> },
      ) => parseResponse(client.cards[':id'].stickers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCardsIdStickersIdStickerKey(
  args: InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$get']>,
) {
  return ['cards', '/cards/:id/stickers/:idSticker', args] as const
}

export function useGetCardsIdStickersIdSticker<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['stickers'][':idSticker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardsIdStickersIdStickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['stickers'][':idSticker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cards[':id'].stickers[':idSticker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdStickersIdSticker<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['stickers'][':idSticker']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardsIdStickersIdStickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['stickers'][':idSticker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cards[':id'].stickers[':idSticker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCardsIdStickersIdStickerKey() {
  return ['cards', '/cards/:id/stickers/:idSticker', 'PUT'] as const
}

export function usePutCardsIdStickersIdSticker<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['stickers'][':idSticker']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCardsIdStickersIdStickerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$put']>
        },
      ) => parseResponse(client.cards[':id'].stickers[':idSticker'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCardsIdStickersIdStickerKey() {
  return ['cards', '/cards/:id/stickers/:idSticker', 'DELETE'] as const
}

export function useDeleteCardsIdStickersIdSticker<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['stickers'][':idSticker']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCardsIdStickersIdStickerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.cards)[':id']['stickers'][':idSticker']['$delete']>
        },
      ) => parseResponse(client.cards[':id'].stickers[':idSticker'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCardsIdActionsIdActionCommentsKey() {
  return ['cards', '/cards/:id/actions/:idAction/comments', 'PUT'] as const
}

export function usePutCardsIdActionsIdActionComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cards)[':id']['actions'][':idAction']['comments']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':id']['actions'][':idAction']['comments']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCardsIdActionsIdActionCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.cards)[':id']['actions'][':idAction']['comments']['$put']
          >
        },
      ) =>
        parseResponse(client.cards[':id'].actions[':idAction'].comments.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCardsIdActionsIdActionCommentsKey() {
  return ['cards', '/cards/:id/actions/:idAction/comments', 'DELETE'] as const
}

export function useDeleteCardsIdActionsIdActionComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cards)[':id']['actions'][':idAction']['comments']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':id']['actions'][':idAction']['comments']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCardsIdActionsIdActionCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.cards)[':id']['actions'][':idAction']['comments']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.cards[':id'].actions[':idAction'].comments.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutCardsIdCardCustomFieldIdCustomFieldItemKey() {
  return ['cards', '/cards/:idCard/customField/:idCustomField/item', 'PUT'] as const
}

export function usePutCardsIdCardCustomFieldIdCustomFieldItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cards)[':idCard']['customField'][':idCustomField']['item']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cards)[':idCard']['customField'][':idCustomField']['item']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCardsIdCardCustomFieldIdCustomFieldItemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.cards)[':idCard']['customField'][':idCustomField']['item']['$put']
          >
        },
      ) =>
        parseResponse(
          client.cards[':idCard'].customField[':idCustomField'].item.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutCardsIdCardCustomFieldsKey() {
  return ['cards', '/cards/:idCard/customFields', 'PUT'] as const
}

export function usePutCardsIdCardCustomFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['customFields']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['customFields']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCardsIdCardCustomFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.cards)[':idCard']['customFields']['$put']> },
      ) => parseResponse(client.cards[':idCard'].customFields.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCardsIdCustomFieldItemsKey(
  args: InferRequestType<(typeof client.cards)[':id']['customFieldItems']['$get']>,
) {
  return ['cards', '/cards/:id/customFieldItems', args] as const
}

export function useGetCardsIdCustomFieldItems<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['customFieldItems']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['customFieldItems']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardsIdCustomFieldItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['customFieldItems']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':id'].customFieldItems.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdCustomFieldItems<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':id']['customFieldItems']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['customFieldItems']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardsIdCustomFieldItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':id']['customFieldItems']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':id'].customFieldItems.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCardsIdActionsCommentsKey() {
  return ['cards', '/cards/:id/actions/comments', 'POST'] as const
}

export function usePostCardsIdActionsComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['actions']['comments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':id']['actions']['comments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsIdActionsCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.cards)[':id']['actions']['comments']['$post']> },
      ) => parseResponse(client.cards[':id'].actions.comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCardsIdIdLabelsKey() {
  return ['cards', '/cards/:id/idLabels', 'POST'] as const
}

export function usePostCardsIdIdLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['idLabels']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':id']['idLabels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsIdIdLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':id']['idLabels']['$post']> },
      ) => parseResponse(client.cards[':id'].idLabels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCardsIdIdMembersKey() {
  return ['cards', '/cards/:id/idMembers', 'POST'] as const
}

export function usePostCardsIdIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['idMembers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':id']['idMembers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsIdIdMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':id']['idMembers']['$post']> },
      ) => parseResponse(client.cards[':id'].idMembers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCardsIdLabelsKey() {
  return ['cards', '/cards/:id/labels', 'POST'] as const
}

export function usePostCardsIdLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':id']['labels']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':id']['labels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsIdLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':id']['labels']['$post']> },
      ) => parseResponse(client.cards[':id'].labels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCardsIdMarkAssociatedNotificationsReadKey() {
  return ['cards', '/cards/:id/markAssociatedNotificationsRead', 'POST'] as const
}

export function usePostCardsIdMarkAssociatedNotificationsRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cards)[':id']['markAssociatedNotificationsRead']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':id']['markAssociatedNotificationsRead']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsIdMarkAssociatedNotificationsReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.cards)[':id']['markAssociatedNotificationsRead']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cards[':id'].markAssociatedNotificationsRead.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCardsIdIdLabelsIdLabelKey() {
  return ['cards', '/cards/:id/idLabels/:idLabel', 'DELETE'] as const
}

export function useDeleteCardsIdIdLabelsIdLabel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['idLabels'][':idLabel']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':id']['idLabels'][':idLabel']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCardsIdIdLabelsIdLabelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.cards)[':id']['idLabels'][':idLabel']['$delete']>
        },
      ) => parseResponse(client.cards[':id'].idLabels[':idLabel'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCardsIdIdMembersIdMemberKey() {
  return ['cards', '/cards/:id/idMembers/:idMember', 'DELETE'] as const
}

export function useDeleteCardsIdIdMembersIdMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['idMembers'][':idMember']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':id']['idMembers'][':idMember']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCardsIdIdMembersIdMemberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.cards)[':id']['idMembers'][':idMember']['$delete']>
        },
      ) => parseResponse(client.cards[':id'].idMembers[':idMember'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCardsIdMembersVotedIdMemberKey() {
  return ['cards', '/cards/:id/membersVoted/:idMember', 'DELETE'] as const
}

export function useDeleteCardsIdMembersVotedIdMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['membersVoted'][':idMember']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':id']['membersVoted'][':idMember']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCardsIdMembersVotedIdMemberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.cards)[':id']['membersVoted'][':idMember']['$delete']
          >
        },
      ) => parseResponse(client.cards[':id'].membersVoted[':idMember'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemKey() {
  return ['cards', '/cards/:idCard/checklist/:idChecklist/checkItem/:idCheckItem', 'PUT'] as const
}

export function usePutCardsIdCardChecklistIdChecklistCheckItemIdCheckItem<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['$put']
          >
        },
      ) =>
        parseResponse(
          client.cards[':idCard'].checklist[':idChecklist'].checkItem[':idCheckItem'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCardsIdChecklistsIdChecklistKey() {
  return ['cards', '/cards/:id/checklists/:idChecklist', 'DELETE'] as const
}

export function useDeleteCardsIdChecklistsIdChecklist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':id']['checklists'][':idChecklist']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':id']['checklists'][':idChecklist']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCardsIdChecklistsIdChecklistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.cards)[':id']['checklists'][':idChecklist']['$delete']
          >
        },
      ) =>
        parseResponse(client.cards[':id'].checklists[':idChecklist'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChecklistsKey() {
  return ['checklists', '/checklists', 'POST'] as const
}

export function usePostChecklists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checklists.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.checklists.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChecklistsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.checklists.$post> }) =>
        parseResponse(client.checklists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChecklistsIdKey(
  args: InferRequestType<(typeof client.checklists)[':id']['$get']>,
) {
  return ['checklists', '/checklists/:id', args] as const
}

export function useGetChecklistsId<TError = unknown>(
  args: InferRequestType<(typeof client.checklists)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChecklistsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.checklists[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChecklistsId<TError = unknown>(
  args: InferRequestType<(typeof client.checklists)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChecklistsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.checklists[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutChecklistsIdKey() {
  return ['checklists', '/checklists/:id', 'PUT'] as const
}

export function usePutChecklistsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.checklists)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChecklistsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.checklists)[':id']['$put']> },
      ) => parseResponse(client.checklists[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteChecklistsIdKey() {
  return ['checklists', '/checklists/:id', 'DELETE'] as const
}

export function useDeleteChecklistsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.checklists)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.checklists)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChecklistsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.checklists)[':id']['$delete']> },
      ) => parseResponse(client.checklists[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChecklistsIdFieldKey(
  args: InferRequestType<(typeof client.checklists)[':id'][':field']['$get']>,
) {
  return ['checklists', '/checklists/:id/:field', args] as const
}

export function useGetChecklistsIdField<TError = unknown>(
  args: InferRequestType<(typeof client.checklists)[':id'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':id'][':field']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChecklistsIdFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':id'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.checklists[':id'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChecklistsIdField<TError = unknown>(
  args: InferRequestType<(typeof client.checklists)[':id'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':id'][':field']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChecklistsIdFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':id'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.checklists[':id'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutChecklistsIdFieldKey() {
  return ['checklists', '/checklists/:id/:field', 'PUT'] as const
}

export function usePutChecklistsIdField<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.checklists)[':id'][':field']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.checklists)[':id'][':field']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChecklistsIdFieldKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.checklists)[':id'][':field']['$put']> },
      ) => parseResponse(client.checklists[':id'][':field'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChecklistsIdBoardKey(
  args: InferRequestType<(typeof client.checklists)[':id']['board']['$get']>,
) {
  return ['checklists', '/checklists/:id/board', args] as const
}

export function useGetChecklistsIdBoard<TError = unknown>(
  args: InferRequestType<(typeof client.checklists)[':id']['board']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':id']['board']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChecklistsIdBoardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':id']['board']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.checklists[':id'].board.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChecklistsIdBoard<TError = unknown>(
  args: InferRequestType<(typeof client.checklists)[':id']['board']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':id']['board']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChecklistsIdBoardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':id']['board']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.checklists[':id'].board.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChecklistsIdCardsKey(
  args: InferRequestType<(typeof client.checklists)[':id']['cards']['$get']>,
) {
  return ['checklists', '/checklists/:id/cards', args] as const
}

export function useGetChecklistsIdCards<TError = unknown>(
  args: InferRequestType<(typeof client.checklists)[':id']['cards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':id']['cards']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChecklistsIdCardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':id']['cards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.checklists[':id'].cards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChecklistsIdCards<TError = unknown>(
  args: InferRequestType<(typeof client.checklists)[':id']['cards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':id']['cards']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChecklistsIdCardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':id']['cards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.checklists[':id'].cards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChecklistsIdCheckItemsKey(
  args: InferRequestType<(typeof client.checklists)[':id']['checkItems']['$get']>,
) {
  return ['checklists', '/checklists/:id/checkItems', args] as const
}

export function useGetChecklistsIdCheckItems<TError = unknown>(
  args: InferRequestType<(typeof client.checklists)[':id']['checkItems']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':id']['checkItems']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChecklistsIdCheckItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':id']['checkItems']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.checklists[':id'].checkItems.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChecklistsIdCheckItems<TError = unknown>(
  args: InferRequestType<(typeof client.checklists)[':id']['checkItems']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':id']['checkItems']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChecklistsIdCheckItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':id']['checkItems']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.checklists[':id'].checkItems.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChecklistsIdCheckItemsKey() {
  return ['checklists', '/checklists/:id/checkItems', 'POST'] as const
}

export function usePostChecklistsIdCheckItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.checklists)[':id']['checkItems']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.checklists)[':id']['checkItems']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChecklistsIdCheckItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.checklists)[':id']['checkItems']['$post']> },
      ) => parseResponse(client.checklists[':id'].checkItems.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChecklistsIdCheckItemsIdCheckItemKey(
  args: InferRequestType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$get']>,
) {
  return ['checklists', '/checklists/:id/checkItems/:idCheckItem', args] as const
}

export function useGetChecklistsIdCheckItemsIdCheckItem<TError = unknown>(
  args: InferRequestType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChecklistsIdCheckItemsIdCheckItemKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.checklists[':id'].checkItems[':idCheckItem'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChecklistsIdCheckItemsIdCheckItem<TError = unknown>(
  args: InferRequestType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChecklistsIdCheckItemsIdCheckItemKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.checklists[':id'].checkItems[':idCheckItem'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteChecklistsIdCheckItemsIdCheckItemKey() {
  return ['checklists', '/checklists/:id/checkItems/:idCheckItem', 'DELETE'] as const
}

export function useDeleteChecklistsIdCheckItemsIdCheckItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChecklistsIdCheckItemsIdCheckItemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.checklists)[':id']['checkItems'][':idCheckItem']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.checklists[':id'].checkItems[':idCheckItem'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCustomFieldsKey() {
  return ['customFields', '/customFields', 'POST'] as const
}

export function usePostCustomFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customFields.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.customFields.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.customFields.$post> }) =>
        parseResponse(client.customFields.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomFieldsIdKey(
  args: InferRequestType<(typeof client.customFields)[':id']['$get']>,
) {
  return ['customFields', '/customFields/:id', args] as const
}

export function useGetCustomFieldsId<TError = unknown>(
  args: InferRequestType<(typeof client.customFields)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.customFields)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCustomFieldsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.customFields)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customFields[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomFieldsId<TError = unknown>(
  args: InferRequestType<(typeof client.customFields)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.customFields)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCustomFieldsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.customFields)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customFields[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCustomFieldsIdKey() {
  return ['customFields', '/customFields/:id', 'PUT'] as const
}

export function usePutCustomFieldsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.customFields)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customFields)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCustomFieldsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.customFields)[':id']['$put']> },
      ) => parseResponse(client.customFields[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCustomFieldsIdKey() {
  return ['customFields', '/customFields/:id', 'DELETE'] as const
}

export function useDeleteCustomFieldsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.customFields)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customFields)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCustomFieldsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.customFields)[':id']['$delete']> },
      ) => parseResponse(client.customFields[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomFieldsIdOptionsKey(
  args: InferRequestType<(typeof client.customFields)[':id']['options']['$get']>,
) {
  return ['customFields', '/customFields/:id/options', args] as const
}

export function useGetCustomFieldsIdOptions<TError = unknown>(
  args: InferRequestType<(typeof client.customFields)[':id']['options']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customFields)[':id']['options']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomFieldsIdOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customFields)[':id']['options']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customFields[':id'].options.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomFieldsIdOptions<TError = unknown>(
  args: InferRequestType<(typeof client.customFields)[':id']['options']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customFields)[':id']['options']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomFieldsIdOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customFields)[':id']['options']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customFields[':id'].options.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCustomFieldsIdOptionsKey() {
  return ['customFields', '/customFields/:id/options', 'POST'] as const
}

export function usePostCustomFieldsIdOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customFields)[':id']['options']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customFields)[':id']['options']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomFieldsIdOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.customFields)[':id']['options']['$post']> },
      ) => parseResponse(client.customFields[':id'].options.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomFieldsIdOptionsIdCustomFieldOptionKey(
  args: InferRequestType<
    (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$get']
  >,
) {
  return ['customFields', '/customFields/:id/options/:idCustomFieldOption', args] as const
}

export function useGetCustomFieldsIdOptionsIdCustomFieldOption<TError = unknown>(
  args: InferRequestType<
    (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomFieldsIdOptionsIdCustomFieldOptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.customFields[':id'].options[':idCustomFieldOption'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomFieldsIdOptionsIdCustomFieldOption<TError = unknown>(
  args: InferRequestType<
    (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCustomFieldsIdOptionsIdCustomFieldOptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.customFields[':id'].options[':idCustomFieldOption'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCustomFieldsIdOptionsIdCustomFieldOptionKey() {
  return ['customFields', '/customFields/:id/options/:idCustomFieldOption', 'DELETE'] as const
}

export function useDeleteCustomFieldsIdOptionsIdCustomFieldOption<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCustomFieldsIdOptionsIdCustomFieldOptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.customFields)[':id']['options'][':idCustomFieldOption']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.customFields[':id'].options[':idCustomFieldOption'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEmojiKey(args: InferRequestType<typeof client.emoji.$get>) {
  return ['emoji', '/emoji', args] as const
}

export function useGetEmoji<TError = unknown>(
  args: InferRequestType<typeof client.emoji.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emoji.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmojiKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emoji.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.emoji.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEmoji<TError = unknown>(
  args: InferRequestType<typeof client.emoji.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emoji.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEmojiKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emoji.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.emoji.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetEnterprisesIdKey(
  args: InferRequestType<(typeof client.enterprises)[':id']['$get']>,
) {
  return ['enterprises', '/enterprises/:id', args] as const
}

export function useGetEnterprisesId<TError = unknown>(
  args: InferRequestType<(typeof client.enterprises)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.enterprises)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEnterprisesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.enterprises)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enterprises[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnterprisesId<TError = unknown>(
  args: InferRequestType<(typeof client.enterprises)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.enterprises)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEnterprisesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.enterprises)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enterprises[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEnterprisesIdAuditlogKey(
  args: InferRequestType<(typeof client.enterprises)[':id']['auditlog']['$get']>,
) {
  return ['enterprises', '/enterprises/:id/auditlog', args] as const
}

export function useGetEnterprisesIdAuditlog<TError = unknown>(
  args: InferRequestType<(typeof client.enterprises)[':id']['auditlog']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['auditlog']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnterprisesIdAuditlogKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['auditlog']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enterprises[':id'].auditlog.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnterprisesIdAuditlog<TError = unknown>(
  args: InferRequestType<(typeof client.enterprises)[':id']['auditlog']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['auditlog']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnterprisesIdAuditlogKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['auditlog']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enterprises[':id'].auditlog.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEnterprisesIdAdminsKey(
  args: InferRequestType<(typeof client.enterprises)[':id']['admins']['$get']>,
) {
  return ['enterprises', '/enterprises/:id/admins', args] as const
}

export function useGetEnterprisesIdAdmins<TError = unknown>(
  args: InferRequestType<(typeof client.enterprises)[':id']['admins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['admins']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnterprisesIdAdminsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['admins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enterprises[':id'].admins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnterprisesIdAdmins<TError = unknown>(
  args: InferRequestType<(typeof client.enterprises)[':id']['admins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['admins']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnterprisesIdAdminsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['admins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enterprises[':id'].admins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEnterprisesIdSignupUrlKey(
  args: InferRequestType<(typeof client.enterprises)[':id']['signupUrl']['$get']>,
) {
  return ['enterprises', '/enterprises/:id/signupUrl', args] as const
}

export function useGetEnterprisesIdSignupUrl<TError = unknown>(
  args: InferRequestType<(typeof client.enterprises)[':id']['signupUrl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['signupUrl']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnterprisesIdSignupUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['signupUrl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enterprises[':id'].signupUrl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnterprisesIdSignupUrl<TError = unknown>(
  args: InferRequestType<(typeof client.enterprises)[':id']['signupUrl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['signupUrl']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnterprisesIdSignupUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['signupUrl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enterprises[':id'].signupUrl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEnterprisesIdMembersQueryKey(
  args: InferRequestType<(typeof client.enterprises)[':id']['members']['query']['$get']>,
) {
  return ['enterprises', '/enterprises/:id/members/query', args] as const
}

export function useGetEnterprisesIdMembersQuery<TError = unknown>(
  args: InferRequestType<(typeof client.enterprises)[':id']['members']['query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['members']['query']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnterprisesIdMembersQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['members']['query']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enterprises[':id'].members.query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnterprisesIdMembersQuery<TError = unknown>(
  args: InferRequestType<(typeof client.enterprises)[':id']['members']['query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['members']['query']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnterprisesIdMembersQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['members']['query']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enterprises[':id'].members.query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEnterprisesIdMembersKey(
  args: InferRequestType<(typeof client.enterprises)[':id']['members']['$get']>,
) {
  return ['enterprises', '/enterprises/:id/members', args] as const
}

export function useGetEnterprisesIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.enterprises)[':id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnterprisesIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enterprises[':id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnterprisesIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.enterprises)[':id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnterprisesIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enterprises[':id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEnterprisesIdMembersIdMemberKey(
  args: InferRequestType<(typeof client.enterprises)[':id']['members'][':idMember']['$get']>,
) {
  return ['enterprises', '/enterprises/:id/members/:idMember', args] as const
}

export function useGetEnterprisesIdMembersIdMember<TError = unknown>(
  args: InferRequestType<(typeof client.enterprises)[':id']['members'][':idMember']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['members'][':idMember']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnterprisesIdMembersIdMemberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['members'][':idMember']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.enterprises[':id'].members[':idMember'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnterprisesIdMembersIdMember<TError = unknown>(
  args: InferRequestType<(typeof client.enterprises)[':id']['members'][':idMember']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['members'][':idMember']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnterprisesIdMembersIdMemberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['members'][':idMember']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.enterprises[':id'].members[':idMember'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEnterprisesIdTransferrableOrganizationIdOrganizationKey(
  args: InferRequestType<
    (typeof client.enterprises)[':id']['transferrable']['organization'][':idOrganization']['$get']
  >,
) {
  return [
    'enterprises',
    '/enterprises/:id/transferrable/organization/:idOrganization',
    args,
  ] as const
}

export function useGetEnterprisesIdTransferrableOrganizationIdOrganization<TError = unknown>(
  args: InferRequestType<
    (typeof client.enterprises)[':id']['transferrable']['organization'][':idOrganization']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.enterprises)[':id']['transferrable']['organization'][':idOrganization']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnterprisesIdTransferrableOrganizationIdOrganizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.enterprises)[':id']['transferrable']['organization'][':idOrganization']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.enterprises[':id'].transferrable.organization[':idOrganization'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnterprisesIdTransferrableOrganizationIdOrganization<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.enterprises)[':id']['transferrable']['organization'][':idOrganization']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.enterprises)[':id']['transferrable']['organization'][':idOrganization']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnterprisesIdTransferrableOrganizationIdOrganizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.enterprises)[':id']['transferrable']['organization'][':idOrganization']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.enterprises[':id'].transferrable.organization[':idOrganization'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEnterprisesIdTransferrableBulkIdOrganizationsKey(
  args: InferRequestType<
    (typeof client.enterprises)[':id']['transferrable']['bulk'][':idOrganizations']['$get']
  >,
) {
  return ['enterprises', '/enterprises/:id/transferrable/bulk/:idOrganizations', args] as const
}

export function useGetEnterprisesIdTransferrableBulkIdOrganizations<TError = unknown>(
  args: InferRequestType<
    (typeof client.enterprises)[':id']['transferrable']['bulk'][':idOrganizations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.enterprises)[':id']['transferrable']['bulk'][':idOrganizations']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnterprisesIdTransferrableBulkIdOrganizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.enterprises)[':id']['transferrable']['bulk'][':idOrganizations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.enterprises[':id'].transferrable.bulk[':idOrganizations'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnterprisesIdTransferrableBulkIdOrganizations<TError = unknown>(
  args: InferRequestType<
    (typeof client.enterprises)[':id']['transferrable']['bulk'][':idOrganizations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.enterprises)[':id']['transferrable']['bulk'][':idOrganizations']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnterprisesIdTransferrableBulkIdOrganizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.enterprises)[':id']['transferrable']['bulk'][':idOrganizations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.enterprises[':id'].transferrable.bulk[':idOrganizations'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutEnterprisesIdEnterpriseJoinRequestBulkKey() {
  return ['enterprises', '/enterprises/$:id/enterpriseJoinRequest/bulk', 'PUT'] as const
}

export function usePutEnterprisesIdEnterpriseJoinRequestBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.enterprises)['$:id']['enterpriseJoinRequest']['bulk']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.enterprises)['$:id']['enterpriseJoinRequest']['bulk']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEnterprisesIdEnterpriseJoinRequestBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.enterprises)['$:id']['enterpriseJoinRequest']['bulk']['$put']
          >
        },
      ) =>
        parseResponse(
          client.enterprises['$:id'].enterpriseJoinRequest.bulk.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEnterprisesIdClaimableOrganizationsKey(
  args: InferRequestType<(typeof client.enterprises)[':id']['claimableOrganizations']['$get']>,
) {
  return ['enterprises', '/enterprises/:id/claimableOrganizations', args] as const
}

export function useGetEnterprisesIdClaimableOrganizations<TError = unknown>(
  args: InferRequestType<(typeof client.enterprises)[':id']['claimableOrganizations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.enterprises)[':id']['claimableOrganizations']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnterprisesIdClaimableOrganizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.enterprises)[':id']['claimableOrganizations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.enterprises[':id'].claimableOrganizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnterprisesIdClaimableOrganizations<TError = unknown>(
  args: InferRequestType<(typeof client.enterprises)[':id']['claimableOrganizations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.enterprises)[':id']['claimableOrganizations']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnterprisesIdClaimableOrganizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.enterprises)[':id']['claimableOrganizations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.enterprises[':id'].claimableOrganizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEnterprisesIdPendingOrganizationsKey(
  args: InferRequestType<(typeof client.enterprises)[':id']['pendingOrganizations']['$get']>,
) {
  return ['enterprises', '/enterprises/:id/pendingOrganizations', args] as const
}

export function useGetEnterprisesIdPendingOrganizations<TError = unknown>(
  args: InferRequestType<(typeof client.enterprises)[':id']['pendingOrganizations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['pendingOrganizations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnterprisesIdPendingOrganizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['pendingOrganizations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.enterprises[':id'].pendingOrganizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnterprisesIdPendingOrganizations<TError = unknown>(
  args: InferRequestType<(typeof client.enterprises)[':id']['pendingOrganizations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['pendingOrganizations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnterprisesIdPendingOrganizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['pendingOrganizations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.enterprises[':id'].pendingOrganizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEnterprisesIdTokensKey() {
  return ['enterprises', '/enterprises/:id/tokens', 'POST'] as const
}

export function usePostEnterprisesIdTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enterprises)[':id']['tokens']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.enterprises)[':id']['tokens']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnterprisesIdTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.enterprises)[':id']['tokens']['$post']> },
      ) => parseResponse(client.enterprises[':id'].tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEnterprisesIdOrganizationsKey(
  args: InferRequestType<(typeof client.enterprises)[':id']['organizations']['$get']>,
) {
  return ['enterprises', '/enterprises/:id/organizations', args] as const
}

export function useGetEnterprisesIdOrganizations<TError = unknown>(
  args: InferRequestType<(typeof client.enterprises)[':id']['organizations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['organizations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnterprisesIdOrganizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['organizations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enterprises[':id'].organizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnterprisesIdOrganizations<TError = unknown>(
  args: InferRequestType<(typeof client.enterprises)[':id']['organizations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['organizations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnterprisesIdOrganizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.enterprises)[':id']['organizations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.enterprises[':id'].organizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutEnterprisesIdOrganizationsKey() {
  return ['enterprises', '/enterprises/:id/organizations', 'PUT'] as const
}

export function usePutEnterprisesIdOrganizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enterprises)[':id']['organizations']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.enterprises)[':id']['organizations']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEnterprisesIdOrganizationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.enterprises)[':id']['organizations']['$put']> },
      ) => parseResponse(client.enterprises[':id'].organizations.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutEnterprisesIdMembersIdMemberLicensedKey() {
  return ['enterprises', '/enterprises/:id/members/:idMember/licensed', 'PUT'] as const
}

export function usePutEnterprisesIdMembersIdMemberLicensed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.enterprises)[':id']['members'][':idMember']['licensed']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.enterprises)[':id']['members'][':idMember']['licensed']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEnterprisesIdMembersIdMemberLicensedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.enterprises)[':id']['members'][':idMember']['licensed']['$put']
          >
        },
      ) =>
        parseResponse(
          client.enterprises[':id'].members[':idMember'].licensed.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutEnterprisesIdMembersIdMemberDeactivatedKey() {
  return ['enterprises', '/enterprises/:id/members/:idMember/deactivated', 'PUT'] as const
}

export function usePutEnterprisesIdMembersIdMemberDeactivated<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.enterprises)[':id']['members'][':idMember']['deactivated']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.enterprises)[':id']['members'][':idMember']['deactivated']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEnterprisesIdMembersIdMemberDeactivatedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.enterprises)[':id']['members'][':idMember']['deactivated']['$put']
          >
        },
      ) =>
        parseResponse(
          client.enterprises[':id'].members[':idMember'].deactivated.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutEnterprisesIdAdminsIdMemberKey() {
  return ['enterprises', '/enterprises/:id/admins/:idMember', 'PUT'] as const
}

export function usePutEnterprisesIdAdminsIdMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enterprises)[':id']['admins'][':idMember']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.enterprises)[':id']['admins'][':idMember']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEnterprisesIdAdminsIdMemberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.enterprises)[':id']['admins'][':idMember']['$put']>
        },
      ) => parseResponse(client.enterprises[':id'].admins[':idMember'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEnterprisesIdAdminsIdMemberKey() {
  return ['enterprises', '/enterprises/:id/admins/:idMember', 'DELETE'] as const
}

export function useDeleteEnterprisesIdAdminsIdMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.enterprises)[':id']['admins'][':idMember']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.enterprises)[':id']['admins'][':idMember']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEnterprisesIdAdminsIdMemberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.enterprises)[':id']['admins'][':idMember']['$delete']
          >
        },
      ) => parseResponse(client.enterprises[':id'].admins[':idMember'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteEnterprisesIdOrganizationsIdOrgKey() {
  return ['enterprises', '/enterprises/:id/organizations/:idOrg', 'DELETE'] as const
}

export function useDeleteEnterprisesIdOrganizationsIdOrg<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.enterprises)[':id']['organizations'][':idOrg']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.enterprises)[':id']['organizations'][':idOrg']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEnterprisesIdOrganizationsIdOrgKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.enterprises)[':id']['organizations'][':idOrg']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.enterprises[':id'].organizations[':idOrg'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEnterprisesIdOrganizationsBulkIdOrganizationsKey(
  args: InferRequestType<
    (typeof client.enterprises)[':id']['organizations']['bulk'][':idOrganizations']['$get']
  >,
) {
  return ['enterprises', '/enterprises/:id/organizations/bulk/:idOrganizations', args] as const
}

export function useGetEnterprisesIdOrganizationsBulkIdOrganizations<TError = unknown>(
  args: InferRequestType<
    (typeof client.enterprises)[':id']['organizations']['bulk'][':idOrganizations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.enterprises)[':id']['organizations']['bulk'][':idOrganizations']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnterprisesIdOrganizationsBulkIdOrganizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.enterprises)[':id']['organizations']['bulk'][':idOrganizations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.enterprises[':id'].organizations.bulk[':idOrganizations'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnterprisesIdOrganizationsBulkIdOrganizations<TError = unknown>(
  args: InferRequestType<
    (typeof client.enterprises)[':id']['organizations']['bulk'][':idOrganizations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.enterprises)[':id']['organizations']['bulk'][':idOrganizations']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetEnterprisesIdOrganizationsBulkIdOrganizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.enterprises)[':id']['organizations']['bulk'][':idOrganizations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.enterprises[':id'].organizations.bulk[':idOrganizations'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLabelsIdKey(args: InferRequestType<(typeof client.labels)[':id']['$get']>) {
  return ['labels', '/labels/:id', args] as const
}

export function useGetLabelsId<TError = unknown>(
  args: InferRequestType<(typeof client.labels)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLabelsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.labels[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLabelsId<TError = unknown>(
  args: InferRequestType<(typeof client.labels)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLabelsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.labels[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutLabelsIdKey() {
  return ['labels', '/labels/:id', 'PUT'] as const
}

export function usePutLabelsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.labels)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLabelsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.labels)[':id']['$put']> }) =>
        parseResponse(client.labels[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLabelsIdKey() {
  return ['labels', '/labels/:id', 'DELETE'] as const
}

export function useDeleteLabelsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.labels)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLabelsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.labels)[':id']['$delete']> },
      ) => parseResponse(client.labels[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutLabelsIdFieldKey() {
  return ['labels', '/labels/:id/:field', 'PUT'] as const
}

export function usePutLabelsIdField<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':id'][':field']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.labels)[':id'][':field']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLabelsIdFieldKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.labels)[':id'][':field']['$put']> },
      ) => parseResponse(client.labels[':id'][':field'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLabelsKey() {
  return ['labels', '/labels', 'POST'] as const
}

export function usePostLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.labels.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.labels.$post> }) =>
        parseResponse(client.labels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListsIdKey(args: InferRequestType<(typeof client.lists)[':id']['$get']>) {
  return ['lists', '/lists/:id', args] as const
}

export function useGetListsId<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListsId<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutListsIdKey() {
  return ['lists', '/lists/:id', 'PUT'] as const
}

export function usePutListsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutListsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.lists)[':id']['$put']> }) =>
        parseResponse(client.lists[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListsKey() {
  return ['lists', '/lists', 'POST'] as const
}

export function usePostLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.lists.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.lists.$post> }) =>
        parseResponse(client.lists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListsIdArchiveAllCardsKey() {
  return ['lists', '/lists/:id/archiveAllCards', 'POST'] as const
}

export function usePostListsIdArchiveAllCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':id']['archiveAllCards']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':id']['archiveAllCards']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListsIdArchiveAllCardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.lists)[':id']['archiveAllCards']['$post']> },
      ) => parseResponse(client.lists[':id'].archiveAllCards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListsIdMoveAllCardsKey() {
  return ['lists', '/lists/:id/moveAllCards', 'POST'] as const
}

export function usePostListsIdMoveAllCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':id']['moveAllCards']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':id']['moveAllCards']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListsIdMoveAllCardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.lists)[':id']['moveAllCards']['$post']> },
      ) => parseResponse(client.lists[':id'].moveAllCards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutListsIdClosedKey() {
  return ['lists', '/lists/:id/closed', 'PUT'] as const
}

export function usePutListsIdClosed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['closed']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':id']['closed']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutListsIdClosedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.lists)[':id']['closed']['$put']> },
      ) => parseResponse(client.lists[':id'].closed.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutListsIdIdBoardKey() {
  return ['lists', '/lists/:id/idBoard', 'PUT'] as const
}

export function usePutListsIdIdBoard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['idBoard']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':id']['idBoard']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutListsIdIdBoardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.lists)[':id']['idBoard']['$put']> },
      ) => parseResponse(client.lists[':id'].idBoard.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutListsIdFieldKey() {
  return ['lists', '/lists/:id/:field', 'PUT'] as const
}

export function usePutListsIdField<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id'][':field']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':id'][':field']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutListsIdFieldKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.lists)[':id'][':field']['$put']> },
      ) => parseResponse(client.lists[':id'][':field'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListsIdActionsKey(
  args: InferRequestType<(typeof client.lists)[':id']['actions']['$get']>,
) {
  return ['lists', '/lists/:id/actions', args] as const
}

export function useGetListsIdActions<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':id']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['actions']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListsIdActionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['actions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':id'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListsIdActions<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':id']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['actions']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListsIdActionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['actions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':id'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListsIdBoardKey(
  args: InferRequestType<(typeof client.lists)[':id']['board']['$get']>,
) {
  return ['lists', '/lists/:id/board', args] as const
}

export function useGetListsIdBoard<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':id']['board']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['board']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListsIdBoardKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['board']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':id'].board.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListsIdBoard<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':id']['board']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['board']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListsIdBoardKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['board']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':id'].board.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListsIdCardsKey(
  args: InferRequestType<(typeof client.lists)[':id']['cards']['$get']>,
) {
  return ['lists', '/lists/:id/cards', args] as const
}

export function useGetListsIdCards<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':id']['cards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['cards']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListsIdCardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['cards']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':id'].cards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListsIdCards<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':id']['cards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['cards']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListsIdCardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['cards']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':id'].cards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMembersIdKey(args: InferRequestType<(typeof client.members)[':id']['$get']>) {
  return ['members', '/members/:id', args] as const
}

export function useGetMembersId<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMembersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersId<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMembersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMembersIdKey() {
  return ['members', '/members/:id', 'PUT'] as const
}

export function usePutMembersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMembersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.members)[':id']['$put']> }) =>
        parseResponse(client.members[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdFieldKey(
  args: InferRequestType<(typeof client.members)[':id'][':field']['$get']>,
) {
  return ['members', '/members/:id/:field', args] as const
}

export function useGetMembersIdField<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id'][':field']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMembersIdFieldKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdField<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id'][':field']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMembersIdFieldKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMembersIdActionsKey(
  args: InferRequestType<(typeof client.members)[':id']['actions']['$get']>,
) {
  return ['members', '/members/:id/actions', args] as const
}

export function useGetMembersIdActions<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['actions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdActions<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['actions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMembersIdBoardBackgroundsKey(
  args: InferRequestType<(typeof client.members)[':id']['boardBackgrounds']['$get']>,
) {
  return ['members', '/members/:id/boardBackgrounds', args] as const
}

export function useGetMembersIdBoardBackgrounds<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['boardBackgrounds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['boardBackgrounds']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdBoardBackgroundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['boardBackgrounds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'].boardBackgrounds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdBoardBackgrounds<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['boardBackgrounds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['boardBackgrounds']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdBoardBackgroundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['boardBackgrounds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'].boardBackgrounds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMembersIdBoardBackgroundsKey() {
  return ['members', '/members/:id/boardBackgrounds', 'POST'] as const
}

export function usePostMembersIdBoardBackgrounds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['boardBackgrounds']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':id']['boardBackgrounds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMembersIdBoardBackgroundsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.members)[':id']['boardBackgrounds']['$post']> },
      ) => parseResponse(client.members[':id'].boardBackgrounds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdBoardBackgroundsIdBackgroundKey(
  args: InferRequestType<
    (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$get']
  >,
) {
  return ['members', '/members/:id/boardBackgrounds/:idBackground', args] as const
}

export function useGetMembersIdBoardBackgroundsIdBackground<TError = unknown>(
  args: InferRequestType<
    (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdBoardBackgroundsIdBackgroundKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.members[':id'].boardBackgrounds[':idBackground'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdBoardBackgroundsIdBackground<TError = unknown>(
  args: InferRequestType<
    (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdBoardBackgroundsIdBackgroundKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.members[':id'].boardBackgrounds[':idBackground'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMembersIdBoardBackgroundsIdBackgroundKey() {
  return ['members', '/members/:id/boardBackgrounds/:idBackground', 'PUT'] as const
}

export function usePutMembersIdBoardBackgroundsIdBackground<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMembersIdBoardBackgroundsIdBackgroundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$put']
          >
        },
      ) =>
        parseResponse(
          client.members[':id'].boardBackgrounds[':idBackground'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMembersIdBoardBackgroundsIdBackgroundKey() {
  return ['members', '/members/:id/boardBackgrounds/:idBackground', 'DELETE'] as const
}

export function useDeleteMembersIdBoardBackgroundsIdBackground<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMembersIdBoardBackgroundsIdBackgroundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.members)[':id']['boardBackgrounds'][':idBackground']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.members[':id'].boardBackgrounds[':idBackground'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdBoardStarsKey(
  args: InferRequestType<(typeof client.members)[':id']['boardStars']['$get']>,
) {
  return ['members', '/members/:id/boardStars', args] as const
}

export function useGetMembersIdBoardStars<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['boardStars']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['boardStars']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdBoardStarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['boardStars']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'].boardStars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdBoardStars<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['boardStars']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['boardStars']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdBoardStarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['boardStars']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'].boardStars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMembersIdBoardStarsKey() {
  return ['members', '/members/:id/boardStars', 'POST'] as const
}

export function usePostMembersIdBoardStars<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['boardStars']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':id']['boardStars']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMembersIdBoardStarsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.members)[':id']['boardStars']['$post']> },
      ) => parseResponse(client.members[':id'].boardStars.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdBoardStarsIdStarKey(
  args: InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$get']>,
) {
  return ['members', '/members/:id/boardStars/:idStar', args] as const
}

export function useGetMembersIdBoardStarsIdStar<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['boardStars'][':idStar']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdBoardStarsIdStarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['boardStars'][':idStar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':id'].boardStars[':idStar'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdBoardStarsIdStar<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['boardStars'][':idStar']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdBoardStarsIdStarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['boardStars'][':idStar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':id'].boardStars[':idStar'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMembersIdBoardStarsIdStarKey() {
  return ['members', '/members/:id/boardStars/:idStar', 'PUT'] as const
}

export function usePutMembersIdBoardStarsIdStar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['boardStars'][':idStar']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMembersIdBoardStarsIdStarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$put']>
        },
      ) => parseResponse(client.members[':id'].boardStars[':idStar'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMembersIdBoardStarsIdStarKey() {
  return ['members', '/members/:id/boardStars/:idStar', 'DELETE'] as const
}

export function useDeleteMembersIdBoardStarsIdStar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['boardStars'][':idStar']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMembersIdBoardStarsIdStarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.members)[':id']['boardStars'][':idStar']['$delete']>
        },
      ) => parseResponse(client.members[':id'].boardStars[':idStar'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdBoardsKey(
  args: InferRequestType<(typeof client.members)[':id']['boards']['$get']>,
) {
  return ['members', '/members/:id/boards', args] as const
}

export function useGetMembersIdBoards<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['boards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['boards']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdBoardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['boards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'].boards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdBoards<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['boards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['boards']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdBoardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['boards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'].boards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMembersIdBoardsInvitedKey(
  args: InferRequestType<(typeof client.members)[':id']['boardsInvited']['$get']>,
) {
  return ['members', '/members/:id/boardsInvited', args] as const
}

export function useGetMembersIdBoardsInvited<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['boardsInvited']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['boardsInvited']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdBoardsInvitedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['boardsInvited']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'].boardsInvited.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdBoardsInvited<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['boardsInvited']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['boardsInvited']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdBoardsInvitedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['boardsInvited']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'].boardsInvited.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMembersIdCardsKey(
  args: InferRequestType<(typeof client.members)[':id']['cards']['$get']>,
) {
  return ['members', '/members/:id/cards', args] as const
}

export function useGetMembersIdCards<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['cards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['cards']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMembersIdCardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['cards']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'].cards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdCards<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['cards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['cards']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMembersIdCardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['cards']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'].cards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMembersIdCustomBoardBackgroundsKey(
  args: InferRequestType<(typeof client.members)[':id']['customBoardBackgrounds']['$get']>,
) {
  return ['members', '/members/:id/customBoardBackgrounds', args] as const
}

export function useGetMembersIdCustomBoardBackgrounds<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['customBoardBackgrounds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['customBoardBackgrounds']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdCustomBoardBackgroundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['customBoardBackgrounds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':id'].customBoardBackgrounds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdCustomBoardBackgrounds<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['customBoardBackgrounds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['customBoardBackgrounds']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdCustomBoardBackgroundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['customBoardBackgrounds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':id'].customBoardBackgrounds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMembersIdCustomBoardBackgroundsKey() {
  return ['members', '/members/:id/customBoardBackgrounds', 'POST'] as const
}

export function usePostMembersIdCustomBoardBackgrounds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['customBoardBackgrounds']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':id']['customBoardBackgrounds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMembersIdCustomBoardBackgroundsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.members)[':id']['customBoardBackgrounds']['$post']>
        },
      ) => parseResponse(client.members[':id'].customBoardBackgrounds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdCustomBoardBackgroundsIdBackgroundKey(
  args: InferRequestType<
    (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$get']
  >,
) {
  return ['members', '/members/:id/customBoardBackgrounds/:idBackground', args] as const
}

export function useGetMembersIdCustomBoardBackgroundsIdBackground<TError = unknown>(
  args: InferRequestType<
    (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdCustomBoardBackgroundsIdBackgroundKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.members[':id'].customBoardBackgrounds[':idBackground'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdCustomBoardBackgroundsIdBackground<TError = unknown>(
  args: InferRequestType<
    (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdCustomBoardBackgroundsIdBackgroundKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.members[':id'].customBoardBackgrounds[':idBackground'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMembersIdCustomBoardBackgroundsIdBackgroundKey() {
  return ['members', '/members/:id/customBoardBackgrounds/:idBackground', 'PUT'] as const
}

export function usePutMembersIdCustomBoardBackgroundsIdBackground<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMembersIdCustomBoardBackgroundsIdBackgroundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$put']
          >
        },
      ) =>
        parseResponse(
          client.members[':id'].customBoardBackgrounds[':idBackground'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMembersIdCustomBoardBackgroundsIdBackgroundKey() {
  return ['members', '/members/:id/customBoardBackgrounds/:idBackground', 'DELETE'] as const
}

export function useDeleteMembersIdCustomBoardBackgroundsIdBackground<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMembersIdCustomBoardBackgroundsIdBackgroundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.members)[':id']['customBoardBackgrounds'][':idBackground']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.members[':id'].customBoardBackgrounds[':idBackground'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdCustomEmojiKey(
  args: InferRequestType<(typeof client.members)[':id']['customEmoji']['$get']>,
) {
  return ['members', '/members/:id/customEmoji', args] as const
}

export function useGetMembersIdCustomEmoji<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['customEmoji']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['customEmoji']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdCustomEmojiKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['customEmoji']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'].customEmoji.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdCustomEmoji<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['customEmoji']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['customEmoji']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdCustomEmojiKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['customEmoji']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'].customEmoji.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMembersIdCustomEmojiKey() {
  return ['members', '/members/:id/customEmoji', 'POST'] as const
}

export function usePostMembersIdCustomEmoji<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['customEmoji']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':id']['customEmoji']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMembersIdCustomEmojiKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.members)[':id']['customEmoji']['$post']> },
      ) => parseResponse(client.members[':id'].customEmoji.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdCustomEmojiIdEmojiKey(
  args: InferRequestType<(typeof client.members)[':id']['customEmoji'][':idEmoji']['$get']>,
) {
  return ['members', '/members/:id/customEmoji/:idEmoji', args] as const
}

export function useGetMembersIdCustomEmojiIdEmoji<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['customEmoji'][':idEmoji']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['customEmoji'][':idEmoji']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdCustomEmojiIdEmojiKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['customEmoji'][':idEmoji']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':id'].customEmoji[':idEmoji'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdCustomEmojiIdEmoji<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['customEmoji'][':idEmoji']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['customEmoji'][':idEmoji']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdCustomEmojiIdEmojiKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['customEmoji'][':idEmoji']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':id'].customEmoji[':idEmoji'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMembersIdCustomStickersKey(
  args: InferRequestType<(typeof client.members)[':id']['customStickers']['$get']>,
) {
  return ['members', '/members/:id/customStickers', args] as const
}

export function useGetMembersIdCustomStickers<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['customStickers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['customStickers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdCustomStickersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['customStickers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'].customStickers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdCustomStickers<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['customStickers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['customStickers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdCustomStickersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['customStickers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'].customStickers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMembersIdCustomStickersKey() {
  return ['members', '/members/:id/customStickers', 'POST'] as const
}

export function usePostMembersIdCustomStickers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['customStickers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':id']['customStickers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMembersIdCustomStickersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.members)[':id']['customStickers']['$post']> },
      ) => parseResponse(client.members[':id'].customStickers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdCustomStickersIdStickerKey(
  args: InferRequestType<(typeof client.members)[':id']['customStickers'][':idSticker']['$get']>,
) {
  return ['members', '/members/:id/customStickers/:idSticker', args] as const
}

export function useGetMembersIdCustomStickersIdSticker<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['customStickers'][':idSticker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':id']['customStickers'][':idSticker']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdCustomStickersIdStickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':id']['customStickers'][':idSticker']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':id'].customStickers[':idSticker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdCustomStickersIdSticker<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['customStickers'][':idSticker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':id']['customStickers'][':idSticker']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdCustomStickersIdStickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':id']['customStickers'][':idSticker']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':id'].customStickers[':idSticker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMembersIdCustomStickersIdStickerKey() {
  return ['members', '/members/:id/customStickers/:idSticker', 'DELETE'] as const
}

export function useDeleteMembersIdCustomStickersIdSticker<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.members)[':id']['customStickers'][':idSticker']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':id']['customStickers'][':idSticker']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMembersIdCustomStickersIdStickerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.members)[':id']['customStickers'][':idSticker']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.members[':id'].customStickers[':idSticker'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdNotificationsKey(
  args: InferRequestType<(typeof client.members)[':id']['notifications']['$get']>,
) {
  return ['members', '/members/:id/notifications', args] as const
}

export function useGetMembersIdNotifications<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['notifications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['notifications']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdNotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['notifications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'].notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdNotifications<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['notifications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['notifications']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdNotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['notifications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'].notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMembersIdOrganizationsKey(
  args: InferRequestType<(typeof client.members)[':id']['organizations']['$get']>,
) {
  return ['members', '/members/:id/organizations', args] as const
}

export function useGetMembersIdOrganizations<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['organizations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['organizations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdOrganizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['organizations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'].organizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdOrganizations<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['organizations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['organizations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdOrganizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['organizations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'].organizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMembersIdOrganizationsInvitedKey(
  args: InferRequestType<(typeof client.members)[':id']['organizationsInvited']['$get']>,
) {
  return ['members', '/members/:id/organizationsInvited', args] as const
}

export function useGetMembersIdOrganizationsInvited<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['organizationsInvited']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['organizationsInvited']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdOrganizationsInvitedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['organizationsInvited']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':id'].organizationsInvited.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdOrganizationsInvited<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['organizationsInvited']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['organizationsInvited']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdOrganizationsInvitedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['organizationsInvited']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':id'].organizationsInvited.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMembersIdSavedSearchesKey(
  args: InferRequestType<(typeof client.members)[':id']['savedSearches']['$get']>,
) {
  return ['members', '/members/:id/savedSearches', args] as const
}

export function useGetMembersIdSavedSearches<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['savedSearches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['savedSearches']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdSavedSearchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['savedSearches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'].savedSearches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdSavedSearches<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['savedSearches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['savedSearches']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdSavedSearchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['savedSearches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'].savedSearches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMembersIdSavedSearchesKey() {
  return ['members', '/members/:id/savedSearches', 'POST'] as const
}

export function usePostMembersIdSavedSearches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['savedSearches']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':id']['savedSearches']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMembersIdSavedSearchesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.members)[':id']['savedSearches']['$post']> },
      ) => parseResponse(client.members[':id'].savedSearches.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdSavedSearchesIdSearchKey(
  args: InferRequestType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$get']>,
) {
  return ['members', '/members/:id/savedSearches/:idSearch', args] as const
}

export function useGetMembersIdSavedSearchesIdSearch<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdSavedSearchesIdSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':id'].savedSearches[':idSearch'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdSavedSearchesIdSearch<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdSavedSearchesIdSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':id'].savedSearches[':idSearch'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMembersIdSavedSearchesIdSearchKey() {
  return ['members', '/members/:id/savedSearches/:idSearch', 'PUT'] as const
}

export function usePutMembersIdSavedSearchesIdSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMembersIdSavedSearchesIdSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.members)[':id']['savedSearches'][':idSearch']['$put']
          >
        },
      ) => parseResponse(client.members[':id'].savedSearches[':idSearch'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMembersIdSavedSearchesIdSearchKey() {
  return ['members', '/members/:id/savedSearches/:idSearch', 'DELETE'] as const
}

export function useDeleteMembersIdSavedSearchesIdSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':id']['savedSearches'][':idSearch']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMembersIdSavedSearchesIdSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.members)[':id']['savedSearches'][':idSearch']['$delete']
          >
        },
      ) =>
        parseResponse(client.members[':id'].savedSearches[':idSearch'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdTokensKey(
  args: InferRequestType<(typeof client.members)[':id']['tokens']['$get']>,
) {
  return ['members', '/members/:id/tokens', args] as const
}

export function useGetMembersIdTokens<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['tokens']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['tokens']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'].tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdTokens<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['tokens']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':id']['tokens']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':id'].tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMembersIdAvatarKey() {
  return ['members', '/members/:id/avatar', 'POST'] as const
}

export function usePostMembersIdAvatar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':id']['avatar']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':id']['avatar']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMembersIdAvatarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.members)[':id']['avatar']['$post']> },
      ) => parseResponse(client.members[':id'].avatar.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMembersIdOneTimeMessagesDismissedKey() {
  return ['members', '/members/:id/oneTimeMessagesDismissed', 'POST'] as const
}

export function usePostMembersIdOneTimeMessagesDismissed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['oneTimeMessagesDismissed']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':id']['oneTimeMessagesDismissed']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMembersIdOneTimeMessagesDismissedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.members)[':id']['oneTimeMessagesDismissed']['$post']>
        },
      ) => parseResponse(client.members[':id'].oneTimeMessagesDismissed.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdNotificationChannelSettingsKey(
  args: InferRequestType<(typeof client.members)[':id']['notificationChannelSettings']['$get']>,
) {
  return ['members', '/members/:id/notificationChannelSettings', args] as const
}

export function useGetMembersIdNotificationChannelSettings<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['notificationChannelSettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':id']['notificationChannelSettings']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdNotificationChannelSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':id']['notificationChannelSettings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':id'].notificationChannelSettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdNotificationChannelSettings<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':id']['notificationChannelSettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':id']['notificationChannelSettings']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdNotificationChannelSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':id']['notificationChannelSettings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':id'].notificationChannelSettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMembersIdNotificationChannelSettingsKey() {
  return ['members', '/members/:id/notificationChannelSettings', 'PUT'] as const
}

export function usePutMembersIdNotificationChannelSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':id']['notificationChannelSettings']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':id']['notificationChannelSettings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMembersIdNotificationChannelSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.members)[':id']['notificationChannelSettings']['$put']
          >
        },
      ) =>
        parseResponse(client.members[':id'].notificationChannelSettings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdNotificationChannelSettingsChannelKey(
  args: InferRequestType<
    (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$get']
  >,
) {
  return ['members', '/members/:id/notificationChannelSettings/:channel', args] as const
}

export function useGetMembersIdNotificationChannelSettingsChannel<TError = unknown>(
  args: InferRequestType<
    (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdNotificationChannelSettingsChannelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.members[':id'].notificationChannelSettings[':channel'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdNotificationChannelSettingsChannel<TError = unknown>(
  args: InferRequestType<
    (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMembersIdNotificationChannelSettingsChannelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.members[':id'].notificationChannelSettings[':channel'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMembersIdNotificationChannelSettingsChannelKey() {
  return ['members', '/members/:id/notificationChannelSettings/:channel', 'PUT'] as const
}

export function usePutMembersIdNotificationChannelSettingsChannel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMembersIdNotificationChannelSettingsChannelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.members)[':id']['notificationChannelSettings'][':channel']['$put']
          >
        },
      ) =>
        parseResponse(
          client.members[':id'].notificationChannelSettings[':channel'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMembersIdNotificationChannelSettingsChannelBlockedKeysKey() {
  return [
    'members',
    '/members/:id/notificationChannelSettings/:channel/:blockedKeys',
    'PUT',
  ] as const
}

export function usePutMembersIdNotificationChannelSettingsChannelBlockedKeys<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':id']['notificationChannelSettings'][':channel'][':blockedKeys']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.members)[':id']['notificationChannelSettings'][':channel'][':blockedKeys']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMembersIdNotificationChannelSettingsChannelBlockedKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.members)[':id']['notificationChannelSettings'][':channel'][':blockedKeys']['$put']
          >
        },
      ) =>
        parseResponse(
          client.members[':id'].notificationChannelSettings[':channel'][':blockedKeys'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationsIdKey(
  args: InferRequestType<(typeof client.notifications)[':id']['$get']>,
) {
  return ['notifications', '/notifications/:id', args] as const
}

export function useGetNotificationsId<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsId<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNotificationsIdKey() {
  return ['notifications', '/notifications/:id', 'PUT'] as const
}

export function usePutNotificationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.notifications)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notifications)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNotificationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.notifications)[':id']['$put']> },
      ) => parseResponse(client.notifications[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationsIdFieldKey(
  args: InferRequestType<(typeof client.notifications)[':id'][':field']['$get']>,
) {
  return ['notifications', '/notifications/:id/:field', args] as const
}

export function useGetNotificationsIdField<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':id'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id'][':field']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsIdFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications[':id'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsIdField<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':id'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id'][':field']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsIdFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications[':id'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNotificationsAllReadKey() {
  return ['notifications', '/notifications/all/read', 'POST'] as const
}

export function usePostNotificationsAllRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.all.read.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.notifications.all.read.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationsAllReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.notifications.all.read.$post> },
      ) => parseResponse(client.notifications.all.read.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutNotificationsIdUnreadKey() {
  return ['notifications', '/notifications/:id/unread', 'PUT'] as const
}

export function usePutNotificationsIdUnread<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications)[':id']['unread']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notifications)[':id']['unread']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNotificationsIdUnreadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.notifications)[':id']['unread']['$put']> },
      ) => parseResponse(client.notifications[':id'].unread.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationsIdBoardKey(
  args: InferRequestType<(typeof client.notifications)[':id']['board']['$get']>,
) {
  return ['notifications', '/notifications/:id/board', args] as const
}

export function useGetNotificationsIdBoard<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':id']['board']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id']['board']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsIdBoardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id']['board']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications[':id'].board.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsIdBoard<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':id']['board']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id']['board']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsIdBoardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id']['board']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications[':id'].board.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsIdCardKey(
  args: InferRequestType<(typeof client.notifications)[':id']['card']['$get']>,
) {
  return ['notifications', '/notifications/:id/card', args] as const
}

export function useGetNotificationsIdCard<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':id']['card']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id']['card']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsIdCardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id']['card']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications[':id'].card.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsIdCard<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':id']['card']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id']['card']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsIdCardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id']['card']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications[':id'].card.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsIdListKey(
  args: InferRequestType<(typeof client.notifications)[':id']['list']['$get']>,
) {
  return ['notifications', '/notifications/:id/list', args] as const
}

export function useGetNotificationsIdList<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':id']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id']['list']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsIdListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications[':id'].list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsIdList<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':id']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id']['list']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsIdListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications[':id'].list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsIdMemberKey(
  args: InferRequestType<(typeof client.notifications)[':id']['member']['$get']>,
) {
  return ['notifications', '/notifications/:id/member', args] as const
}

export function useGetNotificationsIdMember<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':id']['member']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id']['member']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsIdMemberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id']['member']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications[':id'].member.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsIdMember<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':id']['member']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id']['member']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsIdMemberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id']['member']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications[':id'].member.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsIdMemberCreatorKey(
  args: InferRequestType<(typeof client.notifications)[':id']['memberCreator']['$get']>,
) {
  return ['notifications', '/notifications/:id/memberCreator', args] as const
}

export function useGetNotificationsIdMemberCreator<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':id']['memberCreator']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id']['memberCreator']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsIdMemberCreatorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id']['memberCreator']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications[':id'].memberCreator.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsIdMemberCreator<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':id']['memberCreator']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id']['memberCreator']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsIdMemberCreatorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id']['memberCreator']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications[':id'].memberCreator.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsIdOrganizationKey(
  args: InferRequestType<(typeof client.notifications)[':id']['organization']['$get']>,
) {
  return ['notifications', '/notifications/:id/organization', args] as const
}

export function useGetNotificationsIdOrganization<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':id']['organization']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id']['organization']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsIdOrganizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id']['organization']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications[':id'].organization.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsIdOrganization<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':id']['organization']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id']['organization']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsIdOrganizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':id']['organization']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications[':id'].organization.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsKey() {
  return ['organizations', '/organizations', 'POST'] as const
}

export function usePostOrganizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.organizations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.organizations.$post> }) =>
        parseResponse(client.organizations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsIdKey(
  args: InferRequestType<(typeof client.organizations)[':id']['$get']>,
) {
  return ['organizations', '/organizations/:id', args] as const
}

export function useGetOrganizationsId<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsId<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsIdKey() {
  return ['organizations', '/organizations/:id', 'PUT'] as const
}

export function usePutOrganizationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.organizations)[':id']['$put']> },
      ) => parseResponse(client.organizations[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsIdKey() {
  return ['organizations', '/organizations/:id', 'DELETE'] as const
}

export function useDeleteOrganizationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.organizations)[':id']['$delete']> },
      ) => parseResponse(client.organizations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsIdFieldKey(
  args: InferRequestType<(typeof client.organizations)[':id'][':field']['$get']>,
) {
  return ['organizations', '/organizations/:id/:field', args] as const
}

export function useGetOrganizationsIdField<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':id'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id'][':field']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsIdFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':id'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsIdField<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':id'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id'][':field']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsIdFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':id'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsIdActionsKey(
  args: InferRequestType<(typeof client.organizations)[':id']['actions']['$get']>,
) {
  return ['organizations', '/organizations/:id/actions', args] as const
}

export function useGetOrganizationsIdActions<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':id']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id']['actions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsIdActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id']['actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':id'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsIdActions<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':id']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id']['actions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsIdActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id']['actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':id'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsIdBoardsKey(
  args: InferRequestType<(typeof client.organizations)[':id']['boards']['$get']>,
) {
  return ['organizations', '/organizations/:id/boards', args] as const
}

export function useGetOrganizationsIdBoards<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':id']['boards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id']['boards']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsIdBoardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id']['boards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':id'].boards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsIdBoards<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':id']['boards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id']['boards']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsIdBoardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id']['boards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':id'].boards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsIdExportsKey(
  args: InferRequestType<(typeof client.organizations)[':id']['exports']['$get']>,
) {
  return ['organizations', '/organizations/:id/exports', args] as const
}

export function useGetOrganizationsIdExports<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':id']['exports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id']['exports']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsIdExportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id']['exports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':id'].exports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsIdExports<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':id']['exports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id']['exports']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsIdExportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id']['exports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':id'].exports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsIdExportsKey() {
  return ['organizations', '/organizations/:id/exports', 'POST'] as const
}

export function usePostOrganizationsIdExports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['exports']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':id']['exports']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsIdExportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.organizations)[':id']['exports']['$post']> },
      ) => parseResponse(client.organizations[':id'].exports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsIdMembersKey(
  args: InferRequestType<(typeof client.organizations)[':id']['members']['$get']>,
) {
  return ['organizations', '/organizations/:id/members', args] as const
}

export function useGetOrganizationsIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsIdMembersKey() {
  return ['organizations', '/organizations/:id/members', 'PUT'] as const
}

export function usePutOrganizationsIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['members']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':id']['members']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsIdMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.organizations)[':id']['members']['$put']> },
      ) => parseResponse(client.organizations[':id'].members.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsIdMembershipsKey(
  args: InferRequestType<(typeof client.organizations)[':id']['memberships']['$get']>,
) {
  return ['organizations', '/organizations/:id/memberships', args] as const
}

export function useGetOrganizationsIdMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':id']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id']['memberships']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsIdMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id']['memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':id'].memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsIdMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':id']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id']['memberships']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsIdMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id']['memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':id'].memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsIdMembershipsIdMembershipKey(
  args: InferRequestType<
    (typeof client.organizations)[':id']['memberships'][':idMembership']['$get']
  >,
) {
  return ['organizations', '/organizations/:id/memberships/:idMembership', args] as const
}

export function useGetOrganizationsIdMembershipsIdMembership<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':id']['memberships'][':idMembership']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':id']['memberships'][':idMembership']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsIdMembershipsIdMembershipKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':id']['memberships'][':idMembership']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':id'].memberships[':idMembership'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsIdMembershipsIdMembership<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':id']['memberships'][':idMembership']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':id']['memberships'][':idMembership']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsIdMembershipsIdMembershipKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':id']['memberships'][':idMembership']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':id'].memberships[':idMembership'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsIdPluginDataKey(
  args: InferRequestType<(typeof client.organizations)[':id']['pluginData']['$get']>,
) {
  return ['organizations', '/organizations/:id/pluginData', args] as const
}

export function useGetOrganizationsIdPluginData<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':id']['pluginData']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id']['pluginData']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsIdPluginDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id']['pluginData']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':id'].pluginData.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsIdPluginData<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':id']['pluginData']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id']['pluginData']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsIdPluginDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id']['pluginData']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':id'].pluginData.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsIdTagsKey(
  args: InferRequestType<(typeof client.organizations)[':id']['tags']['$get']>,
) {
  return ['organizations', '/organizations/:id/tags', args] as const
}

export function useGetOrganizationsIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':id']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id']['tags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':id'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':id']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id']['tags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':id']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':id'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsIdTagsKey() {
  return ['organizations', '/organizations/:id/tags', 'POST'] as const
}

export function usePostOrganizationsIdTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['tags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':id']['tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsIdTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.organizations)[':id']['tags']['$post']> },
      ) => parseResponse(client.organizations[':id'].tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOrganizationsIdMembersIdMemberKey() {
  return ['organizations', '/organizations/:id/members/:idMember', 'PUT'] as const
}

export function usePutOrganizationsIdMembersIdMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['members'][':idMember']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':id']['members'][':idMember']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsIdMembersIdMemberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.organizations)[':id']['members'][':idMember']['$put']
          >
        },
      ) => parseResponse(client.organizations[':id'].members[':idMember'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsIdMembersIdMemberKey() {
  return ['organizations', '/organizations/:id/members/:idMember', 'DELETE'] as const
}

export function useDeleteOrganizationsIdMembersIdMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':id']['members'][':idMember']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':id']['members'][':idMember']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsIdMembersIdMemberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.organizations)[':id']['members'][':idMember']['$delete']
          >
        },
      ) =>
        parseResponse(client.organizations[':id'].members[':idMember'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOrganizationsIdMembersIdMemberDeactivatedKey() {
  return ['organizations', '/organizations/:id/members/:idMember/deactivated', 'PUT'] as const
}

export function usePutOrganizationsIdMembersIdMemberDeactivated<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':id']['members'][':idMember']['deactivated']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':id']['members'][':idMember']['deactivated']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsIdMembersIdMemberDeactivatedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.organizations)[':id']['members'][':idMember']['deactivated']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':id'].members[':idMember'].deactivated.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationsIdLogoKey() {
  return ['organizations', '/organizations/:id/logo', 'POST'] as const
}

export function usePostOrganizationsIdLogo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['logo']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':id']['logo']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsIdLogoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.organizations)[':id']['logo']['$post']> },
      ) => parseResponse(client.organizations[':id'].logo.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsIdLogoKey() {
  return ['organizations', '/organizations/:id/logo', 'DELETE'] as const
}

export function useDeleteOrganizationsIdLogo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['logo']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':id']['logo']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsIdLogoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.organizations)[':id']['logo']['$delete']> },
      ) => parseResponse(client.organizations[':id'].logo.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsIdMembersIdMemberAllKey() {
  return ['organizations', '/organizations/:id/members/:idMember/all', 'DELETE'] as const
}

export function useDeleteOrganizationsIdMembersIdMemberAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':id']['members'][':idMember']['all']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':id']['members'][':idMember']['all']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsIdMembersIdMemberAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.organizations)[':id']['members'][':idMember']['all']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':id'].members[':idMember'].all.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsIdPrefsAssociatedDomainKey() {
  return ['organizations', '/organizations/:id/prefs/associatedDomain', 'DELETE'] as const
}

export function useDeleteOrganizationsIdPrefsAssociatedDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':id']['prefs']['associatedDomain']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':id']['prefs']['associatedDomain']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsIdPrefsAssociatedDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.organizations)[':id']['prefs']['associatedDomain']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':id'].prefs.associatedDomain.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsIdPrefsOrgInviteRestrictKey() {
  return ['organizations', '/organizations/:id/prefs/orgInviteRestrict', 'DELETE'] as const
}

export function useDeleteOrganizationsIdPrefsOrgInviteRestrict<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':id']['prefs']['orgInviteRestrict']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':id']['prefs']['orgInviteRestrict']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsIdPrefsOrgInviteRestrictKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.organizations)[':id']['prefs']['orgInviteRestrict']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':id'].prefs.orgInviteRestrict.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsIdTagsIdTagKey() {
  return ['organizations', '/organizations/:id/tags/:idTag', 'DELETE'] as const
}

export function useDeleteOrganizationsIdTagsIdTag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':id']['tags'][':idTag']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':id']['tags'][':idTag']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsIdTagsIdTagKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.organizations)[':id']['tags'][':idTag']['$delete']>
        },
      ) => parseResponse(client.organizations[':id'].tags[':idTag'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsIdNewBillableGuestsIdBoardKey(
  args: InferRequestType<
    (typeof client.organizations)[':id']['newBillableGuests'][':idBoard']['$get']
  >,
) {
  return ['organizations', '/organizations/:id/newBillableGuests/:idBoard', args] as const
}

export function useGetOrganizationsIdNewBillableGuestsIdBoard<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':id']['newBillableGuests'][':idBoard']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':id']['newBillableGuests'][':idBoard']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsIdNewBillableGuestsIdBoardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':id']['newBillableGuests'][':idBoard']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':id'].newBillableGuests[':idBoard'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsIdNewBillableGuestsIdBoard<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':id']['newBillableGuests'][':idBoard']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':id']['newBillableGuests'][':idBoard']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrganizationsIdNewBillableGuestsIdBoardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':id']['newBillableGuests'][':idBoard']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':id'].newBillableGuests[':idBoard'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPluginsIdIndexKey(
  args: InferRequestType<(typeof client.plugins)[':id']['index']['$get']>,
) {
  return ['plugins', '/plugins/:id/', args] as const
}

export function useGetPluginsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.plugins)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['index']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPluginsIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plugins[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPluginsIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.plugins)[':id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['index']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPluginsIdIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plugins[':id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPluginsIdIndexKey() {
  return ['plugins', '/plugins/:id/', 'PUT'] as const
}

export function usePutPluginsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':id']['index']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.plugins)[':id']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPluginsIdIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.plugins)[':id']['index']['$put']> },
      ) => parseResponse(client.plugins[':id'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPluginsIdPluginListingsKey() {
  return ['plugins', '/plugins/:idPlugin/listings', 'POST'] as const
}

export function usePostPluginsIdPluginListings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.plugins)[':idPlugin']['listings']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.plugins)[':idPlugin']['listings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPluginsIdPluginListingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.plugins)[':idPlugin']['listings']['$post']> },
      ) => parseResponse(client.plugins[':idPlugin'].listings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPluginsIdComplianceMemberPrivacyKey(
  args: InferRequestType<(typeof client.plugins)[':id']['compliance']['memberPrivacy']['$get']>,
) {
  return ['plugins', '/plugins/:id/compliance/memberPrivacy', args] as const
}

export function useGetPluginsIdComplianceMemberPrivacy<TError = unknown>(
  args: InferRequestType<(typeof client.plugins)[':id']['compliance']['memberPrivacy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.plugins)[':id']['compliance']['memberPrivacy']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPluginsIdComplianceMemberPrivacyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.plugins)[':id']['compliance']['memberPrivacy']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.plugins[':id'].compliance.memberPrivacy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPluginsIdComplianceMemberPrivacy<TError = unknown>(
  args: InferRequestType<(typeof client.plugins)[':id']['compliance']['memberPrivacy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.plugins)[':id']['compliance']['memberPrivacy']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPluginsIdComplianceMemberPrivacyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.plugins)[':id']['compliance']['memberPrivacy']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.plugins[':id'].compliance.memberPrivacy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPluginsIdPluginListingsIdListingKey() {
  return ['plugins', '/plugins/:idPlugin/listings/:idListing', 'PUT'] as const
}

export function usePutPluginsIdPluginListingsIdListing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.plugins)[':idPlugin']['listings'][':idListing']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.plugins)[':idPlugin']['listings'][':idListing']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPluginsIdPluginListingsIdListingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.plugins)[':idPlugin']['listings'][':idListing']['$put']
          >
        },
      ) =>
        parseResponse(client.plugins[':idPlugin'].listings[':idListing'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSearchKey(args: InferRequestType<typeof client.search.$get>) {
  return ['search', '/search', args] as const
}

export function useGetSearch<TError = unknown>(
  args: InferRequestType<typeof client.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.search.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSearch<TError = unknown>(
  args: InferRequestType<typeof client.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.search.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSearchMembersIndexKey(
  args: InferRequestType<typeof client.search.members.index.$get>,
) {
  return ['search', '/search/members/', args] as const
}

export function useGetSearchMembersIndex<TError = unknown>(
  args: InferRequestType<typeof client.search.members.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.members.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchMembersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.members.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.members.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchMembersIndex<TError = unknown>(
  args: InferRequestType<typeof client.search.members.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.members.index.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSearchMembersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.search.members.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.members.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTokensTokenKey(
  args: InferRequestType<(typeof client.tokens)[':token']['$get']>,
) {
  return ['tokens', '/tokens/:token', args] as const
}

export function useGetTokensToken<TError = unknown>(
  args: InferRequestType<(typeof client.tokens)[':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTokensTokenKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tokens[':token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTokensToken<TError = unknown>(
  args: InferRequestType<(typeof client.tokens)[':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTokensTokenKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tokens[':token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTokensTokenMemberKey(
  args: InferRequestType<(typeof client.tokens)[':token']['member']['$get']>,
) {
  return ['tokens', '/tokens/:token/member', args] as const
}

export function useGetTokensTokenMember<TError = unknown>(
  args: InferRequestType<(typeof client.tokens)[':token']['member']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tokens)[':token']['member']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTokensTokenMemberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tokens)[':token']['member']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tokens[':token'].member.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTokensTokenMember<TError = unknown>(
  args: InferRequestType<(typeof client.tokens)[':token']['member']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tokens)[':token']['member']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTokensTokenMemberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tokens)[':token']['member']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tokens[':token'].member.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTokensTokenWebhooksKey(
  args: InferRequestType<(typeof client.tokens)[':token']['webhooks']['$get']>,
) {
  return ['tokens', '/tokens/:token/webhooks', args] as const
}

export function useGetTokensTokenWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.tokens)[':token']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTokensTokenWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tokens[':token'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTokensTokenWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.tokens)[':token']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTokensTokenWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tokens[':token'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTokensTokenWebhooksKey() {
  return ['tokens', '/tokens/:token/webhooks', 'POST'] as const
}

export function usePostTokensTokenWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tokens)[':token']['webhooks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTokensTokenWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tokens)[':token']['webhooks']['$post']> },
      ) => parseResponse(client.tokens[':token'].webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTokensTokenWebhooksIdWebhookKey(
  args: InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>,
) {
  return ['tokens', '/tokens/:token/webhooks/:idWebhook', args] as const
}

export function useGetTokensTokenWebhooksIdWebhook<TError = unknown>(
  args: InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTokensTokenWebhooksIdWebhookKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tokens[':token'].webhooks[':idWebhook'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTokensTokenWebhooksIdWebhook<TError = unknown>(
  args: InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTokensTokenWebhooksIdWebhookKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tokens[':token'].webhooks[':idWebhook'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTokensTokenWebhooksIdWebhookKey() {
  return ['tokens', '/tokens/:token/webhooks/:idWebhook', 'PUT'] as const
}

export function usePutTokensTokenWebhooksIdWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTokensTokenWebhooksIdWebhookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$put']>
        },
      ) => parseResponse(client.tokens[':token'].webhooks[':idWebhook'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTokensTokenWebhooksIdWebhookKey() {
  return ['tokens', '/tokens/:token/webhooks/:idWebhook', 'DELETE'] as const
}

export function useDeleteTokensTokenWebhooksIdWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tokens)[':token']['webhooks'][':idWebhook']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTokensTokenWebhooksIdWebhookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.tokens)[':token']['webhooks'][':idWebhook']['$delete']
          >
        },
      ) =>
        parseResponse(client.tokens[':token'].webhooks[':idWebhook'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTokensTokenIndexKey() {
  return ['tokens', '/tokens/:token/', 'DELETE'] as const
}

export function useDeleteTokensTokenIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tokens)[':token']['index']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tokens)[':token']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTokensTokenIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tokens)[':token']['index']['$delete']> },
      ) => parseResponse(client.tokens[':token'].index.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhooksIndexKey() {
  return ['webhooks', '/webhooks/', 'POST'] as const
}

export function usePostWebhooksIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.webhooks.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhooks.index.$post> }) =>
        parseResponse(client.webhooks.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksIdKey(
  args: InferRequestType<(typeof client.webhooks)[':id']['$get']>,
) {
  return ['webhooks', '/webhooks/:id', args] as const
}

export function useGetWebhooksId<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhooksIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksId<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhooksIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWebhooksIdKey() {
  return ['webhooks', '/webhooks/:id', 'PUT'] as const
}

export function usePutWebhooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebhooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.webhooks)[':id']['$put']> }) =>
        parseResponse(client.webhooks[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebhooksIdKey() {
  return ['webhooks', '/webhooks/:id', 'DELETE'] as const
}

export function useDeleteWebhooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':id']['$delete']> },
      ) => parseResponse(client.webhooks[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksIdFieldKey(
  args: InferRequestType<(typeof client.webhooks)[':id'][':field']['$get']>,
) {
  return ['webhooks', '/webhooks/:id/:field', args] as const
}

export function useGetWebhooksIdField<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':id'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':id'][':field']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksIdFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':id'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':id'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksIdField<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':id'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':id'][':field']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksIdFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':id'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':id'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
