import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiRnsPubCyclesKey(
  args: InferRequestType<typeof client.api.rns.pub.cycles.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rns/pub/cycles', keyArgs] as const
}

export function useGetApiRnsPubCycles<TError = unknown>(
  args: InferRequestType<typeof client.api.rns.pub.cycles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pub.cycles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiRnsPubCyclesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pub.cycles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.rns.pub.cycles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRnsPubCycles<TError = unknown>(
  args: InferRequestType<typeof client.api.rns.pub.cycles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pub.cycles.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiRnsPubCyclesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pub.cycles.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.rns.pub.cycles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiRnsPubCyclesCycleIdKey(
  args: InferRequestType<(typeof client.api.rns.pub.cycles)[':cycleId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rns/pub/cycles/:cycleId', keyArgs] as const
}

export function useGetApiRnsPubCyclesCycleId<TError = unknown>(
  args: InferRequestType<(typeof client.api.rns.pub.cycles)[':cycleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.rns.pub.cycles)[':cycleId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiRnsPubCyclesCycleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.rns.pub.cycles)[':cycleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.rns.pub.cycles[':cycleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRnsPubCyclesCycleId<TError = unknown>(
  args: InferRequestType<(typeof client.api.rns.pub.cycles)[':cycleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.rns.pub.cycles)[':cycleId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiRnsPubCyclesCycleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.rns.pub.cycles)[':cycleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.rns.pub.cycles[':cycleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiRnsPubCyclesCycleIdRetryKey() {
  return ['api', '/api/rns/pub/cycles/:cycleId/retry', 'POST'] as const
}

export function usePostApiRnsPubCyclesCycleIdRetry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.rns.pub.cycles)[':cycleId']['retry']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.rns.pub.cycles)[':cycleId']['retry']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRnsPubCyclesCycleIdRetryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.rns.pub.cycles)[':cycleId']['retry']['$post']>
        },
      ) => parseResponse(client.api.rns.pub.cycles[':cycleId'].retry.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiRnsPubSubscriptionsKey(
  args: InferRequestType<typeof client.api.rns.pub.subscriptions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rns/pub/subscriptions', keyArgs] as const
}

export function useGetApiRnsPubSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.api.rns.pub.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pub.subscriptions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiRnsPubSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pub.subscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.rns.pub.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRnsPubSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.api.rns.pub.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pub.subscriptions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiRnsPubSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pub.subscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.rns.pub.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiRnsPubSubscriptionsKey() {
  return ['api', '/api/rns/pub/subscriptions', 'POST'] as const
}

export function usePostApiRnsPubSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pub.subscriptions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.rns.pub.subscriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRnsPubSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.rns.pub.subscriptions.$post> },
      ) => parseResponse(client.api.rns.pub.subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiRnsPubSubscriptionsSimulateKey() {
  return ['api', '/api/rns/pub/subscriptions/simulate', 'POST'] as const
}

export function usePostApiRnsPubSubscriptionsSimulate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.rns.pub.subscriptions.simulate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.rns.pub.subscriptions.simulate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRnsPubSubscriptionsSimulateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.rns.pub.subscriptions.simulate.$post> },
      ) => parseResponse(client.api.rns.pub.subscriptions.simulate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiRnsPubSubscriptionsIdKey(
  args: InferRequestType<(typeof client.api.rns.pub.subscriptions)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rns/pub/subscriptions/:id', keyArgs] as const
}

export function useGetApiRnsPubSubscriptionsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.rns.pub.subscriptions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.rns.pub.subscriptions)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiRnsPubSubscriptionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.rns.pub.subscriptions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.rns.pub.subscriptions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRnsPubSubscriptionsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.rns.pub.subscriptions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.rns.pub.subscriptions)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiRnsPubSubscriptionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.rns.pub.subscriptions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.rns.pub.subscriptions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiRnsPubSubscriptionsIdKey() {
  return ['api', '/api/rns/pub/subscriptions/:id', 'PATCH'] as const
}

export function usePatchApiRnsPubSubscriptionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.rns.pub.subscriptions)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.rns.pub.subscriptions)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiRnsPubSubscriptionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.rns.pub.subscriptions)[':id']['$patch']> },
      ) => parseResponse(client.api.rns.pub.subscriptions[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiRnsPubSubscriptionsIdItemsKey() {
  return ['api', '/api/rns/pub/subscriptions/:id/items', 'POST'] as const
}

export function usePostApiRnsPubSubscriptionsIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.rns.pub.subscriptions)[':id']['items']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.rns.pub.subscriptions)[':id']['items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRnsPubSubscriptionsIdItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.rns.pub.subscriptions)[':id']['items']['$post']>
        },
      ) => parseResponse(client.api.rns.pub.subscriptions[':id'].items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiRnsPubSubscriptionsIdItemsItemIdKey() {
  return ['api', '/api/rns/pub/subscriptions/:id/items/:itemId', 'DELETE'] as const
}

export function useDeleteApiRnsPubSubscriptionsIdItemsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.rns.pub.subscriptions)[':id']['items'][':itemId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.rns.pub.subscriptions)[':id']['items'][':itemId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiRnsPubSubscriptionsIdItemsItemIdKey()
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
            (typeof client.api.rns.pub.subscriptions)[':id']['items'][':itemId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.rns.pub.subscriptions[':id'].items[':itemId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiRnsPubSubscriptionsIdItemsItemIdKey() {
  return ['api', '/api/rns/pub/subscriptions/:id/items/:itemId', 'PATCH'] as const
}

export function usePatchApiRnsPubSubscriptionsIdItemsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.rns.pub.subscriptions)[':id']['items'][':itemId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.rns.pub.subscriptions)[':id']['items'][':itemId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiRnsPubSubscriptionsIdItemsItemIdKey()
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
            (typeof client.api.rns.pub.subscriptions)[':id']['items'][':itemId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.rns.pub.subscriptions[':id'].items[':itemId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiRnsPubSubscriptionsIdSimulateKey() {
  return ['api', '/api/rns/pub/subscriptions/:id/simulate', 'POST'] as const
}

export function usePostApiRnsPubSubscriptionsIdSimulate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.rns.pub.subscriptions)[':id']['simulate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.rns.pub.subscriptions)[':id']['simulate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRnsPubSubscriptionsIdSimulateKey()
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
            (typeof client.api.rns.pub.subscriptions)[':id']['simulate']['$post']
          >
        },
      ) =>
        parseResponse(client.api.rns.pub.subscriptions[':id'].simulate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiRnsPubSubscriptionsSubscriptionIdConversationMessageKey(
  args: InferRequestType<
    (typeof client.api.rns.pub.subscriptions)[':subscriptionId']['conversation-message']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/rns/pub/subscriptions/:subscriptionId/conversation-message',
    keyArgs,
  ] as const
}

export function useGetApiRnsPubSubscriptionsSubscriptionIdConversationMessage<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.rns.pub.subscriptions)[':subscriptionId']['conversation-message']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.rns.pub.subscriptions)[':subscriptionId']['conversation-message']['$get']
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
        ? getGetApiRnsPubSubscriptionsSubscriptionIdConversationMessageKey(args)
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
                (typeof client.api.rns.pub.subscriptions)[':subscriptionId']['conversation-message']['$get']
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
          client.api.rns.pub.subscriptions[':subscriptionId']['conversation-message'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRnsPubSubscriptionsSubscriptionIdConversationMessage<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.rns.pub.subscriptions)[':subscriptionId']['conversation-message']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.rns.pub.subscriptions)[':subscriptionId']['conversation-message']['$get']
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
        ? getGetApiRnsPubSubscriptionsSubscriptionIdConversationMessageKey(args)
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
                (typeof client.api.rns.pub.subscriptions)[':subscriptionId']['conversation-message']['$get']
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
          client.api.rns.pub.subscriptions[':subscriptionId']['conversation-message'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiRnsPvtPlansKey(
  args: InferRequestType<typeof client.api.rns.pvt.plans.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rns/pvt/plans', keyArgs] as const
}

export function useGetApiRnsPvtPlans<TError = unknown>(
  args: InferRequestType<typeof client.api.rns.pvt.plans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pvt.plans.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiRnsPvtPlansKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pvt.plans.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.rns.pvt.plans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRnsPvtPlans<TError = unknown>(
  args: InferRequestType<typeof client.api.rns.pvt.plans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pvt.plans.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiRnsPvtPlansKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pvt.plans.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.rns.pvt.plans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiRnsPvtPlansIdKey(
  args: InferRequestType<(typeof client.api.rns.pvt.plans)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rns/pvt/plans/:id', keyArgs] as const
}

export function useGetApiRnsPvtPlansId<TError = unknown>(
  args: InferRequestType<(typeof client.api.rns.pvt.plans)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.rns.pvt.plans)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiRnsPvtPlansIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.rns.pvt.plans)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.rns.pvt.plans[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRnsPvtPlansId<TError = unknown>(
  args: InferRequestType<(typeof client.api.rns.pvt.plans)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.rns.pvt.plans)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiRnsPvtPlansIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.rns.pvt.plans)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.rns.pvt.plans[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiRnsPvtReportsKey(
  args: InferRequestType<typeof client.api.rns.pvt.reports.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rns/pvt/reports', keyArgs] as const
}

export function useGetApiRnsPvtReports<TError = unknown>(
  args: InferRequestType<typeof client.api.rns.pvt.reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pvt.reports.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiRnsPvtReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pvt.reports.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.rns.pvt.reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRnsPvtReports<TError = unknown>(
  args: InferRequestType<typeof client.api.rns.pvt.reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pvt.reports.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiRnsPvtReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pvt.reports.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.rns.pvt.reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiRnsPvtReportsReportNameDocumentsKey() {
  return ['api', '/api/rns/pvt/reports/:reportName/documents', 'POST'] as const
}

export function usePostApiRnsPvtReportsReportNameDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.rns.pvt.reports)[':reportName']['documents']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.rns.pvt.reports)[':reportName']['documents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRnsPvtReportsReportNameDocumentsKey()
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
            (typeof client.api.rns.pvt.reports)[':reportName']['documents']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.rns.pvt.reports[':reportName'].documents.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiRnsPvtReportsReportNameDocumentsDocumentIdKey(
  args: InferRequestType<
    (typeof client.api.rns.pvt.reports)[':reportName']['documents'][':documentId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rns/pvt/reports/:reportName/documents/:documentId', keyArgs] as const
}

export function useGetApiRnsPvtReportsReportNameDocumentsDocumentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.rns.pvt.reports)[':reportName']['documents'][':documentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.rns.pvt.reports)[':reportName']['documents'][':documentId']['$get']
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
        ? getGetApiRnsPvtReportsReportNameDocumentsDocumentIdKey(args)
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
                (typeof client.api.rns.pvt.reports)[':reportName']['documents'][':documentId']['$get']
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
          client.api.rns.pvt.reports[':reportName'].documents[':documentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRnsPvtReportsReportNameDocumentsDocumentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.rns.pvt.reports)[':reportName']['documents'][':documentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.rns.pvt.reports)[':reportName']['documents'][':documentId']['$get']
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
        ? getGetApiRnsPvtReportsReportNameDocumentsDocumentIdKey(args)
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
                (typeof client.api.rns.pvt.reports)[':reportName']['documents'][':documentId']['$get']
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
          client.api.rns.pvt.reports[':reportName'].documents[':documentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiRnsSettingsKey(
  args: InferRequestType<typeof client.api.rns.settings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rns/settings', keyArgs] as const
}

export function useGetApiRnsSettings<TError = unknown>(
  args: InferRequestType<typeof client.api.rns.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.settings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiRnsSettingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.rns.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRnsSettings<TError = unknown>(
  args: InferRequestType<typeof client.api.rns.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.settings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiRnsSettingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.rns.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiRnsSettingsKey() {
  return ['api', '/api/rns/settings', 'POST'] as const
}

export function usePostApiRnsSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.settings.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.rns.settings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRnsSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.rns.settings.$post> }) =>
        parseResponse(client.api.rns.settings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
