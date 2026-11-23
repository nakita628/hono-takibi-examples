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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1AdminNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin)[':name']['$get']>>,
) {
  return ['v1', '/v1/admin/:name', toValue(args)] as const
}

export function getV1AdminNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AdminNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV1AdminNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AdminNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1AdminNameMutationKey() {
  return ['v1', '/v1/admin/:name', 'DELETE'] as const
}

export function getDeleteV1AdminNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.admin)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AdminNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.admin)[':name']['$delete']>) {
      return parseResponse(client.v1.admin[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1AdminName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)[':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.admin)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteV1AdminNameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1AdminNameMutationKey() {
  return ['v1', '/v1/admin/:name', 'PATCH'] as const
}

export function getPatchV1AdminNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.admin)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1AdminNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.admin)[':name']['$patch']>) {
      return parseResponse(client.v1.admin[':name'].$patch(args, options))
    },
  })
}

export function usePatchV1AdminName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.admin)[':name']['$patch']>,
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
  const mutationDefaults = getPatchV1AdminNameMutationOptions<TError, TOnMutateResult>(
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

export function getV1AdminNameOperationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin)[':name']['operations']['$get']>>,
) {
  return ['v1', '/v1/admin/:name/operations', toValue(args)] as const
}

export function getV1AdminNameOperationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin)[':name']['operations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AdminNameOperationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin[':name'].operations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminNameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin)[':name']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin)[':name']['operations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)[':name']['operations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)[':name']['operations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AdminNameOperationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.admin)[':name']['operations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminNameOperationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AdminNameOperationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin[':name'].operations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AdminNamePartitionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin)[':name']['partitions']['$get']>>,
) {
  return ['v1', '/v1/admin/:name/partitions', toValue(args)] as const
}

export function getV1AdminNamePartitionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin)[':name']['partitions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AdminNamePartitionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin[':name'].partitions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminNamePartitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin)[':name']['partitions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin)[':name']['partitions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)[':name']['partitions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)[':name']['partitions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AdminNamePartitionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.admin)[':name']['partitions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminNamePartitionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AdminNamePartitionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin[':name'].partitions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AdminNameSubscriptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.admin)[':name']['subscriptions']['$get']>
  >,
) {
  return ['v1', '/v1/admin/:name/subscriptions', toValue(args)] as const
}

export function getV1AdminNameSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.admin)[':name']['subscriptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AdminNameSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin[':name'].subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminNameSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin)[':name']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.admin)[':name']['subscriptions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)[':name']['subscriptions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)[':name']['subscriptions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AdminNameSubscriptionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.admin)[':name']['subscriptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminNameSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AdminNameSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin[':name'].subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AdminNameTopicsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin)[':name']['topics']['$get']>>,
) {
  return ['v1', '/v1/admin/:name/topics', toValue(args)] as const
}

export function getV1AdminNameTopicsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin)[':name']['topics']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AdminNameTopicsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin[':name'].topics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminNameTopics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)[':name']['topics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin)[':name']['topics']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)[':name']['topics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)[':name']['topics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AdminNameTopicsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.admin)[':name']['topics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminNameTopicsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AdminNameTopicsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin[':name'].topics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AdminNameCancelMutationKey() {
  return ['v1', '/v1/admin/:name:cancel', 'POST'] as const
}

export function getPostV1AdminNameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.admin)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AdminNameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.admin)[':name:cancel']['$post']>) {
      return parseResponse(client.v1.admin[':name:cancel'].$post(args, options))
    },
  })
}

export function usePostV1AdminNameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)[':name:cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.admin)[':name:cancel']['$post']>,
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
  const mutationDefaults = getPostV1AdminNameCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1AdminNameSeekMutationKey() {
  return ['v1', '/v1/admin/:name:seek', 'POST'] as const
}

export function getPostV1AdminNameSeekMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)[':name:seek']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.admin)[':name:seek']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AdminNameSeekMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.admin)[':name:seek']['$post']>) {
      return parseResponse(client.v1.admin[':name:seek'].$post(args, options))
    },
  })
}

export function usePostV1AdminNameSeek<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)[':name:seek']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.admin)[':name:seek']['$post']>,
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
  const mutationDefaults = getPostV1AdminNameSeekMutationOptions<TError, TOnMutateResult>(
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

export function getV1AdminParentReservationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.admin)[':parent']['reservations']['$get']>
  >,
) {
  return ['v1', '/v1/admin/:parent/reservations', toValue(args)] as const
}

export function getV1AdminParentReservationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.admin)[':parent']['reservations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AdminParentReservationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin[':parent'].reservations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminParentReservations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin)[':parent']['reservations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.admin)[':parent']['reservations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)[':parent']['reservations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)[':parent']['reservations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AdminParentReservationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.admin)[':parent']['reservations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminParentReservationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AdminParentReservationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin[':parent'].reservations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AdminParentReservationsMutationKey() {
  return ['v1', '/v1/admin/:parent/reservations', 'POST'] as const
}

export function getPostV1AdminParentReservationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.admin)[':parent']['reservations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.admin)[':parent']['reservations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AdminParentReservationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.admin)[':parent']['reservations']['$post']>,
    ) {
      return parseResponse(client.v1.admin[':parent'].reservations.$post(args, options))
    },
  })
}

export function usePostV1AdminParentReservations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)[':parent']['reservations']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.admin)[':parent']['reservations']['$post']>,
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
  const mutationDefaults = getPostV1AdminParentReservationsMutationOptions<TError, TOnMutateResult>(
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

export function getV1AdminParentSubscriptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.admin)[':parent']['subscriptions']['$get']>
  >,
) {
  return ['v1', '/v1/admin/:parent/subscriptions', toValue(args)] as const
}

export function getV1AdminParentSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.admin)[':parent']['subscriptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AdminParentSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin[':parent'].subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminParentSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin)[':parent']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.admin)[':parent']['subscriptions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)[':parent']['subscriptions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)[':parent']['subscriptions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AdminParentSubscriptionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.admin)[':parent']['subscriptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminParentSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AdminParentSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin[':parent'].subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AdminParentSubscriptionsMutationKey() {
  return ['v1', '/v1/admin/:parent/subscriptions', 'POST'] as const
}

export function getPostV1AdminParentSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.admin)[':parent']['subscriptions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.admin)[':parent']['subscriptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AdminParentSubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.admin)[':parent']['subscriptions']['$post']>,
    ) {
      return parseResponse(client.v1.admin[':parent'].subscriptions.$post(args, options))
    },
  })
}

export function usePostV1AdminParentSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)[':parent']['subscriptions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.admin)[':parent']['subscriptions']['$post']>,
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
  const mutationDefaults = getPostV1AdminParentSubscriptionsMutationOptions<
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

export function getV1AdminParentTopicsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin)[':parent']['topics']['$get']>>,
) {
  return ['v1', '/v1/admin/:parent/topics', toValue(args)] as const
}

export function getV1AdminParentTopicsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin)[':parent']['topics']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AdminParentTopicsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.admin[':parent'].topics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AdminParentTopics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin)[':parent']['topics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.admin)[':parent']['topics']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)[':parent']['topics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)[':parent']['topics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AdminParentTopicsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.admin)[':parent']['topics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminParentTopicsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AdminParentTopicsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.admin[':parent'].topics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1AdminParentTopicsMutationKey() {
  return ['v1', '/v1/admin/:parent/topics', 'POST'] as const
}

export function getPostV1AdminParentTopicsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.admin)[':parent']['topics']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.admin)[':parent']['topics']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AdminParentTopicsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.admin)[':parent']['topics']['$post']>,
    ) {
      return parseResponse(client.v1.admin[':parent'].topics.$post(args, options))
    },
  })
}

export function usePostV1AdminParentTopics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.admin)[':parent']['topics']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.admin)[':parent']['topics']['$post']>,
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
  const mutationDefaults = getPostV1AdminParentTopicsMutationOptions<TError, TOnMutateResult>(
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

export function getV1CursorParentCursorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.cursor)[':parent']['cursors']['$get']>>,
) {
  return ['v1', '/v1/cursor/:parent/cursors', toValue(args)] as const
}

export function getV1CursorParentCursorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.cursor)[':parent']['cursors']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CursorParentCursorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.cursor[':parent'].cursors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CursorParentCursors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.cursor)[':parent']['cursors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.cursor)[':parent']['cursors']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.cursor)[':parent']['cursors']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.cursor)[':parent']['cursors']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1CursorParentCursorsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.cursor)[':parent']['cursors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CursorParentCursorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CursorParentCursorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.cursor[':parent'].cursors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1CursorSubscriptionCommitCursorMutationKey() {
  return ['v1', '/v1/cursor/:subscription:commitCursor', 'POST'] as const
}

export function getPostV1CursorSubscriptionCommitCursorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.cursor)[':subscription:commitCursor']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.cursor)[':subscription:commitCursor']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CursorSubscriptionCommitCursorMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.cursor)[':subscription:commitCursor']['$post']>,
    ) {
      return parseResponse(client.v1.cursor[':subscription:commitCursor'].$post(args, options))
    },
  })
}

export function usePostV1CursorSubscriptionCommitCursor<
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
                  ReturnType<(typeof client.v1.cursor)[':subscription:commitCursor']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.cursor)[':subscription:commitCursor']['$post']>,
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
  const mutationDefaults = getPostV1CursorSubscriptionCommitCursorMutationOptions<
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

export function getPostV1TopicStatsTopicComputeHeadCursorMutationKey() {
  return ['v1', '/v1/topicStats/:topic:computeHeadCursor', 'POST'] as const
}

export function getPostV1TopicStatsTopicComputeHeadCursorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.topicStats)[':topic:computeHeadCursor']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.topicStats)[':topic:computeHeadCursor']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TopicStatsTopicComputeHeadCursorMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.topicStats)[':topic:computeHeadCursor']['$post']>,
    ) {
      return parseResponse(client.v1.topicStats[':topic:computeHeadCursor'].$post(args, options))
    },
  })
}

export function usePostV1TopicStatsTopicComputeHeadCursor<
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
                  ReturnType<(typeof client.v1.topicStats)[':topic:computeHeadCursor']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.topicStats)[':topic:computeHeadCursor']['$post']>,
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
  const mutationDefaults = getPostV1TopicStatsTopicComputeHeadCursorMutationOptions<
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

export function getPostV1TopicStatsTopicComputeMessageStatsMutationKey() {
  return ['v1', '/v1/topicStats/:topic:computeMessageStats', 'POST'] as const
}

export function getPostV1TopicStatsTopicComputeMessageStatsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.topicStats)[':topic:computeMessageStats']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.topicStats)[':topic:computeMessageStats']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TopicStatsTopicComputeMessageStatsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.topicStats)[':topic:computeMessageStats']['$post']>,
    ) {
      return parseResponse(client.v1.topicStats[':topic:computeMessageStats'].$post(args, options))
    },
  })
}

export function usePostV1TopicStatsTopicComputeMessageStats<
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
                  ReturnType<(typeof client.v1.topicStats)[':topic:computeMessageStats']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.topicStats)[':topic:computeMessageStats']['$post']>,
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
  const mutationDefaults = getPostV1TopicStatsTopicComputeMessageStatsMutationOptions<
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

export function getPostV1TopicStatsTopicComputeTimeCursorMutationKey() {
  return ['v1', '/v1/topicStats/:topic:computeTimeCursor', 'POST'] as const
}

export function getPostV1TopicStatsTopicComputeTimeCursorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.topicStats)[':topic:computeTimeCursor']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.topicStats)[':topic:computeTimeCursor']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TopicStatsTopicComputeTimeCursorMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.topicStats)[':topic:computeTimeCursor']['$post']>,
    ) {
      return parseResponse(client.v1.topicStats[':topic:computeTimeCursor'].$post(args, options))
    },
  })
}

export function usePostV1TopicStatsTopicComputeTimeCursor<
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
                  ReturnType<(typeof client.v1.topicStats)[':topic:computeTimeCursor']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.topicStats)[':topic:computeTimeCursor']['$post']>,
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
  const mutationDefaults = getPostV1TopicStatsTopicComputeTimeCursorMutationOptions<
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
