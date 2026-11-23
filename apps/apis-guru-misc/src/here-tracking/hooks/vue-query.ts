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

export function getAliasesV2QueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aliases.v2.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['aliases', '/aliases/v2', keyArgs] as const
}

export function getAliasesV2QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aliases.v2.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAliasesV2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aliases.v2.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAliasesV2<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aliases.v2.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.$get>>>>
          >,
          ReturnType<typeof getAliasesV2QueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAliasesV2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAliasesV2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aliases.v2.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAliasesV2HealthQueryKey() {
  return ['aliases', '/aliases/v2/health'] as const
}

export function getAliasesV2HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAliasesV2HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aliases.v2.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAliasesV2Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.health.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.health.$get>>>
            >
          >,
          ReturnType<typeof getAliasesV2HealthQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAliasesV2HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAliasesV2HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.aliases.v2.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAliasesV2TrackingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aliases.v2.trackingId.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['aliases', '/aliases/v2/trackingId', keyArgs] as const
}

export function getAliasesV2TrackingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aliases.v2.trackingId.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAliasesV2TrackingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aliases.v2.trackingId.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAliasesV2TrackingId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.trackingId.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aliases.v2.trackingId.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.trackingId.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.trackingId.$get>>>
            >
          >,
          ReturnType<typeof getAliasesV2TrackingIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.trackingId.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAliasesV2TrackingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAliasesV2TrackingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aliases.v2.trackingId.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAliasesV2VersionQueryKey() {
  return ['aliases', '/aliases/v2/version'] as const
}

export function getAliasesV2VersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAliasesV2VersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aliases.v2.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAliasesV2Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.version.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.version.$get>>>
            >
          >,
          ReturnType<typeof getAliasesV2VersionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aliases.v2.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAliasesV2VersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAliasesV2VersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.aliases.v2.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAliasesV2TrackingId2QueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.aliases.v2)[':trackingId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['aliases', '/aliases/v2/:trackingId', keyArgs] as const
}

export function getAliasesV2TrackingId2QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.aliases.v2)[':trackingId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAliasesV2TrackingId2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aliases.v2[':trackingId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAliasesV2TrackingId2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.aliases.v2)[':trackingId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAliasesV2TrackingId2QueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAliasesV2TrackingId2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAliasesV2TrackingId2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aliases.v2[':trackingId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAliasesV2TrackingId2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteAliasesV2TrackingId2MutationOptions<TError, TOnMutateResult>(
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

export function usePutAliasesV2TrackingIdBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutAliasesV2TrackingIdBatchMutationOptions<TError, TOnMutateResult>(
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

export function getAliasesV2TrackingIdTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.aliases.v2)[':trackingId'][':type']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['aliases', '/aliases/v2/:trackingId/:type', keyArgs] as const
}

export function getAliasesV2TrackingIdTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.aliases.v2)[':trackingId'][':type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAliasesV2TrackingIdTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aliases.v2[':trackingId'][':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAliasesV2TrackingIdType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.aliases.v2)[':trackingId'][':type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId'][':type']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId'][':type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAliasesV2TrackingIdTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.aliases.v2)[':trackingId'][':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAliasesV2TrackingIdTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAliasesV2TrackingIdTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aliases.v2[':trackingId'][':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAliasesV2TrackingIdType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteAliasesV2TrackingIdTypeMutationOptions<TError, TOnMutateResult>(
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

export function usePutAliasesV2TrackingIdTypeExternalId<
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
  const mutationDefaults = getPutAliasesV2TrackingIdTypeExternalIdMutationOptions<
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

export function useDeleteAliasesV2TrackingIdTypeExternalId<
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
  const mutationDefaults = getDeleteAliasesV2TrackingIdTypeExternalIdMutationOptions<
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

export function usePutAssociationsV3DevicesBatchUpdate<
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
                Awaited<ReturnType<typeof client.associations.v3.devices.batchUpdate.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.associations.v3.devices.batchUpdate.$put>,
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
  const mutationDefaults = getPutAssociationsV3DevicesBatchUpdateMutationOptions<
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

export function usePostAssociationsV3DevicesTrackingIdBatchCreate<
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
  const mutationDefaults = getPostAssociationsV3DevicesTrackingIdBatchCreateMutationOptions<
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

export function usePostAssociationsV3DevicesTrackingIdBatchDelete<
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
  const mutationDefaults = getPostAssociationsV3DevicesTrackingIdBatchDeleteMutationOptions<
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

export function getAssociationsV3GeofencesGeofenceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.associations.v3.geofences)[':geofenceId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['associations', '/associations/v3/geofences/:geofenceId', keyArgs] as const
}

export function getAssociationsV3GeofencesGeofenceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.associations.v3.geofences)[':geofenceId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssociationsV3GeofencesGeofenceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.associations.v3.geofences[':geofenceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssociationsV3GeofencesGeofenceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.associations.v3.geofences)[':geofenceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.associations.v3.geofences)[':geofenceId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.associations.v3.geofences)[':geofenceId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAssociationsV3GeofencesGeofenceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.associations.v3.geofences)[':geofenceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationsV3GeofencesGeofenceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssociationsV3GeofencesGeofenceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.associations.v3.geofences[':geofenceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssociationsV3HealthQueryKey() {
  return ['associations', '/associations/v3/health'] as const
}

export function getAssociationsV3HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAssociationsV3HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.associations.v3.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssociationsV3Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.associations.v3.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.associations.v3.health.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.associations.v3.health.$get>>>
            >
          >,
          ReturnType<typeof getAssociationsV3HealthQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.associations.v3.health.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationsV3HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAssociationsV3HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.associations.v3.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssociationsV3RulesRuleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.associations.v3.rules)[':ruleId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['associations', '/associations/v3/rules/:ruleId', keyArgs] as const
}

export function getAssociationsV3RulesRuleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.associations.v3.rules)[':ruleId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssociationsV3RulesRuleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.associations.v3.rules[':ruleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssociationsV3RulesRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.associations.v3.rules)[':ruleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.associations.v3.rules)[':ruleId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.associations.v3.rules)[':ruleId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.associations.v3.rules)[':ruleId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssociationsV3RulesRuleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.associations.v3.rules)[':ruleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationsV3RulesRuleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssociationsV3RulesRuleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.associations.v3.rules[':ruleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssociationsV3SensorsSensorRuleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.associations.v3.sensors)[':sensorRuleId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['associations', '/associations/v3/sensors/:sensorRuleId', keyArgs] as const
}

export function getAssociationsV3SensorsSensorRuleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.associations.v3.sensors)[':sensorRuleId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssociationsV3SensorsSensorRuleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.associations.v3.sensors[':sensorRuleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssociationsV3SensorsSensorRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.associations.v3.sensors)[':sensorRuleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.associations.v3.sensors)[':sensorRuleId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.associations.v3.sensors)[':sensorRuleId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAssociationsV3SensorsSensorRuleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.associations.v3.sensors)[':sensorRuleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationsV3SensorsSensorRuleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssociationsV3SensorsSensorRuleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.associations.v3.sensors[':sensorRuleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssociationsV3VersionQueryKey() {
  return ['associations', '/associations/v3/version'] as const
}

export function getAssociationsV3VersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAssociationsV3VersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.associations.v3.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssociationsV3Version<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.associations.v3.version.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.associations.v3.version.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.associations.v3.version.$get>>>
            >
          >,
          ReturnType<typeof getAssociationsV3VersionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.associations.v3.version.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationsV3VersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAssociationsV3VersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.associations.v3.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAssociationsV3TrackingIdGeofencesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.associations.v3)[':trackingId']['geofences']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['associations', '/associations/v3/:trackingId/geofences', keyArgs] as const
}

export function getAssociationsV3TrackingIdGeofencesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.associations.v3)[':trackingId']['geofences']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssociationsV3TrackingIdGeofencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.associations.v3[':trackingId'].geofences.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssociationsV3TrackingIdGeofences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['geofences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.associations.v3)[':trackingId']['geofences']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.associations.v3)[':trackingId']['geofences']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAssociationsV3TrackingIdGeofencesQueryKey>
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
          Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['geofences']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationsV3TrackingIdGeofencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssociationsV3TrackingIdGeofencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.associations.v3[':trackingId'].geofences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAssociationsV3TrackingIdGeofencesGeofenceId<
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
  const mutationDefaults = getPutAssociationsV3TrackingIdGeofencesGeofenceIdMutationOptions<
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

export function useDeleteAssociationsV3TrackingIdGeofencesGeofenceId<
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
  const mutationDefaults = getDeleteAssociationsV3TrackingIdGeofencesGeofenceIdMutationOptions<
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

export function getAssociationsV3TrackingIdRulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.associations.v3)[':trackingId']['rules']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['associations', '/associations/v3/:trackingId/rules', keyArgs] as const
}

export function getAssociationsV3TrackingIdRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.associations.v3)[':trackingId']['rules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssociationsV3TrackingIdRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.associations.v3[':trackingId'].rules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssociationsV3TrackingIdRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.associations.v3)[':trackingId']['rules']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['rules']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['rules']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAssociationsV3TrackingIdRulesQueryKey>
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
          Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['rules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationsV3TrackingIdRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssociationsV3TrackingIdRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.associations.v3[':trackingId'].rules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAssociationsV3TrackingIdRulesRuleId<
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
  const mutationDefaults = getPutAssociationsV3TrackingIdRulesRuleIdMutationOptions<
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

export function useDeleteAssociationsV3TrackingIdRulesRuleId<
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
  const mutationDefaults = getDeleteAssociationsV3TrackingIdRulesRuleIdMutationOptions<
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

export function getAssociationsV3TrackingIdSensorsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.associations.v3)[':trackingId']['sensors']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['associations', '/associations/v3/:trackingId/sensors', keyArgs] as const
}

export function getAssociationsV3TrackingIdSensorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.associations.v3)[':trackingId']['sensors']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAssociationsV3TrackingIdSensorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.associations.v3[':trackingId'].sensors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAssociationsV3TrackingIdSensors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['sensors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.associations.v3)[':trackingId']['sensors']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.associations.v3)[':trackingId']['sensors']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAssociationsV3TrackingIdSensorsQueryKey>
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
          Awaited<ReturnType<(typeof client.associations.v3)[':trackingId']['sensors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAssociationsV3TrackingIdSensorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAssociationsV3TrackingIdSensorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.associations.v3[':trackingId'].sensors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAssociationsV3TrackingIdSensorsSensorRuleId<
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
  const mutationDefaults = getPutAssociationsV3TrackingIdSensorsSensorRuleIdMutationOptions<
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

export function useDeleteAssociationsV3TrackingIdSensorsSensorRuleId<
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
  const mutationDefaults = getDeleteAssociationsV3TrackingIdSensorsSensorRuleIdMutationOptions<
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

export function getBulkjobsV4DeviceUploadsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bulkjobs.v4.deviceUploads.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['bulkjobs', '/bulkjobs/v4/deviceUploads', keyArgs] as const
}

export function getBulkjobsV4DeviceUploadsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bulkjobs.v4.deviceUploads.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBulkjobsV4DeviceUploadsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bulkjobs.v4.deviceUploads.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBulkjobsV4DeviceUploads<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.deviceUploads.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bulkjobs.v4.deviceUploads.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.bulkjobs.v4.deviceUploads.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.bulkjobs.v4.deviceUploads.$get>>
              >
            >
          >,
          ReturnType<typeof getBulkjobsV4DeviceUploadsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.deviceUploads.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBulkjobsV4DeviceUploadsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBulkjobsV4DeviceUploadsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bulkjobs.v4.deviceUploads.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBulkjobsV4DeviceUploads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostBulkjobsV4DeviceUploadsMutationOptions<TError, TOnMutateResult>(
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

export function usePatchBulkjobsV4DeviceUploadsJobId<
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
                Awaited<ReturnType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['$patch']>,
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
  const mutationDefaults = getPatchBulkjobsV4DeviceUploadsJobIdMutationOptions<
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

export function getBulkjobsV4DeviceUploadsJobIdResultsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['results']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['bulkjobs', '/bulkjobs/v4/deviceUploads/:jobId/results', keyArgs] as const
}

export function getBulkjobsV4DeviceUploadsJobIdResultsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['results']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBulkjobsV4DeviceUploadsJobIdResultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bulkjobs.v4.deviceUploads[':jobId'].results.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBulkjobsV4DeviceUploadsJobIdResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['results']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['results']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['results']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBulkjobsV4DeviceUploadsJobIdResultsQueryKey>
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
            ReturnType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['results']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBulkjobsV4DeviceUploadsJobIdResultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBulkjobsV4DeviceUploadsJobIdResultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bulkjobs.v4.deviceUploads[':jobId'].results.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBulkjobsV4DeviceUploadsJobIdStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['status']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['bulkjobs', '/bulkjobs/v4/deviceUploads/:jobId/status', keyArgs] as const
}

export function getBulkjobsV4DeviceUploadsJobIdStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBulkjobsV4DeviceUploadsJobIdStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bulkjobs.v4.deviceUploads[':jobId'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBulkjobsV4DeviceUploadsJobIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['status']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['status']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBulkjobsV4DeviceUploadsJobIdStatusQueryKey>
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
          Awaited<ReturnType<(typeof client.bulkjobs.v4.deviceUploads)[':jobId']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBulkjobsV4DeviceUploadsJobIdStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBulkjobsV4DeviceUploadsJobIdStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bulkjobs.v4.deviceUploads[':jobId'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBulkjobsV4HealthQueryKey() {
  return ['bulkjobs', '/bulkjobs/v4/health'] as const
}

export function getBulkjobsV4HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBulkjobsV4HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bulkjobs.v4.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBulkjobsV4Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.health.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.health.$get>>>
            >
          >,
          ReturnType<typeof getBulkjobsV4HealthQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBulkjobsV4HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBulkjobsV4HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.bulkjobs.v4.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBulkjobsV4VersionQueryKey() {
  return ['bulkjobs', '/bulkjobs/v4/version'] as const
}

export function getBulkjobsV4VersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBulkjobsV4VersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bulkjobs.v4.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBulkjobsV4Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.version.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.version.$get>>>
            >
          >,
          ReturnType<typeof getBulkjobsV4VersionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulkjobs.v4.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBulkjobsV4VersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBulkjobsV4VersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.bulkjobs.v4.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostC2cV4Callback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.callback.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.c2c.v4.callback.$post>,
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
  const mutationDefaults = getPostC2cV4CallbackMutationOptions<TError, TOnMutateResult>(
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

export function getC2cV4ConnectorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.c2c.v4.connectors.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['c2c', '/c2c/v4/connectors', keyArgs] as const
}

export function getC2cV4ConnectorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.c2c.v4.connectors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getC2cV4ConnectorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.c2c.v4.connectors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useC2cV4Connectors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.connectors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.c2c.v4.connectors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.connectors.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.connectors.$get>>>
            >
          >,
          ReturnType<typeof getC2cV4ConnectorsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.connectors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getC2cV4ConnectorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getC2cV4ConnectorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.c2c.v4.connectors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostC2cV4Connectors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.connectors.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.c2c.v4.connectors.$post>,
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
  const mutationDefaults = getPostC2cV4ConnectorsMutationOptions<TError, TOnMutateResult>(
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

export function getC2cV4ConnectorsExtDevicesExternalDeviceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.c2c.v4.connectors)['ext-devices'][':externalDeviceId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['c2c', '/c2c/v4/connectors/ext-devices/:externalDeviceId', keyArgs] as const
}

export function getC2cV4ConnectorsExtDevicesExternalDeviceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.c2c.v4.connectors)['ext-devices'][':externalDeviceId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getC2cV4ConnectorsExtDevicesExternalDeviceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.c2c.v4.connectors['ext-devices'][':externalDeviceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useC2cV4ConnectorsExtDevicesExternalDeviceId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.c2c.v4.connectors)['ext-devices'][':externalDeviceId']['$get']>
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
                    (typeof client.c2c.v4.connectors)['ext-devices'][':externalDeviceId']['$get']
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
                    (typeof client.c2c.v4.connectors)['ext-devices'][':externalDeviceId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getC2cV4ConnectorsExtDevicesExternalDeviceIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getC2cV4ConnectorsExtDevicesExternalDeviceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.c2c.v4.connectors['ext-devices'][':externalDeviceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getC2cV4ConnectorsConnectorIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['$get']>
  >,
) {
  return ['c2c', '/c2c/v4/connectors/:connectorId', toValue(args)] as const
}

export function getC2cV4ConnectorsConnectorIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getC2cV4ConnectorsConnectorIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.c2c.v4.connectors[':connectorId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useC2cV4ConnectorsConnectorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.c2c.v4.connectors)[':connectorId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.c2c.v4.connectors)[':connectorId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.c2c.v4.connectors)[':connectorId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getC2cV4ConnectorsConnectorIdQueryKey>
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
          Awaited<ReturnType<(typeof client.c2c.v4.connectors)[':connectorId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getC2cV4ConnectorsConnectorIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getC2cV4ConnectorsConnectorIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.c2c.v4.connectors[':connectorId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutC2cV4ConnectorsConnectorId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutC2cV4ConnectorsConnectorIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteC2cV4ConnectorsConnectorId<
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
                  Awaited<ReturnType<(typeof client.c2c.v4.connectors)[':connectorId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['$delete']>,
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
  const mutationDefaults = getDeleteC2cV4ConnectorsConnectorIdMutationOptions<
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

export function getC2cV4ConnectorsConnectorIdExtDevicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['c2c', '/c2c/v4/connectors/:connectorId/ext-devices', keyArgs] as const
}

export function getC2cV4ConnectorsConnectorIdExtDevicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getC2cV4ConnectorsConnectorIdExtDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.c2c.v4.connectors[':connectorId']['ext-devices'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useC2cV4ConnectorsConnectorIdExtDevices<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$get']>
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
                    (typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$get']
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
                    (typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getC2cV4ConnectorsConnectorIdExtDevicesQueryKey>
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
            ReturnType<(typeof client.c2c.v4.connectors)[':connectorId']['ext-devices']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getC2cV4ConnectorsConnectorIdExtDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getC2cV4ConnectorsConnectorIdExtDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.c2c.v4.connectors[':connectorId']['ext-devices'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostC2cV4ConnectorsConnectorIdExtDevices<
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
  const mutationDefaults = getPostC2cV4ConnectorsConnectorIdExtDevicesMutationOptions<
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

export function useDeleteC2cV4ConnectorsConnectorIdExtDevicesBatch<
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
  const mutationDefaults = getDeleteC2cV4ConnectorsConnectorIdExtDevicesBatchMutationOptions<
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

export function useDeleteC2cV4ConnectorsConnectorIdExtDevicesExternalDeviceId<
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
  const mutationDefaults =
    getDeleteC2cV4ConnectorsConnectorIdExtDevicesExternalDeviceIdMutationOptions<
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

export function getC2cV4DriversQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.c2c.v4.drivers.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['c2c', '/c2c/v4/drivers', keyArgs] as const
}

export function getC2cV4DriversQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.c2c.v4.drivers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getC2cV4DriversQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.c2c.v4.drivers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useC2cV4Drivers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.drivers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.c2c.v4.drivers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.drivers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.drivers.$get>>>>
          >,
          ReturnType<typeof getC2cV4DriversQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.drivers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getC2cV4DriversQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getC2cV4DriversQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.c2c.v4.drivers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostC2cV4DriversDriverIdVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostC2cV4DriversDriverIdVerifyMutationOptions<
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

export function getC2cV4HealthQueryKey() {
  return ['c2c', '/c2c/v4/health'] as const
}

export function getC2cV4HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getC2cV4HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.c2c.v4.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useC2cV4Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.health.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.health.$get>>>>
          >,
          ReturnType<typeof getC2cV4HealthQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getC2cV4HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getC2cV4HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.c2c.v4.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getC2cV4VersionQueryKey() {
  return ['c2c', '/c2c/v4/version'] as const
}

export function getC2cV4VersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getC2cV4VersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.c2c.v4.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useC2cV4Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.version.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.version.$get>>>>
          >,
          ReturnType<typeof getC2cV4VersionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.c2c.v4.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getC2cV4VersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getC2cV4VersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.c2c.v4.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeviceAssociationsV2HealthQueryKey() {
  return ['device-associations', '/device-associations/v2/health'] as const
}

export function getDeviceAssociationsV2HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDeviceAssociationsV2HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['device-associations'].v2.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeviceAssociationsV2Health<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['device-associations']['v2']['health']['$get']>>
      >
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
                Awaited<ReturnType<(typeof client)['device-associations']['v2']['health']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['device-associations']['v2']['health']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDeviceAssociationsV2HealthQueryKey>
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
          Awaited<ReturnType<(typeof client)['device-associations']['v2']['health']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeviceAssociationsV2HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDeviceAssociationsV2HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['device-associations'].v2.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeviceAssociationsV2VersionQueryKey() {
  return ['device-associations', '/device-associations/v2/version'] as const
}

export function getDeviceAssociationsV2VersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDeviceAssociationsV2VersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['device-associations'].v2.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeviceAssociationsV2Version<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['device-associations']['v2']['version']['$get']>>
      >
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
                Awaited<ReturnType<(typeof client)['device-associations']['v2']['version']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['device-associations']['v2']['version']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDeviceAssociationsV2VersionQueryKey>
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
          Awaited<ReturnType<(typeof client)['device-associations']['v2']['version']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeviceAssociationsV2VersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDeviceAssociationsV2VersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['device-associations'].v2.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeviceAssociationsV2TrackingIdGeofencesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['device-associations']['v2'][':trackingId']['geofences']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['device-associations', '/device-associations/v2/:trackingId/geofences', keyArgs] as const
}

export function getDeviceAssociationsV2TrackingIdGeofencesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['device-associations']['v2'][':trackingId']['geofences']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDeviceAssociationsV2TrackingIdGeofencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['device-associations'].v2[':trackingId'].geofences.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDeviceAssociationsV2TrackingIdGeofences<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['device-associations']['v2'][':trackingId']['geofences']['$get']
    >
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
                    (typeof client)['device-associations']['v2'][':trackingId']['geofences']['$get']
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
                    (typeof client)['device-associations']['v2'][':trackingId']['geofences']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDeviceAssociationsV2TrackingIdGeofencesQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDeviceAssociationsV2TrackingIdGeofencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['device-associations'].v2[':trackingId'].geofences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsV3QueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.v3.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['events', '/events/v3', keyArgs] as const
}

export function getEventsV3QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.v3.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsV3QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.v3.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEventsV3<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.v3.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.$get>>>>
          >,
          ReturnType<typeof getEventsV3QueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsV3QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsV3QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events.v3.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsV3HealthQueryKey() {
  return ['events', '/events/v3/health'] as const
}

export function getEventsV3HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEventsV3HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.v3.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEventsV3Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.health.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.health.$get>>>
            >
          >,
          ReturnType<typeof getEventsV3HealthQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventsV3HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEventsV3HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.events.v3.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsV3StatusesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.v3.statuses.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['events', '/events/v3/statuses', keyArgs] as const
}

export function getEventsV3StatusesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.v3.statuses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsV3StatusesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.v3.statuses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsV3Statuses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.statuses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.v3.statuses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.statuses.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.statuses.$get>>>
            >
          >,
          ReturnType<typeof getEventsV3StatusesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.statuses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventsV3StatusesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsV3StatusesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events.v3.statuses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsV3StatusesDeviceCountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.v3.statuses.deviceCounts.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['events', '/events/v3/statuses/deviceCounts', keyArgs] as const
}

export function getEventsV3StatusesDeviceCountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.v3.statuses.deviceCounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsV3StatusesDeviceCountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.v3.statuses.deviceCounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsV3StatusesDeviceCounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.statuses.deviceCounts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.v3.statuses.deviceCounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.events.v3.statuses.deviceCounts.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.events.v3.statuses.deviceCounts.$get>>
              >
            >
          >,
          ReturnType<typeof getEventsV3StatusesDeviceCountsQueryKey>
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
          Awaited<ReturnType<typeof client.events.v3.statuses.deviceCounts.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsV3StatusesDeviceCountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsV3StatusesDeviceCountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events.v3.statuses.deviceCounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsV3VersionQueryKey() {
  return ['events', '/events/v3/version'] as const
}

export function getEventsV3VersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEventsV3VersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.v3.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsV3Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.version.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.version.$get>>>
            >
          >,
          ReturnType<typeof getEventsV3VersionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.v3.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventsV3VersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEventsV3VersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.events.v3.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsV3TrackingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events.v3)[':trackingId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['events', '/events/v3/:trackingId', keyArgs] as const
}

export function getEventsV3TrackingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events.v3)[':trackingId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsV3TrackingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.v3[':trackingId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsV3TrackingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events.v3)[':trackingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.events.v3)[':trackingId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events.v3)[':trackingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.events.v3)[':trackingId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventsV3TrackingIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.events.v3)[':trackingId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsV3TrackingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsV3TrackingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events.v3[':trackingId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGeofenceAssociationsV2HealthQueryKey() {
  return ['geofence-associations', '/geofence-associations/v2/health'] as const
}

export function getGeofenceAssociationsV2HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGeofenceAssociationsV2HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['geofence-associations'].v2.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGeofenceAssociationsV2Health<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['geofence-associations']['v2']['health']['$get']>>
      >
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
                Awaited<
                  ReturnType<(typeof client)['geofence-associations']['v2']['health']['$get']>
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
                  ReturnType<(typeof client)['geofence-associations']['v2']['health']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGeofenceAssociationsV2HealthQueryKey>
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
          Awaited<ReturnType<(typeof client)['geofence-associations']['v2']['health']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGeofenceAssociationsV2HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGeofenceAssociationsV2HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['geofence-associations'].v2.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGeofenceAssociationsV2VersionQueryKey() {
  return ['geofence-associations', '/geofence-associations/v2/version'] as const
}

export function getGeofenceAssociationsV2VersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGeofenceAssociationsV2VersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['geofence-associations'].v2.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGeofenceAssociationsV2Version<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['geofence-associations']['v2']['version']['$get']>>
      >
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
                Awaited<
                  ReturnType<(typeof client)['geofence-associations']['v2']['version']['$get']>
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
                  ReturnType<(typeof client)['geofence-associations']['v2']['version']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGeofenceAssociationsV2VersionQueryKey>
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
          Awaited<ReturnType<(typeof client)['geofence-associations']['v2']['version']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGeofenceAssociationsV2VersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGeofenceAssociationsV2VersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['geofence-associations'].v2.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGeofenceAssociationsV2GeofenceIdDevicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['geofence-associations']['v2'][':geofenceId']['devices']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'geofence-associations',
    '/geofence-associations/v2/:geofenceId/devices',
    keyArgs,
  ] as const
}

export function getGeofenceAssociationsV2GeofenceIdDevicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['geofence-associations']['v2'][':geofenceId']['devices']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGeofenceAssociationsV2GeofenceIdDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['geofence-associations'].v2[':geofenceId'].devices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGeofenceAssociationsV2GeofenceIdDevices<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['geofence-associations']['v2'][':geofenceId']['devices']['$get']
    >
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
                    (typeof client)['geofence-associations']['v2'][':geofenceId']['devices']['$get']
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
                    (typeof client)['geofence-associations']['v2'][':geofenceId']['devices']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGeofenceAssociationsV2GeofenceIdDevicesQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGeofenceAssociationsV2GeofenceIdDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['geofence-associations'].v2[':geofenceId'].devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutGeofenceAssociationsV2GeofenceIdTrackingId<
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
  const mutationDefaults = getPutGeofenceAssociationsV2GeofenceIdTrackingIdMutationOptions<
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

export function useDeleteGeofenceAssociationsV2GeofenceIdTrackingId<
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
  const mutationDefaults = getDeleteGeofenceAssociationsV2GeofenceIdTrackingIdMutationOptions<
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

export function getGeofencesV2QueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.geofences.v2.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['geofences', '/geofences/v2', keyArgs] as const
}

export function getGeofencesV2QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.geofences.v2.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGeofencesV2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.geofences.v2.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGeofencesV2<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.geofences.v2.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.$get>>>>
          >,
          ReturnType<typeof getGeofencesV2QueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGeofencesV2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGeofencesV2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.geofences.v2.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostGeofencesV2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.geofences.v2.$post>,
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
  const mutationDefaults = getPostGeofencesV2MutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteGeofencesV2<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.geofences.v2.$delete>,
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
  const mutationDefaults = getDeleteGeofencesV2MutationOptions<TError, TOnMutateResult>(
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

export function getGeofencesV2HealthQueryKey() {
  return ['geofences', '/geofences/v2/health'] as const
}

export function getGeofencesV2HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGeofencesV2HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.geofences.v2.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGeofencesV2Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.health.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.health.$get>>>
            >
          >,
          ReturnType<typeof getGeofencesV2HealthQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGeofencesV2HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGeofencesV2HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.geofences.v2.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostGeofencesV2TrainingTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostGeofencesV2TrainingTestMutationOptions<TError, TOnMutateResult>(
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

export function getGeofencesV2VersionQueryKey() {
  return ['geofences', '/geofences/v2/version'] as const
}

export function getGeofencesV2VersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGeofencesV2VersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.geofences.v2.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGeofencesV2Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.version.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.version.$get>>>
            >
          >,
          ReturnType<typeof getGeofencesV2VersionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geofences.v2.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGeofencesV2VersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGeofencesV2VersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.geofences.v2.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGeofencesV2GeofenceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.geofences.v2)[':geofenceId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['geofences', '/geofences/v2/:geofenceId', keyArgs] as const
}

export function getGeofencesV2GeofenceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.geofences.v2)[':geofenceId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGeofencesV2GeofenceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.geofences.v2[':geofenceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGeofencesV2GeofenceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.geofences.v2)[':geofenceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.geofences.v2)[':geofenceId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.geofences.v2)[':geofenceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.geofences.v2)[':geofenceId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGeofencesV2GeofenceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.geofences.v2)[':geofenceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGeofencesV2GeofenceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGeofencesV2GeofenceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.geofences.v2[':geofenceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutGeofencesV2GeofenceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutGeofencesV2GeofenceIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteGeofencesV2GeofenceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteGeofencesV2GeofenceIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostGeofencesV2GeofenceIdPoiTraining<
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
                  ReturnType<(typeof client.geofences.v2)[':geofenceId']['poiTraining']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.geofences.v2)[':geofenceId']['poiTraining']['$post']>,
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
  const mutationDefaults = getPostGeofencesV2GeofenceIdPoiTrainingMutationOptions<
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

export function getLabelsV4HealthQueryKey() {
  return ['labels', '/labels/v4/health'] as const
}

export function getLabelsV4HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLabelsV4HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.labels.v4.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLabelsV4Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.v4.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.labels.v4.health.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.labels.v4.health.$get>>>
            >
          >,
          ReturnType<typeof getLabelsV4HealthQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.v4.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLabelsV4HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLabelsV4HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.labels.v4.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLabelsV4VersionQueryKey() {
  return ['labels', '/labels/v4/version'] as const
}

export function getLabelsV4VersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLabelsV4VersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.labels.v4.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLabelsV4Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.v4.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.labels.v4.version.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.labels.v4.version.$get>>>
            >
          >,
          ReturnType<typeof getLabelsV4VersionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labels.v4.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLabelsV4VersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLabelsV4VersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.labels.v4.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLabelsV4ResourceTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.labels.v4)[':resourceType']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['labels', '/labels/v4/:resourceType', keyArgs] as const
}

export function getLabelsV4ResourceTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.labels.v4)[':resourceType']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLabelsV4ResourceTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.labels.v4[':resourceType'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLabelsV4ResourceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.labels.v4)[':resourceType']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.labels.v4)[':resourceType']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.labels.v4)[':resourceType']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.labels.v4)[':resourceType']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLabelsV4ResourceTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.labels.v4)[':resourceType']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLabelsV4ResourceTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLabelsV4ResourceTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.labels.v4[':resourceType'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLabelsV4ResourceTypeKeysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.labels.v4)[':resourceType']['keys']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['labels', '/labels/v4/:resourceType/keys', keyArgs] as const
}

export function getLabelsV4ResourceTypeKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.labels.v4)[':resourceType']['keys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLabelsV4ResourceTypeKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.labels.v4[':resourceType'].keys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLabelsV4ResourceTypeKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.labels.v4)[':resourceType']['keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.labels.v4)[':resourceType']['keys']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.labels.v4)[':resourceType']['keys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.labels.v4)[':resourceType']['keys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLabelsV4ResourceTypeKeysQueryKey>
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
          Awaited<ReturnType<(typeof client.labels.v4)[':resourceType']['keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLabelsV4ResourceTypeKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLabelsV4ResourceTypeKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.labels.v4[':resourceType'].keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLabelsV4ResourceTypeKeysKeyValuesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.labels.v4)[':resourceType']['keys'][':key']['values']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['labels', '/labels/v4/:resourceType/keys/:key/values', keyArgs] as const
}

export function getLabelsV4ResourceTypeKeysKeyValuesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.labels.v4)[':resourceType']['keys'][':key']['values']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLabelsV4ResourceTypeKeysKeyValuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.labels.v4[':resourceType'].keys[':key'].values.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLabelsV4ResourceTypeKeysKeyValues<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.labels.v4)[':resourceType']['keys'][':key']['values']['$get']>
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
                    (typeof client.labels.v4)[':resourceType']['keys'][':key']['values']['$get']
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
                    (typeof client.labels.v4)[':resourceType']['keys'][':key']['values']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLabelsV4ResourceTypeKeysKeyValuesQueryKey>
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
            ReturnType<(typeof client.labels.v4)[':resourceType']['keys'][':key']['values']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLabelsV4ResourceTypeKeysKeyValuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLabelsV4ResourceTypeKeysKeyValuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.labels.v4[':resourceType'].keys[':key'].values.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLabelsV4ResourceTypeResourceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['labels', '/labels/v4/:resourceType/:resourceId', keyArgs] as const
}

export function getLabelsV4ResourceTypeResourceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLabelsV4ResourceTypeResourceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.labels.v4[':resourceType'][':resourceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLabelsV4ResourceTypeResourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLabelsV4ResourceTypeResourceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLabelsV4ResourceTypeResourceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLabelsV4ResourceTypeResourceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.labels.v4[':resourceType'][':resourceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteLabelsV4ResourceTypeResourceId<
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
                    ReturnType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.labels.v4)[':resourceType'][':resourceId']['$delete']>,
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
  const mutationDefaults = getDeleteLabelsV4ResourceTypeResourceIdMutationOptions<
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

export function usePutLabelsV4ResourceTypeResourceIdBatch<
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
  const mutationDefaults = getPutLabelsV4ResourceTypeResourceIdBatchMutationOptions<
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

export function useDeleteLabelsV4ResourceTypeResourceIdKey<
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
  const mutationDefaults = getDeleteLabelsV4ResourceTypeResourceIdKeyMutationOptions<
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

export function usePutLabelsV4ResourceTypeResourceIdKeyValue<
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
  const mutationDefaults = getPutLabelsV4ResourceTypeResourceIdKeyValueMutationOptions<
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

export function useDeleteLabelsV4ResourceTypeResourceIdKeyValue<
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
  const mutationDefaults = getDeleteLabelsV4ResourceTypeResourceIdKeyValueMutationOptions<
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

export function usePostLargedataV4<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.largedata.v4.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.largedata.v4.$post>,
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
  const mutationDefaults = getPostLargedataV4MutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLargedataV4DevicesTrackingIdMetadataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.largedata.v4.devices)[':trackingId']['metadata']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['largedata', '/largedata/v4/devices/:trackingId/metadata', keyArgs] as const
}

export function getLargedataV4DevicesTrackingIdMetadataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.largedata.v4.devices)[':trackingId']['metadata']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLargedataV4DevicesTrackingIdMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.largedata.v4.devices[':trackingId'].metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLargedataV4DevicesTrackingIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.largedata.v4.devices)[':trackingId']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.largedata.v4.devices)[':trackingId']['metadata']['$get']>
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
                    (typeof client.largedata.v4.devices)[':trackingId']['metadata']['$get']
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
                    (typeof client.largedata.v4.devices)[':trackingId']['metadata']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLargedataV4DevicesTrackingIdMetadataQueryKey>
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
            ReturnType<(typeof client.largedata.v4.devices)[':trackingId']['metadata']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLargedataV4DevicesTrackingIdMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLargedataV4DevicesTrackingIdMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.largedata.v4.devices[':trackingId'].metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLargedataV4HealthQueryKey() {
  return ['largedata', '/largedata/v4/health'] as const
}

export function getLargedataV4HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLargedataV4HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.largedata.v4.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLargedataV4Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.largedata.v4.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.largedata.v4.health.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.largedata.v4.health.$get>>>
            >
          >,
          ReturnType<typeof getLargedataV4HealthQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.largedata.v4.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLargedataV4HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLargedataV4HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.largedata.v4.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLargedataV4VersionQueryKey() {
  return ['largedata', '/largedata/v4/version'] as const
}

export function getLargedataV4VersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLargedataV4VersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.largedata.v4.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLargedataV4Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.largedata.v4.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.largedata.v4.version.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.largedata.v4.version.$get>>>
            >
          >,
          ReturnType<typeof getLargedataV4VersionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.largedata.v4.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLargedataV4VersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLargedataV4VersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.largedata.v4.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostLargedataV4DataId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostLargedataV4DataIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteLargedataV4DataId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteLargedataV4DataIdMutationOptions<TError, TOnMutateResult>(
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

export function getLargedataV4DataIdDataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.largedata.v4)[':dataId']['data']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['largedata', '/largedata/v4/:dataId/data', keyArgs] as const
}

export function getLargedataV4DataIdDataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.largedata.v4)[':dataId']['data']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLargedataV4DataIdDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.largedata.v4[':dataId'].data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLargedataV4DataIdData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['data']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.largedata.v4)[':dataId']['data']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['data']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['data']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLargedataV4DataIdDataQueryKey>
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
          Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['data']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLargedataV4DataIdDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLargedataV4DataIdDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.largedata.v4[':dataId'].data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLargedataV4DataIdMetadataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.largedata.v4)[':dataId']['metadata']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['largedata', '/largedata/v4/:dataId/metadata', keyArgs] as const
}

export function getLargedataV4DataIdMetadataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.largedata.v4)[':dataId']['metadata']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLargedataV4DataIdMetadataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.largedata.v4[':dataId'].metadata.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLargedataV4DataIdMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['metadata']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.largedata.v4)[':dataId']['metadata']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['metadata']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['metadata']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLargedataV4DataIdMetadataQueryKey>
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
          Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['metadata']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLargedataV4DataIdMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLargedataV4DataIdMetadataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.largedata.v4[':dataId'].metadata.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLargedataV4DataIdPartsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.largedata.v4)[':dataId']['parts']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['largedata', '/largedata/v4/:dataId/parts', keyArgs] as const
}

export function getLargedataV4DataIdPartsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.largedata.v4)[':dataId']['parts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLargedataV4DataIdPartsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.largedata.v4[':dataId'].parts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLargedataV4DataIdParts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['parts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.largedata.v4)[':dataId']['parts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['parts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['parts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLargedataV4DataIdPartsQueryKey>
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
          Awaited<ReturnType<(typeof client.largedata.v4)[':dataId']['parts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLargedataV4DataIdPartsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLargedataV4DataIdPartsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.largedata.v4[':dataId'].parts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutLargedataV4DataIdPartsPartNumber<
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
  const mutationDefaults = getPutLargedataV4DataIdPartsPartNumberMutationOptions<
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

export function getLocationsV4QueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.locations.v4.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['locations', '/locations/v4', keyArgs] as const
}

export function getLocationsV4QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.locations.v4.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLocationsV4QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.locations.v4.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLocationsV4<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.locations.v4.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.$get>>>>
          >,
          ReturnType<typeof getLocationsV4QueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLocationsV4QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLocationsV4QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.locations.v4.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostLocationsV4<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.locations.v4.$post>,
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
  const mutationDefaults = getPostLocationsV4MutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteLocationsV4<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.locations.v4.$delete>,
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
  const mutationDefaults = getDeleteLocationsV4MutationOptions<TError, TOnMutateResult>(
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

export function getLocationsV4HealthQueryKey() {
  return ['locations', '/locations/v4/health'] as const
}

export function getLocationsV4HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLocationsV4HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.locations.v4.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLocationsV4Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.health.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.health.$get>>>
            >
          >,
          ReturnType<typeof getLocationsV4HealthQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLocationsV4HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLocationsV4HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.locations.v4.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLocationsV4VersionQueryKey() {
  return ['locations', '/locations/v4/version'] as const
}

export function getLocationsV4VersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLocationsV4VersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.locations.v4.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLocationsV4Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.version.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.version.$get>>>
            >
          >,
          ReturnType<typeof getLocationsV4VersionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.v4.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLocationsV4VersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLocationsV4VersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.locations.v4.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLocationsV4LocationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.locations.v4)[':locationId']['$get']>>,
) {
  return ['locations', '/locations/v4/:locationId', toValue(args)] as const
}

export function getLocationsV4LocationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.locations.v4)[':locationId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLocationsV4LocationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.locations.v4[':locationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLocationsV4LocationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.locations.v4)[':locationId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.locations.v4)[':locationId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.locations.v4)[':locationId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.locations.v4)[':locationId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLocationsV4LocationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.locations.v4)[':locationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLocationsV4LocationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLocationsV4LocationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.locations.v4[':locationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutLocationsV4LocationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutLocationsV4LocationIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteLocationsV4LocationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteLocationsV4LocationIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostMetadataV2DevicesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostMetadataV2DevicesBatchMutationOptions<TError, TOnMutateResult>(
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

export function getMetadataV2DevicesTrackingIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metadata.v2.devices)[':trackingId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['metadata', '/metadata/v2/devices/:trackingId', keyArgs] as const
}

export function getMetadataV2DevicesTrackingIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metadata.v2.devices)[':trackingId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetadataV2DevicesTrackingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metadata.v2.devices[':trackingId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetadataV2DevicesTrackingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metadata.v2.devices)[':trackingId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metadata.v2.devices)[':trackingId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metadata.v2.devices)[':trackingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metadata.v2.devices)[':trackingId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetadataV2DevicesTrackingIdQueryKey>
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
          Awaited<ReturnType<(typeof client.metadata.v2.devices)[':trackingId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataV2DevicesTrackingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetadataV2DevicesTrackingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metadata.v2.devices[':trackingId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMetadataV2DevicesTrackingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutMetadataV2DevicesTrackingIdMutationOptions<
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

export function useDeleteMetadataV2DevicesTrackingId<
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
                  Awaited<ReturnType<(typeof client.metadata.v2.devices)[':trackingId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.metadata.v2.devices)[':trackingId']['$delete']>,
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
  const mutationDefaults = getDeleteMetadataV2DevicesTrackingIdMutationOptions<
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

export function usePostMetadataV2GeofencesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostMetadataV2GeofencesBatchMutationOptions<TError, TOnMutateResult>(
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

export function getMetadataV2GeofencesGeofenceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metadata.v2.geofences)[':geofenceId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['metadata', '/metadata/v2/geofences/:geofenceId', keyArgs] as const
}

export function getMetadataV2GeofencesGeofenceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metadata.v2.geofences)[':geofenceId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetadataV2GeofencesGeofenceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metadata.v2.geofences[':geofenceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetadataV2GeofencesGeofenceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metadata.v2.geofences)[':geofenceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metadata.v2.geofences)[':geofenceId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metadata.v2.geofences)[':geofenceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.metadata.v2.geofences)[':geofenceId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMetadataV2GeofencesGeofenceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.metadata.v2.geofences)[':geofenceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataV2GeofencesGeofenceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetadataV2GeofencesGeofenceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metadata.v2.geofences[':geofenceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMetadataV2GeofencesGeofenceId<
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
                Awaited<ReturnType<(typeof client.metadata.v2.geofences)[':geofenceId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.metadata.v2.geofences)[':geofenceId']['$put']>,
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
  const mutationDefaults = getPutMetadataV2GeofencesGeofenceIdMutationOptions<
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

export function useDeleteMetadataV2GeofencesGeofenceId<
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
                    ReturnType<(typeof client.metadata.v2.geofences)[':geofenceId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.metadata.v2.geofences)[':geofenceId']['$delete']>,
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
  const mutationDefaults = getDeleteMetadataV2GeofencesGeofenceIdMutationOptions<
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

export function getMetadataV2HealthQueryKey() {
  return ['metadata', '/metadata/v2/health'] as const
}

export function getMetadataV2HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMetadataV2HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metadata.v2.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetadataV2Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.health.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.health.$get>>>
            >
          >,
          ReturnType<typeof getMetadataV2HealthQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataV2HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMetadataV2HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.metadata.v2.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostMetadataV2SensorRulesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostMetadataV2SensorRulesBatchMutationOptions<
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

export function getMetadataV2SensorRulesSensorRuleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['metadata', '/metadata/v2/sensorRules/:sensorRuleId', keyArgs] as const
}

export function getMetadataV2SensorRulesSensorRuleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetadataV2SensorRulesSensorRuleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metadata.v2.sensorRules[':sensorRuleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetadataV2SensorRulesSensorRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMetadataV2SensorRulesSensorRuleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataV2SensorRulesSensorRuleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetadataV2SensorRulesSensorRuleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metadata.v2.sensorRules[':sensorRuleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutMetadataV2SensorRulesSensorRuleId<
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
                  ReturnType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$put']>,
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
  const mutationDefaults = getPutMetadataV2SensorRulesSensorRuleIdMutationOptions<
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

export function useDeleteMetadataV2SensorRulesSensorRuleId<
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
                    ReturnType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.metadata.v2.sensorRules)[':sensorRuleId']['$delete']>,
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
  const mutationDefaults = getDeleteMetadataV2SensorRulesSensorRuleIdMutationOptions<
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

export function getMetadataV2VersionQueryKey() {
  return ['metadata', '/metadata/v2/version'] as const
}

export function getMetadataV2VersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMetadataV2VersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metadata.v2.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetadataV2Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.version.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.version.$get>>>
            >
          >,
          ReturnType<typeof getMetadataV2VersionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v2.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetadataV2VersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMetadataV2VersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.metadata.v2.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsV3HealthQueryKey() {
  return ['notifications', '/notifications/v3/health'] as const
}

export function getNotificationsV3HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNotificationsV3HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications.v3.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsV3Health<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.health.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.health.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.health.$get>>>
            >
          >,
          ReturnType<typeof getNotificationsV3HealthQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.health.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsV3HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNotificationsV3HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications.v3.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNotificationsV3RegistrationChannelIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications.v3.registration)[':channelId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['notifications', '/notifications/v3/registration/:channelId', keyArgs] as const
}

export function getNotificationsV3RegistrationChannelIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications.v3.registration)[':channelId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsV3RegistrationChannelIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications.v3.registration[':channelId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsV3RegistrationChannelId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications.v3.registration)[':channelId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.notifications.v3.registration)[':channelId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.notifications.v3.registration)[':channelId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNotificationsV3RegistrationChannelIdQueryKey>
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
          Awaited<ReturnType<(typeof client.notifications.v3.registration)[':channelId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsV3RegistrationChannelIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsV3RegistrationChannelIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications.v3.registration[':channelId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutNotificationsV3RegistrationChannelId<
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
                  ReturnType<(typeof client.notifications.v3.registration)[':channelId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.notifications.v3.registration)[':channelId']['$put']>,
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
  const mutationDefaults = getPutNotificationsV3RegistrationChannelIdMutationOptions<
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

export function useDeleteNotificationsV3RegistrationChannelId<
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
  const mutationDefaults = getDeleteNotificationsV3RegistrationChannelIdMutationOptions<
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

export function getNotificationsV3RegistrationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notifications.v3.registrations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['notifications', '/notifications/v3/registrations', keyArgs] as const
}

export function getNotificationsV3RegistrationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notifications.v3.registrations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotificationsV3RegistrationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications.v3.registrations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsV3Registrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.registrations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.notifications.v3.registrations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.notifications.v3.registrations.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.notifications.v3.registrations.$get>>
              >
            >
          >,
          ReturnType<typeof getNotificationsV3RegistrationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.registrations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsV3RegistrationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNotificationsV3RegistrationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications.v3.registrations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostNotificationsV3Registrations<
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
                Awaited<ReturnType<typeof client.notifications.v3.registrations.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.notifications.v3.registrations.$post>,
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
  const mutationDefaults = getPostNotificationsV3RegistrationsMutationOptions<
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

export function useDeleteNotificationsV3Registrations<
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
                  Awaited<ReturnType<typeof client.notifications.v3.registrations.$delete>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.notifications.v3.registrations.$delete>,
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
  const mutationDefaults = getDeleteNotificationsV3RegistrationsMutationOptions<
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

export function getNotificationsV3VersionQueryKey() {
  return ['notifications', '/notifications/v3/version'] as const
}

export function getNotificationsV3VersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNotificationsV3VersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notifications.v3.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNotificationsV3Version<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.version.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.version.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.version.$get>>>
            >
          >,
          ReturnType<typeof getNotificationsV3VersionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.v3.version.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsV3VersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNotificationsV3VersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.notifications.v3.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegistryV2DevicesDeviceOrExternalIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['registry', '/registry/v2/devices/:deviceOrExternalId', keyArgs] as const
}

export function getRegistryV2DevicesDeviceOrExternalIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistryV2DevicesDeviceOrExternalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registry.v2.devices[':deviceOrExternalId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRegistryV2DevicesDeviceOrExternalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getRegistryV2DevicesDeviceOrExternalIdQueryKey>
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
          Awaited<ReturnType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistryV2DevicesDeviceOrExternalIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistryV2DevicesDeviceOrExternalIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registry.v2.devices[':deviceOrExternalId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRegistryV2DevicesDeviceOrExternalId<
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
                  ReturnType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.registry.v2.devices)[':deviceOrExternalId']['$put']>,
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
  const mutationDefaults = getPutRegistryV2DevicesDeviceOrExternalIdMutationOptions<
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

export function useDeleteRegistryV2DevicesDeviceOrExternalId<
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
  const mutationDefaults = getDeleteRegistryV2DevicesDeviceOrExternalIdMutationOptions<
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

export function getRegistryV2HealthQueryKey() {
  return ['registry', '/registry/v2/health'] as const
}

export function getRegistryV2HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRegistryV2HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registry.v2.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRegistryV2Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.health.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.health.$get>>>
            >
          >,
          ReturnType<typeof getRegistryV2HealthQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRegistryV2HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRegistryV2HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.registry.v2.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegistryV2LicensesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.registry.v2.licenses.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['registry', '/registry/v2/licenses', keyArgs] as const
}

export function getRegistryV2LicensesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.registry.v2.licenses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistryV2LicensesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registry.v2.licenses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRegistryV2Licenses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.licenses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.registry.v2.licenses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.licenses.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.licenses.$get>>>
            >
          >,
          ReturnType<typeof getRegistryV2LicensesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.licenses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRegistryV2LicensesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistryV2LicensesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registry.v2.licenses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegistryV2VersionQueryKey() {
  return ['registry', '/registry/v2/version'] as const
}

export function getRegistryV2VersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRegistryV2VersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registry.v2.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRegistryV2Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.version.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.version.$get>>>
            >
          >,
          ReturnType<typeof getRegistryV2VersionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registry.v2.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRegistryV2VersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRegistryV2VersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.registry.v2.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegistryV2AppIdDevicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registry.v2)[':appId']['devices']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['registry', '/registry/v2/:appId/devices', keyArgs] as const
}

export function getRegistryV2AppIdDevicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registry.v2)[':appId']['devices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistryV2AppIdDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registry.v2[':appId'].devices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRegistryV2AppIdDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registry.v2)[':appId']['devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registry.v2)[':appId']['devices']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.registry.v2)[':appId']['devices']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.registry.v2)[':appId']['devices']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRegistryV2AppIdDevicesQueryKey>
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
          Awaited<ReturnType<(typeof client.registry.v2)[':appId']['devices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistryV2AppIdDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistryV2AppIdDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registry.v2[':appId'].devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRegistryV2AppIdDevices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostRegistryV2AppIdDevicesMutationOptions<TError, TOnMutateResult>(
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

export function getRegistryV2AppIdLicenseCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registry.v2)[':appId']['licenseCount']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['registry', '/registry/v2/:appId/licenseCount', keyArgs] as const
}

export function getRegistryV2AppIdLicenseCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registry.v2)[':appId']['licenseCount']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistryV2AppIdLicenseCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registry.v2[':appId'].licenseCount.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRegistryV2AppIdLicenseCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registry.v2)[':appId']['licenseCount']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registry.v2)[':appId']['licenseCount']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.registry.v2)[':appId']['licenseCount']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.registry.v2)[':appId']['licenseCount']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRegistryV2AppIdLicenseCountQueryKey>
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
          Awaited<ReturnType<(typeof client.registry.v2)[':appId']['licenseCount']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistryV2AppIdLicenseCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistryV2AppIdLicenseCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registry.v2[':appId'].licenseCount.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRegistryV2AppIdOneDevice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostRegistryV2AppIdOneDeviceMutationOptions<TError, TOnMutateResult>(
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

export function getRegistryV2JobIdResultsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registry.v2)[':jobId']['results']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['registry', '/registry/v2/:jobId/results', keyArgs] as const
}

export function getRegistryV2JobIdResultsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registry.v2)[':jobId']['results']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistryV2JobIdResultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registry.v2[':jobId'].results.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRegistryV2JobIdResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registry.v2)[':jobId']['results']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.registry.v2)[':jobId']['results']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.registry.v2)[':jobId']['results']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.registry.v2)[':jobId']['results']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRegistryV2JobIdResultsQueryKey>
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
          Awaited<ReturnType<(typeof client.registry.v2)[':jobId']['results']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistryV2JobIdResultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistryV2JobIdResultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registry.v2[':jobId'].results.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegistryV2JobIdStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.registry.v2)[':jobId']['status']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['registry', '/registry/v2/:jobId/status', keyArgs] as const
}

export function getRegistryV2JobIdStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.registry.v2)[':jobId']['status']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistryV2JobIdStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registry.v2[':jobId'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRegistryV2JobIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.registry.v2)[':jobId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.registry.v2)[':jobId']['status']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.registry.v2)[':jobId']['status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.registry.v2)[':jobId']['status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRegistryV2JobIdStatusQueryKey>
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
          Awaited<ReturnType<(typeof client.registry.v2)[':jobId']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistryV2JobIdStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistryV2JobIdStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registry.v2[':jobId'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegistryV2TrackingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.registry.v2)[':trackingId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['registry', '/registry/v2/:trackingId', keyArgs] as const
}

export function getRegistryV2TrackingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.registry.v2)[':trackingId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistryV2TrackingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registry.v2[':trackingId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRegistryV2TrackingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.registry.v2)[':trackingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.registry.v2)[':trackingId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.registry.v2)[':trackingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.registry.v2)[':trackingId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRegistryV2TrackingIdQueryKey>
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
          Awaited<ReturnType<(typeof client.registry.v2)[':trackingId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRegistryV2TrackingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistryV2TrackingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registry.v2[':trackingId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteRegistryV2TrackingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteRegistryV2TrackingIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostRegistryV4ResourcesResourceTypeFind<
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
                    (typeof client.registry.v4.resources)[':resourceType']['find']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.registry.v4.resources)[':resourceType']['find']['$post']>,
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
  const mutationDefaults = getPostRegistryV4ResourcesResourceTypeFindMutationOptions<
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

export function usePostReportsV4<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.v4.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.reports.v4.$post>,
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
  const mutationDefaults = getPostReportsV4MutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getReportsV4HealthQueryKey() {
  return ['reports', '/reports/v4/health'] as const
}

export function getReportsV4HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getReportsV4HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reports.v4.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportsV4Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.v4.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reports.v4.health.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reports.v4.health.$get>>>
            >
          >,
          ReturnType<typeof getReportsV4HealthQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.v4.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportsV4HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getReportsV4HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.reports.v4.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportsV4VersionQueryKey() {
  return ['reports', '/reports/v4/version'] as const
}

export function getReportsV4VersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getReportsV4VersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reports.v4.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportsV4Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.v4.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reports.v4.version.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reports.v4.version.$get>>>
            >
          >,
          ReturnType<typeof getReportsV4VersionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.v4.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportsV4VersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getReportsV4VersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.reports.v4.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportsV4ReportIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reports.v4)[':reportId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['reports', '/reports/v4/:reportId', keyArgs] as const
}

export function getReportsV4ReportIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reports.v4)[':reportId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsV4ReportIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reports.v4[':reportId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportsV4ReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reports.v4)[':reportId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reports.v4)[':reportId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reports.v4)[':reportId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reports.v4)[':reportId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReportsV4ReportIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.reports.v4)[':reportId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsV4ReportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsV4ReportIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reports.v4[':reportId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRulesV4QueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rules.v4.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['rules', '/rules/v4', keyArgs] as const
}

export function getRulesV4QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rules.v4.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRulesV4QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rules.v4.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRulesV4<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rules.v4.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.$get>>>>
          >,
          ReturnType<typeof getRulesV4QueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRulesV4QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRulesV4QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rules.v4.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRulesV4<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.rules.v4.$post>,
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
  const mutationDefaults = getPostRulesV4MutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteRulesV4<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.$delete>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.rules.v4.$delete>,
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
  const mutationDefaults = getDeleteRulesV4MutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRulesV4HealthQueryKey() {
  return ['rules', '/rules/v4/health'] as const
}

export function getRulesV4HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRulesV4HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rules.v4.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRulesV4Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.health.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.health.$get>>>
            >
          >,
          ReturnType<typeof getRulesV4HealthQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRulesV4HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRulesV4HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.rules.v4.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRulesV4VersionQueryKey() {
  return ['rules', '/rules/v4/version'] as const
}

export function getRulesV4VersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRulesV4VersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rules.v4.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRulesV4Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.version.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.version.$get>>>
            >
          >,
          ReturnType<typeof getRulesV4VersionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.v4.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRulesV4VersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRulesV4VersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.rules.v4.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRulesV4RuleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rules.v4)[':ruleId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['rules', '/rules/v4/:ruleId', keyArgs] as const
}

export function getRulesV4RuleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rules.v4)[':ruleId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRulesV4RuleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rules.v4[':ruleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRulesV4RuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rules.v4)[':ruleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rules.v4)[':ruleId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.rules.v4)[':ruleId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.rules.v4)[':ruleId']['$get']>>>
            >
          >,
          ReturnType<typeof getRulesV4RuleIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.rules.v4)[':ruleId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRulesV4RuleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRulesV4RuleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rules.v4[':ruleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRulesV4RuleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.rules.v4)[':ruleId']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.rules.v4)[':ruleId']['$put']>,
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
  const mutationDefaults = getPutRulesV4RuleIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteRulesV4RuleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteRulesV4RuleIdMutationOptions<TError, TOnMutateResult>(
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

export function getSensorsV3QueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sensors.v3.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sensors', '/sensors/v3', keyArgs] as const
}

export function getSensorsV3QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sensors.v3.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSensorsV3QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sensors.v3.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSensorsV3<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sensors.v3.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.$get>>>>
          >,
          ReturnType<typeof getSensorsV3QueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSensorsV3QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSensorsV3QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sensors.v3.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSensorsV3<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sensors.v3.$post>,
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
  const mutationDefaults = getPostSensorsV3MutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteSensorsV3<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.sensors.v3.$delete>,
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
  const mutationDefaults = getDeleteSensorsV3MutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSensorsV3HealthQueryKey() {
  return ['sensors', '/sensors/v3/health'] as const
}

export function getSensorsV3HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSensorsV3HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sensors.v3.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSensorsV3Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.health.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.health.$get>>>
            >
          >,
          ReturnType<typeof getSensorsV3HealthQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSensorsV3HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSensorsV3HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.sensors.v3.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSensorsV3VersionQueryKey() {
  return ['sensors', '/sensors/v3/version'] as const
}

export function getSensorsV3VersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSensorsV3VersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sensors.v3.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSensorsV3Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.version.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.version.$get>>>
            >
          >,
          ReturnType<typeof getSensorsV3VersionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sensors.v3.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSensorsV3VersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSensorsV3VersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.sensors.v3.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSensorsV3SensorRuleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sensors.v3)[':sensorRuleId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['sensors', '/sensors/v3/:sensorRuleId', keyArgs] as const
}

export function getSensorsV3SensorRuleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sensors.v3)[':sensorRuleId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSensorsV3SensorRuleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sensors.v3[':sensorRuleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSensorsV3SensorRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sensors.v3)[':sensorRuleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sensors.v3)[':sensorRuleId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sensors.v3)[':sensorRuleId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sensors.v3)[':sensorRuleId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSensorsV3SensorRuleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.sensors.v3)[':sensorRuleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSensorsV3SensorRuleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSensorsV3SensorRuleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sensors.v3[':sensorRuleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutSensorsV3SensorRuleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutSensorsV3SensorRuleIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteSensorsV3SensorRuleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteSensorsV3SensorRuleIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostShadowsV2Batch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v2.batch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.shadows.v2.batch.$post>,
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
  const mutationDefaults = getPostShadowsV2BatchMutationOptions<TError, TOnMutateResult>(
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

export function getShadowsV2HealthQueryKey() {
  return ['shadows', '/shadows/v2/health'] as const
}

export function getShadowsV2HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getShadowsV2HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shadows.v2.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShadowsV2Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v2.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v2.health.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v2.health.$get>>>
            >
          >,
          ReturnType<typeof getShadowsV2HealthQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v2.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShadowsV2HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getShadowsV2HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.shadows.v2.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShadowsV2VersionQueryKey() {
  return ['shadows', '/shadows/v2/version'] as const
}

export function getShadowsV2VersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getShadowsV2VersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shadows.v2.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShadowsV2Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v2.version.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v2.version.$get>>>
            >
          >,
          ReturnType<typeof getShadowsV2VersionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v2.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShadowsV2VersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getShadowsV2VersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.shadows.v2.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShadowsV2TrackingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shadows.v2)[':trackingId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shadows', '/shadows/v2/:trackingId', keyArgs] as const
}

export function getShadowsV2TrackingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shadows.v2)[':trackingId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShadowsV2TrackingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shadows.v2[':trackingId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShadowsV2TrackingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shadows.v2)[':trackingId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShadowsV2TrackingIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShadowsV2TrackingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShadowsV2TrackingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shadows.v2[':trackingId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutShadowsV2TrackingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutShadowsV2TrackingIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteShadowsV2TrackingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteShadowsV2TrackingIdMutationOptions<TError, TOnMutateResult>(
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

export function getShadowsV2TrackingIdStateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shadows.v2)[':trackingId'][':state']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shadows', '/shadows/v2/:trackingId/:state', keyArgs] as const
}

export function getShadowsV2TrackingIdStateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shadows.v2)[':trackingId'][':state']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShadowsV2TrackingIdStateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shadows.v2[':trackingId'][':state'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShadowsV2TrackingIdState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId'][':state']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shadows.v2)[':trackingId'][':state']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId'][':state']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId'][':state']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShadowsV2TrackingIdStateQueryKey>
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
          Awaited<ReturnType<(typeof client.shadows.v2)[':trackingId'][':state']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShadowsV2TrackingIdStateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShadowsV2TrackingIdStateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shadows.v2[':trackingId'][':state'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShadowsV2TrackingIdStateSelectorQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shadows.v2)[':trackingId'][':state'][':selector']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shadows', '/shadows/v2/:trackingId/:state/:selector', keyArgs] as const
}

export function getShadowsV2TrackingIdStateSelectorQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shadows.v2)[':trackingId'][':state'][':selector']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShadowsV2TrackingIdStateSelectorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shadows.v2[':trackingId'][':state'][':selector'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShadowsV2TrackingIdStateSelector<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shadows.v2)[':trackingId'][':state'][':selector']['$get']>
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
                    (typeof client.shadows.v2)[':trackingId'][':state'][':selector']['$get']
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
                    (typeof client.shadows.v2)[':trackingId'][':state'][':selector']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getShadowsV2TrackingIdStateSelectorQueryKey>
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
            ReturnType<(typeof client.shadows.v2)[':trackingId'][':state'][':selector']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShadowsV2TrackingIdStateSelectorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShadowsV2TrackingIdStateSelectorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shadows.v2[':trackingId'][':state'][':selector'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShadowsV4QueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shadows.v4.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shadows', '/shadows/v4', keyArgs] as const
}

export function getShadowsV4QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shadows.v4.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShadowsV4QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shadows.v4.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useShadowsV4<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v4.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shadows.v4.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v4.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v4.$get>>>>
          >,
          ReturnType<typeof getShadowsV4QueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shadows.v4.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getShadowsV4QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShadowsV4QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shadows.v4.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostShipmentReportsV4<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostShipmentReportsV4MutationOptions<TError, TOnMutateResult>(
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

export function getShipmentReportsV4HealthQueryKey() {
  return ['shipment-reports', '/shipment-reports/v4/health'] as const
}

export function getShipmentReportsV4HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getShipmentReportsV4HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['shipment-reports'].v4.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShipmentReportsV4Health<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['shipment-reports']['v4']['health']['$get']>>
      >
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
                Awaited<ReturnType<(typeof client)['shipment-reports']['v4']['health']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['shipment-reports']['v4']['health']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShipmentReportsV4HealthQueryKey>
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
          Awaited<ReturnType<(typeof client)['shipment-reports']['v4']['health']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShipmentReportsV4HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getShipmentReportsV4HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['shipment-reports'].v4.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShipmentReportsV4VersionQueryKey() {
  return ['shipment-reports', '/shipment-reports/v4/version'] as const
}

export function getShipmentReportsV4VersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getShipmentReportsV4VersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['shipment-reports'].v4.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShipmentReportsV4Version<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['shipment-reports']['v4']['version']['$get']>>
      >
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
                Awaited<ReturnType<(typeof client)['shipment-reports']['v4']['version']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['shipment-reports']['v4']['version']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShipmentReportsV4VersionQueryKey>
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
          Awaited<ReturnType<(typeof client)['shipment-reports']['v4']['version']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShipmentReportsV4VersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getShipmentReportsV4VersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['shipment-reports'].v4.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShipmentReportsV4ShipmentReportIdStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['shipment-reports']['v4'][':shipmentReportId']['status']['$get']
    >
  >,
) {
  return [
    'shipment-reports',
    '/shipment-reports/v4/:shipmentReportId/status',
    toValue(args),
  ] as const
}

export function getShipmentReportsV4ShipmentReportIdStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['shipment-reports']['v4'][':shipmentReportId']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShipmentReportsV4ShipmentReportIdStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['shipment-reports'].v4[':shipmentReportId'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShipmentReportsV4ShipmentReportIdStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['shipment-reports']['v4'][':shipmentReportId']['status']['$get']
    >
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
                    (typeof client)['shipment-reports']['v4'][':shipmentReportId']['status']['$get']
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
                    (typeof client)['shipment-reports']['v4'][':shipmentReportId']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getShipmentReportsV4ShipmentReportIdStatusQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShipmentReportsV4ShipmentReportIdStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['shipment-reports'].v4[':shipmentReportId'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShipmentReportsV4ShipmentReportIdSummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['shipment-reports']['v4'][':shipmentReportId']['summary']['$get']
    >
  >,
) {
  return [
    'shipment-reports',
    '/shipment-reports/v4/:shipmentReportId/summary',
    toValue(args),
  ] as const
}

export function getShipmentReportsV4ShipmentReportIdSummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['shipment-reports']['v4'][':shipmentReportId']['summary']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShipmentReportsV4ShipmentReportIdSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['shipment-reports'].v4[':shipmentReportId'].summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShipmentReportsV4ShipmentReportIdSummary<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['shipment-reports']['v4'][':shipmentReportId']['summary']['$get']
    >
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
                    (typeof client)['shipment-reports']['v4'][':shipmentReportId']['summary']['$get']
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
                    (typeof client)['shipment-reports']['v4'][':shipmentReportId']['summary']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getShipmentReportsV4ShipmentReportIdSummaryQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShipmentReportsV4ShipmentReportIdSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['shipment-reports'].v4[':shipmentReportId'].summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShipmentReportsV4ShipmentReportIdMetricQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['shipment-reports']['v4'][':shipmentReportId'][':metric']['$get']
    >
  >,
) {
  return [
    'shipment-reports',
    '/shipment-reports/v4/:shipmentReportId/:metric',
    toValue(args),
  ] as const
}

export function getShipmentReportsV4ShipmentReportIdMetricQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['shipment-reports']['v4'][':shipmentReportId'][':metric']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShipmentReportsV4ShipmentReportIdMetricQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['shipment-reports'].v4[':shipmentReportId'][':metric'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShipmentReportsV4ShipmentReportIdMetric<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['shipment-reports']['v4'][':shipmentReportId'][':metric']['$get']
    >
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
                    (typeof client)['shipment-reports']['v4'][':shipmentReportId'][':metric']['$get']
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
                    (typeof client)['shipment-reports']['v4'][':shipmentReportId'][':metric']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getShipmentReportsV4ShipmentReportIdMetricQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShipmentReportsV4ShipmentReportIdMetricQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['shipment-reports'].v4[':shipmentReportId'][':metric'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShipmentsV4QueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shipments.v4.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shipments', '/shipments/v4', keyArgs] as const
}

export function getShipmentsV4QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shipments.v4.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShipmentsV4QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shipments.v4.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useShipmentsV4<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shipments.v4.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.$get>>>>
          >,
          ReturnType<typeof getShipmentsV4QueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getShipmentsV4QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShipmentsV4QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shipments.v4.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostShipmentsV4<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.shipments.v4.$post>,
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
  const mutationDefaults = getPostShipmentsV4MutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteShipmentsV4<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.shipments.v4.$delete>,
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
  const mutationDefaults = getDeleteShipmentsV4MutationOptions<TError, TOnMutateResult>(
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

export function getShipmentsV4HealthQueryKey() {
  return ['shipments', '/shipments/v4/health'] as const
}

export function getShipmentsV4HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getShipmentsV4HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shipments.v4.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShipmentsV4Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.health.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.health.$get>>>
            >
          >,
          ReturnType<typeof getShipmentsV4HealthQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShipmentsV4HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getShipmentsV4HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.shipments.v4.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShipmentsV4PlansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shipments.v4.plans.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shipments', '/shipments/v4/plans', keyArgs] as const
}

export function getShipmentsV4PlansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shipments.v4.plans.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShipmentsV4PlansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shipments.v4.plans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShipmentsV4Plans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.plans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shipments.v4.plans.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.plans.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.plans.$get>>>
            >
          >,
          ReturnType<typeof getShipmentsV4PlansQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.plans.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShipmentsV4PlansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShipmentsV4PlansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shipments.v4.plans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostShipmentsV4Plans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.plans.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.shipments.v4.plans.$post>,
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
  const mutationDefaults = getPostShipmentsV4PlansMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteShipmentsV4Plans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.plans.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.shipments.v4.plans.$delete>,
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
  const mutationDefaults = getDeleteShipmentsV4PlansMutationOptions<TError, TOnMutateResult>(
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

export function getShipmentsV4PlansShipmentPlanIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$get']>
  >,
) {
  return ['shipments', '/shipments/v4/plans/:shipmentPlanId', toValue(args)] as const
}

export function getShipmentsV4PlansShipmentPlanIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShipmentsV4PlansShipmentPlanIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shipments.v4.plans[':shipmentPlanId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShipmentsV4PlansShipmentPlanId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShipmentsV4PlansShipmentPlanIdQueryKey>
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
          Awaited<ReturnType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShipmentsV4PlansShipmentPlanIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShipmentsV4PlansShipmentPlanIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shipments.v4.plans[':shipmentPlanId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteShipmentsV4PlansShipmentPlanId<
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
                    ReturnType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$delete']>,
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
  const mutationDefaults = getDeleteShipmentsV4PlansShipmentPlanIdMutationOptions<
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

export function usePatchShipmentsV4PlansShipmentPlanId<
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
                    ReturnType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.shipments.v4.plans)[':shipmentPlanId']['$patch']>,
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
  const mutationDefaults = getPatchShipmentsV4PlansShipmentPlanIdMutationOptions<
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

export function getShipmentsV4PlansShipmentPlanIdSegmentPlanIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shipments.v4.plans)[':shipmentPlanId'][':segmentPlanId']['$get']
    >
  >,
) {
  return ['shipments', '/shipments/v4/plans/:shipmentPlanId/:segmentPlanId', toValue(args)] as const
}

export function getShipmentsV4PlansShipmentPlanIdSegmentPlanIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shipments.v4.plans)[':shipmentPlanId'][':segmentPlanId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShipmentsV4PlansShipmentPlanIdSegmentPlanIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shipments.v4.plans[':shipmentPlanId'][':segmentPlanId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShipmentsV4PlansShipmentPlanIdSegmentPlanId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.shipments.v4.plans)[':shipmentPlanId'][':segmentPlanId']['$get']
    >
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
                    (typeof client.shipments.v4.plans)[':shipmentPlanId'][':segmentPlanId']['$get']
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
                    (typeof client.shipments.v4.plans)[':shipmentPlanId'][':segmentPlanId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getShipmentsV4PlansShipmentPlanIdSegmentPlanIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShipmentsV4PlansShipmentPlanIdSegmentPlanIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shipments.v4.plans[':shipmentPlanId'][':segmentPlanId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchShipmentsV4PlansShipmentPlanIdSegmentPlanId<
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
  const mutationDefaults = getPatchShipmentsV4PlansShipmentPlanIdSegmentPlanIdMutationOptions<
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

export function getShipmentsV4VersionQueryKey() {
  return ['shipments', '/shipments/v4/version'] as const
}

export function getShipmentsV4VersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getShipmentsV4VersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shipments.v4.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShipmentsV4Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.version.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.version.$get>>>
            >
          >,
          ReturnType<typeof getShipmentsV4VersionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipments.v4.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShipmentsV4VersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getShipmentsV4VersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.shipments.v4.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShipmentsV4ShipmentIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shipments.v4)[':shipmentId']['$get']>>,
) {
  return ['shipments', '/shipments/v4/:shipmentId', toValue(args)] as const
}

export function getShipmentsV4ShipmentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shipments.v4)[':shipmentId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShipmentsV4ShipmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shipments.v4[':shipmentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShipmentsV4ShipmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shipments.v4)[':shipmentId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShipmentsV4ShipmentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShipmentsV4ShipmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShipmentsV4ShipmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shipments.v4[':shipmentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteShipmentsV4ShipmentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteShipmentsV4ShipmentIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchShipmentsV4ShipmentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPatchShipmentsV4ShipmentIdMutationOptions<TError, TOnMutateResult>(
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

export function getShipmentsV4ShipmentIdSegmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$get']>
  >,
) {
  return ['shipments', '/shipments/v4/:shipmentId/:segmentId', toValue(args)] as const
}

export function getShipmentsV4ShipmentIdSegmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShipmentsV4ShipmentIdSegmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shipments.v4[':shipmentId'][':segmentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShipmentsV4ShipmentIdSegmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getShipmentsV4ShipmentIdSegmentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShipmentsV4ShipmentIdSegmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShipmentsV4ShipmentIdSegmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shipments.v4[':shipmentId'][':segmentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchShipmentsV4ShipmentIdSegmentId<
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
                    ReturnType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.shipments.v4)[':shipmentId'][':segmentId']['$patch']>,
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
  const mutationDefaults = getPatchShipmentsV4ShipmentIdSegmentIdMutationOptions<
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

export function getShipmentsV4TrackingIdSegmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shipments.v4)[':trackingId']['segments']['$get']>
  >,
) {
  return ['shipments', '/shipments/v4/:trackingId/segments', toValue(args)] as const
}

export function getShipmentsV4TrackingIdSegmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shipments.v4)[':trackingId']['segments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShipmentsV4TrackingIdSegmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shipments.v4[':trackingId'].segments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShipmentsV4TrackingIdSegments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shipments.v4)[':trackingId']['segments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shipments.v4)[':trackingId']['segments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shipments.v4)[':trackingId']['segments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shipments.v4)[':trackingId']['segments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShipmentsV4TrackingIdSegmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.shipments.v4)[':trackingId']['segments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShipmentsV4TrackingIdSegmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShipmentsV4TrackingIdSegmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shipments.v4[':trackingId'].segments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTracesV2HealthQueryKey() {
  return ['traces', '/traces/v2/health'] as const
}

export function getTracesV2HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTracesV2HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.traces.v2.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTracesV2Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traces.v2.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.traces.v2.health.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.traces.v2.health.$get>>>
            >
          >,
          ReturnType<typeof getTracesV2HealthQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traces.v2.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTracesV2HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTracesV2HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.traces.v2.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTracesV2VersionQueryKey() {
  return ['traces', '/traces/v2/version'] as const
}

export function getTracesV2VersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTracesV2VersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.traces.v2.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTracesV2Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traces.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.traces.v2.version.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.traces.v2.version.$get>>>
            >
          >,
          ReturnType<typeof getTracesV2VersionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.traces.v2.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTracesV2VersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTracesV2VersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.traces.v2.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTracesV2TrackingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.traces.v2)[':trackingId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['traces', '/traces/v2/:trackingId', keyArgs] as const
}

export function getTracesV2TrackingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.traces.v2)[':trackingId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTracesV2TrackingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.traces.v2[':trackingId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTracesV2TrackingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.traces.v2)[':trackingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.traces.v2)[':trackingId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.traces.v2)[':trackingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.traces.v2)[':trackingId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTracesV2TrackingIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.traces.v2)[':trackingId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTracesV2TrackingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTracesV2TrackingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.traces.v2[':trackingId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteTracesV2TrackingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteTracesV2TrackingIdMutationOptions<TError, TOnMutateResult>(
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

export function getTransitionsV2DevicesTrackingIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.transitions.v2.devices)[':trackingId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['transitions', '/transitions/v2/devices/:trackingId', keyArgs] as const
}

export function getTransitionsV2DevicesTrackingIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.transitions.v2.devices)[':trackingId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransitionsV2DevicesTrackingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transitions.v2.devices[':trackingId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransitionsV2DevicesTrackingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transitions.v2.devices)[':trackingId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.transitions.v2.devices)[':trackingId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transitions.v2.devices)[':trackingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transitions.v2.devices)[':trackingId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTransitionsV2DevicesTrackingIdQueryKey>
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
          Awaited<ReturnType<(typeof client.transitions.v2.devices)[':trackingId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransitionsV2DevicesTrackingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransitionsV2DevicesTrackingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transitions.v2.devices[':trackingId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTransitionsV2HealthQueryKey() {
  return ['transitions', '/transitions/v2/health'] as const
}

export function getTransitionsV2HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTransitionsV2HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transitions.v2.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransitionsV2Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transitions.v2.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transitions.v2.health.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transitions.v2.health.$get>>>
            >
          >,
          ReturnType<typeof getTransitionsV2HealthQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.transitions.v2.health.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransitionsV2HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTransitionsV2HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.transitions.v2.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTransitionsV2VersionQueryKey() {
  return ['transitions', '/transitions/v2/version'] as const
}

export function getTransitionsV2VersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTransitionsV2VersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transitions.v2.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransitionsV2Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transitions.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transitions.v2.version.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transitions.v2.version.$get>>>
            >
          >,
          ReturnType<typeof getTransitionsV2VersionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.transitions.v2.version.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransitionsV2VersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTransitionsV2VersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.transitions.v2.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersV2DevicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.v2.devices.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['users', '/users/v2/devices', keyArgs] as const
}

export function getUsersV2DevicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.v2.devices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersV2DevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.v2.devices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersV2Devices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.v2.devices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.devices.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.devices.$get>>>
            >
          >,
          ReturnType<typeof getUsersV2DevicesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.devices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersV2DevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersV2DevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.v2.devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersV2HealthQueryKey() {
  return ['users', '/users/v2/health'] as const
}

export function getUsersV2HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersV2HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.v2.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersV2Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.health.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.health.$get>>>
            >
          >,
          ReturnType<typeof getUsersV2HealthQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersV2HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersV2HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.v2.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUsersV2Login<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.login.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.v2.login.$post>,
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
  const mutationDefaults = getPostUsersV2LoginMutationOptions<TError, TOnMutateResult>(
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

export function usePostUsersV2Refresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.refresh.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.v2.refresh.$post>,
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
  const mutationDefaults = getPostUsersV2RefreshMutationOptions<TError, TOnMutateResult>(
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

export function usePostUsersV2TokenExchange<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.tokenExchange.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.v2.tokenExchange.$post>,
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
  const mutationDefaults = getPostUsersV2TokenExchangeMutationOptions<TError, TOnMutateResult>(
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

export function getUsersV2VersionQueryKey() {
  return ['users', '/users/v2/version'] as const
}

export function getUsersV2VersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersV2VersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.v2.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersV2Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.version.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.version.$get>>>
            >
          >,
          ReturnType<typeof getUsersV2VersionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.v2.version.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersV2VersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersV2VersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.v2.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2Index<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.index.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v2.index.$post>,
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
  const mutationDefaults = getPostV2IndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2HealthQueryKey() {
  return ['v2', '/v2/health'] as const
}

export function getV2HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.health.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.health.$get>>>>
          >,
          ReturnType<typeof getV2HealthQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2TimestampQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.timestamp.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v2', '/v2/timestamp', keyArgs] as const
}

export function getV2TimestampQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.timestamp.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2TimestampQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.timestamp.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Timestamp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.timestamp.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.timestamp.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.timestamp.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.timestamp.$get>>>>
          >,
          ReturnType<typeof getV2TimestampQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.timestamp.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2TimestampQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2TimestampQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.timestamp.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2Token<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.token.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.token.$post>,
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
  const mutationDefaults = getPostV2TokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2VersionQueryKey() {
  return ['v2', '/v2/version'] as const
}

export function getV2VersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2VersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.version.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.version.$get>>>>
          >,
          ReturnType<typeof getV2VersionQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2VersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2VersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV3Index<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.index.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v3.index.$post>,
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
  const mutationDefaults = getPostV3IndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV3Batch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.batch.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v3.batch.$post>,
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
  const mutationDefaults = getPostV3BatchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV3HealthQueryKey() {
  return ['v3', '/v3/health'] as const
}

export function getV3HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV3HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV3Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.health.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.health.$get>>>>
          >,
          ReturnType<typeof getV3HealthQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV3HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3VersionQueryKey() {
  return ['v3', '/v3/version'] as const
}

export function getV3VersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV3VersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV3Version<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.version.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.version.$get>>>>
          >,
          ReturnType<typeof getV3VersionQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3VersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV3VersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
