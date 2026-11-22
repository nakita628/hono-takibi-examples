import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function usePostV1ShippingTrackersBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ShippingTrackersBatchMutationOptions<TError, TOnMutateResult>(
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

export function useV1ShippingTrackers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipping.trackers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.shipping.trackers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ShippingTrackersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ShippingTrackers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipping.trackers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.shipping.trackers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ShippingTrackersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostV1ShippingTrackers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ShippingTrackersMutationOptions<TError, TOnMutateResult>(
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

export function useV1ShippingTrackersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.shipping.trackers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.shipping.trackers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ShippingTrackersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ShippingTrackersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.shipping.trackers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.shipping.trackers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ShippingTrackersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePutV1ShippingTrackersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ShippingTrackersIdMutationOptions<TError, TOnMutateResult>(
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
