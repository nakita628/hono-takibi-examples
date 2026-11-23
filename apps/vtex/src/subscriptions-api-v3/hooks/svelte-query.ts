import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiRnsPubCyclesQueryKey(
  args: InferRequestType<typeof client.api.rns.pub.cycles.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rns/pub/cycles', keyArgs] as const
}

export function getApiRnsPubCyclesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pub.cycles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.rns.pub.cycles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pub.cycles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiRnsPubCyclesQueryKey>
  >({
    queryKey: getApiRnsPubCyclesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.rns.pub.cycles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiRnsPubCycles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pub.cycles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.rns.pub.cycles.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pub.cycles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRnsPubCyclesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiRnsPubCyclesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiRnsPubCyclesCycleIdQueryKey(
  args: InferRequestType<(typeof client.api.rns.pub.cycles)[':cycleId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rns/pub/cycles/:cycleId', keyArgs] as const
}

export function getApiRnsPubCyclesCycleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.rns.pub.cycles)[':cycleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.rns.pub.cycles)[':cycleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiRnsPubCyclesCycleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.rns.pub.cycles[':cycleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiRnsPubCyclesCycleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.rns.pub.cycles)[':cycleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.rns.pub.cycles)[':cycleId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiRnsPubCyclesCycleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiRnsPubCyclesCycleIdRetry<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiRnsPubCyclesCycleIdRetryMutationOptions<
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

export function getApiRnsPubSubscriptionsQueryKey(
  args: InferRequestType<typeof client.api.rns.pub.subscriptions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rns/pub/subscriptions', keyArgs] as const
}

export function getApiRnsPubSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pub.subscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.rns.pub.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pub.subscriptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRnsPubSubscriptionsQueryKey>
  >({
    queryKey: getApiRnsPubSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.rns.pub.subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiRnsPubSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pub.subscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.rns.pub.subscriptions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pub.subscriptions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRnsPubSubscriptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiRnsPubSubscriptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiRnsPubSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pub.subscriptions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.rns.pub.subscriptions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiRnsPubSubscriptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostApiRnsPubSubscriptionsSimulate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiRnsPubSubscriptionsSimulateMutationOptions<
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

export function getApiRnsPubSubscriptionsIdQueryKey(
  args: InferRequestType<(typeof client.api.rns.pub.subscriptions)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rns/pub/subscriptions/:id', keyArgs] as const
}

export function getApiRnsPubSubscriptionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.rns.pub.subscriptions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.rns.pub.subscriptions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiRnsPubSubscriptionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.rns.pub.subscriptions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiRnsPubSubscriptionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.rns.pub.subscriptions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.rns.pub.subscriptions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiRnsPubSubscriptionsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchApiRnsPubSubscriptionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiRnsPubSubscriptionsIdMutationOptions<
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

export function createPostApiRnsPubSubscriptionsIdItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiRnsPubSubscriptionsIdItemsMutationOptions<
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

export function createDeleteApiRnsPubSubscriptionsIdItemsItemId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiRnsPubSubscriptionsIdItemsItemIdMutationOptions<
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

export function createPatchApiRnsPubSubscriptionsIdItemsItemId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiRnsPubSubscriptionsIdItemsItemIdMutationOptions<
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

export function createPostApiRnsPubSubscriptionsIdSimulate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiRnsPubSubscriptionsIdSimulateMutationOptions<
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

export function getApiRnsPubSubscriptionsSubscriptionIdConversationMessageQueryKey(
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

export function getApiRnsPubSubscriptionsSubscriptionIdConversationMessageQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.rns.pub.subscriptions)[':subscriptionId']['conversation-message']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiRnsPubSubscriptionsSubscriptionIdConversationMessageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.rns.pub.subscriptions[':subscriptionId']['conversation-message'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiRnsPubSubscriptionsSubscriptionIdConversationMessage<
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
  args: () => InferRequestType<
    (typeof client.api.rns.pub.subscriptions)[':subscriptionId']['conversation-message']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiRnsPubSubscriptionsSubscriptionIdConversationMessageQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiRnsPvtPlansQueryKey(
  args: InferRequestType<typeof client.api.rns.pvt.plans.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rns/pvt/plans', keyArgs] as const
}

export function getApiRnsPvtPlansQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pvt.plans.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.rns.pvt.plans.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pvt.plans.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiRnsPvtPlansQueryKey>
  >({
    queryKey: getApiRnsPvtPlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.rns.pvt.plans.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiRnsPvtPlans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pvt.plans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.rns.pvt.plans.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pvt.plans.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRnsPvtPlansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiRnsPvtPlansQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiRnsPvtPlansIdQueryKey(
  args: InferRequestType<(typeof client.api.rns.pvt.plans)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rns/pvt/plans/:id', keyArgs] as const
}

export function getApiRnsPvtPlansIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.rns.pvt.plans)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.rns.pvt.plans)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.rns.pvt.plans)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRnsPvtPlansIdQueryKey>
  >({
    queryKey: getApiRnsPvtPlansIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.rns.pvt.plans[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiRnsPvtPlansId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.rns.pvt.plans)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.rns.pvt.plans)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.rns.pvt.plans)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRnsPvtPlansIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiRnsPvtPlansIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiRnsPvtReportsQueryKey(
  args: InferRequestType<typeof client.api.rns.pvt.reports.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rns/pvt/reports', keyArgs] as const
}

export function getApiRnsPvtReportsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pvt.reports.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.rns.pvt.reports.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pvt.reports.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiRnsPvtReportsQueryKey>
  >({
    queryKey: getApiRnsPvtReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.rns.pvt.reports.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiRnsPvtReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pvt.reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.rns.pvt.reports.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.pvt.reports.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRnsPvtReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiRnsPvtReportsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiRnsPvtReportsReportNameDocuments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiRnsPvtReportsReportNameDocumentsMutationOptions<
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

export function getApiRnsPvtReportsReportNameDocumentsDocumentIdQueryKey(
  args: InferRequestType<
    (typeof client.api.rns.pvt.reports)[':reportName']['documents'][':documentId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rns/pvt/reports/:reportName/documents/:documentId', keyArgs] as const
}

export function getApiRnsPvtReportsReportNameDocumentsDocumentIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.rns.pvt.reports)[':reportName']['documents'][':documentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiRnsPvtReportsReportNameDocumentsDocumentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.rns.pvt.reports[':reportName'].documents[':documentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiRnsPvtReportsReportNameDocumentsDocumentId<
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
  args: () => InferRequestType<
    (typeof client.api.rns.pvt.reports)[':reportName']['documents'][':documentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiRnsPvtReportsReportNameDocumentsDocumentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiRnsSettingsQueryKey(
  args: InferRequestType<typeof client.api.rns.settings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rns/settings', keyArgs] as const
}

export function getApiRnsSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.settings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.rns.settings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiRnsSettingsQueryKey>
  >({
    queryKey: getApiRnsSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.rns.settings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiRnsSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.rns.settings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.settings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiRnsSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiRnsSettingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiRnsSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.rns.settings.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.rns.settings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiRnsSettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
