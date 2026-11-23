import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiRnsPubCyclesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.rns.pub.cycles.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/rns/pub/cycles', keyArgs] as const
}

export function getApiRnsPubCyclesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.rns.pub.cycles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRnsPubCyclesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.rns.pub.cycles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiRnsPubCycles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pub.cycles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.rns.pub.cycles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pub.cycles.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pub.cycles.$get>>>
            >
          >,
          ReturnType<typeof getApiRnsPubCyclesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pub.cycles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiRnsPubCyclesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRnsPubCyclesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.rns.pub.cycles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiRnsPubCyclesCycleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.rns.pub.cycles)[':cycleId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/rns/pub/cycles/:cycleId', keyArgs] as const
}

export function getApiRnsPubCyclesCycleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.rns.pub.cycles)[':cycleId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRnsPubCyclesCycleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.rns.pub.cycles[':cycleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiRnsPubCyclesCycleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.rns.pub.cycles)[':cycleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.rns.pub.cycles)[':cycleId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.rns.pub.cycles)[':cycleId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.rns.pub.cycles)[':cycleId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiRnsPubCyclesCycleIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.rns.pub.cycles)[':cycleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRnsPubCyclesCycleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRnsPubCyclesCycleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.rns.pub.cycles[':cycleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiRnsPubCyclesCycleIdRetryMutationKey() {
  return ['api', '/api/rns/pub/cycles/:cycleId/retry', 'POST'] as const
}

export function getPostApiRnsPubCyclesCycleIdRetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.rns.pub.cycles)[':cycleId']['retry']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.rns.pub.cycles)[':cycleId']['retry']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRnsPubCyclesCycleIdRetryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.rns.pub.cycles)[':cycleId']['retry']['$post']>,
    ) {
      return parseResponse(client.api.rns.pub.cycles[':cycleId'].retry.$post(args, options))
    },
  })
}

export function usePostApiRnsPubCyclesCycleIdRetry<
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
                  ReturnType<(typeof client.api.rns.pub.cycles)[':cycleId']['retry']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.rns.pub.cycles)[':cycleId']['retry']['$post']>,
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
  const mutationDefaults = getPostApiRnsPubCyclesCycleIdRetryMutationOptions<
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

export function getApiRnsPubSubscriptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.rns.pub.subscriptions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/rns/pub/subscriptions', keyArgs] as const
}

export function getApiRnsPubSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.rns.pub.subscriptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRnsPubSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.rns.pub.subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiRnsPubSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pub.subscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.rns.pub.subscriptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.rns.pub.subscriptions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.rns.pub.subscriptions.$get>>
              >
            >
          >,
          ReturnType<typeof getApiRnsPubSubscriptionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pub.subscriptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRnsPubSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRnsPubSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.rns.pub.subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiRnsPubSubscriptionsMutationKey() {
  return ['api', '/api/rns/pub/subscriptions', 'POST'] as const
}

export function getPostApiRnsPubSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pub.subscriptions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.rns.pub.subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRnsPubSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.rns.pub.subscriptions.$post>) {
      return parseResponse(client.api.rns.pub.subscriptions.$post(args, options))
    },
  })
}

export function usePostApiRnsPubSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.rns.pub.subscriptions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.rns.pub.subscriptions.$post>,
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
  const mutationDefaults = getPostApiRnsPubSubscriptionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiRnsPubSubscriptionsSimulateMutationKey() {
  return ['api', '/api/rns/pub/subscriptions/simulate', 'POST'] as const
}

export function getPostApiRnsPubSubscriptionsSimulateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.rns.pub.subscriptions.simulate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.rns.pub.subscriptions.simulate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRnsPubSubscriptionsSimulateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.rns.pub.subscriptions.simulate.$post>,
    ) {
      return parseResponse(client.api.rns.pub.subscriptions.simulate.$post(args, options))
    },
  })
}

export function usePostApiRnsPubSubscriptionsSimulate<
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
                Awaited<ReturnType<typeof client.api.rns.pub.subscriptions.simulate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.rns.pub.subscriptions.simulate.$post>,
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
  const mutationDefaults = getPostApiRnsPubSubscriptionsSimulateMutationOptions<
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

export function getApiRnsPubSubscriptionsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.rns.pub.subscriptions)[':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/rns/pub/subscriptions/:id', keyArgs] as const
}

export function getApiRnsPubSubscriptionsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.rns.pub.subscriptions)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRnsPubSubscriptionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.rns.pub.subscriptions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiRnsPubSubscriptionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.rns.pub.subscriptions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.rns.pub.subscriptions)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.rns.pub.subscriptions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.rns.pub.subscriptions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiRnsPubSubscriptionsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.rns.pub.subscriptions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRnsPubSubscriptionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRnsPubSubscriptionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.rns.pub.subscriptions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiRnsPubSubscriptionsIdMutationKey() {
  return ['api', '/api/rns/pub/subscriptions/:id', 'PATCH'] as const
}

export function getPatchApiRnsPubSubscriptionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.rns.pub.subscriptions)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.rns.pub.subscriptions)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiRnsPubSubscriptionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.rns.pub.subscriptions)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.rns.pub.subscriptions[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiRnsPubSubscriptionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.rns.pub.subscriptions)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.rns.pub.subscriptions)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiRnsPubSubscriptionsIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiRnsPubSubscriptionsIdItemsMutationKey() {
  return ['api', '/api/rns/pub/subscriptions/:id/items', 'POST'] as const
}

export function getPostApiRnsPubSubscriptionsIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.rns.pub.subscriptions)[':id']['items']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.rns.pub.subscriptions)[':id']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRnsPubSubscriptionsIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.rns.pub.subscriptions)[':id']['items']['$post']>,
    ) {
      return parseResponse(client.api.rns.pub.subscriptions[':id'].items.$post(args, options))
    },
  })
}

export function usePostApiRnsPubSubscriptionsIdItems<
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
                  ReturnType<(typeof client.api.rns.pub.subscriptions)[':id']['items']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.rns.pub.subscriptions)[':id']['items']['$post']>,
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
  const mutationDefaults = getPostApiRnsPubSubscriptionsIdItemsMutationOptions<
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

export function getDeleteApiRnsPubSubscriptionsIdItemsItemIdMutationKey() {
  return ['api', '/api/rns/pub/subscriptions/:id/items/:itemId', 'DELETE'] as const
}

export function getDeleteApiRnsPubSubscriptionsIdItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.rns.pub.subscriptions)[':id']['items'][':itemId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiRnsPubSubscriptionsIdItemsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.rns.pub.subscriptions)[':id']['items'][':itemId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.rns.pub.subscriptions[':id'].items[':itemId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiRnsPubSubscriptionsIdItemsItemId<
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
                  ReturnType<
                    (typeof client.api.rns.pub.subscriptions)[':id']['items'][':itemId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.rns.pub.subscriptions)[':id']['items'][':itemId']['$delete']
          >,
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
  const mutationDefaults = getDeleteApiRnsPubSubscriptionsIdItemsItemIdMutationOptions<
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

export function getPatchApiRnsPubSubscriptionsIdItemsItemIdMutationKey() {
  return ['api', '/api/rns/pub/subscriptions/:id/items/:itemId', 'PATCH'] as const
}

export function getPatchApiRnsPubSubscriptionsIdItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.rns.pub.subscriptions)[':id']['items'][':itemId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiRnsPubSubscriptionsIdItemsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.rns.pub.subscriptions)[':id']['items'][':itemId']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.rns.pub.subscriptions[':id'].items[':itemId'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiRnsPubSubscriptionsIdItemsItemId<
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
                  ReturnType<
                    (typeof client.api.rns.pub.subscriptions)[':id']['items'][':itemId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.rns.pub.subscriptions)[':id']['items'][':itemId']['$patch']
          >,
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
  const mutationDefaults = getPatchApiRnsPubSubscriptionsIdItemsItemIdMutationOptions<
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

export function getPostApiRnsPubSubscriptionsIdSimulateMutationKey() {
  return ['api', '/api/rns/pub/subscriptions/:id/simulate', 'POST'] as const
}

export function getPostApiRnsPubSubscriptionsIdSimulateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.rns.pub.subscriptions)[':id']['simulate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.rns.pub.subscriptions)[':id']['simulate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRnsPubSubscriptionsIdSimulateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.rns.pub.subscriptions)[':id']['simulate']['$post']>,
    ) {
      return parseResponse(client.api.rns.pub.subscriptions[':id'].simulate.$post(args, options))
    },
  })
}

export function usePostApiRnsPubSubscriptionsIdSimulate<
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
                  ReturnType<(typeof client.api.rns.pub.subscriptions)[':id']['simulate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.rns.pub.subscriptions)[':id']['simulate']['$post']>,
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
  const mutationDefaults = getPostApiRnsPubSubscriptionsIdSimulateMutationOptions<
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

export function getApiRnsPubSubscriptionsSubscriptionIdConversationMessageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.rns.pub.subscriptions)[':subscriptionId']['conversation-message']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/rns/pub/subscriptions/:subscriptionId/conversation-message',
    keyArgs,
  ] as const
}

export function getApiRnsPubSubscriptionsSubscriptionIdConversationMessageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.rns.pub.subscriptions)[':subscriptionId']['conversation-message']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiRnsPubSubscriptionsSubscriptionIdConversationMessageQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.rns.pub.subscriptions[':subscriptionId']['conversation-message'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiRnsPubSubscriptionsSubscriptionIdConversationMessage<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.rns.pub.subscriptions)[':subscriptionId']['conversation-message']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getApiRnsPubSubscriptionsSubscriptionIdConversationMessageQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof getApiRnsPubSubscriptionsSubscriptionIdConversationMessageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiRnsPubSubscriptionsSubscriptionIdConversationMessageQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.rns.pub.subscriptions[':subscriptionId']['conversation-message'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiRnsPvtPlansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.rns.pvt.plans.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/rns/pvt/plans', keyArgs] as const
}

export function getApiRnsPvtPlansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.rns.pvt.plans.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRnsPvtPlansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.rns.pvt.plans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiRnsPvtPlans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pvt.plans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.rns.pvt.plans.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pvt.plans.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pvt.plans.$get>>>
            >
          >,
          ReturnType<typeof getApiRnsPvtPlansQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pvt.plans.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiRnsPvtPlansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRnsPvtPlansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.rns.pvt.plans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiRnsPvtPlansIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.rns.pvt.plans)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/rns/pvt/plans/:id', keyArgs] as const
}

export function getApiRnsPvtPlansIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.rns.pvt.plans)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRnsPvtPlansIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.rns.pvt.plans[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiRnsPvtPlansId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.rns.pvt.plans)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.rns.pvt.plans)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.rns.pvt.plans)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.rns.pvt.plans)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiRnsPvtPlansIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.rns.pvt.plans)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRnsPvtPlansIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRnsPvtPlansIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.rns.pvt.plans[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiRnsPvtReportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.rns.pvt.reports.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/rns/pvt/reports', keyArgs] as const
}

export function getApiRnsPvtReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.rns.pvt.reports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRnsPvtReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.rns.pvt.reports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiRnsPvtReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pvt.reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.rns.pvt.reports.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pvt.reports.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pvt.reports.$get>>>
            >
          >,
          ReturnType<typeof getApiRnsPvtReportsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pvt.reports.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiRnsPvtReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRnsPvtReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.rns.pvt.reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiRnsPvtReportsReportNameDocumentsMutationKey() {
  return ['api', '/api/rns/pvt/reports/:reportName/documents', 'POST'] as const
}

export function getPostApiRnsPvtReportsReportNameDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.rns.pvt.reports)[':reportName']['documents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRnsPvtReportsReportNameDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.rns.pvt.reports)[':reportName']['documents']['$post']
      >,
    ) {
      return parseResponse(client.api.rns.pvt.reports[':reportName'].documents.$post(args, options))
    },
  })
}

export function usePostApiRnsPvtReportsReportNameDocuments<
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
                  ReturnType<
                    (typeof client.api.rns.pvt.reports)[':reportName']['documents']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.rns.pvt.reports)[':reportName']['documents']['$post']
          >,
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
  const mutationDefaults = getPostApiRnsPvtReportsReportNameDocumentsMutationOptions<
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

export function getApiRnsPvtReportsReportNameDocumentsDocumentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.rns.pvt.reports)[':reportName']['documents'][':documentId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/rns/pvt/reports/:reportName/documents/:documentId', keyArgs] as const
}

export function getApiRnsPvtReportsReportNameDocumentsDocumentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.rns.pvt.reports)[':reportName']['documents'][':documentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRnsPvtReportsReportNameDocumentsDocumentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.rns.pvt.reports[':reportName'].documents[':documentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiRnsPvtReportsReportNameDocumentsDocumentId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.rns.pvt.reports)[':reportName']['documents'][':documentId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getApiRnsPvtReportsReportNameDocumentsDocumentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof getApiRnsPvtReportsReportNameDocumentsDocumentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRnsPvtReportsReportNameDocumentsDocumentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.rns.pvt.reports[':reportName'].documents[':documentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiRnsSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.rns.settings.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/rns/settings', keyArgs] as const
}

export function getApiRnsSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.rns.settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRnsSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.rns.settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiRnsSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.rns.settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.settings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.settings.$get>>>
            >
          >,
          ReturnType<typeof getApiRnsSettingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiRnsSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRnsSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.rns.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiRnsSettingsMutationKey() {
  return ['api', '/api/rns/settings', 'POST'] as const
}

export function getPostApiRnsSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.settings.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.rns.settings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRnsSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.rns.settings.$post>) {
      return parseResponse(client.api.rns.settings.$post(args, options))
    },
  })
}

export function usePostApiRnsSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.settings.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.rns.settings.$post>,
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
  const mutationDefaults = getPostApiRnsSettingsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
