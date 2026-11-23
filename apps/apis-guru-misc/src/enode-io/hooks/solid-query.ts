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

export function getChargersQueryKey(args: InferRequestType<typeof client.chargers.$get>) {
  return ['chargers', '/chargers', args] as const
}

export function getChargersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chargers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.chargers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chargers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChargersQueryKey>
  >({
    queryKey: getChargersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chargers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createChargers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chargers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.chargers.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chargers.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getChargersQueryKey>
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
    return { ...getChargersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getChargersChargerIdQueryKey(
  args: InferRequestType<(typeof client.chargers)[':chargerId']['$get']>,
) {
  return ['chargers', '/chargers/:chargerId', args] as const
}

export function getChargersChargerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.chargers)[':chargerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.chargers)[':chargerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.chargers)[':chargerId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChargersChargerIdQueryKey>
  >({
    queryKey: getChargersChargerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chargers[':chargerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createChargersChargerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.chargers)[':chargerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.chargers)[':chargerId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.chargers)[':chargerId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getChargersChargerIdQueryKey>
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
    return { ...getChargersChargerIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostChargersChargerIdCharging<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostChargersChargerIdChargingMutationOptions<
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

export function getChargingLocationsQueryKey() {
  return ['charging-locations', '/charging-locations'] as const
}

export function getChargingLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['charging-locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['charging-locations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChargingLocationsQueryKey>
  >({
    queryKey: getChargingLocationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['charging-locations'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createChargingLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['charging-locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['charging-locations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getChargingLocationsQueryKey>
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
    return { ...getChargingLocationsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostChargingLocations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostChargingLocationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getChargingLocationsChargingLocationIdQueryKey(
  args: InferRequestType<(typeof client)['charging-locations'][':chargingLocationId']['$get']>,
) {
  return ['charging-locations', '/charging-locations/:chargingLocationId', args] as const
}

export function getChargingLocationsChargingLocationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['charging-locations'][':chargingLocationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['charging-locations'][':chargingLocationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChargingLocationsChargingLocationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['charging-locations'][':chargingLocationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createChargingLocationsChargingLocationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['charging-locations'][':chargingLocationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['charging-locations'][':chargingLocationId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getChargingLocationsChargingLocationIdQueryKey>
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
      ...getChargingLocationsChargingLocationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutChargingLocationsChargingLocationId<
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
                  ReturnType<(typeof client)['charging-locations'][':chargingLocationId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['charging-locations'][':chargingLocationId']['$put']>,
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
    const mutationDefaults = getPutChargingLocationsChargingLocationIdMutationOptions<
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

export function createDeleteChargingLocationsChargingLocationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteChargingLocationsChargingLocationIdMutationOptions<
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

export function getHealthReadyQueryKey() {
  return ['health', '/health/ready'] as const
}

export function getHealthReadyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthReadyQueryKey>
  >({
    queryKey: getHealthReadyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.ready.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHealthReady<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getHealthReadyQueryKey>
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
    return { ...getHealthReadyQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getHealthVendorsQueryKey() {
  return ['health', '/health/vendors'] as const
}

export function getHealthVendorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.vendors.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.vendors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getHealthVendorsQueryKey>
  >({
    queryKey: getHealthVendorsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.vendors.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHealthVendors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.vendors.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.vendors.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getHealthVendorsQueryKey>
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
    return { ...getHealthVendorsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMeQueryKey() {
  return ['me', '/me'] as const
}

export function getMeQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >({
    queryKey: getMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getMeQueryKey>
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
    return { ...getMeQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createDeleteMeVendorsVendor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteMeVendorsVendorMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStatisticsChargingQueryKey(
  args: InferRequestType<typeof client.statistics.charging.$get>,
) {
  return ['statistics', '/statistics/charging', args] as const
}

export function getStatisticsChargingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.charging.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.statistics.charging.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.charging.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStatisticsChargingQueryKey>
  >({
    queryKey: getStatisticsChargingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.statistics.charging.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatisticsCharging<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statistics.charging.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.statistics.charging.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.statistics.charging.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStatisticsChargingQueryKey>
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
    return { ...getStatisticsChargingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteUsersUserIdAuthorization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteUsersUserIdAuthorizationMutationOptions<
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

export function createPostUsersUserIdLink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostUsersUserIdLinkMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getVehiclesQueryKey(args: InferRequestType<typeof client.vehicles.$get>) {
  return ['vehicles', '/vehicles', args] as const
}

export function getVehiclesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicles.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.vehicles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVehiclesQueryKey>
  >({
    queryKey: getVehiclesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vehicles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVehicles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicles.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.vehicles.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicles.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getVehiclesQueryKey>
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
    return { ...getVehiclesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getVehiclesVehicleIdQueryKey(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['$get']>,
) {
  return ['vehicles', '/vehicles/:vehicleId', args] as const
}

export function getVehiclesVehicleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVehiclesVehicleIdQueryKey>
  >({
    queryKey: getVehiclesVehicleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vehicles[':vehicleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVehiclesVehicleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.vehicles)[':vehicleId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getVehiclesVehicleIdQueryKey>
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
    return { ...getVehiclesVehicleIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getVehiclesVehicleIdChargeStateQueryKey(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['charge-state']['$get']>,
) {
  return ['vehicles', '/vehicles/:vehicleId/charge-state', args] as const
}

export function getVehiclesVehicleIdChargeStateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['charge-state']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['charge-state']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVehiclesVehicleIdChargeStateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vehicles[':vehicleId']['charge-state'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVehiclesVehicleIdChargeState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['charge-state']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.vehicles)[':vehicleId']['charge-state']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getVehiclesVehicleIdChargeStateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostVehiclesVehicleIdCharging<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostVehiclesVehicleIdChargingMutationOptions<
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

export function getVehiclesVehicleIdInformationQueryKey(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['information']['$get']>,
) {
  return ['vehicles', '/vehicles/:vehicleId/information', args] as const
}

export function getVehiclesVehicleIdInformationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['information']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['information']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVehiclesVehicleIdInformationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vehicles[':vehicleId'].information.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVehiclesVehicleIdInformation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['information']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.vehicles)[':vehicleId']['information']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getVehiclesVehicleIdInformationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getVehiclesVehicleIdLocationQueryKey(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['location']['$get']>,
) {
  return ['vehicles', '/vehicles/:vehicleId/location', args] as const
}

export function getVehiclesVehicleIdLocationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['location']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['location']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVehiclesVehicleIdLocationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vehicles[':vehicleId'].location.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVehiclesVehicleIdLocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['location']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.vehicles)[':vehicleId']['location']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getVehiclesVehicleIdLocationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getVehiclesVehicleIdOdometerQueryKey(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['odometer']['$get']>,
) {
  return ['vehicles', '/vehicles/:vehicleId/odometer', args] as const
}

export function getVehiclesVehicleIdOdometerQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['odometer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['odometer']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVehiclesVehicleIdOdometerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vehicles[':vehicleId'].odometer.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVehiclesVehicleIdOdometer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['odometer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.vehicles)[':vehicleId']['odometer']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getVehiclesVehicleIdOdometerQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getVehiclesVehicleIdSmartChargingPolicyQueryKey(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['smart-charging-policy']['$get']>,
) {
  return ['vehicles', '/vehicles/:vehicleId/smart-charging-policy', args] as const
}

export function getVehiclesVehicleIdSmartChargingPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['smart-charging-policy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['smart-charging-policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVehiclesVehicleIdSmartChargingPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vehicles[':vehicleId']['smart-charging-policy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createVehiclesVehicleIdSmartChargingPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['smart-charging-policy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.vehicles)[':vehicleId']['smart-charging-policy']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getVehiclesVehicleIdSmartChargingPolicyQueryKey>
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
      ...getVehiclesVehicleIdSmartChargingPolicyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutVehiclesVehicleIdSmartChargingPolicy<
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
    const mutationDefaults = getPutVehiclesVehicleIdSmartChargingPolicyMutationOptions<
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

export function createPostVehiclesVehicleIdWatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostVehiclesVehicleIdWatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutWebhooksFirehose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.firehose.$put>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.webhooks.firehose.$put>,
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
    const mutationDefaults = getPutWebhooksFirehoseMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostWebhooksFirehoseTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.firehose.test.$post>>>
            >
          >,
          TError,
          void,
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
    const mutationDefaults = getPostWebhooksFirehoseTestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
