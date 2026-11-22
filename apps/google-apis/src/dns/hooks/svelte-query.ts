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

export function getDnsKey() {
  return ['dns'] as const
}

export function getDnsV2ProjectsProjectLocationsLocationQueryKey(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['$get']
  >,
) {
  return ['dns', '/dns/v2/projects/:project/locations/:location', args] as const
}

export function getDnsV2ProjectsProjectLocationsLocationQueryOptions<
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
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDnsV2ProjectsProjectLocationsLocationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDnsV2ProjectsProjectLocationsLocation<
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
  args: () => InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getDnsV2ProjectsProjectLocationsLocationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesQueryKey(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones']['$get']
  >,
) {
  return ['dns', '/dns/v2/projects/:project/locations/:location/managedZones', args] as const
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesQueryOptions<
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
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDnsV2ProjectsProjectLocationsLocationManagedZonesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].managedZones.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDnsV2ProjectsProjectLocationsLocationManagedZones<
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
  args: () => InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getDnsV2ProjectsProjectLocationsLocationManagedZonesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostDnsV2ProjectsProjectLocationsLocationManagedZones<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostDnsV2ProjectsProjectLocationsLocationManagedZonesMutationOptions<
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

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneQueryKey(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$get']
  >,
) {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone',
    args,
  ] as const
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneQueryOptions<
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
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].managedZones[':managedZone'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZone<
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
  args: () => InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZone<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneMutationOptions<
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

export function createDeleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZone<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneMutationOptions<
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

export function createPatchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZone<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneMutationOptions<
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

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesQueryKey(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes']['$get']
  >,
) {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/changes',
    args,
  ] as const
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesQueryOptions<
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
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].managedZones[
          ':managedZone'
        ].changes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChanges<
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
  args: () => InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChanges<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesMutationOptions<
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

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesChangeIdQueryKey(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes'][':changeId']['$get']
  >,
) {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/changes/:changeId',
    args,
  ] as const
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesChangeIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes'][':changeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesChangeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].managedZones[
          ':managedZone'
        ].changes[':changeId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesChangeId<
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
  args: () => InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes'][':changeId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesChangeIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysQueryKey(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys']['$get']
  >,
) {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/dnsKeys',
    args,
  ] as const
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysQueryOptions<
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
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].managedZones[
          ':managedZone'
        ].dnsKeys.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeys<
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
  args: () => InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysDnsKeyIdQueryKey(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys'][':dnsKeyId']['$get']
  >,
) {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/dnsKeys/:dnsKeyId',
    args,
  ] as const
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysDnsKeyIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys'][':dnsKeyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysDnsKeyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].managedZones[
          ':managedZone'
        ].dnsKeys[':dnsKeyId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysDnsKeyId<
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
  args: () => InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys'][':dnsKeyId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysDnsKeyIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsQueryKey(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations']['$get']
  >,
) {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/operations',
    args,
  ] as const
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsQueryOptions<
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
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].managedZones[
          ':managedZone'
        ].operations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperations<
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
  args: () => InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsOperationQueryKey(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations'][':operation']['$get']
  >,
) {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/operations/:operation',
    args,
  ] as const
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsOperationQueryOptions<
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
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations'][':operation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsOperationQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].managedZones[
          ':managedZone'
        ].operations[':operation'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsOperation<
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
  args: () => InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations'][':operation']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsOperationQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsQueryKey(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets']['$get']
  >,
) {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/rrsets',
    args,
  ] as const
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsQueryOptions<
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
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].managedZones[
          ':managedZone'
        ].rrsets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsets<
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
  args: () => InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<
          typeof getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsQueryKey
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
      ...getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsMutationOptions<
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

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeQueryKey(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$get']
  >,
) {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/rrsets/:name/:type',
    args,
  ] as const
}

export function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeQueryOptions<
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
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].managedZones[
          ':managedZone'
        ].rrsets[':name'][':type'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameType<
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
  args: () => InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeMutationOptions<
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

export function createPatchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeMutationOptions<
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

export function getDnsV2ProjectsProjectLocationsLocationPoliciesQueryKey(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies']['$get']
  >,
) {
  return ['dns', '/dns/v2/projects/:project/locations/:location/policies', args] as const
}

export function getDnsV2ProjectsProjectLocationsLocationPoliciesQueryOptions<
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
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDnsV2ProjectsProjectLocationsLocationPoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].policies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDnsV2ProjectsProjectLocationsLocationPolicies<
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
  args: () => InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getDnsV2ProjectsProjectLocationsLocationPoliciesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostDnsV2ProjectsProjectLocationsLocationPolicies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDnsV2ProjectsProjectLocationsLocationPoliciesMutationOptions<
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

export function getDnsV2ProjectsProjectLocationsLocationPoliciesPolicyQueryKey(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$get']
  >,
) {
  return ['dns', '/dns/v2/projects/:project/locations/:location/policies/:policy', args] as const
}

export function getDnsV2ProjectsProjectLocationsLocationPoliciesPolicyQueryOptions<
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
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDnsV2ProjectsProjectLocationsLocationPoliciesPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].policies[':policy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDnsV2ProjectsProjectLocationsLocationPoliciesPolicy<
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
  args: () => InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getDnsV2ProjectsProjectLocationsLocationPoliciesPolicyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutDnsV2ProjectsProjectLocationsLocationPoliciesPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutDnsV2ProjectsProjectLocationsLocationPoliciesPolicyMutationOptions<
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

export function createDeleteDnsV2ProjectsProjectLocationsLocationPoliciesPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteDnsV2ProjectsProjectLocationsLocationPoliciesPolicyMutationOptions<
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

export function createPatchDnsV2ProjectsProjectLocationsLocationPoliciesPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchDnsV2ProjectsProjectLocationsLocationPoliciesPolicyMutationOptions<
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

export function getDnsV2ProjectsProjectLocationsLocationResponsePoliciesQueryKey(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies']['$get']
  >,
) {
  return ['dns', '/dns/v2/projects/:project/locations/:location/responsePolicies', args] as const
}

export function getDnsV2ProjectsProjectLocationsLocationResponsePoliciesQueryOptions<
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
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDnsV2ProjectsProjectLocationsLocationResponsePoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].responsePolicies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDnsV2ProjectsProjectLocationsLocationResponsePolicies<
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
  args: () => InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getDnsV2ProjectsProjectLocationsLocationResponsePoliciesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostDnsV2ProjectsProjectLocationsLocationResponsePolicies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostDnsV2ProjectsProjectLocationsLocationResponsePoliciesMutationOptions<
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

export function getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyQueryKey(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$get']
  >,
) {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/responsePolicies/:responsePolicy',
    args,
  ] as const
}

export function getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyQueryOptions<
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
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
          ':responsePolicy'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicy<
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
  args: () => InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyMutationOptions<
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

export function createDeleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyMutationOptions<
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

export function createPatchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyMutationOptions<
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

export function getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesQueryKey(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules']['$get']
  >,
) {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/responsePolicies/:responsePolicy/rules',
    args,
  ] as const
}

export function getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesQueryOptions<
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
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
          ':responsePolicy'
        ].rules.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRules<
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
  args: () => InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesMutationOptions<
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

export function getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleQueryKey(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$get']
  >,
) {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/responsePolicies/:responsePolicy/rules/:responsePolicyRule',
    args,
  ] as const
}

export function getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleQueryOptions<
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
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
          ':responsePolicy'
        ].rules[':responsePolicyRule'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRule<
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
  args: () => InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleMutationOptions<
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

export function createDeleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleMutationOptions<
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

export function createPatchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleMutationOptions<
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

export function createPostDnsV2ResourceGetIamPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDnsV2ResourceGetIamPolicyMutationOptions<
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

export function createPostDnsV2ResourceSetIamPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDnsV2ResourceSetIamPolicyMutationOptions<
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

export function createPostDnsV2ResourceTestIamPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDnsV2ResourceTestIamPermissionsMutationOptions<
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
