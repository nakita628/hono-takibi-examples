import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDnsKey() {
  return ['dns'] as const
}

export function getGetDnsV2ProjectsProjectLocationsLocationKey(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['$get']
  >,
) {
  return ['dns', '/dns/v2/projects/:project/locations/:location', args] as const
}

export function useGetDnsV2ProjectsProjectLocationsLocation<TError = unknown>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsV2ProjectsProjectLocationsLocation<TError = unknown>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDnsV2ProjectsProjectLocationsLocationManagedZonesKey(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones']['$get']
  >,
) {
  return ['dns', '/dns/v2/projects/:project/locations/:location/managedZones', args] as const
}

export function useGetDnsV2ProjectsProjectLocationsLocationManagedZones<TError = unknown>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationManagedZonesKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].managedZones.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsV2ProjectsProjectLocationsLocationManagedZones<TError = unknown>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationManagedZonesKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].managedZones.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDnsV2ProjectsProjectLocationsLocationManagedZonesKey() {
  return ['dns', '/dns/v2/projects/:project/locations/:location/managedZones', 'POST'] as const
}

export function usePostDnsV2ProjectsProjectLocationsLocationManagedZones<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDnsV2ProjectsProjectLocationsLocationManagedZonesKey()
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
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones']['$post']
          >
        },
      ) =>
        parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].managedZones.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneKey(
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

export function useGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZone<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZone<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone',
    'PUT',
  ] as const
}

export function usePutDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZone<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneKey()
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
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$put']
          >
        },
      ) =>
        parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone',
    'DELETE',
  ] as const
}

export function useDeleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZone<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneKey()
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
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone',
    'PATCH',
  ] as const
}

export function usePatchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZone<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneKey()
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
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesKey(
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

export function useGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChanges<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].changes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChanges<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].changes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/changes',
    'POST',
  ] as const
}

export function usePostDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChanges<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesKey()
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
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].changes.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesChangeIdKey(
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

export function useGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesChangeId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes'][':changeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesChangeIdKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes'][':changeId']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].changes[':changeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesChangeId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes'][':changeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesChangeIdKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes'][':changeId']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].changes[':changeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysKey(
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

export function useGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeys<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].dnsKeys.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeys<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].dnsKeys.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysDnsKeyIdKey(
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

export function useGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysDnsKeyId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys'][':dnsKeyId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysDnsKeyIdKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys'][':dnsKeyId']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].dnsKeys[':dnsKeyId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysDnsKeyId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys'][':dnsKeyId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysDnsKeyIdKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys'][':dnsKeyId']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].dnsKeys[':dnsKeyId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsKey(
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

export function useGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].operations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].operations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsOperationKey(
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

export function useGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsOperation<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations'][':operation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsOperationKey(
            args,
          )
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations'][':operation']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].operations[':operation'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsOperation<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations'][':operation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsOperationKey(
            args,
          )
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations'][':operation']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].operations[':operation'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsKey(
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

export function useGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsets<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].rrsets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsets<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].rrsets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/rrsets',
    'POST',
  ] as const
}

export function usePostDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsKey()
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
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets']['$post']
          >
        },
      ) =>
        parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].rrsets.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeKey(
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

export function useGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].rrsets[':name'][':type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].rrsets[':name'][':type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/rrsets/:name/:type',
    'DELETE',
  ] as const
}

export function useDeleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeKey()
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
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].rrsets[':name'][':type'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/managedZones/:managedZone/rrsets/:name/:type',
    'PATCH',
  ] as const
}

export function usePatchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameTypeKey()
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
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].managedZones[
            ':managedZone'
          ].rrsets[':name'][':type'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDnsV2ProjectsProjectLocationsLocationPoliciesKey(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies']['$get']
  >,
) {
  return ['dns', '/dns/v2/projects/:project/locations/:location/policies', args] as const
}

export function useGetDnsV2ProjectsProjectLocationsLocationPolicies<TError = unknown>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationPoliciesKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].policies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsV2ProjectsProjectLocationsLocationPolicies<TError = unknown>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationPoliciesKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].policies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDnsV2ProjectsProjectLocationsLocationPoliciesKey() {
  return ['dns', '/dns/v2/projects/:project/locations/:location/policies', 'POST'] as const
}

export function usePostDnsV2ProjectsProjectLocationsLocationPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDnsV2ProjectsProjectLocationsLocationPoliciesKey()
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
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies']['$post']
          >
        },
      ) =>
        parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].policies.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDnsV2ProjectsProjectLocationsLocationPoliciesPolicyKey(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$get']
  >,
) {
  return ['dns', '/dns/v2/projects/:project/locations/:location/policies/:policy', args] as const
}

export function useGetDnsV2ProjectsProjectLocationsLocationPoliciesPolicy<TError = unknown>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationPoliciesPolicyKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].policies[':policy'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsV2ProjectsProjectLocationsLocationPoliciesPolicy<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationPoliciesPolicyKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].policies[':policy'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDnsV2ProjectsProjectLocationsLocationPoliciesPolicyKey() {
  return ['dns', '/dns/v2/projects/:project/locations/:location/policies/:policy', 'PUT'] as const
}

export function usePutDnsV2ProjectsProjectLocationsLocationPoliciesPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDnsV2ProjectsProjectLocationsLocationPoliciesPolicyKey()
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
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$put']
          >
        },
      ) =>
        parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].policies[':policy'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDnsV2ProjectsProjectLocationsLocationPoliciesPolicyKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/policies/:policy',
    'DELETE',
  ] as const
}

export function useDeleteDnsV2ProjectsProjectLocationsLocationPoliciesPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDnsV2ProjectsProjectLocationsLocationPoliciesPolicyKey()
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
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].policies[':policy'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDnsV2ProjectsProjectLocationsLocationPoliciesPolicyKey() {
  return ['dns', '/dns/v2/projects/:project/locations/:location/policies/:policy', 'PATCH'] as const
}

export function usePatchDnsV2ProjectsProjectLocationsLocationPoliciesPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDnsV2ProjectsProjectLocationsLocationPoliciesPolicyKey()
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
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].policies[':policy'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDnsV2ProjectsProjectLocationsLocationResponsePoliciesKey(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies']['$get']
  >,
) {
  return ['dns', '/dns/v2/projects/:project/locations/:location/responsePolicies', args] as const
}

export function useGetDnsV2ProjectsProjectLocationsLocationResponsePolicies<TError = unknown>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationResponsePoliciesKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].responsePolicies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsV2ProjectsProjectLocationsLocationResponsePolicies<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationResponsePoliciesKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].responsePolicies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDnsV2ProjectsProjectLocationsLocationResponsePoliciesKey() {
  return ['dns', '/dns/v2/projects/:project/locations/:location/responsePolicies', 'POST'] as const
}

export function usePostDnsV2ProjectsProjectLocationsLocationResponsePolicies<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDnsV2ProjectsProjectLocationsLocationResponsePoliciesKey()
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
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies']['$post']
          >
        },
      ) =>
        parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].responsePolicies.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyKey(
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

export function useGetDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicy<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
            ':responsePolicy'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicy<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
            ':responsePolicy'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/responsePolicies/:responsePolicy',
    'PUT',
  ] as const
}

export function usePutDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyKey()
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
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$put']
          >
        },
      ) =>
        parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
            ':responsePolicy'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/responsePolicies/:responsePolicy',
    'DELETE',
  ] as const
}

export function useDeleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyKey()
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
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
            ':responsePolicy'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/responsePolicies/:responsePolicy',
    'PATCH',
  ] as const
}

export function usePatchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyKey()
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
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
            ':responsePolicy'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesKey(
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

export function useGetDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRules<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
            ':responsePolicy'
          ].rules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRules<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesKey(args)
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
            ':responsePolicy'
          ].rules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/responsePolicies/:responsePolicy/rules',
    'POST',
  ] as const
}

export function usePostDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRules<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesKey()
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
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules']['$post']
          >
        },
      ) =>
        parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
            ':responsePolicy'
          ].rules.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleKey(
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

export function useGetDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRule<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleKey(
            args,
          )
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
            ':responsePolicy'
          ].rules[':responsePolicyRule'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRule<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleKey(
            args,
          )
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
                (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$get']
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
          client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
            ':responsePolicy'
          ].rules[':responsePolicyRule'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/responsePolicies/:responsePolicy/rules/:responsePolicyRule',
    'PUT',
  ] as const
}

export function usePutDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleKey()
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
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$put']
          >
        },
      ) =>
        parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
            ':responsePolicy'
          ].rules[':responsePolicyRule'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/responsePolicies/:responsePolicy/rules/:responsePolicyRule',
    'DELETE',
  ] as const
}

export function useDeleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleKey()
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
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
            ':responsePolicy'
          ].rules[':responsePolicyRule'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleKey() {
  return [
    'dns',
    '/dns/v2/projects/:project/locations/:location/responsePolicies/:responsePolicy/rules/:responsePolicyRule',
    'PATCH',
  ] as const
}

export function usePatchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleKey()
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
            (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
            ':responsePolicy'
          ].rules[':responsePolicyRule'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostDnsV2ResourceGetIamPolicyKey() {
  return ['dns', '/dns/v2/:resource:getIamPolicy', 'POST'] as const
}

export function usePostDnsV2ResourceGetIamPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dns.v2)[':resource:getIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dns.v2)[':resource:getIamPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDnsV2ResourceGetIamPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dns.v2)[':resource:getIamPolicy']['$post']> },
      ) => parseResponse(client.dns.v2[':resource:getIamPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDnsV2ResourceSetIamPolicyKey() {
  return ['dns', '/dns/v2/:resource:setIamPolicy', 'POST'] as const
}

export function usePostDnsV2ResourceSetIamPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dns.v2)[':resource:setIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dns.v2)[':resource:setIamPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDnsV2ResourceSetIamPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dns.v2)[':resource:setIamPolicy']['$post']> },
      ) => parseResponse(client.dns.v2[':resource:setIamPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDnsV2ResourceTestIamPermissionsKey() {
  return ['dns', '/dns/v2/:resource:testIamPermissions', 'POST'] as const
}

export function usePostDnsV2ResourceTestIamPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dns.v2)[':resource:testIamPermissions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dns.v2)[':resource:testIamPermissions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDnsV2ResourceTestIamPermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dns.v2)[':resource:testIamPermissions']['$post']>
        },
      ) => parseResponse(client.dns.v2[':resource:testIamPermissions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
