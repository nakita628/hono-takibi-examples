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

export function getAccountingKey() {
  return ['accounting'] as const
}

export function getInventoryKey() {
  return ['inventory'] as const
}

export function getOauthKey() {
  return ['oauth'] as const
}

export function getOrdersKey() {
  return ['orders'] as const
}

export function getReturnsKey() {
  return ['returns'] as const
}

export function getTrackKey() {
  return ['track'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getAccountingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.$get>>,
) {
  return ['accounting', '/accounting', toValue(args)] as const
}

export function getAccountingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounting.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccounting<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounting.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.$get>>>>
          >,
          ReturnType<typeof getAccountingQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounting.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounting.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInventoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inventory.$get>>,
) {
  return ['inventory', '/inventory', toValue(args)] as const
}

export function getInventoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inventory.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInventoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inventory.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInventory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inventory.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory.$get>>>>
          >,
          ReturnType<typeof getInventoryQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventory.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInventoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInventoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inventory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOauthAccessTokenMutationKey() {
  return ['oauth', '/oauth/access_token', 'POST'] as const
}

export function getPostOauthAccessTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth.access_token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthAccessTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.access_token.$post>) {
      return parseResponse(client.oauth.access_token.$post(args, options))
    },
  })
}

export function usePostOauthAccessToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.oauth.access_token.$post>,
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
  const mutationDefaults = getPostOauthAccessTokenMutationOptions<TError, TOnMutateResult>(
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

export function getOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.orders.$get>>,
) {
  return ['orders', '/orders', toValue(args)] as const
}

export function getOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.orders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orders.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrders<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.orders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
          ReturnType<typeof getOrdersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrdersMutationKey() {
  return ['orders', '/orders', 'POST'] as const
}

export function getPostOrdersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$post>>>>>,
    TError,
    InferRequestType<typeof client.orders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.orders.$post>) {
      return parseResponse(client.orders.$post(args, options))
    },
  })
}

export function usePostOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.orders.$post>,
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
  const mutationDefaults = getPostOrdersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrdersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orders)[':id']['$get']>>,
) {
  return ['orders', '/orders/:id', toValue(args)] as const
}

export function getOrdersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orders)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrdersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orders[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrdersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orders)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getOrdersIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrdersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrdersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orders[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteOrdersIdMutationKey() {
  return ['orders', '/orders/:id', 'DELETE'] as const
}

export function getDeleteOrdersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.orders)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrdersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.orders)[':id']['$delete']>) {
      return parseResponse(client.orders[':id'].$delete(args, options))
    },
  })
}

export function useDeleteOrdersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.orders)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteOrdersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutOrdersIdShipMutationKey() {
  return ['orders', '/orders/:id/ship', 'PUT'] as const
}

export function getPutOrdersIdShipMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':id']['ship']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.orders)[':id']['ship']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrdersIdShipMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.orders)[':id']['ship']['$put']>) {
      return parseResponse(client.orders[':id'].ship.$put(args, options))
    },
  })
}

export function usePutOrdersIdShip<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orders)[':id']['ship']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.orders)[':id']['ship']['$put']>,
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
  const mutationDefaults = getPutOrdersIdShipMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutOrdersIdStatusMutationKey() {
  return ['orders', '/orders/:id/status', 'PUT'] as const
}

export function getPutOrdersIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':id']['status']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.orders)[':id']['status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrdersIdStatusMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.orders)[':id']['status']['$put']>) {
      return parseResponse(client.orders[':id'].status.$put(args, options))
    },
  })
}

export function usePutOrdersIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orders)[':id']['status']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.orders)[':id']['status']['$put']>,
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
  const mutationDefaults = getPutOrdersIdStatusMutationOptions<TError, TOnMutateResult>(
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

export function getReturnsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.returns.$get>>,
) {
  return ['returns', '/returns', toValue(args)] as const
}

export function getReturnsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.returns.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReturnsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.returns.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReturns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.returns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.returns.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.returns.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.returns.$get>>>>
          >,
          ReturnType<typeof getReturnsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.returns.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReturnsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReturnsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.returns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutReturnsMutationKey() {
  return ['returns', '/returns', 'PUT'] as const
}

export function getPutReturnsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.returns.$put>>>>>,
    TError,
    InferRequestType<typeof client.returns.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutReturnsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.returns.$put>) {
      return parseResponse(client.returns.$put(args, options))
    },
  })
}

export function usePutReturns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.returns.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.returns.$put>,
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
  const mutationDefaults = getPutReturnsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTrackQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.track.$get>>,
) {
  return ['track', '/track', toValue(args)] as const
}

export function getTrackQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.track.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrackQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.track.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTrack<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.track.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.track.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.track.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.track.$get>>>>>,
          ReturnType<typeof getTrackQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.track.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTrackQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrackQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.track.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersMeQueryKey() {
  return ['users', '/users/me'] as const
}

export function getUsersMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
          >,
          ReturnType<typeof getUsersMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.me.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
