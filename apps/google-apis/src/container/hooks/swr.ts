import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1beta1Key() {
  return ['v1beta1'] as const
}

export function getGetV1beta1ProjectsProjectIdZonesZoneClustersKey(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters']['$get']
  >,
) {
  return ['v1beta1', '/v1beta1/projects/:projectId/zones/:zone/clusters', args] as const
}

export function useGetV1beta1ProjectsProjectIdZonesZoneClusters<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters']['$get']
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
        ? getGetV1beta1ProjectsProjectIdZonesZoneClustersKey(args)
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
                (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters']['$get']
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
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1ProjectsProjectIdZonesZoneClusters<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters']['$get']
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
        ? getGetV1beta1ProjectsProjectIdZonesZoneClustersKey(args)
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
                (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters']['$get']
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
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersKey() {
  return ['v1beta1', '/v1beta1/projects/:projectId/zones/:zone/clusters', 'POST'] as const
}

export function usePostV1beta1ProjectsProjectIdZonesZoneClusters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1ProjectsProjectIdZonesZoneClustersKey()
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
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta1ProjectsProjectIdZonesZoneClustersClusterIdKey(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$get']
  >,
) {
  return ['v1beta1', '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId', args] as const
}

export function useGetV1beta1ProjectsProjectIdZonesZoneClustersClusterId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$get']
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
        ? getGetV1beta1ProjectsProjectIdZonesZoneClustersClusterIdKey(args)
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
                (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$get']
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
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1ProjectsProjectIdZonesZoneClustersClusterId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$get']
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
        ? getGetV1beta1ProjectsProjectIdZonesZoneClustersClusterIdKey(args)
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
                (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$get']
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
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1beta1ProjectsProjectIdZonesZoneClustersClusterIdKey() {
  return ['v1beta1', '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId', 'PUT'] as const
}

export function usePutV1beta1ProjectsProjectIdZonesZoneClustersClusterId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1beta1ProjectsProjectIdZonesZoneClustersClusterIdKey()
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
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1beta1ProjectsProjectIdZonesZoneClustersClusterIdKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId',
    'DELETE',
  ] as const
}

export function useDeleteV1beta1ProjectsProjectIdZonesZoneClustersClusterId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1beta1ProjectsProjectIdZonesZoneClustersClusterIdKey()
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
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdAddonsKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/addons',
    'POST',
  ] as const
}

export function usePostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdAddons<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['addons']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['addons']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdAddonsKey()
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
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['addons']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].addons.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLegacyAbacKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/legacyAbac',
    'POST',
  ] as const
}

export function usePostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLegacyAbac<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['legacyAbac']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['legacyAbac']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLegacyAbacKey()
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
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['legacyAbac']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters[
            ':clusterId'
          ].legacyAbac.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLocationsKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/locations',
    'POST',
  ] as const
}

export function usePostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLocations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['locations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['locations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLocationsKey()
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
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['locations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters[
            ':clusterId'
          ].locations.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLoggingKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/logging',
    'POST',
  ] as const
}

export function usePostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLogging<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['logging']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['logging']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdLoggingKey()
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
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['logging']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].logging.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMasterKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/master',
    'POST',
  ] as const
}

export function usePostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMaster<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['master']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['master']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMasterKey()
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
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['master']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].master.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMonitoringKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/monitoring',
    'POST',
  ] as const
}

export function usePostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMonitoring<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['monitoring']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['monitoring']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdMonitoringKey()
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
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['monitoring']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters[
            ':clusterId'
          ].monitoring.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsKey(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools']['$get']
  >,
) {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/nodePools',
    args,
  ] as const
}

export function useGetV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePools<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools']['$get']
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
        ? getGetV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsKey(args)
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
                (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools']['$get']
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
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters[
            ':clusterId'
          ].nodePools.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePools<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools']['$get']
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
        ? getGetV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsKey(args)
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
                (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools']['$get']
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
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters[
            ':clusterId'
          ].nodePools.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/nodePools',
    'POST',
  ] as const
}

export function usePostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePools<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsKey()
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
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters[
            ':clusterId'
          ].nodePools.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdKey(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['$get']
  >,
) {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/nodePools/:nodePoolId',
    args,
  ] as const
}

export function useGetV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['$get']
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
        ? getGetV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdKey(args)
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
                (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['$get']
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
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].nodePools[
            ':nodePoolId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['$get']
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
        ? getGetV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdKey(args)
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
                (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['$get']
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
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].nodePools[
            ':nodePoolId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/nodePools/:nodePoolId',
    'DELETE',
  ] as const
}

export function useDeleteV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdKey()
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
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].nodePools[
            ':nodePoolId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdAutoscalingKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/nodePools/:nodePoolId/autoscaling',
    'POST',
  ] as const
}

export function usePostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdAutoscaling<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['autoscaling']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['autoscaling']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdAutoscalingKey()
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
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['autoscaling']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].nodePools[
            ':nodePoolId'
          ].autoscaling.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdSetManagementKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/nodePools/:nodePoolId/setManagement',
    'POST',
  ] as const
}

export function usePostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdSetManagement<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['setManagement']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['setManagement']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdSetManagementKey()
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
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['setManagement']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].nodePools[
            ':nodePoolId'
          ].setManagement.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdSetSizeKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/nodePools/:nodePoolId/setSize',
    'POST',
  ] as const
}

export function usePostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdSetSize<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['setSize']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['setSize']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdSetSizeKey()
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
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['setSize']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].nodePools[
            ':nodePoolId'
          ].setSize.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdUpdateKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/nodePools/:nodePoolId/update',
    'POST',
  ] as const
}

export function usePostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdUpdate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['update']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdUpdateKey()
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
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId']['update']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].nodePools[
            ':nodePoolId'
          ].update.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdRollbackKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/nodePools/:nodePoolId:rollback',
    'POST',
  ] as const
}

export function usePostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdRollback<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId:rollback']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId:rollback']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdNodePoolsNodePoolIdRollbackKey()
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
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['nodePools'][':nodePoolId:rollback']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters[':clusterId'].nodePools[
            ':nodePoolId:rollback'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdResourceLabelsKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId/resourceLabels',
    'POST',
  ] as const
}

export function usePostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdResourceLabels<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['resourceLabels']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['resourceLabels']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdResourceLabelsKey()
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
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId']['resourceLabels']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters[
            ':clusterId'
          ].resourceLabels.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdCompleteIpRotationKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId:completeIpRotation',
    'POST',
  ] as const
}

export function usePostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdCompleteIpRotation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:completeIpRotation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:completeIpRotation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdCompleteIpRotationKey()
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
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:completeIpRotation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters[
            ':clusterId:completeIpRotation'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetMaintenancePolicyKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId:setMaintenancePolicy',
    'POST',
  ] as const
}

export function usePostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetMaintenancePolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:setMaintenancePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:setMaintenancePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetMaintenancePolicyKey()
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
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:setMaintenancePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters[
            ':clusterId:setMaintenancePolicy'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetMasterAuthKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId:setMasterAuth',
    'POST',
  ] as const
}

export function usePostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetMasterAuth<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:setMasterAuth']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:setMasterAuth']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetMasterAuthKey()
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
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:setMasterAuth']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters[
            ':clusterId:setMasterAuth'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetNetworkPolicyKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId:setNetworkPolicy',
    'POST',
  ] as const
}

export function usePostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetNetworkPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:setNetworkPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:setNetworkPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdSetNetworkPolicyKey()
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
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:setNetworkPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters[
            ':clusterId:setNetworkPolicy'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdStartIpRotationKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/clusters/:clusterId:startIpRotation',
    'POST',
  ] as const
}

export function usePostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdStartIpRotation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:startIpRotation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:startIpRotation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1beta1ProjectsProjectIdZonesZoneClustersClusterIdStartIpRotationKey()
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
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['clusters'][':clusterId:startIpRotation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta1.projects[':projectId'].zones[':zone'].clusters[
            ':clusterId:startIpRotation'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta1ProjectsProjectIdZonesZoneOperationsKey(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations']['$get']
  >,
) {
  return ['v1beta1', '/v1beta1/projects/:projectId/zones/:zone/operations', args] as const
}

export function useGetV1beta1ProjectsProjectIdZonesZoneOperations<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations']['$get']
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
        ? getGetV1beta1ProjectsProjectIdZonesZoneOperationsKey(args)
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
                (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations']['$get']
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
          client.v1beta1.projects[':projectId'].zones[':zone'].operations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1ProjectsProjectIdZonesZoneOperations<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations']['$get']
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
        ? getGetV1beta1ProjectsProjectIdZonesZoneOperationsKey(args)
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
                (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations']['$get']
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
          client.v1beta1.projects[':projectId'].zones[':zone'].operations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1ProjectsProjectIdZonesZoneOperationsOperationIdKey(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations'][':operationId']['$get']
  >,
) {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/operations/:operationId',
    args,
  ] as const
}

export function useGetV1beta1ProjectsProjectIdZonesZoneOperationsOperationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations'][':operationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations'][':operationId']['$get']
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
        ? getGetV1beta1ProjectsProjectIdZonesZoneOperationsOperationIdKey(args)
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
                (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations'][':operationId']['$get']
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
          client.v1beta1.projects[':projectId'].zones[':zone'].operations[':operationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1ProjectsProjectIdZonesZoneOperationsOperationId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations'][':operationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations'][':operationId']['$get']
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
        ? getGetV1beta1ProjectsProjectIdZonesZoneOperationsOperationIdKey(args)
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
                (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations'][':operationId']['$get']
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
          client.v1beta1.projects[':projectId'].zones[':zone'].operations[':operationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1beta1ProjectsProjectIdZonesZoneOperationsOperationIdCancelKey() {
  return [
    'v1beta1',
    '/v1beta1/projects/:projectId/zones/:zone/operations/:operationId:cancel',
    'POST',
  ] as const
}

export function usePostV1beta1ProjectsProjectIdZonesZoneOperationsOperationIdCancel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations'][':operationId:cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations'][':operationId:cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1beta1ProjectsProjectIdZonesZoneOperationsOperationIdCancelKey()
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
            (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['operations'][':operationId:cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta1.projects[':projectId'].zones[':zone'].operations[
            ':operationId:cancel'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta1ProjectsProjectIdZonesZoneServerconfigKey(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['serverconfig']['$get']
  >,
) {
  return ['v1beta1', '/v1beta1/projects/:projectId/zones/:zone/serverconfig', args] as const
}

export function useGetV1beta1ProjectsProjectIdZonesZoneServerconfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['serverconfig']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['serverconfig']['$get']
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
        ? getGetV1beta1ProjectsProjectIdZonesZoneServerconfigKey(args)
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
                (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['serverconfig']['$get']
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
          client.v1beta1.projects[':projectId'].zones[':zone'].serverconfig.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1ProjectsProjectIdZonesZoneServerconfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['serverconfig']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['serverconfig']['$get']
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
        ? getGetV1beta1ProjectsProjectIdZonesZoneServerconfigKey(args)
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
                (typeof client.v1beta1.projects)[':projectId']['zones'][':zone']['serverconfig']['$get']
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
          client.v1beta1.projects[':projectId'].zones[':zone'].serverconfig.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1NameKey(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:name', args] as const
}

export function useGetV1beta1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1beta1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1beta1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1beta1NameKey() {
  return ['v1beta1', '/v1beta1/:name', 'PUT'] as const
}

export function usePutV1beta1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1beta1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':name']['$put']> },
      ) => parseResponse(client.v1beta1[':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1beta1NameKey() {
  return ['v1beta1', '/v1beta1/:name', 'DELETE'] as const
}

export function useDeleteV1beta1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1beta1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':name']['$delete']> },
      ) => parseResponse(client.v1beta1[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta1NameServerConfigKey(
  args: InferRequestType<(typeof client.v1beta1)[':name']['serverConfig']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:name/serverConfig', args] as const
}

export function useGetV1beta1NameServerConfig<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':name']['serverConfig']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':name']['serverConfig']['$get']>>
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
        ? getGetV1beta1NameServerConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':name']['serverConfig']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':name'].serverConfig.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1NameServerConfig<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':name']['serverConfig']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':name']['serverConfig']['$get']>>
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
        ? getGetV1beta1NameServerConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':name']['serverConfig']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':name'].serverConfig.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1beta1NameCancelKey() {
  return ['v1beta1', '/v1beta1/:name:cancel', 'POST'] as const
}

export function usePostV1beta1NameCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':name:cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1NameCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':name:cancel']['$post']> },
      ) => parseResponse(client.v1beta1[':name:cancel'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta1NameCheckAutopilotCompatibilityKey(
  args: InferRequestType<(typeof client.v1beta1)[':name:checkAutopilotCompatibility']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:name:checkAutopilotCompatibility', args] as const
}

export function useGetV1beta1NameCheckAutopilotCompatibility<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':name:checkAutopilotCompatibility']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta1)[':name:checkAutopilotCompatibility']['$get']>
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
        ? getGetV1beta1NameCheckAutopilotCompatibilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta1)[':name:checkAutopilotCompatibility']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1beta1[':name:checkAutopilotCompatibility'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1NameCheckAutopilotCompatibility<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':name:checkAutopilotCompatibility']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta1)[':name:checkAutopilotCompatibility']['$get']>
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
        ? getGetV1beta1NameCheckAutopilotCompatibilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1beta1)[':name:checkAutopilotCompatibility']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1beta1[':name:checkAutopilotCompatibility'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1beta1NameCompleteIpRotationKey() {
  return ['v1beta1', '/v1beta1/:name:completeIpRotation', 'POST'] as const
}

export function usePostV1beta1NameCompleteIpRotation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:completeIpRotation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':name:completeIpRotation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1NameCompleteIpRotationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1beta1)[':name:completeIpRotation']['$post']> },
      ) => parseResponse(client.v1beta1[':name:completeIpRotation'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1NameCompleteUpgradeKey() {
  return ['v1beta1', '/v1beta1/:name:completeUpgrade', 'POST'] as const
}

export function usePostV1beta1NameCompleteUpgrade<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:completeUpgrade']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':name:completeUpgrade']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1NameCompleteUpgradeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1beta1)[':name:completeUpgrade']['$post']> },
      ) => parseResponse(client.v1beta1[':name:completeUpgrade'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1NameRollbackKey() {
  return ['v1beta1', '/v1beta1/:name:rollback', 'POST'] as const
}

export function usePostV1beta1NameRollback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:rollback']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':name:rollback']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1NameRollbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':name:rollback']['$post']> },
      ) => parseResponse(client.v1beta1[':name:rollback'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1NameSetAddonsKey() {
  return ['v1beta1', '/v1beta1/:name:setAddons', 'POST'] as const
}

export function usePostV1beta1NameSetAddons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:setAddons']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':name:setAddons']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1NameSetAddonsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':name:setAddons']['$post']> },
      ) => parseResponse(client.v1beta1[':name:setAddons'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1NameSetAutoscalingKey() {
  return ['v1beta1', '/v1beta1/:name:setAutoscaling', 'POST'] as const
}

export function usePostV1beta1NameSetAutoscaling<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:setAutoscaling']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':name:setAutoscaling']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1NameSetAutoscalingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1beta1)[':name:setAutoscaling']['$post']> },
      ) => parseResponse(client.v1beta1[':name:setAutoscaling'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1NameSetLegacyAbacKey() {
  return ['v1beta1', '/v1beta1/:name:setLegacyAbac', 'POST'] as const
}

export function usePostV1beta1NameSetLegacyAbac<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:setLegacyAbac']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':name:setLegacyAbac']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1NameSetLegacyAbacKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':name:setLegacyAbac']['$post']> },
      ) => parseResponse(client.v1beta1[':name:setLegacyAbac'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1NameSetLocationsKey() {
  return ['v1beta1', '/v1beta1/:name:setLocations', 'POST'] as const
}

export function usePostV1beta1NameSetLocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:setLocations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':name:setLocations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1NameSetLocationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':name:setLocations']['$post']> },
      ) => parseResponse(client.v1beta1[':name:setLocations'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1NameSetLoggingKey() {
  return ['v1beta1', '/v1beta1/:name:setLogging', 'POST'] as const
}

export function usePostV1beta1NameSetLogging<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:setLogging']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':name:setLogging']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1NameSetLoggingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':name:setLogging']['$post']> },
      ) => parseResponse(client.v1beta1[':name:setLogging'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1NameSetMaintenancePolicyKey() {
  return ['v1beta1', '/v1beta1/:name:setMaintenancePolicy', 'POST'] as const
}

export function usePostV1beta1NameSetMaintenancePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:setMaintenancePolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':name:setMaintenancePolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1NameSetMaintenancePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1beta1)[':name:setMaintenancePolicy']['$post']>
        },
      ) => parseResponse(client.v1beta1[':name:setMaintenancePolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1NameSetManagementKey() {
  return ['v1beta1', '/v1beta1/:name:setManagement', 'POST'] as const
}

export function usePostV1beta1NameSetManagement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:setManagement']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':name:setManagement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1NameSetManagementKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':name:setManagement']['$post']> },
      ) => parseResponse(client.v1beta1[':name:setManagement'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1NameSetMasterAuthKey() {
  return ['v1beta1', '/v1beta1/:name:setMasterAuth', 'POST'] as const
}

export function usePostV1beta1NameSetMasterAuth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:setMasterAuth']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':name:setMasterAuth']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1NameSetMasterAuthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':name:setMasterAuth']['$post']> },
      ) => parseResponse(client.v1beta1[':name:setMasterAuth'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1NameSetMonitoringKey() {
  return ['v1beta1', '/v1beta1/:name:setMonitoring', 'POST'] as const
}

export function usePostV1beta1NameSetMonitoring<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:setMonitoring']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':name:setMonitoring']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1NameSetMonitoringKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':name:setMonitoring']['$post']> },
      ) => parseResponse(client.v1beta1[':name:setMonitoring'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1NameSetNetworkPolicyKey() {
  return ['v1beta1', '/v1beta1/:name:setNetworkPolicy', 'POST'] as const
}

export function usePostV1beta1NameSetNetworkPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:setNetworkPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':name:setNetworkPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1NameSetNetworkPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1beta1)[':name:setNetworkPolicy']['$post']> },
      ) => parseResponse(client.v1beta1[':name:setNetworkPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1NameSetResourceLabelsKey() {
  return ['v1beta1', '/v1beta1/:name:setResourceLabels', 'POST'] as const
}

export function usePostV1beta1NameSetResourceLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:setResourceLabels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':name:setResourceLabels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1NameSetResourceLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1beta1)[':name:setResourceLabels']['$post']> },
      ) => parseResponse(client.v1beta1[':name:setResourceLabels'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1NameSetSizeKey() {
  return ['v1beta1', '/v1beta1/:name:setSize', 'POST'] as const
}

export function usePostV1beta1NameSetSize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name:setSize']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':name:setSize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1NameSetSizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':name:setSize']['$post']> },
      ) => parseResponse(client.v1beta1[':name:setSize'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1NameStartIpRotationKey() {
  return ['v1beta1', '/v1beta1/:name:startIpRotation', 'POST'] as const
}

export function usePostV1beta1NameStartIpRotation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:startIpRotation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':name:startIpRotation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1NameStartIpRotationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1beta1)[':name:startIpRotation']['$post']> },
      ) => parseResponse(client.v1beta1[':name:startIpRotation'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1beta1NameUpdateMasterKey() {
  return ['v1beta1', '/v1beta1/:name:updateMaster', 'POST'] as const
}

export function usePostV1beta1NameUpdateMaster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:updateMaster']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':name:updateMaster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1NameUpdateMasterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':name:updateMaster']['$post']> },
      ) => parseResponse(client.v1beta1[':name:updateMaster'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta1ParentWellKnownOpenidConfigurationKey(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['.well-known']['openid-configuration']['$get']
  >,
) {
  return ['v1beta1', '/v1beta1/:parent/.well-known/openid-configuration', args] as const
}

export function useGetV1beta1ParentWellKnownOpenidConfiguration<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['.well-known']['openid-configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta1)[':parent']['.well-known']['openid-configuration']['$get']
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
        ? getGetV1beta1ParentWellKnownOpenidConfigurationKey(args)
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
                (typeof client.v1beta1)[':parent']['.well-known']['openid-configuration']['$get']
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
          client.v1beta1[':parent']['.well-known']['openid-configuration'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1ParentWellKnownOpenidConfiguration<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['.well-known']['openid-configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta1)[':parent']['.well-known']['openid-configuration']['$get']
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
        ? getGetV1beta1ParentWellKnownOpenidConfigurationKey(args)
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
                (typeof client.v1beta1)[':parent']['.well-known']['openid-configuration']['$get']
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
          client.v1beta1[':parent']['.well-known']['openid-configuration'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1ParentAggregatedUsableSubnetworksKey(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['aggregated']['usableSubnetworks']['$get']
  >,
) {
  return ['v1beta1', '/v1beta1/:parent/aggregated/usableSubnetworks', args] as const
}

export function useGetV1beta1ParentAggregatedUsableSubnetworks<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['aggregated']['usableSubnetworks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta1)[':parent']['aggregated']['usableSubnetworks']['$get']
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
        ? getGetV1beta1ParentAggregatedUsableSubnetworksKey(args)
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
                (typeof client.v1beta1)[':parent']['aggregated']['usableSubnetworks']['$get']
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
          client.v1beta1[':parent'].aggregated.usableSubnetworks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1ParentAggregatedUsableSubnetworks<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1beta1)[':parent']['aggregated']['usableSubnetworks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1beta1)[':parent']['aggregated']['usableSubnetworks']['$get']
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
        ? getGetV1beta1ParentAggregatedUsableSubnetworksKey(args)
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
                (typeof client.v1beta1)[':parent']['aggregated']['usableSubnetworks']['$get']
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
          client.v1beta1[':parent'].aggregated.usableSubnetworks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1ParentClustersKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['clusters']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/clusters', args] as const
}

export function useGetV1beta1ParentClusters<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['clusters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['clusters']['$get']>>
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
        ? getGetV1beta1ParentClustersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['clusters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':parent'].clusters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1ParentClusters<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['clusters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['clusters']['$get']>>
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
        ? getGetV1beta1ParentClustersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['clusters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':parent'].clusters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1beta1ParentClustersKey() {
  return ['v1beta1', '/v1beta1/:parent/clusters', 'POST'] as const
}

export function usePostV1beta1ParentClusters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['clusters']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':parent']['clusters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1ParentClustersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1beta1)[':parent']['clusters']['$post']> },
      ) => parseResponse(client.v1beta1[':parent'].clusters.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta1ParentJwksKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['jwks']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/jwks', args] as const
}

export function useGetV1beta1ParentJwks<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['jwks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['jwks']['$get']>>
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
        ? getGetV1beta1ParentJwksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['jwks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':parent'].jwks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1ParentJwks<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['jwks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['jwks']['$get']>>
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
        ? getGetV1beta1ParentJwksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['jwks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':parent'].jwks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1ParentLocationsKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['locations']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/locations', args] as const
}

export function useGetV1beta1ParentLocations<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['locations']['$get']>>
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
        ? getGetV1beta1ParentLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':parent'].locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1ParentLocations<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['locations']['$get']>>
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
        ? getGetV1beta1ParentLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':parent'].locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1beta1ParentNodePoolsKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['nodePools']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/nodePools', args] as const
}

export function useGetV1beta1ParentNodePools<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['nodePools']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['nodePools']['$get']>>
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
        ? getGetV1beta1ParentNodePoolsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['nodePools']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':parent'].nodePools.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1ParentNodePools<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['nodePools']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['nodePools']['$get']>>
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
        ? getGetV1beta1ParentNodePoolsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['nodePools']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':parent'].nodePools.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1beta1ParentNodePoolsKey() {
  return ['v1beta1', '/v1beta1/:parent/nodePools', 'POST'] as const
}

export function usePostV1beta1ParentNodePools<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['nodePools']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta1)[':parent']['nodePools']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1beta1ParentNodePoolsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1beta1)[':parent']['nodePools']['$post']> },
      ) => parseResponse(client.v1beta1[':parent'].nodePools.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1beta1ParentOperationsKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['operations']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/operations', args] as const
}

export function useGetV1beta1ParentOperations<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['operations']['$get']>>
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
        ? getGetV1beta1ParentOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['operations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':parent'].operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1beta1ParentOperations<TError = unknown>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['operations']['$get']>>
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
        ? getGetV1beta1ParentOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1beta1)[':parent']['operations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1beta1[':parent'].operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
