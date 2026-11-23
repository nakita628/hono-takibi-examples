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

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1ShippingTrackersBatchMutationKey() {
  return ['v1', '/v1/shipping/trackers-batch', 'POST'] as const
}

export function getPostV1ShippingTrackersBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.shipping)['trackers-batch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.shipping)['trackers-batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ShippingTrackersBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.shipping)['trackers-batch']['$post']>,
    ) {
      return parseResponse(client.v1.shipping['trackers-batch'].$post(args, options))
    },
  })
}

export function createPostV1ShippingTrackersBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.shipping)['trackers-batch']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.shipping)['trackers-batch']['$post']>,
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
    const mutationDefaults = getPostV1ShippingTrackersBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ShippingTrackersQueryKey(
  args: InferRequestType<typeof client.v1.shipping.trackers.$get>,
) {
  return ['v1', '/v1/shipping/trackers', args] as const
}

export function getV1ShippingTrackersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipping.trackers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.shipping.trackers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipping.trackers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ShippingTrackersQueryKey>
  >({
    queryKey: getV1ShippingTrackersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.shipping.trackers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ShippingTrackers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipping.trackers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.shipping.trackers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipping.trackers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ShippingTrackersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ShippingTrackersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ShippingTrackersMutationKey() {
  return ['v1', '/v1/shipping/trackers', 'POST'] as const
}

export function getPostV1ShippingTrackersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipping.trackers.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.shipping.trackers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ShippingTrackersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.shipping.trackers.$post>) {
      return parseResponse(client.v1.shipping.trackers.$post(args, options))
    },
  })
}

export function createPostV1ShippingTrackers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipping.trackers.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.shipping.trackers.$post>,
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
    const mutationDefaults = getPostV1ShippingTrackersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ShippingTrackersIdQueryKey(
  args: InferRequestType<(typeof client.v1.shipping.trackers)[':id']['$get']>,
) {
  return ['v1', '/v1/shipping/trackers/:id', args] as const
}

export function getV1ShippingTrackersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.shipping.trackers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.shipping.trackers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.shipping.trackers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ShippingTrackersIdQueryKey>
  >({
    queryKey: getV1ShippingTrackersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.shipping.trackers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ShippingTrackersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.shipping.trackers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.shipping.trackers)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.shipping.trackers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ShippingTrackersIdQueryKey>
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
      ...getV1ShippingTrackersIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1ShippingTrackersIdMutationKey() {
  return ['v1', '/v1/shipping/trackers/:id', 'PUT'] as const
}

export function getPutV1ShippingTrackersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.shipping.trackers)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.shipping.trackers)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ShippingTrackersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.shipping.trackers)[':id']['$put']>) {
      return parseResponse(client.v1.shipping.trackers[':id'].$put(args, options))
    },
  })
}

export function createPutV1ShippingTrackersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.shipping.trackers)[':id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.shipping.trackers)[':id']['$put']>,
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
    const mutationDefaults = getPutV1ShippingTrackersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
