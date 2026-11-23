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

export function getAliasesV2QueryKey(args: InferRequestType<typeof client.aliases.v2.$get>) {
  const { header: _, ...keyArgs } = args
  return ['aliases', '/aliases/v2', keyArgs] as const
}

export function getAliasesV2QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.aliases.v2.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAliasesV2QueryKey>
  >({
    queryKey: getAliasesV2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.aliases.v2.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAliasesV2<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.aliases.v2.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAliasesV2QueryKey>
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
    return { ...getAliasesV2QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAliasesV2HealthQueryKey() {
  return ['aliases', '/aliases/v2/health'] as const
}

export function getAliasesV2HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAliasesV2HealthQueryKey>
  >({
    queryKey: getAliasesV2HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.aliases.v2.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAliasesV2Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.health.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAliasesV2HealthQueryKey>
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
    return { ...getAliasesV2HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAliasesV2TrackingIdQueryKey(
  args: InferRequestType<typeof client.aliases.v2.trackingId.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['aliases', '/aliases/v2/trackingId', keyArgs] as const
}

export function getAliasesV2TrackingIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.trackingId.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.aliases.v2.trackingId.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.trackingId.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAliasesV2TrackingIdQueryKey>
  >({
    queryKey: getAliasesV2TrackingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.aliases.v2.trackingId.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAliasesV2TrackingId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.trackingId.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.aliases.v2.trackingId.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.trackingId.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAliasesV2TrackingIdQueryKey>
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
    return { ...getAliasesV2TrackingIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAliasesV2VersionQueryKey() {
  return ['aliases', '/aliases/v2/version'] as const
}

export function getAliasesV2VersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAliasesV2VersionQueryKey>
  >({
    queryKey: getAliasesV2VersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.aliases.v2.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAliasesV2Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.version.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAliasesV2VersionQueryKey>
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
    return { ...getAliasesV2VersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAliasesV2TrackingId2QueryKey(
  args: InferRequestType<(typeof client.aliases.v2)[':trackingId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['aliases', '/aliases/v2/:trackingId', keyArgs] as const
}

export function getAliasesV2TrackingId2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.aliases.v2)[':trackingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAliasesV2TrackingId2QueryKey>
  >({
    queryKey: getAliasesV2TrackingId2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.aliases.v2[':trackingId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAliasesV2TrackingId2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.aliases.v2)[':trackingId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAliasesV2TrackingId2QueryKey>
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
      ...getAliasesV2TrackingId2QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteAliasesV2TrackingId2MutationKey() {
  return ['aliases', '/aliases/v2/:trackingId', 'DELETE'] as const
}

export function getDeleteAliasesV2TrackingId2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.aliases.v2)[':trackingId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAliasesV2TrackingId2MutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.aliases.v2)[':trackingId']['$delete']>) {
      return parseResponse(client.aliases.v2[':trackingId'].$delete(args, options))
    },
  })
}

export function createDeleteAliasesV2TrackingId2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.aliases.v2)[':trackingId']['$delete']>,
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
    const mutationDefaults = getDeleteAliasesV2TrackingId2MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutAliasesV2TrackingIdBatchMutationKey() {
  return ['aliases', '/aliases/v2/:trackingId/batch', 'PUT'] as const
}

export function getPutAliasesV2TrackingIdBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId']['batch']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.aliases.v2)[':trackingId']['batch']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAliasesV2TrackingIdBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.aliases.v2)[':trackingId']['batch']['$put']>,
    ) {
      return parseResponse(client.aliases.v2[':trackingId'].batch.$put(args, options))
    },
  })
}

export function createPutAliasesV2TrackingIdBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId']['batch']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.aliases.v2)[':trackingId']['batch']['$put']>,
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
    const mutationDefaults = getPutAliasesV2TrackingIdBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAliasesV2TrackingIdTypeQueryKey(
  args: InferRequestType<(typeof client.aliases.v2)[':trackingId'][':type']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['aliases', '/aliases/v2/:trackingId/:type', keyArgs] as const
}

export function getAliasesV2TrackingIdTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.aliases.v2)[':trackingId'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId'][':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAliasesV2TrackingIdTypeQueryKey>
  >({
    queryKey: getAliasesV2TrackingIdTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.aliases.v2[':trackingId'][':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAliasesV2TrackingIdType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.aliases.v2)[':trackingId'][':type']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId'][':type']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAliasesV2TrackingIdTypeQueryKey>
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
      ...getAliasesV2TrackingIdTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteAliasesV2TrackingIdTypeMutationKey() {
  return ['aliases', '/aliases/v2/:trackingId/:type', 'DELETE'] as const
}

export function getDeleteAliasesV2TrackingIdTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId'][':type']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.aliases.v2)[':trackingId'][':type']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAliasesV2TrackingIdTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.aliases.v2)[':trackingId'][':type']['$delete']>,
    ) {
      return parseResponse(client.aliases.v2[':trackingId'][':type'].$delete(args, options))
    },
  })
}

export function createDeleteAliasesV2TrackingIdType<
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
                  Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId'][':type']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.aliases.v2)[':trackingId'][':type']['$delete']>,
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
    const mutationDefaults = getDeleteAliasesV2TrackingIdTypeMutationOptions<
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

export function getPutAliasesV2TrackingIdTypeExternalIdMutationKey() {
  return ['aliases', '/aliases/v2/:trackingId/:type/:externalId', 'PUT'] as const
}

export function getPutAliasesV2TrackingIdTypeExternalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.aliases.v2)[':trackingId'][':type'][':externalId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAliasesV2TrackingIdTypeExternalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.aliases.v2)[':trackingId'][':type'][':externalId']['$put']
      >,
    ) {
      return parseResponse(
        client.aliases.v2[':trackingId'][':type'][':externalId'].$put(args, options),
      )
    },
  })
}

export function createPutAliasesV2TrackingIdTypeExternalId<
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
                    (typeof client.aliases.v2)[':trackingId'][':type'][':externalId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.aliases.v2)[':trackingId'][':type'][':externalId']['$put']
          >,
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
    const mutationDefaults = getPutAliasesV2TrackingIdTypeExternalIdMutationOptions<
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

export function getDeleteAliasesV2TrackingIdTypeExternalIdMutationKey() {
  return ['aliases', '/aliases/v2/:trackingId/:type/:externalId', 'DELETE'] as const
}

export function getDeleteAliasesV2TrackingIdTypeExternalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.aliases.v2)[':trackingId'][':type'][':externalId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAliasesV2TrackingIdTypeExternalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.aliases.v2)[':trackingId'][':type'][':externalId']['$delete']
      >,
    ) {
      return parseResponse(
        client.aliases.v2[':trackingId'][':type'][':externalId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAliasesV2TrackingIdTypeExternalId<
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
                      (typeof client.aliases.v2)[':trackingId'][':type'][':externalId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.aliases.v2)[':trackingId'][':type'][':externalId']['$delete']
          >,
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
    const mutationDefaults = getDeleteAliasesV2TrackingIdTypeExternalIdMutationOptions<
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

export function getPutAssociationsV3DevicesBatchUpdateMutationKey() {
  return ['associations', '/associations/v3/devices/batchUpdate', 'PUT'] as const
}

export function getPutAssociationsV3DevicesBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.associations.v3.devices.batchUpdate.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.associations.v3.devices.batchUpdate.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAssociationsV3DevicesBatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.associations.v3.devices.batchUpdate.$put>,
    ) {
      return parseResponse(client.associations.v3.devices.batchUpdate.$put(args, options))
    },
  })
}

export function createPutAssociationsV3DevicesBatchUpdate<
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
                Awaited<ReturnType<typeof client.associations.v3.devices.batchUpdate.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.associations.v3.devices.batchUpdate.$put>,
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
    const mutationDefaults = getPutAssociationsV3DevicesBatchUpdateMutationOptions<
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

export function getPostAssociationsV3DevicesTrackingIdBatchCreateMutationKey() {
  return ['associations', '/associations/v3/devices/:trackingId/batchCreate', 'POST'] as const
}

export function getPostAssociationsV3DevicesTrackingIdBatchCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.associations.v3.devices)[':trackingId']['batchCreate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAssociationsV3DevicesTrackingIdBatchCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.associations.v3.devices)[':trackingId']['batchCreate']['$post']
      >,
    ) {
      return parseResponse(
        client.associations.v3.devices[':trackingId'].batchCreate.$post(args, options),
      )
    },
  })
}

export function createPostAssociationsV3DevicesTrackingIdBatchCreate<
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
                    (typeof client.associations.v3.devices)[':trackingId']['batchCreate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.associations.v3.devices)[':trackingId']['batchCreate']['$post']
          >,
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
    const mutationDefaults = getPostAssociationsV3DevicesTrackingIdBatchCreateMutationOptions<
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

export function getPostAssociationsV3DevicesTrackingIdBatchDeleteMutationKey() {
  return ['associations', '/associations/v3/devices/:trackingId/batchDelete', 'POST'] as const
}

export function getPostAssociationsV3DevicesTrackingIdBatchDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.associations.v3.devices)[':trackingId']['batchDelete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAssociationsV3DevicesTrackingIdBatchDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.associations.v3.devices)[':trackingId']['batchDelete']['$post']
      >,
    ) {
      return parseResponse(
        client.associations.v3.devices[':trackingId'].batchDelete.$post(args, options),
      )
    },
  })
}

export function createPostAssociationsV3DevicesTrackingIdBatchDelete<
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
                      (typeof client.associations.v3.devices)[':trackingId']['batchDelete']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.associations.v3.devices)[':trackingId']['batchDelete']['$post']
          >,
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
    const mutationDefaults = getPostAssociationsV3DevicesTrackingIdBatchDeleteMutationOptions<
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

export function getAssociationsV3GeofencesGeofenceIdQueryKey(
  args: InferRequestType<(typeof client.associations.v3.geofences)[':geofenceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['associations', '/associations/v3/geofences/:geofenceId', keyArgs] as const
}

export function getAssociationsV3GeofencesGeofenceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.associations.v3.geofences)[':geofenceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.associations.v3.geofences)[':geofenceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.associations.v3.geofences)[':geofenceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationsV3GeofencesGeofenceIdQueryKey>
  >({
    queryKey: getAssociationsV3GeofencesGeofenceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.associations.v3.geofences[':geofenceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAssociationsV3GeofencesGeofenceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.associations.v3.geofences)[':geofenceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.associations.v3.geofences)[':geofenceId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.associations.v3.geofences)[':geofenceId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAssociationsV3GeofencesGeofenceIdQueryKey>
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
      ...getAssociationsV3GeofencesGeofenceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAssociationsV3HealthQueryKey() {
  return ['associations', '/associations/v3/health'] as const
}

export function getAssociationsV3HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.associations.v3.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.associations.v3.health.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationsV3HealthQueryKey>
  >({
    queryKey: getAssociationsV3HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.associations.v3.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAssociationsV3Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.associations.v3.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.associations.v3.health.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAssociationsV3HealthQueryKey>
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
    return { ...getAssociationsV3HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAssociationsV3RulesRuleIdQueryKey(
  args: InferRequestType<(typeof client.associations.v3.rules)[':ruleId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['associations', '/associations/v3/rules/:ruleId', keyArgs] as const
}

export function getAssociationsV3RulesRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.associations.v3.rules)[':ruleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.associations.v3.rules)[':ruleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.associations.v3.rules)[':ruleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationsV3RulesRuleIdQueryKey>
  >({
    queryKey: getAssociationsV3RulesRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.associations.v3.rules[':ruleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAssociationsV3RulesRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.associations.v3.rules)[':ruleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.associations.v3.rules)[':ruleId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.associations.v3.rules)[':ruleId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAssociationsV3RulesRuleIdQueryKey>
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
      ...getAssociationsV3RulesRuleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAssociationsV3SensorsSensorRuleIdQueryKey(
  args: InferRequestType<(typeof client.associations.v3.sensors)[':sensorRuleId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['associations', '/associations/v3/sensors/:sensorRuleId', keyArgs] as const
}

export function getAssociationsV3SensorsSensorRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.associations.v3.sensors)[':sensorRuleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.associations.v3.sensors)[':sensorRuleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.associations.v3.sensors)[':sensorRuleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationsV3SensorsSensorRuleIdQueryKey>
  >({
    queryKey: getAssociationsV3SensorsSensorRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.associations.v3.sensors[':sensorRuleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAssociationsV3SensorsSensorRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.associations.v3.sensors)[':sensorRuleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.associations.v3.sensors)[':sensorRuleId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.associations.v3.sensors)[':sensorRuleId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAssociationsV3SensorsSensorRuleIdQueryKey>
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
      ...getAssociationsV3SensorsSensorRuleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAssociationsV3VersionQueryKey() {
  return ['associations', '/associations/v3/version'] as const
}

export function getAssociationsV3VersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.associations.v3.version.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.associations.v3.version.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationsV3VersionQueryKey>
  >({
    queryKey: getAssociationsV3VersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.associations.v3.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAssociationsV3Version<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.associations.v3.version.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.associations.v3.version.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAssociationsV3VersionQueryKey>
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
    return { ...getAssociationsV3VersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getAssociationsV3TrackingIdGeofencesQueryKey(
  args: InferRequestType<(typeof client.associations.v3)[':trackingId']['geofences']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['associations', '/associations/v3/:trackingId/geofences', keyArgs] as const
}

export function getAssociationsV3TrackingIdGeofencesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['geofences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.associations.v3)[':trackingId']['geofences']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['geofences']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationsV3TrackingIdGeofencesQueryKey>
  >({
    queryKey: getAssociationsV3TrackingIdGeofencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.associations.v3[':trackingId'].geofences.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAssociationsV3TrackingIdGeofences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['geofences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.associations.v3)[':trackingId']['geofences']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.associations.v3)[':trackingId']['geofences']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAssociationsV3TrackingIdGeofencesQueryKey>
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
      ...getAssociationsV3TrackingIdGeofencesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutAssociationsV3TrackingIdGeofencesGeofenceIdMutationKey() {
  return ['associations', '/associations/v3/:trackingId/geofences/:geofenceId', 'PUT'] as const
}

export function getPutAssociationsV3TrackingIdGeofencesGeofenceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.associations.v3)[':trackingId']['geofences'][':geofenceId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAssociationsV3TrackingIdGeofencesGeofenceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.associations.v3)[':trackingId']['geofences'][':geofenceId']['$put']
      >,
    ) {
      return parseResponse(
        client.associations.v3[':trackingId'].geofences[':geofenceId'].$put(args, options),
      )
    },
  })
}

export function createPutAssociationsV3TrackingIdGeofencesGeofenceId<
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
                    (typeof client.associations.v3)[':trackingId']['geofences'][':geofenceId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.associations.v3)[':trackingId']['geofences'][':geofenceId']['$put']
          >,
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
    const mutationDefaults = getPutAssociationsV3TrackingIdGeofencesGeofenceIdMutationOptions<
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

export function getDeleteAssociationsV3TrackingIdGeofencesGeofenceIdMutationKey() {
  return ['associations', '/associations/v3/:trackingId/geofences/:geofenceId', 'DELETE'] as const
}

export function getDeleteAssociationsV3TrackingIdGeofencesGeofenceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.associations.v3)[':trackingId']['geofences'][':geofenceId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAssociationsV3TrackingIdGeofencesGeofenceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.associations.v3)[':trackingId']['geofences'][':geofenceId']['$delete']
      >,
    ) {
      return parseResponse(
        client.associations.v3[':trackingId'].geofences[':geofenceId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAssociationsV3TrackingIdGeofencesGeofenceId<
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
                      (typeof client.associations.v3)[':trackingId']['geofences'][':geofenceId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.associations.v3)[':trackingId']['geofences'][':geofenceId']['$delete']
          >,
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
    const mutationDefaults = getDeleteAssociationsV3TrackingIdGeofencesGeofenceIdMutationOptions<
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

export function getAssociationsV3TrackingIdRulesQueryKey(
  args: InferRequestType<(typeof client.associations.v3)[':trackingId']['rules']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['associations', '/associations/v3/:trackingId/rules', keyArgs] as const
}

export function getAssociationsV3TrackingIdRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.associations.v3)[':trackingId']['rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['rules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationsV3TrackingIdRulesQueryKey>
  >({
    queryKey: getAssociationsV3TrackingIdRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.associations.v3[':trackingId'].rules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAssociationsV3TrackingIdRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.associations.v3)[':trackingId']['rules']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['rules']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAssociationsV3TrackingIdRulesQueryKey>
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
      ...getAssociationsV3TrackingIdRulesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutAssociationsV3TrackingIdRulesRuleIdMutationKey() {
  return ['associations', '/associations/v3/:trackingId/rules/:ruleId', 'PUT'] as const
}

export function getPutAssociationsV3TrackingIdRulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.associations.v3)[':trackingId']['rules'][':ruleId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAssociationsV3TrackingIdRulesRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.associations.v3)[':trackingId']['rules'][':ruleId']['$put']
      >,
    ) {
      return parseResponse(
        client.associations.v3[':trackingId'].rules[':ruleId'].$put(args, options),
      )
    },
  })
}

export function createPutAssociationsV3TrackingIdRulesRuleId<
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
                    (typeof client.associations.v3)[':trackingId']['rules'][':ruleId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.associations.v3)[':trackingId']['rules'][':ruleId']['$put']
          >,
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
    const mutationDefaults = getPutAssociationsV3TrackingIdRulesRuleIdMutationOptions<
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

export function getDeleteAssociationsV3TrackingIdRulesRuleIdMutationKey() {
  return ['associations', '/associations/v3/:trackingId/rules/:ruleId', 'DELETE'] as const
}

export function getDeleteAssociationsV3TrackingIdRulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.associations.v3)[':trackingId']['rules'][':ruleId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAssociationsV3TrackingIdRulesRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.associations.v3)[':trackingId']['rules'][':ruleId']['$delete']
      >,
    ) {
      return parseResponse(
        client.associations.v3[':trackingId'].rules[':ruleId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAssociationsV3TrackingIdRulesRuleId<
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
                      (typeof client.associations.v3)[':trackingId']['rules'][':ruleId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.associations.v3)[':trackingId']['rules'][':ruleId']['$delete']
          >,
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
    const mutationDefaults = getDeleteAssociationsV3TrackingIdRulesRuleIdMutationOptions<
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

export function getAssociationsV3TrackingIdSensorsQueryKey(
  args: InferRequestType<(typeof client.associations.v3)[':trackingId']['sensors']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['associations', '/associations/v3/:trackingId/sensors', keyArgs] as const
}

export function getAssociationsV3TrackingIdSensorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['sensors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.associations.v3)[':trackingId']['sensors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['sensors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationsV3TrackingIdSensorsQueryKey>
  >({
    queryKey: getAssociationsV3TrackingIdSensorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.associations.v3[':trackingId'].sensors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAssociationsV3TrackingIdSensors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['sensors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.associations.v3)[':trackingId']['sensors']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.associations.v3)[':trackingId']['sensors']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAssociationsV3TrackingIdSensorsQueryKey>
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
      ...getAssociationsV3TrackingIdSensorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutAssociationsV3TrackingIdSensorsSensorRuleIdMutationKey() {
  return ['associations', '/associations/v3/:trackingId/sensors/:sensorRuleId', 'PUT'] as const
}

export function getPutAssociationsV3TrackingIdSensorsSensorRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.associations.v3)[':trackingId']['sensors'][':sensorRuleId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAssociationsV3TrackingIdSensorsSensorRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.associations.v3)[':trackingId']['sensors'][':sensorRuleId']['$put']
      >,
    ) {
      return parseResponse(
        client.associations.v3[':trackingId'].sensors[':sensorRuleId'].$put(args, options),
      )
    },
  })
}

export function createPutAssociationsV3TrackingIdSensorsSensorRuleId<
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
                    (typeof client.associations.v3)[':trackingId']['sensors'][':sensorRuleId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.associations.v3)[':trackingId']['sensors'][':sensorRuleId']['$put']
          >,
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
    const mutationDefaults = getPutAssociationsV3TrackingIdSensorsSensorRuleIdMutationOptions<
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

export function getDeleteAssociationsV3TrackingIdSensorsSensorRuleIdMutationKey() {
  return ['associations', '/associations/v3/:trackingId/sensors/:sensorRuleId', 'DELETE'] as const
}

export function getDeleteAssociationsV3TrackingIdSensorsSensorRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.associations.v3)[':trackingId']['sensors'][':sensorRuleId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAssociationsV3TrackingIdSensorsSensorRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.associations.v3)[':trackingId']['sensors'][':sensorRuleId']['$delete']
      >,
    ) {
      return parseResponse(
        client.associations.v3[':trackingId'].sensors[':sensorRuleId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteAssociationsV3TrackingIdSensorsSensorRuleId<
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
                      (typeof client.associations.v3)[':trackingId']['sensors'][':sensorRuleId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.associations.v3)[':trackingId']['sensors'][':sensorRuleId']['$delete']
          >,
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
    const mutationDefaults = getDeleteAssociationsV3TrackingIdSensorsSensorRuleIdMutationOptions<
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

export function getBulkjobsV4DeviceUploadsQueryKey(
  args: InferRequestType<typeof client.bulkjobs.v4.deviceUploads.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['bulkjobs', '/bulkjobs/v4/deviceUploads', keyArgs] as const
}

export function getBulkjobsV4DeviceUploadsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.deviceUploads.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bulkjobs.v4.deviceUploads.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.deviceUploads.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBulkjobsV4DeviceUploadsQueryKey>
  >({
    queryKey: getBulkjobsV4DeviceUploadsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bulkjobs.v4.deviceUploads.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBulkjobsV4DeviceUploads<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.deviceUploads.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bulkjobs.v4.deviceUploads.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.bulkjobs.v4.deviceUploads.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBulkjobsV4DeviceUploadsQueryKey>
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
      ...getBulkjobsV4DeviceUploadsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostBulkjobsV4DeviceUploadsMutationKey() {
  return ['bulkjobs', '/bulkjobs/v4/deviceUploads', 'POST'] as const
}

export function getPostBulkjobsV4DeviceUploadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.deviceUploads.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.bulkjobs.v4.deviceUploads.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBulkjobsV4DeviceUploadsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bulkjobs.v4.deviceUploads.$post>) {
      return parseResponse(client.bulkjobs.v4.deviceUploads.$post(args, options))
    },
  })
}

export function createPostBulkjobsV4DeviceUploads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.bulkjobs.v4.deviceUploads.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.bulkjobs.v4.deviceUploads.$post>,
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
    const mutationDefaults = getPostBulkjobsV4DeviceUploadsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchBulkjobsV4DeviceUploadsJobIdMutationKey() {
  return ['bulkjobs', '/bulkjobs/v4/deviceUploads/:jobId', 'PATCH'] as const
}

export function getPatchBulkjobsV4DeviceUploadsJobIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBulkjobsV4DeviceUploadsJobIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['$patch']>,
    ) {
      return parseResponse(client.bulkjobs.v4.deviceUploads[':jobId'].$patch(args, options))
    },
  })
}

export function createPatchBulkjobsV4DeviceUploadsJobId<
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
                Awaited<ReturnType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['$patch']>,
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
    const mutationDefaults = getPatchBulkjobsV4DeviceUploadsJobIdMutationOptions<
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

export function getBulkjobsV4DeviceUploadsJobIdResultsQueryKey(
  args: InferRequestType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['results']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['bulkjobs', '/bulkjobs/v4/deviceUploads/:jobId/results', keyArgs] as const
}

export function getBulkjobsV4DeviceUploadsJobIdResultsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['results']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['results']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['results']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBulkjobsV4DeviceUploadsJobIdResultsQueryKey>
  >({
    queryKey: getBulkjobsV4DeviceUploadsJobIdResultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bulkjobs.v4.deviceUploads[':jobId'].results.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBulkjobsV4DeviceUploadsJobIdResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['results']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.bulkjobs.v4.deviceUploads)[':jobId']['results']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['results']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBulkjobsV4DeviceUploadsJobIdResultsQueryKey>
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
      ...getBulkjobsV4DeviceUploadsJobIdResultsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBulkjobsV4DeviceUploadsJobIdStatusQueryKey(
  args: InferRequestType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['status']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['bulkjobs', '/bulkjobs/v4/deviceUploads/:jobId/status', keyArgs] as const
}

export function getBulkjobsV4DeviceUploadsJobIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBulkjobsV4DeviceUploadsJobIdStatusQueryKey>
  >({
    queryKey: getBulkjobsV4DeviceUploadsJobIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bulkjobs.v4.deviceUploads[':jobId'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBulkjobsV4DeviceUploadsJobIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.bulkjobs.v4.deviceUploads)[':jobId']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['status']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBulkjobsV4DeviceUploadsJobIdStatusQueryKey>
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
      ...getBulkjobsV4DeviceUploadsJobIdStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getBulkjobsV4HealthQueryKey() {
  return ['bulkjobs', '/bulkjobs/v4/health'] as const
}

export function getBulkjobsV4HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBulkjobsV4HealthQueryKey>
  >({
    queryKey: getBulkjobsV4HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.bulkjobs.v4.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBulkjobsV4Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.health.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBulkjobsV4HealthQueryKey>
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
    return { ...getBulkjobsV4HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getBulkjobsV4VersionQueryKey() {
  return ['bulkjobs', '/bulkjobs/v4/version'] as const
}

export function getBulkjobsV4VersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBulkjobsV4VersionQueryKey>
  >({
    queryKey: getBulkjobsV4VersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.bulkjobs.v4.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBulkjobsV4Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.version.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBulkjobsV4VersionQueryKey>
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
    return { ...getBulkjobsV4VersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostC2cV4CallbackMutationKey() {
  return ['c2c', '/c2c/v4/callback', 'POST'] as const
}

export function getPostC2cV4CallbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.callback.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.c2c.v4.callback.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostC2cV4CallbackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.c2c.v4.callback.$post>) {
      return parseResponse(client.c2c.v4.callback.$post(args, options))
    },
  })
}

export function createPostC2cV4Callback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.callback.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.c2c.v4.callback.$post>,
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
    const mutationDefaults = getPostC2cV4CallbackMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getC2cV4ConnectorsQueryKey(
  args: InferRequestType<typeof client.c2c.v4.connectors.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['c2c', '/c2c/v4/connectors', keyArgs] as const
}

export function getC2cV4ConnectorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.connectors.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.c2c.v4.connectors.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.connectors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getC2cV4ConnectorsQueryKey>
  >({
    queryKey: getC2cV4ConnectorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.c2c.v4.connectors.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createC2cV4Connectors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.connectors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.c2c.v4.connectors.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.connectors.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getC2cV4ConnectorsQueryKey>
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
    return { ...getC2cV4ConnectorsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostC2cV4ConnectorsMutationKey() {
  return ['c2c', '/c2c/v4/connectors', 'POST'] as const
}

export function getPostC2cV4ConnectorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.connectors.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.c2c.v4.connectors.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostC2cV4ConnectorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.c2c.v4.connectors.$post>) {
      return parseResponse(client.c2c.v4.connectors.$post(args, options))
    },
  })
}

export function createPostC2cV4Connectors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.connectors.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.c2c.v4.connectors.$post>,
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
    const mutationDefaults = getPostC2cV4ConnectorsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getC2cV4ConnectorsExtDevicesExternalDeviceIdQueryKey(
  args: InferRequestType<
    (typeof client.c2c.v4.connectors)['ext-devices'][':externalDeviceId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['c2c', '/c2c/v4/connectors/ext-devices/:externalDeviceId', keyArgs] as const
}

export function getC2cV4ConnectorsExtDevicesExternalDeviceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.c2c.v4.connectors)['ext-devices'][':externalDeviceId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.c2c.v4.connectors)['ext-devices'][':externalDeviceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getC2cV4ConnectorsExtDevicesExternalDeviceIdQueryKey>
  >({
    queryKey: getC2cV4ConnectorsExtDevicesExternalDeviceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.c2c.v4.connectors['ext-devices'][':externalDeviceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createC2cV4ConnectorsExtDevicesExternalDeviceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.c2c.v4.connectors)['ext-devices'][':externalDeviceId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.c2c.v4.connectors)['ext-devices'][':externalDeviceId']['$get']
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
                    (typeof client.c2c.v4.connectors)['ext-devices'][':externalDeviceId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getC2cV4ConnectorsExtDevicesExternalDeviceIdQueryKey>
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
      ...getC2cV4ConnectorsExtDevicesExternalDeviceIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getC2cV4ConnectorsConnectorIdQueryKey(
  args: InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['$get']>,
) {
  return ['c2c', '/c2c/v4/connectors/:connectorId', args] as const
}

export function getC2cV4ConnectorsConnectorIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.c2c.v4.connectors)[':connectorId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.c2c.v4.connectors)[':connectorId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getC2cV4ConnectorsConnectorIdQueryKey>
  >({
    queryKey: getC2cV4ConnectorsConnectorIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.c2c.v4.connectors[':connectorId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createC2cV4ConnectorsConnectorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.c2c.v4.connectors)[':connectorId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.c2c.v4.connectors)[':connectorId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getC2cV4ConnectorsConnectorIdQueryKey>
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
      ...getC2cV4ConnectorsConnectorIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutC2cV4ConnectorsConnectorIdMutationKey() {
  return ['c2c', '/c2c/v4/connectors/:connectorId', 'PUT'] as const
}

export function getPutC2cV4ConnectorsConnectorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.c2c.v4.connectors)[':connectorId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutC2cV4ConnectorsConnectorIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['$put']>,
    ) {
      return parseResponse(client.c2c.v4.connectors[':connectorId'].$put(args, options))
    },
  })
}

export function createPutC2cV4ConnectorsConnectorId<
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
                Awaited<ReturnType<(typeof client.c2c.v4.connectors)[':connectorId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['$put']>,
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
    const mutationDefaults = getPutC2cV4ConnectorsConnectorIdMutationOptions<
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

export function getDeleteC2cV4ConnectorsConnectorIdMutationKey() {
  return ['c2c', '/c2c/v4/connectors/:connectorId', 'DELETE'] as const
}

export function getDeleteC2cV4ConnectorsConnectorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.c2c.v4.connectors)[':connectorId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteC2cV4ConnectorsConnectorIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['$delete']>,
    ) {
      return parseResponse(client.c2c.v4.connectors[':connectorId'].$delete(args, options))
    },
  })
}

export function createDeleteC2cV4ConnectorsConnectorId<
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
                  Awaited<ReturnType<(typeof client.c2c.v4.connectors)[':connectorId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['$delete']>,
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
    const mutationDefaults = getDeleteC2cV4ConnectorsConnectorIdMutationOptions<
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

export function getC2cV4ConnectorsConnectorIdExtDevicesQueryKey(
  args: InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['c2c', '/c2c/v4/connectors/:connectorId/ext-devices', keyArgs] as const
}

export function getC2cV4ConnectorsConnectorIdExtDevicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getC2cV4ConnectorsConnectorIdExtDevicesQueryKey>
  >({
    queryKey: getC2cV4ConnectorsConnectorIdExtDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.c2c.v4.connectors[':connectorId']['ext-devices'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createC2cV4ConnectorsConnectorIdExtDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$get']
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
                    (typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getC2cV4ConnectorsConnectorIdExtDevicesQueryKey>
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
      ...getC2cV4ConnectorsConnectorIdExtDevicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostC2cV4ConnectorsConnectorIdExtDevicesMutationKey() {
  return ['c2c', '/c2c/v4/connectors/:connectorId/ext-devices', 'POST'] as const
}

export function getPostC2cV4ConnectorsConnectorIdExtDevicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostC2cV4ConnectorsConnectorIdExtDevicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$post']
      >,
    ) {
      return parseResponse(
        client.c2c.v4.connectors[':connectorId']['ext-devices'].$post(args, options),
      )
    },
  })
}

export function createPostC2cV4ConnectorsConnectorIdExtDevices<
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
                      (typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$post']
          >,
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
    const mutationDefaults = getPostC2cV4ConnectorsConnectorIdExtDevicesMutationOptions<
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

export function getDeleteC2cV4ConnectorsConnectorIdExtDevicesBatchMutationKey() {
  return ['c2c', '/c2c/v4/connectors/:connectorId/ext-devices-batch', 'DELETE'] as const
}

export function getDeleteC2cV4ConnectorsConnectorIdExtDevicesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.c2c.v4.connectors)[':connectorId']['ext-devices-batch']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteC2cV4ConnectorsConnectorIdExtDevicesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.c2c.v4.connectors)[':connectorId']['ext-devices-batch']['$delete']
      >,
    ) {
      return parseResponse(
        client.c2c.v4.connectors[':connectorId']['ext-devices-batch'].$delete(args, options),
      )
    },
  })
}

export function createDeleteC2cV4ConnectorsConnectorIdExtDevicesBatch<
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
                      (typeof client.c2c.v4.connectors)[':connectorId']['ext-devices-batch']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.c2c.v4.connectors)[':connectorId']['ext-devices-batch']['$delete']
          >,
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
    const mutationDefaults = getDeleteC2cV4ConnectorsConnectorIdExtDevicesBatchMutationOptions<
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

export function getDeleteC2cV4ConnectorsConnectorIdExtDevicesExternalDeviceIdMutationKey() {
  return ['c2c', '/c2c/v4/connectors/:connectorId/ext-devices/:externalDeviceId', 'DELETE'] as const
}

export function getDeleteC2cV4ConnectorsConnectorIdExtDevicesExternalDeviceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.c2c.v4.connectors)[':connectorId']['ext-devices'][':externalDeviceId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteC2cV4ConnectorsConnectorIdExtDevicesExternalDeviceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.c2c.v4.connectors)[':connectorId']['ext-devices'][':externalDeviceId']['$delete']
      >,
    ) {
      return parseResponse(
        client.c2c.v4.connectors[':connectorId']['ext-devices'][':externalDeviceId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteC2cV4ConnectorsConnectorIdExtDevicesExternalDeviceId<
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
                      (typeof client.c2c.v4.connectors)[':connectorId']['ext-devices'][':externalDeviceId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.c2c.v4.connectors)[':connectorId']['ext-devices'][':externalDeviceId']['$delete']
          >,
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
    const mutationDefaults =
      getDeleteC2cV4ConnectorsConnectorIdExtDevicesExternalDeviceIdMutationOptions<
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

export function getC2cV4DriversQueryKey(args: InferRequestType<typeof client.c2c.v4.drivers.$get>) {
  const { header: _, ...keyArgs } = args
  return ['c2c', '/c2c/v4/drivers', keyArgs] as const
}

export function getC2cV4DriversQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.drivers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.c2c.v4.drivers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.drivers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getC2cV4DriversQueryKey>
  >({
    queryKey: getC2cV4DriversQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.c2c.v4.drivers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createC2cV4Drivers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.drivers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.c2c.v4.drivers.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.drivers.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getC2cV4DriversQueryKey>
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
    return { ...getC2cV4DriversQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostC2cV4DriversDriverIdVerifyMutationKey() {
  return ['c2c', '/c2c/v4/drivers/:driverId/verify', 'POST'] as const
}

export function getPostC2cV4DriversDriverIdVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.c2c.v4.drivers)[':driverId']['verify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.c2c.v4.drivers)[':driverId']['verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostC2cV4DriversDriverIdVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.c2c.v4.drivers)[':driverId']['verify']['$post']>,
    ) {
      return parseResponse(client.c2c.v4.drivers[':driverId'].verify.$post(args, options))
    },
  })
}

export function createPostC2cV4DriversDriverIdVerify<
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
                Awaited<ReturnType<(typeof client.c2c.v4.drivers)[':driverId']['verify']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.c2c.v4.drivers)[':driverId']['verify']['$post']>,
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
    const mutationDefaults = getPostC2cV4DriversDriverIdVerifyMutationOptions<
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

export function getC2cV4HealthQueryKey() {
  return ['c2c', '/c2c/v4/health'] as const
}

export function getC2cV4HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getC2cV4HealthQueryKey>
  >({
    queryKey: getC2cV4HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.c2c.v4.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createC2cV4Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.health.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getC2cV4HealthQueryKey>
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
    return { ...getC2cV4HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getC2cV4VersionQueryKey() {
  return ['c2c', '/c2c/v4/version'] as const
}

export function getC2cV4VersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getC2cV4VersionQueryKey>
  >({
    queryKey: getC2cV4VersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.c2c.v4.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createC2cV4Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.version.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getC2cV4VersionQueryKey>
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
    return { ...getC2cV4VersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getDeviceAssociationsV2HealthQueryKey() {
  return ['device-associations', '/device-associations/v2/health'] as const
}

export function getDeviceAssociationsV2HealthQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['device-associations']['v2']['health']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['device-associations']['v2']['health']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeviceAssociationsV2HealthQueryKey>
  >({
    queryKey: getDeviceAssociationsV2HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['device-associations'].v2.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDeviceAssociationsV2Health<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['device-associations']['v2']['health']['$get']>>
      >
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
                Awaited<ReturnType<(typeof client)['device-associations']['v2']['health']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDeviceAssociationsV2HealthQueryKey>
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
    return { ...getDeviceAssociationsV2HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getDeviceAssociationsV2VersionQueryKey() {
  return ['device-associations', '/device-associations/v2/version'] as const
}

export function getDeviceAssociationsV2VersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['device-associations']['v2']['version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['device-associations']['v2']['version']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeviceAssociationsV2VersionQueryKey>
  >({
    queryKey: getDeviceAssociationsV2VersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['device-associations'].v2.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDeviceAssociationsV2Version<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['device-associations']['v2']['version']['$get']>>
      >
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
                Awaited<ReturnType<(typeof client)['device-associations']['v2']['version']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDeviceAssociationsV2VersionQueryKey>
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
    return { ...getDeviceAssociationsV2VersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getDeviceAssociationsV2TrackingIdGeofencesQueryKey(
  args: InferRequestType<
    (typeof client)['device-associations']['v2'][':trackingId']['geofences']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['device-associations', '/device-associations/v2/:trackingId/geofences', keyArgs] as const
}

export function getDeviceAssociationsV2TrackingIdGeofencesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['device-associations']['v2'][':trackingId']['geofences']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getDeviceAssociationsV2TrackingIdGeofencesQueryKey>
  >({
    queryKey: getDeviceAssociationsV2TrackingIdGeofencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['device-associations'].v2[':trackingId'].geofences.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDeviceAssociationsV2TrackingIdGeofences<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['device-associations']['v2'][':trackingId']['geofences']['$get']
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
                    (typeof client)['device-associations']['v2'][':trackingId']['geofences']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDeviceAssociationsV2TrackingIdGeofencesQueryKey>
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
      ...getDeviceAssociationsV2TrackingIdGeofencesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getEventsV3QueryKey(args: InferRequestType<typeof client.events.v3.$get>) {
  const { header: _, ...keyArgs } = args
  return ['events', '/events/v3', keyArgs] as const
}

export function getEventsV3QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.events.v3.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsV3QueryKey>
  >({
    queryKey: getEventsV3QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.v3.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEventsV3<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.events.v3.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getEventsV3QueryKey>
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
    return { ...getEventsV3QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEventsV3HealthQueryKey() {
  return ['events', '/events/v3/health'] as const
}

export function getEventsV3HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventsV3HealthQueryKey>
  >({
    queryKey: getEventsV3HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.events.v3.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEventsV3Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.health.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEventsV3HealthQueryKey>
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
    return { ...getEventsV3HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getEventsV3StatusesQueryKey(
  args: InferRequestType<typeof client.events.v3.statuses.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['events', '/events/v3/statuses', keyArgs] as const
}

export function getEventsV3StatusesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.statuses.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.events.v3.statuses.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.statuses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventsV3StatusesQueryKey>
  >({
    queryKey: getEventsV3StatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.v3.statuses.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEventsV3Statuses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.statuses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.events.v3.statuses.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.statuses.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEventsV3StatusesQueryKey>
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
    return { ...getEventsV3StatusesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEventsV3StatusesDeviceCountsQueryKey(
  args: InferRequestType<typeof client.events.v3.statuses.deviceCounts.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['events', '/events/v3/statuses/deviceCounts', keyArgs] as const
}

export function getEventsV3StatusesDeviceCountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.statuses.deviceCounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.events.v3.statuses.deviceCounts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.events.v3.statuses.deviceCounts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsV3StatusesDeviceCountsQueryKey>
  >({
    queryKey: getEventsV3StatusesDeviceCountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.v3.statuses.deviceCounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEventsV3StatusesDeviceCounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.statuses.deviceCounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.events.v3.statuses.deviceCounts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.events.v3.statuses.deviceCounts.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEventsV3StatusesDeviceCountsQueryKey>
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
      ...getEventsV3StatusesDeviceCountsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getEventsV3VersionQueryKey() {
  return ['events', '/events/v3/version'] as const
}

export function getEventsV3VersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventsV3VersionQueryKey>
  >({
    queryKey: getEventsV3VersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.events.v3.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEventsV3Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.version.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEventsV3VersionQueryKey>
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
    return { ...getEventsV3VersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getEventsV3TrackingIdQueryKey(
  args: InferRequestType<(typeof client.events.v3)[':trackingId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['events', '/events/v3/:trackingId', keyArgs] as const
}

export function getEventsV3TrackingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events.v3)[':trackingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events.v3)[':trackingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events.v3)[':trackingId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsV3TrackingIdQueryKey>
  >({
    queryKey: getEventsV3TrackingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.v3[':trackingId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEventsV3TrackingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events.v3)[':trackingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.events.v3)[':trackingId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events.v3)[':trackingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEventsV3TrackingIdQueryKey>
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
    return { ...getEventsV3TrackingIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getGeofenceAssociationsV2HealthQueryKey() {
  return ['geofence-associations', '/geofence-associations/v2/health'] as const
}

export function getGeofenceAssociationsV2HealthQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['geofence-associations']['v2']['health']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['geofence-associations']['v2']['health']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGeofenceAssociationsV2HealthQueryKey>
  >({
    queryKey: getGeofenceAssociationsV2HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['geofence-associations'].v2.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGeofenceAssociationsV2Health<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['geofence-associations']['v2']['health']['$get']>>
      >
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
                Awaited<
                  ReturnType<(typeof client)['geofence-associations']['v2']['health']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGeofenceAssociationsV2HealthQueryKey>
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
      ...getGeofenceAssociationsV2HealthQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getGeofenceAssociationsV2VersionQueryKey() {
  return ['geofence-associations', '/geofence-associations/v2/version'] as const
}

export function getGeofenceAssociationsV2VersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['geofence-associations']['v2']['version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['geofence-associations']['v2']['version']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGeofenceAssociationsV2VersionQueryKey>
  >({
    queryKey: getGeofenceAssociationsV2VersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['geofence-associations'].v2.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGeofenceAssociationsV2Version<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['geofence-associations']['v2']['version']['$get']>>
      >
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
                Awaited<
                  ReturnType<(typeof client)['geofence-associations']['v2']['version']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGeofenceAssociationsV2VersionQueryKey>
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
      ...getGeofenceAssociationsV2VersionQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getGeofenceAssociationsV2GeofenceIdDevicesQueryKey(
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

export function getGeofenceAssociationsV2GeofenceIdDevicesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['geofence-associations']['v2'][':geofenceId']['devices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getGeofenceAssociationsV2GeofenceIdDevicesQueryKey>
  >({
    queryKey: getGeofenceAssociationsV2GeofenceIdDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['geofence-associations'].v2[':geofenceId'].devices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGeofenceAssociationsV2GeofenceIdDevices<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['geofence-associations']['v2'][':geofenceId']['devices']['$get']
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
                    (typeof client)['geofence-associations']['v2'][':geofenceId']['devices']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGeofenceAssociationsV2GeofenceIdDevicesQueryKey>
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
      ...getGeofenceAssociationsV2GeofenceIdDevicesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutGeofenceAssociationsV2GeofenceIdTrackingIdMutationKey() {
  return [
    'geofence-associations',
    '/geofence-associations/v2/:geofenceId/:trackingId',
    'PUT',
  ] as const
}

export function getPutGeofenceAssociationsV2GeofenceIdTrackingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['geofence-associations']['v2'][':geofenceId'][':trackingId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutGeofenceAssociationsV2GeofenceIdTrackingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['geofence-associations']['v2'][':geofenceId'][':trackingId']['$put']
      >,
    ) {
      return parseResponse(
        client['geofence-associations'].v2[':geofenceId'][':trackingId'].$put(args, options),
      )
    },
  })
}

export function createPutGeofenceAssociationsV2GeofenceIdTrackingId<
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
                    (typeof client)['geofence-associations']['v2'][':geofenceId'][':trackingId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['geofence-associations']['v2'][':geofenceId'][':trackingId']['$put']
          >,
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
    const mutationDefaults = getPutGeofenceAssociationsV2GeofenceIdTrackingIdMutationOptions<
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

export function getDeleteGeofenceAssociationsV2GeofenceIdTrackingIdMutationKey() {
  return [
    'geofence-associations',
    '/geofence-associations/v2/:geofenceId/:trackingId',
    'DELETE',
  ] as const
}

export function getDeleteGeofenceAssociationsV2GeofenceIdTrackingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['geofence-associations']['v2'][':geofenceId'][':trackingId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGeofenceAssociationsV2GeofenceIdTrackingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['geofence-associations']['v2'][':geofenceId'][':trackingId']['$delete']
      >,
    ) {
      return parseResponse(
        client['geofence-associations'].v2[':geofenceId'][':trackingId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteGeofenceAssociationsV2GeofenceIdTrackingId<
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
                      (typeof client)['geofence-associations']['v2'][':geofenceId'][':trackingId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['geofence-associations']['v2'][':geofenceId'][':trackingId']['$delete']
          >,
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
    const mutationDefaults = getDeleteGeofenceAssociationsV2GeofenceIdTrackingIdMutationOptions<
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

export function getGeofencesV2QueryKey(args: InferRequestType<typeof client.geofences.v2.$get>) {
  const { header: _, ...keyArgs } = args
  return ['geofences', '/geofences/v2', keyArgs] as const
}

export function getGeofencesV2QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.geofences.v2.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGeofencesV2QueryKey>
  >({
    queryKey: getGeofencesV2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.geofences.v2.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGeofencesV2<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.geofences.v2.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getGeofencesV2QueryKey>
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
    return { ...getGeofencesV2QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostGeofencesV2MutationKey() {
  return ['geofences', '/geofences/v2', 'POST'] as const
}

export function getPostGeofencesV2MutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.geofences.v2.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGeofencesV2MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.geofences.v2.$post>) {
      return parseResponse(client.geofences.v2.$post(args, options))
    },
  })
}

export function createPostGeofencesV2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.geofences.v2.$post>,
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
    const mutationDefaults = getPostGeofencesV2MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteGeofencesV2MutationKey() {
  return ['geofences', '/geofences/v2', 'DELETE'] as const
}

export function getDeleteGeofencesV2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.$delete>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.geofences.v2.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGeofencesV2MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.geofences.v2.$delete>) {
      return parseResponse(client.geofences.v2.$delete(args, options))
    },
  })
}

export function createDeleteGeofencesV2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.geofences.v2.$delete>,
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
    const mutationDefaults = getDeleteGeofencesV2MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGeofencesV2HealthQueryKey() {
  return ['geofences', '/geofences/v2/health'] as const
}

export function getGeofencesV2HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGeofencesV2HealthQueryKey>
  >({
    queryKey: getGeofencesV2HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.geofences.v2.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGeofencesV2Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.health.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGeofencesV2HealthQueryKey>
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
    return { ...getGeofencesV2HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostGeofencesV2TrainingTestMutationKey() {
  return ['geofences', '/geofences/v2/trainingTest', 'POST'] as const
}

export function getPostGeofencesV2TrainingTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.trainingTest.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.geofences.v2.trainingTest.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGeofencesV2TrainingTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.geofences.v2.trainingTest.$post>) {
      return parseResponse(client.geofences.v2.trainingTest.$post(args, options))
    },
  })
}

export function createPostGeofencesV2TrainingTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.geofences.v2.trainingTest.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.geofences.v2.trainingTest.$post>,
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
    const mutationDefaults = getPostGeofencesV2TrainingTestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGeofencesV2VersionQueryKey() {
  return ['geofences', '/geofences/v2/version'] as const
}

export function getGeofencesV2VersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGeofencesV2VersionQueryKey>
  >({
    queryKey: getGeofencesV2VersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.geofences.v2.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGeofencesV2Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.version.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGeofencesV2VersionQueryKey>
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
    return { ...getGeofencesV2VersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getGeofencesV2GeofenceIdQueryKey(
  args: InferRequestType<(typeof client.geofences.v2)[':geofenceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['geofences', '/geofences/v2/:geofenceId', keyArgs] as const
}

export function getGeofencesV2GeofenceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.geofences.v2)[':geofenceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.geofences.v2)[':geofenceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.geofences.v2)[':geofenceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGeofencesV2GeofenceIdQueryKey>
  >({
    queryKey: getGeofencesV2GeofenceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.geofences.v2[':geofenceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGeofencesV2GeofenceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.geofences.v2)[':geofenceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.geofences.v2)[':geofenceId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.geofences.v2)[':geofenceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGeofencesV2GeofenceIdQueryKey>
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
      ...getGeofencesV2GeofenceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutGeofencesV2GeofenceIdMutationKey() {
  return ['geofences', '/geofences/v2/:geofenceId', 'PUT'] as const
}

export function getPutGeofencesV2GeofenceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.geofences.v2)[':geofenceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.geofences.v2)[':geofenceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGeofencesV2GeofenceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.geofences.v2)[':geofenceId']['$put']>) {
      return parseResponse(client.geofences.v2[':geofenceId'].$put(args, options))
    },
  })
}

export function createPutGeofencesV2GeofenceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.geofences.v2)[':geofenceId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.geofences.v2)[':geofenceId']['$put']>,
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
    const mutationDefaults = getPutGeofencesV2GeofenceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteGeofencesV2GeofenceIdMutationKey() {
  return ['geofences', '/geofences/v2/:geofenceId', 'DELETE'] as const
}

export function getDeleteGeofencesV2GeofenceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.geofences.v2)[':geofenceId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.geofences.v2)[':geofenceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGeofencesV2GeofenceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.geofences.v2)[':geofenceId']['$delete']>,
    ) {
      return parseResponse(client.geofences.v2[':geofenceId'].$delete(args, options))
    },
  })
}

export function createDeleteGeofencesV2GeofenceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.geofences.v2)[':geofenceId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.geofences.v2)[':geofenceId']['$delete']>,
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
    const mutationDefaults = getDeleteGeofencesV2GeofenceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGeofencesV2GeofenceIdPoiTrainingMutationKey() {
  return ['geofences', '/geofences/v2/:geofenceId/poiTraining', 'POST'] as const
}

export function getPostGeofencesV2GeofenceIdPoiTrainingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.geofences.v2)[':geofenceId']['poiTraining']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.geofences.v2)[':geofenceId']['poiTraining']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGeofencesV2GeofenceIdPoiTrainingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.geofences.v2)[':geofenceId']['poiTraining']['$post']>,
    ) {
      return parseResponse(client.geofences.v2[':geofenceId'].poiTraining.$post(args, options))
    },
  })
}

export function createPostGeofencesV2GeofenceIdPoiTraining<
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
                  ReturnType<(typeof client.geofences.v2)[':geofenceId']['poiTraining']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.geofences.v2)[':geofenceId']['poiTraining']['$post']>,
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
    const mutationDefaults = getPostGeofencesV2GeofenceIdPoiTrainingMutationOptions<
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

export function getLabelsV4HealthQueryKey() {
  return ['labels', '/labels/v4/health'] as const
}

export function getLabelsV4HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.v4.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.v4.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLabelsV4HealthQueryKey>
  >({
    queryKey: getLabelsV4HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.labels.v4.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLabelsV4Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.v4.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.labels.v4.health.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getLabelsV4HealthQueryKey>
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
    return { ...getLabelsV4HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLabelsV4VersionQueryKey() {
  return ['labels', '/labels/v4/version'] as const
}

export function getLabelsV4VersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.v4.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.v4.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLabelsV4VersionQueryKey>
  >({
    queryKey: getLabelsV4VersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.labels.v4.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLabelsV4Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.v4.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.labels.v4.version.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getLabelsV4VersionQueryKey>
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
    return { ...getLabelsV4VersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLabelsV4ResourceTypeQueryKey(
  args: InferRequestType<(typeof client.labels.v4)[':resourceType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['labels', '/labels/v4/:resourceType', keyArgs] as const
}

export function getLabelsV4ResourceTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.labels.v4)[':resourceType']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.labels.v4)[':resourceType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.labels.v4)[':resourceType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLabelsV4ResourceTypeQueryKey>
  >({
    queryKey: getLabelsV4ResourceTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.labels.v4[':resourceType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLabelsV4ResourceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.labels.v4)[':resourceType']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.labels.v4)[':resourceType']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.labels.v4)[':resourceType']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getLabelsV4ResourceTypeQueryKey>
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
      ...getLabelsV4ResourceTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLabelsV4ResourceTypeKeysQueryKey(
  args: InferRequestType<(typeof client.labels.v4)[':resourceType']['keys']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['labels', '/labels/v4/:resourceType/keys', keyArgs] as const
}

export function getLabelsV4ResourceTypeKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.labels.v4)[':resourceType']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.labels.v4)[':resourceType']['keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.labels.v4)[':resourceType']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLabelsV4ResourceTypeKeysQueryKey>
  >({
    queryKey: getLabelsV4ResourceTypeKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.labels.v4[':resourceType'].keys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLabelsV4ResourceTypeKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.labels.v4)[':resourceType']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.labels.v4)[':resourceType']['keys']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.labels.v4)[':resourceType']['keys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getLabelsV4ResourceTypeKeysQueryKey>
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
      ...getLabelsV4ResourceTypeKeysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLabelsV4ResourceTypeKeysKeyValuesQueryKey(
  args: InferRequestType<
    (typeof client.labels.v4)[':resourceType']['keys'][':key']['values']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['labels', '/labels/v4/:resourceType/keys/:key/values', keyArgs] as const
}

export function getLabelsV4ResourceTypeKeysKeyValuesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.labels.v4)[':resourceType']['keys'][':key']['values']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.labels.v4)[':resourceType']['keys'][':key']['values']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.labels.v4)[':resourceType']['keys'][':key']['values']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLabelsV4ResourceTypeKeysKeyValuesQueryKey>
  >({
    queryKey: getLabelsV4ResourceTypeKeysKeyValuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.labels.v4[':resourceType'].keys[':key'].values.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLabelsV4ResourceTypeKeysKeyValues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.labels.v4)[':resourceType']['keys'][':key']['values']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.labels.v4)[':resourceType']['keys'][':key']['values']['$get']
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
                    (typeof client.labels.v4)[':resourceType']['keys'][':key']['values']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getLabelsV4ResourceTypeKeysKeyValuesQueryKey>
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
      ...getLabelsV4ResourceTypeKeysKeyValuesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLabelsV4ResourceTypeResourceIdQueryKey(
  args: InferRequestType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['labels', '/labels/v4/:resourceType/:resourceId', keyArgs] as const
}

export function getLabelsV4ResourceTypeResourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLabelsV4ResourceTypeResourceIdQueryKey>
  >({
    queryKey: getLabelsV4ResourceTypeResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.labels.v4[':resourceType'][':resourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLabelsV4ResourceTypeResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getLabelsV4ResourceTypeResourceIdQueryKey>
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
      ...getLabelsV4ResourceTypeResourceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteLabelsV4ResourceTypeResourceIdMutationKey() {
  return ['labels', '/labels/v4/:resourceType/:resourceId', 'DELETE'] as const
}

export function getDeleteLabelsV4ResourceTypeResourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLabelsV4ResourceTypeResourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$delete']>,
    ) {
      return parseResponse(client.labels.v4[':resourceType'][':resourceId'].$delete(args, options))
    },
  })
}

export function createDeleteLabelsV4ResourceTypeResourceId<
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
                    ReturnType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$delete']>,
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
    const mutationDefaults = getDeleteLabelsV4ResourceTypeResourceIdMutationOptions<
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

export function getPutLabelsV4ResourceTypeResourceIdBatchMutationKey() {
  return ['labels', '/labels/v4/:resourceType/:resourceId/batch', 'PUT'] as const
}

export function getPutLabelsV4ResourceTypeResourceIdBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.labels.v4)[':resourceType'][':resourceId']['batch']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLabelsV4ResourceTypeResourceIdBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.labels.v4)[':resourceType'][':resourceId']['batch']['$put']
      >,
    ) {
      return parseResponse(
        client.labels.v4[':resourceType'][':resourceId'].batch.$put(args, options),
      )
    },
  })
}

export function createPutLabelsV4ResourceTypeResourceIdBatch<
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
                    (typeof client.labels.v4)[':resourceType'][':resourceId']['batch']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.labels.v4)[':resourceType'][':resourceId']['batch']['$put']
          >,
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
    const mutationDefaults = getPutLabelsV4ResourceTypeResourceIdBatchMutationOptions<
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

export function getDeleteLabelsV4ResourceTypeResourceIdKeyMutationKey() {
  return ['labels', '/labels/v4/:resourceType/:resourceId/:key', 'DELETE'] as const
}

export function getDeleteLabelsV4ResourceTypeResourceIdKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.labels.v4)[':resourceType'][':resourceId'][':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLabelsV4ResourceTypeResourceIdKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.labels.v4)[':resourceType'][':resourceId'][':key']['$delete']
      >,
    ) {
      return parseResponse(
        client.labels.v4[':resourceType'][':resourceId'][':key'].$delete(args, options),
      )
    },
  })
}

export function createDeleteLabelsV4ResourceTypeResourceIdKey<
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
                      (typeof client.labels.v4)[':resourceType'][':resourceId'][':key']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.labels.v4)[':resourceType'][':resourceId'][':key']['$delete']
          >,
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
    const mutationDefaults = getDeleteLabelsV4ResourceTypeResourceIdKeyMutationOptions<
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

export function getPutLabelsV4ResourceTypeResourceIdKeyValueMutationKey() {
  return ['labels', '/labels/v4/:resourceType/:resourceId/:key/:value', 'PUT'] as const
}

export function getPutLabelsV4ResourceTypeResourceIdKeyValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.labels.v4)[':resourceType'][':resourceId'][':key'][':value']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutLabelsV4ResourceTypeResourceIdKeyValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.labels.v4)[':resourceType'][':resourceId'][':key'][':value']['$put']
      >,
    ) {
      return parseResponse(
        client.labels.v4[':resourceType'][':resourceId'][':key'][':value'].$put(args, options),
      )
    },
  })
}

export function createPutLabelsV4ResourceTypeResourceIdKeyValue<
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
                    (typeof client.labels.v4)[':resourceType'][':resourceId'][':key'][':value']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.labels.v4)[':resourceType'][':resourceId'][':key'][':value']['$put']
          >,
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
    const mutationDefaults = getPutLabelsV4ResourceTypeResourceIdKeyValueMutationOptions<
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

export function getDeleteLabelsV4ResourceTypeResourceIdKeyValueMutationKey() {
  return ['labels', '/labels/v4/:resourceType/:resourceId/:key/:value', 'DELETE'] as const
}

export function getDeleteLabelsV4ResourceTypeResourceIdKeyValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.labels.v4)[':resourceType'][':resourceId'][':key'][':value']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteLabelsV4ResourceTypeResourceIdKeyValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.labels.v4)[':resourceType'][':resourceId'][':key'][':value']['$delete']
      >,
    ) {
      return parseResponse(
        client.labels.v4[':resourceType'][':resourceId'][':key'][':value'].$delete(args, options),
      )
    },
  })
}

export function createDeleteLabelsV4ResourceTypeResourceIdKeyValue<
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
                      (typeof client.labels.v4)[':resourceType'][':resourceId'][':key'][':value']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.labels.v4)[':resourceType'][':resourceId'][':key'][':value']['$delete']
          >,
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
    const mutationDefaults = getDeleteLabelsV4ResourceTypeResourceIdKeyValueMutationOptions<
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

export function getPostLargedataV4MutationKey() {
  return ['largedata', '/largedata/v4', 'POST'] as const
}

export function getPostLargedataV4MutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.largedata.v4.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.largedata.v4.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLargedataV4MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.largedata.v4.$post>) {
      return parseResponse(client.largedata.v4.$post(args, options))
    },
  })
}

export function createPostLargedataV4<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.largedata.v4.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.largedata.v4.$post>,
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
    const mutationDefaults = getPostLargedataV4MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLargedataV4DevicesTrackingIdMetadataQueryKey(
  args: InferRequestType<(typeof client.largedata.v4.devices)[':trackingId']['metadata']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['largedata', '/largedata/v4/devices/:trackingId/metadata', keyArgs] as const
}

export function getLargedataV4DevicesTrackingIdMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.largedata.v4.devices)[':trackingId']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.largedata.v4.devices)[':trackingId']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.largedata.v4.devices)[':trackingId']['metadata']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLargedataV4DevicesTrackingIdMetadataQueryKey>
  >({
    queryKey: getLargedataV4DevicesTrackingIdMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.largedata.v4.devices[':trackingId'].metadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLargedataV4DevicesTrackingIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.largedata.v4.devices)[':trackingId']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.largedata.v4.devices)[':trackingId']['metadata']['$get']
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
                    (typeof client.largedata.v4.devices)[':trackingId']['metadata']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getLargedataV4DevicesTrackingIdMetadataQueryKey>
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
      ...getLargedataV4DevicesTrackingIdMetadataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLargedataV4HealthQueryKey() {
  return ['largedata', '/largedata/v4/health'] as const
}

export function getLargedataV4HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.largedata.v4.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.largedata.v4.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLargedataV4HealthQueryKey>
  >({
    queryKey: getLargedataV4HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.largedata.v4.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLargedataV4Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.largedata.v4.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.largedata.v4.health.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getLargedataV4HealthQueryKey>
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
    return { ...getLargedataV4HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLargedataV4VersionQueryKey() {
  return ['largedata', '/largedata/v4/version'] as const
}

export function getLargedataV4VersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.largedata.v4.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.largedata.v4.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLargedataV4VersionQueryKey>
  >({
    queryKey: getLargedataV4VersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.largedata.v4.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLargedataV4Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.largedata.v4.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.largedata.v4.version.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getLargedataV4VersionQueryKey>
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
    return { ...getLargedataV4VersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostLargedataV4DataIdMutationKey() {
  return ['largedata', '/largedata/v4/:dataId', 'POST'] as const
}

export function getPostLargedataV4DataIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.largedata.v4)[':dataId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLargedataV4DataIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.largedata.v4)[':dataId']['$post']>) {
      return parseResponse(client.largedata.v4[':dataId'].$post(args, options))
    },
  })
}

export function createPostLargedataV4DataId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.largedata.v4)[':dataId']['$post']>,
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
    const mutationDefaults = getPostLargedataV4DataIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteLargedataV4DataIdMutationKey() {
  return ['largedata', '/largedata/v4/:dataId', 'DELETE'] as const
}

export function getDeleteLargedataV4DataIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.largedata.v4)[':dataId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLargedataV4DataIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.largedata.v4)[':dataId']['$delete']>) {
      return parseResponse(client.largedata.v4[':dataId'].$delete(args, options))
    },
  })
}

export function createDeleteLargedataV4DataId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.largedata.v4)[':dataId']['$delete']>,
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
    const mutationDefaults = getDeleteLargedataV4DataIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLargedataV4DataIdDataQueryKey(
  args: InferRequestType<(typeof client.largedata.v4)[':dataId']['data']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['largedata', '/largedata/v4/:dataId/data', keyArgs] as const
}

export function getLargedataV4DataIdDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.largedata.v4)[':dataId']['data']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['data']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLargedataV4DataIdDataQueryKey>
  >({
    queryKey: getLargedataV4DataIdDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.largedata.v4[':dataId'].data.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLargedataV4DataIdData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.largedata.v4)[':dataId']['data']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['data']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getLargedataV4DataIdDataQueryKey>
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
      ...getLargedataV4DataIdDataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLargedataV4DataIdMetadataQueryKey(
  args: InferRequestType<(typeof client.largedata.v4)[':dataId']['metadata']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['largedata', '/largedata/v4/:dataId/metadata', keyArgs] as const
}

export function getLargedataV4DataIdMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.largedata.v4)[':dataId']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['metadata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLargedataV4DataIdMetadataQueryKey>
  >({
    queryKey: getLargedataV4DataIdMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.largedata.v4[':dataId'].metadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLargedataV4DataIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.largedata.v4)[':dataId']['metadata']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['metadata']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getLargedataV4DataIdMetadataQueryKey>
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
      ...getLargedataV4DataIdMetadataQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLargedataV4DataIdPartsQueryKey(
  args: InferRequestType<(typeof client.largedata.v4)[':dataId']['parts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['largedata', '/largedata/v4/:dataId/parts', keyArgs] as const
}

export function getLargedataV4DataIdPartsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['parts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.largedata.v4)[':dataId']['parts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['parts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLargedataV4DataIdPartsQueryKey>
  >({
    queryKey: getLargedataV4DataIdPartsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.largedata.v4[':dataId'].parts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLargedataV4DataIdParts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['parts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.largedata.v4)[':dataId']['parts']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['parts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getLargedataV4DataIdPartsQueryKey>
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
      ...getLargedataV4DataIdPartsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutLargedataV4DataIdPartsPartNumberMutationKey() {
  return ['largedata', '/largedata/v4/:dataId/parts/:partNumber', 'PUT'] as const
}

export function getPutLargedataV4DataIdPartsPartNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.largedata.v4)[':dataId']['parts'][':partNumber']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLargedataV4DataIdPartsPartNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.largedata.v4)[':dataId']['parts'][':partNumber']['$put']
      >,
    ) {
      return parseResponse(client.largedata.v4[':dataId'].parts[':partNumber'].$put(args, options))
    },
  })
}

export function createPutLargedataV4DataIdPartsPartNumber<
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
                      (typeof client.largedata.v4)[':dataId']['parts'][':partNumber']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.largedata.v4)[':dataId']['parts'][':partNumber']['$put']>,
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
    const mutationDefaults = getPutLargedataV4DataIdPartsPartNumberMutationOptions<
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

export function getLocationsV4QueryKey(args: InferRequestType<typeof client.locations.v4.$get>) {
  const { header: _, ...keyArgs } = args
  return ['locations', '/locations/v4', keyArgs] as const
}

export function getLocationsV4QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.locations.v4.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLocationsV4QueryKey>
  >({
    queryKey: getLocationsV4QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.locations.v4.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLocationsV4<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.locations.v4.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getLocationsV4QueryKey>
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
    return { ...getLocationsV4QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostLocationsV4MutationKey() {
  return ['locations', '/locations/v4', 'POST'] as const
}

export function getPostLocationsV4MutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.locations.v4.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLocationsV4MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.locations.v4.$post>) {
      return parseResponse(client.locations.v4.$post(args, options))
    },
  })
}

export function createPostLocationsV4<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.locations.v4.$post>,
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
    const mutationDefaults = getPostLocationsV4MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteLocationsV4MutationKey() {
  return ['locations', '/locations/v4', 'DELETE'] as const
}

export function getDeleteLocationsV4MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.$delete>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.locations.v4.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLocationsV4MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.locations.v4.$delete>) {
      return parseResponse(client.locations.v4.$delete(args, options))
    },
  })
}

export function createDeleteLocationsV4<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.locations.v4.$delete>,
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
    const mutationDefaults = getDeleteLocationsV4MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getLocationsV4HealthQueryKey() {
  return ['locations', '/locations/v4/health'] as const
}

export function getLocationsV4HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLocationsV4HealthQueryKey>
  >({
    queryKey: getLocationsV4HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.locations.v4.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLocationsV4Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.health.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getLocationsV4HealthQueryKey>
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
    return { ...getLocationsV4HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLocationsV4VersionQueryKey() {
  return ['locations', '/locations/v4/version'] as const
}

export function getLocationsV4VersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLocationsV4VersionQueryKey>
  >({
    queryKey: getLocationsV4VersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.locations.v4.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLocationsV4Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.version.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getLocationsV4VersionQueryKey>
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
    return { ...getLocationsV4VersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getLocationsV4LocationIdQueryKey(
  args: InferRequestType<(typeof client.locations.v4)[':locationId']['$get']>,
) {
  return ['locations', '/locations/v4/:locationId', args] as const
}

export function getLocationsV4LocationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.locations.v4)[':locationId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.locations.v4)[':locationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.locations.v4)[':locationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLocationsV4LocationIdQueryKey>
  >({
    queryKey: getLocationsV4LocationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.locations.v4[':locationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLocationsV4LocationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.locations.v4)[':locationId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.locations.v4)[':locationId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.locations.v4)[':locationId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getLocationsV4LocationIdQueryKey>
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
      ...getLocationsV4LocationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutLocationsV4LocationIdMutationKey() {
  return ['locations', '/locations/v4/:locationId', 'PUT'] as const
}

export function getPutLocationsV4LocationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.locations.v4)[':locationId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.locations.v4)[':locationId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLocationsV4LocationIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.locations.v4)[':locationId']['$put']>) {
      return parseResponse(client.locations.v4[':locationId'].$put(args, options))
    },
  })
}

export function createPutLocationsV4LocationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.locations.v4)[':locationId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.locations.v4)[':locationId']['$put']>,
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
    const mutationDefaults = getPutLocationsV4LocationIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteLocationsV4LocationIdMutationKey() {
  return ['locations', '/locations/v4/:locationId', 'DELETE'] as const
}

export function getDeleteLocationsV4LocationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.locations.v4)[':locationId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.locations.v4)[':locationId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLocationsV4LocationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.locations.v4)[':locationId']['$delete']>,
    ) {
      return parseResponse(client.locations.v4[':locationId'].$delete(args, options))
    },
  })
}

export function createDeleteLocationsV4LocationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.locations.v4)[':locationId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.locations.v4)[':locationId']['$delete']>,
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
    const mutationDefaults = getDeleteLocationsV4LocationIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMetadataV2DevicesBatchMutationKey() {
  return ['metadata', '/metadata/v2/devices/batch', 'POST'] as const
}

export function getPostMetadataV2DevicesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.devices.batch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.metadata.v2.devices.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMetadataV2DevicesBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.metadata.v2.devices.batch.$post>) {
      return parseResponse(client.metadata.v2.devices.batch.$post(args, options))
    },
  })
}

export function createPostMetadataV2DevicesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.metadata.v2.devices.batch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.metadata.v2.devices.batch.$post>,
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
    const mutationDefaults = getPostMetadataV2DevicesBatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMetadataV2DevicesTrackingIdQueryKey(
  args: InferRequestType<(typeof client.metadata.v2.devices)[':trackingId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['metadata', '/metadata/v2/devices/:trackingId', keyArgs] as const
}

export function getMetadataV2DevicesTrackingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metadata.v2.devices)[':trackingId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metadata.v2.devices)[':trackingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metadata.v2.devices)[':trackingId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataV2DevicesTrackingIdQueryKey>
  >({
    queryKey: getMetadataV2DevicesTrackingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metadata.v2.devices[':trackingId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetadataV2DevicesTrackingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metadata.v2.devices)[':trackingId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.metadata.v2.devices)[':trackingId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metadata.v2.devices)[':trackingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMetadataV2DevicesTrackingIdQueryKey>
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
      ...getMetadataV2DevicesTrackingIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutMetadataV2DevicesTrackingIdMutationKey() {
  return ['metadata', '/metadata/v2/devices/:trackingId', 'PUT'] as const
}

export function getPutMetadataV2DevicesTrackingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metadata.v2.devices)[':trackingId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.metadata.v2.devices)[':trackingId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMetadataV2DevicesTrackingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.metadata.v2.devices)[':trackingId']['$put']>,
    ) {
      return parseResponse(client.metadata.v2.devices[':trackingId'].$put(args, options))
    },
  })
}

export function createPutMetadataV2DevicesTrackingId<
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
                Awaited<ReturnType<(typeof client.metadata.v2.devices)[':trackingId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.metadata.v2.devices)[':trackingId']['$put']>,
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
    const mutationDefaults = getPutMetadataV2DevicesTrackingIdMutationOptions<
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

export function getDeleteMetadataV2DevicesTrackingIdMutationKey() {
  return ['metadata', '/metadata/v2/devices/:trackingId', 'DELETE'] as const
}

export function getDeleteMetadataV2DevicesTrackingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.v2.devices)[':trackingId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.metadata.v2.devices)[':trackingId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMetadataV2DevicesTrackingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.metadata.v2.devices)[':trackingId']['$delete']>,
    ) {
      return parseResponse(client.metadata.v2.devices[':trackingId'].$delete(args, options))
    },
  })
}

export function createDeleteMetadataV2DevicesTrackingId<
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
                  Awaited<ReturnType<(typeof client.metadata.v2.devices)[':trackingId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.metadata.v2.devices)[':trackingId']['$delete']>,
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
    const mutationDefaults = getDeleteMetadataV2DevicesTrackingIdMutationOptions<
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

export function getPostMetadataV2GeofencesBatchMutationKey() {
  return ['metadata', '/metadata/v2/geofences/batch', 'POST'] as const
}

export function getPostMetadataV2GeofencesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.geofences.batch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.metadata.v2.geofences.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMetadataV2GeofencesBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.metadata.v2.geofences.batch.$post>) {
      return parseResponse(client.metadata.v2.geofences.batch.$post(args, options))
    },
  })
}

export function createPostMetadataV2GeofencesBatch<
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
                Awaited<ReturnType<typeof client.metadata.v2.geofences.batch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.metadata.v2.geofences.batch.$post>,
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
    const mutationDefaults = getPostMetadataV2GeofencesBatchMutationOptions<
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

export function getMetadataV2GeofencesGeofenceIdQueryKey(
  args: InferRequestType<(typeof client.metadata.v2.geofences)[':geofenceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['metadata', '/metadata/v2/geofences/:geofenceId', keyArgs] as const
}

export function getMetadataV2GeofencesGeofenceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metadata.v2.geofences)[':geofenceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metadata.v2.geofences)[':geofenceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metadata.v2.geofences)[':geofenceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataV2GeofencesGeofenceIdQueryKey>
  >({
    queryKey: getMetadataV2GeofencesGeofenceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metadata.v2.geofences[':geofenceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetadataV2GeofencesGeofenceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metadata.v2.geofences)[':geofenceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.metadata.v2.geofences)[':geofenceId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metadata.v2.geofences)[':geofenceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMetadataV2GeofencesGeofenceIdQueryKey>
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
      ...getMetadataV2GeofencesGeofenceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutMetadataV2GeofencesGeofenceIdMutationKey() {
  return ['metadata', '/metadata/v2/geofences/:geofenceId', 'PUT'] as const
}

export function getPutMetadataV2GeofencesGeofenceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metadata.v2.geofences)[':geofenceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.metadata.v2.geofences)[':geofenceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMetadataV2GeofencesGeofenceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.metadata.v2.geofences)[':geofenceId']['$put']>,
    ) {
      return parseResponse(client.metadata.v2.geofences[':geofenceId'].$put(args, options))
    },
  })
}

export function createPutMetadataV2GeofencesGeofenceId<
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
                Awaited<ReturnType<(typeof client.metadata.v2.geofences)[':geofenceId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.metadata.v2.geofences)[':geofenceId']['$put']>,
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
    const mutationDefaults = getPutMetadataV2GeofencesGeofenceIdMutationOptions<
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

export function getDeleteMetadataV2GeofencesGeofenceIdMutationKey() {
  return ['metadata', '/metadata/v2/geofences/:geofenceId', 'DELETE'] as const
}

export function getDeleteMetadataV2GeofencesGeofenceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.v2.geofences)[':geofenceId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.metadata.v2.geofences)[':geofenceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMetadataV2GeofencesGeofenceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.metadata.v2.geofences)[':geofenceId']['$delete']>,
    ) {
      return parseResponse(client.metadata.v2.geofences[':geofenceId'].$delete(args, options))
    },
  })
}

export function createDeleteMetadataV2GeofencesGeofenceId<
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
                    ReturnType<(typeof client.metadata.v2.geofences)[':geofenceId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.metadata.v2.geofences)[':geofenceId']['$delete']>,
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
    const mutationDefaults = getDeleteMetadataV2GeofencesGeofenceIdMutationOptions<
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

export function getMetadataV2HealthQueryKey() {
  return ['metadata', '/metadata/v2/health'] as const
}

export function getMetadataV2HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataV2HealthQueryKey>
  >({
    queryKey: getMetadataV2HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.metadata.v2.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetadataV2Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.health.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMetadataV2HealthQueryKey>
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
    return { ...getMetadataV2HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostMetadataV2SensorRulesBatchMutationKey() {
  return ['metadata', '/metadata/v2/sensorRules/batch', 'POST'] as const
}

export function getPostMetadataV2SensorRulesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.sensorRules.batch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.metadata.v2.sensorRules.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMetadataV2SensorRulesBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.metadata.v2.sensorRules.batch.$post>) {
      return parseResponse(client.metadata.v2.sensorRules.batch.$post(args, options))
    },
  })
}

export function createPostMetadataV2SensorRulesBatch<
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
                Awaited<ReturnType<typeof client.metadata.v2.sensorRules.batch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.metadata.v2.sensorRules.batch.$post>,
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
    const mutationDefaults = getPostMetadataV2SensorRulesBatchMutationOptions<
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

export function getMetadataV2SensorRulesSensorRuleIdQueryKey(
  args: InferRequestType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['metadata', '/metadata/v2/sensorRules/:sensorRuleId', keyArgs] as const
}

export function getMetadataV2SensorRulesSensorRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataV2SensorRulesSensorRuleIdQueryKey>
  >({
    queryKey: getMetadataV2SensorRulesSensorRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metadata.v2.sensorRules[':sensorRuleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetadataV2SensorRulesSensorRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMetadataV2SensorRulesSensorRuleIdQueryKey>
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
      ...getMetadataV2SensorRulesSensorRuleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutMetadataV2SensorRulesSensorRuleIdMutationKey() {
  return ['metadata', '/metadata/v2/sensorRules/:sensorRuleId', 'PUT'] as const
}

export function getPutMetadataV2SensorRulesSensorRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMetadataV2SensorRulesSensorRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$put']>,
    ) {
      return parseResponse(client.metadata.v2.sensorRules[':sensorRuleId'].$put(args, options))
    },
  })
}

export function createPutMetadataV2SensorRulesSensorRuleId<
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
                  ReturnType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$put']>,
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
    const mutationDefaults = getPutMetadataV2SensorRulesSensorRuleIdMutationOptions<
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

export function getDeleteMetadataV2SensorRulesSensorRuleIdMutationKey() {
  return ['metadata', '/metadata/v2/sensorRules/:sensorRuleId', 'DELETE'] as const
}

export function getDeleteMetadataV2SensorRulesSensorRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMetadataV2SensorRulesSensorRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$delete']>,
    ) {
      return parseResponse(client.metadata.v2.sensorRules[':sensorRuleId'].$delete(args, options))
    },
  })
}

export function createDeleteMetadataV2SensorRulesSensorRuleId<
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
                    ReturnType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$delete']>,
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
    const mutationDefaults = getDeleteMetadataV2SensorRulesSensorRuleIdMutationOptions<
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

export function getMetadataV2VersionQueryKey() {
  return ['metadata', '/metadata/v2/version'] as const
}

export function getMetadataV2VersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataV2VersionQueryKey>
  >({
    queryKey: getMetadataV2VersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.metadata.v2.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetadataV2Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.version.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMetadataV2VersionQueryKey>
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
    return { ...getMetadataV2VersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNotificationsV3HealthQueryKey() {
  return ['notifications', '/notifications/v3/health'] as const
}

export function getNotificationsV3HealthQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.health.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.health.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsV3HealthQueryKey>
  >({
    queryKey: getNotificationsV3HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications.v3.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNotificationsV3Health<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.health.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.health.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNotificationsV3HealthQueryKey>
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
    return { ...getNotificationsV3HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getNotificationsV3RegistrationChannelIdQueryKey(
  args: InferRequestType<(typeof client.notifications.v3.registration)[':channelId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['notifications', '/notifications/v3/registration/:channelId', keyArgs] as const
}

export function getNotificationsV3RegistrationChannelIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications.v3.registration)[':channelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications.v3.registration)[':channelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications.v3.registration)[':channelId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsV3RegistrationChannelIdQueryKey>
  >({
    queryKey: getNotificationsV3RegistrationChannelIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications.v3.registration[':channelId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNotificationsV3RegistrationChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications.v3.registration)[':channelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.notifications.v3.registration)[':channelId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.notifications.v3.registration)[':channelId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNotificationsV3RegistrationChannelIdQueryKey>
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
      ...getNotificationsV3RegistrationChannelIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutNotificationsV3RegistrationChannelIdMutationKey() {
  return ['notifications', '/notifications/v3/registration/:channelId', 'PUT'] as const
}

export function getPutNotificationsV3RegistrationChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications.v3.registration)[':channelId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications.v3.registration)[':channelId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNotificationsV3RegistrationChannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notifications.v3.registration)[':channelId']['$put']>,
    ) {
      return parseResponse(client.notifications.v3.registration[':channelId'].$put(args, options))
    },
  })
}

export function createPutNotificationsV3RegistrationChannelId<
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
                  ReturnType<(typeof client.notifications.v3.registration)[':channelId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.notifications.v3.registration)[':channelId']['$put']>,
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
    const mutationDefaults = getPutNotificationsV3RegistrationChannelIdMutationOptions<
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

export function getDeleteNotificationsV3RegistrationChannelIdMutationKey() {
  return ['notifications', '/notifications/v3/registration/:channelId', 'DELETE'] as const
}

export function getDeleteNotificationsV3RegistrationChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.notifications.v3.registration)[':channelId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNotificationsV3RegistrationChannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.notifications.v3.registration)[':channelId']['$delete']
      >,
    ) {
      return parseResponse(
        client.notifications.v3.registration[':channelId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteNotificationsV3RegistrationChannelId<
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
                      (typeof client.notifications.v3.registration)[':channelId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.notifications.v3.registration)[':channelId']['$delete']>,
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
    const mutationDefaults = getDeleteNotificationsV3RegistrationChannelIdMutationOptions<
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

export function getNotificationsV3RegistrationsQueryKey(
  args: InferRequestType<typeof client.notifications.v3.registrations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['notifications', '/notifications/v3/registrations', keyArgs] as const
}

export function getNotificationsV3RegistrationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.registrations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.notifications.v3.registrations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.registrations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsV3RegistrationsQueryKey>
  >({
    queryKey: getNotificationsV3RegistrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications.v3.registrations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNotificationsV3Registrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.registrations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.notifications.v3.registrations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.notifications.v3.registrations.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNotificationsV3RegistrationsQueryKey>
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
      ...getNotificationsV3RegistrationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostNotificationsV3RegistrationsMutationKey() {
  return ['notifications', '/notifications/v3/registrations', 'POST'] as const
}

export function getPostNotificationsV3RegistrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.notifications.v3.registrations.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.notifications.v3.registrations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationsV3RegistrationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.notifications.v3.registrations.$post>) {
      return parseResponse(client.notifications.v3.registrations.$post(args, options))
    },
  })
}

export function createPostNotificationsV3Registrations<
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
                Awaited<ReturnType<typeof client.notifications.v3.registrations.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.notifications.v3.registrations.$post>,
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
    const mutationDefaults = getPostNotificationsV3RegistrationsMutationOptions<
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

export function getDeleteNotificationsV3RegistrationsMutationKey() {
  return ['notifications', '/notifications/v3/registrations', 'DELETE'] as const
}

export function getDeleteNotificationsV3RegistrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.notifications.v3.registrations.$delete>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.notifications.v3.registrations.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNotificationsV3RegistrationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.notifications.v3.registrations.$delete>) {
      return parseResponse(client.notifications.v3.registrations.$delete(args, options))
    },
  })
}

export function createDeleteNotificationsV3Registrations<
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
                  Awaited<ReturnType<typeof client.notifications.v3.registrations.$delete>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.notifications.v3.registrations.$delete>,
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
    const mutationDefaults = getDeleteNotificationsV3RegistrationsMutationOptions<
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

export function getNotificationsV3VersionQueryKey() {
  return ['notifications', '/notifications/v3/version'] as const
}

export function getNotificationsV3VersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.version.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.version.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsV3VersionQueryKey>
  >({
    queryKey: getNotificationsV3VersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications.v3.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNotificationsV3Version<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.version.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.version.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getNotificationsV3VersionQueryKey>
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
    return { ...getNotificationsV3VersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getRegistryV2DevicesDeviceOrExternalIdQueryKey(
  args: InferRequestType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['registry', '/registry/v2/devices/:deviceOrExternalId', keyArgs] as const
}

export function getRegistryV2DevicesDeviceOrExternalIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistryV2DevicesDeviceOrExternalIdQueryKey>
  >({
    queryKey: getRegistryV2DevicesDeviceOrExternalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registry.v2.devices[':deviceOrExternalId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistryV2DevicesDeviceOrExternalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRegistryV2DevicesDeviceOrExternalIdQueryKey>
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
      ...getRegistryV2DevicesDeviceOrExternalIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutRegistryV2DevicesDeviceOrExternalIdMutationKey() {
  return ['registry', '/registry/v2/devices/:deviceOrExternalId', 'PUT'] as const
}

export function getPutRegistryV2DevicesDeviceOrExternalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRegistryV2DevicesDeviceOrExternalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$put']>,
    ) {
      return parseResponse(client.registry.v2.devices[':deviceOrExternalId'].$put(args, options))
    },
  })
}

export function createPutRegistryV2DevicesDeviceOrExternalId<
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
                  ReturnType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$put']>,
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
    const mutationDefaults = getPutRegistryV2DevicesDeviceOrExternalIdMutationOptions<
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

export function getDeleteRegistryV2DevicesDeviceOrExternalIdMutationKey() {
  return ['registry', '/registry/v2/devices/:deviceOrExternalId', 'DELETE'] as const
}

export function getDeleteRegistryV2DevicesDeviceOrExternalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRegistryV2DevicesDeviceOrExternalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$delete']>,
    ) {
      return parseResponse(client.registry.v2.devices[':deviceOrExternalId'].$delete(args, options))
    },
  })
}

export function createDeleteRegistryV2DevicesDeviceOrExternalId<
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
                      (typeof client.registry.v2.devices)[':deviceOrExternalId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$delete']>,
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
    const mutationDefaults = getDeleteRegistryV2DevicesDeviceOrExternalIdMutationOptions<
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

export function getRegistryV2HealthQueryKey() {
  return ['registry', '/registry/v2/health'] as const
}

export function getRegistryV2HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRegistryV2HealthQueryKey>
  >({
    queryKey: getRegistryV2HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.registry.v2.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistryV2Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.health.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRegistryV2HealthQueryKey>
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
    return { ...getRegistryV2HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getRegistryV2LicensesQueryKey(
  args: InferRequestType<typeof client.registry.v2.licenses.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['registry', '/registry/v2/licenses', keyArgs] as const
}

export function getRegistryV2LicensesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.licenses.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.registry.v2.licenses.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.licenses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRegistryV2LicensesQueryKey>
  >({
    queryKey: getRegistryV2LicensesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registry.v2.licenses.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRegistryV2Licenses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.licenses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.registry.v2.licenses.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.licenses.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRegistryV2LicensesQueryKey>
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
    return { ...getRegistryV2LicensesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getRegistryV2VersionQueryKey() {
  return ['registry', '/registry/v2/version'] as const
}

export function getRegistryV2VersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRegistryV2VersionQueryKey>
  >({
    queryKey: getRegistryV2VersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.registry.v2.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistryV2Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.version.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRegistryV2VersionQueryKey>
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
    return { ...getRegistryV2VersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getRegistryV2AppIdDevicesQueryKey(
  args: InferRequestType<(typeof client.registry.v2)[':appId']['devices']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['registry', '/registry/v2/:appId/devices', keyArgs] as const
}

export function getRegistryV2AppIdDevicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registry.v2)[':appId']['devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.registry.v2)[':appId']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.registry.v2)[':appId']['devices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistryV2AppIdDevicesQueryKey>
  >({
    queryKey: getRegistryV2AppIdDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registry.v2[':appId'].devices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistryV2AppIdDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registry.v2)[':appId']['devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.registry.v2)[':appId']['devices']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.registry.v2)[':appId']['devices']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRegistryV2AppIdDevicesQueryKey>
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
      ...getRegistryV2AppIdDevicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostRegistryV2AppIdDevicesMutationKey() {
  return ['registry', '/registry/v2/:appId/devices', 'POST'] as const
}

export function getPostRegistryV2AppIdDevicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.registry.v2)[':appId']['devices']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.registry.v2)[':appId']['devices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRegistryV2AppIdDevicesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.registry.v2)[':appId']['devices']['$post']>,
    ) {
      return parseResponse(client.registry.v2[':appId'].devices.$post(args, options))
    },
  })
}

export function createPostRegistryV2AppIdDevices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.registry.v2)[':appId']['devices']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.registry.v2)[':appId']['devices']['$post']>,
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
    const mutationDefaults = getPostRegistryV2AppIdDevicesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRegistryV2AppIdLicenseCountQueryKey(
  args: InferRequestType<(typeof client.registry.v2)[':appId']['licenseCount']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['registry', '/registry/v2/:appId/licenseCount', keyArgs] as const
}

export function getRegistryV2AppIdLicenseCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registry.v2)[':appId']['licenseCount']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.registry.v2)[':appId']['licenseCount']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.registry.v2)[':appId']['licenseCount']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistryV2AppIdLicenseCountQueryKey>
  >({
    queryKey: getRegistryV2AppIdLicenseCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registry.v2[':appId'].licenseCount.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistryV2AppIdLicenseCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registry.v2)[':appId']['licenseCount']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.registry.v2)[':appId']['licenseCount']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.registry.v2)[':appId']['licenseCount']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRegistryV2AppIdLicenseCountQueryKey>
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
      ...getRegistryV2AppIdLicenseCountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostRegistryV2AppIdOneDeviceMutationKey() {
  return ['registry', '/registry/v2/:appId/one-device', 'POST'] as const
}

export function getPostRegistryV2AppIdOneDeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.registry.v2)[':appId']['one-device']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.registry.v2)[':appId']['one-device']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRegistryV2AppIdOneDeviceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.registry.v2)[':appId']['one-device']['$post']>,
    ) {
      return parseResponse(client.registry.v2[':appId']['one-device'].$post(args, options))
    },
  })
}

export function createPostRegistryV2AppIdOneDevice<
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
                Awaited<ReturnType<(typeof client.registry.v2)[':appId']['one-device']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.registry.v2)[':appId']['one-device']['$post']>,
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
    const mutationDefaults = getPostRegistryV2AppIdOneDeviceMutationOptions<
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

export function getRegistryV2JobIdResultsQueryKey(
  args: InferRequestType<(typeof client.registry.v2)[':jobId']['results']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['registry', '/registry/v2/:jobId/results', keyArgs] as const
}

export function getRegistryV2JobIdResultsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registry.v2)[':jobId']['results']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.registry.v2)[':jobId']['results']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.registry.v2)[':jobId']['results']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistryV2JobIdResultsQueryKey>
  >({
    queryKey: getRegistryV2JobIdResultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registry.v2[':jobId'].results.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistryV2JobIdResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registry.v2)[':jobId']['results']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.registry.v2)[':jobId']['results']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.registry.v2)[':jobId']['results']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRegistryV2JobIdResultsQueryKey>
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
      ...getRegistryV2JobIdResultsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRegistryV2JobIdStatusQueryKey(
  args: InferRequestType<(typeof client.registry.v2)[':jobId']['status']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['registry', '/registry/v2/:jobId/status', keyArgs] as const
}

export function getRegistryV2JobIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registry.v2)[':jobId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.registry.v2)[':jobId']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.registry.v2)[':jobId']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistryV2JobIdStatusQueryKey>
  >({
    queryKey: getRegistryV2JobIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registry.v2[':jobId'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistryV2JobIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registry.v2)[':jobId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.registry.v2)[':jobId']['status']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.registry.v2)[':jobId']['status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRegistryV2JobIdStatusQueryKey>
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
      ...getRegistryV2JobIdStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getRegistryV2TrackingIdQueryKey(
  args: InferRequestType<(typeof client.registry.v2)[':trackingId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['registry', '/registry/v2/:trackingId', keyArgs] as const
}

export function getRegistryV2TrackingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.registry.v2)[':trackingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.registry.v2)[':trackingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.registry.v2)[':trackingId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistryV2TrackingIdQueryKey>
  >({
    queryKey: getRegistryV2TrackingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registry.v2[':trackingId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createRegistryV2TrackingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.registry.v2)[':trackingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.registry.v2)[':trackingId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.registry.v2)[':trackingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRegistryV2TrackingIdQueryKey>
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
      ...getRegistryV2TrackingIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteRegistryV2TrackingIdMutationKey() {
  return ['registry', '/registry/v2/:trackingId', 'DELETE'] as const
}

export function getDeleteRegistryV2TrackingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.registry.v2)[':trackingId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.registry.v2)[':trackingId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRegistryV2TrackingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.registry.v2)[':trackingId']['$delete']>,
    ) {
      return parseResponse(client.registry.v2[':trackingId'].$delete(args, options))
    },
  })
}

export function createDeleteRegistryV2TrackingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.registry.v2)[':trackingId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.registry.v2)[':trackingId']['$delete']>,
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
    const mutationDefaults = getDeleteRegistryV2TrackingIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRegistryV4ResourcesResourceTypeFindMutationKey() {
  return ['registry', '/registry/v4/resources/:resourceType/find', 'POST'] as const
}

export function getPostRegistryV4ResourcesResourceTypeFindMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.registry.v4.resources)[':resourceType']['find']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRegistryV4ResourcesResourceTypeFindMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.registry.v4.resources)[':resourceType']['find']['$post']
      >,
    ) {
      return parseResponse(client.registry.v4.resources[':resourceType'].find.$post(args, options))
    },
  })
}

export function createPostRegistryV4ResourcesResourceTypeFind<
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
                    (typeof client.registry.v4.resources)[':resourceType']['find']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.registry.v4.resources)[':resourceType']['find']['$post']>,
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
    const mutationDefaults = getPostRegistryV4ResourcesResourceTypeFindMutationOptions<
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

export function getPostReportsV4MutationKey() {
  return ['reports', '/reports/v4', 'POST'] as const
}

export function getPostReportsV4MutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.v4.$post>>>>>,
    TError,
    InferRequestType<typeof client.reports.v4.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportsV4MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reports.v4.$post>) {
      return parseResponse(client.reports.v4.$post(args, options))
    },
  })
}

export function createPostReportsV4<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.v4.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.reports.v4.$post>,
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
    const mutationDefaults = getPostReportsV4MutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getReportsV4HealthQueryKey() {
  return ['reports', '/reports/v4/health'] as const
}

export function getReportsV4HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.v4.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.v4.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportsV4HealthQueryKey>
  >({
    queryKey: getReportsV4HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.reports.v4.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReportsV4Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.v4.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reports.v4.health.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReportsV4HealthQueryKey>
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
    return { ...getReportsV4HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getReportsV4VersionQueryKey() {
  return ['reports', '/reports/v4/version'] as const
}

export function getReportsV4VersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.v4.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.v4.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportsV4VersionQueryKey>
  >({
    queryKey: getReportsV4VersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.reports.v4.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReportsV4Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.v4.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reports.v4.version.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReportsV4VersionQueryKey>
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
    return { ...getReportsV4VersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getReportsV4ReportIdQueryKey(
  args: InferRequestType<(typeof client.reports.v4)[':reportId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['reports', '/reports/v4/:reportId', keyArgs] as const
}

export function getReportsV4ReportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reports.v4)[':reportId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reports.v4)[':reportId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reports.v4)[':reportId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsV4ReportIdQueryKey>
  >({
    queryKey: getReportsV4ReportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reports.v4[':reportId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReportsV4ReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reports.v4)[':reportId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.reports.v4)[':reportId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reports.v4)[':reportId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReportsV4ReportIdQueryKey>
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
    return { ...getReportsV4ReportIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getRulesV4QueryKey(args: InferRequestType<typeof client.rules.v4.$get>) {
  const { header: _, ...keyArgs } = args
  return ['rules', '/rules/v4', keyArgs] as const
}

export function getRulesV4QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.rules.v4.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRulesV4QueryKey>
  >({
    queryKey: getRulesV4QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rules.v4.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRulesV4<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rules.v4.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getRulesV4QueryKey>
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
    return { ...getRulesV4QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostRulesV4MutationKey() {
  return ['rules', '/rules/v4', 'POST'] as const
}

export function getPostRulesV4MutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.$post>>>>>,
    TError,
    InferRequestType<typeof client.rules.v4.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRulesV4MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rules.v4.$post>) {
      return parseResponse(client.rules.v4.$post(args, options))
    },
  })
}

export function createPostRulesV4<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.rules.v4.$post>,
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
    const mutationDefaults = getPostRulesV4MutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteRulesV4MutationKey() {
  return ['rules', '/rules/v4', 'DELETE'] as const
}

export function getDeleteRulesV4MutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.$delete>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.rules.v4.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRulesV4MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rules.v4.$delete>) {
      return parseResponse(client.rules.v4.$delete(args, options))
    },
  })
}

export function createDeleteRulesV4<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.$delete>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.rules.v4.$delete>,
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
    const mutationDefaults = getDeleteRulesV4MutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getRulesV4HealthQueryKey() {
  return ['rules', '/rules/v4/health'] as const
}

export function getRulesV4HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRulesV4HealthQueryKey>
  >({
    queryKey: getRulesV4HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.rules.v4.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRulesV4Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.health.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRulesV4HealthQueryKey>
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
    return { ...getRulesV4HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getRulesV4VersionQueryKey() {
  return ['rules', '/rules/v4/version'] as const
}

export function getRulesV4VersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRulesV4VersionQueryKey>
  >({
    queryKey: getRulesV4VersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.rules.v4.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRulesV4Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.version.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRulesV4VersionQueryKey>
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
    return { ...getRulesV4VersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getRulesV4RuleIdQueryKey(
  args: InferRequestType<(typeof client.rules.v4)[':ruleId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['rules', '/rules/v4/:ruleId', keyArgs] as const
}

export function getRulesV4RuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rules.v4)[':ruleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rules.v4)[':ruleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rules.v4)[':ruleId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRulesV4RuleIdQueryKey>
  >({
    queryKey: getRulesV4RuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rules.v4[':ruleId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRulesV4RuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rules.v4)[':ruleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.rules.v4)[':ruleId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.rules.v4)[':ruleId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRulesV4RuleIdQueryKey>
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
    return { ...getRulesV4RuleIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutRulesV4RuleIdMutationKey() {
  return ['rules', '/rules/v4/:ruleId', 'PUT'] as const
}

export function getPutRulesV4RuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rules.v4)[':ruleId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.rules.v4)[':ruleId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRulesV4RuleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.rules.v4)[':ruleId']['$put']>) {
      return parseResponse(client.rules.v4[':ruleId'].$put(args, options))
    },
  })
}

export function createPutRulesV4RuleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.rules.v4)[':ruleId']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.rules.v4)[':ruleId']['$put']>,
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
    const mutationDefaults = getPutRulesV4RuleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteRulesV4RuleIdMutationKey() {
  return ['rules', '/rules/v4/:ruleId', 'DELETE'] as const
}

export function getDeleteRulesV4RuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rules.v4)[':ruleId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.rules.v4)[':ruleId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRulesV4RuleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.rules.v4)[':ruleId']['$delete']>) {
      return parseResponse(client.rules.v4[':ruleId'].$delete(args, options))
    },
  })
}

export function createDeleteRulesV4RuleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.rules.v4)[':ruleId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.rules.v4)[':ruleId']['$delete']>,
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
    const mutationDefaults = getDeleteRulesV4RuleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSensorsV3QueryKey(args: InferRequestType<typeof client.sensors.v3.$get>) {
  const { header: _, ...keyArgs } = args
  return ['sensors', '/sensors/v3', keyArgs] as const
}

export function getSensorsV3QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sensors.v3.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSensorsV3QueryKey>
  >({
    queryKey: getSensorsV3QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sensors.v3.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSensorsV3<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.sensors.v3.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSensorsV3QueryKey>
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
    return { ...getSensorsV3QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostSensorsV3MutationKey() {
  return ['sensors', '/sensors/v3', 'POST'] as const
}

export function getPostSensorsV3MutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.$post>>>>>,
    TError,
    InferRequestType<typeof client.sensors.v3.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSensorsV3MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sensors.v3.$post>) {
      return parseResponse(client.sensors.v3.$post(args, options))
    },
  })
}

export function createPostSensorsV3<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sensors.v3.$post>,
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
    const mutationDefaults = getPostSensorsV3MutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteSensorsV3MutationKey() {
  return ['sensors', '/sensors/v3', 'DELETE'] as const
}

export function getDeleteSensorsV3MutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.$delete>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.sensors.v3.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSensorsV3MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sensors.v3.$delete>) {
      return parseResponse(client.sensors.v3.$delete(args, options))
    },
  })
}

export function createDeleteSensorsV3<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.sensors.v3.$delete>,
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
    const mutationDefaults = getDeleteSensorsV3MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSensorsV3HealthQueryKey() {
  return ['sensors', '/sensors/v3/health'] as const
}

export function getSensorsV3HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSensorsV3HealthQueryKey>
  >({
    queryKey: getSensorsV3HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sensors.v3.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSensorsV3Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.health.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSensorsV3HealthQueryKey>
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
    return { ...getSensorsV3HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSensorsV3VersionQueryKey() {
  return ['sensors', '/sensors/v3/version'] as const
}

export function getSensorsV3VersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSensorsV3VersionQueryKey>
  >({
    queryKey: getSensorsV3VersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sensors.v3.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSensorsV3Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.version.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSensorsV3VersionQueryKey>
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
    return { ...getSensorsV3VersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSensorsV3SensorRuleIdQueryKey(
  args: InferRequestType<(typeof client.sensors.v3)[':sensorRuleId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sensors', '/sensors/v3/:sensorRuleId', keyArgs] as const
}

export function getSensorsV3SensorRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sensors.v3)[':sensorRuleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sensors.v3)[':sensorRuleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sensors.v3)[':sensorRuleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSensorsV3SensorRuleIdQueryKey>
  >({
    queryKey: getSensorsV3SensorRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sensors.v3[':sensorRuleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSensorsV3SensorRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sensors.v3)[':sensorRuleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sensors.v3)[':sensorRuleId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sensors.v3)[':sensorRuleId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSensorsV3SensorRuleIdQueryKey>
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
      ...getSensorsV3SensorRuleIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutSensorsV3SensorRuleIdMutationKey() {
  return ['sensors', '/sensors/v3/:sensorRuleId', 'PUT'] as const
}

export function getPutSensorsV3SensorRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sensors.v3)[':sensorRuleId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sensors.v3)[':sensorRuleId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSensorsV3SensorRuleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sensors.v3)[':sensorRuleId']['$put']>) {
      return parseResponse(client.sensors.v3[':sensorRuleId'].$put(args, options))
    },
  })
}

export function createPutSensorsV3SensorRuleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sensors.v3)[':sensorRuleId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sensors.v3)[':sensorRuleId']['$put']>,
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
    const mutationDefaults = getPutSensorsV3SensorRuleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteSensorsV3SensorRuleIdMutationKey() {
  return ['sensors', '/sensors/v3/:sensorRuleId', 'DELETE'] as const
}

export function getDeleteSensorsV3SensorRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sensors.v3)[':sensorRuleId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sensors.v3)[':sensorRuleId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSensorsV3SensorRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sensors.v3)[':sensorRuleId']['$delete']>,
    ) {
      return parseResponse(client.sensors.v3[':sensorRuleId'].$delete(args, options))
    },
  })
}

export function createDeleteSensorsV3SensorRuleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.sensors.v3)[':sensorRuleId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.sensors.v3)[':sensorRuleId']['$delete']>,
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
    const mutationDefaults = getDeleteSensorsV3SensorRuleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostShadowsV2BatchMutationKey() {
  return ['shadows', '/shadows/v2/batch', 'POST'] as const
}

export function getPostShadowsV2BatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v2.batch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.shadows.v2.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostShadowsV2BatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.shadows.v2.batch.$post>) {
      return parseResponse(client.shadows.v2.batch.$post(args, options))
    },
  })
}

export function createPostShadowsV2Batch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v2.batch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.shadows.v2.batch.$post>,
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
    const mutationDefaults = getPostShadowsV2BatchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getShadowsV2HealthQueryKey() {
  return ['shadows', '/shadows/v2/health'] as const
}

export function getShadowsV2HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v2.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v2.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShadowsV2HealthQueryKey>
  >({
    queryKey: getShadowsV2HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.shadows.v2.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShadowsV2Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v2.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v2.health.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getShadowsV2HealthQueryKey>
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
    return { ...getShadowsV2HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getShadowsV2VersionQueryKey() {
  return ['shadows', '/shadows/v2/version'] as const
}

export function getShadowsV2VersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v2.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShadowsV2VersionQueryKey>
  >({
    queryKey: getShadowsV2VersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.shadows.v2.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShadowsV2Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v2.version.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getShadowsV2VersionQueryKey>
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
    return { ...getShadowsV2VersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getShadowsV2TrackingIdQueryKey(
  args: InferRequestType<(typeof client.shadows.v2)[':trackingId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shadows', '/shadows/v2/:trackingId', keyArgs] as const
}

export function getShadowsV2TrackingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shadows.v2)[':trackingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShadowsV2TrackingIdQueryKey>
  >({
    queryKey: getShadowsV2TrackingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shadows.v2[':trackingId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShadowsV2TrackingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shadows.v2)[':trackingId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getShadowsV2TrackingIdQueryKey>
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
    return { ...getShadowsV2TrackingIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutShadowsV2TrackingIdMutationKey() {
  return ['shadows', '/shadows/v2/:trackingId', 'PUT'] as const
}

export function getPutShadowsV2TrackingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.shadows.v2)[':trackingId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutShadowsV2TrackingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.shadows.v2)[':trackingId']['$put']>) {
      return parseResponse(client.shadows.v2[':trackingId'].$put(args, options))
    },
  })
}

export function createPutShadowsV2TrackingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.shadows.v2)[':trackingId']['$put']>,
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
    const mutationDefaults = getPutShadowsV2TrackingIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteShadowsV2TrackingIdMutationKey() {
  return ['shadows', '/shadows/v2/:trackingId', 'DELETE'] as const
}

export function getDeleteShadowsV2TrackingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.shadows.v2)[':trackingId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteShadowsV2TrackingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.shadows.v2)[':trackingId']['$delete']>) {
      return parseResponse(client.shadows.v2[':trackingId'].$delete(args, options))
    },
  })
}

export function createDeleteShadowsV2TrackingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.shadows.v2)[':trackingId']['$delete']>,
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
    const mutationDefaults = getDeleteShadowsV2TrackingIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getShadowsV2TrackingIdStateQueryKey(
  args: InferRequestType<(typeof client.shadows.v2)[':trackingId'][':state']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shadows', '/shadows/v2/:trackingId/:state', keyArgs] as const
}

export function getShadowsV2TrackingIdStateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId'][':state']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shadows.v2)[':trackingId'][':state']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId'][':state']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShadowsV2TrackingIdStateQueryKey>
  >({
    queryKey: getShadowsV2TrackingIdStateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shadows.v2[':trackingId'][':state'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShadowsV2TrackingIdState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId'][':state']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shadows.v2)[':trackingId'][':state']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId'][':state']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getShadowsV2TrackingIdStateQueryKey>
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
      ...getShadowsV2TrackingIdStateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getShadowsV2TrackingIdStateSelectorQueryKey(
  args: InferRequestType<(typeof client.shadows.v2)[':trackingId'][':state'][':selector']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shadows', '/shadows/v2/:trackingId/:state/:selector', keyArgs] as const
}

export function getShadowsV2TrackingIdStateSelectorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.shadows.v2)[':trackingId'][':state'][':selector']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shadows.v2)[':trackingId'][':state'][':selector']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.shadows.v2)[':trackingId'][':state'][':selector']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShadowsV2TrackingIdStateSelectorQueryKey>
  >({
    queryKey: getShadowsV2TrackingIdStateSelectorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shadows.v2[':trackingId'][':state'][':selector'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShadowsV2TrackingIdStateSelector<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.shadows.v2)[':trackingId'][':state'][':selector']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.shadows.v2)[':trackingId'][':state'][':selector']['$get']
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
                    (typeof client.shadows.v2)[':trackingId'][':state'][':selector']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getShadowsV2TrackingIdStateSelectorQueryKey>
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
      ...getShadowsV2TrackingIdStateSelectorQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getShadowsV4QueryKey(args: InferRequestType<typeof client.shadows.v4.$get>) {
  const { header: _, ...keyArgs } = args
  return ['shadows', '/shadows/v4', keyArgs] as const
}

export function getShadowsV4QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v4.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.shadows.v4.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v4.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getShadowsV4QueryKey>
  >({
    queryKey: getShadowsV4QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shadows.v4.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createShadowsV4<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v4.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.shadows.v4.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v4.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getShadowsV4QueryKey>
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
    return { ...getShadowsV4QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostShipmentReportsV4MutationKey() {
  return ['shipment-reports', '/shipment-reports/v4', 'POST'] as const
}

export function getPostShipmentReportsV4MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['shipment-reports']['v4']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['shipment-reports']['v4']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostShipmentReportsV4MutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['shipment-reports']['v4']['$post']>) {
      return parseResponse(client['shipment-reports'].v4.$post(args, options))
    },
  })
}

export function createPostShipmentReportsV4<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['shipment-reports']['v4']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['shipment-reports']['v4']['$post']>,
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
    const mutationDefaults = getPostShipmentReportsV4MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getShipmentReportsV4HealthQueryKey() {
  return ['shipment-reports', '/shipment-reports/v4/health'] as const
}

export function getShipmentReportsV4HealthQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['shipment-reports']['v4']['health']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['shipment-reports']['v4']['health']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShipmentReportsV4HealthQueryKey>
  >({
    queryKey: getShipmentReportsV4HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['shipment-reports'].v4.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShipmentReportsV4Health<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['shipment-reports']['v4']['health']['$get']>>
      >
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
                Awaited<ReturnType<(typeof client)['shipment-reports']['v4']['health']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getShipmentReportsV4HealthQueryKey>
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
    return { ...getShipmentReportsV4HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getShipmentReportsV4VersionQueryKey() {
  return ['shipment-reports', '/shipment-reports/v4/version'] as const
}

export function getShipmentReportsV4VersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['shipment-reports']['v4']['version']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['shipment-reports']['v4']['version']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShipmentReportsV4VersionQueryKey>
  >({
    queryKey: getShipmentReportsV4VersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['shipment-reports'].v4.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShipmentReportsV4Version<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['shipment-reports']['v4']['version']['$get']>>
      >
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
                Awaited<ReturnType<(typeof client)['shipment-reports']['v4']['version']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getShipmentReportsV4VersionQueryKey>
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
    return { ...getShipmentReportsV4VersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getShipmentReportsV4ShipmentReportIdStatusQueryKey(
  args: InferRequestType<
    (typeof client)['shipment-reports']['v4'][':shipmentReportId']['status']['$get']
  >,
) {
  return ['shipment-reports', '/shipment-reports/v4/:shipmentReportId/status', args] as const
}

export function getShipmentReportsV4ShipmentReportIdStatusQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['shipment-reports']['v4'][':shipmentReportId']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getShipmentReportsV4ShipmentReportIdStatusQueryKey>
  >({
    queryKey: getShipmentReportsV4ShipmentReportIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['shipment-reports'].v4[':shipmentReportId'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShipmentReportsV4ShipmentReportIdStatus<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['shipment-reports']['v4'][':shipmentReportId']['status']['$get']
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
                    (typeof client)['shipment-reports']['v4'][':shipmentReportId']['status']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getShipmentReportsV4ShipmentReportIdStatusQueryKey>
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
      ...getShipmentReportsV4ShipmentReportIdStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getShipmentReportsV4ShipmentReportIdSummaryQueryKey(
  args: InferRequestType<
    (typeof client)['shipment-reports']['v4'][':shipmentReportId']['summary']['$get']
  >,
) {
  return ['shipment-reports', '/shipment-reports/v4/:shipmentReportId/summary', args] as const
}

export function getShipmentReportsV4ShipmentReportIdSummaryQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['shipment-reports']['v4'][':shipmentReportId']['summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getShipmentReportsV4ShipmentReportIdSummaryQueryKey>
  >({
    queryKey: getShipmentReportsV4ShipmentReportIdSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['shipment-reports'].v4[':shipmentReportId'].summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShipmentReportsV4ShipmentReportIdSummary<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['shipment-reports']['v4'][':shipmentReportId']['summary']['$get']
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
                    (typeof client)['shipment-reports']['v4'][':shipmentReportId']['summary']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getShipmentReportsV4ShipmentReportIdSummaryQueryKey>
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
      ...getShipmentReportsV4ShipmentReportIdSummaryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getShipmentReportsV4ShipmentReportIdMetricQueryKey(
  args: InferRequestType<
    (typeof client)['shipment-reports']['v4'][':shipmentReportId'][':metric']['$get']
  >,
) {
  return ['shipment-reports', '/shipment-reports/v4/:shipmentReportId/:metric', args] as const
}

export function getShipmentReportsV4ShipmentReportIdMetricQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['shipment-reports']['v4'][':shipmentReportId'][':metric']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getShipmentReportsV4ShipmentReportIdMetricQueryKey>
  >({
    queryKey: getShipmentReportsV4ShipmentReportIdMetricQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['shipment-reports'].v4[':shipmentReportId'][':metric'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShipmentReportsV4ShipmentReportIdMetric<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['shipment-reports']['v4'][':shipmentReportId'][':metric']['$get']
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
                    (typeof client)['shipment-reports']['v4'][':shipmentReportId'][':metric']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getShipmentReportsV4ShipmentReportIdMetricQueryKey>
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
      ...getShipmentReportsV4ShipmentReportIdMetricQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getShipmentsV4QueryKey(args: InferRequestType<typeof client.shipments.v4.$get>) {
  const { header: _, ...keyArgs } = args
  return ['shipments', '/shipments/v4', keyArgs] as const
}

export function getShipmentsV4QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.shipments.v4.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getShipmentsV4QueryKey>
  >({
    queryKey: getShipmentsV4QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shipments.v4.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createShipmentsV4<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.shipments.v4.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getShipmentsV4QueryKey>
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
    return { ...getShipmentsV4QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostShipmentsV4MutationKey() {
  return ['shipments', '/shipments/v4', 'POST'] as const
}

export function getPostShipmentsV4MutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.shipments.v4.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostShipmentsV4MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.shipments.v4.$post>) {
      return parseResponse(client.shipments.v4.$post(args, options))
    },
  })
}

export function createPostShipmentsV4<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.shipments.v4.$post>,
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
    const mutationDefaults = getPostShipmentsV4MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteShipmentsV4MutationKey() {
  return ['shipments', '/shipments/v4', 'DELETE'] as const
}

export function getDeleteShipmentsV4MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.$delete>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.shipments.v4.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteShipmentsV4MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.shipments.v4.$delete>) {
      return parseResponse(client.shipments.v4.$delete(args, options))
    },
  })
}

export function createDeleteShipmentsV4<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.shipments.v4.$delete>,
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
    const mutationDefaults = getDeleteShipmentsV4MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getShipmentsV4HealthQueryKey() {
  return ['shipments', '/shipments/v4/health'] as const
}

export function getShipmentsV4HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShipmentsV4HealthQueryKey>
  >({
    queryKey: getShipmentsV4HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.shipments.v4.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShipmentsV4Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.health.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getShipmentsV4HealthQueryKey>
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
    return { ...getShipmentsV4HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getShipmentsV4PlansQueryKey(
  args: InferRequestType<typeof client.shipments.v4.plans.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['shipments', '/shipments/v4/plans', keyArgs] as const
}

export function getShipmentsV4PlansQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.plans.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.shipments.v4.plans.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.plans.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShipmentsV4PlansQueryKey>
  >({
    queryKey: getShipmentsV4PlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shipments.v4.plans.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createShipmentsV4Plans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.plans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.shipments.v4.plans.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.plans.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getShipmentsV4PlansQueryKey>
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
    return { ...getShipmentsV4PlansQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostShipmentsV4PlansMutationKey() {
  return ['shipments', '/shipments/v4/plans', 'POST'] as const
}

export function getPostShipmentsV4PlansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.plans.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.shipments.v4.plans.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostShipmentsV4PlansMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.shipments.v4.plans.$post>) {
      return parseResponse(client.shipments.v4.plans.$post(args, options))
    },
  })
}

export function createPostShipmentsV4Plans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.plans.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.shipments.v4.plans.$post>,
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
    const mutationDefaults = getPostShipmentsV4PlansMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteShipmentsV4PlansMutationKey() {
  return ['shipments', '/shipments/v4/plans', 'DELETE'] as const
}

export function getDeleteShipmentsV4PlansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.plans.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.shipments.v4.plans.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteShipmentsV4PlansMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.shipments.v4.plans.$delete>) {
      return parseResponse(client.shipments.v4.plans.$delete(args, options))
    },
  })
}

export function createDeleteShipmentsV4Plans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.plans.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.shipments.v4.plans.$delete>,
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
    const mutationDefaults = getDeleteShipmentsV4PlansMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getShipmentsV4PlansShipmentPlanIdQueryKey(
  args: InferRequestType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$get']>,
) {
  return ['shipments', '/shipments/v4/plans/:shipmentPlanId', args] as const
}

export function getShipmentsV4PlansShipmentPlanIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShipmentsV4PlansShipmentPlanIdQueryKey>
  >({
    queryKey: getShipmentsV4PlansShipmentPlanIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shipments.v4.plans[':shipmentPlanId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShipmentsV4PlansShipmentPlanId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getShipmentsV4PlansShipmentPlanIdQueryKey>
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
      ...getShipmentsV4PlansShipmentPlanIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteShipmentsV4PlansShipmentPlanIdMutationKey() {
  return ['shipments', '/shipments/v4/plans/:shipmentPlanId', 'DELETE'] as const
}

export function getDeleteShipmentsV4PlansShipmentPlanIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteShipmentsV4PlansShipmentPlanIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$delete']>,
    ) {
      return parseResponse(client.shipments.v4.plans[':shipmentPlanId'].$delete(args, options))
    },
  })
}

export function createDeleteShipmentsV4PlansShipmentPlanId<
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
                    ReturnType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$delete']>,
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
    const mutationDefaults = getDeleteShipmentsV4PlansShipmentPlanIdMutationOptions<
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

export function getPatchShipmentsV4PlansShipmentPlanIdMutationKey() {
  return ['shipments', '/shipments/v4/plans/:shipmentPlanId', 'PATCH'] as const
}

export function getPatchShipmentsV4PlansShipmentPlanIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchShipmentsV4PlansShipmentPlanIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$patch']>,
    ) {
      return parseResponse(client.shipments.v4.plans[':shipmentPlanId'].$patch(args, options))
    },
  })
}

export function createPatchShipmentsV4PlansShipmentPlanId<
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
                    ReturnType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$patch']>,
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
    const mutationDefaults = getPatchShipmentsV4PlansShipmentPlanIdMutationOptions<
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

export function getShipmentsV4PlansShipmentPlanIdSegmentPlanIdQueryKey(
  args: InferRequestType<
    (typeof client.shipments.v4.plans)[':shipmentPlanId'][':segmentPlanId']['$get']
  >,
) {
  return ['shipments', '/shipments/v4/plans/:shipmentPlanId/:segmentPlanId', args] as const
}

export function getShipmentsV4PlansShipmentPlanIdSegmentPlanIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.shipments.v4.plans)[':shipmentPlanId'][':segmentPlanId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getShipmentsV4PlansShipmentPlanIdSegmentPlanIdQueryKey>
  >({
    queryKey: getShipmentsV4PlansShipmentPlanIdSegmentPlanIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shipments.v4.plans[':shipmentPlanId'][':segmentPlanId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShipmentsV4PlansShipmentPlanIdSegmentPlanId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.shipments.v4.plans)[':shipmentPlanId'][':segmentPlanId']['$get']
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
                    (typeof client.shipments.v4.plans)[':shipmentPlanId'][':segmentPlanId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getShipmentsV4PlansShipmentPlanIdSegmentPlanIdQueryKey>
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
      ...getShipmentsV4PlansShipmentPlanIdSegmentPlanIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPatchShipmentsV4PlansShipmentPlanIdSegmentPlanIdMutationKey() {
  return ['shipments', '/shipments/v4/plans/:shipmentPlanId/:segmentPlanId', 'PATCH'] as const
}

export function getPatchShipmentsV4PlansShipmentPlanIdSegmentPlanIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.shipments.v4.plans)[':shipmentPlanId'][':segmentPlanId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchShipmentsV4PlansShipmentPlanIdSegmentPlanIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.shipments.v4.plans)[':shipmentPlanId'][':segmentPlanId']['$patch']
      >,
    ) {
      return parseResponse(
        client.shipments.v4.plans[':shipmentPlanId'][':segmentPlanId'].$patch(args, options),
      )
    },
  })
}

export function createPatchShipmentsV4PlansShipmentPlanIdSegmentPlanId<
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
                      (typeof client.shipments.v4.plans)[':shipmentPlanId'][':segmentPlanId']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.shipments.v4.plans)[':shipmentPlanId'][':segmentPlanId']['$patch']
          >,
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
    const mutationDefaults = getPatchShipmentsV4PlansShipmentPlanIdSegmentPlanIdMutationOptions<
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

export function getShipmentsV4VersionQueryKey() {
  return ['shipments', '/shipments/v4/version'] as const
}

export function getShipmentsV4VersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShipmentsV4VersionQueryKey>
  >({
    queryKey: getShipmentsV4VersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.shipments.v4.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShipmentsV4Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.version.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getShipmentsV4VersionQueryKey>
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
    return { ...getShipmentsV4VersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getShipmentsV4ShipmentIdQueryKey(
  args: InferRequestType<(typeof client.shipments.v4)[':shipmentId']['$get']>,
) {
  return ['shipments', '/shipments/v4/:shipmentId', args] as const
}

export function getShipmentsV4ShipmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shipments.v4)[':shipmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShipmentsV4ShipmentIdQueryKey>
  >({
    queryKey: getShipmentsV4ShipmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shipments.v4[':shipmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShipmentsV4ShipmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shipments.v4)[':shipmentId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getShipmentsV4ShipmentIdQueryKey>
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
      ...getShipmentsV4ShipmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteShipmentsV4ShipmentIdMutationKey() {
  return ['shipments', '/shipments/v4/:shipmentId', 'DELETE'] as const
}

export function getDeleteShipmentsV4ShipmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.shipments.v4)[':shipmentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteShipmentsV4ShipmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.shipments.v4)[':shipmentId']['$delete']>,
    ) {
      return parseResponse(client.shipments.v4[':shipmentId'].$delete(args, options))
    },
  })
}

export function createDeleteShipmentsV4ShipmentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.shipments.v4)[':shipmentId']['$delete']>,
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
    const mutationDefaults = getDeleteShipmentsV4ShipmentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchShipmentsV4ShipmentIdMutationKey() {
  return ['shipments', '/shipments/v4/:shipmentId', 'PATCH'] as const
}

export function getPatchShipmentsV4ShipmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.shipments.v4)[':shipmentId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchShipmentsV4ShipmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.shipments.v4)[':shipmentId']['$patch']>,
    ) {
      return parseResponse(client.shipments.v4[':shipmentId'].$patch(args, options))
    },
  })
}

export function createPatchShipmentsV4ShipmentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.shipments.v4)[':shipmentId']['$patch']>,
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
    const mutationDefaults = getPatchShipmentsV4ShipmentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getShipmentsV4ShipmentIdSegmentIdQueryKey(
  args: InferRequestType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$get']>,
) {
  return ['shipments', '/shipments/v4/:shipmentId/:segmentId', args] as const
}

export function getShipmentsV4ShipmentIdSegmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShipmentsV4ShipmentIdSegmentIdQueryKey>
  >({
    queryKey: getShipmentsV4ShipmentIdSegmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shipments.v4[':shipmentId'][':segmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShipmentsV4ShipmentIdSegmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getShipmentsV4ShipmentIdSegmentIdQueryKey>
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
      ...getShipmentsV4ShipmentIdSegmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchShipmentsV4ShipmentIdSegmentIdMutationKey() {
  return ['shipments', '/shipments/v4/:shipmentId/:segmentId', 'PATCH'] as const
}

export function getPatchShipmentsV4ShipmentIdSegmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchShipmentsV4ShipmentIdSegmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$patch']>,
    ) {
      return parseResponse(client.shipments.v4[':shipmentId'][':segmentId'].$patch(args, options))
    },
  })
}

export function createPatchShipmentsV4ShipmentIdSegmentId<
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
                    ReturnType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$patch']>,
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
    const mutationDefaults = getPatchShipmentsV4ShipmentIdSegmentIdMutationOptions<
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

export function getShipmentsV4TrackingIdSegmentsQueryKey(
  args: InferRequestType<(typeof client.shipments.v4)[':trackingId']['segments']['$get']>,
) {
  return ['shipments', '/shipments/v4/:trackingId/segments', args] as const
}

export function getShipmentsV4TrackingIdSegmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shipments.v4)[':trackingId']['segments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shipments.v4)[':trackingId']['segments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shipments.v4)[':trackingId']['segments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShipmentsV4TrackingIdSegmentsQueryKey>
  >({
    queryKey: getShipmentsV4TrackingIdSegmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shipments.v4[':trackingId'].segments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShipmentsV4TrackingIdSegments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shipments.v4)[':trackingId']['segments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shipments.v4)[':trackingId']['segments']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shipments.v4)[':trackingId']['segments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getShipmentsV4TrackingIdSegmentsQueryKey>
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
      ...getShipmentsV4TrackingIdSegmentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTracesV2HealthQueryKey() {
  return ['traces', '/traces/v2/health'] as const
}

export function getTracesV2HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traces.v2.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traces.v2.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTracesV2HealthQueryKey>
  >({
    queryKey: getTracesV2HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.traces.v2.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTracesV2Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traces.v2.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.traces.v2.health.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTracesV2HealthQueryKey>
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
    return { ...getTracesV2HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getTracesV2VersionQueryKey() {
  return ['traces', '/traces/v2/version'] as const
}

export function getTracesV2VersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traces.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traces.v2.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTracesV2VersionQueryKey>
  >({
    queryKey: getTracesV2VersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.traces.v2.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTracesV2Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traces.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.traces.v2.version.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTracesV2VersionQueryKey>
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
    return { ...getTracesV2VersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getTracesV2TrackingIdQueryKey(
  args: InferRequestType<(typeof client.traces.v2)[':trackingId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['traces', '/traces/v2/:trackingId', keyArgs] as const
}

export function getTracesV2TrackingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.traces.v2)[':trackingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.traces.v2)[':trackingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.traces.v2)[':trackingId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTracesV2TrackingIdQueryKey>
  >({
    queryKey: getTracesV2TrackingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.traces.v2[':trackingId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTracesV2TrackingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.traces.v2)[':trackingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.traces.v2)[':trackingId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.traces.v2)[':trackingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTracesV2TrackingIdQueryKey>
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
    return { ...getTracesV2TrackingIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteTracesV2TrackingIdMutationKey() {
  return ['traces', '/traces/v2/:trackingId', 'DELETE'] as const
}

export function getDeleteTracesV2TrackingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.traces.v2)[':trackingId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.traces.v2)[':trackingId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTracesV2TrackingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.traces.v2)[':trackingId']['$delete']>) {
      return parseResponse(client.traces.v2[':trackingId'].$delete(args, options))
    },
  })
}

export function createDeleteTracesV2TrackingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.traces.v2)[':trackingId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.traces.v2)[':trackingId']['$delete']>,
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
    const mutationDefaults = getDeleteTracesV2TrackingIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTransitionsV2DevicesTrackingIdQueryKey(
  args: InferRequestType<(typeof client.transitions.v2.devices)[':trackingId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['transitions', '/transitions/v2/devices/:trackingId', keyArgs] as const
}

export function getTransitionsV2DevicesTrackingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transitions.v2.devices)[':trackingId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.transitions.v2.devices)[':trackingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transitions.v2.devices)[':trackingId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransitionsV2DevicesTrackingIdQueryKey>
  >({
    queryKey: getTransitionsV2DevicesTrackingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.transitions.v2.devices[':trackingId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTransitionsV2DevicesTrackingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transitions.v2.devices)[':trackingId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.transitions.v2.devices)[':trackingId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transitions.v2.devices)[':trackingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTransitionsV2DevicesTrackingIdQueryKey>
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
      ...getTransitionsV2DevicesTrackingIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getTransitionsV2HealthQueryKey() {
  return ['transitions', '/transitions/v2/health'] as const
}

export function getTransitionsV2HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transitions.v2.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transitions.v2.health.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransitionsV2HealthQueryKey>
  >({
    queryKey: getTransitionsV2HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.transitions.v2.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTransitionsV2Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transitions.v2.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transitions.v2.health.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTransitionsV2HealthQueryKey>
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
    return { ...getTransitionsV2HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getTransitionsV2VersionQueryKey() {
  return ['transitions', '/transitions/v2/version'] as const
}

export function getTransitionsV2VersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transitions.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transitions.v2.version.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransitionsV2VersionQueryKey>
  >({
    queryKey: getTransitionsV2VersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.transitions.v2.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTransitionsV2Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transitions.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transitions.v2.version.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTransitionsV2VersionQueryKey>
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
    return { ...getTransitionsV2VersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getUsersV2DevicesQueryKey(
  args: InferRequestType<typeof client.users.v2.devices.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['users', '/users/v2/devices', keyArgs] as const
}

export function getUsersV2DevicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.devices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.v2.devices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.devices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersV2DevicesQueryKey>
  >({
    queryKey: getUsersV2DevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.v2.devices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersV2Devices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.v2.devices.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.devices.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersV2DevicesQueryKey>
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
    return { ...getUsersV2DevicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersV2HealthQueryKey() {
  return ['users', '/users/v2/health'] as const
}

export function getUsersV2HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersV2HealthQueryKey>
  >({
    queryKey: getUsersV2HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.v2.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersV2Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.health.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersV2HealthQueryKey>
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
    return { ...getUsersV2HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostUsersV2LoginMutationKey() {
  return ['users', '/users/v2/login', 'POST'] as const
}

export function getPostUsersV2LoginMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.login.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.users.v2.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersV2LoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.v2.login.$post>) {
      return parseResponse(client.users.v2.login.$post(args, options))
    },
  })
}

export function createPostUsersV2Login<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.login.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.v2.login.$post>,
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
    const mutationDefaults = getPostUsersV2LoginMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsersV2RefreshMutationKey() {
  return ['users', '/users/v2/refresh', 'POST'] as const
}

export function getPostUsersV2RefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.refresh.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.users.v2.refresh.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersV2RefreshMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.v2.refresh.$post>) {
      return parseResponse(client.users.v2.refresh.$post(args, options))
    },
  })
}

export function createPostUsersV2Refresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.refresh.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.v2.refresh.$post>,
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
    const mutationDefaults = getPostUsersV2RefreshMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsersV2TokenExchangeMutationKey() {
  return ['users', '/users/v2/tokenExchange', 'POST'] as const
}

export function getPostUsersV2TokenExchangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.tokenExchange.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.users.v2.tokenExchange.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersV2TokenExchangeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.v2.tokenExchange.$post>) {
      return parseResponse(client.users.v2.tokenExchange.$post(args, options))
    },
  })
}

export function createPostUsersV2TokenExchange<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.tokenExchange.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.v2.tokenExchange.$post>,
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
    const mutationDefaults = getPostUsersV2TokenExchangeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersV2VersionQueryKey() {
  return ['users', '/users/v2/version'] as const
}

export function getUsersV2VersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersV2VersionQueryKey>
  >({
    queryKey: getUsersV2VersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.v2.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsersV2Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.version.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersV2VersionQueryKey>
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
    return { ...getUsersV2VersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV2IndexMutationKey() {
  return ['v2', '/v2/', 'POST'] as const
}

export function getPostV2IndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.index.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.v2.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2IndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.index.$post>) {
      return parseResponse(client.v2.index.$post(args, options))
    },
  })
}

export function createPostV2Index<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.index.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v2.index.$post>,
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
    const mutationDefaults = getPostV2IndexMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2HealthQueryKey() {
  return ['v2', '/v2/health'] as const
}

export function getV2HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2HealthQueryKey>
  >({
    queryKey: getV2HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.health.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV2HealthQueryKey>
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
    return { ...getV2HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV2TimestampQueryKey(args: InferRequestType<typeof client.v2.timestamp.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/timestamp', keyArgs] as const
}

export function getV2TimestampQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.timestamp.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.timestamp.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.timestamp.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2TimestampQueryKey>
  >({
    queryKey: getV2TimestampQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.timestamp.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Timestamp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.timestamp.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.timestamp.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.timestamp.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV2TimestampQueryKey>
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
    return { ...getV2TimestampQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV2TokenMutationKey() {
  return ['v2', '/v2/token', 'POST'] as const
}

export function getPostV2TokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.token.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.token.$post>) {
      return parseResponse(client.v2.token.$post(args, options))
    },
  })
}

export function createPostV2Token<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.token.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.token.$post>,
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
    const mutationDefaults = getPostV2TokenMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2VersionQueryKey() {
  return ['v2', '/v2/version'] as const
}

export function getV2VersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2VersionQueryKey>
  >({
    queryKey: getV2VersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.version.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV2VersionQueryKey>
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
    return { ...getV2VersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV3IndexMutationKey() {
  return ['v3', '/v3/', 'POST'] as const
}

export function getPostV3IndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.index.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.v3.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV3IndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v3.index.$post>) {
      return parseResponse(client.v3.index.$post(args, options))
    },
  })
}

export function createPostV3Index<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.index.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v3.index.$post>,
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
    const mutationDefaults = getPostV3IndexMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV3BatchMutationKey() {
  return ['v3', '/v3/batch', 'POST'] as const
}

export function getPostV3BatchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.batch.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.v3.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV3BatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v3.batch.$post>) {
      return parseResponse(client.v3.batch.$post(args, options))
    },
  })
}

export function createPostV3Batch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.batch.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v3.batch.$post>,
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
    const mutationDefaults = getPostV3BatchMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3HealthQueryKey() {
  return ['v3', '/v3/health'] as const
}

export function getV3HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3HealthQueryKey>
  >({
    queryKey: getV3HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.health.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV3HealthQueryKey>
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
    return { ...getV3HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV3VersionQueryKey() {
  return ['v3', '/v3/version'] as const
}

export function getV3VersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3VersionQueryKey>
  >({
    queryKey: getV3VersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.version.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV3VersionQueryKey>
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
    return { ...getV3VersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
