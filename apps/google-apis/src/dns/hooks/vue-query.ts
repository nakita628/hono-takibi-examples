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

export function getDnsKey() {
  return ['dns'] as const
}

export function getDnsV2ProjectsProjectLocationsLocationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dns.v2.projects)[':project']['locations'][':location']['$get']>
  >,
) {
  return ['dns', '/dns/v2/projects/:project/locations/:location', toValue(args)] as const
}

export function getDnsV2ProjectsProjectLocationsLocationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dns.v2.projects)[':project']['locations'][':location']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDnsV2ProjectsProjectLocationsLocationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDnsV2ProjectsProjectLocationsLocation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.dns.v2.projects)[':project']['locations'][':location']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dns.v2.projects)[':project']['locations'][':location']['$get']>
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDnsV2ProjectsProjectLocationsLocationQueryKey>
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
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDnsV2ProjectsProjectLocationsLocationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDnsV2ProjectsProjectLocationsLocationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones']['$get']
    >
  >,
) {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones',
    toValue(args),
  ] as const
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDnsV2ProjectsProjectLocationsLocationManagedZonesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].managedZones.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDnsV2ProjectsProjectLocationsLocationManagedZones<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDnsV2ProjectsProjectLocationsLocationManagedZonesQueryKey>
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
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDnsV2ProjectsProjectLocationsLocationManagedZonesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDnsV2ProjectsProjectLocationsLocationManagedZonesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].managedZones.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostDnsV2ProjectsProjectLocationsLocationManagedZonesMutationKey() {
  return ['dns', '/dns/v2/projects/:project/locations/:location/managedZones', 'POST'] as const
}

export function getPostDnsV2ProjectsProjectLocationsLocationManagedZonesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDnsV2ProjectsProjectLocationsLocationManagedZonesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones']['$post']
      >,
    ) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].managedZones.$post(args, options),
      )
    },
  })
}

export function usePostDnsV2ProjectsProjectLocationsLocationManagedZones<
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones']['$post']
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
  const mutationDefaults = getPostDnsV2ProjectsProjectLocationsLocationManagedZonesMutationOptions<
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

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$get']
    >
  >,
) {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone',
    toValue(args),
  ] as const
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].managedZones[':managedZone'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZone<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneQueryKey>
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
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneMutationKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone',
    'PUT',
  ] as const
}

export function getPutDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$put']
      >,
    ) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].managedZones[':managedZone'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZone<
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$put']
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
    getPutDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneMutationOptions<
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

export function getDeleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneMutationKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone',
    'DELETE',
  ] as const
}

export function getDeleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$delete']
      >,
    ) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].managedZones[
          ':managedZone'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZone<
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$delete']
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
    getDeleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneMutationOptions<
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

export function getPatchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneMutationKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone',
    'PATCH',
  ] as const
}

export function getPatchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$patch']
      >,
    ) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].managedZones[
          ':managedZone'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZone<
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$patch']
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
    getPatchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneMutationOptions<
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

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes']['$get']
    >
  >,
) {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/changes',
    toValue(args),
  ] as const
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].managedZones[
          ':managedZone'
        ].changes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesQueryKey
          >
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
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].changes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesMutationKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/changes',
    'POST',
  ] as const
}

export function getPostDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes']['$post']
      >,
    ) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].managedZones[
          ':managedZone'
        ].changes.$post(args, options),
      )
    },
  })
}

export function usePostDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChanges<
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes']['$post']
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
    getPostDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesMutationOptions<
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

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesChangeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes'][':changeId']['$get']
    >
  >,
) {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/changes/:changeId',
    toValue(args),
  ] as const
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesChangeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes'][':changeId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesChangeIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].managedZones[
          ':managedZone'
        ].changes[':changeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesChangeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes'][':changeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes'][':changeId']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes'][':changeId']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes'][':changeId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesChangeIdQueryKey
          >
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
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes'][':changeId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesChangeIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesChangeIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].changes[':changeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys']['$get']
    >
  >,
) {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/dnsKeys',
    toValue(args),
  ] as const
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].managedZones[
          ':managedZone'
        ].dnsKeys.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysQueryKey
          >
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
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].dnsKeys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysDnsKeyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys'][':dnsKeyId']['$get']
    >
  >,
) {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/dnsKeys/:dnsKeyId',
    toValue(args),
  ] as const
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysDnsKeyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys'][':dnsKeyId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysDnsKeyIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].managedZones[
          ':managedZone'
        ].dnsKeys[':dnsKeyId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysDnsKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys'][':dnsKeyId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys'][':dnsKeyId']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys'][':dnsKeyId']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys'][':dnsKeyId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysDnsKeyIdQueryKey
          >
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
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys'][':dnsKeyId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysDnsKeyIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysDnsKeyIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].dnsKeys[':dnsKeyId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations']['$get']
    >
  >,
) {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/operations',
    toValue(args),
  ] as const
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].managedZones[
          ':managedZone'
        ].operations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsQueryKey
          >
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
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].operations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsOperationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations'][':operation']['$get']
    >
  >,
) {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/operations/:operation',
    toValue(args),
  ] as const
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsOperationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations'][':operation']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsOperationQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].managedZones[
          ':managedZone'
        ].operations[':operation'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsOperation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations'][':operation']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations'][':operation']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations'][':operation']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations'][':operation']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsOperationQueryKey
          >
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
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations'][':operation']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsOperationQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsOperationQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].operations[':operation'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets']['$get']
    >
  >,
) {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/rrsets',
    toValue(args),
  ] as const
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].managedZones[
          ':managedZone'
        ].rrsets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsQueryKey
          >
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
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].rrsets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsMutationKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/rrsets',
    'POST',
  ] as const
}

export function getPostDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets']['$post']
      >,
    ) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].managedZones[
          ':managedZone'
        ].rrsets.$post(args, options),
      )
    },
  })
}

export function usePostDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsets<
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets']['$post']
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
    getPostDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsMutationOptions<
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

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$get']
    >
  >,
) {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/rrsets/:name/:type',
    toValue(args),
  ] as const
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].managedZones[
          ':managedZone'
        ].rrsets[':name'][':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeQueryKey
          >
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
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].rrsets[':name'][':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeMutationKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/rrsets/:name/:type',
    'DELETE',
  ] as const
}

export function getDeleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$delete']
      >,
    ) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].managedZones[
          ':managedZone'
        ].rrsets[':name'][':type'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameType<
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$delete']
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
    getDeleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeMutationOptions<
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

export function getPatchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeMutationKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/rrsets/:name/:type',
    'PATCH',
  ] as const
}

export function getPatchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$patch']
      >,
    ) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].managedZones[
          ':managedZone'
        ].rrsets[':name'][':type'].$patch(args, options),
      )
    },
  })
}

export function usePatchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameType<
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$patch']
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
    getPatchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeMutationOptions<
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

export function getDnsV2ProjectsProjectLocationsLocationPoliciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies']['$get']
    >
  >,
) {
  return ['dns', '/dns/v2/projects/:project/locations/:location/policies', toValue(args)] as const
}

export function getDnsV2ProjectsProjectLocationsLocationPoliciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDnsV2ProjectsProjectLocationsLocationPoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].policies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDnsV2ProjectsProjectLocationsLocationPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDnsV2ProjectsProjectLocationsLocationPoliciesQueryKey>
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
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDnsV2ProjectsProjectLocationsLocationPoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDnsV2ProjectsProjectLocationsLocationPoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].policies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDnsV2ProjectsProjectLocationsLocationPoliciesMutationKey() {
  return ['dns', '/dns/v2/projects/:project/locations/:location/policies', 'POST'] as const
}

export function getPostDnsV2ProjectsProjectLocationsLocationPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDnsV2ProjectsProjectLocationsLocationPoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies']['$post']
      >,
    ) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].policies.$post(args, options),
      )
    },
  })
}

export function usePostDnsV2ProjectsProjectLocationsLocationPolicies<
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies']['$post']
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
  const mutationDefaults = getPostDnsV2ProjectsProjectLocationsLocationPoliciesMutationOptions<
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

export function getDnsV2ProjectsProjectLocationsLocationPoliciesPolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$get']
    >
  >,
) {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/policies/:policy',
    toValue(args),
  ] as const
}

export function getDnsV2ProjectsProjectLocationsLocationPoliciesPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDnsV2ProjectsProjectLocationsLocationPoliciesPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].policies[':policy'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDnsV2ProjectsProjectLocationsLocationPoliciesPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDnsV2ProjectsProjectLocationsLocationPoliciesPolicyQueryKey>
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
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDnsV2ProjectsProjectLocationsLocationPoliciesPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDnsV2ProjectsProjectLocationsLocationPoliciesPolicyQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].policies[':policy'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutDnsV2ProjectsProjectLocationsLocationPoliciesPolicyMutationKey() {
  return ['dns', '/dns/v2/projects/:project/locations/:location/policies/:policy', 'PUT'] as const
}

export function getPutDnsV2ProjectsProjectLocationsLocationPoliciesPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutDnsV2ProjectsProjectLocationsLocationPoliciesPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$put']
      >,
    ) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].policies[':policy'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutDnsV2ProjectsProjectLocationsLocationPoliciesPolicy<
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$put']
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
  const mutationDefaults = getPutDnsV2ProjectsProjectLocationsLocationPoliciesPolicyMutationOptions<
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

export function getDeleteDnsV2ProjectsProjectLocationsLocationPoliciesPolicyMutationKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/policies/:policy',
    'DELETE',
  ] as const
}

export function getDeleteDnsV2ProjectsProjectLocationsLocationPoliciesPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDnsV2ProjectsProjectLocationsLocationPoliciesPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$delete']
      >,
    ) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].policies[':policy'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteDnsV2ProjectsProjectLocationsLocationPoliciesPolicy<
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$delete']
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
    getDeleteDnsV2ProjectsProjectLocationsLocationPoliciesPolicyMutationOptions<
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

export function getPatchDnsV2ProjectsProjectLocationsLocationPoliciesPolicyMutationKey() {
  return ['dns', '/dns/v2/projects/:project/locations/:location/policies/:policy', 'PATCH'] as const
}

export function getPatchDnsV2ProjectsProjectLocationsLocationPoliciesPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchDnsV2ProjectsProjectLocationsLocationPoliciesPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$patch']
      >,
    ) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].policies[':policy'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchDnsV2ProjectsProjectLocationsLocationPoliciesPolicy<
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$patch']
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
    getPatchDnsV2ProjectsProjectLocationsLocationPoliciesPolicyMutationOptions<
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

export function getDnsV2ProjectsProjectLocationsLocationResponsePoliciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies']['$get']
    >
  >,
) {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/responsePolicies',
    toValue(args),
  ] as const
}

export function getDnsV2ProjectsProjectLocationsLocationResponsePoliciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDnsV2ProjectsProjectLocationsLocationResponsePoliciesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].responsePolicies.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDnsV2ProjectsProjectLocationsLocationResponsePolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDnsV2ProjectsProjectLocationsLocationResponsePoliciesQueryKey>
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
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDnsV2ProjectsProjectLocationsLocationResponsePoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDnsV2ProjectsProjectLocationsLocationResponsePoliciesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].responsePolicies.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostDnsV2ProjectsProjectLocationsLocationResponsePoliciesMutationKey() {
  return ['dns', '/dns/v2/projects/:project/locations/:location/responsePolicies', 'POST'] as const
}

export function getPostDnsV2ProjectsProjectLocationsLocationResponsePoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDnsV2ProjectsProjectLocationsLocationResponsePoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies']['$post']
      >,
    ) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].responsePolicies.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostDnsV2ProjectsProjectLocationsLocationResponsePolicies<
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies']['$post']
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
    getPostDnsV2ProjectsProjectLocationsLocationResponsePoliciesMutationOptions<
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

export function getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$get']
    >
  >,
) {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/responsePolicies/:responsePolicy',
    toValue(args),
  ] as const
}

export function getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
          ':responsePolicy'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyQueryKey
          >
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
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
            ':responsePolicy'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyMutationKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/responsePolicies/:responsePolicy',
    'PUT',
  ] as const
}

export function getPutDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$put']
      >,
    ) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
          ':responsePolicy'
        ].$put(args, options),
      )
    },
  })
}

export function usePutDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicy<
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$put']
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
    getPutDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyMutationOptions<
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

export function getDeleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyMutationKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/responsePolicies/:responsePolicy',
    'DELETE',
  ] as const
}

export function getDeleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$delete']
      >,
    ) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
          ':responsePolicy'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicy<
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$delete']
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
    getDeleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyMutationOptions<
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

export function getPatchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyMutationKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/responsePolicies/:responsePolicy',
    'PATCH',
  ] as const
}

export function getPatchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$patch']
      >,
    ) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
          ':responsePolicy'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicy<
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$patch']
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
    getPatchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyMutationOptions<
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

export function getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules']['$get']
    >
  >,
) {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/responsePolicies/:responsePolicy/rules',
    toValue(args),
  ] as const
}

export function getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
          ':responsePolicy'
        ].rules.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesQueryKey
          >
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
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
            ':responsePolicy'
          ].rules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesMutationKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/responsePolicies/:responsePolicy/rules',
    'POST',
  ] as const
}

export function getPostDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules']['$post']
      >,
    ) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
          ':responsePolicy'
        ].rules.$post(args, options),
      )
    },
  })
}

export function usePostDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRules<
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules']['$post']
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
    getPostDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesMutationOptions<
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

export function getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$get']
    >
  >,
) {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/responsePolicies/:responsePolicy/rules/:responsePolicyRule',
    toValue(args),
  ] as const
}

export function getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
          ':responsePolicy'
        ].rules[':responsePolicyRule'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$get']
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleQueryKey
          >
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
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
            ':responsePolicy'
          ].rules[':responsePolicyRule'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleMutationKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/responsePolicies/:responsePolicy/rules/:responsePolicyRule',
    'PUT',
  ] as const
}

export function getPutDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$put']
      >,
    ) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
          ':responsePolicy'
        ].rules[':responsePolicyRule'].$put(args, options),
      )
    },
  })
}

export function usePutDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRule<
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$put']
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
    getPutDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleMutationOptions<
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

export function getDeleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleMutationKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/responsePolicies/:responsePolicy/rules/:responsePolicyRule',
    'DELETE',
  ] as const
}

export function getDeleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$delete']
      >,
    ) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
          ':responsePolicy'
        ].rules[':responsePolicyRule'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRule<
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$delete']
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
    getDeleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleMutationOptions<
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

export function getPatchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleMutationKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/responsePolicies/:responsePolicy/rules/:responsePolicyRule',
    'PATCH',
  ] as const
}

export function getPatchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$patch']
      >,
    ) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
          ':responsePolicy'
        ].rules[':responsePolicyRule'].$patch(args, options),
      )
    },
  })
}

export function usePatchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRule<
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
                    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$patch']
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
    getPatchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleMutationOptions<
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

export function getPostDnsV2ResourceGetIamPolicyMutationKey() {
  return ['dns', '/dns/v2/:resource:getIamPolicy', 'POST'] as const
}

export function getPostDnsV2ResourceGetIamPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dns.v2)[':resource:getIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dns.v2)[':resource:getIamPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDnsV2ResourceGetIamPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dns.v2)[':resource:getIamPolicy']['$post']>,
    ) {
      return parseResponse(client.dns.v2[':resource:getIamPolicy'].$post(args, options))
    },
  })
}

export function usePostDnsV2ResourceGetIamPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dns.v2)[':resource:getIamPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dns.v2)[':resource:getIamPolicy']['$post']>,
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
  const mutationDefaults = getPostDnsV2ResourceGetIamPolicyMutationOptions<TError, TOnMutateResult>(
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

export function getPostDnsV2ResourceSetIamPolicyMutationKey() {
  return ['dns', '/dns/v2/:resource:setIamPolicy', 'POST'] as const
}

export function getPostDnsV2ResourceSetIamPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dns.v2)[':resource:setIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dns.v2)[':resource:setIamPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDnsV2ResourceSetIamPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dns.v2)[':resource:setIamPolicy']['$post']>,
    ) {
      return parseResponse(client.dns.v2[':resource:setIamPolicy'].$post(args, options))
    },
  })
}

export function usePostDnsV2ResourceSetIamPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dns.v2)[':resource:setIamPolicy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dns.v2)[':resource:setIamPolicy']['$post']>,
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
  const mutationDefaults = getPostDnsV2ResourceSetIamPolicyMutationOptions<TError, TOnMutateResult>(
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

export function getPostDnsV2ResourceTestIamPermissionsMutationKey() {
  return ['dns', '/dns/v2/:resource:testIamPermissions', 'POST'] as const
}

export function getPostDnsV2ResourceTestIamPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dns.v2)[':resource:testIamPermissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dns.v2)[':resource:testIamPermissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDnsV2ResourceTestIamPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dns.v2)[':resource:testIamPermissions']['$post']>,
    ) {
      return parseResponse(client.dns.v2[':resource:testIamPermissions'].$post(args, options))
    },
  })
}

export function usePostDnsV2ResourceTestIamPermissions<
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
                Awaited<ReturnType<(typeof client.dns.v2)[':resource:testIamPermissions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dns.v2)[':resource:testIamPermissions']['$post']>,
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
  const mutationDefaults = getPostDnsV2ResourceTestIamPermissionsMutationOptions<
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
