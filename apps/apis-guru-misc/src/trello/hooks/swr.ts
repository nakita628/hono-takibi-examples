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

export function getSearchKey() {
  return ['search'] as const
}

export function getSessionsKey() {
  return ['sessions'] as const
}

export function getTokensKey() {
  return ['tokens'] as const
}

export function getTypesKey() {
  return ['types'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getGetActionsIdActionKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['$get']>,
) {
  return ['actions', '/actions/:idAction', args] as const
}

export function useGetActionsIdAction<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':idAction']['$get']>>>
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
        ? getGetActionsIdActionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':idAction']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':idAction'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionsIdAction<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':idAction']['$get']>>>
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
        ? getGetActionsIdActionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':idAction']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':idAction'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutActionsIdActionKey() {
  return ['actions', '/actions/:idAction', 'PUT'] as const
}

export function usePutActionsIdAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':idAction']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.actions)[':idAction']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutActionsIdActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.actions)[':idAction']['$put']> },
      ) => parseResponse(client.actions[':idAction'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteActionsIdActionKey() {
  return ['actions', '/actions/:idAction', 'DELETE'] as const
}

export function useDeleteActionsIdAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':idAction']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.actions)[':idAction']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteActionsIdActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.actions)[':idAction']['$delete']> },
      ) => parseResponse(client.actions[':idAction'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionsIdActionBoardKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['board']['$get']>,
) {
  return ['actions', '/actions/:idAction/board', args] as const
}

export function useGetActionsIdActionBoard<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['board']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['board']['$get']>>
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
        ? getGetActionsIdActionBoardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['board']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':idAction'].board.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionsIdActionBoard<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['board']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['board']['$get']>>
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
        ? getGetActionsIdActionBoardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['board']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':idAction'].board.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionsIdActionBoardFieldKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['board'][':field']['$get']>,
) {
  return ['actions', '/actions/:idAction/board/:field', args] as const
}

export function useGetActionsIdActionBoardField<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['board'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['board'][':field']['$get']>>
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
        ? getGetActionsIdActionBoardFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['board'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.actions[':idAction'].board[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionsIdActionBoardField<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['board'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['board'][':field']['$get']>>
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
        ? getGetActionsIdActionBoardFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['board'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.actions[':idAction'].board[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionsIdActionCardKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['card']['$get']>,
) {
  return ['actions', '/actions/:idAction/card', args] as const
}

export function useGetActionsIdActionCard<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['card']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['card']['$get']>>
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
        ? getGetActionsIdActionCardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['card']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':idAction'].card.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionsIdActionCard<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['card']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['card']['$get']>>
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
        ? getGetActionsIdActionCardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['card']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':idAction'].card.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionsIdActionCardFieldKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['card'][':field']['$get']>,
) {
  return ['actions', '/actions/:idAction/card/:field', args] as const
}

export function useGetActionsIdActionCardField<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['card'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['card'][':field']['$get']>>
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
        ? getGetActionsIdActionCardFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['card'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.actions[':idAction'].card[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionsIdActionCardField<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['card'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['card'][':field']['$get']>>
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
        ? getGetActionsIdActionCardFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['card'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.actions[':idAction'].card[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionsIdActionDisplayKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['display']['$get']>,
) {
  return ['actions', '/actions/:idAction/display', args] as const
}

export function useGetActionsIdActionDisplay<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['display']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['display']['$get']>>
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
        ? getGetActionsIdActionDisplayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['display']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':idAction'].display.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionsIdActionDisplay<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['display']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['display']['$get']>>
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
        ? getGetActionsIdActionDisplayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['display']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':idAction'].display.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionsIdActionEntitiesKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['entities']['$get']>,
) {
  return ['actions', '/actions/:idAction/entities', args] as const
}

export function useGetActionsIdActionEntities<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['entities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['entities']['$get']>>
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
        ? getGetActionsIdActionEntitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['entities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':idAction'].entities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionsIdActionEntities<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['entities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['entities']['$get']>>
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
        ? getGetActionsIdActionEntitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['entities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':idAction'].entities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionsIdActionListKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['list']['$get']>,
) {
  return ['actions', '/actions/:idAction/list', args] as const
}

export function useGetActionsIdActionList<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['list']['$get']>>
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
        ? getGetActionsIdActionListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':idAction'].list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionsIdActionList<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['list']['$get']>>
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
        ? getGetActionsIdActionListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':idAction'].list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionsIdActionListFieldKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['list'][':field']['$get']>,
) {
  return ['actions', '/actions/:idAction/list/:field', args] as const
}

export function useGetActionsIdActionListField<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['list'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['list'][':field']['$get']>>
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
        ? getGetActionsIdActionListFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['list'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.actions[':idAction'].list[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionsIdActionListField<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['list'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['list'][':field']['$get']>>
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
        ? getGetActionsIdActionListFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['list'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.actions[':idAction'].list[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionsIdActionMemberKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['member']['$get']>,
) {
  return ['actions', '/actions/:idAction/member', args] as const
}

export function useGetActionsIdActionMember<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['member']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['member']['$get']>>
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
        ? getGetActionsIdActionMemberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['member']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':idAction'].member.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionsIdActionMember<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['member']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['member']['$get']>>
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
        ? getGetActionsIdActionMemberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['member']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':idAction'].member.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionsIdActionMemberFieldKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['member'][':field']['$get']>,
) {
  return ['actions', '/actions/:idAction/member/:field', args] as const
}

export function useGetActionsIdActionMemberField<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['member'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['member'][':field']['$get']>>
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
        ? getGetActionsIdActionMemberFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['member'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.actions[':idAction'].member[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionsIdActionMemberField<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['member'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['member'][':field']['$get']>>
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
        ? getGetActionsIdActionMemberFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['member'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.actions[':idAction'].member[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionsIdActionMemberCreatorKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['memberCreator']['$get']>,
) {
  return ['actions', '/actions/:idAction/memberCreator', args] as const
}

export function useGetActionsIdActionMemberCreator<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['memberCreator']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['memberCreator']['$get']>>
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
        ? getGetActionsIdActionMemberCreatorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['memberCreator']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.actions[':idAction'].memberCreator.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionsIdActionMemberCreator<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['memberCreator']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['memberCreator']['$get']>>
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
        ? getGetActionsIdActionMemberCreatorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['memberCreator']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.actions[':idAction'].memberCreator.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionsIdActionMemberCreatorFieldKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['memberCreator'][':field']['$get']>,
) {
  return ['actions', '/actions/:idAction/memberCreator/:field', args] as const
}

export function useGetActionsIdActionMemberCreatorField<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['memberCreator'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.actions)[':idAction']['memberCreator'][':field']['$get']>
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
        ? getGetActionsIdActionMemberCreatorFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.actions)[':idAction']['memberCreator'][':field']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.actions[':idAction'].memberCreator[':field'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionsIdActionMemberCreatorField<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['memberCreator'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.actions)[':idAction']['memberCreator'][':field']['$get']>
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
        ? getGetActionsIdActionMemberCreatorFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.actions)[':idAction']['memberCreator'][':field']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.actions[':idAction'].memberCreator[':field'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetActionsIdActionOrganizationKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['organization']['$get']>,
) {
  return ['actions', '/actions/:idAction/organization', args] as const
}

export function useGetActionsIdActionOrganization<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['organization']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['organization']['$get']>>
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
        ? getGetActionsIdActionOrganizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['organization']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':idAction'].organization.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionsIdActionOrganization<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['organization']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['organization']['$get']>>
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
        ? getGetActionsIdActionOrganizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction']['organization']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':idAction'].organization.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetActionsIdActionOrganizationFieldKey(
  args: InferRequestType<(typeof client.actions)[':idAction']['organization'][':field']['$get']>,
) {
  return ['actions', '/actions/:idAction/organization/:field', args] as const
}

export function useGetActionsIdActionOrganizationField<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['organization'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.actions)[':idAction']['organization'][':field']['$get']>
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
        ? getGetActionsIdActionOrganizationFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.actions)[':idAction']['organization'][':field']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.actions[':idAction'].organization[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionsIdActionOrganizationField<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction']['organization'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.actions)[':idAction']['organization'][':field']['$get']>
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
        ? getGetActionsIdActionOrganizationFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.actions)[':idAction']['organization'][':field']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.actions[':idAction'].organization[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutActionsIdActionTextKey() {
  return ['actions', '/actions/:idAction/text', 'PUT'] as const
}

export function usePutActionsIdActionText<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.actions)[':idAction']['text']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.actions)[':idAction']['text']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutActionsIdActionTextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.actions)[':idAction']['text']['$put']> },
      ) => parseResponse(client.actions[':idAction'].text.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionsIdActionFieldKey(
  args: InferRequestType<(typeof client.actions)[':idAction'][':field']['$get']>,
) {
  return ['actions', '/actions/:idAction/:field', args] as const
}

export function useGetActionsIdActionField<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction'][':field']['$get']>>
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
        ? getGetActionsIdActionFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':idAction'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionsIdActionField<TError = unknown>(
  args: InferRequestType<(typeof client.actions)[':idAction'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction'][':field']['$get']>>
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
        ? getGetActionsIdActionFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.actions)[':idAction'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.actions[':idAction'][':field'].$get(args, clientOptions)),
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

export function getPostBoardsKey() {
  return ['boards', '/boards', 'POST'] as const
}

export function usePostBoards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.boards.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.boards.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBoardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.boards.$post> }) =>
        parseResponse(client.boards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBoardsIdBoardKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['$get']>,
) {
  return ['boards', '/boards/:idBoard', args] as const
}

export function useGetBoardsIdBoard<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':idBoard']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBoardsIdBoardKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':idBoard']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':idBoard'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdBoard<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':idBoard']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBoardsIdBoardKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':idBoard']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':idBoard'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBoardsIdBoardKey() {
  return ['boards', '/boards/:idBoard', 'PUT'] as const
}

export function usePutBoardsIdBoard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':idBoard']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.boards)[':idBoard']['$put']> },
      ) => parseResponse(client.boards[':idBoard'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBoardsIdBoardActionsKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['actions']['$get']>,
) {
  return ['boards', '/boards/:idBoard/actions', args] as const
}

export function useGetBoardsIdBoardActions<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['actions']['$get']>>
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
        ? getGetBoardsIdBoardActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':idBoard'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdBoardActions<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['actions']['$get']>>
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
        ? getGetBoardsIdBoardActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':idBoard'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBoardsIdBoardBoardStarsKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['boardStars']['$get']>,
) {
  return ['boards', '/boards/:idBoard/boardStars', args] as const
}

export function useGetBoardsIdBoardBoardStars<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['boardStars']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['boardStars']['$get']>>
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
        ? getGetBoardsIdBoardBoardStarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['boardStars']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':idBoard'].boardStars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdBoardBoardStars<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['boardStars']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['boardStars']['$get']>>
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
        ? getGetBoardsIdBoardBoardStarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['boardStars']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':idBoard'].boardStars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBoardsIdBoardCalendarKeyGenerateKey() {
  return ['boards', '/boards/:idBoard/calendarKey/generate', 'POST'] as const
}

export function usePostBoardsIdBoardCalendarKeyGenerate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.boards)[':idBoard']['calendarKey']['generate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['calendarKey']['generate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBoardsIdBoardCalendarKeyGenerateKey()
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
            (typeof client.boards)[':idBoard']['calendarKey']['generate']['$post']
          >
        },
      ) => parseResponse(client.boards[':idBoard'].calendarKey.generate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBoardsIdBoardCardsKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['cards']['$get']>,
) {
  return ['boards', '/boards/:idBoard/cards', args] as const
}

export function useGetBoardsIdBoardCards<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['cards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards']['$get']>>
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
        ? getGetBoardsIdBoardCardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':idBoard'].cards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdBoardCards<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['cards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards']['$get']>>
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
        ? getGetBoardsIdBoardCardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':idBoard'].cards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBoardsIdBoardCardsFilterKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['cards'][':filter']['$get']>,
) {
  return ['boards', '/boards/:idBoard/cards/:filter', args] as const
}

export function useGetBoardsIdBoardCardsFilter<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['cards'][':filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards'][':filter']['$get']>>
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
        ? getGetBoardsIdBoardCardsFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards'][':filter']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.boards[':idBoard'].cards[':filter'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdBoardCardsFilter<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['cards'][':filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards'][':filter']['$get']>>
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
        ? getGetBoardsIdBoardCardsFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards'][':filter']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.boards[':idBoard'].cards[':filter'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBoardsIdBoardCardsIdCardKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['cards'][':idCard']['$get']>,
) {
  return ['boards', '/boards/:idBoard/cards/:idCard', args] as const
}

export function useGetBoardsIdBoardCardsIdCard<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['cards'][':idCard']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards'][':idCard']['$get']>>
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
        ? getGetBoardsIdBoardCardsIdCardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards'][':idCard']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.boards[':idBoard'].cards[':idCard'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdBoardCardsIdCard<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['cards'][':idCard']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards'][':idCard']['$get']>>
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
        ? getGetBoardsIdBoardCardsIdCardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['cards'][':idCard']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.boards[':idBoard'].cards[':idCard'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBoardsIdBoardChecklistsKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['checklists']['$get']>,
) {
  return ['boards', '/boards/:idBoard/checklists', args] as const
}

export function useGetBoardsIdBoardChecklists<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['checklists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['checklists']['$get']>>
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
        ? getGetBoardsIdBoardChecklistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['checklists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':idBoard'].checklists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdBoardChecklists<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['checklists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['checklists']['$get']>>
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
        ? getGetBoardsIdBoardChecklistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['checklists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':idBoard'].checklists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBoardsIdBoardChecklistsKey() {
  return ['boards', '/boards/:idBoard/checklists', 'POST'] as const
}

export function usePostBoardsIdBoardChecklists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['checklists']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['checklists']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBoardsIdBoardChecklistsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.boards)[':idBoard']['checklists']['$post']> },
      ) => parseResponse(client.boards[':idBoard'].checklists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdBoardClosedKey() {
  return ['boards', '/boards/:idBoard/closed', 'PUT'] as const
}

export function usePutBoardsIdBoardClosed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['closed']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['closed']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardClosedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.boards)[':idBoard']['closed']['$put']> },
      ) => parseResponse(client.boards[':idBoard'].closed.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBoardsIdBoardDeltasKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['deltas']['$get']>,
) {
  return ['boards', '/boards/:idBoard/deltas', args] as const
}

export function useGetBoardsIdBoardDeltas<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['deltas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['deltas']['$get']>>
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
        ? getGetBoardsIdBoardDeltasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['deltas']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':idBoard'].deltas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdBoardDeltas<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['deltas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['deltas']['$get']>>
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
        ? getGetBoardsIdBoardDeltasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['deltas']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':idBoard'].deltas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBoardsIdBoardDescKey() {
  return ['boards', '/boards/:idBoard/desc', 'PUT'] as const
}

export function usePutBoardsIdBoardDesc<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['desc']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['desc']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardDescKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.boards)[':idBoard']['desc']['$put']> },
      ) => parseResponse(client.boards[':idBoard'].desc.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBoardsIdBoardEmailKeyGenerateKey() {
  return ['boards', '/boards/:idBoard/emailKey/generate', 'POST'] as const
}

export function usePostBoardsIdBoardEmailKeyGenerate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['emailKey']['generate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['emailKey']['generate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBoardsIdBoardEmailKeyGenerateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.boards)[':idBoard']['emailKey']['generate']['$post']>
        },
      ) => parseResponse(client.boards[':idBoard'].emailKey.generate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdBoardIdOrganizationKey() {
  return ['boards', '/boards/:idBoard/idOrganization', 'PUT'] as const
}

export function usePutBoardsIdBoardIdOrganization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['idOrganization']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['idOrganization']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardIdOrganizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.boards)[':idBoard']['idOrganization']['$put']> },
      ) => parseResponse(client.boards[':idBoard'].idOrganization.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdBoardLabelNamesBlueKey() {
  return ['boards', '/boards/:idBoard/labelNames/blue', 'PUT'] as const
}

export function usePutBoardsIdBoardLabelNamesBlue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['labelNames']['blue']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['blue']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardLabelNamesBlueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['blue']['$put']>
        },
      ) => parseResponse(client.boards[':idBoard'].labelNames.blue.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdBoardLabelNamesGreenKey() {
  return ['boards', '/boards/:idBoard/labelNames/green', 'PUT'] as const
}

export function usePutBoardsIdBoardLabelNamesGreen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['labelNames']['green']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['green']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardLabelNamesGreenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['green']['$put']>
        },
      ) => parseResponse(client.boards[':idBoard'].labelNames.green.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdBoardLabelNamesOrangeKey() {
  return ['boards', '/boards/:idBoard/labelNames/orange', 'PUT'] as const
}

export function usePutBoardsIdBoardLabelNamesOrange<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['labelNames']['orange']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['orange']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardLabelNamesOrangeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['orange']['$put']>
        },
      ) => parseResponse(client.boards[':idBoard'].labelNames.orange.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdBoardLabelNamesPurpleKey() {
  return ['boards', '/boards/:idBoard/labelNames/purple', 'PUT'] as const
}

export function usePutBoardsIdBoardLabelNamesPurple<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['labelNames']['purple']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['purple']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardLabelNamesPurpleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['purple']['$put']>
        },
      ) => parseResponse(client.boards[':idBoard'].labelNames.purple.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdBoardLabelNamesRedKey() {
  return ['boards', '/boards/:idBoard/labelNames/red', 'PUT'] as const
}

export function usePutBoardsIdBoardLabelNamesRed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['labelNames']['red']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['red']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardLabelNamesRedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['red']['$put']>
        },
      ) => parseResponse(client.boards[':idBoard'].labelNames.red.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdBoardLabelNamesYellowKey() {
  return ['boards', '/boards/:idBoard/labelNames/yellow', 'PUT'] as const
}

export function usePutBoardsIdBoardLabelNamesYellow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['labelNames']['yellow']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['yellow']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardLabelNamesYellowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.boards)[':idBoard']['labelNames']['yellow']['$put']>
        },
      ) => parseResponse(client.boards[':idBoard'].labelNames.yellow.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBoardsIdBoardLabelsKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['labels']['$get']>,
) {
  return ['boards', '/boards/:idBoard/labels', args] as const
}

export function useGetBoardsIdBoardLabels<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['labels']['$get']>>
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
        ? getGetBoardsIdBoardLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':idBoard'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdBoardLabels<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['labels']['$get']>>
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
        ? getGetBoardsIdBoardLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':idBoard'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBoardsIdBoardLabelsKey() {
  return ['boards', '/boards/:idBoard/labels', 'POST'] as const
}

export function usePostBoardsIdBoardLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['labels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['labels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBoardsIdBoardLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.boards)[':idBoard']['labels']['$post']> },
      ) => parseResponse(client.boards[':idBoard'].labels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBoardsIdBoardLabelsIdLabelKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['labels'][':idLabel']['$get']>,
) {
  return ['boards', '/boards/:idBoard/labels/:idLabel', args] as const
}

export function useGetBoardsIdBoardLabelsIdLabel<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['labels'][':idLabel']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['labels'][':idLabel']['$get']>>
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
        ? getGetBoardsIdBoardLabelsIdLabelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['labels'][':idLabel']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.boards[':idBoard'].labels[':idLabel'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdBoardLabelsIdLabel<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['labels'][':idLabel']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['labels'][':idLabel']['$get']>>
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
        ? getGetBoardsIdBoardLabelsIdLabelKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['labels'][':idLabel']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.boards[':idBoard'].labels[':idLabel'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBoardsIdBoardListsKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['lists']['$get']>,
) {
  return ['boards', '/boards/:idBoard/lists', args] as const
}

export function useGetBoardsIdBoardLists<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['lists']['$get']>>
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
        ? getGetBoardsIdBoardListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':idBoard'].lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdBoardLists<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['lists']['$get']>>
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
        ? getGetBoardsIdBoardListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':idBoard'].lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBoardsIdBoardListsKey() {
  return ['boards', '/boards/:idBoard/lists', 'POST'] as const
}

export function usePostBoardsIdBoardLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['lists']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['lists']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBoardsIdBoardListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.boards)[':idBoard']['lists']['$post']> },
      ) => parseResponse(client.boards[':idBoard'].lists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBoardsIdBoardListsFilterKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['lists'][':filter']['$get']>,
) {
  return ['boards', '/boards/:idBoard/lists/:filter', args] as const
}

export function useGetBoardsIdBoardListsFilter<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['lists'][':filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['lists'][':filter']['$get']>>
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
        ? getGetBoardsIdBoardListsFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['lists'][':filter']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.boards[':idBoard'].lists[':filter'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdBoardListsFilter<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['lists'][':filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['lists'][':filter']['$get']>>
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
        ? getGetBoardsIdBoardListsFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['lists'][':filter']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.boards[':idBoard'].lists[':filter'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBoardsIdBoardMarkAsViewedKey() {
  return ['boards', '/boards/:idBoard/markAsViewed', 'POST'] as const
}

export function usePostBoardsIdBoardMarkAsViewed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['markAsViewed']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['markAsViewed']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBoardsIdBoardMarkAsViewedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.boards)[':idBoard']['markAsViewed']['$post']> },
      ) => parseResponse(client.boards[':idBoard'].markAsViewed.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBoardsIdBoardMembersKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['members']['$get']>,
) {
  return ['boards', '/boards/:idBoard/members', args] as const
}

export function useGetBoardsIdBoardMembers<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['members']['$get']>>
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
        ? getGetBoardsIdBoardMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':idBoard'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdBoardMembers<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['members']['$get']>>
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
        ? getGetBoardsIdBoardMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':idBoard'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBoardsIdBoardMembersKey() {
  return ['boards', '/boards/:idBoard/members', 'PUT'] as const
}

export function usePutBoardsIdBoardMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['members']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['members']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.boards)[':idBoard']['members']['$put']> },
      ) => parseResponse(client.boards[':idBoard'].members.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBoardsIdBoardMembersFilterKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['members'][':filter']['$get']>,
) {
  return ['boards', '/boards/:idBoard/members/:filter', args] as const
}

export function useGetBoardsIdBoardMembersFilter<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['members'][':filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['members'][':filter']['$get']>>
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
        ? getGetBoardsIdBoardMembersFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['members'][':filter']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.boards[':idBoard'].members[':filter'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdBoardMembersFilter<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['members'][':filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['members'][':filter']['$get']>>
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
        ? getGetBoardsIdBoardMembersFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['members'][':filter']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.boards[':idBoard'].members[':filter'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBoardsIdBoardMembersIdMemberKey() {
  return ['boards', '/boards/:idBoard/members/:idMember', 'PUT'] as const
}

export function usePutBoardsIdBoardMembersIdMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['members'][':idMember']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['members'][':idMember']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardMembersIdMemberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.boards)[':idBoard']['members'][':idMember']['$put']>
        },
      ) => parseResponse(client.boards[':idBoard'].members[':idMember'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBoardsIdBoardMembersIdMemberKey() {
  return ['boards', '/boards/:idBoard/members/:idMember', 'DELETE'] as const
}

export function useDeleteBoardsIdBoardMembersIdMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['members'][':idMember']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['members'][':idMember']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBoardsIdBoardMembersIdMemberKey()
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
            (typeof client.boards)[':idBoard']['members'][':idMember']['$delete']
          >
        },
      ) =>
        parseResponse(client.boards[':idBoard'].members[':idMember'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBoardsIdBoardMembersIdMemberCardsKey(
  args: InferRequestType<
    (typeof client.boards)[':idBoard']['members'][':idMember']['cards']['$get']
  >,
) {
  return ['boards', '/boards/:idBoard/members/:idMember/cards', args] as const
}

export function useGetBoardsIdBoardMembersIdMemberCards<TError = unknown>(
  args: InferRequestType<
    (typeof client.boards)[':idBoard']['members'][':idMember']['cards']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.boards)[':idBoard']['members'][':idMember']['cards']['$get']
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
        ? getGetBoardsIdBoardMembersIdMemberCardsKey(args)
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
                (typeof client.boards)[':idBoard']['members'][':idMember']['cards']['$get']
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
          client.boards[':idBoard'].members[':idMember'].cards.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdBoardMembersIdMemberCards<TError = unknown>(
  args: InferRequestType<
    (typeof client.boards)[':idBoard']['members'][':idMember']['cards']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.boards)[':idBoard']['members'][':idMember']['cards']['$get']
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
        ? getGetBoardsIdBoardMembersIdMemberCardsKey(args)
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
                (typeof client.boards)[':idBoard']['members'][':idMember']['cards']['$get']
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
          client.boards[':idBoard'].members[':idMember'].cards.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBoardsIdBoardMembersInvitedKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['membersInvited']['$get']>,
) {
  return ['boards', '/boards/:idBoard/membersInvited', args] as const
}

export function useGetBoardsIdBoardMembersInvited<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['membersInvited']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['membersInvited']['$get']>>
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
        ? getGetBoardsIdBoardMembersInvitedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['membersInvited']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':idBoard'].membersInvited.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdBoardMembersInvited<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['membersInvited']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['membersInvited']['$get']>>
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
        ? getGetBoardsIdBoardMembersInvitedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['membersInvited']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':idBoard'].membersInvited.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBoardsIdBoardMembersInvitedFieldKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['membersInvited'][':field']['$get']>,
) {
  return ['boards', '/boards/:idBoard/membersInvited/:field', args] as const
}

export function useGetBoardsIdBoardMembersInvitedField<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['membersInvited'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.boards)[':idBoard']['membersInvited'][':field']['$get']>
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
        ? getGetBoardsIdBoardMembersInvitedFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.boards)[':idBoard']['membersInvited'][':field']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.boards[':idBoard'].membersInvited[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdBoardMembersInvitedField<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['membersInvited'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.boards)[':idBoard']['membersInvited'][':field']['$get']>
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
        ? getGetBoardsIdBoardMembersInvitedFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.boards)[':idBoard']['membersInvited'][':field']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.boards[':idBoard'].membersInvited[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBoardsIdBoardMembershipsKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['memberships']['$get']>,
) {
  return ['boards', '/boards/:idBoard/memberships', args] as const
}

export function useGetBoardsIdBoardMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['memberships']['$get']>>
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
        ? getGetBoardsIdBoardMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':idBoard'].memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdBoardMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['memberships']['$get']>>
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
        ? getGetBoardsIdBoardMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':idBoard'].memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBoardsIdBoardMembershipsIdMembershipKey(
  args: InferRequestType<
    (typeof client.boards)[':idBoard']['memberships'][':idMembership']['$get']
  >,
) {
  return ['boards', '/boards/:idBoard/memberships/:idMembership', args] as const
}

export function useGetBoardsIdBoardMembershipsIdMembership<TError = unknown>(
  args: InferRequestType<
    (typeof client.boards)[':idBoard']['memberships'][':idMembership']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.boards)[':idBoard']['memberships'][':idMembership']['$get']>
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
        ? getGetBoardsIdBoardMembershipsIdMembershipKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.boards)[':idBoard']['memberships'][':idMembership']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.boards[':idBoard'].memberships[':idMembership'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdBoardMembershipsIdMembership<TError = unknown>(
  args: InferRequestType<
    (typeof client.boards)[':idBoard']['memberships'][':idMembership']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.boards)[':idBoard']['memberships'][':idMembership']['$get']>
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
        ? getGetBoardsIdBoardMembershipsIdMembershipKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.boards)[':idBoard']['memberships'][':idMembership']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.boards[':idBoard'].memberships[':idMembership'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutBoardsIdBoardMembershipsIdMembershipKey() {
  return ['boards', '/boards/:idBoard/memberships/:idMembership', 'PUT'] as const
}

export function usePutBoardsIdBoardMembershipsIdMembership<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.boards)[':idBoard']['memberships'][':idMembership']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['memberships'][':idMembership']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardMembershipsIdMembershipKey()
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
            (typeof client.boards)[':idBoard']['memberships'][':idMembership']['$put']
          >
        },
      ) =>
        parseResponse(
          client.boards[':idBoard'].memberships[':idMembership'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBoardsIdBoardMyPrefsKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['$get']>,
) {
  return ['boards', '/boards/:idBoard/myPrefs', args] as const
}

export function useGetBoardsIdBoardMyPrefs<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['myPrefs']['$get']>>
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
        ? getGetBoardsIdBoardMyPrefsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['myPrefs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':idBoard'].myPrefs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdBoardMyPrefs<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['myPrefs']['$get']>>
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
        ? getGetBoardsIdBoardMyPrefsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['myPrefs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':idBoard'].myPrefs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBoardsIdBoardMyPrefsEmailPositionKey() {
  return ['boards', '/boards/:idBoard/myPrefs/emailPosition', 'PUT'] as const
}

export function usePutBoardsIdBoardMyPrefsEmailPosition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.boards)[':idBoard']['myPrefs']['emailPosition']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['emailPosition']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardMyPrefsEmailPositionKey()
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
            (typeof client.boards)[':idBoard']['myPrefs']['emailPosition']['$put']
          >
        },
      ) => parseResponse(client.boards[':idBoard'].myPrefs.emailPosition.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdBoardMyPrefsIdEmailListKey() {
  return ['boards', '/boards/:idBoard/myPrefs/idEmailList', 'PUT'] as const
}

export function usePutBoardsIdBoardMyPrefsIdEmailList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['myPrefs']['idEmailList']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['idEmailList']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardMyPrefsIdEmailListKey()
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
            (typeof client.boards)[':idBoard']['myPrefs']['idEmailList']['$put']
          >
        },
      ) => parseResponse(client.boards[':idBoard'].myPrefs.idEmailList.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdBoardMyPrefsShowListGuideKey() {
  return ['boards', '/boards/:idBoard/myPrefs/showListGuide', 'PUT'] as const
}

export function usePutBoardsIdBoardMyPrefsShowListGuide<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.boards)[':idBoard']['myPrefs']['showListGuide']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['showListGuide']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardMyPrefsShowListGuideKey()
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
            (typeof client.boards)[':idBoard']['myPrefs']['showListGuide']['$put']
          >
        },
      ) => parseResponse(client.boards[':idBoard'].myPrefs.showListGuide.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdBoardMyPrefsShowSidebarKey() {
  return ['boards', '/boards/:idBoard/myPrefs/showSidebar', 'PUT'] as const
}

export function usePutBoardsIdBoardMyPrefsShowSidebar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['myPrefs']['showSidebar']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['showSidebar']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardMyPrefsShowSidebarKey()
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
            (typeof client.boards)[':idBoard']['myPrefs']['showSidebar']['$put']
          >
        },
      ) => parseResponse(client.boards[':idBoard'].myPrefs.showSidebar.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdBoardMyPrefsShowSidebarActivityKey() {
  return ['boards', '/boards/:idBoard/myPrefs/showSidebarActivity', 'PUT'] as const
}

export function usePutBoardsIdBoardMyPrefsShowSidebarActivity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.boards)[':idBoard']['myPrefs']['showSidebarActivity']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['showSidebarActivity']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardMyPrefsShowSidebarActivityKey()
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
            (typeof client.boards)[':idBoard']['myPrefs']['showSidebarActivity']['$put']
          >
        },
      ) =>
        parseResponse(
          client.boards[':idBoard'].myPrefs.showSidebarActivity.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdBoardMyPrefsShowSidebarBoardActionsKey() {
  return ['boards', '/boards/:idBoard/myPrefs/showSidebarBoardActions', 'PUT'] as const
}

export function usePutBoardsIdBoardMyPrefsShowSidebarBoardActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.boards)[':idBoard']['myPrefs']['showSidebarBoardActions']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.boards)[':idBoard']['myPrefs']['showSidebarBoardActions']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardMyPrefsShowSidebarBoardActionsKey()
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
            (typeof client.boards)[':idBoard']['myPrefs']['showSidebarBoardActions']['$put']
          >
        },
      ) =>
        parseResponse(
          client.boards[':idBoard'].myPrefs.showSidebarBoardActions.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdBoardMyPrefsShowSidebarMembersKey() {
  return ['boards', '/boards/:idBoard/myPrefs/showSidebarMembers', 'PUT'] as const
}

export function usePutBoardsIdBoardMyPrefsShowSidebarMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.boards)[':idBoard']['myPrefs']['showSidebarMembers']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['myPrefs']['showSidebarMembers']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardMyPrefsShowSidebarMembersKey()
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
            (typeof client.boards)[':idBoard']['myPrefs']['showSidebarMembers']['$put']
          >
        },
      ) =>
        parseResponse(
          client.boards[':idBoard'].myPrefs.showSidebarMembers.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdBoardNameKey() {
  return ['boards', '/boards/:idBoard/name', 'PUT'] as const
}

export function usePutBoardsIdBoardName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.boards)[':idBoard']['name']['$put']> },
      ) => parseResponse(client.boards[':idBoard'].name.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBoardsIdBoardOrganizationKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['organization']['$get']>,
) {
  return ['boards', '/boards/:idBoard/organization', args] as const
}

export function useGetBoardsIdBoardOrganization<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['organization']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['organization']['$get']>>
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
        ? getGetBoardsIdBoardOrganizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['organization']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':idBoard'].organization.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdBoardOrganization<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['organization']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['organization']['$get']>>
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
        ? getGetBoardsIdBoardOrganizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard']['organization']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':idBoard'].organization.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBoardsIdBoardOrganizationFieldKey(
  args: InferRequestType<(typeof client.boards)[':idBoard']['organization'][':field']['$get']>,
) {
  return ['boards', '/boards/:idBoard/organization/:field', args] as const
}

export function useGetBoardsIdBoardOrganizationField<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['organization'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.boards)[':idBoard']['organization'][':field']['$get']>
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
        ? getGetBoardsIdBoardOrganizationFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.boards)[':idBoard']['organization'][':field']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.boards[':idBoard'].organization[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdBoardOrganizationField<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard']['organization'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.boards)[':idBoard']['organization'][':field']['$get']>
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
        ? getGetBoardsIdBoardOrganizationFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.boards)[':idBoard']['organization'][':field']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.boards[':idBoard'].organization[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBoardsIdBoardPowerUpsKey() {
  return ['boards', '/boards/:idBoard/powerUps', 'POST'] as const
}

export function usePostBoardsIdBoardPowerUps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['powerUps']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['powerUps']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBoardsIdBoardPowerUpsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.boards)[':idBoard']['powerUps']['$post']> },
      ) => parseResponse(client.boards[':idBoard'].powerUps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBoardsIdBoardPowerUpsPowerUpKey() {
  return ['boards', '/boards/:idBoard/powerUps/:powerUp', 'DELETE'] as const
}

export function useDeleteBoardsIdBoardPowerUpsPowerUp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['powerUps'][':powerUp']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['powerUps'][':powerUp']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBoardsIdBoardPowerUpsPowerUpKey()
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
            (typeof client.boards)[':idBoard']['powerUps'][':powerUp']['$delete']
          >
        },
      ) =>
        parseResponse(client.boards[':idBoard'].powerUps[':powerUp'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdBoardPrefsBackgroundKey() {
  return ['boards', '/boards/:idBoard/prefs/background', 'PUT'] as const
}

export function usePutBoardsIdBoardPrefsBackground<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['prefs']['background']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['prefs']['background']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardPrefsBackgroundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.boards)[':idBoard']['prefs']['background']['$put']>
        },
      ) => parseResponse(client.boards[':idBoard'].prefs.background.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdBoardPrefsCalendarFeedEnabledKey() {
  return ['boards', '/boards/:idBoard/prefs/calendarFeedEnabled', 'PUT'] as const
}

export function usePutBoardsIdBoardPrefsCalendarFeedEnabled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.boards)[':idBoard']['prefs']['calendarFeedEnabled']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['prefs']['calendarFeedEnabled']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardPrefsCalendarFeedEnabledKey()
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
            (typeof client.boards)[':idBoard']['prefs']['calendarFeedEnabled']['$put']
          >
        },
      ) =>
        parseResponse(client.boards[':idBoard'].prefs.calendarFeedEnabled.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdBoardPrefsCardAgingKey() {
  return ['boards', '/boards/:idBoard/prefs/cardAging', 'PUT'] as const
}

export function usePutBoardsIdBoardPrefsCardAging<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['prefs']['cardAging']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['prefs']['cardAging']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardPrefsCardAgingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.boards)[':idBoard']['prefs']['cardAging']['$put']>
        },
      ) => parseResponse(client.boards[':idBoard'].prefs.cardAging.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdBoardPrefsCardCoversKey() {
  return ['boards', '/boards/:idBoard/prefs/cardCovers', 'PUT'] as const
}

export function usePutBoardsIdBoardPrefsCardCovers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['prefs']['cardCovers']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['prefs']['cardCovers']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardPrefsCardCoversKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.boards)[':idBoard']['prefs']['cardCovers']['$put']>
        },
      ) => parseResponse(client.boards[':idBoard'].prefs.cardCovers.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdBoardPrefsCommentsKey() {
  return ['boards', '/boards/:idBoard/prefs/comments', 'PUT'] as const
}

export function usePutBoardsIdBoardPrefsComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['prefs']['comments']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['prefs']['comments']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardPrefsCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.boards)[':idBoard']['prefs']['comments']['$put']>
        },
      ) => parseResponse(client.boards[':idBoard'].prefs.comments.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdBoardPrefsInvitationsKey() {
  return ['boards', '/boards/:idBoard/prefs/invitations', 'PUT'] as const
}

export function usePutBoardsIdBoardPrefsInvitations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['prefs']['invitations']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['prefs']['invitations']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardPrefsInvitationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.boards)[':idBoard']['prefs']['invitations']['$put']>
        },
      ) => parseResponse(client.boards[':idBoard'].prefs.invitations.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdBoardPrefsPermissionLevelKey() {
  return ['boards', '/boards/:idBoard/prefs/permissionLevel', 'PUT'] as const
}

export function usePutBoardsIdBoardPrefsPermissionLevel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.boards)[':idBoard']['prefs']['permissionLevel']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['prefs']['permissionLevel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardPrefsPermissionLevelKey()
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
            (typeof client.boards)[':idBoard']['prefs']['permissionLevel']['$put']
          >
        },
      ) => parseResponse(client.boards[':idBoard'].prefs.permissionLevel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdBoardPrefsSelfJoinKey() {
  return ['boards', '/boards/:idBoard/prefs/selfJoin', 'PUT'] as const
}

export function usePutBoardsIdBoardPrefsSelfJoin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['prefs']['selfJoin']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['prefs']['selfJoin']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardPrefsSelfJoinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.boards)[':idBoard']['prefs']['selfJoin']['$put']>
        },
      ) => parseResponse(client.boards[':idBoard'].prefs.selfJoin.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdBoardPrefsVotingKey() {
  return ['boards', '/boards/:idBoard/prefs/voting', 'PUT'] as const
}

export function usePutBoardsIdBoardPrefsVoting<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['prefs']['voting']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['prefs']['voting']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardPrefsVotingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.boards)[':idBoard']['prefs']['voting']['$put']> },
      ) => parseResponse(client.boards[':idBoard'].prefs.voting.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutBoardsIdBoardSubscribedKey() {
  return ['boards', '/boards/:idBoard/subscribed', 'PUT'] as const
}

export function usePutBoardsIdBoardSubscribed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.boards)[':idBoard']['subscribed']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.boards)[':idBoard']['subscribed']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBoardsIdBoardSubscribedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.boards)[':idBoard']['subscribed']['$put']> },
      ) => parseResponse(client.boards[':idBoard'].subscribed.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBoardsIdBoardFieldKey(
  args: InferRequestType<(typeof client.boards)[':idBoard'][':field']['$get']>,
) {
  return ['boards', '/boards/:idBoard/:field', args] as const
}

export function useGetBoardsIdBoardField<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard'][':field']['$get']>>
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
        ? getGetBoardsIdBoardFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':idBoard'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBoardsIdBoardField<TError = unknown>(
  args: InferRequestType<(typeof client.boards)[':idBoard'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard'][':field']['$get']>>
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
        ? getGetBoardsIdBoardFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.boards)[':idBoard'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.boards[':idBoard'][':field'].$get(args, clientOptions)),
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

export function getGetCardsIdCardKey(
  args: InferRequestType<(typeof client.cards)[':idCard']['$get']>,
) {
  return ['cards', '/cards/:idCard', args] as const
}

export function useGetCardsIdCard<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCardsIdCardKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':idCard'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdCard<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCardsIdCardKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':idCard'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCardsIdCardKey() {
  return ['cards', '/cards/:idCard', 'PUT'] as const
}

export function usePutCardsIdCard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCardsIdCardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':idCard']['$put']> },
      ) => parseResponse(client.cards[':idCard'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCardsIdCardKey() {
  return ['cards', '/cards/:idCard', 'DELETE'] as const
}

export function useDeleteCardsIdCard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCardsIdCardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':idCard']['$delete']> },
      ) => parseResponse(client.cards[':idCard'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCardsIdCardActionsKey(
  args: InferRequestType<(typeof client.cards)[':idCard']['actions']['$get']>,
) {
  return ['cards', '/cards/:idCard/actions', args] as const
}

export function useGetCardsIdCardActions<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['actions']['$get']>>
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
        ? getGetCardsIdCardActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':idCard'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdCardActions<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['actions']['$get']>>
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
        ? getGetCardsIdCardActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':idCard'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCardsIdCardActionsCommentsKey() {
  return ['cards', '/cards/:idCard/actions/comments', 'POST'] as const
}

export function usePostCardsIdCardActionsComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['actions']['comments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['actions']['comments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsIdCardActionsCommentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.cards)[':idCard']['actions']['comments']['$post']>
        },
      ) => parseResponse(client.cards[':idCard'].actions.comments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCardsIdCardActionsIdActionCommentsKey() {
  return ['cards', '/cards/:idCard/actions/:idAction/comments', 'PUT'] as const
}

export function usePutCardsIdCardActionsIdActionComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cards)[':idCard']['actions'][':idAction']['comments']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['actions'][':idAction']['comments']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCardsIdCardActionsIdActionCommentsKey()
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
            (typeof client.cards)[':idCard']['actions'][':idAction']['comments']['$put']
          >
        },
      ) =>
        parseResponse(
          client.cards[':idCard'].actions[':idAction'].comments.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCardsIdCardActionsIdActionCommentsKey() {
  return ['cards', '/cards/:idCard/actions/:idAction/comments', 'DELETE'] as const
}

export function useDeleteCardsIdCardActionsIdActionComments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cards)[':idCard']['actions'][':idAction']['comments']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cards)[':idCard']['actions'][':idAction']['comments']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCardsIdCardActionsIdActionCommentsKey()
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
            (typeof client.cards)[':idCard']['actions'][':idAction']['comments']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.cards[':idCard'].actions[':idAction'].comments.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCardsIdCardAttachmentsKey(
  args: InferRequestType<(typeof client.cards)[':idCard']['attachments']['$get']>,
) {
  return ['cards', '/cards/:idCard/attachments', args] as const
}

export function useGetCardsIdCardAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard']['attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['attachments']['$get']>>
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
        ? getGetCardsIdCardAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':idCard'].attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdCardAttachments<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard']['attachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['attachments']['$get']>>
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
        ? getGetCardsIdCardAttachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['attachments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':idCard'].attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCardsIdCardAttachmentsKey() {
  return ['cards', '/cards/:idCard/attachments', 'POST'] as const
}

export function usePostCardsIdCardAttachments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['attachments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['attachments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsIdCardAttachmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.cards)[':idCard']['attachments']['$post']> },
      ) => parseResponse(client.cards[':idCard'].attachments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCardsIdCardAttachmentsIdAttachmentKey(
  args: InferRequestType<(typeof client.cards)[':idCard']['attachments'][':idAttachment']['$get']>,
) {
  return ['cards', '/cards/:idCard/attachments/:idAttachment', args] as const
}

export function useGetCardsIdCardAttachmentsIdAttachment<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard']['attachments'][':idAttachment']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cards)[':idCard']['attachments'][':idAttachment']['$get']>
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
        ? getGetCardsIdCardAttachmentsIdAttachmentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cards)[':idCard']['attachments'][':idAttachment']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cards[':idCard'].attachments[':idAttachment'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdCardAttachmentsIdAttachment<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard']['attachments'][':idAttachment']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cards)[':idCard']['attachments'][':idAttachment']['$get']>
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
        ? getGetCardsIdCardAttachmentsIdAttachmentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cards)[':idCard']['attachments'][':idAttachment']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cards[':idCard'].attachments[':idAttachment'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteCardsIdCardAttachmentsIdAttachmentKey() {
  return ['cards', '/cards/:idCard/attachments/:idAttachment', 'DELETE'] as const
}

export function useDeleteCardsIdCardAttachmentsIdAttachment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cards)[':idCard']['attachments'][':idAttachment']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['attachments'][':idAttachment']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCardsIdCardAttachmentsIdAttachmentKey()
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
            (typeof client.cards)[':idCard']['attachments'][':idAttachment']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.cards[':idCard'].attachments[':idAttachment'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCardsIdCardBoardKey(
  args: InferRequestType<(typeof client.cards)[':idCard']['board']['$get']>,
) {
  return ['cards', '/cards/:idCard/board', args] as const
}

export function useGetCardsIdCardBoard<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard']['board']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['board']['$get']>>
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
        ? getGetCardsIdCardBoardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['board']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':idCard'].board.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdCardBoard<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard']['board']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['board']['$get']>>
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
        ? getGetCardsIdCardBoardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['board']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':idCard'].board.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCardsIdCardBoardFieldKey(
  args: InferRequestType<(typeof client.cards)[':idCard']['board'][':field']['$get']>,
) {
  return ['cards', '/cards/:idCard/board/:field', args] as const
}

export function useGetCardsIdCardBoardField<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard']['board'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['board'][':field']['$get']>>
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
        ? getGetCardsIdCardBoardFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['board'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':idCard'].board[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdCardBoardField<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard']['board'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['board'][':field']['$get']>>
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
        ? getGetCardsIdCardBoardFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['board'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':idCard'].board[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCardsIdCardCheckItemStatesKey(
  args: InferRequestType<(typeof client.cards)[':idCard']['checkItemStates']['$get']>,
) {
  return ['cards', '/cards/:idCard/checkItemStates', args] as const
}

export function useGetCardsIdCardCheckItemStates<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard']['checkItemStates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['checkItemStates']['$get']>>
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
        ? getGetCardsIdCardCheckItemStatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['checkItemStates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':idCard'].checkItemStates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdCardCheckItemStates<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard']['checkItemStates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['checkItemStates']['$get']>>
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
        ? getGetCardsIdCardCheckItemStatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['checkItemStates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':idCard'].checkItemStates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCardsIdCardChecklistIdChecklistCurrentCheckItemIdCheckItemKey() {
  return [
    'cards',
    '/cards/:idCard/checklist/:idChecklistCurrent/checkItem/:idCheckItem',
    'PUT',
  ] as const
}

export function usePutCardsIdCardChecklistIdChecklistCurrentCheckItemIdCheckItem<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cards)[':idCard']['checklist'][':idChecklistCurrent']['checkItem'][':idCheckItem']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cards)[':idCard']['checklist'][':idChecklistCurrent']['checkItem'][':idCheckItem']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCardsIdCardChecklistIdChecklistCurrentCheckItemIdCheckItemKey()
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
            (typeof client.cards)[':idCard']['checklist'][':idChecklistCurrent']['checkItem'][':idCheckItem']['$put']
          >
        },
      ) =>
        parseResponse(
          client.cards[':idCard'].checklist[':idChecklistCurrent'].checkItem[':idCheckItem'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCardsIdCardChecklistIdChecklistCheckItemKey() {
  return ['cards', '/cards/:idCard/checklist/:idChecklist/checkItem', 'POST'] as const
}

export function usePostCardsIdCardChecklistIdChecklistCheckItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsIdCardChecklistIdChecklistCheckItemKey()
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
            (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cards[':idCard'].checklist[':idChecklist'].checkItem.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteCardsIdCardChecklistIdChecklistCheckItemIdCheckItemKey() {
  return [
    'cards',
    '/cards/:idCard/checklist/:idChecklist/checkItem/:idCheckItem',
    'DELETE',
  ] as const
}

export function useDeleteCardsIdCardChecklistIdChecklistCheckItemIdCheckItem<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCardsIdCardChecklistIdChecklistCheckItemIdCheckItemKey()
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
            (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.cards[':idCard'].checklist[':idChecklist'].checkItem[':idCheckItem'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCardsIdCardChecklistIdChecklistCheckItemIdCheckItemConvertToCardKey() {
  return [
    'cards',
    '/cards/:idCard/checklist/:idChecklist/checkItem/:idCheckItem/convertToCard',
    'POST',
  ] as const
}

export function usePostCardsIdCardChecklistIdChecklistCheckItemIdCheckItemConvertToCard<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['convertToCard']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['convertToCard']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostCardsIdCardChecklistIdChecklistCheckItemIdCheckItemConvertToCardKey()
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
            (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['convertToCard']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cards[':idCard'].checklist[':idChecklist'].checkItem[
            ':idCheckItem'
          ].convertToCard.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemNameKey() {
  return [
    'cards',
    '/cards/:idCard/checklist/:idChecklist/checkItem/:idCheckItem/name',
    'PUT',
  ] as const
}

export function usePutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemNameKey()
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
            (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.cards[':idCard'].checklist[':idChecklist'].checkItem[':idCheckItem'].name.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemPosKey() {
  return [
    'cards',
    '/cards/:idCard/checklist/:idChecklist/checkItem/:idCheckItem/pos',
    'PUT',
  ] as const
}

export function usePutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemPos<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['pos']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['pos']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemPosKey()
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
            (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['pos']['$put']
          >
        },
      ) =>
        parseResponse(
          client.cards[':idCard'].checklist[':idChecklist'].checkItem[':idCheckItem'].pos.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemStateKey() {
  return [
    'cards',
    '/cards/:idCard/checklist/:idChecklist/checkItem/:idCheckItem/state',
    'PUT',
  ] as const
}

export function usePutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemState<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['state']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['state']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCardsIdCardChecklistIdChecklistCheckItemIdCheckItemStateKey()
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
            (typeof client.cards)[':idCard']['checklist'][':idChecklist']['checkItem'][':idCheckItem']['state']['$put']
          >
        },
      ) =>
        parseResponse(
          client.cards[':idCard'].checklist[':idChecklist'].checkItem[':idCheckItem'].state.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCardsIdCardChecklistsKey(
  args: InferRequestType<(typeof client.cards)[':idCard']['checklists']['$get']>,
) {
  return ['cards', '/cards/:idCard/checklists', args] as const
}

export function useGetCardsIdCardChecklists<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard']['checklists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['checklists']['$get']>>
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
        ? getGetCardsIdCardChecklistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['checklists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':idCard'].checklists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdCardChecklists<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard']['checklists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['checklists']['$get']>>
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
        ? getGetCardsIdCardChecklistsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['checklists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':idCard'].checklists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCardsIdCardChecklistsKey() {
  return ['cards', '/cards/:idCard/checklists', 'POST'] as const
}

export function usePostCardsIdCardChecklists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['checklists']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['checklists']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsIdCardChecklistsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':idCard']['checklists']['$post']> },
      ) => parseResponse(client.cards[':idCard'].checklists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCardsIdCardChecklistsIdChecklistKey() {
  return ['cards', '/cards/:idCard/checklists/:idChecklist', 'DELETE'] as const
}

export function useDeleteCardsIdCardChecklistsIdChecklist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cards)[':idCard']['checklists'][':idChecklist']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['checklists'][':idChecklist']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCardsIdCardChecklistsIdChecklistKey()
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
            (typeof client.cards)[':idCard']['checklists'][':idChecklist']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.cards[':idCard'].checklists[':idChecklist'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutCardsIdCardClosedKey() {
  return ['cards', '/cards/:idCard/closed', 'PUT'] as const
}

export function usePutCardsIdCardClosed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['closed']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['closed']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCardsIdCardClosedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':idCard']['closed']['$put']> },
      ) => parseResponse(client.cards[':idCard'].closed.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCardsIdCardDescKey() {
  return ['cards', '/cards/:idCard/desc', 'PUT'] as const
}

export function usePutCardsIdCardDesc<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['desc']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['desc']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCardsIdCardDescKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':idCard']['desc']['$put']> },
      ) => parseResponse(client.cards[':idCard'].desc.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCardsIdCardDueKey() {
  return ['cards', '/cards/:idCard/due', 'PUT'] as const
}

export function usePutCardsIdCardDue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['due']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['due']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCardsIdCardDueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':idCard']['due']['$put']> },
      ) => parseResponse(client.cards[':idCard'].due.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCardsIdCardIdAttachmentCoverKey() {
  return ['cards', '/cards/:idCard/idAttachmentCover', 'PUT'] as const
}

export function usePutCardsIdCardIdAttachmentCover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['idAttachmentCover']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['idAttachmentCover']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCardsIdCardIdAttachmentCoverKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.cards)[':idCard']['idAttachmentCover']['$put']> },
      ) => parseResponse(client.cards[':idCard'].idAttachmentCover.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCardsIdCardIdBoardKey() {
  return ['cards', '/cards/:idCard/idBoard', 'PUT'] as const
}

export function usePutCardsIdCardIdBoard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['idBoard']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['idBoard']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCardsIdCardIdBoardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':idCard']['idBoard']['$put']> },
      ) => parseResponse(client.cards[':idCard'].idBoard.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCardsIdCardIdLabelsKey() {
  return ['cards', '/cards/:idCard/idLabels', 'POST'] as const
}

export function usePostCardsIdCardIdLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['idLabels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['idLabels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsIdCardIdLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':idCard']['idLabels']['$post']> },
      ) => parseResponse(client.cards[':idCard'].idLabels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCardsIdCardIdLabelsIdLabelKey() {
  return ['cards', '/cards/:idCard/idLabels/:idLabel', 'DELETE'] as const
}

export function useDeleteCardsIdCardIdLabelsIdLabel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['idLabels'][':idLabel']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['idLabels'][':idLabel']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCardsIdCardIdLabelsIdLabelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.cards)[':idCard']['idLabels'][':idLabel']['$delete']>
        },
      ) => parseResponse(client.cards[':idCard'].idLabels[':idLabel'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCardsIdCardIdListKey() {
  return ['cards', '/cards/:idCard/idList', 'PUT'] as const
}

export function usePutCardsIdCardIdList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['idList']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['idList']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCardsIdCardIdListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':idCard']['idList']['$put']> },
      ) => parseResponse(client.cards[':idCard'].idList.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCardsIdCardIdMembersKey() {
  return ['cards', '/cards/:idCard/idMembers', 'PUT'] as const
}

export function usePutCardsIdCardIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['idMembers']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['idMembers']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCardsIdCardIdMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':idCard']['idMembers']['$put']> },
      ) => parseResponse(client.cards[':idCard'].idMembers.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCardsIdCardIdMembersKey() {
  return ['cards', '/cards/:idCard/idMembers', 'POST'] as const
}

export function usePostCardsIdCardIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['idMembers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['idMembers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsIdCardIdMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':idCard']['idMembers']['$post']> },
      ) => parseResponse(client.cards[':idCard'].idMembers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCardsIdCardIdMembersIdMemberKey() {
  return ['cards', '/cards/:idCard/idMembers/:idMember', 'DELETE'] as const
}

export function useDeleteCardsIdCardIdMembersIdMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['idMembers'][':idMember']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['idMembers'][':idMember']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCardsIdCardIdMembersIdMemberKey()
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
            (typeof client.cards)[':idCard']['idMembers'][':idMember']['$delete']
          >
        },
      ) =>
        parseResponse(client.cards[':idCard'].idMembers[':idMember'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCardsIdCardLabelsKey() {
  return ['cards', '/cards/:idCard/labels', 'PUT'] as const
}

export function usePutCardsIdCardLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['labels']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['labels']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCardsIdCardLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':idCard']['labels']['$put']> },
      ) => parseResponse(client.cards[':idCard'].labels.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCardsIdCardLabelsKey() {
  return ['cards', '/cards/:idCard/labels', 'POST'] as const
}

export function usePostCardsIdCardLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['labels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['labels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsIdCardLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':idCard']['labels']['$post']> },
      ) => parseResponse(client.cards[':idCard'].labels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCardsIdCardLabelsColorKey() {
  return ['cards', '/cards/:idCard/labels/:color', 'DELETE'] as const
}

export function useDeleteCardsIdCardLabelsColor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['labels'][':color']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['labels'][':color']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCardsIdCardLabelsColorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.cards)[':idCard']['labels'][':color']['$delete']>
        },
      ) => parseResponse(client.cards[':idCard'].labels[':color'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCardsIdCardListKey(
  args: InferRequestType<(typeof client.cards)[':idCard']['list']['$get']>,
) {
  return ['cards', '/cards/:idCard/list', args] as const
}

export function useGetCardsIdCardList<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['list']['$get']>>
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
        ? getGetCardsIdCardListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':idCard'].list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdCardList<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['list']['$get']>>
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
        ? getGetCardsIdCardListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':idCard'].list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCardsIdCardListFieldKey(
  args: InferRequestType<(typeof client.cards)[':idCard']['list'][':field']['$get']>,
) {
  return ['cards', '/cards/:idCard/list/:field', args] as const
}

export function useGetCardsIdCardListField<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard']['list'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['list'][':field']['$get']>>
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
        ? getGetCardsIdCardListFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['list'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':idCard'].list[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdCardListField<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard']['list'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['list'][':field']['$get']>>
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
        ? getGetCardsIdCardListFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['list'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':idCard'].list[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCardsIdCardMarkAssociatedNotificationsReadKey() {
  return ['cards', '/cards/:idCard/markAssociatedNotificationsRead', 'POST'] as const
}

export function usePostCardsIdCardMarkAssociatedNotificationsRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cards)[':idCard']['markAssociatedNotificationsRead']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['markAssociatedNotificationsRead']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsIdCardMarkAssociatedNotificationsReadKey()
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
            (typeof client.cards)[':idCard']['markAssociatedNotificationsRead']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cards[':idCard'].markAssociatedNotificationsRead.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCardsIdCardMembersKey(
  args: InferRequestType<(typeof client.cards)[':idCard']['members']['$get']>,
) {
  return ['cards', '/cards/:idCard/members', args] as const
}

export function useGetCardsIdCardMembers<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['members']['$get']>>
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
        ? getGetCardsIdCardMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':idCard'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdCardMembers<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['members']['$get']>>
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
        ? getGetCardsIdCardMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':idCard'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCardsIdCardMembersVotedKey(
  args: InferRequestType<(typeof client.cards)[':idCard']['membersVoted']['$get']>,
) {
  return ['cards', '/cards/:idCard/membersVoted', args] as const
}

export function useGetCardsIdCardMembersVoted<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard']['membersVoted']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['membersVoted']['$get']>>
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
        ? getGetCardsIdCardMembersVotedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['membersVoted']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':idCard'].membersVoted.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdCardMembersVoted<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard']['membersVoted']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['membersVoted']['$get']>>
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
        ? getGetCardsIdCardMembersVotedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['membersVoted']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':idCard'].membersVoted.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCardsIdCardMembersVotedKey() {
  return ['cards', '/cards/:idCard/membersVoted', 'POST'] as const
}

export function usePostCardsIdCardMembersVoted<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['membersVoted']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['membersVoted']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsIdCardMembersVotedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.cards)[':idCard']['membersVoted']['$post']> },
      ) => parseResponse(client.cards[':idCard'].membersVoted.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCardsIdCardMembersVotedIdMemberKey() {
  return ['cards', '/cards/:idCard/membersVoted/:idMember', 'DELETE'] as const
}

export function useDeleteCardsIdCardMembersVotedIdMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cards)[':idCard']['membersVoted'][':idMember']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['membersVoted'][':idMember']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCardsIdCardMembersVotedIdMemberKey()
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
            (typeof client.cards)[':idCard']['membersVoted'][':idMember']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.cards[':idCard'].membersVoted[':idMember'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutCardsIdCardNameKey() {
  return ['cards', '/cards/:idCard/name', 'PUT'] as const
}

export function usePutCardsIdCardName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['name']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCardsIdCardNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':idCard']['name']['$put']> },
      ) => parseResponse(client.cards[':idCard'].name.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCardsIdCardPosKey() {
  return ['cards', '/cards/:idCard/pos', 'PUT'] as const
}

export function usePutCardsIdCardPos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':idCard']['pos']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['pos']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCardsIdCardPosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':idCard']['pos']['$put']> },
      ) => parseResponse(client.cards[':idCard'].pos.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCardsIdCardStickersKey(
  args: InferRequestType<(typeof client.cards)[':idCard']['stickers']['$get']>,
) {
  return ['cards', '/cards/:idCard/stickers', args] as const
}

export function useGetCardsIdCardStickers<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard']['stickers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['stickers']['$get']>>
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
        ? getGetCardsIdCardStickersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['stickers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':idCard'].stickers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdCardStickers<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard']['stickers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['stickers']['$get']>>
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
        ? getGetCardsIdCardStickersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['stickers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':idCard'].stickers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCardsIdCardStickersKey() {
  return ['cards', '/cards/:idCard/stickers', 'POST'] as const
}

export function usePostCardsIdCardStickers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['stickers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['stickers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsIdCardStickersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':idCard']['stickers']['$post']> },
      ) => parseResponse(client.cards[':idCard'].stickers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCardsIdCardStickersIdStickerKey(
  args: InferRequestType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$get']>,
) {
  return ['cards', '/cards/:idCard/stickers/:idSticker', args] as const
}

export function useGetCardsIdCardStickersIdSticker<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$get']>>
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
        ? getGetCardsIdCardStickersIdStickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cards[':idCard'].stickers[':idSticker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdCardStickersIdSticker<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$get']>>
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
        ? getGetCardsIdCardStickersIdStickerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cards[':idCard'].stickers[':idSticker'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCardsIdCardStickersIdStickerKey() {
  return ['cards', '/cards/:idCard/stickers/:idSticker', 'PUT'] as const
}

export function usePutCardsIdCardStickersIdSticker<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCardsIdCardStickersIdStickerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$put']>
        },
      ) => parseResponse(client.cards[':idCard'].stickers[':idSticker'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCardsIdCardStickersIdStickerKey() {
  return ['cards', '/cards/:idCard/stickers/:idSticker', 'DELETE'] as const
}

export function useDeleteCardsIdCardStickersIdSticker<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['stickers'][':idSticker']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCardsIdCardStickersIdStickerKey()
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
            (typeof client.cards)[':idCard']['stickers'][':idSticker']['$delete']
          >
        },
      ) =>
        parseResponse(client.cards[':idCard'].stickers[':idSticker'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCardsIdCardSubscribedKey() {
  return ['cards', '/cards/:idCard/subscribed', 'PUT'] as const
}

export function usePutCardsIdCardSubscribed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':idCard']['subscribed']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':idCard']['subscribed']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCardsIdCardSubscribedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':idCard']['subscribed']['$put']> },
      ) => parseResponse(client.cards[':idCard'].subscribed.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCardsIdCardFieldKey(
  args: InferRequestType<(typeof client.cards)[':idCard'][':field']['$get']>,
) {
  return ['cards', '/cards/:idCard/:field', args] as const
}

export function useGetCardsIdCardField<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard'][':field']['$get']>>
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
        ? getGetCardsIdCardFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':idCard'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsIdCardField<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':idCard'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard'][':field']['$get']>>
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
        ? getGetCardsIdCardFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':idCard'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':idCard'][':field'].$get(args, clientOptions)),
      restSwrOptions,
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

export function getGetChecklistsIdChecklistKey(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['$get']>,
) {
  return ['checklists', '/checklists/:idChecklist', args] as const
}

export function useGetChecklistsIdChecklist<TError = unknown>(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['$get']>>
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
        ? getGetChecklistsIdChecklistKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.checklists[':idChecklist'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChecklistsIdChecklist<TError = unknown>(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['$get']>>
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
        ? getGetChecklistsIdChecklistKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.checklists[':idChecklist'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutChecklistsIdChecklistKey() {
  return ['checklists', '/checklists/:idChecklist', 'PUT'] as const
}

export function usePutChecklistsIdChecklist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.checklists)[':idChecklist']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChecklistsIdChecklistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.checklists)[':idChecklist']['$put']> },
      ) => parseResponse(client.checklists[':idChecklist'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteChecklistsIdChecklistKey() {
  return ['checklists', '/checklists/:idChecklist', 'DELETE'] as const
}

export function useDeleteChecklistsIdChecklist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.checklists)[':idChecklist']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChecklistsIdChecklistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.checklists)[':idChecklist']['$delete']> },
      ) => parseResponse(client.checklists[':idChecklist'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChecklistsIdChecklistBoardKey(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['board']['$get']>,
) {
  return ['checklists', '/checklists/:idChecklist/board', args] as const
}

export function useGetChecklistsIdChecklistBoard<TError = unknown>(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['board']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['board']['$get']>>
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
        ? getGetChecklistsIdChecklistBoardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['board']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.checklists[':idChecklist'].board.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChecklistsIdChecklistBoard<TError = unknown>(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['board']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['board']['$get']>>
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
        ? getGetChecklistsIdChecklistBoardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['board']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.checklists[':idChecklist'].board.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChecklistsIdChecklistBoardFieldKey(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['board'][':field']['$get']>,
) {
  return ['checklists', '/checklists/:idChecklist/board/:field', args] as const
}

export function useGetChecklistsIdChecklistBoardField<TError = unknown>(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['board'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.checklists)[':idChecklist']['board'][':field']['$get']>
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
        ? getGetChecklistsIdChecklistBoardFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.checklists)[':idChecklist']['board'][':field']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.checklists[':idChecklist'].board[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChecklistsIdChecklistBoardField<TError = unknown>(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['board'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.checklists)[':idChecklist']['board'][':field']['$get']>
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
        ? getGetChecklistsIdChecklistBoardFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.checklists)[':idChecklist']['board'][':field']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.checklists[':idChecklist'].board[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChecklistsIdChecklistCardsKey(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['cards']['$get']>,
) {
  return ['checklists', '/checklists/:idChecklist/cards', args] as const
}

export function useGetChecklistsIdChecklistCards<TError = unknown>(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['cards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['cards']['$get']>>
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
        ? getGetChecklistsIdChecklistCardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['cards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.checklists[':idChecklist'].cards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChecklistsIdChecklistCards<TError = unknown>(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['cards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['cards']['$get']>>
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
        ? getGetChecklistsIdChecklistCardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['cards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.checklists[':idChecklist'].cards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChecklistsIdChecklistCardsFilterKey(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['cards'][':filter']['$get']>,
) {
  return ['checklists', '/checklists/:idChecklist/cards/:filter', args] as const
}

export function useGetChecklistsIdChecklistCardsFilter<TError = unknown>(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['cards'][':filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.checklists)[':idChecklist']['cards'][':filter']['$get']>
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
        ? getGetChecklistsIdChecklistCardsFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.checklists)[':idChecklist']['cards'][':filter']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.checklists[':idChecklist'].cards[':filter'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChecklistsIdChecklistCardsFilter<TError = unknown>(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['cards'][':filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.checklists)[':idChecklist']['cards'][':filter']['$get']>
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
        ? getGetChecklistsIdChecklistCardsFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.checklists)[':idChecklist']['cards'][':filter']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.checklists[':idChecklist'].cards[':filter'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetChecklistsIdChecklistCheckItemsKey(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['checkItems']['$get']>,
) {
  return ['checklists', '/checklists/:idChecklist/checkItems', args] as const
}

export function useGetChecklistsIdChecklistCheckItems<TError = unknown>(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['checkItems']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['checkItems']['$get']>>
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
        ? getGetChecklistsIdChecklistCheckItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['checkItems']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.checklists[':idChecklist'].checkItems.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChecklistsIdChecklistCheckItems<TError = unknown>(
  args: InferRequestType<(typeof client.checklists)[':idChecklist']['checkItems']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['checkItems']['$get']>>
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
        ? getGetChecklistsIdChecklistCheckItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['checkItems']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.checklists[':idChecklist'].checkItems.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChecklistsIdChecklistCheckItemsKey() {
  return ['checklists', '/checklists/:idChecklist/checkItems', 'POST'] as const
}

export function usePostChecklistsIdChecklistCheckItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['checkItems']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.checklists)[':idChecklist']['checkItems']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChecklistsIdChecklistCheckItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.checklists)[':idChecklist']['checkItems']['$post']>
        },
      ) => parseResponse(client.checklists[':idChecklist'].checkItems.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChecklistsIdChecklistCheckItemsIdCheckItemKey(
  args: InferRequestType<
    (typeof client.checklists)[':idChecklist']['checkItems'][':idCheckItem']['$get']
  >,
) {
  return ['checklists', '/checklists/:idChecklist/checkItems/:idCheckItem', args] as const
}

export function useGetChecklistsIdChecklistCheckItemsIdCheckItem<TError = unknown>(
  args: InferRequestType<
    (typeof client.checklists)[':idChecklist']['checkItems'][':idCheckItem']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.checklists)[':idChecklist']['checkItems'][':idCheckItem']['$get']
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
        ? getGetChecklistsIdChecklistCheckItemsIdCheckItemKey(args)
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
                (typeof client.checklists)[':idChecklist']['checkItems'][':idCheckItem']['$get']
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
          client.checklists[':idChecklist'].checkItems[':idCheckItem'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChecklistsIdChecklistCheckItemsIdCheckItem<TError = unknown>(
  args: InferRequestType<
    (typeof client.checklists)[':idChecklist']['checkItems'][':idCheckItem']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.checklists)[':idChecklist']['checkItems'][':idCheckItem']['$get']
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
        ? getGetChecklistsIdChecklistCheckItemsIdCheckItemKey(args)
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
                (typeof client.checklists)[':idChecklist']['checkItems'][':idCheckItem']['$get']
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
          client.checklists[':idChecklist'].checkItems[':idCheckItem'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteChecklistsIdChecklistCheckItemsIdCheckItemKey() {
  return ['checklists', '/checklists/:idChecklist/checkItems/:idCheckItem', 'DELETE'] as const
}

export function useDeleteChecklistsIdChecklistCheckItemsIdCheckItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.checklists)[':idChecklist']['checkItems'][':idCheckItem']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.checklists)[':idChecklist']['checkItems'][':idCheckItem']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChecklistsIdChecklistCheckItemsIdCheckItemKey()
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
            (typeof client.checklists)[':idChecklist']['checkItems'][':idCheckItem']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.checklists[':idChecklist'].checkItems[':idCheckItem'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutChecklistsIdChecklistIdCardKey() {
  return ['checklists', '/checklists/:idChecklist/idCard', 'PUT'] as const
}

export function usePutChecklistsIdChecklistIdCard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['idCard']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.checklists)[':idChecklist']['idCard']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChecklistsIdChecklistIdCardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.checklists)[':idChecklist']['idCard']['$put']> },
      ) => parseResponse(client.checklists[':idChecklist'].idCard.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutChecklistsIdChecklistNameKey() {
  return ['checklists', '/checklists/:idChecklist/name', 'PUT'] as const
}

export function usePutChecklistsIdChecklistName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.checklists)[':idChecklist']['name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChecklistsIdChecklistNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.checklists)[':idChecklist']['name']['$put']> },
      ) => parseResponse(client.checklists[':idChecklist'].name.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutChecklistsIdChecklistPosKey() {
  return ['checklists', '/checklists/:idChecklist/pos', 'PUT'] as const
}

export function usePutChecklistsIdChecklistPos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.checklists)[':idChecklist']['pos']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.checklists)[':idChecklist']['pos']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChecklistsIdChecklistPosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.checklists)[':idChecklist']['pos']['$put']> },
      ) => parseResponse(client.checklists[':idChecklist'].pos.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChecklistsIdChecklistFieldKey(
  args: InferRequestType<(typeof client.checklists)[':idChecklist'][':field']['$get']>,
) {
  return ['checklists', '/checklists/:idChecklist/:field', args] as const
}

export function useGetChecklistsIdChecklistField<TError = unknown>(
  args: InferRequestType<(typeof client.checklists)[':idChecklist'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':idChecklist'][':field']['$get']>>
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
        ? getGetChecklistsIdChecklistFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':idChecklist'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.checklists[':idChecklist'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChecklistsIdChecklistField<TError = unknown>(
  args: InferRequestType<(typeof client.checklists)[':idChecklist'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':idChecklist'][':field']['$get']>>
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
        ? getGetChecklistsIdChecklistFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.checklists)[':idChecklist'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.checklists[':idChecklist'][':field'].$get(args, clientOptions)),
      restSwrOptions,
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

export function getGetLabelsIdLabelKey(
  args: InferRequestType<(typeof client.labels)[':idLabel']['$get']>,
) {
  return ['labels', '/labels/:idLabel', args] as const
}

export function useGetLabelsIdLabel<TError = unknown>(
  args: InferRequestType<(typeof client.labels)[':idLabel']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':idLabel']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLabelsIdLabelKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':idLabel']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.labels[':idLabel'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLabelsIdLabel<TError = unknown>(
  args: InferRequestType<(typeof client.labels)[':idLabel']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':idLabel']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetLabelsIdLabelKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':idLabel']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.labels[':idLabel'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutLabelsIdLabelKey() {
  return ['labels', '/labels/:idLabel', 'PUT'] as const
}

export function usePutLabelsIdLabel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':idLabel']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.labels)[':idLabel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLabelsIdLabelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.labels)[':idLabel']['$put']> },
      ) => parseResponse(client.labels[':idLabel'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLabelsIdLabelKey() {
  return ['labels', '/labels/:idLabel', 'DELETE'] as const
}

export function useDeleteLabelsIdLabel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.labels)[':idLabel']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.labels)[':idLabel']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLabelsIdLabelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.labels)[':idLabel']['$delete']> },
      ) => parseResponse(client.labels[':idLabel'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLabelsIdLabelBoardKey(
  args: InferRequestType<(typeof client.labels)[':idLabel']['board']['$get']>,
) {
  return ['labels', '/labels/:idLabel/board', args] as const
}

export function useGetLabelsIdLabelBoard<TError = unknown>(
  args: InferRequestType<(typeof client.labels)[':idLabel']['board']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.labels)[':idLabel']['board']['$get']>>
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
        ? getGetLabelsIdLabelBoardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.labels)[':idLabel']['board']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.labels[':idLabel'].board.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLabelsIdLabelBoard<TError = unknown>(
  args: InferRequestType<(typeof client.labels)[':idLabel']['board']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.labels)[':idLabel']['board']['$get']>>
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
        ? getGetLabelsIdLabelBoardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.labels)[':idLabel']['board']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.labels[':idLabel'].board.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLabelsIdLabelBoardFieldKey(
  args: InferRequestType<(typeof client.labels)[':idLabel']['board'][':field']['$get']>,
) {
  return ['labels', '/labels/:idLabel/board/:field', args] as const
}

export function useGetLabelsIdLabelBoardField<TError = unknown>(
  args: InferRequestType<(typeof client.labels)[':idLabel']['board'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.labels)[':idLabel']['board'][':field']['$get']>>
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
        ? getGetLabelsIdLabelBoardFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.labels)[':idLabel']['board'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.labels[':idLabel'].board[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLabelsIdLabelBoardField<TError = unknown>(
  args: InferRequestType<(typeof client.labels)[':idLabel']['board'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.labels)[':idLabel']['board'][':field']['$get']>>
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
        ? getGetLabelsIdLabelBoardFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.labels)[':idLabel']['board'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.labels[':idLabel'].board[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutLabelsIdLabelColorKey() {
  return ['labels', '/labels/:idLabel/color', 'PUT'] as const
}

export function usePutLabelsIdLabelColor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.labels)[':idLabel']['color']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.labels)[':idLabel']['color']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLabelsIdLabelColorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.labels)[':idLabel']['color']['$put']> },
      ) => parseResponse(client.labels[':idLabel'].color.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutLabelsIdLabelNameKey() {
  return ['labels', '/labels/:idLabel/name', 'PUT'] as const
}

export function usePutLabelsIdLabelName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.labels)[':idLabel']['name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.labels)[':idLabel']['name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLabelsIdLabelNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.labels)[':idLabel']['name']['$put']> },
      ) => parseResponse(client.labels[':idLabel'].name.$put(arg, clientOptions)),
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

export function getGetListsIdListKey(
  args: InferRequestType<(typeof client.lists)[':idList']['$get']>,
) {
  return ['lists', '/lists/:idList', args] as const
}

export function useGetListsIdList<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':idList']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetListsIdListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':idList'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListsIdList<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':idList']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetListsIdListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':idList'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutListsIdListKey() {
  return ['lists', '/lists/:idList', 'PUT'] as const
}

export function usePutListsIdList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':idList']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutListsIdListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.lists)[':idList']['$put']> },
      ) => parseResponse(client.lists[':idList'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListsIdListActionsKey(
  args: InferRequestType<(typeof client.lists)[':idList']['actions']['$get']>,
) {
  return ['lists', '/lists/:idList/actions', args] as const
}

export function useGetListsIdListActions<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':idList']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':idList']['actions']['$get']>>
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
        ? getGetListsIdListActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':idList']['actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':idList'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListsIdListActions<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':idList']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':idList']['actions']['$get']>>
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
        ? getGetListsIdListActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':idList']['actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':idList'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostListsIdListArchiveAllCardsKey() {
  return ['lists', '/lists/:idList/archiveAllCards', 'POST'] as const
}

export function usePostListsIdListArchiveAllCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':idList']['archiveAllCards']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':idList']['archiveAllCards']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListsIdListArchiveAllCardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.lists)[':idList']['archiveAllCards']['$post']> },
      ) => parseResponse(client.lists[':idList'].archiveAllCards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListsIdListBoardKey(
  args: InferRequestType<(typeof client.lists)[':idList']['board']['$get']>,
) {
  return ['lists', '/lists/:idList/board', args] as const
}

export function useGetListsIdListBoard<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':idList']['board']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':idList']['board']['$get']>>
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
        ? getGetListsIdListBoardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':idList']['board']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':idList'].board.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListsIdListBoard<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':idList']['board']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':idList']['board']['$get']>>
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
        ? getGetListsIdListBoardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':idList']['board']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':idList'].board.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListsIdListBoardFieldKey(
  args: InferRequestType<(typeof client.lists)[':idList']['board'][':field']['$get']>,
) {
  return ['lists', '/lists/:idList/board/:field', args] as const
}

export function useGetListsIdListBoardField<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':idList']['board'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':idList']['board'][':field']['$get']>>
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
        ? getGetListsIdListBoardFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':idList']['board'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':idList'].board[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListsIdListBoardField<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':idList']['board'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':idList']['board'][':field']['$get']>>
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
        ? getGetListsIdListBoardFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':idList']['board'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':idList'].board[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListsIdListCardsKey(
  args: InferRequestType<(typeof client.lists)[':idList']['cards']['$get']>,
) {
  return ['lists', '/lists/:idList/cards', args] as const
}

export function useGetListsIdListCards<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':idList']['cards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':idList']['cards']['$get']>>
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
        ? getGetListsIdListCardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':idList']['cards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':idList'].cards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListsIdListCards<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':idList']['cards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':idList']['cards']['$get']>>
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
        ? getGetListsIdListCardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':idList']['cards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':idList'].cards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostListsIdListCardsKey() {
  return ['lists', '/lists/:idList/cards', 'POST'] as const
}

export function usePostListsIdListCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':idList']['cards']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':idList']['cards']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListsIdListCardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.lists)[':idList']['cards']['$post']> },
      ) => parseResponse(client.lists[':idList'].cards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListsIdListCardsFilterKey(
  args: InferRequestType<(typeof client.lists)[':idList']['cards'][':filter']['$get']>,
) {
  return ['lists', '/lists/:idList/cards/:filter', args] as const
}

export function useGetListsIdListCardsFilter<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':idList']['cards'][':filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':idList']['cards'][':filter']['$get']>>
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
        ? getGetListsIdListCardsFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':idList']['cards'][':filter']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':idList'].cards[':filter'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListsIdListCardsFilter<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':idList']['cards'][':filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':idList']['cards'][':filter']['$get']>>
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
        ? getGetListsIdListCardsFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':idList']['cards'][':filter']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':idList'].cards[':filter'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutListsIdListClosedKey() {
  return ['lists', '/lists/:idList/closed', 'PUT'] as const
}

export function usePutListsIdListClosed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':idList']['closed']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':idList']['closed']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutListsIdListClosedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.lists)[':idList']['closed']['$put']> },
      ) => parseResponse(client.lists[':idList'].closed.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutListsIdListIdBoardKey() {
  return ['lists', '/lists/:idList/idBoard', 'PUT'] as const
}

export function usePutListsIdListIdBoard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':idList']['idBoard']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':idList']['idBoard']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutListsIdListIdBoardKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.lists)[':idList']['idBoard']['$put']> },
      ) => parseResponse(client.lists[':idList'].idBoard.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListsIdListMoveAllCardsKey() {
  return ['lists', '/lists/:idList/moveAllCards', 'POST'] as const
}

export function usePostListsIdListMoveAllCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':idList']['moveAllCards']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':idList']['moveAllCards']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListsIdListMoveAllCardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.lists)[':idList']['moveAllCards']['$post']> },
      ) => parseResponse(client.lists[':idList'].moveAllCards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutListsIdListNameKey() {
  return ['lists', '/lists/:idList/name', 'PUT'] as const
}

export function usePutListsIdListName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['name']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':idList']['name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutListsIdListNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.lists)[':idList']['name']['$put']> },
      ) => parseResponse(client.lists[':idList'].name.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutListsIdListPosKey() {
  return ['lists', '/lists/:idList/pos', 'PUT'] as const
}

export function usePutListsIdListPos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':idList']['pos']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':idList']['pos']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutListsIdListPosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.lists)[':idList']['pos']['$put']> },
      ) => parseResponse(client.lists[':idList'].pos.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutListsIdListSubscribedKey() {
  return ['lists', '/lists/:idList/subscribed', 'PUT'] as const
}

export function usePutListsIdListSubscribed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lists)[':idList']['subscribed']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.lists)[':idList']['subscribed']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutListsIdListSubscribedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.lists)[':idList']['subscribed']['$put']> },
      ) => parseResponse(client.lists[':idList'].subscribed.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListsIdListFieldKey(
  args: InferRequestType<(typeof client.lists)[':idList'][':field']['$get']>,
) {
  return ['lists', '/lists/:idList/:field', args] as const
}

export function useGetListsIdListField<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':idList'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':idList'][':field']['$get']>>
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
        ? getGetListsIdListFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':idList'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':idList'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListsIdListField<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':idList'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':idList'][':field']['$get']>>
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
        ? getGetListsIdListFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.lists)[':idList'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':idList'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMembersIdMemberKey(
  args: InferRequestType<(typeof client.members)[':idMember']['$get']>,
) {
  return ['members', '/members/:idMember', args] as const
}

export function useGetMembersIdMember<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':idMember']['$get']>>>
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
        ? getGetMembersIdMemberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':idMember']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':idMember'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMember<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':idMember']['$get']>>>
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
        ? getGetMembersIdMemberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':idMember']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':idMember'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMembersIdMemberKey() {
  return ['members', '/members/:idMember', 'PUT'] as const
}

export function usePutMembersIdMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.members)[':idMember']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':idMember']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMembersIdMemberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.members)[':idMember']['$put']> },
      ) => parseResponse(client.members[':idMember'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdMemberActionsKey(
  args: InferRequestType<(typeof client.members)[':idMember']['actions']['$get']>,
) {
  return ['members', '/members/:idMember/actions', args] as const
}

export function useGetMembersIdMemberActions<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['actions']['$get']>>
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
        ? getGetMembersIdMemberActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':idMember'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMemberActions<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['actions']['$get']>>
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
        ? getGetMembersIdMemberActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':idMember'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMembersIdMemberAvatarKey() {
  return ['members', '/members/:idMember/avatar', 'POST'] as const
}

export function usePostMembersIdMemberAvatar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':idMember']['avatar']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':idMember']['avatar']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMembersIdMemberAvatarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.members)[':idMember']['avatar']['$post']> },
      ) => parseResponse(client.members[':idMember'].avatar.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMembersIdMemberAvatarSourceKey() {
  return ['members', '/members/:idMember/avatarSource', 'PUT'] as const
}

export function usePutMembersIdMemberAvatarSource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':idMember']['avatarSource']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':idMember']['avatarSource']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMembersIdMemberAvatarSourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.members)[':idMember']['avatarSource']['$put']> },
      ) => parseResponse(client.members[':idMember'].avatarSource.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMembersIdMemberBioKey() {
  return ['members', '/members/:idMember/bio', 'PUT'] as const
}

export function usePutMembersIdMemberBio<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':idMember']['bio']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':idMember']['bio']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMembersIdMemberBioKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.members)[':idMember']['bio']['$put']> },
      ) => parseResponse(client.members[':idMember'].bio.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdMemberBoardBackgroundsKey(
  args: InferRequestType<(typeof client.members)[':idMember']['boardBackgrounds']['$get']>,
) {
  return ['members', '/members/:idMember/boardBackgrounds', args] as const
}

export function useGetMembersIdMemberBoardBackgrounds<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['boardBackgrounds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['boardBackgrounds']['$get']>>
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
        ? getGetMembersIdMemberBoardBackgroundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['boardBackgrounds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':idMember'].boardBackgrounds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMemberBoardBackgrounds<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['boardBackgrounds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['boardBackgrounds']['$get']>>
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
        ? getGetMembersIdMemberBoardBackgroundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['boardBackgrounds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':idMember'].boardBackgrounds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMembersIdMemberBoardBackgroundsKey() {
  return ['members', '/members/:idMember/boardBackgrounds', 'POST'] as const
}

export function usePostMembersIdMemberBoardBackgrounds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':idMember']['boardBackgrounds']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':idMember']['boardBackgrounds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMembersIdMemberBoardBackgroundsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.members)[':idMember']['boardBackgrounds']['$post']>
        },
      ) => parseResponse(client.members[':idMember'].boardBackgrounds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdMemberBoardBackgroundsIdBoardBackgroundKey(
  args: InferRequestType<
    (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$get']
  >,
) {
  return ['members', '/members/:idMember/boardBackgrounds/:idBoardBackground', args] as const
}

export function useGetMembersIdMemberBoardBackgroundsIdBoardBackground<TError = unknown>(
  args: InferRequestType<
    (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$get']
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
        ? getGetMembersIdMemberBoardBackgroundsIdBoardBackgroundKey(args)
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
                (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$get']
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
          client.members[':idMember'].boardBackgrounds[':idBoardBackground'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMemberBoardBackgroundsIdBoardBackground<TError = unknown>(
  args: InferRequestType<
    (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$get']
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
        ? getGetMembersIdMemberBoardBackgroundsIdBoardBackgroundKey(args)
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
                (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$get']
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
          client.members[':idMember'].boardBackgrounds[':idBoardBackground'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMembersIdMemberBoardBackgroundsIdBoardBackgroundKey() {
  return ['members', '/members/:idMember/boardBackgrounds/:idBoardBackground', 'PUT'] as const
}

export function usePutMembersIdMemberBoardBackgroundsIdBoardBackground<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMembersIdMemberBoardBackgroundsIdBoardBackgroundKey()
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
            (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$put']
          >
        },
      ) =>
        parseResponse(
          client.members[':idMember'].boardBackgrounds[':idBoardBackground'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMembersIdMemberBoardBackgroundsIdBoardBackgroundKey() {
  return ['members', '/members/:idMember/boardBackgrounds/:idBoardBackground', 'DELETE'] as const
}

export function useDeleteMembersIdMemberBoardBackgroundsIdBoardBackground<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMembersIdMemberBoardBackgroundsIdBoardBackgroundKey()
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
            (typeof client.members)[':idMember']['boardBackgrounds'][':idBoardBackground']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.members[':idMember'].boardBackgrounds[':idBoardBackground'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdMemberBoardStarsKey(
  args: InferRequestType<(typeof client.members)[':idMember']['boardStars']['$get']>,
) {
  return ['members', '/members/:idMember/boardStars', args] as const
}

export function useGetMembersIdMemberBoardStars<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['boardStars']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['boardStars']['$get']>>
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
        ? getGetMembersIdMemberBoardStarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['boardStars']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':idMember'].boardStars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMemberBoardStars<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['boardStars']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['boardStars']['$get']>>
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
        ? getGetMembersIdMemberBoardStarsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['boardStars']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':idMember'].boardStars.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMembersIdMemberBoardStarsKey() {
  return ['members', '/members/:idMember/boardStars', 'POST'] as const
}

export function usePostMembersIdMemberBoardStars<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':idMember']['boardStars']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':idMember']['boardStars']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMembersIdMemberBoardStarsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.members)[':idMember']['boardStars']['$post']> },
      ) => parseResponse(client.members[':idMember'].boardStars.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdMemberBoardStarsIdBoardStarKey(
  args: InferRequestType<
    (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$get']
  >,
) {
  return ['members', '/members/:idMember/boardStars/:idBoardStar', args] as const
}

export function useGetMembersIdMemberBoardStarsIdBoardStar<TError = unknown>(
  args: InferRequestType<
    (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$get']>
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
        ? getGetMembersIdMemberBoardStarsIdBoardStarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.members[':idMember'].boardStars[':idBoardStar'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMemberBoardStarsIdBoardStar<TError = unknown>(
  args: InferRequestType<
    (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$get']>
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
        ? getGetMembersIdMemberBoardStarsIdBoardStarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.members[':idMember'].boardStars[':idBoardStar'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMembersIdMemberBoardStarsIdBoardStarKey() {
  return ['members', '/members/:idMember/boardStars/:idBoardStar', 'PUT'] as const
}

export function usePutMembersIdMemberBoardStarsIdBoardStar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMembersIdMemberBoardStarsIdBoardStarKey()
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
            (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$put']
          >
        },
      ) =>
        parseResponse(
          client.members[':idMember'].boardStars[':idBoardStar'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMembersIdMemberBoardStarsIdBoardStarKey() {
  return ['members', '/members/:idMember/boardStars/:idBoardStar', 'DELETE'] as const
}

export function useDeleteMembersIdMemberBoardStarsIdBoardStar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMembersIdMemberBoardStarsIdBoardStarKey()
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
            (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.members[':idMember'].boardStars[':idBoardStar'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMembersIdMemberBoardStarsIdBoardStarIdBoardKey() {
  return ['members', '/members/:idMember/boardStars/:idBoardStar/idBoard', 'PUT'] as const
}

export function usePutMembersIdMemberBoardStarsIdBoardStarIdBoard<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['idBoard']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['idBoard']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMembersIdMemberBoardStarsIdBoardStarIdBoardKey()
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
            (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['idBoard']['$put']
          >
        },
      ) =>
        parseResponse(
          client.members[':idMember'].boardStars[':idBoardStar'].idBoard.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMembersIdMemberBoardStarsIdBoardStarPosKey() {
  return ['members', '/members/:idMember/boardStars/:idBoardStar/pos', 'PUT'] as const
}

export function usePutMembersIdMemberBoardStarsIdBoardStarPos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['pos']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['pos']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMembersIdMemberBoardStarsIdBoardStarPosKey()
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
            (typeof client.members)[':idMember']['boardStars'][':idBoardStar']['pos']['$put']
          >
        },
      ) =>
        parseResponse(
          client.members[':idMember'].boardStars[':idBoardStar'].pos.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdMemberBoardsKey(
  args: InferRequestType<(typeof client.members)[':idMember']['boards']['$get']>,
) {
  return ['members', '/members/:idMember/boards', args] as const
}

export function useGetMembersIdMemberBoards<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['boards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['boards']['$get']>>
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
        ? getGetMembersIdMemberBoardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['boards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':idMember'].boards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMemberBoards<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['boards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['boards']['$get']>>
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
        ? getGetMembersIdMemberBoardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['boards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':idMember'].boards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMembersIdMemberBoardsFilterKey(
  args: InferRequestType<(typeof client.members)[':idMember']['boards'][':filter']['$get']>,
) {
  return ['members', '/members/:idMember/boards/:filter', args] as const
}

export function useGetMembersIdMemberBoardsFilter<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['boards'][':filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['boards'][':filter']['$get']>>
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
        ? getGetMembersIdMemberBoardsFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['boards'][':filter']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':idMember'].boards[':filter'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMemberBoardsFilter<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['boards'][':filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['boards'][':filter']['$get']>>
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
        ? getGetMembersIdMemberBoardsFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['boards'][':filter']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':idMember'].boards[':filter'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMembersIdMemberBoardsInvitedKey(
  args: InferRequestType<(typeof client.members)[':idMember']['boardsInvited']['$get']>,
) {
  return ['members', '/members/:idMember/boardsInvited', args] as const
}

export function useGetMembersIdMemberBoardsInvited<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['boardsInvited']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['boardsInvited']['$get']>>
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
        ? getGetMembersIdMemberBoardsInvitedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['boardsInvited']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':idMember'].boardsInvited.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMemberBoardsInvited<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['boardsInvited']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['boardsInvited']['$get']>>
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
        ? getGetMembersIdMemberBoardsInvitedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['boardsInvited']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':idMember'].boardsInvited.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMembersIdMemberBoardsInvitedFieldKey(
  args: InferRequestType<(typeof client.members)[':idMember']['boardsInvited'][':field']['$get']>,
) {
  return ['members', '/members/:idMember/boardsInvited/:field', args] as const
}

export function useGetMembersIdMemberBoardsInvitedField<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['boardsInvited'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':idMember']['boardsInvited'][':field']['$get']>
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
        ? getGetMembersIdMemberBoardsInvitedFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':idMember']['boardsInvited'][':field']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.members[':idMember'].boardsInvited[':field'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMemberBoardsInvitedField<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['boardsInvited'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':idMember']['boardsInvited'][':field']['$get']>
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
        ? getGetMembersIdMemberBoardsInvitedFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':idMember']['boardsInvited'][':field']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.members[':idMember'].boardsInvited[':field'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMembersIdMemberCardsKey(
  args: InferRequestType<(typeof client.members)[':idMember']['cards']['$get']>,
) {
  return ['members', '/members/:idMember/cards', args] as const
}

export function useGetMembersIdMemberCards<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['cards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['cards']['$get']>>
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
        ? getGetMembersIdMemberCardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['cards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':idMember'].cards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMemberCards<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['cards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['cards']['$get']>>
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
        ? getGetMembersIdMemberCardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['cards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':idMember'].cards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMembersIdMemberCardsFilterKey(
  args: InferRequestType<(typeof client.members)[':idMember']['cards'][':filter']['$get']>,
) {
  return ['members', '/members/:idMember/cards/:filter', args] as const
}

export function useGetMembersIdMemberCardsFilter<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['cards'][':filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['cards'][':filter']['$get']>>
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
        ? getGetMembersIdMemberCardsFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['cards'][':filter']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':idMember'].cards[':filter'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMemberCardsFilter<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['cards'][':filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['cards'][':filter']['$get']>>
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
        ? getGetMembersIdMemberCardsFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['cards'][':filter']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':idMember'].cards[':filter'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMembersIdMemberCustomBoardBackgroundsKey(
  args: InferRequestType<(typeof client.members)[':idMember']['customBoardBackgrounds']['$get']>,
) {
  return ['members', '/members/:idMember/customBoardBackgrounds', args] as const
}

export function useGetMembersIdMemberCustomBoardBackgrounds<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['customBoardBackgrounds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':idMember']['customBoardBackgrounds']['$get']>
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
        ? getGetMembersIdMemberCustomBoardBackgroundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':idMember']['customBoardBackgrounds']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':idMember'].customBoardBackgrounds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMemberCustomBoardBackgrounds<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['customBoardBackgrounds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':idMember']['customBoardBackgrounds']['$get']>
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
        ? getGetMembersIdMemberCustomBoardBackgroundsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':idMember']['customBoardBackgrounds']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':idMember'].customBoardBackgrounds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMembersIdMemberCustomBoardBackgroundsKey() {
  return ['members', '/members/:idMember/customBoardBackgrounds', 'POST'] as const
}

export function usePostMembersIdMemberCustomBoardBackgrounds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.members)[':idMember']['customBoardBackgrounds']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':idMember']['customBoardBackgrounds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMembersIdMemberCustomBoardBackgroundsKey()
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
            (typeof client.members)[':idMember']['customBoardBackgrounds']['$post']
          >
        },
      ) =>
        parseResponse(client.members[':idMember'].customBoardBackgrounds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundKey(
  args: InferRequestType<
    (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$get']
  >,
) {
  return ['members', '/members/:idMember/customBoardBackgrounds/:idBoardBackground', args] as const
}

export function useGetMembersIdMemberCustomBoardBackgroundsIdBoardBackground<TError = unknown>(
  args: InferRequestType<
    (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$get']
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
        ? getGetMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundKey(args)
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
                (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$get']
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
          client.members[':idMember'].customBoardBackgrounds[':idBoardBackground'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMemberCustomBoardBackgroundsIdBoardBackground<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$get']
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
        ? getGetMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundKey(args)
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
                (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$get']
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
          client.members[':idMember'].customBoardBackgrounds[':idBoardBackground'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundKey() {
  return ['members', '/members/:idMember/customBoardBackgrounds/:idBoardBackground', 'PUT'] as const
}

export function usePutMembersIdMemberCustomBoardBackgroundsIdBoardBackground<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundKey()
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
            (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$put']
          >
        },
      ) =>
        parseResponse(
          client.members[':idMember'].customBoardBackgrounds[':idBoardBackground'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundKey() {
  return [
    'members',
    '/members/:idMember/customBoardBackgrounds/:idBoardBackground',
    'DELETE',
  ] as const
}

export function useDeleteMembersIdMemberCustomBoardBackgroundsIdBoardBackground<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMembersIdMemberCustomBoardBackgroundsIdBoardBackgroundKey()
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
            (typeof client.members)[':idMember']['customBoardBackgrounds'][':idBoardBackground']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.members[':idMember'].customBoardBackgrounds[':idBoardBackground'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdMemberCustomEmojiKey(
  args: InferRequestType<(typeof client.members)[':idMember']['customEmoji']['$get']>,
) {
  return ['members', '/members/:idMember/customEmoji', args] as const
}

export function useGetMembersIdMemberCustomEmoji<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['customEmoji']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['customEmoji']['$get']>>
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
        ? getGetMembersIdMemberCustomEmojiKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['customEmoji']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':idMember'].customEmoji.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMemberCustomEmoji<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['customEmoji']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['customEmoji']['$get']>>
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
        ? getGetMembersIdMemberCustomEmojiKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['customEmoji']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':idMember'].customEmoji.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMembersIdMemberCustomEmojiKey() {
  return ['members', '/members/:idMember/customEmoji', 'POST'] as const
}

export function usePostMembersIdMemberCustomEmoji<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':idMember']['customEmoji']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':idMember']['customEmoji']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMembersIdMemberCustomEmojiKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.members)[':idMember']['customEmoji']['$post']> },
      ) => parseResponse(client.members[':idMember'].customEmoji.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdMemberCustomEmojiIdCustomEmojiKey(
  args: InferRequestType<
    (typeof client.members)[':idMember']['customEmoji'][':idCustomEmoji']['$get']
  >,
) {
  return ['members', '/members/:idMember/customEmoji/:idCustomEmoji', args] as const
}

export function useGetMembersIdMemberCustomEmojiIdCustomEmoji<TError = unknown>(
  args: InferRequestType<
    (typeof client.members)[':idMember']['customEmoji'][':idCustomEmoji']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.members)[':idMember']['customEmoji'][':idCustomEmoji']['$get']
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
        ? getGetMembersIdMemberCustomEmojiIdCustomEmojiKey(args)
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
                (typeof client.members)[':idMember']['customEmoji'][':idCustomEmoji']['$get']
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
          client.members[':idMember'].customEmoji[':idCustomEmoji'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMemberCustomEmojiIdCustomEmoji<TError = unknown>(
  args: InferRequestType<
    (typeof client.members)[':idMember']['customEmoji'][':idCustomEmoji']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.members)[':idMember']['customEmoji'][':idCustomEmoji']['$get']
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
        ? getGetMembersIdMemberCustomEmojiIdCustomEmojiKey(args)
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
                (typeof client.members)[':idMember']['customEmoji'][':idCustomEmoji']['$get']
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
          client.members[':idMember'].customEmoji[':idCustomEmoji'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMembersIdMemberCustomStickersKey(
  args: InferRequestType<(typeof client.members)[':idMember']['customStickers']['$get']>,
) {
  return ['members', '/members/:idMember/customStickers', args] as const
}

export function useGetMembersIdMemberCustomStickers<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['customStickers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['customStickers']['$get']>>
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
        ? getGetMembersIdMemberCustomStickersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['customStickers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':idMember'].customStickers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMemberCustomStickers<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['customStickers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['customStickers']['$get']>>
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
        ? getGetMembersIdMemberCustomStickersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['customStickers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':idMember'].customStickers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMembersIdMemberCustomStickersKey() {
  return ['members', '/members/:idMember/customStickers', 'POST'] as const
}

export function usePostMembersIdMemberCustomStickers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':idMember']['customStickers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':idMember']['customStickers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMembersIdMemberCustomStickersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.members)[':idMember']['customStickers']['$post']>
        },
      ) => parseResponse(client.members[':idMember'].customStickers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdMemberCustomStickersIdCustomStickerKey(
  args: InferRequestType<
    (typeof client.members)[':idMember']['customStickers'][':idCustomSticker']['$get']
  >,
) {
  return ['members', '/members/:idMember/customStickers/:idCustomSticker', args] as const
}

export function useGetMembersIdMemberCustomStickersIdCustomSticker<TError = unknown>(
  args: InferRequestType<
    (typeof client.members)[':idMember']['customStickers'][':idCustomSticker']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.members)[':idMember']['customStickers'][':idCustomSticker']['$get']
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
        ? getGetMembersIdMemberCustomStickersIdCustomStickerKey(args)
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
                (typeof client.members)[':idMember']['customStickers'][':idCustomSticker']['$get']
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
          client.members[':idMember'].customStickers[':idCustomSticker'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMemberCustomStickersIdCustomSticker<TError = unknown>(
  args: InferRequestType<
    (typeof client.members)[':idMember']['customStickers'][':idCustomSticker']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.members)[':idMember']['customStickers'][':idCustomSticker']['$get']
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
        ? getGetMembersIdMemberCustomStickersIdCustomStickerKey(args)
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
                (typeof client.members)[':idMember']['customStickers'][':idCustomSticker']['$get']
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
          client.members[':idMember'].customStickers[':idCustomSticker'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteMembersIdMemberCustomStickersIdCustomStickerKey() {
  return ['members', '/members/:idMember/customStickers/:idCustomSticker', 'DELETE'] as const
}

export function useDeleteMembersIdMemberCustomStickersIdCustomSticker<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':idMember']['customStickers'][':idCustomSticker']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.members)[':idMember']['customStickers'][':idCustomSticker']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMembersIdMemberCustomStickersIdCustomStickerKey()
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
            (typeof client.members)[':idMember']['customStickers'][':idCustomSticker']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.members[':idMember'].customStickers[':idCustomSticker'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdMemberDeltasKey(
  args: InferRequestType<(typeof client.members)[':idMember']['deltas']['$get']>,
) {
  return ['members', '/members/:idMember/deltas', args] as const
}

export function useGetMembersIdMemberDeltas<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['deltas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['deltas']['$get']>>
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
        ? getGetMembersIdMemberDeltasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['deltas']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':idMember'].deltas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMemberDeltas<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['deltas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['deltas']['$get']>>
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
        ? getGetMembersIdMemberDeltasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['deltas']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':idMember'].deltas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMembersIdMemberFullNameKey() {
  return ['members', '/members/:idMember/fullName', 'PUT'] as const
}

export function usePutMembersIdMemberFullName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':idMember']['fullName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':idMember']['fullName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMembersIdMemberFullNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.members)[':idMember']['fullName']['$put']> },
      ) => parseResponse(client.members[':idMember'].fullName.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMembersIdMemberInitialsKey() {
  return ['members', '/members/:idMember/initials', 'PUT'] as const
}

export function usePutMembersIdMemberInitials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':idMember']['initials']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':idMember']['initials']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMembersIdMemberInitialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.members)[':idMember']['initials']['$put']> },
      ) => parseResponse(client.members[':idMember'].initials.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdMemberNotificationsKey(
  args: InferRequestType<(typeof client.members)[':idMember']['notifications']['$get']>,
) {
  return ['members', '/members/:idMember/notifications', args] as const
}

export function useGetMembersIdMemberNotifications<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['notifications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['notifications']['$get']>>
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
        ? getGetMembersIdMemberNotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['notifications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':idMember'].notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMemberNotifications<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['notifications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['notifications']['$get']>>
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
        ? getGetMembersIdMemberNotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['notifications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':idMember'].notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMembersIdMemberNotificationsFilterKey(
  args: InferRequestType<(typeof client.members)[':idMember']['notifications'][':filter']['$get']>,
) {
  return ['members', '/members/:idMember/notifications/:filter', args] as const
}

export function useGetMembersIdMemberNotificationsFilter<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['notifications'][':filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':idMember']['notifications'][':filter']['$get']>
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
        ? getGetMembersIdMemberNotificationsFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':idMember']['notifications'][':filter']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.members[':idMember'].notifications[':filter'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMemberNotificationsFilter<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['notifications'][':filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':idMember']['notifications'][':filter']['$get']>
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
        ? getGetMembersIdMemberNotificationsFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':idMember']['notifications'][':filter']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.members[':idMember'].notifications[':filter'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMembersIdMemberOneTimeMessagesDismissedKey() {
  return ['members', '/members/:idMember/oneTimeMessagesDismissed', 'POST'] as const
}

export function usePostMembersIdMemberOneTimeMessagesDismissed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.members)[':idMember']['oneTimeMessagesDismissed']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':idMember']['oneTimeMessagesDismissed']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMembersIdMemberOneTimeMessagesDismissedKey()
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
            (typeof client.members)[':idMember']['oneTimeMessagesDismissed']['$post']
          >
        },
      ) =>
        parseResponse(
          client.members[':idMember'].oneTimeMessagesDismissed.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdMemberOrganizationsKey(
  args: InferRequestType<(typeof client.members)[':idMember']['organizations']['$get']>,
) {
  return ['members', '/members/:idMember/organizations', args] as const
}

export function useGetMembersIdMemberOrganizations<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['organizations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['organizations']['$get']>>
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
        ? getGetMembersIdMemberOrganizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['organizations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':idMember'].organizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMemberOrganizations<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['organizations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['organizations']['$get']>>
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
        ? getGetMembersIdMemberOrganizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['organizations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':idMember'].organizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMembersIdMemberOrganizationsFilterKey(
  args: InferRequestType<(typeof client.members)[':idMember']['organizations'][':filter']['$get']>,
) {
  return ['members', '/members/:idMember/organizations/:filter', args] as const
}

export function useGetMembersIdMemberOrganizationsFilter<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['organizations'][':filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':idMember']['organizations'][':filter']['$get']>
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
        ? getGetMembersIdMemberOrganizationsFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':idMember']['organizations'][':filter']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.members[':idMember'].organizations[':filter'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMemberOrganizationsFilter<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['organizations'][':filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':idMember']['organizations'][':filter']['$get']>
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
        ? getGetMembersIdMemberOrganizationsFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':idMember']['organizations'][':filter']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.members[':idMember'].organizations[':filter'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMembersIdMemberOrganizationsInvitedKey(
  args: InferRequestType<(typeof client.members)[':idMember']['organizationsInvited']['$get']>,
) {
  return ['members', '/members/:idMember/organizationsInvited', args] as const
}

export function useGetMembersIdMemberOrganizationsInvited<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['organizationsInvited']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':idMember']['organizationsInvited']['$get']>
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
        ? getGetMembersIdMemberOrganizationsInvitedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':idMember']['organizationsInvited']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':idMember'].organizationsInvited.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMemberOrganizationsInvited<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['organizationsInvited']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':idMember']['organizationsInvited']['$get']>
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
        ? getGetMembersIdMemberOrganizationsInvitedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.members)[':idMember']['organizationsInvited']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':idMember'].organizationsInvited.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMembersIdMemberOrganizationsInvitedFieldKey(
  args: InferRequestType<
    (typeof client.members)[':idMember']['organizationsInvited'][':field']['$get']
  >,
) {
  return ['members', '/members/:idMember/organizationsInvited/:field', args] as const
}

export function useGetMembersIdMemberOrganizationsInvitedField<TError = unknown>(
  args: InferRequestType<
    (typeof client.members)[':idMember']['organizationsInvited'][':field']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.members)[':idMember']['organizationsInvited'][':field']['$get']
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
        ? getGetMembersIdMemberOrganizationsInvitedFieldKey(args)
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
                (typeof client.members)[':idMember']['organizationsInvited'][':field']['$get']
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
          client.members[':idMember'].organizationsInvited[':field'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMemberOrganizationsInvitedField<TError = unknown>(
  args: InferRequestType<
    (typeof client.members)[':idMember']['organizationsInvited'][':field']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.members)[':idMember']['organizationsInvited'][':field']['$get']
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
        ? getGetMembersIdMemberOrganizationsInvitedFieldKey(args)
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
                (typeof client.members)[':idMember']['organizationsInvited'][':field']['$get']
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
          client.members[':idMember'].organizationsInvited[':field'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMembersIdMemberPrefsColorBlindKey() {
  return ['members', '/members/:idMember/prefs/colorBlind', 'PUT'] as const
}

export function usePutMembersIdMemberPrefsColorBlind<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':idMember']['prefs']['colorBlind']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':idMember']['prefs']['colorBlind']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMembersIdMemberPrefsColorBlindKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.members)[':idMember']['prefs']['colorBlind']['$put']>
        },
      ) => parseResponse(client.members[':idMember'].prefs.colorBlind.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMembersIdMemberPrefsLocaleKey() {
  return ['members', '/members/:idMember/prefs/locale', 'PUT'] as const
}

export function usePutMembersIdMemberPrefsLocale<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':idMember']['prefs']['locale']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':idMember']['prefs']['locale']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMembersIdMemberPrefsLocaleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.members)[':idMember']['prefs']['locale']['$put']>
        },
      ) => parseResponse(client.members[':idMember'].prefs.locale.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutMembersIdMemberPrefsMinutesBetweenSummariesKey() {
  return ['members', '/members/:idMember/prefs/minutesBetweenSummaries', 'PUT'] as const
}

export function usePutMembersIdMemberPrefsMinutesBetweenSummaries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':idMember']['prefs']['minutesBetweenSummaries']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.members)[':idMember']['prefs']['minutesBetweenSummaries']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMembersIdMemberPrefsMinutesBetweenSummariesKey()
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
            (typeof client.members)[':idMember']['prefs']['minutesBetweenSummaries']['$put']
          >
        },
      ) =>
        parseResponse(
          client.members[':idMember'].prefs.minutesBetweenSummaries.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdMemberSavedSearchesKey(
  args: InferRequestType<(typeof client.members)[':idMember']['savedSearches']['$get']>,
) {
  return ['members', '/members/:idMember/savedSearches', args] as const
}

export function useGetMembersIdMemberSavedSearches<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['savedSearches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['savedSearches']['$get']>>
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
        ? getGetMembersIdMemberSavedSearchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['savedSearches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':idMember'].savedSearches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMemberSavedSearches<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['savedSearches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['savedSearches']['$get']>>
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
        ? getGetMembersIdMemberSavedSearchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['savedSearches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.members[':idMember'].savedSearches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMembersIdMemberSavedSearchesKey() {
  return ['members', '/members/:idMember/savedSearches', 'POST'] as const
}

export function usePostMembersIdMemberSavedSearches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':idMember']['savedSearches']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':idMember']['savedSearches']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMembersIdMemberSavedSearchesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.members)[':idMember']['savedSearches']['$post']>
        },
      ) => parseResponse(client.members[':idMember'].savedSearches.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdMemberSavedSearchesIdSavedSearchKey(
  args: InferRequestType<
    (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$get']
  >,
) {
  return ['members', '/members/:idMember/savedSearches/:idSavedSearch', args] as const
}

export function useGetMembersIdMemberSavedSearchesIdSavedSearch<TError = unknown>(
  args: InferRequestType<
    (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$get']
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
        ? getGetMembersIdMemberSavedSearchesIdSavedSearchKey(args)
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
                (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$get']
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
          client.members[':idMember'].savedSearches[':idSavedSearch'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMemberSavedSearchesIdSavedSearch<TError = unknown>(
  args: InferRequestType<
    (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$get']
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
        ? getGetMembersIdMemberSavedSearchesIdSavedSearchKey(args)
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
                (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$get']
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
          client.members[':idMember'].savedSearches[':idSavedSearch'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMembersIdMemberSavedSearchesIdSavedSearchKey() {
  return ['members', '/members/:idMember/savedSearches/:idSavedSearch', 'PUT'] as const
}

export function usePutMembersIdMemberSavedSearchesIdSavedSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMembersIdMemberSavedSearchesIdSavedSearchKey()
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
            (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$put']
          >
        },
      ) =>
        parseResponse(
          client.members[':idMember'].savedSearches[':idSavedSearch'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMembersIdMemberSavedSearchesIdSavedSearchKey() {
  return ['members', '/members/:idMember/savedSearches/:idSavedSearch', 'DELETE'] as const
}

export function useDeleteMembersIdMemberSavedSearchesIdSavedSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMembersIdMemberSavedSearchesIdSavedSearchKey()
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
            (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.members[':idMember'].savedSearches[':idSavedSearch'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMembersIdMemberSavedSearchesIdSavedSearchNameKey() {
  return ['members', '/members/:idMember/savedSearches/:idSavedSearch/name', 'PUT'] as const
}

export function usePutMembersIdMemberSavedSearchesIdSavedSearchName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMembersIdMemberSavedSearchesIdSavedSearchNameKey()
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
            (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.members[':idMember'].savedSearches[':idSavedSearch'].name.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMembersIdMemberSavedSearchesIdSavedSearchPosKey() {
  return ['members', '/members/:idMember/savedSearches/:idSavedSearch/pos', 'PUT'] as const
}

export function usePutMembersIdMemberSavedSearchesIdSavedSearchPos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['pos']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['pos']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMembersIdMemberSavedSearchesIdSavedSearchPosKey()
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
            (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['pos']['$put']
          >
        },
      ) =>
        parseResponse(
          client.members[':idMember'].savedSearches[':idSavedSearch'].pos.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutMembersIdMemberSavedSearchesIdSavedSearchQueryKey() {
  return ['members', '/members/:idMember/savedSearches/:idSavedSearch/query', 'PUT'] as const
}

export function usePutMembersIdMemberSavedSearchesIdSavedSearchQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['query']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['query']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMembersIdMemberSavedSearchesIdSavedSearchQueryKey()
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
            (typeof client.members)[':idMember']['savedSearches'][':idSavedSearch']['query']['$put']
          >
        },
      ) =>
        parseResponse(
          client.members[':idMember'].savedSearches[':idSavedSearch'].query.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdMemberTokensKey(
  args: InferRequestType<(typeof client.members)[':idMember']['tokens']['$get']>,
) {
  return ['members', '/members/:idMember/tokens', args] as const
}

export function useGetMembersIdMemberTokens<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['tokens']['$get']>>
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
        ? getGetMembersIdMemberTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['tokens']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':idMember'].tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMemberTokens<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember']['tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['tokens']['$get']>>
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
        ? getGetMembersIdMemberTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember']['tokens']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':idMember'].tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMembersIdMemberUsernameKey() {
  return ['members', '/members/:idMember/username', 'PUT'] as const
}

export function usePutMembersIdMemberUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.members)[':idMember']['username']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.members)[':idMember']['username']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMembersIdMemberUsernameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.members)[':idMember']['username']['$put']> },
      ) => parseResponse(client.members[':idMember'].username.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMembersIdMemberFieldKey(
  args: InferRequestType<(typeof client.members)[':idMember'][':field']['$get']>,
) {
  return ['members', '/members/:idMember/:field', args] as const
}

export function useGetMembersIdMemberField<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember'][':field']['$get']>>
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
        ? getGetMembersIdMemberFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':idMember'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMembersIdMemberField<TError = unknown>(
  args: InferRequestType<(typeof client.members)[':idMember'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember'][':field']['$get']>>
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
        ? getGetMembersIdMemberFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.members)[':idMember'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.members[':idMember'][':field'].$get(args, clientOptions)),
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

export function getGetNotificationsIdNotificationKey(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['$get']>,
) {
  return ['notifications', '/notifications/:idNotification', args] as const
}

export function useGetNotificationsIdNotification<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':idNotification']['$get']>>
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
        ? getGetNotificationsIdNotificationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':idNotification']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications[':idNotification'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsIdNotification<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':idNotification']['$get']>>
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
        ? getGetNotificationsIdNotificationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':idNotification']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications[':idNotification'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNotificationsIdNotificationKey() {
  return ['notifications', '/notifications/:idNotification', 'PUT'] as const
}

export function usePutNotificationsIdNotification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications)[':idNotification']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notifications)[':idNotification']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNotificationsIdNotificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.notifications)[':idNotification']['$put']> },
      ) => parseResponse(client.notifications[':idNotification'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationsIdNotificationBoardKey(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['board']['$get']>,
) {
  return ['notifications', '/notifications/:idNotification/board', args] as const
}

export function useGetNotificationsIdNotificationBoard<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['board']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':idNotification']['board']['$get']>>
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
        ? getGetNotificationsIdNotificationBoardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':idNotification']['board']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications[':idNotification'].board.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsIdNotificationBoard<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['board']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':idNotification']['board']['$get']>>
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
        ? getGetNotificationsIdNotificationBoardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':idNotification']['board']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications[':idNotification'].board.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsIdNotificationBoardFieldKey(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['board'][':field']['$get']
  >,
) {
  return ['notifications', '/notifications/:idNotification/board/:field', args] as const
}

export function useGetNotificationsIdNotificationBoardField<TError = unknown>(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['board'][':field']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.notifications)[':idNotification']['board'][':field']['$get']
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
        ? getGetNotificationsIdNotificationBoardFieldKey(args)
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
                (typeof client.notifications)[':idNotification']['board'][':field']['$get']
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
          client.notifications[':idNotification'].board[':field'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsIdNotificationBoardField<TError = unknown>(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['board'][':field']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.notifications)[':idNotification']['board'][':field']['$get']
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
        ? getGetNotificationsIdNotificationBoardFieldKey(args)
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
                (typeof client.notifications)[':idNotification']['board'][':field']['$get']
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
          client.notifications[':idNotification'].board[':field'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsIdNotificationCardKey(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['card']['$get']>,
) {
  return ['notifications', '/notifications/:idNotification/card', args] as const
}

export function useGetNotificationsIdNotificationCard<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['card']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':idNotification']['card']['$get']>>
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
        ? getGetNotificationsIdNotificationCardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':idNotification']['card']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications[':idNotification'].card.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsIdNotificationCard<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['card']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':idNotification']['card']['$get']>>
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
        ? getGetNotificationsIdNotificationCardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':idNotification']['card']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications[':idNotification'].card.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsIdNotificationCardFieldKey(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['card'][':field']['$get']
  >,
) {
  return ['notifications', '/notifications/:idNotification/card/:field', args] as const
}

export function useGetNotificationsIdNotificationCardField<TError = unknown>(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['card'][':field']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notifications)[':idNotification']['card'][':field']['$get']>
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
        ? getGetNotificationsIdNotificationCardFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notifications)[':idNotification']['card'][':field']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.notifications[':idNotification'].card[':field'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsIdNotificationCardField<TError = unknown>(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['card'][':field']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notifications)[':idNotification']['card'][':field']['$get']>
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
        ? getGetNotificationsIdNotificationCardFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notifications)[':idNotification']['card'][':field']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.notifications[':idNotification'].card[':field'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsIdNotificationDisplayKey(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['display']['$get']>,
) {
  return ['notifications', '/notifications/:idNotification/display', args] as const
}

export function useGetNotificationsIdNotificationDisplay<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['display']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':idNotification']['display']['$get']>>
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
        ? getGetNotificationsIdNotificationDisplayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':idNotification']['display']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications[':idNotification'].display.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsIdNotificationDisplay<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['display']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':idNotification']['display']['$get']>>
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
        ? getGetNotificationsIdNotificationDisplayKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':idNotification']['display']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications[':idNotification'].display.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsIdNotificationEntitiesKey(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['entities']['$get']>,
) {
  return ['notifications', '/notifications/:idNotification/entities', args] as const
}

export function useGetNotificationsIdNotificationEntities<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['entities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notifications)[':idNotification']['entities']['$get']>
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
        ? getGetNotificationsIdNotificationEntitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notifications)[':idNotification']['entities']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications[':idNotification'].entities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsIdNotificationEntities<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['entities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notifications)[':idNotification']['entities']['$get']>
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
        ? getGetNotificationsIdNotificationEntitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notifications)[':idNotification']['entities']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications[':idNotification'].entities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsIdNotificationListKey(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['list']['$get']>,
) {
  return ['notifications', '/notifications/:idNotification/list', args] as const
}

export function useGetNotificationsIdNotificationList<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':idNotification']['list']['$get']>>
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
        ? getGetNotificationsIdNotificationListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':idNotification']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications[':idNotification'].list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsIdNotificationList<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':idNotification']['list']['$get']>>
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
        ? getGetNotificationsIdNotificationListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':idNotification']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications[':idNotification'].list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsIdNotificationListFieldKey(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['list'][':field']['$get']
  >,
) {
  return ['notifications', '/notifications/:idNotification/list/:field', args] as const
}

export function useGetNotificationsIdNotificationListField<TError = unknown>(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['list'][':field']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notifications)[':idNotification']['list'][':field']['$get']>
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
        ? getGetNotificationsIdNotificationListFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notifications)[':idNotification']['list'][':field']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.notifications[':idNotification'].list[':field'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsIdNotificationListField<TError = unknown>(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['list'][':field']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notifications)[':idNotification']['list'][':field']['$get']>
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
        ? getGetNotificationsIdNotificationListFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notifications)[':idNotification']['list'][':field']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.notifications[':idNotification'].list[':field'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsIdNotificationMemberKey(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['member']['$get']>,
) {
  return ['notifications', '/notifications/:idNotification/member', args] as const
}

export function useGetNotificationsIdNotificationMember<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['member']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':idNotification']['member']['$get']>>
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
        ? getGetNotificationsIdNotificationMemberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':idNotification']['member']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications[':idNotification'].member.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsIdNotificationMember<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['member']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':idNotification']['member']['$get']>>
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
        ? getGetNotificationsIdNotificationMemberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':idNotification']['member']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications[':idNotification'].member.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsIdNotificationMemberFieldKey(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['member'][':field']['$get']
  >,
) {
  return ['notifications', '/notifications/:idNotification/member/:field', args] as const
}

export function useGetNotificationsIdNotificationMemberField<TError = unknown>(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['member'][':field']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.notifications)[':idNotification']['member'][':field']['$get']
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
        ? getGetNotificationsIdNotificationMemberFieldKey(args)
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
                (typeof client.notifications)[':idNotification']['member'][':field']['$get']
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
          client.notifications[':idNotification'].member[':field'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsIdNotificationMemberField<TError = unknown>(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['member'][':field']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.notifications)[':idNotification']['member'][':field']['$get']
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
        ? getGetNotificationsIdNotificationMemberFieldKey(args)
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
                (typeof client.notifications)[':idNotification']['member'][':field']['$get']
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
          client.notifications[':idNotification'].member[':field'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsIdNotificationMemberCreatorKey(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['memberCreator']['$get']>,
) {
  return ['notifications', '/notifications/:idNotification/memberCreator', args] as const
}

export function useGetNotificationsIdNotificationMemberCreator<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['memberCreator']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notifications)[':idNotification']['memberCreator']['$get']>
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
        ? getGetNotificationsIdNotificationMemberCreatorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notifications)[':idNotification']['memberCreator']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.notifications[':idNotification'].memberCreator.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsIdNotificationMemberCreator<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['memberCreator']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notifications)[':idNotification']['memberCreator']['$get']>
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
        ? getGetNotificationsIdNotificationMemberCreatorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notifications)[':idNotification']['memberCreator']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.notifications[':idNotification'].memberCreator.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsIdNotificationMemberCreatorFieldKey(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['memberCreator'][':field']['$get']
  >,
) {
  return ['notifications', '/notifications/:idNotification/memberCreator/:field', args] as const
}

export function useGetNotificationsIdNotificationMemberCreatorField<TError = unknown>(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['memberCreator'][':field']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.notifications)[':idNotification']['memberCreator'][':field']['$get']
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
        ? getGetNotificationsIdNotificationMemberCreatorFieldKey(args)
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
                (typeof client.notifications)[':idNotification']['memberCreator'][':field']['$get']
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
          client.notifications[':idNotification'].memberCreator[':field'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsIdNotificationMemberCreatorField<TError = unknown>(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['memberCreator'][':field']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.notifications)[':idNotification']['memberCreator'][':field']['$get']
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
        ? getGetNotificationsIdNotificationMemberCreatorFieldKey(args)
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
                (typeof client.notifications)[':idNotification']['memberCreator'][':field']['$get']
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
          client.notifications[':idNotification'].memberCreator[':field'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsIdNotificationOrganizationKey(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['organization']['$get']>,
) {
  return ['notifications', '/notifications/:idNotification/organization', args] as const
}

export function useGetNotificationsIdNotificationOrganization<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['organization']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notifications)[':idNotification']['organization']['$get']>
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
        ? getGetNotificationsIdNotificationOrganizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notifications)[':idNotification']['organization']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.notifications[':idNotification'].organization.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsIdNotificationOrganization<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':idNotification']['organization']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notifications)[':idNotification']['organization']['$get']>
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
        ? getGetNotificationsIdNotificationOrganizationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notifications)[':idNotification']['organization']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.notifications[':idNotification'].organization.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsIdNotificationOrganizationFieldKey(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['organization'][':field']['$get']
  >,
) {
  return ['notifications', '/notifications/:idNotification/organization/:field', args] as const
}

export function useGetNotificationsIdNotificationOrganizationField<TError = unknown>(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['organization'][':field']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.notifications)[':idNotification']['organization'][':field']['$get']
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
        ? getGetNotificationsIdNotificationOrganizationFieldKey(args)
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
                (typeof client.notifications)[':idNotification']['organization'][':field']['$get']
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
          client.notifications[':idNotification'].organization[':field'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsIdNotificationOrganizationField<TError = unknown>(
  args: InferRequestType<
    (typeof client.notifications)[':idNotification']['organization'][':field']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.notifications)[':idNotification']['organization'][':field']['$get']
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
        ? getGetNotificationsIdNotificationOrganizationFieldKey(args)
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
                (typeof client.notifications)[':idNotification']['organization'][':field']['$get']
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
          client.notifications[':idNotification'].organization[':field'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutNotificationsIdNotificationUnreadKey() {
  return ['notifications', '/notifications/:idNotification/unread', 'PUT'] as const
}

export function usePutNotificationsIdNotificationUnread<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications)[':idNotification']['unread']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notifications)[':idNotification']['unread']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNotificationsIdNotificationUnreadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.notifications)[':idNotification']['unread']['$put']>
        },
      ) => parseResponse(client.notifications[':idNotification'].unread.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationsIdNotificationFieldKey(
  args: InferRequestType<(typeof client.notifications)[':idNotification'][':field']['$get']>,
) {
  return ['notifications', '/notifications/:idNotification/:field', args] as const
}

export function useGetNotificationsIdNotificationField<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':idNotification'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':idNotification'][':field']['$get']>>
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
        ? getGetNotificationsIdNotificationFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':idNotification'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications[':idNotification'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsIdNotificationField<TError = unknown>(
  args: InferRequestType<(typeof client.notifications)[':idNotification'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':idNotification'][':field']['$get']>>
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
        ? getGetNotificationsIdNotificationFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications)[':idNotification'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications[':idNotification'][':field'].$get(args, clientOptions)),
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

export function getGetOrganizationsIdOrgKey(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['$get']>,
) {
  return ['organizations', '/organizations/:idOrg', args] as const
}

export function useGetOrganizationsIdOrg<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':idOrg']['$get']>>>
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
        ? getGetOrganizationsIdOrgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':idOrg']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':idOrg'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsIdOrg<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':idOrg']['$get']>>>
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
        ? getGetOrganizationsIdOrgKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':idOrg']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':idOrg'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsIdOrgKey() {
  return ['organizations', '/organizations/:idOrg', 'PUT'] as const
}

export function usePutOrganizationsIdOrg<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':idOrg']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':idOrg']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsIdOrgKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.organizations)[':idOrg']['$put']> },
      ) => parseResponse(client.organizations[':idOrg'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsIdOrgKey() {
  return ['organizations', '/organizations/:idOrg', 'DELETE'] as const
}

export function useDeleteOrganizationsIdOrg<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':idOrg']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':idOrg']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsIdOrgKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.organizations)[':idOrg']['$delete']> },
      ) => parseResponse(client.organizations[':idOrg'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsIdOrgActionsKey(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['actions']['$get']>,
) {
  return ['organizations', '/organizations/:idOrg/actions', args] as const
}

export function useGetOrganizationsIdOrgActions<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':idOrg']['actions']['$get']>>
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
        ? getGetOrganizationsIdOrgActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':idOrg']['actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':idOrg'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsIdOrgActions<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['actions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':idOrg']['actions']['$get']>>
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
        ? getGetOrganizationsIdOrgActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':idOrg']['actions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':idOrg'].actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsIdOrgBoardsKey(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['boards']['$get']>,
) {
  return ['organizations', '/organizations/:idOrg/boards', args] as const
}

export function useGetOrganizationsIdOrgBoards<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['boards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':idOrg']['boards']['$get']>>
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
        ? getGetOrganizationsIdOrgBoardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':idOrg']['boards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':idOrg'].boards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsIdOrgBoards<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['boards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':idOrg']['boards']['$get']>>
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
        ? getGetOrganizationsIdOrgBoardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':idOrg']['boards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':idOrg'].boards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsIdOrgBoardsFilterKey(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['boards'][':filter']['$get']>,
) {
  return ['organizations', '/organizations/:idOrg/boards/:filter', args] as const
}

export function useGetOrganizationsIdOrgBoardsFilter<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['boards'][':filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':idOrg']['boards'][':filter']['$get']>
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
        ? getGetOrganizationsIdOrgBoardsFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':idOrg']['boards'][':filter']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':idOrg'].boards[':filter'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsIdOrgBoardsFilter<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['boards'][':filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':idOrg']['boards'][':filter']['$get']>
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
        ? getGetOrganizationsIdOrgBoardsFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':idOrg']['boards'][':filter']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':idOrg'].boards[':filter'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsIdOrgDeltasKey(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['deltas']['$get']>,
) {
  return ['organizations', '/organizations/:idOrg/deltas', args] as const
}

export function useGetOrganizationsIdOrgDeltas<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['deltas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':idOrg']['deltas']['$get']>>
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
        ? getGetOrganizationsIdOrgDeltasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':idOrg']['deltas']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':idOrg'].deltas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsIdOrgDeltas<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['deltas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':idOrg']['deltas']['$get']>>
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
        ? getGetOrganizationsIdOrgDeltasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':idOrg']['deltas']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':idOrg'].deltas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsIdOrgDescKey() {
  return ['organizations', '/organizations/:idOrg/desc', 'PUT'] as const
}

export function usePutOrganizationsIdOrgDesc<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':idOrg']['desc']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':idOrg']['desc']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsIdOrgDescKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.organizations)[':idOrg']['desc']['$put']> },
      ) => parseResponse(client.organizations[':idOrg'].desc.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOrganizationsIdOrgDisplayNameKey() {
  return ['organizations', '/organizations/:idOrg/displayName', 'PUT'] as const
}

export function usePutOrganizationsIdOrgDisplayName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':idOrg']['displayName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':idOrg']['displayName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsIdOrgDisplayNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.organizations)[':idOrg']['displayName']['$put']>
        },
      ) => parseResponse(client.organizations[':idOrg'].displayName.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationsIdOrgLogoKey() {
  return ['organizations', '/organizations/:idOrg/logo', 'POST'] as const
}

export function usePostOrganizationsIdOrgLogo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':idOrg']['logo']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':idOrg']['logo']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsIdOrgLogoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.organizations)[':idOrg']['logo']['$post']> },
      ) => parseResponse(client.organizations[':idOrg'].logo.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsIdOrgLogoKey() {
  return ['organizations', '/organizations/:idOrg/logo', 'DELETE'] as const
}

export function useDeleteOrganizationsIdOrgLogo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':idOrg']['logo']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':idOrg']['logo']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsIdOrgLogoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.organizations)[':idOrg']['logo']['$delete']> },
      ) => parseResponse(client.organizations[':idOrg'].logo.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsIdOrgMembersKey(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['members']['$get']>,
) {
  return ['organizations', '/organizations/:idOrg/members', args] as const
}

export function useGetOrganizationsIdOrgMembers<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':idOrg']['members']['$get']>>
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
        ? getGetOrganizationsIdOrgMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':idOrg']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':idOrg'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsIdOrgMembers<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':idOrg']['members']['$get']>>
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
        ? getGetOrganizationsIdOrgMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':idOrg']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':idOrg'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsIdOrgMembersKey() {
  return ['organizations', '/organizations/:idOrg/members', 'PUT'] as const
}

export function usePutOrganizationsIdOrgMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':idOrg']['members']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':idOrg']['members']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsIdOrgMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.organizations)[':idOrg']['members']['$put']> },
      ) => parseResponse(client.organizations[':idOrg'].members.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsIdOrgMembersFilterKey(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['members'][':filter']['$get']>,
) {
  return ['organizations', '/organizations/:idOrg/members/:filter', args] as const
}

export function useGetOrganizationsIdOrgMembersFilter<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['members'][':filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':idOrg']['members'][':filter']['$get']>
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
        ? getGetOrganizationsIdOrgMembersFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':idOrg']['members'][':filter']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':idOrg'].members[':filter'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsIdOrgMembersFilter<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['members'][':filter']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':idOrg']['members'][':filter']['$get']>
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
        ? getGetOrganizationsIdOrgMembersFilterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':idOrg']['members'][':filter']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':idOrg'].members[':filter'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsIdOrgMembersIdMemberKey() {
  return ['organizations', '/organizations/:idOrg/members/:idMember', 'PUT'] as const
}

export function usePutOrganizationsIdOrgMembersIdMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':idOrg']['members'][':idMember']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':idOrg']['members'][':idMember']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsIdOrgMembersIdMemberKey()
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
            (typeof client.organizations)[':idOrg']['members'][':idMember']['$put']
          >
        },
      ) =>
        parseResponse(client.organizations[':idOrg'].members[':idMember'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsIdOrgMembersIdMemberKey() {
  return ['organizations', '/organizations/:idOrg/members/:idMember', 'DELETE'] as const
}

export function useDeleteOrganizationsIdOrgMembersIdMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':idOrg']['members'][':idMember']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':idOrg']['members'][':idMember']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsIdOrgMembersIdMemberKey()
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
            (typeof client.organizations)[':idOrg']['members'][':idMember']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':idOrg'].members[':idMember'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsIdOrgMembersIdMemberAllKey() {
  return ['organizations', '/organizations/:idOrg/members/:idMember/all', 'DELETE'] as const
}

export function useDeleteOrganizationsIdOrgMembersIdMemberAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':idOrg']['members'][':idMember']['all']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':idOrg']['members'][':idMember']['all']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsIdOrgMembersIdMemberAllKey()
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
            (typeof client.organizations)[':idOrg']['members'][':idMember']['all']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':idOrg'].members[':idMember'].all.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsIdOrgMembersIdMemberCardsKey(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['members'][':idMember']['cards']['$get']
  >,
) {
  return ['organizations', '/organizations/:idOrg/members/:idMember/cards', args] as const
}

export function useGetOrganizationsIdOrgMembersIdMemberCards<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['members'][':idMember']['cards']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':idOrg']['members'][':idMember']['cards']['$get']
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
        ? getGetOrganizationsIdOrgMembersIdMemberCardsKey(args)
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
                (typeof client.organizations)[':idOrg']['members'][':idMember']['cards']['$get']
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
          client.organizations[':idOrg'].members[':idMember'].cards.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsIdOrgMembersIdMemberCards<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['members'][':idMember']['cards']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':idOrg']['members'][':idMember']['cards']['$get']
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
        ? getGetOrganizationsIdOrgMembersIdMemberCardsKey(args)
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
                (typeof client.organizations)[':idOrg']['members'][':idMember']['cards']['$get']
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
          client.organizations[':idOrg'].members[':idMember'].cards.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsIdOrgMembersIdMemberDeactivatedKey() {
  return ['organizations', '/organizations/:idOrg/members/:idMember/deactivated', 'PUT'] as const
}

export function usePutOrganizationsIdOrgMembersIdMemberDeactivated<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':idOrg']['members'][':idMember']['deactivated']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':idOrg']['members'][':idMember']['deactivated']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsIdOrgMembersIdMemberDeactivatedKey()
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
            (typeof client.organizations)[':idOrg']['members'][':idMember']['deactivated']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':idOrg'].members[':idMember'].deactivated.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsIdOrgMembersInvitedKey(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['membersInvited']['$get']>,
) {
  return ['organizations', '/organizations/:idOrg/membersInvited', args] as const
}

export function useGetOrganizationsIdOrgMembersInvited<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['membersInvited']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':idOrg']['membersInvited']['$get']>>
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
        ? getGetOrganizationsIdOrgMembersInvitedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':idOrg']['membersInvited']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':idOrg'].membersInvited.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsIdOrgMembersInvited<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['membersInvited']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':idOrg']['membersInvited']['$get']>>
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
        ? getGetOrganizationsIdOrgMembersInvitedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':idOrg']['membersInvited']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':idOrg'].membersInvited.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsIdOrgMembersInvitedFieldKey(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['membersInvited'][':field']['$get']
  >,
) {
  return ['organizations', '/organizations/:idOrg/membersInvited/:field', args] as const
}

export function useGetOrganizationsIdOrgMembersInvitedField<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['membersInvited'][':field']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':idOrg']['membersInvited'][':field']['$get']
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
        ? getGetOrganizationsIdOrgMembersInvitedFieldKey(args)
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
                (typeof client.organizations)[':idOrg']['membersInvited'][':field']['$get']
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
          client.organizations[':idOrg'].membersInvited[':field'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsIdOrgMembersInvitedField<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['membersInvited'][':field']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':idOrg']['membersInvited'][':field']['$get']
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
        ? getGetOrganizationsIdOrgMembersInvitedFieldKey(args)
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
                (typeof client.organizations)[':idOrg']['membersInvited'][':field']['$get']
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
          client.organizations[':idOrg'].membersInvited[':field'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsIdOrgMembershipsKey(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['memberships']['$get']>,
) {
  return ['organizations', '/organizations/:idOrg/memberships', args] as const
}

export function useGetOrganizationsIdOrgMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':idOrg']['memberships']['$get']>>
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
        ? getGetOrganizationsIdOrgMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':idOrg']['memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':idOrg'].memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsIdOrgMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':idOrg']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':idOrg']['memberships']['$get']>>
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
        ? getGetOrganizationsIdOrgMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':idOrg']['memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.organizations[':idOrg'].memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsIdOrgMembershipsIdMembershipKey(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['memberships'][':idMembership']['$get']
  >,
) {
  return ['organizations', '/organizations/:idOrg/memberships/:idMembership', args] as const
}

export function useGetOrganizationsIdOrgMembershipsIdMembership<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['memberships'][':idMembership']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':idOrg']['memberships'][':idMembership']['$get']
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
        ? getGetOrganizationsIdOrgMembershipsIdMembershipKey(args)
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
                (typeof client.organizations)[':idOrg']['memberships'][':idMembership']['$get']
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
          client.organizations[':idOrg'].memberships[':idMembership'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsIdOrgMembershipsIdMembership<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':idOrg']['memberships'][':idMembership']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':idOrg']['memberships'][':idMembership']['$get']
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
        ? getGetOrganizationsIdOrgMembershipsIdMembershipKey(args)
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
                (typeof client.organizations)[':idOrg']['memberships'][':idMembership']['$get']
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
          client.organizations[':idOrg'].memberships[':idMembership'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsIdOrgMembershipsIdMembershipKey() {
  return ['organizations', '/organizations/:idOrg/memberships/:idMembership', 'PUT'] as const
}

export function usePutOrganizationsIdOrgMembershipsIdMembership<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':idOrg']['memberships'][':idMembership']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':idOrg']['memberships'][':idMembership']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsIdOrgMembershipsIdMembershipKey()
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
            (typeof client.organizations)[':idOrg']['memberships'][':idMembership']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':idOrg'].memberships[':idMembership'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrganizationsIdOrgNameKey() {
  return ['organizations', '/organizations/:idOrg/name', 'PUT'] as const
}

export function usePutOrganizationsIdOrgName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':idOrg']['name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':idOrg']['name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsIdOrgNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.organizations)[':idOrg']['name']['$put']> },
      ) => parseResponse(client.organizations[':idOrg'].name.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOrganizationsIdOrgPrefsAssociatedDomainKey() {
  return ['organizations', '/organizations/:idOrg/prefs/associatedDomain', 'PUT'] as const
}

export function usePutOrganizationsIdOrgPrefsAssociatedDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':idOrg']['prefs']['associatedDomain']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':idOrg']['prefs']['associatedDomain']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsIdOrgPrefsAssociatedDomainKey()
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
            (typeof client.organizations)[':idOrg']['prefs']['associatedDomain']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':idOrg'].prefs.associatedDomain.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsIdOrgPrefsAssociatedDomainKey() {
  return ['organizations', '/organizations/:idOrg/prefs/associatedDomain', 'DELETE'] as const
}

export function useDeleteOrganizationsIdOrgPrefsAssociatedDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':idOrg']['prefs']['associatedDomain']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':idOrg']['prefs']['associatedDomain']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsIdOrgPrefsAssociatedDomainKey()
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
            (typeof client.organizations)[':idOrg']['prefs']['associatedDomain']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':idOrg'].prefs.associatedDomain.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrganizationsIdOrgPrefsBoardVisibilityRestrictOrgKey() {
  return [
    'organizations',
    '/organizations/:idOrg/prefs/boardVisibilityRestrict/org',
    'PUT',
  ] as const
}

export function usePutOrganizationsIdOrgPrefsBoardVisibilityRestrictOrg<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':idOrg']['prefs']['boardVisibilityRestrict']['org']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':idOrg']['prefs']['boardVisibilityRestrict']['org']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsIdOrgPrefsBoardVisibilityRestrictOrgKey()
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
            (typeof client.organizations)[':idOrg']['prefs']['boardVisibilityRestrict']['org']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':idOrg'].prefs.boardVisibilityRestrict.org.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrganizationsIdOrgPrefsBoardVisibilityRestrictPrivateKey() {
  return [
    'organizations',
    '/organizations/:idOrg/prefs/boardVisibilityRestrict/private',
    'PUT',
  ] as const
}

export function usePutOrganizationsIdOrgPrefsBoardVisibilityRestrictPrivate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':idOrg']['prefs']['boardVisibilityRestrict']['private']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':idOrg']['prefs']['boardVisibilityRestrict']['private']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsIdOrgPrefsBoardVisibilityRestrictPrivateKey()
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
            (typeof client.organizations)[':idOrg']['prefs']['boardVisibilityRestrict']['private']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':idOrg'].prefs.boardVisibilityRestrict.private.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrganizationsIdOrgPrefsBoardVisibilityRestrictPublicKey() {
  return [
    'organizations',
    '/organizations/:idOrg/prefs/boardVisibilityRestrict/public',
    'PUT',
  ] as const
}

export function usePutOrganizationsIdOrgPrefsBoardVisibilityRestrictPublic<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':idOrg']['prefs']['boardVisibilityRestrict']['public']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':idOrg']['prefs']['boardVisibilityRestrict']['public']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsIdOrgPrefsBoardVisibilityRestrictPublicKey()
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
            (typeof client.organizations)[':idOrg']['prefs']['boardVisibilityRestrict']['public']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':idOrg'].prefs.boardVisibilityRestrict.public.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrganizationsIdOrgPrefsExternalMembersDisabledKey() {
  return ['organizations', '/organizations/:idOrg/prefs/externalMembersDisabled', 'PUT'] as const
}

export function usePutOrganizationsIdOrgPrefsExternalMembersDisabled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':idOrg']['prefs']['externalMembersDisabled']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':idOrg']['prefs']['externalMembersDisabled']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsIdOrgPrefsExternalMembersDisabledKey()
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
            (typeof client.organizations)[':idOrg']['prefs']['externalMembersDisabled']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':idOrg'].prefs.externalMembersDisabled.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrganizationsIdOrgPrefsGoogleAppsVersionKey() {
  return ['organizations', '/organizations/:idOrg/prefs/googleAppsVersion', 'PUT'] as const
}

export function usePutOrganizationsIdOrgPrefsGoogleAppsVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':idOrg']['prefs']['googleAppsVersion']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':idOrg']['prefs']['googleAppsVersion']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsIdOrgPrefsGoogleAppsVersionKey()
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
            (typeof client.organizations)[':idOrg']['prefs']['googleAppsVersion']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':idOrg'].prefs.googleAppsVersion.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrganizationsIdOrgPrefsOrgInviteRestrictKey() {
  return ['organizations', '/organizations/:idOrg/prefs/orgInviteRestrict', 'PUT'] as const
}

export function usePutOrganizationsIdOrgPrefsOrgInviteRestrict<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':idOrg']['prefs']['orgInviteRestrict']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':idOrg']['prefs']['orgInviteRestrict']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsIdOrgPrefsOrgInviteRestrictKey()
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
            (typeof client.organizations)[':idOrg']['prefs']['orgInviteRestrict']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':idOrg'].prefs.orgInviteRestrict.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsIdOrgPrefsOrgInviteRestrictKey() {
  return ['organizations', '/organizations/:idOrg/prefs/orgInviteRestrict', 'DELETE'] as const
}

export function useDeleteOrganizationsIdOrgPrefsOrgInviteRestrict<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':idOrg']['prefs']['orgInviteRestrict']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':idOrg']['prefs']['orgInviteRestrict']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsIdOrgPrefsOrgInviteRestrictKey()
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
            (typeof client.organizations)[':idOrg']['prefs']['orgInviteRestrict']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':idOrg'].prefs.orgInviteRestrict.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrganizationsIdOrgPrefsPermissionLevelKey() {
  return ['organizations', '/organizations/:idOrg/prefs/permissionLevel', 'PUT'] as const
}

export function usePutOrganizationsIdOrgPrefsPermissionLevel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':idOrg']['prefs']['permissionLevel']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':idOrg']['prefs']['permissionLevel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsIdOrgPrefsPermissionLevelKey()
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
            (typeof client.organizations)[':idOrg']['prefs']['permissionLevel']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':idOrg'].prefs.permissionLevel.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrganizationsIdOrgWebsiteKey() {
  return ['organizations', '/organizations/:idOrg/website', 'PUT'] as const
}

export function usePutOrganizationsIdOrgWebsite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':idOrg']['website']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':idOrg']['website']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsIdOrgWebsiteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.organizations)[':idOrg']['website']['$put']> },
      ) => parseResponse(client.organizations[':idOrg'].website.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsIdOrgFieldKey(
  args: InferRequestType<(typeof client.organizations)[':idOrg'][':field']['$get']>,
) {
  return ['organizations', '/organizations/:idOrg/:field', args] as const
}

export function useGetOrganizationsIdOrgField<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':idOrg'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':idOrg'][':field']['$get']>>
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
        ? getGetOrganizationsIdOrgFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':idOrg'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':idOrg'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsIdOrgField<TError = unknown>(
  args: InferRequestType<(typeof client.organizations)[':idOrg'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':idOrg'][':field']['$get']>>
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
        ? getGetOrganizationsIdOrgFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.organizations)[':idOrg'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations[':idOrg'][':field'].$get(args, clientOptions)),
      restSwrOptions,
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

export function getGetSearchMembersKey(args: InferRequestType<typeof client.search.members.$get>) {
  return ['search', '/search/members', args] as const
}

export function useGetSearchMembers<TError = unknown>(
  args: InferRequestType<typeof client.search.members.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.members.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchMembersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.members.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchMembers<TError = unknown>(
  args: InferRequestType<typeof client.search.members.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.members.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchMembersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.members.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSessionsKey() {
  return ['sessions', '/sessions', 'POST'] as const
}

export function usePostSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sessions.$post> }) =>
        parseResponse(client.sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSessionsSocketKey(
  args: InferRequestType<typeof client.sessions.socket.$get>,
) {
  return ['sessions', '/sessions/socket', args] as const
}

export function useGetSessionsSocket<TError = unknown>(
  args: InferRequestType<typeof client.sessions.socket.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.socket.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSessionsSocketKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.socket.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sessions.socket.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSessionsSocket<TError = unknown>(
  args: InferRequestType<typeof client.sessions.socket.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.socket.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSessionsSocketKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.socket.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sessions.socket.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSessionsIdSessionKey() {
  return ['sessions', '/sessions/:idSession', 'PUT'] as const
}

export function usePutSessionsIdSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':idSession']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sessions)[':idSession']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSessionsIdSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sessions)[':idSession']['$put']> },
      ) => parseResponse(client.sessions[':idSession'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSessionsIdSessionStatusKey() {
  return ['sessions', '/sessions/:idSession/status', 'PUT'] as const
}

export function usePutSessionsIdSessionStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sessions)[':idSession']['status']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sessions)[':idSession']['status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSessionsIdSessionStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sessions)[':idSession']['status']['$put']> },
      ) => parseResponse(client.sessions[':idSession'].status.$put(arg, clientOptions)),
      restMutationOptions,
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

export function getDeleteTokensTokenKey() {
  return ['tokens', '/tokens/:token', 'DELETE'] as const
}

export function useDeleteTokensToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tokens)[':token']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTokensTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tokens)[':token']['$delete']> },
      ) => parseResponse(client.tokens[':token'].$delete(arg, clientOptions)),
      restMutationOptions,
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

export function getGetTokensTokenMemberFieldKey(
  args: InferRequestType<(typeof client.tokens)[':token']['member'][':field']['$get']>,
) {
  return ['tokens', '/tokens/:token/member/:field', args] as const
}

export function useGetTokensTokenMemberField<TError = unknown>(
  args: InferRequestType<(typeof client.tokens)[':token']['member'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tokens)[':token']['member'][':field']['$get']>>
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
        ? getGetTokensTokenMemberFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tokens)[':token']['member'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tokens[':token'].member[':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTokensTokenMemberField<TError = unknown>(
  args: InferRequestType<(typeof client.tokens)[':token']['member'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tokens)[':token']['member'][':field']['$get']>>
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
        ? getGetTokensTokenMemberFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tokens)[':token']['member'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tokens[':token'].member[':field'].$get(args, clientOptions)),
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

export function getPutTokensTokenWebhooksKey() {
  return ['tokens', '/tokens/:token/webhooks', 'PUT'] as const
}

export function usePutTokensTokenWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tokens)[':token']['webhooks']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tokens)[':token']['webhooks']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTokensTokenWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tokens)[':token']['webhooks']['$put']> },
      ) => parseResponse(client.tokens[':token'].webhooks.$put(arg, clientOptions)),
      restMutationOptions,
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

export function getGetTokensTokenFieldKey(
  args: InferRequestType<(typeof client.tokens)[':token'][':field']['$get']>,
) {
  return ['tokens', '/tokens/:token/:field', args] as const
}

export function useGetTokensTokenField<TError = unknown>(
  args: InferRequestType<(typeof client.tokens)[':token'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tokens)[':token'][':field']['$get']>>
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
        ? getGetTokensTokenFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tokens)[':token'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tokens[':token'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTokensTokenField<TError = unknown>(
  args: InferRequestType<(typeof client.tokens)[':token'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tokens)[':token'][':field']['$get']>>
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
        ? getGetTokensTokenFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tokens)[':token'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tokens[':token'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTypesIdKey(args: InferRequestType<(typeof client.types)[':id']['$get']>) {
  return ['types', '/types/:id', args] as const
}

export function useGetTypesId<TError = unknown>(
  args: InferRequestType<(typeof client.types)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.types)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTypesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.types)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.types[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTypesId<TError = unknown>(
  args: InferRequestType<(typeof client.types)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.types)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTypesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.types)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.types[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWebhooksKey() {
  return ['webhooks', '/webhooks', 'POST'] as const
}

export function usePostWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhooks.$post> }) =>
        parseResponse(client.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutWebhooksIndexKey() {
  return ['webhooks', '/webhooks/', 'PUT'] as const
}

export function usePutWebhooksIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.index.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.webhooks.index.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebhooksIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhooks.index.$put> }) =>
        parseResponse(client.webhooks.index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksIdWebhookKey(
  args: InferRequestType<(typeof client.webhooks)[':idWebhook']['$get']>,
) {
  return ['webhooks', '/webhooks/:idWebhook', args] as const
}

export function useGetWebhooksIdWebhook<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':idWebhook']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['$get']>>>
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
        ? getGetWebhooksIdWebhookKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':idWebhook'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksIdWebhook<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':idWebhook']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['$get']>>>
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
        ? getGetWebhooksIdWebhookKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':idWebhook'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutWebhooksIdWebhookKey() {
  return ['webhooks', '/webhooks/:idWebhook', 'PUT'] as const
}

export function usePutWebhooksIdWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':idWebhook']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebhooksIdWebhookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':idWebhook']['$put']> },
      ) => parseResponse(client.webhooks[':idWebhook'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebhooksIdWebhookKey() {
  return ['webhooks', '/webhooks/:idWebhook', 'DELETE'] as const
}

export function useDeleteWebhooksIdWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':idWebhook']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhooksIdWebhookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':idWebhook']['$delete']> },
      ) => parseResponse(client.webhooks[':idWebhook'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutWebhooksIdWebhookActiveKey() {
  return ['webhooks', '/webhooks/:idWebhook/active', 'PUT'] as const
}

export function usePutWebhooksIdWebhookActive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['active']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':idWebhook']['active']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebhooksIdWebhookActiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.webhooks)[':idWebhook']['active']['$put']> },
      ) => parseResponse(client.webhooks[':idWebhook'].active.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutWebhooksIdWebhookCallbackURLKey() {
  return ['webhooks', '/webhooks/:idWebhook/callbackURL', 'PUT'] as const
}

export function usePutWebhooksIdWebhookCallbackURL<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['callbackURL']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':idWebhook']['callbackURL']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebhooksIdWebhookCallbackURLKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.webhooks)[':idWebhook']['callbackURL']['$put']> },
      ) => parseResponse(client.webhooks[':idWebhook'].callbackURL.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutWebhooksIdWebhookDescriptionKey() {
  return ['webhooks', '/webhooks/:idWebhook/description', 'PUT'] as const
}

export function usePutWebhooksIdWebhookDescription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['description']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':idWebhook']['description']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebhooksIdWebhookDescriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.webhooks)[':idWebhook']['description']['$put']> },
      ) => parseResponse(client.webhooks[':idWebhook'].description.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutWebhooksIdWebhookIdModelKey() {
  return ['webhooks', '/webhooks/:idWebhook/idModel', 'PUT'] as const
}

export function usePutWebhooksIdWebhookIdModel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhooks)[':idWebhook']['idModel']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':idWebhook']['idModel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebhooksIdWebhookIdModelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.webhooks)[':idWebhook']['idModel']['$put']> },
      ) => parseResponse(client.webhooks[':idWebhook'].idModel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksIdWebhookFieldKey(
  args: InferRequestType<(typeof client.webhooks)[':idWebhook'][':field']['$get']>,
) {
  return ['webhooks', '/webhooks/:idWebhook/:field', args] as const
}

export function useGetWebhooksIdWebhookField<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':idWebhook'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':idWebhook'][':field']['$get']>>
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
        ? getGetWebhooksIdWebhookFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':idWebhook'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':idWebhook'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksIdWebhookField<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':idWebhook'][':field']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':idWebhook'][':field']['$get']>>
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
        ? getGetWebhooksIdWebhookFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':idWebhook'][':field']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':idWebhook'][':field'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
