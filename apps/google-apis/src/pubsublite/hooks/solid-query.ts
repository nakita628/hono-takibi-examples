import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1AdminNameQueryKey(
  args: InferRequestType<(typeof client.v1.admin)[':name']['$get']>,
) {
  return ['v1', '/v1/admin/:name', args] as const
}

export function getV1AdminNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.admin)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AdminNameQueryKey>
  >({
    queryKey: getV1AdminNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1AdminName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.admin)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1AdminNameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AdminNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteV1AdminName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteV1AdminNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchV1AdminName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.admin)[':name']['$patch']>,
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
    const mutationDefaults = getPatchV1AdminNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1AdminNameOperationsQueryKey(
  args: InferRequestType<(typeof client.v1.admin)[':name']['operations']['$get']>,
) {
  return ['v1', '/v1/admin/:name/operations', args] as const
}

export function getV1AdminNameOperationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin)[':name']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.admin)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AdminNameOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin[':name'].operations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AdminNameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin)[':name']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.admin)[':name']['operations']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1AdminNameOperationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1AdminNamePartitionsQueryKey(
  args: InferRequestType<(typeof client.v1.admin)[':name']['partitions']['$get']>,
) {
  return ['v1', '/v1/admin/:name/partitions', args] as const
}

export function getV1AdminNamePartitionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin)[':name']['partitions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.admin)[':name']['partitions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AdminNamePartitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin[':name'].partitions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AdminNamePartitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin)[':name']['partitions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.admin)[':name']['partitions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1AdminNamePartitionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1AdminNameSubscriptionsQueryKey(
  args: InferRequestType<(typeof client.v1.admin)[':name']['subscriptions']['$get']>,
) {
  return ['v1', '/v1/admin/:name/subscriptions', args] as const
}

export function getV1AdminNameSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin)[':name']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.admin)[':name']['subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AdminNameSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin[':name'].subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AdminNameSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin)[':name']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.admin)[':name']['subscriptions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1AdminNameSubscriptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1AdminNameTopicsQueryKey(
  args: InferRequestType<(typeof client.v1.admin)[':name']['topics']['$get']>,
) {
  return ['v1', '/v1/admin/:name/topics', args] as const
}

export function getV1AdminNameTopicsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)[':name']['topics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.admin)[':name']['topics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AdminNameTopicsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin[':name'].topics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AdminNameTopics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.admin)[':name']['topics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.admin)[':name']['topics']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AdminNameTopicsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1AdminNameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostV1AdminNameCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV1AdminNameSeek<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostV1AdminNameSeekMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1AdminParentReservationsQueryKey(
  args: InferRequestType<(typeof client.v1.admin)[':parent']['reservations']['$get']>,
) {
  return ['v1', '/v1/admin/:parent/reservations', args] as const
}

export function getV1AdminParentReservationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin)[':parent']['reservations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.admin)[':parent']['reservations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AdminParentReservationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin[':parent'].reservations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AdminParentReservations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin)[':parent']['reservations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.admin)[':parent']['reservations']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1AdminParentReservationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1AdminParentReservations<
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
                Awaited<ReturnType<(typeof client.v1.admin)[':parent']['reservations']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.admin)[':parent']['reservations']['$post']>,
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
    const mutationDefaults = getPostV1AdminParentReservationsMutationOptions<
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

export function getV1AdminParentSubscriptionsQueryKey(
  args: InferRequestType<(typeof client.v1.admin)[':parent']['subscriptions']['$get']>,
) {
  return ['v1', '/v1/admin/:parent/subscriptions', args] as const
}

export function getV1AdminParentSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin)[':parent']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.admin)[':parent']['subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AdminParentSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin[':parent'].subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AdminParentSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin)[':parent']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.admin)[':parent']['subscriptions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1AdminParentSubscriptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1AdminParentSubscriptions<
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
                Awaited<ReturnType<(typeof client.v1.admin)[':parent']['subscriptions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.admin)[':parent']['subscriptions']['$post']>,
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
    const mutationDefaults = getPostV1AdminParentSubscriptionsMutationOptions<
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

export function getV1AdminParentTopicsQueryKey(
  args: InferRequestType<(typeof client.v1.admin)[':parent']['topics']['$get']>,
) {
  return ['v1', '/v1/admin/:parent/topics', args] as const
}

export function getV1AdminParentTopicsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin)[':parent']['topics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.admin)[':parent']['topics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1AdminParentTopicsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.admin[':parent'].topics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AdminParentTopics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.admin)[':parent']['topics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.admin)[':parent']['topics']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AdminParentTopicsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1AdminParentTopics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostV1AdminParentTopicsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CursorParentCursorsQueryKey(
  args: InferRequestType<(typeof client.v1.cursor)[':parent']['cursors']['$get']>,
) {
  return ['v1', '/v1/cursor/:parent/cursors', args] as const
}

export function getV1CursorParentCursorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.cursor)[':parent']['cursors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.cursor)[':parent']['cursors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1CursorParentCursorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.cursor[':parent'].cursors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CursorParentCursors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.cursor)[':parent']['cursors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.cursor)[':parent']['cursors']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
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
      ...getV1CursorParentCursorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV1CursorSubscriptionCommitCursor<
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
                  ReturnType<(typeof client.v1.cursor)[':subscription:commitCursor']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.cursor)[':subscription:commitCursor']['$post']>,
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
    const mutationDefaults = getPostV1CursorSubscriptionCommitCursorMutationOptions<
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

export function createPostV1TopicStatsTopicComputeHeadCursor<
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
                  ReturnType<(typeof client.v1.topicStats)[':topic:computeHeadCursor']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.topicStats)[':topic:computeHeadCursor']['$post']>,
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
    const mutationDefaults = getPostV1TopicStatsTopicComputeHeadCursorMutationOptions<
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

export function createPostV1TopicStatsTopicComputeMessageStats<
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
                  ReturnType<(typeof client.v1.topicStats)[':topic:computeMessageStats']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.topicStats)[':topic:computeMessageStats']['$post']>,
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
    const mutationDefaults = getPostV1TopicStatsTopicComputeMessageStatsMutationOptions<
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

export function createPostV1TopicStatsTopicComputeTimeCursor<
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
                  ReturnType<(typeof client.v1.topicStats)[':topic:computeTimeCursor']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.topicStats)[':topic:computeTimeCursor']['$post']>,
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
    const mutationDefaults = getPostV1TopicStatsTopicComputeTimeCursorMutationOptions<
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
