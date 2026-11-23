import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetChargersKey(args: InferRequestType<typeof client.chargers.$get>) {
  return ['chargers', '/chargers', args] as const
}

export function useGetChargers<TError = unknown>(
  args: InferRequestType<typeof client.chargers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chargers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChargersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chargers.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.chargers.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetChargers<TError = unknown>(
  args: InferRequestType<typeof client.chargers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chargers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChargersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chargers.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.chargers.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetChargersChargerIdKey(
  args: InferRequestType<(typeof client.chargers)[':chargerId']['$get']>,
) {
  return ['chargers', '/chargers/:chargerId', args] as const
}

export function useGetChargersChargerId<TError = unknown>(
  args: InferRequestType<(typeof client.chargers)[':chargerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.chargers)[':chargerId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChargersChargerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.chargers)[':chargerId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chargers[':chargerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChargersChargerId<TError = unknown>(
  args: InferRequestType<(typeof client.chargers)[':chargerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.chargers)[':chargerId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChargersChargerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.chargers)[':chargerId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.chargers[':chargerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChargersChargerIdChargingKey() {
  return ['chargers', '/chargers/:chargerId/charging', 'POST'] as const
}

export function usePostChargersChargerIdCharging<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.chargers)[':chargerId']['charging']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.chargers)[':chargerId']['charging']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChargersChargerIdChargingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.chargers)[':chargerId']['charging']['$post']> },
      ) => parseResponse(client.chargers[':chargerId'].charging.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChargingLocationsKey() {
  return ['charging-locations', '/charging-locations'] as const
}

export function useGetChargingLocations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['charging-locations']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChargingLocationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['charging-locations']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['charging-locations'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChargingLocations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['charging-locations']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetChargingLocationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['charging-locations']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['charging-locations'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChargingLocationsKey() {
  return ['charging-locations', '/charging-locations', 'POST'] as const
}

export function usePostChargingLocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['charging-locations']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['charging-locations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChargingLocationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['charging-locations']['$post']> },
      ) => parseResponse(client['charging-locations'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChargingLocationsChargingLocationIdKey(
  args: InferRequestType<(typeof client)['charging-locations'][':chargingLocationId']['$get']>,
) {
  return ['charging-locations', '/charging-locations/:chargingLocationId', args] as const
}

export function useGetChargingLocationsChargingLocationId<TError = unknown>(
  args: InferRequestType<(typeof client)['charging-locations'][':chargingLocationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['charging-locations'][':chargingLocationId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChargingLocationsChargingLocationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['charging-locations'][':chargingLocationId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['charging-locations'][':chargingLocationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChargingLocationsChargingLocationId<TError = unknown>(
  args: InferRequestType<(typeof client)['charging-locations'][':chargingLocationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['charging-locations'][':chargingLocationId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChargingLocationsChargingLocationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['charging-locations'][':chargingLocationId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['charging-locations'][':chargingLocationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutChargingLocationsChargingLocationIdKey() {
  return ['charging-locations', '/charging-locations/:chargingLocationId', 'PUT'] as const
}

export function usePutChargingLocationsChargingLocationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['charging-locations'][':chargingLocationId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['charging-locations'][':chargingLocationId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutChargingLocationsChargingLocationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['charging-locations'][':chargingLocationId']['$put']
          >
        },
      ) =>
        parseResponse(client['charging-locations'][':chargingLocationId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteChargingLocationsChargingLocationIdKey() {
  return ['charging-locations', '/charging-locations/:chargingLocationId', 'DELETE'] as const
}

export function useDeleteChargingLocationsChargingLocationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['charging-locations'][':chargingLocationId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChargingLocationsChargingLocationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['charging-locations'][':chargingLocationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['charging-locations'][':chargingLocationId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetHealthReadyKey() {
  return ['health', '/health/ready'] as const
}

export function useGetHealthReady<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthReadyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.ready.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthReady<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthReadyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.ready.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.ready.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHealthVendorsKey() {
  return ['health', '/health/vendors'] as const
}

export function useGetHealthVendors<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.vendors.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthVendorsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.vendors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.vendors.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthVendors<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.vendors.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthVendorsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.vendors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.vendors.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMeKey() {
  return ['me', '/me'] as const
}

export function useGetMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.me.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function getDeleteMeVendorsVendorKey() {
  return ['me', '/me/vendors/:vendor', 'DELETE'] as const
}

export function useDeleteMeVendorsVendor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.vendors)[':vendor']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.me.vendors)[':vendor']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMeVendorsVendorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.me.vendors)[':vendor']['$delete']> },
      ) => parseResponse(client.me.vendors[':vendor'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStatisticsChargingKey(
  args: InferRequestType<typeof client.statistics.charging.$get>,
) {
  return ['statistics', '/statistics/charging', args] as const
}

export function useGetStatisticsCharging<TError = unknown>(
  args: InferRequestType<typeof client.statistics.charging.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.statistics.charging.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatisticsChargingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.statistics.charging.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.statistics.charging.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatisticsCharging<TError = unknown>(
  args: InferRequestType<typeof client.statistics.charging.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.statistics.charging.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStatisticsChargingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.statistics.charging.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.statistics.charging.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsersUserIdKey() {
  return ['users', '/users/:userId', 'DELETE'] as const
}

export function useDeleteUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['$delete']> },
      ) => parseResponse(client.users[':userId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUsersUserIdAuthorizationKey() {
  return ['users', '/users/:userId/authorization', 'DELETE'] as const
}

export function useDeleteUsersUserIdAuthorization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':userId']['authorization']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['authorization']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsersUserIdAuthorizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.users)[':userId']['authorization']['$delete']> },
      ) => parseResponse(client.users[':userId'].authorization.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUserIdLinkKey() {
  return ['users', '/users/:userId/link', 'POST'] as const
}

export function usePostUsersUserIdLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['link']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':userId']['link']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUserIdLinkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':userId']['link']['$post']> },
      ) => parseResponse(client.users[':userId'].link.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVehiclesKey(args: InferRequestType<typeof client.vehicles.$get>) {
  return ['vehicles', '/vehicles', args] as const
}

export function useGetVehicles<TError = unknown>(
  args: InferRequestType<typeof client.vehicles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicles.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVehiclesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicles.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.vehicles.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetVehicles<TError = unknown>(
  args: InferRequestType<typeof client.vehicles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicles.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVehiclesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicles.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.vehicles.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetVehiclesVehicleIdKey(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['$get']>,
) {
  return ['vehicles', '/vehicles/:vehicleId', args] as const
}

export function useGetVehiclesVehicleId<TError = unknown>(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVehiclesVehicleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vehicles[':vehicleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVehiclesVehicleId<TError = unknown>(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVehiclesVehicleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vehicles[':vehicleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVehiclesVehicleIdChargeStateKey(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['charge-state']['$get']>,
) {
  return ['vehicles', '/vehicles/:vehicleId/charge-state', args] as const
}

export function useGetVehiclesVehicleIdChargeState<TError = unknown>(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['charge-state']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['charge-state']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVehiclesVehicleIdChargeStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['charge-state']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.vehicles[':vehicleId']['charge-state'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVehiclesVehicleIdChargeState<TError = unknown>(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['charge-state']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['charge-state']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVehiclesVehicleIdChargeStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['charge-state']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.vehicles[':vehicleId']['charge-state'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVehiclesVehicleIdChargingKey() {
  return ['vehicles', '/vehicles/:vehicleId/charging', 'POST'] as const
}

export function usePostVehiclesVehicleIdCharging<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['charging']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.vehicles)[':vehicleId']['charging']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVehiclesVehicleIdChargingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.vehicles)[':vehicleId']['charging']['$post']> },
      ) => parseResponse(client.vehicles[':vehicleId'].charging.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVehiclesVehicleIdInformationKey(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['information']['$get']>,
) {
  return ['vehicles', '/vehicles/:vehicleId/information', args] as const
}

export function useGetVehiclesVehicleIdInformation<TError = unknown>(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['information']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['information']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVehiclesVehicleIdInformationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['information']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.vehicles[':vehicleId'].information.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVehiclesVehicleIdInformation<TError = unknown>(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['information']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['information']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVehiclesVehicleIdInformationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['information']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.vehicles[':vehicleId'].information.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVehiclesVehicleIdLocationKey(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['location']['$get']>,
) {
  return ['vehicles', '/vehicles/:vehicleId/location', args] as const
}

export function useGetVehiclesVehicleIdLocation<TError = unknown>(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['location']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['location']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVehiclesVehicleIdLocationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['location']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vehicles[':vehicleId'].location.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVehiclesVehicleIdLocation<TError = unknown>(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['location']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['location']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVehiclesVehicleIdLocationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['location']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vehicles[':vehicleId'].location.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVehiclesVehicleIdOdometerKey(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['odometer']['$get']>,
) {
  return ['vehicles', '/vehicles/:vehicleId/odometer', args] as const
}

export function useGetVehiclesVehicleIdOdometer<TError = unknown>(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['odometer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['odometer']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVehiclesVehicleIdOdometerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['odometer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vehicles[':vehicleId'].odometer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVehiclesVehicleIdOdometer<TError = unknown>(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['odometer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['odometer']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVehiclesVehicleIdOdometerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['odometer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vehicles[':vehicleId'].odometer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVehiclesVehicleIdSmartChargingPolicyKey(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['smart-charging-policy']['$get']>,
) {
  return ['vehicles', '/vehicles/:vehicleId/smart-charging-policy', args] as const
}

export function useGetVehiclesVehicleIdSmartChargingPolicy<TError = unknown>(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['smart-charging-policy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.vehicles)[':vehicleId']['smart-charging-policy']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVehiclesVehicleIdSmartChargingPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.vehicles)[':vehicleId']['smart-charging-policy']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.vehicles[':vehicleId']['smart-charging-policy'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVehiclesVehicleIdSmartChargingPolicy<TError = unknown>(
  args: InferRequestType<(typeof client.vehicles)[':vehicleId']['smart-charging-policy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.vehicles)[':vehicleId']['smart-charging-policy']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetVehiclesVehicleIdSmartChargingPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.vehicles)[':vehicleId']['smart-charging-policy']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.vehicles[':vehicleId']['smart-charging-policy'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutVehiclesVehicleIdSmartChargingPolicyKey() {
  return ['vehicles', '/vehicles/:vehicleId/smart-charging-policy', 'PUT'] as const
}

export function usePutVehiclesVehicleIdSmartChargingPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.vehicles)[':vehicleId']['smart-charging-policy']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutVehiclesVehicleIdSmartChargingPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.vehicles)[':vehicleId']['smart-charging-policy']['$put']
          >
        },
      ) =>
        parseResponse(
          client.vehicles[':vehicleId']['smart-charging-policy'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostVehiclesVehicleIdWatchKey() {
  return ['vehicles', '/vehicles/:vehicleId/watch', 'POST'] as const
}

export function usePostVehiclesVehicleIdWatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vehicles)[':vehicleId']['watch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.vehicles)[':vehicleId']['watch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVehiclesVehicleIdWatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.vehicles)[':vehicleId']['watch']['$post']> },
      ) => parseResponse(client.vehicles[':vehicleId'].watch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutWebhooksFirehoseKey() {
  return ['webhooks', '/webhooks/firehose', 'PUT'] as const
}

export function usePutWebhooksFirehose<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.firehose.$put>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.webhooks.firehose.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutWebhooksFirehoseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhooks.firehose.$put> }) =>
        parseResponse(client.webhooks.firehose.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhooksFirehoseTestKey() {
  return ['webhooks', '/webhooks/firehose/test', 'POST'] as const
}

export function usePostWebhooksFirehoseTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.firehose.test.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksFirehoseTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.webhooks.firehose.test.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}
