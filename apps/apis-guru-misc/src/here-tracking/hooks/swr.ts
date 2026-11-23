import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAliasesKey() {
  return ['aliases'] as const
}

export function getAssociationsKey() {
  return ['associations'] as const
}

export function getBulkjobsKey() {
  return ['bulkjobs'] as const
}

export function getC2cKey() {
  return ['c2c'] as const
}

export function getDeviceAssociationsKey() {
  return ['device-associations'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getGeofenceAssociationsKey() {
  return ['geofence-associations'] as const
}

export function getGeofencesKey() {
  return ['geofences'] as const
}

export function getLabelsKey() {
  return ['labels'] as const
}

export function getLargedataKey() {
  return ['largedata'] as const
}

export function getLocationsKey() {
  return ['locations'] as const
}

export function getMetadataKey() {
  return ['metadata'] as const
}

export function getNotificationsKey() {
  return ['notifications'] as const
}

export function getRegistryKey() {
  return ['registry'] as const
}

export function getReportsKey() {
  return ['reports'] as const
}

export function getRulesKey() {
  return ['rules'] as const
}

export function getSensorsKey() {
  return ['sensors'] as const
}

export function getShadowsKey() {
  return ['shadows'] as const
}

export function getShipmentReportsKey() {
  return ['shipment-reports'] as const
}

export function getShipmentsKey() {
  return ['shipments'] as const
}

export function getTracesKey() {
  return ['traces'] as const
}

export function getTransitionsKey() {
  return ['transitions'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getV3Key() {
  return ['v3'] as const
}

export function getGetAliasesV2Key(args: InferRequestType<typeof client.aliases.v2.$get>) {
  const { header: _, ...keyArgs } = args
  return ['aliases', '/aliases/v2', keyArgs] as const
}

export function useGetAliasesV2<TError = unknown>(
  args: InferRequestType<typeof client.aliases.v2.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAliasesV2Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aliases.v2.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAliasesV2<TError = unknown>(
  args: InferRequestType<typeof client.aliases.v2.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAliasesV2Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aliases.v2.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAliasesV2HealthKey() {
  return ['aliases', '/aliases/v2/health'] as const
}

export function useGetAliasesV2Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAliasesV2HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aliases.v2.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAliasesV2Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAliasesV2HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aliases.v2.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAliasesV2TrackingIdKey(
  args: InferRequestType<typeof client.aliases.v2.trackingId.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['aliases', '/aliases/v2/trackingId', keyArgs] as const
}

export function useGetAliasesV2TrackingId<TError = unknown>(
  args: InferRequestType<typeof client.aliases.v2.trackingId.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.trackingId.$get>>>
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
        ? getGetAliasesV2TrackingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.trackingId.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aliases.v2.trackingId.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAliasesV2TrackingId<TError = unknown>(
  args: InferRequestType<typeof client.aliases.v2.trackingId.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.trackingId.$get>>>
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
        ? getGetAliasesV2TrackingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.trackingId.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aliases.v2.trackingId.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAliasesV2VersionKey() {
  return ['aliases', '/aliases/v2/version'] as const
}

export function useGetAliasesV2Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAliasesV2VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aliases.v2.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAliasesV2Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAliasesV2VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aliases.v2.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAliasesV2TrackingId2Key(
  args: InferRequestType<(typeof client.aliases.v2)[':trackingId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['aliases', '/aliases/v2/:trackingId', keyArgs] as const
}

export function useGetAliasesV2TrackingId2<TError = unknown>(
  args: InferRequestType<(typeof client.aliases.v2)[':trackingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId']['$get']>>
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
        ? getGetAliasesV2TrackingId2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aliases.v2[':trackingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAliasesV2TrackingId2<TError = unknown>(
  args: InferRequestType<(typeof client.aliases.v2)[':trackingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId']['$get']>>
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
        ? getGetAliasesV2TrackingId2Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aliases.v2[':trackingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAliasesV2TrackingId2Key() {
  return ['aliases', '/aliases/v2/:trackingId', 'DELETE'] as const
}

export function useDeleteAliasesV2TrackingId2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.aliases.v2)[':trackingId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAliasesV2TrackingId2Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.aliases.v2)[':trackingId']['$delete']> },
      ) => parseResponse(client.aliases.v2[':trackingId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAliasesV2TrackingIdBatchKey() {
  return ['aliases', '/aliases/v2/:trackingId/batch', 'PUT'] as const
}

export function usePutAliasesV2TrackingIdBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId']['batch']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.aliases.v2)[':trackingId']['batch']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAliasesV2TrackingIdBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.aliases.v2)[':trackingId']['batch']['$put']> },
      ) => parseResponse(client.aliases.v2[':trackingId'].batch.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAliasesV2TrackingIdTypeKey(
  args: InferRequestType<(typeof client.aliases.v2)[':trackingId'][':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['aliases', '/aliases/v2/:trackingId/:type', keyArgs] as const
}

export function useGetAliasesV2TrackingIdType<TError = unknown>(
  args: InferRequestType<(typeof client.aliases.v2)[':trackingId'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId'][':type']['$get']>>
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
        ? getGetAliasesV2TrackingIdTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.aliases.v2[':trackingId'][':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAliasesV2TrackingIdType<TError = unknown>(
  args: InferRequestType<(typeof client.aliases.v2)[':trackingId'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId'][':type']['$get']>>
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
        ? getGetAliasesV2TrackingIdTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.aliases.v2[':trackingId'][':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAliasesV2TrackingIdTypeKey() {
  return ['aliases', '/aliases/v2/:trackingId/:type', 'DELETE'] as const
}

export function useDeleteAliasesV2TrackingIdType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId'][':type']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.aliases.v2)[':trackingId'][':type']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAliasesV2TrackingIdTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.aliases.v2)[':trackingId'][':type']['$delete']> },
      ) => parseResponse(client.aliases.v2[':trackingId'][':type'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAliasesV2TrackingIdTypeExternalIdKey() {
  return ['aliases', '/aliases/v2/:trackingId/:type/:externalId', 'PUT'] as const
}

export function usePutAliasesV2TrackingIdTypeExternalId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.aliases.v2)[':trackingId'][':type'][':externalId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.aliases.v2)[':trackingId'][':type'][':externalId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAliasesV2TrackingIdTypeExternalIdKey()
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
            (typeof client.aliases.v2)[':trackingId'][':type'][':externalId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.aliases.v2[':trackingId'][':type'][':externalId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAliasesV2TrackingIdTypeExternalIdKey() {
  return ['aliases', '/aliases/v2/:trackingId/:type/:externalId', 'DELETE'] as const
}

export function useDeleteAliasesV2TrackingIdTypeExternalId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.aliases.v2)[':trackingId'][':type'][':externalId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.aliases.v2)[':trackingId'][':type'][':externalId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAliasesV2TrackingIdTypeExternalIdKey()
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
            (typeof client.aliases.v2)[':trackingId'][':type'][':externalId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.aliases.v2[':trackingId'][':type'][':externalId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAssociationsV3DevicesBatchUpdateKey() {
  return ['associations', '/associations/v3/devices/batchUpdate', 'PUT'] as const
}

export function usePutAssociationsV3DevicesBatchUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.associations.v3.devices.batchUpdate.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.associations.v3.devices.batchUpdate.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAssociationsV3DevicesBatchUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.associations.v3.devices.batchUpdate.$put> },
      ) => parseResponse(client.associations.v3.devices.batchUpdate.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssociationsV3DevicesTrackingIdBatchCreateKey() {
  return ['associations', '/associations/v3/devices/:trackingId/batchCreate', 'POST'] as const
}

export function usePostAssociationsV3DevicesTrackingIdBatchCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.associations.v3.devices)[':trackingId']['batchCreate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.associations.v3.devices)[':trackingId']['batchCreate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssociationsV3DevicesTrackingIdBatchCreateKey()
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
            (typeof client.associations.v3.devices)[':trackingId']['batchCreate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.associations.v3.devices[':trackingId'].batchCreate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAssociationsV3DevicesTrackingIdBatchDeleteKey() {
  return ['associations', '/associations/v3/devices/:trackingId/batchDelete', 'POST'] as const
}

export function usePostAssociationsV3DevicesTrackingIdBatchDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.associations.v3.devices)[':trackingId']['batchDelete']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.associations.v3.devices)[':trackingId']['batchDelete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssociationsV3DevicesTrackingIdBatchDeleteKey()
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
            (typeof client.associations.v3.devices)[':trackingId']['batchDelete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.associations.v3.devices[':trackingId'].batchDelete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAssociationsV3GeofencesGeofenceIdKey(
  args: InferRequestType<(typeof client.associations.v3.geofences)[':geofenceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['associations', '/associations/v3/geofences/:geofenceId', keyArgs] as const
}

export function useGetAssociationsV3GeofencesGeofenceId<TError = unknown>(
  args: InferRequestType<(typeof client.associations.v3.geofences)[':geofenceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.associations.v3.geofences)[':geofenceId']['$get']>>
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
        ? getGetAssociationsV3GeofencesGeofenceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.associations.v3.geofences)[':geofenceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.associations.v3.geofences[':geofenceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssociationsV3GeofencesGeofenceId<TError = unknown>(
  args: InferRequestType<(typeof client.associations.v3.geofences)[':geofenceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.associations.v3.geofences)[':geofenceId']['$get']>>
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
        ? getGetAssociationsV3GeofencesGeofenceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.associations.v3.geofences)[':geofenceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.associations.v3.geofences[':geofenceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAssociationsV3HealthKey() {
  return ['associations', '/associations/v3/health'] as const
}

export function useGetAssociationsV3Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.associations.v3.health.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAssociationsV3HealthKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.associations.v3.health.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.associations.v3.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssociationsV3Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.associations.v3.health.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAssociationsV3HealthKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.associations.v3.health.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.associations.v3.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAssociationsV3RulesRuleIdKey(
  args: InferRequestType<(typeof client.associations.v3.rules)[':ruleId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['associations', '/associations/v3/rules/:ruleId', keyArgs] as const
}

export function useGetAssociationsV3RulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.associations.v3.rules)[':ruleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.associations.v3.rules)[':ruleId']['$get']>>
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
        ? getGetAssociationsV3RulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.associations.v3.rules)[':ruleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.associations.v3.rules[':ruleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssociationsV3RulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.associations.v3.rules)[':ruleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.associations.v3.rules)[':ruleId']['$get']>>
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
        ? getGetAssociationsV3RulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.associations.v3.rules)[':ruleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.associations.v3.rules[':ruleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAssociationsV3SensorsSensorRuleIdKey(
  args: InferRequestType<(typeof client.associations.v3.sensors)[':sensorRuleId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['associations', '/associations/v3/sensors/:sensorRuleId', keyArgs] as const
}

export function useGetAssociationsV3SensorsSensorRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.associations.v3.sensors)[':sensorRuleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.associations.v3.sensors)[':sensorRuleId']['$get']>>
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
        ? getGetAssociationsV3SensorsSensorRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.associations.v3.sensors)[':sensorRuleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.associations.v3.sensors[':sensorRuleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssociationsV3SensorsSensorRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.associations.v3.sensors)[':sensorRuleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.associations.v3.sensors)[':sensorRuleId']['$get']>>
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
        ? getGetAssociationsV3SensorsSensorRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.associations.v3.sensors)[':sensorRuleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.associations.v3.sensors[':sensorRuleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAssociationsV3VersionKey() {
  return ['associations', '/associations/v3/version'] as const
}

export function useGetAssociationsV3Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.associations.v3.version.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAssociationsV3VersionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.associations.v3.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.associations.v3.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssociationsV3Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.associations.v3.version.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAssociationsV3VersionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.associations.v3.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.associations.v3.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAssociationsV3TrackingIdGeofencesKey(
  args: InferRequestType<(typeof client.associations.v3)[':trackingId']['geofences']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['associations', '/associations/v3/:trackingId/geofences', keyArgs] as const
}

export function useGetAssociationsV3TrackingIdGeofences<TError = unknown>(
  args: InferRequestType<(typeof client.associations.v3)[':trackingId']['geofences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['geofences']['$get']>>
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
        ? getGetAssociationsV3TrackingIdGeofencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['geofences']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.associations.v3[':trackingId'].geofences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssociationsV3TrackingIdGeofences<TError = unknown>(
  args: InferRequestType<(typeof client.associations.v3)[':trackingId']['geofences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['geofences']['$get']>>
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
        ? getGetAssociationsV3TrackingIdGeofencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['geofences']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.associations.v3[':trackingId'].geofences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAssociationsV3TrackingIdGeofencesGeofenceIdKey() {
  return ['associations', '/associations/v3/:trackingId/geofences/:geofenceId', 'PUT'] as const
}

export function usePutAssociationsV3TrackingIdGeofencesGeofenceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.associations.v3)[':trackingId']['geofences'][':geofenceId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.associations.v3)[':trackingId']['geofences'][':geofenceId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAssociationsV3TrackingIdGeofencesGeofenceIdKey()
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
            (typeof client.associations.v3)[':trackingId']['geofences'][':geofenceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.associations.v3[':trackingId'].geofences[':geofenceId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAssociationsV3TrackingIdGeofencesGeofenceIdKey() {
  return ['associations', '/associations/v3/:trackingId/geofences/:geofenceId', 'DELETE'] as const
}

export function useDeleteAssociationsV3TrackingIdGeofencesGeofenceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.associations.v3)[':trackingId']['geofences'][':geofenceId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.associations.v3)[':trackingId']['geofences'][':geofenceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAssociationsV3TrackingIdGeofencesGeofenceIdKey()
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
            (typeof client.associations.v3)[':trackingId']['geofences'][':geofenceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.associations.v3[':trackingId'].geofences[':geofenceId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAssociationsV3TrackingIdRulesKey(
  args: InferRequestType<(typeof client.associations.v3)[':trackingId']['rules']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['associations', '/associations/v3/:trackingId/rules', keyArgs] as const
}

export function useGetAssociationsV3TrackingIdRules<TError = unknown>(
  args: InferRequestType<(typeof client.associations.v3)[':trackingId']['rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['rules']['$get']>>
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
        ? getGetAssociationsV3TrackingIdRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.associations.v3[':trackingId'].rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssociationsV3TrackingIdRules<TError = unknown>(
  args: InferRequestType<(typeof client.associations.v3)[':trackingId']['rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['rules']['$get']>>
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
        ? getGetAssociationsV3TrackingIdRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.associations.v3[':trackingId'].rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAssociationsV3TrackingIdRulesRuleIdKey() {
  return ['associations', '/associations/v3/:trackingId/rules/:ruleId', 'PUT'] as const
}

export function usePutAssociationsV3TrackingIdRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.associations.v3)[':trackingId']['rules'][':ruleId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.associations.v3)[':trackingId']['rules'][':ruleId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAssociationsV3TrackingIdRulesRuleIdKey()
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
            (typeof client.associations.v3)[':trackingId']['rules'][':ruleId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.associations.v3[':trackingId'].rules[':ruleId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAssociationsV3TrackingIdRulesRuleIdKey() {
  return ['associations', '/associations/v3/:trackingId/rules/:ruleId', 'DELETE'] as const
}

export function useDeleteAssociationsV3TrackingIdRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.associations.v3)[':trackingId']['rules'][':ruleId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.associations.v3)[':trackingId']['rules'][':ruleId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAssociationsV3TrackingIdRulesRuleIdKey()
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
            (typeof client.associations.v3)[':trackingId']['rules'][':ruleId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.associations.v3[':trackingId'].rules[':ruleId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAssociationsV3TrackingIdSensorsKey(
  args: InferRequestType<(typeof client.associations.v3)[':trackingId']['sensors']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['associations', '/associations/v3/:trackingId/sensors', keyArgs] as const
}

export function useGetAssociationsV3TrackingIdSensors<TError = unknown>(
  args: InferRequestType<(typeof client.associations.v3)[':trackingId']['sensors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['sensors']['$get']>>
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
        ? getGetAssociationsV3TrackingIdSensorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['sensors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.associations.v3[':trackingId'].sensors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAssociationsV3TrackingIdSensors<TError = unknown>(
  args: InferRequestType<(typeof client.associations.v3)[':trackingId']['sensors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['sensors']['$get']>>
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
        ? getGetAssociationsV3TrackingIdSensorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['sensors']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.associations.v3[':trackingId'].sensors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAssociationsV3TrackingIdSensorsSensorRuleIdKey() {
  return ['associations', '/associations/v3/:trackingId/sensors/:sensorRuleId', 'PUT'] as const
}

export function usePutAssociationsV3TrackingIdSensorsSensorRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.associations.v3)[':trackingId']['sensors'][':sensorRuleId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.associations.v3)[':trackingId']['sensors'][':sensorRuleId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAssociationsV3TrackingIdSensorsSensorRuleIdKey()
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
            (typeof client.associations.v3)[':trackingId']['sensors'][':sensorRuleId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.associations.v3[':trackingId'].sensors[':sensorRuleId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAssociationsV3TrackingIdSensorsSensorRuleIdKey() {
  return ['associations', '/associations/v3/:trackingId/sensors/:sensorRuleId', 'DELETE'] as const
}

export function useDeleteAssociationsV3TrackingIdSensorsSensorRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.associations.v3)[':trackingId']['sensors'][':sensorRuleId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.associations.v3)[':trackingId']['sensors'][':sensorRuleId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAssociationsV3TrackingIdSensorsSensorRuleIdKey()
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
            (typeof client.associations.v3)[':trackingId']['sensors'][':sensorRuleId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.associations.v3[':trackingId'].sensors[':sensorRuleId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBulkjobsV4DeviceUploadsKey(
  args: InferRequestType<typeof client.bulkjobs.v4.deviceUploads.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['bulkjobs', '/bulkjobs/v4/deviceUploads', keyArgs] as const
}

export function useGetBulkjobsV4DeviceUploads<TError = unknown>(
  args: InferRequestType<typeof client.bulkjobs.v4.deviceUploads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.deviceUploads.$get>>>
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
        ? getGetBulkjobsV4DeviceUploadsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.deviceUploads.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bulkjobs.v4.deviceUploads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBulkjobsV4DeviceUploads<TError = unknown>(
  args: InferRequestType<typeof client.bulkjobs.v4.deviceUploads.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.deviceUploads.$get>>>
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
        ? getGetBulkjobsV4DeviceUploadsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.deviceUploads.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bulkjobs.v4.deviceUploads.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBulkjobsV4DeviceUploadsKey() {
  return ['bulkjobs', '/bulkjobs/v4/deviceUploads', 'POST'] as const
}

export function usePostBulkjobsV4DeviceUploads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.deviceUploads.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.bulkjobs.v4.deviceUploads.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBulkjobsV4DeviceUploadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.bulkjobs.v4.deviceUploads.$post> },
      ) => parseResponse(client.bulkjobs.v4.deviceUploads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBulkjobsV4DeviceUploadsJobIdKey() {
  return ['bulkjobs', '/bulkjobs/v4/deviceUploads/:jobId', 'PATCH'] as const
}

export function usePatchBulkjobsV4DeviceUploadsJobId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBulkjobsV4DeviceUploadsJobIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['$patch']> },
      ) => parseResponse(client.bulkjobs.v4.deviceUploads[':jobId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBulkjobsV4DeviceUploadsJobIdResultsKey(
  args: InferRequestType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['results']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['bulkjobs', '/bulkjobs/v4/deviceUploads/:jobId/results', keyArgs] as const
}

export function useGetBulkjobsV4DeviceUploadsJobIdResults<TError = unknown>(
  args: InferRequestType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['results']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['results']['$get']>
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
        ? getGetBulkjobsV4DeviceUploadsJobIdResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['results']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bulkjobs.v4.deviceUploads[':jobId'].results.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBulkjobsV4DeviceUploadsJobIdResults<TError = unknown>(
  args: InferRequestType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['results']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['results']['$get']>
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
        ? getGetBulkjobsV4DeviceUploadsJobIdResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['results']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bulkjobs.v4.deviceUploads[':jobId'].results.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBulkjobsV4DeviceUploadsJobIdStatusKey(
  args: InferRequestType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['status']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['bulkjobs', '/bulkjobs/v4/deviceUploads/:jobId/status', keyArgs] as const
}

export function useGetBulkjobsV4DeviceUploadsJobIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['status']['$get']>
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
        ? getGetBulkjobsV4DeviceUploadsJobIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['status']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bulkjobs.v4.deviceUploads[':jobId'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBulkjobsV4DeviceUploadsJobIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['status']['$get']>
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
        ? getGetBulkjobsV4DeviceUploadsJobIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['status']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bulkjobs.v4.deviceUploads[':jobId'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBulkjobsV4HealthKey() {
  return ['bulkjobs', '/bulkjobs/v4/health'] as const
}

export function useGetBulkjobsV4Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBulkjobsV4HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bulkjobs.v4.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBulkjobsV4Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBulkjobsV4HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bulkjobs.v4.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBulkjobsV4VersionKey() {
  return ['bulkjobs', '/bulkjobs/v4/version'] as const
}

export function useGetBulkjobsV4Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBulkjobsV4VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bulkjobs.v4.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBulkjobsV4Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBulkjobsV4VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bulkjobs.v4.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostC2cV4CallbackKey() {
  return ['c2c', '/c2c/v4/callback', 'POST'] as const
}

export function usePostC2cV4Callback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.callback.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.c2c.v4.callback.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostC2cV4CallbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.c2c.v4.callback.$post> }) =>
        parseResponse(client.c2c.v4.callback.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetC2cV4ConnectorsKey(
  args: InferRequestType<typeof client.c2c.v4.connectors.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['c2c', '/c2c/v4/connectors', keyArgs] as const
}

export function useGetC2cV4Connectors<TError = unknown>(
  args: InferRequestType<typeof client.c2c.v4.connectors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.connectors.$get>>>>
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
        ? getGetC2cV4ConnectorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.connectors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.c2c.v4.connectors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetC2cV4Connectors<TError = unknown>(
  args: InferRequestType<typeof client.c2c.v4.connectors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.connectors.$get>>>>
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
        ? getGetC2cV4ConnectorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.connectors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.c2c.v4.connectors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostC2cV4ConnectorsKey() {
  return ['c2c', '/c2c/v4/connectors', 'POST'] as const
}

export function usePostC2cV4Connectors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.connectors.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.c2c.v4.connectors.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostC2cV4ConnectorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.c2c.v4.connectors.$post> }) =>
        parseResponse(client.c2c.v4.connectors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetC2cV4ConnectorsExtDevicesExternalDeviceIdKey(
  args: InferRequestType<
    (typeof client.c2c.v4.connectors)['ext-devices'][':externalDeviceId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['c2c', '/c2c/v4/connectors/ext-devices/:externalDeviceId', keyArgs] as const
}

export function useGetC2cV4ConnectorsExtDevicesExternalDeviceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.c2c.v4.connectors)['ext-devices'][':externalDeviceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.c2c.v4.connectors)['ext-devices'][':externalDeviceId']['$get']
              >
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
        ? getGetC2cV4ConnectorsExtDevicesExternalDeviceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.c2c.v4.connectors)['ext-devices'][':externalDeviceId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.c2c.v4.connectors['ext-devices'][':externalDeviceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetC2cV4ConnectorsExtDevicesExternalDeviceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.c2c.v4.connectors)['ext-devices'][':externalDeviceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.c2c.v4.connectors)['ext-devices'][':externalDeviceId']['$get']
              >
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
        ? getGetC2cV4ConnectorsExtDevicesExternalDeviceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.c2c.v4.connectors)['ext-devices'][':externalDeviceId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.c2c.v4.connectors['ext-devices'][':externalDeviceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetC2cV4ConnectorsConnectorIdKey(
  args: InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['$get']>,
) {
  return ['c2c', '/c2c/v4/connectors/:connectorId', args] as const
}

export function useGetC2cV4ConnectorsConnectorId<TError = unknown>(
  args: InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.c2c.v4.connectors)[':connectorId']['$get']>>
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
        ? getGetC2cV4ConnectorsConnectorIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.c2c.v4.connectors)[':connectorId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.c2c.v4.connectors[':connectorId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetC2cV4ConnectorsConnectorId<TError = unknown>(
  args: InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.c2c.v4.connectors)[':connectorId']['$get']>>
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
        ? getGetC2cV4ConnectorsConnectorIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.c2c.v4.connectors)[':connectorId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.c2c.v4.connectors[':connectorId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutC2cV4ConnectorsConnectorIdKey() {
  return ['c2c', '/c2c/v4/connectors/:connectorId', 'PUT'] as const
}

export function usePutC2cV4ConnectorsConnectorId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.c2c.v4.connectors)[':connectorId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutC2cV4ConnectorsConnectorIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['$put']> },
      ) => parseResponse(client.c2c.v4.connectors[':connectorId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteC2cV4ConnectorsConnectorIdKey() {
  return ['c2c', '/c2c/v4/connectors/:connectorId', 'DELETE'] as const
}

export function useDeleteC2cV4ConnectorsConnectorId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.c2c.v4.connectors)[':connectorId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteC2cV4ConnectorsConnectorIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['$delete']> },
      ) => parseResponse(client.c2c.v4.connectors[':connectorId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetC2cV4ConnectorsConnectorIdExtDevicesKey(
  args: InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['c2c', '/c2c/v4/connectors/:connectorId/ext-devices', keyArgs] as const
}

export function useGetC2cV4ConnectorsConnectorIdExtDevices<TError = unknown>(
  args: InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$get']>
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
        ? getGetC2cV4ConnectorsConnectorIdExtDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.c2c.v4.connectors[':connectorId']['ext-devices'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetC2cV4ConnectorsConnectorIdExtDevices<TError = unknown>(
  args: InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$get']>
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
        ? getGetC2cV4ConnectorsConnectorIdExtDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.c2c.v4.connectors[':connectorId']['ext-devices'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostC2cV4ConnectorsConnectorIdExtDevicesKey() {
  return ['c2c', '/c2c/v4/connectors/:connectorId/ext-devices', 'POST'] as const
}

export function usePostC2cV4ConnectorsConnectorIdExtDevices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostC2cV4ConnectorsConnectorIdExtDevicesKey()
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
            (typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$post']
          >
        },
      ) =>
        parseResponse(
          client.c2c.v4.connectors[':connectorId']['ext-devices'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteC2cV4ConnectorsConnectorIdExtDevicesBatchKey() {
  return ['c2c', '/c2c/v4/connectors/:connectorId/ext-devices-batch', 'DELETE'] as const
}

export function useDeleteC2cV4ConnectorsConnectorIdExtDevicesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.c2c.v4.connectors)[':connectorId']['ext-devices-batch']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.c2c.v4.connectors)[':connectorId']['ext-devices-batch']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteC2cV4ConnectorsConnectorIdExtDevicesBatchKey()
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
            (typeof client.c2c.v4.connectors)[':connectorId']['ext-devices-batch']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.c2c.v4.connectors[':connectorId']['ext-devices-batch'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteC2cV4ConnectorsConnectorIdExtDevicesExternalDeviceIdKey() {
  return ['c2c', '/c2c/v4/connectors/:connectorId/ext-devices/:externalDeviceId', 'DELETE'] as const
}

export function useDeleteC2cV4ConnectorsConnectorIdExtDevicesExternalDeviceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.c2c.v4.connectors)[':connectorId']['ext-devices'][':externalDeviceId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.c2c.v4.connectors)[':connectorId']['ext-devices'][':externalDeviceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteC2cV4ConnectorsConnectorIdExtDevicesExternalDeviceIdKey()
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
            (typeof client.c2c.v4.connectors)[':connectorId']['ext-devices'][':externalDeviceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.c2c.v4.connectors[':connectorId']['ext-devices'][':externalDeviceId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetC2cV4DriversKey(args: InferRequestType<typeof client.c2c.v4.drivers.$get>) {
  const { header: _, ...keyArgs } = args
  return ['c2c', '/c2c/v4/drivers', keyArgs] as const
}

export function useGetC2cV4Drivers<TError = unknown>(
  args: InferRequestType<typeof client.c2c.v4.drivers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.drivers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetC2cV4DriversKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.drivers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.c2c.v4.drivers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetC2cV4Drivers<TError = unknown>(
  args: InferRequestType<typeof client.c2c.v4.drivers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.drivers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetC2cV4DriversKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.drivers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.c2c.v4.drivers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostC2cV4DriversDriverIdVerifyKey() {
  return ['c2c', '/c2c/v4/drivers/:driverId/verify', 'POST'] as const
}

export function usePostC2cV4DriversDriverIdVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.c2c.v4.drivers)[':driverId']['verify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.c2c.v4.drivers)[':driverId']['verify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostC2cV4DriversDriverIdVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.c2c.v4.drivers)[':driverId']['verify']['$post']>
        },
      ) => parseResponse(client.c2c.v4.drivers[':driverId'].verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetC2cV4HealthKey() {
  return ['c2c', '/c2c/v4/health'] as const
}

export function useGetC2cV4Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetC2cV4HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.c2c.v4.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetC2cV4Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetC2cV4HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.c2c.v4.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetC2cV4VersionKey() {
  return ['c2c', '/c2c/v4/version'] as const
}

export function useGetC2cV4Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetC2cV4VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.c2c.v4.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetC2cV4Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetC2cV4VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.c2c.v4.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDeviceAssociationsV2HealthKey() {
  return ['device-associations', '/device-associations/v2/health'] as const
}

export function useGetDeviceAssociationsV2Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['device-associations']['v2']['health']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeviceAssociationsV2HealthKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['device-associations']['v2']['health']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['device-associations'].v2.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeviceAssociationsV2Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['device-associations']['v2']['health']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeviceAssociationsV2HealthKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['device-associations']['v2']['health']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['device-associations'].v2.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDeviceAssociationsV2VersionKey() {
  return ['device-associations', '/device-associations/v2/version'] as const
}

export function useGetDeviceAssociationsV2Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['device-associations']['v2']['version']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeviceAssociationsV2VersionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['device-associations']['v2']['version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['device-associations'].v2.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeviceAssociationsV2Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['device-associations']['v2']['version']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeviceAssociationsV2VersionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['device-associations']['v2']['version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['device-associations'].v2.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDeviceAssociationsV2TrackingIdGeofencesKey(
  args: InferRequestType<
    (typeof client)['device-associations']['v2'][':trackingId']['geofences']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['device-associations', '/device-associations/v2/:trackingId/geofences', keyArgs] as const
}

export function useGetDeviceAssociationsV2TrackingIdGeofences<TError = unknown>(
  args: InferRequestType<
    (typeof client)['device-associations']['v2'][':trackingId']['geofences']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['device-associations']['v2'][':trackingId']['geofences']['$get']
              >
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
        ? getGetDeviceAssociationsV2TrackingIdGeofencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['device-associations']['v2'][':trackingId']['geofences']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['device-associations'].v2[':trackingId'].geofences.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeviceAssociationsV2TrackingIdGeofences<TError = unknown>(
  args: InferRequestType<
    (typeof client)['device-associations']['v2'][':trackingId']['geofences']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['device-associations']['v2'][':trackingId']['geofences']['$get']
              >
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
        ? getGetDeviceAssociationsV2TrackingIdGeofencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['device-associations']['v2'][':trackingId']['geofences']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['device-associations'].v2[':trackingId'].geofences.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetEventsV3Key(args: InferRequestType<typeof client.events.v3.$get>) {
  const { header: _, ...keyArgs } = args
  return ['events', '/events/v3', keyArgs] as const
}

export function useGetEventsV3<TError = unknown>(
  args: InferRequestType<typeof client.events.v3.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsV3Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.v3.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsV3<TError = unknown>(
  args: InferRequestType<typeof client.events.v3.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsV3Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.v3.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventsV3HealthKey() {
  return ['events', '/events/v3/health'] as const
}

export function useGetEventsV3Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsV3HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.v3.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsV3Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsV3HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.v3.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventsV3StatusesKey(
  args: InferRequestType<typeof client.events.v3.statuses.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['events', '/events/v3/statuses', keyArgs] as const
}

export function useGetEventsV3Statuses<TError = unknown>(
  args: InferRequestType<typeof client.events.v3.statuses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.statuses.$get>>>>
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
        ? getGetEventsV3StatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.statuses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.v3.statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsV3Statuses<TError = unknown>(
  args: InferRequestType<typeof client.events.v3.statuses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.statuses.$get>>>>
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
        ? getGetEventsV3StatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.statuses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.v3.statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventsV3StatusesDeviceCountsKey(
  args: InferRequestType<typeof client.events.v3.statuses.deviceCounts.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['events', '/events/v3/statuses/deviceCounts', keyArgs] as const
}

export function useGetEventsV3StatusesDeviceCounts<TError = unknown>(
  args: InferRequestType<typeof client.events.v3.statuses.deviceCounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.events.v3.statuses.deviceCounts.$get>>
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
        ? getGetEventsV3StatusesDeviceCountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.events.v3.statuses.deviceCounts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.v3.statuses.deviceCounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsV3StatusesDeviceCounts<TError = unknown>(
  args: InferRequestType<typeof client.events.v3.statuses.deviceCounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.events.v3.statuses.deviceCounts.$get>>
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
        ? getGetEventsV3StatusesDeviceCountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.events.v3.statuses.deviceCounts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.v3.statuses.deviceCounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventsV3VersionKey() {
  return ['events', '/events/v3/version'] as const
}

export function useGetEventsV3Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsV3VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.v3.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsV3Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsV3VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.v3.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventsV3TrackingIdKey(
  args: InferRequestType<(typeof client.events.v3)[':trackingId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['events', '/events/v3/:trackingId', keyArgs] as const
}

export function useGetEventsV3TrackingId<TError = unknown>(
  args: InferRequestType<(typeof client.events.v3)[':trackingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events.v3)[':trackingId']['$get']>>
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
        ? getGetEventsV3TrackingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events.v3)[':trackingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.v3[':trackingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsV3TrackingId<TError = unknown>(
  args: InferRequestType<(typeof client.events.v3)[':trackingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events.v3)[':trackingId']['$get']>>
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
        ? getGetEventsV3TrackingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.events.v3)[':trackingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.v3[':trackingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGeofenceAssociationsV2HealthKey() {
  return ['geofence-associations', '/geofence-associations/v2/health'] as const
}

export function useGetGeofenceAssociationsV2Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['geofence-associations']['v2']['health']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGeofenceAssociationsV2HealthKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['geofence-associations']['v2']['health']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['geofence-associations'].v2.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGeofenceAssociationsV2Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['geofence-associations']['v2']['health']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGeofenceAssociationsV2HealthKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['geofence-associations']['v2']['health']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['geofence-associations'].v2.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGeofenceAssociationsV2VersionKey() {
  return ['geofence-associations', '/geofence-associations/v2/version'] as const
}

export function useGetGeofenceAssociationsV2Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['geofence-associations']['v2']['version']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGeofenceAssociationsV2VersionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['geofence-associations']['v2']['version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['geofence-associations'].v2.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGeofenceAssociationsV2Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['geofence-associations']['v2']['version']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGeofenceAssociationsV2VersionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['geofence-associations']['v2']['version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['geofence-associations'].v2.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGeofenceAssociationsV2GeofenceIdDevicesKey(
  args: InferRequestType<
    (typeof client)['geofence-associations']['v2'][':geofenceId']['devices']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'geofence-associations',
    '/geofence-associations/v2/:geofenceId/devices',
    keyArgs,
  ] as const
}

export function useGetGeofenceAssociationsV2GeofenceIdDevices<TError = unknown>(
  args: InferRequestType<
    (typeof client)['geofence-associations']['v2'][':geofenceId']['devices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['geofence-associations']['v2'][':geofenceId']['devices']['$get']
              >
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
        ? getGetGeofenceAssociationsV2GeofenceIdDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['geofence-associations']['v2'][':geofenceId']['devices']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['geofence-associations'].v2[':geofenceId'].devices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGeofenceAssociationsV2GeofenceIdDevices<TError = unknown>(
  args: InferRequestType<
    (typeof client)['geofence-associations']['v2'][':geofenceId']['devices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['geofence-associations']['v2'][':geofenceId']['devices']['$get']
              >
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
        ? getGetGeofenceAssociationsV2GeofenceIdDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['geofence-associations']['v2'][':geofenceId']['devices']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['geofence-associations'].v2[':geofenceId'].devices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutGeofenceAssociationsV2GeofenceIdTrackingIdKey() {
  return [
    'geofence-associations',
    '/geofence-associations/v2/:geofenceId/:trackingId',
    'PUT',
  ] as const
}

export function usePutGeofenceAssociationsV2GeofenceIdTrackingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['geofence-associations']['v2'][':geofenceId'][':trackingId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['geofence-associations']['v2'][':geofenceId'][':trackingId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGeofenceAssociationsV2GeofenceIdTrackingIdKey()
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
            (typeof client)['geofence-associations']['v2'][':geofenceId'][':trackingId']['$put']
          >
        },
      ) =>
        parseResponse(
          client['geofence-associations'].v2[':geofenceId'][':trackingId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteGeofenceAssociationsV2GeofenceIdTrackingIdKey() {
  return [
    'geofence-associations',
    '/geofence-associations/v2/:geofenceId/:trackingId',
    'DELETE',
  ] as const
}

export function useDeleteGeofenceAssociationsV2GeofenceIdTrackingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['geofence-associations']['v2'][':geofenceId'][':trackingId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['geofence-associations']['v2'][':geofenceId'][':trackingId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGeofenceAssociationsV2GeofenceIdTrackingIdKey()
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
            (typeof client)['geofence-associations']['v2'][':geofenceId'][':trackingId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['geofence-associations'].v2[':geofenceId'][':trackingId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGeofencesV2Key(args: InferRequestType<typeof client.geofences.v2.$get>) {
  const { header: _, ...keyArgs } = args
  return ['geofences', '/geofences/v2', keyArgs] as const
}

export function useGetGeofencesV2<TError = unknown>(
  args: InferRequestType<typeof client.geofences.v2.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGeofencesV2Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.geofences.v2.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGeofencesV2<TError = unknown>(
  args: InferRequestType<typeof client.geofences.v2.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGeofencesV2Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.geofences.v2.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGeofencesV2Key() {
  return ['geofences', '/geofences/v2', 'POST'] as const
}

export function usePostGeofencesV2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.geofences.v2.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGeofencesV2Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.geofences.v2.$post> }) =>
        parseResponse(client.geofences.v2.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGeofencesV2Key() {
  return ['geofences', '/geofences/v2', 'DELETE'] as const
}

export function useDeleteGeofencesV2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.geofences.v2.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGeofencesV2Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.geofences.v2.$delete> }) =>
        parseResponse(client.geofences.v2.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGeofencesV2HealthKey() {
  return ['geofences', '/geofences/v2/health'] as const
}

export function useGetGeofencesV2Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGeofencesV2HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.health.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.geofences.v2.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGeofencesV2Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGeofencesV2HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.health.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.geofences.v2.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGeofencesV2TrainingTestKey() {
  return ['geofences', '/geofences/v2/trainingTest', 'POST'] as const
}

export function usePostGeofencesV2TrainingTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.trainingTest.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.geofences.v2.trainingTest.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGeofencesV2TrainingTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.geofences.v2.trainingTest.$post> },
      ) => parseResponse(client.geofences.v2.trainingTest.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGeofencesV2VersionKey() {
  return ['geofences', '/geofences/v2/version'] as const
}

export function useGetGeofencesV2Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGeofencesV2VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.geofences.v2.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGeofencesV2Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGeofencesV2VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.geofences.v2.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGeofencesV2GeofenceIdKey(
  args: InferRequestType<(typeof client.geofences.v2)[':geofenceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['geofences', '/geofences/v2/:geofenceId', keyArgs] as const
}

export function useGetGeofencesV2GeofenceId<TError = unknown>(
  args: InferRequestType<(typeof client.geofences.v2)[':geofenceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.geofences.v2)[':geofenceId']['$get']>>
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
        ? getGetGeofencesV2GeofenceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.geofences.v2)[':geofenceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.geofences.v2[':geofenceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGeofencesV2GeofenceId<TError = unknown>(
  args: InferRequestType<(typeof client.geofences.v2)[':geofenceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.geofences.v2)[':geofenceId']['$get']>>
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
        ? getGetGeofencesV2GeofenceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.geofences.v2)[':geofenceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.geofences.v2[':geofenceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGeofencesV2GeofenceIdKey() {
  return ['geofences', '/geofences/v2/:geofenceId', 'PUT'] as const
}

export function usePutGeofencesV2GeofenceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.geofences.v2)[':geofenceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.geofences.v2)[':geofenceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGeofencesV2GeofenceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.geofences.v2)[':geofenceId']['$put']> },
      ) => parseResponse(client.geofences.v2[':geofenceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGeofencesV2GeofenceIdKey() {
  return ['geofences', '/geofences/v2/:geofenceId', 'DELETE'] as const
}

export function useDeleteGeofencesV2GeofenceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.geofences.v2)[':geofenceId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.geofences.v2)[':geofenceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGeofencesV2GeofenceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.geofences.v2)[':geofenceId']['$delete']> },
      ) => parseResponse(client.geofences.v2[':geofenceId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGeofencesV2GeofenceIdPoiTrainingKey() {
  return ['geofences', '/geofences/v2/:geofenceId/poiTraining', 'POST'] as const
}

export function usePostGeofencesV2GeofenceIdPoiTraining<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.geofences.v2)[':geofenceId']['poiTraining']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.geofences.v2)[':geofenceId']['poiTraining']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGeofencesV2GeofenceIdPoiTrainingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.geofences.v2)[':geofenceId']['poiTraining']['$post']>
        },
      ) => parseResponse(client.geofences.v2[':geofenceId'].poiTraining.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLabelsV4HealthKey() {
  return ['labels', '/labels/v4/health'] as const
}

export function useGetLabelsV4Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.v4.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLabelsV4HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.v4.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.labels.v4.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLabelsV4Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.v4.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLabelsV4HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.v4.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.labels.v4.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLabelsV4VersionKey() {
  return ['labels', '/labels/v4/version'] as const
}

export function useGetLabelsV4Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.v4.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLabelsV4VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.v4.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.labels.v4.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLabelsV4Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.v4.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLabelsV4VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.v4.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.labels.v4.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLabelsV4ResourceTypeKey(
  args: InferRequestType<(typeof client.labels.v4)[':resourceType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['labels', '/labels/v4/:resourceType', keyArgs] as const
}

export function useGetLabelsV4ResourceType<TError = unknown>(
  args: InferRequestType<(typeof client.labels.v4)[':resourceType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.labels.v4)[':resourceType']['$get']>>
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
        ? getGetLabelsV4ResourceTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.labels.v4)[':resourceType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.labels.v4[':resourceType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLabelsV4ResourceType<TError = unknown>(
  args: InferRequestType<(typeof client.labels.v4)[':resourceType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.labels.v4)[':resourceType']['$get']>>
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
        ? getGetLabelsV4ResourceTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.labels.v4)[':resourceType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.labels.v4[':resourceType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLabelsV4ResourceTypeKeysKey(
  args: InferRequestType<(typeof client.labels.v4)[':resourceType']['keys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['labels', '/labels/v4/:resourceType/keys', keyArgs] as const
}

export function useGetLabelsV4ResourceTypeKeys<TError = unknown>(
  args: InferRequestType<(typeof client.labels.v4)[':resourceType']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.labels.v4)[':resourceType']['keys']['$get']>>
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
        ? getGetLabelsV4ResourceTypeKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.labels.v4)[':resourceType']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.labels.v4[':resourceType'].keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLabelsV4ResourceTypeKeys<TError = unknown>(
  args: InferRequestType<(typeof client.labels.v4)[':resourceType']['keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.labels.v4)[':resourceType']['keys']['$get']>>
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
        ? getGetLabelsV4ResourceTypeKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.labels.v4)[':resourceType']['keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.labels.v4[':resourceType'].keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLabelsV4ResourceTypeKeysKeyValuesKey(
  args: InferRequestType<
    (typeof client.labels.v4)[':resourceType']['keys'][':key']['values']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['labels', '/labels/v4/:resourceType/keys/:key/values', keyArgs] as const
}

export function useGetLabelsV4ResourceTypeKeysKeyValues<TError = unknown>(
  args: InferRequestType<
    (typeof client.labels.v4)[':resourceType']['keys'][':key']['values']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.labels.v4)[':resourceType']['keys'][':key']['values']['$get']
              >
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
        ? getGetLabelsV4ResourceTypeKeysKeyValuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.labels.v4)[':resourceType']['keys'][':key']['values']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.labels.v4[':resourceType'].keys[':key'].values.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLabelsV4ResourceTypeKeysKeyValues<TError = unknown>(
  args: InferRequestType<
    (typeof client.labels.v4)[':resourceType']['keys'][':key']['values']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.labels.v4)[':resourceType']['keys'][':key']['values']['$get']
              >
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
        ? getGetLabelsV4ResourceTypeKeysKeyValuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.labels.v4)[':resourceType']['keys'][':key']['values']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.labels.v4[':resourceType'].keys[':key'].values.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLabelsV4ResourceTypeResourceIdKey(
  args: InferRequestType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['labels', '/labels/v4/:resourceType/:resourceId', keyArgs] as const
}

export function useGetLabelsV4ResourceTypeResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$get']>>
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
        ? getGetLabelsV4ResourceTypeResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.labels.v4[':resourceType'][':resourceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLabelsV4ResourceTypeResourceId<TError = unknown>(
  args: InferRequestType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$get']>>
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
        ? getGetLabelsV4ResourceTypeResourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.labels.v4[':resourceType'][':resourceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteLabelsV4ResourceTypeResourceIdKey() {
  return ['labels', '/labels/v4/:resourceType/:resourceId', 'DELETE'] as const
}

export function useDeleteLabelsV4ResourceTypeResourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLabelsV4ResourceTypeResourceIdKey()
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
            (typeof client.labels.v4)[':resourceType'][':resourceId']['$delete']
          >
        },
      ) =>
        parseResponse(client.labels.v4[':resourceType'][':resourceId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutLabelsV4ResourceTypeResourceIdBatchKey() {
  return ['labels', '/labels/v4/:resourceType/:resourceId/batch', 'PUT'] as const
}

export function usePutLabelsV4ResourceTypeResourceIdBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.labels.v4)[':resourceType'][':resourceId']['batch']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.labels.v4)[':resourceType'][':resourceId']['batch']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLabelsV4ResourceTypeResourceIdBatchKey()
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
            (typeof client.labels.v4)[':resourceType'][':resourceId']['batch']['$put']
          >
        },
      ) =>
        parseResponse(
          client.labels.v4[':resourceType'][':resourceId'].batch.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteLabelsV4ResourceTypeResourceIdKeyKey() {
  return ['labels', '/labels/v4/:resourceType/:resourceId/:key', 'DELETE'] as const
}

export function useDeleteLabelsV4ResourceTypeResourceIdKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.labels.v4)[':resourceType'][':resourceId'][':key']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.labels.v4)[':resourceType'][':resourceId'][':key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLabelsV4ResourceTypeResourceIdKeyKey()
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
            (typeof client.labels.v4)[':resourceType'][':resourceId'][':key']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.labels.v4[':resourceType'][':resourceId'][':key'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutLabelsV4ResourceTypeResourceIdKeyValueKey() {
  return ['labels', '/labels/v4/:resourceType/:resourceId/:key/:value', 'PUT'] as const
}

export function usePutLabelsV4ResourceTypeResourceIdKeyValue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.labels.v4)[':resourceType'][':resourceId'][':key'][':value']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.labels.v4)[':resourceType'][':resourceId'][':key'][':value']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLabelsV4ResourceTypeResourceIdKeyValueKey()
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
            (typeof client.labels.v4)[':resourceType'][':resourceId'][':key'][':value']['$put']
          >
        },
      ) =>
        parseResponse(
          client.labels.v4[':resourceType'][':resourceId'][':key'][':value'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteLabelsV4ResourceTypeResourceIdKeyValueKey() {
  return ['labels', '/labels/v4/:resourceType/:resourceId/:key/:value', 'DELETE'] as const
}

export function useDeleteLabelsV4ResourceTypeResourceIdKeyValue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.labels.v4)[':resourceType'][':resourceId'][':key'][':value']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.labels.v4)[':resourceType'][':resourceId'][':key'][':value']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLabelsV4ResourceTypeResourceIdKeyValueKey()
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
            (typeof client.labels.v4)[':resourceType'][':resourceId'][':key'][':value']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.labels.v4[':resourceType'][':resourceId'][':key'][':value'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostLargedataV4Key() {
  return ['largedata', '/largedata/v4', 'POST'] as const
}

export function usePostLargedataV4<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.largedata.v4.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.largedata.v4.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLargedataV4Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.largedata.v4.$post> }) =>
        parseResponse(client.largedata.v4.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLargedataV4DevicesTrackingIdMetadataKey(
  args: InferRequestType<(typeof client.largedata.v4.devices)[':trackingId']['metadata']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['largedata', '/largedata/v4/devices/:trackingId/metadata', keyArgs] as const
}

export function useGetLargedataV4DevicesTrackingIdMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.largedata.v4.devices)[':trackingId']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.largedata.v4.devices)[':trackingId']['metadata']['$get']>
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
        ? getGetLargedataV4DevicesTrackingIdMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.largedata.v4.devices)[':trackingId']['metadata']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.largedata.v4.devices[':trackingId'].metadata.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLargedataV4DevicesTrackingIdMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.largedata.v4.devices)[':trackingId']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.largedata.v4.devices)[':trackingId']['metadata']['$get']>
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
        ? getGetLargedataV4DevicesTrackingIdMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.largedata.v4.devices)[':trackingId']['metadata']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.largedata.v4.devices[':trackingId'].metadata.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLargedataV4HealthKey() {
  return ['largedata', '/largedata/v4/health'] as const
}

export function useGetLargedataV4Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.largedata.v4.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLargedataV4HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.largedata.v4.health.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.largedata.v4.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLargedataV4Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.largedata.v4.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLargedataV4HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.largedata.v4.health.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.largedata.v4.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLargedataV4VersionKey() {
  return ['largedata', '/largedata/v4/version'] as const
}

export function useGetLargedataV4Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.largedata.v4.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLargedataV4VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.largedata.v4.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.largedata.v4.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLargedataV4Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.largedata.v4.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLargedataV4VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.largedata.v4.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.largedata.v4.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLargedataV4DataIdKey() {
  return ['largedata', '/largedata/v4/:dataId', 'POST'] as const
}

export function usePostLargedataV4DataId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.largedata.v4)[':dataId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLargedataV4DataIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.largedata.v4)[':dataId']['$post']> },
      ) => parseResponse(client.largedata.v4[':dataId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLargedataV4DataIdKey() {
  return ['largedata', '/largedata/v4/:dataId', 'DELETE'] as const
}

export function useDeleteLargedataV4DataId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.largedata.v4)[':dataId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLargedataV4DataIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.largedata.v4)[':dataId']['$delete']> },
      ) => parseResponse(client.largedata.v4[':dataId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLargedataV4DataIdDataKey(
  args: InferRequestType<(typeof client.largedata.v4)[':dataId']['data']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['largedata', '/largedata/v4/:dataId/data', keyArgs] as const
}

export function useGetLargedataV4DataIdData<TError = unknown>(
  args: InferRequestType<(typeof client.largedata.v4)[':dataId']['data']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['data']['$get']>>
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
        ? getGetLargedataV4DataIdDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['data']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.largedata.v4[':dataId'].data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLargedataV4DataIdData<TError = unknown>(
  args: InferRequestType<(typeof client.largedata.v4)[':dataId']['data']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['data']['$get']>>
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
        ? getGetLargedataV4DataIdDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['data']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.largedata.v4[':dataId'].data.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLargedataV4DataIdMetadataKey(
  args: InferRequestType<(typeof client.largedata.v4)[':dataId']['metadata']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['largedata', '/largedata/v4/:dataId/metadata', keyArgs] as const
}

export function useGetLargedataV4DataIdMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.largedata.v4)[':dataId']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['metadata']['$get']>>
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
        ? getGetLargedataV4DataIdMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.largedata.v4[':dataId'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLargedataV4DataIdMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.largedata.v4)[':dataId']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['metadata']['$get']>>
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
        ? getGetLargedataV4DataIdMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.largedata.v4[':dataId'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLargedataV4DataIdPartsKey(
  args: InferRequestType<(typeof client.largedata.v4)[':dataId']['parts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['largedata', '/largedata/v4/:dataId/parts', keyArgs] as const
}

export function useGetLargedataV4DataIdParts<TError = unknown>(
  args: InferRequestType<(typeof client.largedata.v4)[':dataId']['parts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['parts']['$get']>>
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
        ? getGetLargedataV4DataIdPartsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['parts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.largedata.v4[':dataId'].parts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLargedataV4DataIdParts<TError = unknown>(
  args: InferRequestType<(typeof client.largedata.v4)[':dataId']['parts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['parts']['$get']>>
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
        ? getGetLargedataV4DataIdPartsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['parts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.largedata.v4[':dataId'].parts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutLargedataV4DataIdPartsPartNumberKey() {
  return ['largedata', '/largedata/v4/:dataId/parts/:partNumber', 'PUT'] as const
}

export function usePutLargedataV4DataIdPartsPartNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.largedata.v4)[':dataId']['parts'][':partNumber']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.largedata.v4)[':dataId']['parts'][':partNumber']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLargedataV4DataIdPartsPartNumberKey()
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
            (typeof client.largedata.v4)[':dataId']['parts'][':partNumber']['$put']
          >
        },
      ) =>
        parseResponse(client.largedata.v4[':dataId'].parts[':partNumber'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLocationsV4Key(args: InferRequestType<typeof client.locations.v4.$get>) {
  const { header: _, ...keyArgs } = args
  return ['locations', '/locations/v4', keyArgs] as const
}

export function useGetLocationsV4<TError = unknown>(
  args: InferRequestType<typeof client.locations.v4.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocationsV4Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locations.v4.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLocationsV4<TError = unknown>(
  args: InferRequestType<typeof client.locations.v4.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocationsV4Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locations.v4.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLocationsV4Key() {
  return ['locations', '/locations/v4', 'POST'] as const
}

export function usePostLocationsV4<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.locations.v4.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLocationsV4Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.locations.v4.$post> }) =>
        parseResponse(client.locations.v4.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLocationsV4Key() {
  return ['locations', '/locations/v4', 'DELETE'] as const
}

export function useDeleteLocationsV4<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.locations.v4.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLocationsV4Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.locations.v4.$delete> }) =>
        parseResponse(client.locations.v4.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLocationsV4HealthKey() {
  return ['locations', '/locations/v4/health'] as const
}

export function useGetLocationsV4Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocationsV4HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.health.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locations.v4.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLocationsV4Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocationsV4HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.health.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locations.v4.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLocationsV4VersionKey() {
  return ['locations', '/locations/v4/version'] as const
}

export function useGetLocationsV4Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocationsV4VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locations.v4.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLocationsV4Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocationsV4VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locations.v4.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLocationsV4LocationIdKey(
  args: InferRequestType<(typeof client.locations.v4)[':locationId']['$get']>,
) {
  return ['locations', '/locations/v4/:locationId', args] as const
}

export function useGetLocationsV4LocationId<TError = unknown>(
  args: InferRequestType<(typeof client.locations.v4)[':locationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.locations.v4)[':locationId']['$get']>>
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
        ? getGetLocationsV4LocationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.locations.v4)[':locationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locations.v4[':locationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLocationsV4LocationId<TError = unknown>(
  args: InferRequestType<(typeof client.locations.v4)[':locationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.locations.v4)[':locationId']['$get']>>
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
        ? getGetLocationsV4LocationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.locations.v4)[':locationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locations.v4[':locationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutLocationsV4LocationIdKey() {
  return ['locations', '/locations/v4/:locationId', 'PUT'] as const
}

export function usePutLocationsV4LocationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.locations.v4)[':locationId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.locations.v4)[':locationId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLocationsV4LocationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.locations.v4)[':locationId']['$put']> },
      ) => parseResponse(client.locations.v4[':locationId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLocationsV4LocationIdKey() {
  return ['locations', '/locations/v4/:locationId', 'DELETE'] as const
}

export function useDeleteLocationsV4LocationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.locations.v4)[':locationId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.locations.v4)[':locationId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLocationsV4LocationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.locations.v4)[':locationId']['$delete']> },
      ) => parseResponse(client.locations.v4[':locationId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMetadataV2DevicesBatchKey() {
  return ['metadata', '/metadata/v2/devices/batch', 'POST'] as const
}

export function usePostMetadataV2DevicesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.devices.batch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.metadata.v2.devices.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetadataV2DevicesBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.metadata.v2.devices.batch.$post> },
      ) => parseResponse(client.metadata.v2.devices.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMetadataV2DevicesTrackingIdKey(
  args: InferRequestType<(typeof client.metadata.v2.devices)[':trackingId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['metadata', '/metadata/v2/devices/:trackingId', keyArgs] as const
}

export function useGetMetadataV2DevicesTrackingId<TError = unknown>(
  args: InferRequestType<(typeof client.metadata.v2.devices)[':trackingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.v2.devices)[':trackingId']['$get']>>
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
        ? getGetMetadataV2DevicesTrackingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.v2.devices)[':trackingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.metadata.v2.devices[':trackingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetadataV2DevicesTrackingId<TError = unknown>(
  args: InferRequestType<(typeof client.metadata.v2.devices)[':trackingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.v2.devices)[':trackingId']['$get']>>
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
        ? getGetMetadataV2DevicesTrackingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.v2.devices)[':trackingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.metadata.v2.devices[':trackingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMetadataV2DevicesTrackingIdKey() {
  return ['metadata', '/metadata/v2/devices/:trackingId', 'PUT'] as const
}

export function usePutMetadataV2DevicesTrackingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metadata.v2.devices)[':trackingId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.metadata.v2.devices)[':trackingId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMetadataV2DevicesTrackingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.metadata.v2.devices)[':trackingId']['$put']> },
      ) => parseResponse(client.metadata.v2.devices[':trackingId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMetadataV2DevicesTrackingIdKey() {
  return ['metadata', '/metadata/v2/devices/:trackingId', 'DELETE'] as const
}

export function useDeleteMetadataV2DevicesTrackingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.v2.devices)[':trackingId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.metadata.v2.devices)[':trackingId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMetadataV2DevicesTrackingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.metadata.v2.devices)[':trackingId']['$delete']> },
      ) => parseResponse(client.metadata.v2.devices[':trackingId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMetadataV2GeofencesBatchKey() {
  return ['metadata', '/metadata/v2/geofences/batch', 'POST'] as const
}

export function usePostMetadataV2GeofencesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.geofences.batch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.metadata.v2.geofences.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetadataV2GeofencesBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.metadata.v2.geofences.batch.$post> },
      ) => parseResponse(client.metadata.v2.geofences.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMetadataV2GeofencesGeofenceIdKey(
  args: InferRequestType<(typeof client.metadata.v2.geofences)[':geofenceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['metadata', '/metadata/v2/geofences/:geofenceId', keyArgs] as const
}

export function useGetMetadataV2GeofencesGeofenceId<TError = unknown>(
  args: InferRequestType<(typeof client.metadata.v2.geofences)[':geofenceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.v2.geofences)[':geofenceId']['$get']>>
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
        ? getGetMetadataV2GeofencesGeofenceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.v2.geofences)[':geofenceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.metadata.v2.geofences[':geofenceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetadataV2GeofencesGeofenceId<TError = unknown>(
  args: InferRequestType<(typeof client.metadata.v2.geofences)[':geofenceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.v2.geofences)[':geofenceId']['$get']>>
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
        ? getGetMetadataV2GeofencesGeofenceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.v2.geofences)[':geofenceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.metadata.v2.geofences[':geofenceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMetadataV2GeofencesGeofenceIdKey() {
  return ['metadata', '/metadata/v2/geofences/:geofenceId', 'PUT'] as const
}

export function usePutMetadataV2GeofencesGeofenceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metadata.v2.geofences)[':geofenceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.metadata.v2.geofences)[':geofenceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMetadataV2GeofencesGeofenceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.metadata.v2.geofences)[':geofenceId']['$put']> },
      ) => parseResponse(client.metadata.v2.geofences[':geofenceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMetadataV2GeofencesGeofenceIdKey() {
  return ['metadata', '/metadata/v2/geofences/:geofenceId', 'DELETE'] as const
}

export function useDeleteMetadataV2GeofencesGeofenceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.v2.geofences)[':geofenceId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.metadata.v2.geofences)[':geofenceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMetadataV2GeofencesGeofenceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.metadata.v2.geofences)[':geofenceId']['$delete']>
        },
      ) => parseResponse(client.metadata.v2.geofences[':geofenceId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMetadataV2HealthKey() {
  return ['metadata', '/metadata/v2/health'] as const
}

export function useGetMetadataV2Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetadataV2HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata.v2.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetadataV2Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetadataV2HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata.v2.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMetadataV2SensorRulesBatchKey() {
  return ['metadata', '/metadata/v2/sensorRules/batch', 'POST'] as const
}

export function usePostMetadataV2SensorRulesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.sensorRules.batch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.metadata.v2.sensorRules.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetadataV2SensorRulesBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.metadata.v2.sensorRules.batch.$post> },
      ) => parseResponse(client.metadata.v2.sensorRules.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMetadataV2SensorRulesSensorRuleIdKey(
  args: InferRequestType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['metadata', '/metadata/v2/sensorRules/:sensorRuleId', keyArgs] as const
}

export function useGetMetadataV2SensorRulesSensorRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$get']>>
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
        ? getGetMetadataV2SensorRulesSensorRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.metadata.v2.sensorRules[':sensorRuleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetadataV2SensorRulesSensorRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$get']>>
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
        ? getGetMetadataV2SensorRulesSensorRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.metadata.v2.sensorRules[':sensorRuleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMetadataV2SensorRulesSensorRuleIdKey() {
  return ['metadata', '/metadata/v2/sensorRules/:sensorRuleId', 'PUT'] as const
}

export function usePutMetadataV2SensorRulesSensorRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMetadataV2SensorRulesSensorRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$put']>
        },
      ) => parseResponse(client.metadata.v2.sensorRules[':sensorRuleId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMetadataV2SensorRulesSensorRuleIdKey() {
  return ['metadata', '/metadata/v2/sensorRules/:sensorRuleId', 'DELETE'] as const
}

export function useDeleteMetadataV2SensorRulesSensorRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMetadataV2SensorRulesSensorRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$delete']>
        },
      ) =>
        parseResponse(client.metadata.v2.sensorRules[':sensorRuleId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMetadataV2VersionKey() {
  return ['metadata', '/metadata/v2/version'] as const
}

export function useGetMetadataV2Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetadataV2VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata.v2.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetadataV2Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetadataV2VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata.v2.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsV3HealthKey() {
  return ['notifications', '/notifications/v3/health'] as const
}

export function useGetNotificationsV3Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.health.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsV3HealthKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.health.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications.v3.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsV3Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.health.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsV3HealthKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.health.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications.v3.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNotificationsV3RegistrationChannelIdKey(
  args: InferRequestType<(typeof client.notifications.v3.registration)[':channelId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notifications', '/notifications/v3/registration/:channelId', keyArgs] as const
}

export function useGetNotificationsV3RegistrationChannelId<TError = unknown>(
  args: InferRequestType<(typeof client.notifications.v3.registration)[':channelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications.v3.registration)[':channelId']['$get']>>
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
        ? getGetNotificationsV3RegistrationChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications.v3.registration)[':channelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications.v3.registration[':channelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsV3RegistrationChannelId<TError = unknown>(
  args: InferRequestType<(typeof client.notifications.v3.registration)[':channelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications.v3.registration)[':channelId']['$get']>>
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
        ? getGetNotificationsV3RegistrationChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.notifications.v3.registration)[':channelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.notifications.v3.registration[':channelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNotificationsV3RegistrationChannelIdKey() {
  return ['notifications', '/notifications/v3/registration/:channelId', 'PUT'] as const
}

export function usePutNotificationsV3RegistrationChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications.v3.registration)[':channelId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.notifications.v3.registration)[':channelId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNotificationsV3RegistrationChannelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.notifications.v3.registration)[':channelId']['$put']>
        },
      ) =>
        parseResponse(client.notifications.v3.registration[':channelId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteNotificationsV3RegistrationChannelIdKey() {
  return ['notifications', '/notifications/v3/registration/:channelId', 'DELETE'] as const
}

export function useDeleteNotificationsV3RegistrationChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.notifications.v3.registration)[':channelId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.notifications.v3.registration)[':channelId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNotificationsV3RegistrationChannelIdKey()
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
            (typeof client.notifications.v3.registration)[':channelId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.notifications.v3.registration[':channelId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationsV3RegistrationsKey(
  args: InferRequestType<typeof client.notifications.v3.registrations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['notifications', '/notifications/v3/registrations', keyArgs] as const
}

export function useGetNotificationsV3Registrations<TError = unknown>(
  args: InferRequestType<typeof client.notifications.v3.registrations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.notifications.v3.registrations.$get>>
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
        ? getGetNotificationsV3RegistrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.notifications.v3.registrations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications.v3.registrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsV3Registrations<TError = unknown>(
  args: InferRequestType<typeof client.notifications.v3.registrations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.notifications.v3.registrations.$get>>
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
        ? getGetNotificationsV3RegistrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.notifications.v3.registrations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications.v3.registrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNotificationsV3RegistrationsKey() {
  return ['notifications', '/notifications/v3/registrations', 'POST'] as const
}

export function usePostNotificationsV3Registrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.notifications.v3.registrations.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.notifications.v3.registrations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationsV3RegistrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.notifications.v3.registrations.$post> },
      ) => parseResponse(client.notifications.v3.registrations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteNotificationsV3RegistrationsKey() {
  return ['notifications', '/notifications/v3/registrations', 'DELETE'] as const
}

export function useDeleteNotificationsV3Registrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.notifications.v3.registrations.$delete>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.notifications.v3.registrations.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNotificationsV3RegistrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.notifications.v3.registrations.$delete> },
      ) => parseResponse(client.notifications.v3.registrations.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNotificationsV3VersionKey() {
  return ['notifications', '/notifications/v3/version'] as const
}

export function useGetNotificationsV3Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.version.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsV3VersionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications.v3.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotificationsV3Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.version.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotificationsV3VersionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.notifications.v3.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRegistryV2DevicesDeviceOrExternalIdKey(
  args: InferRequestType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['registry', '/registry/v2/devices/:deviceOrExternalId', keyArgs] as const
}

export function useGetRegistryV2DevicesDeviceOrExternalId<TError = unknown>(
  args: InferRequestType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$get']>>
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
        ? getGetRegistryV2DevicesDeviceOrExternalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.registry.v2.devices[':deviceOrExternalId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistryV2DevicesDeviceOrExternalId<TError = unknown>(
  args: InferRequestType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$get']>>
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
        ? getGetRegistryV2DevicesDeviceOrExternalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.registry.v2.devices[':deviceOrExternalId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRegistryV2DevicesDeviceOrExternalIdKey() {
  return ['registry', '/registry/v2/devices/:deviceOrExternalId', 'PUT'] as const
}

export function usePutRegistryV2DevicesDeviceOrExternalId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRegistryV2DevicesDeviceOrExternalIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$put']>
        },
      ) =>
        parseResponse(client.registry.v2.devices[':deviceOrExternalId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRegistryV2DevicesDeviceOrExternalIdKey() {
  return ['registry', '/registry/v2/devices/:deviceOrExternalId', 'DELETE'] as const
}

export function useDeleteRegistryV2DevicesDeviceOrExternalId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRegistryV2DevicesDeviceOrExternalIdKey()
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
            (typeof client.registry.v2.devices)[':deviceOrExternalId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.registry.v2.devices[':deviceOrExternalId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRegistryV2HealthKey() {
  return ['registry', '/registry/v2/health'] as const
}

export function useGetRegistryV2Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRegistryV2HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registry.v2.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistryV2Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRegistryV2HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registry.v2.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRegistryV2LicensesKey(
  args: InferRequestType<typeof client.registry.v2.licenses.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['registry', '/registry/v2/licenses', keyArgs] as const
}

export function useGetRegistryV2Licenses<TError = unknown>(
  args: InferRequestType<typeof client.registry.v2.licenses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.licenses.$get>>>
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
        ? getGetRegistryV2LicensesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.licenses.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registry.v2.licenses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistryV2Licenses<TError = unknown>(
  args: InferRequestType<typeof client.registry.v2.licenses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.licenses.$get>>>
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
        ? getGetRegistryV2LicensesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.licenses.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registry.v2.licenses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRegistryV2VersionKey() {
  return ['registry', '/registry/v2/version'] as const
}

export function useGetRegistryV2Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRegistryV2VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registry.v2.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistryV2Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRegistryV2VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registry.v2.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRegistryV2AppIdDevicesKey(
  args: InferRequestType<(typeof client.registry.v2)[':appId']['devices']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['registry', '/registry/v2/:appId/devices', keyArgs] as const
}

export function useGetRegistryV2AppIdDevices<TError = unknown>(
  args: InferRequestType<(typeof client.registry.v2)[':appId']['devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registry.v2)[':appId']['devices']['$get']>>
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
        ? getGetRegistryV2AppIdDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registry.v2)[':appId']['devices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registry.v2[':appId'].devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistryV2AppIdDevices<TError = unknown>(
  args: InferRequestType<(typeof client.registry.v2)[':appId']['devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registry.v2)[':appId']['devices']['$get']>>
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
        ? getGetRegistryV2AppIdDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registry.v2)[':appId']['devices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registry.v2[':appId'].devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRegistryV2AppIdDevicesKey() {
  return ['registry', '/registry/v2/:appId/devices', 'POST'] as const
}

export function usePostRegistryV2AppIdDevices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.registry.v2)[':appId']['devices']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.registry.v2)[':appId']['devices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRegistryV2AppIdDevicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.registry.v2)[':appId']['devices']['$post']> },
      ) => parseResponse(client.registry.v2[':appId'].devices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRegistryV2AppIdLicenseCountKey(
  args: InferRequestType<(typeof client.registry.v2)[':appId']['licenseCount']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['registry', '/registry/v2/:appId/licenseCount', keyArgs] as const
}

export function useGetRegistryV2AppIdLicenseCount<TError = unknown>(
  args: InferRequestType<(typeof client.registry.v2)[':appId']['licenseCount']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registry.v2)[':appId']['licenseCount']['$get']>>
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
        ? getGetRegistryV2AppIdLicenseCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registry.v2)[':appId']['licenseCount']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.registry.v2[':appId'].licenseCount.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistryV2AppIdLicenseCount<TError = unknown>(
  args: InferRequestType<(typeof client.registry.v2)[':appId']['licenseCount']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registry.v2)[':appId']['licenseCount']['$get']>>
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
        ? getGetRegistryV2AppIdLicenseCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registry.v2)[':appId']['licenseCount']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.registry.v2[':appId'].licenseCount.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRegistryV2AppIdOneDeviceKey() {
  return ['registry', '/registry/v2/:appId/one-device', 'POST'] as const
}

export function usePostRegistryV2AppIdOneDevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.registry.v2)[':appId']['one-device']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.registry.v2)[':appId']['one-device']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRegistryV2AppIdOneDeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.registry.v2)[':appId']['one-device']['$post']> },
      ) => parseResponse(client.registry.v2[':appId']['one-device'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRegistryV2JobIdResultsKey(
  args: InferRequestType<(typeof client.registry.v2)[':jobId']['results']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['registry', '/registry/v2/:jobId/results', keyArgs] as const
}

export function useGetRegistryV2JobIdResults<TError = unknown>(
  args: InferRequestType<(typeof client.registry.v2)[':jobId']['results']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registry.v2)[':jobId']['results']['$get']>>
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
        ? getGetRegistryV2JobIdResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registry.v2)[':jobId']['results']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registry.v2[':jobId'].results.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistryV2JobIdResults<TError = unknown>(
  args: InferRequestType<(typeof client.registry.v2)[':jobId']['results']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registry.v2)[':jobId']['results']['$get']>>
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
        ? getGetRegistryV2JobIdResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registry.v2)[':jobId']['results']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registry.v2[':jobId'].results.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRegistryV2JobIdStatusKey(
  args: InferRequestType<(typeof client.registry.v2)[':jobId']['status']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['registry', '/registry/v2/:jobId/status', keyArgs] as const
}

export function useGetRegistryV2JobIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.registry.v2)[':jobId']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registry.v2)[':jobId']['status']['$get']>>
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
        ? getGetRegistryV2JobIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registry.v2)[':jobId']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registry.v2[':jobId'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistryV2JobIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.registry.v2)[':jobId']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registry.v2)[':jobId']['status']['$get']>>
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
        ? getGetRegistryV2JobIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registry.v2)[':jobId']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registry.v2[':jobId'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRegistryV2TrackingIdKey(
  args: InferRequestType<(typeof client.registry.v2)[':trackingId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['registry', '/registry/v2/:trackingId', keyArgs] as const
}

export function useGetRegistryV2TrackingId<TError = unknown>(
  args: InferRequestType<(typeof client.registry.v2)[':trackingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registry.v2)[':trackingId']['$get']>>
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
        ? getGetRegistryV2TrackingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registry.v2)[':trackingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registry.v2[':trackingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegistryV2TrackingId<TError = unknown>(
  args: InferRequestType<(typeof client.registry.v2)[':trackingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registry.v2)[':trackingId']['$get']>>
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
        ? getGetRegistryV2TrackingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registry.v2)[':trackingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.registry.v2[':trackingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteRegistryV2TrackingIdKey() {
  return ['registry', '/registry/v2/:trackingId', 'DELETE'] as const
}

export function useDeleteRegistryV2TrackingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registry.v2)[':trackingId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.registry.v2)[':trackingId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRegistryV2TrackingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.registry.v2)[':trackingId']['$delete']> },
      ) => parseResponse(client.registry.v2[':trackingId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRegistryV4ResourcesResourceTypeFindKey() {
  return ['registry', '/registry/v4/resources/:resourceType/find', 'POST'] as const
}

export function usePostRegistryV4ResourcesResourceTypeFind<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.registry.v4.resources)[':resourceType']['find']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.registry.v4.resources)[':resourceType']['find']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRegistryV4ResourcesResourceTypeFindKey()
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
            (typeof client.registry.v4.resources)[':resourceType']['find']['$post']
          >
        },
      ) =>
        parseResponse(client.registry.v4.resources[':resourceType'].find.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReportsV4Key() {
  return ['reports', '/reports/v4', 'POST'] as const
}

export function usePostReportsV4<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.v4.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.reports.v4.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportsV4Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.reports.v4.$post> }) =>
        parseResponse(client.reports.v4.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReportsV4HealthKey() {
  return ['reports', '/reports/v4/health'] as const
}

export function useGetReportsV4Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.v4.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportsV4HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.v4.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.v4.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsV4Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.v4.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportsV4HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.v4.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.v4.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportsV4VersionKey() {
  return ['reports', '/reports/v4/version'] as const
}

export function useGetReportsV4Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.v4.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportsV4VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.v4.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.v4.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsV4Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.v4.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportsV4VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.v4.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.v4.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportsV4ReportIdKey(
  args: InferRequestType<(typeof client.reports.v4)[':reportId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['reports', '/reports/v4/:reportId', keyArgs] as const
}

export function useGetReportsV4ReportId<TError = unknown>(
  args: InferRequestType<(typeof client.reports.v4)[':reportId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reports.v4)[':reportId']['$get']>>>
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
        ? getGetReportsV4ReportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reports.v4)[':reportId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.v4[':reportId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsV4ReportId<TError = unknown>(
  args: InferRequestType<(typeof client.reports.v4)[':reportId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reports.v4)[':reportId']['$get']>>>
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
        ? getGetReportsV4ReportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reports.v4)[':reportId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.v4[':reportId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRulesV4Key(args: InferRequestType<typeof client.rules.v4.$get>) {
  const { header: _, ...keyArgs } = args
  return ['rules', '/rules/v4', keyArgs] as const
}

export function useGetRulesV4<TError = unknown>(
  args: InferRequestType<typeof client.rules.v4.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRulesV4Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.rules.v4.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRulesV4<TError = unknown>(
  args: InferRequestType<typeof client.rules.v4.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRulesV4Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.rules.v4.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostRulesV4Key() {
  return ['rules', '/rules/v4', 'POST'] as const
}

export function usePostRulesV4<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.rules.v4.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRulesV4Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.rules.v4.$post> }) =>
        parseResponse(client.rules.v4.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRulesV4Key() {
  return ['rules', '/rules/v4', 'DELETE'] as const
}

export function useDeleteRulesV4<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.$delete>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.rules.v4.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRulesV4Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.rules.v4.$delete> }) =>
        parseResponse(client.rules.v4.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRulesV4HealthKey() {
  return ['rules', '/rules/v4/health'] as const
}

export function useGetRulesV4Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRulesV4HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rules.v4.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRulesV4Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRulesV4HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rules.v4.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRulesV4VersionKey() {
  return ['rules', '/rules/v4/version'] as const
}

export function useGetRulesV4Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRulesV4VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rules.v4.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRulesV4Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRulesV4VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rules.v4.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRulesV4RuleIdKey(
  args: InferRequestType<(typeof client.rules.v4)[':ruleId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['rules', '/rules/v4/:ruleId', keyArgs] as const
}

export function useGetRulesV4RuleId<TError = unknown>(
  args: InferRequestType<(typeof client.rules.v4)[':ruleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rules.v4)[':ruleId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRulesV4RuleIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rules.v4)[':ruleId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rules.v4[':ruleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRulesV4RuleId<TError = unknown>(
  args: InferRequestType<(typeof client.rules.v4)[':ruleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rules.v4)[':ruleId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetRulesV4RuleIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rules.v4)[':ruleId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rules.v4[':ruleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRulesV4RuleIdKey() {
  return ['rules', '/rules/v4/:ruleId', 'PUT'] as const
}

export function usePutRulesV4RuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rules.v4)[':ruleId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rules.v4)[':ruleId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRulesV4RuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rules.v4)[':ruleId']['$put']> },
      ) => parseResponse(client.rules.v4[':ruleId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRulesV4RuleIdKey() {
  return ['rules', '/rules/v4/:ruleId', 'DELETE'] as const
}

export function useDeleteRulesV4RuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rules.v4)[':ruleId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.rules.v4)[':ruleId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRulesV4RuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rules.v4)[':ruleId']['$delete']> },
      ) => parseResponse(client.rules.v4[':ruleId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSensorsV3Key(args: InferRequestType<typeof client.sensors.v3.$get>) {
  const { header: _, ...keyArgs } = args
  return ['sensors', '/sensors/v3', keyArgs] as const
}

export function useGetSensorsV3<TError = unknown>(
  args: InferRequestType<typeof client.sensors.v3.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSensorsV3Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sensors.v3.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSensorsV3<TError = unknown>(
  args: InferRequestType<typeof client.sensors.v3.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSensorsV3Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sensors.v3.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSensorsV3Key() {
  return ['sensors', '/sensors/v3', 'POST'] as const
}

export function usePostSensorsV3<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sensors.v3.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSensorsV3Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sensors.v3.$post> }) =>
        parseResponse(client.sensors.v3.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSensorsV3Key() {
  return ['sensors', '/sensors/v3', 'DELETE'] as const
}

export function useDeleteSensorsV3<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.sensors.v3.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSensorsV3Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sensors.v3.$delete> }) =>
        parseResponse(client.sensors.v3.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSensorsV3HealthKey() {
  return ['sensors', '/sensors/v3/health'] as const
}

export function useGetSensorsV3Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSensorsV3HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sensors.v3.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSensorsV3Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSensorsV3HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sensors.v3.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSensorsV3VersionKey() {
  return ['sensors', '/sensors/v3/version'] as const
}

export function useGetSensorsV3Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSensorsV3VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sensors.v3.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSensorsV3Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSensorsV3VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sensors.v3.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSensorsV3SensorRuleIdKey(
  args: InferRequestType<(typeof client.sensors.v3)[':sensorRuleId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sensors', '/sensors/v3/:sensorRuleId', keyArgs] as const
}

export function useGetSensorsV3SensorRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.sensors.v3)[':sensorRuleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sensors.v3)[':sensorRuleId']['$get']>>
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
        ? getGetSensorsV3SensorRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sensors.v3)[':sensorRuleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sensors.v3[':sensorRuleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSensorsV3SensorRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.sensors.v3)[':sensorRuleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sensors.v3)[':sensorRuleId']['$get']>>
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
        ? getGetSensorsV3SensorRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sensors.v3)[':sensorRuleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sensors.v3[':sensorRuleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSensorsV3SensorRuleIdKey() {
  return ['sensors', '/sensors/v3/:sensorRuleId', 'PUT'] as const
}

export function usePutSensorsV3SensorRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sensors.v3)[':sensorRuleId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sensors.v3)[':sensorRuleId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSensorsV3SensorRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sensors.v3)[':sensorRuleId']['$put']> },
      ) => parseResponse(client.sensors.v3[':sensorRuleId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSensorsV3SensorRuleIdKey() {
  return ['sensors', '/sensors/v3/:sensorRuleId', 'DELETE'] as const
}

export function useDeleteSensorsV3SensorRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sensors.v3)[':sensorRuleId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sensors.v3)[':sensorRuleId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSensorsV3SensorRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sensors.v3)[':sensorRuleId']['$delete']> },
      ) => parseResponse(client.sensors.v3[':sensorRuleId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostShadowsV2BatchKey() {
  return ['shadows', '/shadows/v2/batch', 'POST'] as const
}

export function usePostShadowsV2Batch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v2.batch.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.shadows.v2.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShadowsV2BatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.shadows.v2.batch.$post> }) =>
        parseResponse(client.shadows.v2.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShadowsV2HealthKey() {
  return ['shadows', '/shadows/v2/health'] as const
}

export function useGetShadowsV2Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v2.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShadowsV2HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v2.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shadows.v2.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShadowsV2Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v2.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShadowsV2HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v2.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shadows.v2.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShadowsV2VersionKey() {
  return ['shadows', '/shadows/v2/version'] as const
}

export function useGetShadowsV2Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v2.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShadowsV2VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v2.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shadows.v2.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShadowsV2Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v2.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShadowsV2VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v2.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shadows.v2.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShadowsV2TrackingIdKey(
  args: InferRequestType<(typeof client.shadows.v2)[':trackingId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shadows', '/shadows/v2/:trackingId', keyArgs] as const
}

export function useGetShadowsV2TrackingId<TError = unknown>(
  args: InferRequestType<(typeof client.shadows.v2)[':trackingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId']['$get']>>
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
        ? getGetShadowsV2TrackingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shadows.v2[':trackingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShadowsV2TrackingId<TError = unknown>(
  args: InferRequestType<(typeof client.shadows.v2)[':trackingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId']['$get']>>
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
        ? getGetShadowsV2TrackingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shadows.v2[':trackingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutShadowsV2TrackingIdKey() {
  return ['shadows', '/shadows/v2/:trackingId', 'PUT'] as const
}

export function usePutShadowsV2TrackingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.shadows.v2)[':trackingId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutShadowsV2TrackingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.shadows.v2)[':trackingId']['$put']> },
      ) => parseResponse(client.shadows.v2[':trackingId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteShadowsV2TrackingIdKey() {
  return ['shadows', '/shadows/v2/:trackingId', 'DELETE'] as const
}

export function useDeleteShadowsV2TrackingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.shadows.v2)[':trackingId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteShadowsV2TrackingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.shadows.v2)[':trackingId']['$delete']> },
      ) => parseResponse(client.shadows.v2[':trackingId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShadowsV2TrackingIdStateKey(
  args: InferRequestType<(typeof client.shadows.v2)[':trackingId'][':state']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shadows', '/shadows/v2/:trackingId/:state', keyArgs] as const
}

export function useGetShadowsV2TrackingIdState<TError = unknown>(
  args: InferRequestType<(typeof client.shadows.v2)[':trackingId'][':state']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId'][':state']['$get']>>
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
        ? getGetShadowsV2TrackingIdStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId'][':state']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shadows.v2[':trackingId'][':state'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShadowsV2TrackingIdState<TError = unknown>(
  args: InferRequestType<(typeof client.shadows.v2)[':trackingId'][':state']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId'][':state']['$get']>>
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
        ? getGetShadowsV2TrackingIdStateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId'][':state']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shadows.v2[':trackingId'][':state'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShadowsV2TrackingIdStateSelectorKey(
  args: InferRequestType<(typeof client.shadows.v2)[':trackingId'][':state'][':selector']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shadows', '/shadows/v2/:trackingId/:state/:selector', keyArgs] as const
}

export function useGetShadowsV2TrackingIdStateSelector<TError = unknown>(
  args: InferRequestType<(typeof client.shadows.v2)[':trackingId'][':state'][':selector']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shadows.v2)[':trackingId'][':state'][':selector']['$get']>
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
        ? getGetShadowsV2TrackingIdStateSelectorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shadows.v2)[':trackingId'][':state'][':selector']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shadows.v2[':trackingId'][':state'][':selector'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShadowsV2TrackingIdStateSelector<TError = unknown>(
  args: InferRequestType<(typeof client.shadows.v2)[':trackingId'][':state'][':selector']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shadows.v2)[':trackingId'][':state'][':selector']['$get']>
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
        ? getGetShadowsV2TrackingIdStateSelectorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shadows.v2)[':trackingId'][':state'][':selector']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shadows.v2[':trackingId'][':state'][':selector'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetShadowsV4Key(args: InferRequestType<typeof client.shadows.v4.$get>) {
  const { header: _, ...keyArgs } = args
  return ['shadows', '/shadows/v4', keyArgs] as const
}

export function useGetShadowsV4<TError = unknown>(
  args: InferRequestType<typeof client.shadows.v4.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v4.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShadowsV4Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v4.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shadows.v4.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShadowsV4<TError = unknown>(
  args: InferRequestType<typeof client.shadows.v4.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v4.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShadowsV4Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v4.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shadows.v4.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostShipmentReportsV4Key() {
  return ['shipment-reports', '/shipment-reports/v4', 'POST'] as const
}

export function usePostShipmentReportsV4<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['shipment-reports']['v4']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['shipment-reports']['v4']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShipmentReportsV4Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['shipment-reports']['v4']['$post']> },
      ) => parseResponse(client['shipment-reports'].v4.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShipmentReportsV4HealthKey() {
  return ['shipment-reports', '/shipment-reports/v4/health'] as const
}

export function useGetShipmentReportsV4Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['shipment-reports']['v4']['health']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetShipmentReportsV4HealthKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['shipment-reports']['v4']['health']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['shipment-reports'].v4.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShipmentReportsV4Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['shipment-reports']['v4']['health']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetShipmentReportsV4HealthKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['shipment-reports']['v4']['health']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['shipment-reports'].v4.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShipmentReportsV4VersionKey() {
  return ['shipment-reports', '/shipment-reports/v4/version'] as const
}

export function useGetShipmentReportsV4Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['shipment-reports']['v4']['version']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetShipmentReportsV4VersionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['shipment-reports']['v4']['version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['shipment-reports'].v4.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShipmentReportsV4Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['shipment-reports']['v4']['version']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetShipmentReportsV4VersionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['shipment-reports']['v4']['version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['shipment-reports'].v4.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShipmentReportsV4ShipmentReportIdStatusKey(
  args: InferRequestType<
    (typeof client)['shipment-reports']['v4'][':shipmentReportId']['status']['$get']
  >,
) {
  return ['shipment-reports', '/shipment-reports/v4/:shipmentReportId/status', args] as const
}

export function useGetShipmentReportsV4ShipmentReportIdStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client)['shipment-reports']['v4'][':shipmentReportId']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['shipment-reports']['v4'][':shipmentReportId']['status']['$get']
              >
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
        ? getGetShipmentReportsV4ShipmentReportIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['shipment-reports']['v4'][':shipmentReportId']['status']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['shipment-reports'].v4[':shipmentReportId'].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShipmentReportsV4ShipmentReportIdStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client)['shipment-reports']['v4'][':shipmentReportId']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['shipment-reports']['v4'][':shipmentReportId']['status']['$get']
              >
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
        ? getGetShipmentReportsV4ShipmentReportIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['shipment-reports']['v4'][':shipmentReportId']['status']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['shipment-reports'].v4[':shipmentReportId'].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetShipmentReportsV4ShipmentReportIdSummaryKey(
  args: InferRequestType<
    (typeof client)['shipment-reports']['v4'][':shipmentReportId']['summary']['$get']
  >,
) {
  return ['shipment-reports', '/shipment-reports/v4/:shipmentReportId/summary', args] as const
}

export function useGetShipmentReportsV4ShipmentReportIdSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client)['shipment-reports']['v4'][':shipmentReportId']['summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['shipment-reports']['v4'][':shipmentReportId']['summary']['$get']
              >
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
        ? getGetShipmentReportsV4ShipmentReportIdSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['shipment-reports']['v4'][':shipmentReportId']['summary']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['shipment-reports'].v4[':shipmentReportId'].summary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShipmentReportsV4ShipmentReportIdSummary<TError = unknown>(
  args: InferRequestType<
    (typeof client)['shipment-reports']['v4'][':shipmentReportId']['summary']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['shipment-reports']['v4'][':shipmentReportId']['summary']['$get']
              >
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
        ? getGetShipmentReportsV4ShipmentReportIdSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['shipment-reports']['v4'][':shipmentReportId']['summary']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['shipment-reports'].v4[':shipmentReportId'].summary.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetShipmentReportsV4ShipmentReportIdMetricKey(
  args: InferRequestType<
    (typeof client)['shipment-reports']['v4'][':shipmentReportId'][':metric']['$get']
  >,
) {
  return ['shipment-reports', '/shipment-reports/v4/:shipmentReportId/:metric', args] as const
}

export function useGetShipmentReportsV4ShipmentReportIdMetric<TError = unknown>(
  args: InferRequestType<
    (typeof client)['shipment-reports']['v4'][':shipmentReportId'][':metric']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['shipment-reports']['v4'][':shipmentReportId'][':metric']['$get']
              >
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
        ? getGetShipmentReportsV4ShipmentReportIdMetricKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['shipment-reports']['v4'][':shipmentReportId'][':metric']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['shipment-reports'].v4[':shipmentReportId'][':metric'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShipmentReportsV4ShipmentReportIdMetric<TError = unknown>(
  args: InferRequestType<
    (typeof client)['shipment-reports']['v4'][':shipmentReportId'][':metric']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['shipment-reports']['v4'][':shipmentReportId'][':metric']['$get']
              >
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
        ? getGetShipmentReportsV4ShipmentReportIdMetricKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['shipment-reports']['v4'][':shipmentReportId'][':metric']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['shipment-reports'].v4[':shipmentReportId'][':metric'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetShipmentsV4Key(args: InferRequestType<typeof client.shipments.v4.$get>) {
  const { header: _, ...keyArgs } = args
  return ['shipments', '/shipments/v4', keyArgs] as const
}

export function useGetShipmentsV4<TError = unknown>(
  args: InferRequestType<typeof client.shipments.v4.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShipmentsV4Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shipments.v4.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShipmentsV4<TError = unknown>(
  args: InferRequestType<typeof client.shipments.v4.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShipmentsV4Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shipments.v4.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostShipmentsV4Key() {
  return ['shipments', '/shipments/v4', 'POST'] as const
}

export function usePostShipmentsV4<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.shipments.v4.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShipmentsV4Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.shipments.v4.$post> }) =>
        parseResponse(client.shipments.v4.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteShipmentsV4Key() {
  return ['shipments', '/shipments/v4', 'DELETE'] as const
}

export function useDeleteShipmentsV4<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.shipments.v4.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteShipmentsV4Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.shipments.v4.$delete> }) =>
        parseResponse(client.shipments.v4.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShipmentsV4HealthKey() {
  return ['shipments', '/shipments/v4/health'] as const
}

export function useGetShipmentsV4Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShipmentsV4HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.health.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shipments.v4.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShipmentsV4Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShipmentsV4HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.health.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shipments.v4.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShipmentsV4PlansKey(
  args: InferRequestType<typeof client.shipments.v4.plans.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['shipments', '/shipments/v4/plans', keyArgs] as const
}

export function useGetShipmentsV4Plans<TError = unknown>(
  args: InferRequestType<typeof client.shipments.v4.plans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.plans.$get>>>>
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
        ? getGetShipmentsV4PlansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.plans.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shipments.v4.plans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShipmentsV4Plans<TError = unknown>(
  args: InferRequestType<typeof client.shipments.v4.plans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.plans.$get>>>>
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
        ? getGetShipmentsV4PlansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.plans.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shipments.v4.plans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostShipmentsV4PlansKey() {
  return ['shipments', '/shipments/v4/plans', 'POST'] as const
}

export function usePostShipmentsV4Plans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.plans.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.shipments.v4.plans.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShipmentsV4PlansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.shipments.v4.plans.$post> }) =>
        parseResponse(client.shipments.v4.plans.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteShipmentsV4PlansKey() {
  return ['shipments', '/shipments/v4/plans', 'DELETE'] as const
}

export function useDeleteShipmentsV4Plans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.plans.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.shipments.v4.plans.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteShipmentsV4PlansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.shipments.v4.plans.$delete> },
      ) => parseResponse(client.shipments.v4.plans.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShipmentsV4PlansShipmentPlanIdKey(
  args: InferRequestType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$get']>,
) {
  return ['shipments', '/shipments/v4/plans/:shipmentPlanId', args] as const
}

export function useGetShipmentsV4PlansShipmentPlanId<TError = unknown>(
  args: InferRequestType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$get']>>
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
        ? getGetShipmentsV4PlansShipmentPlanIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shipments.v4.plans[':shipmentPlanId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShipmentsV4PlansShipmentPlanId<TError = unknown>(
  args: InferRequestType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$get']>>
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
        ? getGetShipmentsV4PlansShipmentPlanIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shipments.v4.plans[':shipmentPlanId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteShipmentsV4PlansShipmentPlanIdKey() {
  return ['shipments', '/shipments/v4/plans/:shipmentPlanId', 'DELETE'] as const
}

export function useDeleteShipmentsV4PlansShipmentPlanId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteShipmentsV4PlansShipmentPlanIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$delete']>
        },
      ) => parseResponse(client.shipments.v4.plans[':shipmentPlanId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchShipmentsV4PlansShipmentPlanIdKey() {
  return ['shipments', '/shipments/v4/plans/:shipmentPlanId', 'PATCH'] as const
}

export function usePatchShipmentsV4PlansShipmentPlanId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchShipmentsV4PlansShipmentPlanIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$patch']>
        },
      ) => parseResponse(client.shipments.v4.plans[':shipmentPlanId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShipmentsV4PlansShipmentPlanIdSegmentPlanIdKey(
  args: InferRequestType<
    (typeof client.shipments.v4.plans)[':shipmentPlanId'][':segmentPlanId']['$get']
  >,
) {
  return ['shipments', '/shipments/v4/plans/:shipmentPlanId/:segmentPlanId', args] as const
}

export function useGetShipmentsV4PlansShipmentPlanIdSegmentPlanId<TError = unknown>(
  args: InferRequestType<
    (typeof client.shipments.v4.plans)[':shipmentPlanId'][':segmentPlanId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shipments.v4.plans)[':shipmentPlanId'][':segmentPlanId']['$get']
              >
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
        ? getGetShipmentsV4PlansShipmentPlanIdSegmentPlanIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shipments.v4.plans)[':shipmentPlanId'][':segmentPlanId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shipments.v4.plans[':shipmentPlanId'][':segmentPlanId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShipmentsV4PlansShipmentPlanIdSegmentPlanId<TError = unknown>(
  args: InferRequestType<
    (typeof client.shipments.v4.plans)[':shipmentPlanId'][':segmentPlanId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shipments.v4.plans)[':shipmentPlanId'][':segmentPlanId']['$get']
              >
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
        ? getGetShipmentsV4PlansShipmentPlanIdSegmentPlanIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shipments.v4.plans)[':shipmentPlanId'][':segmentPlanId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.shipments.v4.plans[':shipmentPlanId'][':segmentPlanId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchShipmentsV4PlansShipmentPlanIdSegmentPlanIdKey() {
  return ['shipments', '/shipments/v4/plans/:shipmentPlanId/:segmentPlanId', 'PATCH'] as const
}

export function usePatchShipmentsV4PlansShipmentPlanIdSegmentPlanId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.shipments.v4.plans)[':shipmentPlanId'][':segmentPlanId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.shipments.v4.plans)[':shipmentPlanId'][':segmentPlanId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchShipmentsV4PlansShipmentPlanIdSegmentPlanIdKey()
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
            (typeof client.shipments.v4.plans)[':shipmentPlanId'][':segmentPlanId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.shipments.v4.plans[':shipmentPlanId'][':segmentPlanId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetShipmentsV4VersionKey() {
  return ['shipments', '/shipments/v4/version'] as const
}

export function useGetShipmentsV4Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShipmentsV4VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shipments.v4.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShipmentsV4Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetShipmentsV4VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shipments.v4.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetShipmentsV4ShipmentIdKey(
  args: InferRequestType<(typeof client.shipments.v4)[':shipmentId']['$get']>,
) {
  return ['shipments', '/shipments/v4/:shipmentId', args] as const
}

export function useGetShipmentsV4ShipmentId<TError = unknown>(
  args: InferRequestType<(typeof client.shipments.v4)[':shipmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId']['$get']>>
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
        ? getGetShipmentsV4ShipmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shipments.v4[':shipmentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShipmentsV4ShipmentId<TError = unknown>(
  args: InferRequestType<(typeof client.shipments.v4)[':shipmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId']['$get']>>
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
        ? getGetShipmentsV4ShipmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shipments.v4[':shipmentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteShipmentsV4ShipmentIdKey() {
  return ['shipments', '/shipments/v4/:shipmentId', 'DELETE'] as const
}

export function useDeleteShipmentsV4ShipmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.shipments.v4)[':shipmentId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteShipmentsV4ShipmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.shipments.v4)[':shipmentId']['$delete']> },
      ) => parseResponse(client.shipments.v4[':shipmentId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchShipmentsV4ShipmentIdKey() {
  return ['shipments', '/shipments/v4/:shipmentId', 'PATCH'] as const
}

export function usePatchShipmentsV4ShipmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.shipments.v4)[':shipmentId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchShipmentsV4ShipmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.shipments.v4)[':shipmentId']['$patch']> },
      ) => parseResponse(client.shipments.v4[':shipmentId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShipmentsV4ShipmentIdSegmentIdKey(
  args: InferRequestType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$get']>,
) {
  return ['shipments', '/shipments/v4/:shipmentId/:segmentId', args] as const
}

export function useGetShipmentsV4ShipmentIdSegmentId<TError = unknown>(
  args: InferRequestType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$get']>>
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
        ? getGetShipmentsV4ShipmentIdSegmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shipments.v4[':shipmentId'][':segmentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShipmentsV4ShipmentIdSegmentId<TError = unknown>(
  args: InferRequestType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$get']>>
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
        ? getGetShipmentsV4ShipmentIdSegmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shipments.v4[':shipmentId'][':segmentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchShipmentsV4ShipmentIdSegmentIdKey() {
  return ['shipments', '/shipments/v4/:shipmentId/:segmentId', 'PATCH'] as const
}

export function usePatchShipmentsV4ShipmentIdSegmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchShipmentsV4ShipmentIdSegmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$patch']>
        },
      ) =>
        parseResponse(client.shipments.v4[':shipmentId'][':segmentId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShipmentsV4TrackingIdSegmentsKey(
  args: InferRequestType<(typeof client.shipments.v4)[':trackingId']['segments']['$get']>,
) {
  return ['shipments', '/shipments/v4/:trackingId/segments', args] as const
}

export function useGetShipmentsV4TrackingIdSegments<TError = unknown>(
  args: InferRequestType<(typeof client.shipments.v4)[':trackingId']['segments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipments.v4)[':trackingId']['segments']['$get']>>
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
        ? getGetShipmentsV4TrackingIdSegmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipments.v4)[':trackingId']['segments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shipments.v4[':trackingId'].segments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShipmentsV4TrackingIdSegments<TError = unknown>(
  args: InferRequestType<(typeof client.shipments.v4)[':trackingId']['segments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipments.v4)[':trackingId']['segments']['$get']>>
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
        ? getGetShipmentsV4TrackingIdSegmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipments.v4)[':trackingId']['segments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shipments.v4[':trackingId'].segments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTracesV2HealthKey() {
  return ['traces', '/traces/v2/health'] as const
}

export function useGetTracesV2Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traces.v2.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTracesV2HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traces.v2.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.traces.v2.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTracesV2Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traces.v2.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTracesV2HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traces.v2.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.traces.v2.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTracesV2VersionKey() {
  return ['traces', '/traces/v2/version'] as const
}

export function useGetTracesV2Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traces.v2.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTracesV2VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traces.v2.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.traces.v2.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTracesV2Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traces.v2.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTracesV2VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traces.v2.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.traces.v2.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTracesV2TrackingIdKey(
  args: InferRequestType<(typeof client.traces.v2)[':trackingId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['traces', '/traces/v2/:trackingId', keyArgs] as const
}

export function useGetTracesV2TrackingId<TError = unknown>(
  args: InferRequestType<(typeof client.traces.v2)[':trackingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.traces.v2)[':trackingId']['$get']>>
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
        ? getGetTracesV2TrackingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.traces.v2)[':trackingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.traces.v2[':trackingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTracesV2TrackingId<TError = unknown>(
  args: InferRequestType<(typeof client.traces.v2)[':trackingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.traces.v2)[':trackingId']['$get']>>
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
        ? getGetTracesV2TrackingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.traces.v2)[':trackingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.traces.v2[':trackingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTracesV2TrackingIdKey() {
  return ['traces', '/traces/v2/:trackingId', 'DELETE'] as const
}

export function useDeleteTracesV2TrackingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.traces.v2)[':trackingId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.traces.v2)[':trackingId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTracesV2TrackingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.traces.v2)[':trackingId']['$delete']> },
      ) => parseResponse(client.traces.v2[':trackingId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTransitionsV2DevicesTrackingIdKey(
  args: InferRequestType<(typeof client.transitions.v2.devices)[':trackingId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['transitions', '/transitions/v2/devices/:trackingId', keyArgs] as const
}

export function useGetTransitionsV2DevicesTrackingId<TError = unknown>(
  args: InferRequestType<(typeof client.transitions.v2.devices)[':trackingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transitions.v2.devices)[':trackingId']['$get']>>
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
        ? getGetTransitionsV2DevicesTrackingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transitions.v2.devices)[':trackingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.transitions.v2.devices[':trackingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransitionsV2DevicesTrackingId<TError = unknown>(
  args: InferRequestType<(typeof client.transitions.v2.devices)[':trackingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transitions.v2.devices)[':trackingId']['$get']>>
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
        ? getGetTransitionsV2DevicesTrackingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transitions.v2.devices)[':trackingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.transitions.v2.devices[':trackingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTransitionsV2HealthKey() {
  return ['transitions', '/transitions/v2/health'] as const
}

export function useGetTransitionsV2Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transitions.v2.health.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTransitionsV2HealthKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.transitions.v2.health.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transitions.v2.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransitionsV2Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transitions.v2.health.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTransitionsV2HealthKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.transitions.v2.health.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transitions.v2.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTransitionsV2VersionKey() {
  return ['transitions', '/transitions/v2/version'] as const
}

export function useGetTransitionsV2Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transitions.v2.version.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTransitionsV2VersionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.transitions.v2.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transitions.v2.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransitionsV2Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transitions.v2.version.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTransitionsV2VersionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.transitions.v2.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transitions.v2.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersV2DevicesKey(
  args: InferRequestType<typeof client.users.v2.devices.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/v2/devices', keyArgs] as const
}

export function useGetUsersV2Devices<TError = unknown>(
  args: InferRequestType<typeof client.users.v2.devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.devices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersV2DevicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.v2.devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersV2Devices<TError = unknown>(
  args: InferRequestType<typeof client.users.v2.devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.devices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersV2DevicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.v2.devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersV2HealthKey() {
  return ['users', '/users/v2/health'] as const
}

export function useGetUsersV2Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersV2HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.v2.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersV2Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.health.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersV2HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.health.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.v2.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersV2LoginKey() {
  return ['users', '/users/v2/login', 'POST'] as const
}

export function usePostUsersV2Login<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.login.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.v2.login.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersV2LoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.v2.login.$post> }) =>
        parseResponse(client.users.v2.login.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersV2RefreshKey() {
  return ['users', '/users/v2/refresh', 'POST'] as const
}

export function usePostUsersV2Refresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.refresh.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.v2.refresh.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersV2RefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.v2.refresh.$post> }) =>
        parseResponse(client.users.v2.refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersV2TokenExchangeKey() {
  return ['users', '/users/v2/tokenExchange', 'POST'] as const
}

export function usePostUsersV2TokenExchange<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.tokenExchange.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.v2.tokenExchange.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersV2TokenExchangeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.users.v2.tokenExchange.$post> },
      ) => parseResponse(client.users.v2.tokenExchange.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersV2VersionKey() {
  return ['users', '/users/v2/version'] as const
}

export function useGetUsersV2Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersV2VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.v2.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersV2Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.version.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersV2VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.version.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.v2.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2IndexKey() {
  return ['v2', '/v2/', 'POST'] as const
}

export function usePostV2Index<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.index.$post>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v2.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2IndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.index.$post> }) =>
        parseResponse(client.v2.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2HealthKey() {
  return ['v2', '/v2/health'] as const
}

export function useGetV2Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2TimestampKey(args: InferRequestType<typeof client.v2.timestamp.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/timestamp', keyArgs] as const
}

export function useGetV2Timestamp<TError = unknown>(
  args: InferRequestType<typeof client.v2.timestamp.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.timestamp.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2TimestampKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.timestamp.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.timestamp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Timestamp<TError = unknown>(
  args: InferRequestType<typeof client.v2.timestamp.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.timestamp.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2TimestampKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.timestamp.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.timestamp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2TokenKey() {
  return ['v2', '/v2/token', 'POST'] as const
}

export function usePostV2Token<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.token.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.token.$post> }) =>
        parseResponse(client.v2.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2VersionKey() {
  return ['v2', '/v2/version'] as const
}

export function useGetV2Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.version.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.version.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.version.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.version.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3IndexKey() {
  return ['v3', '/v3/', 'POST'] as const
}

export function usePostV3Index<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.index.$post>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v3.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3IndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v3.index.$post> }) =>
        parseResponse(client.v3.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3BatchKey() {
  return ['v3', '/v3/batch', 'POST'] as const
}

export function usePostV3Batch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.batch.$post>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v3.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3BatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v3.batch.$post> }) =>
        parseResponse(client.v3.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3HealthKey() {
  return ['v3', '/v3/health'] as const
}

export function useGetV3Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3Health<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3HealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3VersionKey() {
  return ['v3', '/v3/version'] as const
}

export function useGetV3Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.version.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.version.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3Version<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.version.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3VersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.version.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
