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

export function getChargersKey() {
  return ['chargers'] as const
}

export function getChargingLocationsKey() {
  return ['charging-locations'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getStatisticsKey() {
  return ['statistics'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getVehiclesKey() {
  return ['vehicles'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getChargersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chargers.$get>>,
) {
  return ['chargers', '/chargers', toValue(args)] as const
}

export function getChargersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chargers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChargersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chargers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChargers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chargers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chargers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chargers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chargers.$get>>>>
          >,
          ReturnType<typeof getChargersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chargers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChargersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChargersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chargers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChargersChargerIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.chargers)[':chargerId']['$get']>>,
) {
  return ['chargers', '/chargers/:chargerId', toValue(args)] as const
}

export function getChargersChargerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.chargers)[':chargerId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChargersChargerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chargers[':chargerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChargersChargerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.chargers)[':chargerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.chargers)[':chargerId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chargers)[':chargerId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chargers)[':chargerId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChargersChargerIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.chargers)[':chargerId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChargersChargerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChargersChargerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chargers[':chargerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChargersChargerIdChargingMutationKey() {
  return ['chargers', '/chargers/:chargerId/charging', 'POST'] as const
}

export function getPostChargersChargerIdChargingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chargers)[':chargerId']['charging']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.chargers)[':chargerId']['charging']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChargersChargerIdChargingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.chargers)[':chargerId']['charging']['$post']>,
    ) {
      return parseResponse(client.chargers[':chargerId'].charging.$post(args, options))
    },
  })
}

export function usePostChargersChargerIdCharging<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.chargers)[':chargerId']['charging']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.chargers)[':chargerId']['charging']['$post']>,
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
  const mutationDefaults = getPostChargersChargerIdChargingMutationOptions<TError, TOnMutateResult>(
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

export function getChargingLocationsQueryKey() {
  return ['charging-locations', '/charging-locations'] as const
}

export function getChargingLocationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getChargingLocationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['charging-locations'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChargingLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['charging-locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['charging-locations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['charging-locations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChargingLocationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['charging-locations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChargingLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getChargingLocationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['charging-locations'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChargingLocationsMutationKey() {
  return ['charging-locations', '/charging-locations', 'POST'] as const
}

export function getPostChargingLocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['charging-locations']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['charging-locations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChargingLocationsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['charging-locations']['$post']>) {
      return parseResponse(client['charging-locations'].$post(args, options))
    },
  })
}

export function usePostChargingLocations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['charging-locations']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['charging-locations']['$post']>,
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
  const mutationDefaults = getPostChargingLocationsMutationOptions<TError, TOnMutateResult>(
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

export function getChargingLocationsChargingLocationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['charging-locations'][':chargingLocationId']['$get']>
  >,
) {
  return ['charging-locations', '/charging-locations/:chargingLocationId', toValue(args)] as const
}

export function getChargingLocationsChargingLocationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['charging-locations'][':chargingLocationId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChargingLocationsChargingLocationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['charging-locations'][':chargingLocationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChargingLocationsChargingLocationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['charging-locations'][':chargingLocationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['charging-locations'][':chargingLocationId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['charging-locations'][':chargingLocationId']['$get']>
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
                  ReturnType<(typeof client)['charging-locations'][':chargingLocationId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getChargingLocationsChargingLocationIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['charging-locations'][':chargingLocationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChargingLocationsChargingLocationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChargingLocationsChargingLocationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['charging-locations'][':chargingLocationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutChargingLocationsChargingLocationIdMutationKey() {
  return ['charging-locations', '/charging-locations/:chargingLocationId', 'PUT'] as const
}

export function getPutChargingLocationsChargingLocationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['charging-locations'][':chargingLocationId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['charging-locations'][':chargingLocationId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChargingLocationsChargingLocationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['charging-locations'][':chargingLocationId']['$put']>,
    ) {
      return parseResponse(client['charging-locations'][':chargingLocationId'].$put(args, options))
    },
  })
}

export function usePutChargingLocationsChargingLocationId<
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
                  ReturnType<(typeof client)['charging-locations'][':chargingLocationId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['charging-locations'][':chargingLocationId']['$put']>,
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
  const mutationDefaults = getPutChargingLocationsChargingLocationIdMutationOptions<
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

export function getDeleteChargingLocationsChargingLocationIdMutationKey() {
  return ['charging-locations', '/charging-locations/:chargingLocationId', 'DELETE'] as const
}

export function getDeleteChargingLocationsChargingLocationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['charging-locations'][':chargingLocationId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['charging-locations'][':chargingLocationId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChargingLocationsChargingLocationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['charging-locations'][':chargingLocationId']['$delete']
      >,
    ) {
      return parseResponse(
        client['charging-locations'][':chargingLocationId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteChargingLocationsChargingLocationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client)['charging-locations'][':chargingLocationId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['charging-locations'][':chargingLocationId']['$delete']>,
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
  const mutationDefaults = getDeleteChargingLocationsChargingLocationIdMutationOptions<
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

export function getHealthReadyQueryKey() {
  return ['health', '/health/ready'] as const
}

export function getHealthReadyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthReadyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.ready.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealthReady<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
          >,
          ReturnType<typeof getHealthReadyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthReadyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthReadyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.health.ready.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthVendorsQueryKey() {
  return ['health', '/health/vendors'] as const
}

export function getHealthVendorsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthVendorsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.vendors.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealthVendors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.vendors.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.vendors.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.vendors.$get>>>>
          >,
          ReturnType<typeof getHealthVendorsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.vendors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHealthVendorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthVendorsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.health.vendors.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeQueryKey() {
  return ['me', '/me'] as const
}

export function getMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          ReturnType<typeof getMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.me.$get(undefined, { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteMeVendorsVendorMutationKey() {
  return ['me', '/me/vendors/:vendor', 'DELETE'] as const
}

export function getDeleteMeVendorsVendorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.vendors)[':vendor']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.me.vendors)[':vendor']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeVendorsVendorMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.me.vendors)[':vendor']['$delete']>) {
      return parseResponse(client.me.vendors[':vendor'].$delete(args, options))
    },
  })
}

export function useDeleteMeVendorsVendor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.me.vendors)[':vendor']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.me.vendors)[':vendor']['$delete']>,
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
  const mutationDefaults = getDeleteMeVendorsVendorMutationOptions<TError, TOnMutateResult>(
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

export function getStatisticsChargingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.statistics.charging.$get>>,
) {
  return ['statistics', '/statistics/charging', toValue(args)] as const
}

export function getStatisticsChargingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.statistics.charging.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatisticsChargingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.statistics.charging.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatisticsCharging<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.charging.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.statistics.charging.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.statistics.charging.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.statistics.charging.$get>>>
            >
          >,
          ReturnType<typeof getStatisticsChargingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.charging.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatisticsChargingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatisticsChargingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.statistics.charging.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteUsersUserIdMutationKey() {
  return ['users', '/users/:userId', 'DELETE'] as const
}

export function getDeleteUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['$delete']>) {
      return parseResponse(client.users[':userId'].$delete(args, options))
    },
  })
}

export function useDeleteUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)[':userId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':userId']['$delete']>,
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
  const mutationDefaults = getDeleteUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteUsersUserIdAuthorizationMutationKey() {
  return ['users', '/users/:userId/authorization', 'DELETE'] as const
}

export function getDeleteUsersUserIdAuthorizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['authorization']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':userId']['authorization']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdAuthorizationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':userId']['authorization']['$delete']>,
    ) {
      return parseResponse(client.users[':userId'].authorization.$delete(args, options))
    },
  })
}

export function useDeleteUsersUserIdAuthorization<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)[':userId']['authorization']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':userId']['authorization']['$delete']>,
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
  const mutationDefaults = getDeleteUsersUserIdAuthorizationMutationOptions<
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

export function getPostUsersUserIdLinkMutationKey() {
  return ['users', '/users/:userId/link', 'POST'] as const
}

export function getPostUsersUserIdLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['link']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['link']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdLinkMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['link']['$post']>) {
      return parseResponse(client.users[':userId'].link.$post(args, options))
    },
  })
}

export function usePostUsersUserIdLink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':userId']['link']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':userId']['link']['$post']>,
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
  const mutationDefaults = getPostUsersUserIdLinkMutationOptions<TError, TOnMutateResult>(
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

export function getVehiclesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vehicles.$get>>,
) {
  return ['vehicles', '/vehicles', toValue(args)] as const
}

export function getVehiclesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vehicles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVehiclesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vehicles.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVehicles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vehicles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicles.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicles.$get>>>>
          >,
          ReturnType<typeof getVehiclesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVehiclesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVehiclesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vehicles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVehiclesVehicleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vehicles)[':vehicleId']['$get']>>,
) {
  return ['vehicles', '/vehicles/:vehicleId', toValue(args)] as const
}

export function getVehiclesVehicleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vehicles)[':vehicleId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVehiclesVehicleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vehicles[':vehicleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVehiclesVehicleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vehicles)[':vehicleId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVehiclesVehicleIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVehiclesVehicleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVehiclesVehicleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vehicles[':vehicleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVehiclesVehicleIdChargeStateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vehicles)[':vehicleId']['charge-state']['$get']>
  >,
) {
  return ['vehicles', '/vehicles/:vehicleId/charge-state', toValue(args)] as const
}

export function getVehiclesVehicleIdChargeStateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vehicles)[':vehicleId']['charge-state']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVehiclesVehicleIdChargeStateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vehicles[':vehicleId']['charge-state'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVehiclesVehicleIdChargeState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['charge-state']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vehicles)[':vehicleId']['charge-state']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['charge-state']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['charge-state']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVehiclesVehicleIdChargeStateQueryKey>
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
          Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['charge-state']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVehiclesVehicleIdChargeStateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVehiclesVehicleIdChargeStateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vehicles[':vehicleId']['charge-state'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVehiclesVehicleIdChargingMutationKey() {
  return ['vehicles', '/vehicles/:vehicleId/charging', 'POST'] as const
}

export function getPostVehiclesVehicleIdChargingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['charging']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.vehicles)[':vehicleId']['charging']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVehiclesVehicleIdChargingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.vehicles)[':vehicleId']['charging']['$post']>,
    ) {
      return parseResponse(client.vehicles[':vehicleId'].charging.$post(args, options))
    },
  })
}

export function usePostVehiclesVehicleIdCharging<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['charging']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.vehicles)[':vehicleId']['charging']['$post']>,
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
  const mutationDefaults = getPostVehiclesVehicleIdChargingMutationOptions<TError, TOnMutateResult>(
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

export function getVehiclesVehicleIdInformationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vehicles)[':vehicleId']['information']['$get']>
  >,
) {
  return ['vehicles', '/vehicles/:vehicleId/information', toValue(args)] as const
}

export function getVehiclesVehicleIdInformationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vehicles)[':vehicleId']['information']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVehiclesVehicleIdInformationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vehicles[':vehicleId'].information.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVehiclesVehicleIdInformation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['information']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vehicles)[':vehicleId']['information']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['information']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['information']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVehiclesVehicleIdInformationQueryKey>
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
          Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['information']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVehiclesVehicleIdInformationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVehiclesVehicleIdInformationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vehicles[':vehicleId'].information.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVehiclesVehicleIdLocationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vehicles)[':vehicleId']['location']['$get']>
  >,
) {
  return ['vehicles', '/vehicles/:vehicleId/location', toValue(args)] as const
}

export function getVehiclesVehicleIdLocationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vehicles)[':vehicleId']['location']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVehiclesVehicleIdLocationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vehicles[':vehicleId'].location.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVehiclesVehicleIdLocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['location']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vehicles)[':vehicleId']['location']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['location']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['location']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVehiclesVehicleIdLocationQueryKey>
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
          Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['location']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVehiclesVehicleIdLocationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVehiclesVehicleIdLocationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vehicles[':vehicleId'].location.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVehiclesVehicleIdOdometerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vehicles)[':vehicleId']['odometer']['$get']>
  >,
) {
  return ['vehicles', '/vehicles/:vehicleId/odometer', toValue(args)] as const
}

export function getVehiclesVehicleIdOdometerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vehicles)[':vehicleId']['odometer']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVehiclesVehicleIdOdometerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vehicles[':vehicleId'].odometer.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVehiclesVehicleIdOdometer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['odometer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vehicles)[':vehicleId']['odometer']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['odometer']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['odometer']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVehiclesVehicleIdOdometerQueryKey>
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
          Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['odometer']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVehiclesVehicleIdOdometerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVehiclesVehicleIdOdometerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vehicles[':vehicleId'].odometer.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVehiclesVehicleIdSmartChargingPolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vehicles)[':vehicleId']['smart-charging-policy']['$get']>
  >,
) {
  return ['vehicles', '/vehicles/:vehicleId/smart-charging-policy', toValue(args)] as const
}

export function getVehiclesVehicleIdSmartChargingPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vehicles)[':vehicleId']['smart-charging-policy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVehiclesVehicleIdSmartChargingPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vehicles[':vehicleId']['smart-charging-policy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVehiclesVehicleIdSmartChargingPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['smart-charging-policy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.vehicles)[':vehicleId']['smart-charging-policy']['$get']>
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
                    (typeof client.vehicles)[':vehicleId']['smart-charging-policy']['$get']
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
                    (typeof client.vehicles)[':vehicleId']['smart-charging-policy']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVehiclesVehicleIdSmartChargingPolicyQueryKey>
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
            ReturnType<(typeof client.vehicles)[':vehicleId']['smart-charging-policy']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVehiclesVehicleIdSmartChargingPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVehiclesVehicleIdSmartChargingPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vehicles[':vehicleId']['smart-charging-policy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutVehiclesVehicleIdSmartChargingPolicyMutationKey() {
  return ['vehicles', '/vehicles/:vehicleId/smart-charging-policy', 'PUT'] as const
}

export function getPutVehiclesVehicleIdSmartChargingPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.vehicles)[':vehicleId']['smart-charging-policy']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vehicles)[':vehicleId']['smart-charging-policy']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVehiclesVehicleIdSmartChargingPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.vehicles)[':vehicleId']['smart-charging-policy']['$put']
      >,
    ) {
      return parseResponse(
        client.vehicles[':vehicleId']['smart-charging-policy'].$put(args, options),
      )
    },
  })
}

export function usePutVehiclesVehicleIdSmartChargingPolicy<
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
                    (typeof client.vehicles)[':vehicleId']['smart-charging-policy']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.vehicles)[':vehicleId']['smart-charging-policy']['$put']>,
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
  const mutationDefaults = getPutVehiclesVehicleIdSmartChargingPolicyMutationOptions<
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

export function getPostVehiclesVehicleIdWatchMutationKey() {
  return ['vehicles', '/vehicles/:vehicleId/watch', 'POST'] as const
}

export function getPostVehiclesVehicleIdWatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['watch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vehicles)[':vehicleId']['watch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVehiclesVehicleIdWatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.vehicles)[':vehicleId']['watch']['$post']>,
    ) {
      return parseResponse(client.vehicles[':vehicleId'].watch.$post(args, options))
    },
  })
}

export function usePostVehiclesVehicleIdWatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['watch']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.vehicles)[':vehicleId']['watch']['$post']>,
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
  const mutationDefaults = getPostVehiclesVehicleIdWatchMutationOptions<TError, TOnMutateResult>(
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

export function getPutWebhooksFirehoseMutationKey() {
  return ['webhooks', '/webhooks/firehose', 'PUT'] as const
}

export function getPutWebhooksFirehoseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.firehose.$put>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.webhooks.firehose.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutWebhooksFirehoseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.firehose.$put>) {
      return parseResponse(client.webhooks.firehose.$put(args, options))
    },
  })
}

export function usePutWebhooksFirehose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.firehose.$put>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.webhooks.firehose.$put>,
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
  const mutationDefaults = getPutWebhooksFirehoseMutationOptions<TError, TOnMutateResult>(
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

export function getPostWebhooksFirehoseTestMutationKey() {
  return ['webhooks', '/webhooks/firehose/test', 'POST'] as const
}

export function getPostWebhooksFirehoseTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.firehose.test.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksFirehoseTestMutationKey(),
    async mutationFn() {
      return parseResponse(client.webhooks.firehose.test.$post(undefined, options))
    },
  })
}

export function usePostWebhooksFirehoseTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.firehose.test.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostWebhooksFirehoseTestMutationOptions<TError, TOnMutateResult>(
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
