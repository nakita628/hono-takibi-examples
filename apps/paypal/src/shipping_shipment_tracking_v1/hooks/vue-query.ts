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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.shipping.trackers.$get>>,
) {
  return ['v1', '/v1/shipping/trackers', toValue(args)] as const
}

export function getV1ShippingTrackersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.shipping.trackers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ShippingTrackersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.shipping.trackers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ShippingTrackers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipping.trackers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.shipping.trackers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipping.trackers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipping.trackers.$get>>>
            >
          >,
          ReturnType<typeof getV1ShippingTrackersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.shipping.trackers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ShippingTrackersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ShippingTrackersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.shipping.trackers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.shipping.trackers)[':id']['$get']>>,
) {
  return ['v1', '/v1/shipping/trackers/:id', toValue(args)] as const
}

export function getV1ShippingTrackersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.shipping.trackers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ShippingTrackersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.shipping.trackers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ShippingTrackersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.shipping.trackers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.shipping.trackers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.shipping.trackers)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ShippingTrackersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.shipping.trackers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ShippingTrackersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ShippingTrackersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.shipping.trackers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
