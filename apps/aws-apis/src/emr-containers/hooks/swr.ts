import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getJobtemplatesKey() {
  return ['jobtemplates'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getVirtualclustersKey() {
  return ['virtualclusters'] as const
}

export function getGetVirtualclustersVirtualClusterIdJobrunsJobRunIdKey(
  args: InferRequestType<
    (typeof client.virtualclusters)[':virtualClusterId']['jobruns'][':jobRunId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'virtualclusters',
    '/virtualclusters/:virtualClusterId/jobruns/:jobRunId',
    keyArgs,
  ] as const
}

export function useGetVirtualclustersVirtualClusterIdJobrunsJobRunId<TError = unknown>(
  args: InferRequestType<
    (typeof client.virtualclusters)[':virtualClusterId']['jobruns'][':jobRunId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.virtualclusters)[':virtualClusterId']['jobruns'][':jobRunId']['$get']
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
        ? getGetVirtualclustersVirtualClusterIdJobrunsJobRunIdKey(args)
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
                (typeof client.virtualclusters)[':virtualClusterId']['jobruns'][':jobRunId']['$get']
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
          client.virtualclusters[':virtualClusterId'].jobruns[':jobRunId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVirtualclustersVirtualClusterIdJobrunsJobRunId<TError = unknown>(
  args: InferRequestType<
    (typeof client.virtualclusters)[':virtualClusterId']['jobruns'][':jobRunId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.virtualclusters)[':virtualClusterId']['jobruns'][':jobRunId']['$get']
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
        ? getGetVirtualclustersVirtualClusterIdJobrunsJobRunIdKey(args)
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
                (typeof client.virtualclusters)[':virtualClusterId']['jobruns'][':jobRunId']['$get']
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
          client.virtualclusters[':virtualClusterId'].jobruns[':jobRunId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteVirtualclustersVirtualClusterIdJobrunsJobRunIdKey() {
  return [
    'virtualclusters',
    '/virtualclusters/:virtualClusterId/jobruns/:jobRunId',
    'DELETE',
  ] as const
}

export function useDeleteVirtualclustersVirtualClusterIdJobrunsJobRunId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.virtualclusters)[':virtualClusterId']['jobruns'][':jobRunId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.virtualclusters)[':virtualClusterId']['jobruns'][':jobRunId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVirtualclustersVirtualClusterIdJobrunsJobRunIdKey()
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
            (typeof client.virtualclusters)[':virtualClusterId']['jobruns'][':jobRunId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.virtualclusters[':virtualClusterId'].jobruns[':jobRunId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetJobtemplatesKey(args: InferRequestType<typeof client.jobtemplates.$get>) {
  const { header: _, ...keyArgs } = args
  return ['jobtemplates', '/jobtemplates', keyArgs] as const
}

export function useGetJobtemplates<TError = unknown>(
  args: InferRequestType<typeof client.jobtemplates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobtemplates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobtemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobtemplates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobtemplates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobtemplates<TError = unknown>(
  args: InferRequestType<typeof client.jobtemplates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobtemplates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJobtemplatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobtemplates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobtemplates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostJobtemplatesKey() {
  return ['jobtemplates', '/jobtemplates', 'POST'] as const
}

export function usePostJobtemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobtemplates.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.jobtemplates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostJobtemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.jobtemplates.$post> }) =>
        parseResponse(client.jobtemplates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVirtualclustersVirtualClusterIdEndpointsKey(
  args: InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['endpoints']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['virtualclusters', '/virtualclusters/:virtualClusterId/endpoints', keyArgs] as const
}

export function useGetVirtualclustersVirtualClusterIdEndpoints<TError = unknown>(
  args: InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['endpoints']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['endpoints']['$get']>
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
        ? getGetVirtualclustersVirtualClusterIdEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['endpoints']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.virtualclusters[':virtualClusterId'].endpoints.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVirtualclustersVirtualClusterIdEndpoints<TError = unknown>(
  args: InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['endpoints']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['endpoints']['$get']>
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
        ? getGetVirtualclustersVirtualClusterIdEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['endpoints']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.virtualclusters[':virtualClusterId'].endpoints.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVirtualclustersVirtualClusterIdEndpointsKey() {
  return ['virtualclusters', '/virtualclusters/:virtualClusterId/endpoints', 'POST'] as const
}

export function usePostVirtualclustersVirtualClusterIdEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['endpoints']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['endpoints']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVirtualclustersVirtualClusterIdEndpointsKey()
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
            (typeof client.virtualclusters)[':virtualClusterId']['endpoints']['$post']
          >
        },
      ) =>
        parseResponse(
          client.virtualclusters[':virtualClusterId'].endpoints.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVirtualclustersKey(
  args: InferRequestType<typeof client.virtualclusters.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['virtualclusters', '/virtualclusters', keyArgs] as const
}

export function useGetVirtualclusters<TError = unknown>(
  args: InferRequestType<typeof client.virtualclusters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.virtualclusters.$get>>>>
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
        ? getGetVirtualclustersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.virtualclusters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.virtualclusters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVirtualclusters<TError = unknown>(
  args: InferRequestType<typeof client.virtualclusters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.virtualclusters.$get>>>>
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
        ? getGetVirtualclustersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.virtualclusters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.virtualclusters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVirtualclustersKey() {
  return ['virtualclusters', '/virtualclusters', 'POST'] as const
}

export function usePostVirtualclusters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.virtualclusters.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.virtualclusters.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVirtualclustersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.virtualclusters.$post> }) =>
        parseResponse(client.virtualclusters.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetJobtemplatesTemplateIdKey(
  args: InferRequestType<(typeof client.jobtemplates)[':templateId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['jobtemplates', '/jobtemplates/:templateId', keyArgs] as const
}

export function useGetJobtemplatesTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.jobtemplates)[':templateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jobtemplates)[':templateId']['$get']>>
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
        ? getGetJobtemplatesTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jobtemplates)[':templateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobtemplates[':templateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetJobtemplatesTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.jobtemplates)[':templateId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jobtemplates)[':templateId']['$get']>>
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
        ? getGetJobtemplatesTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.jobtemplates)[':templateId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.jobtemplates[':templateId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteJobtemplatesTemplateIdKey() {
  return ['jobtemplates', '/jobtemplates/:templateId', 'DELETE'] as const
}

export function useDeleteJobtemplatesTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.jobtemplates)[':templateId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.jobtemplates)[':templateId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteJobtemplatesTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.jobtemplates)[':templateId']['$delete']> },
      ) => parseResponse(client.jobtemplates[':templateId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVirtualclustersVirtualClusterIdEndpointsEndpointIdKey(
  args: InferRequestType<
    (typeof client.virtualclusters)[':virtualClusterId']['endpoints'][':endpointId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'virtualclusters',
    '/virtualclusters/:virtualClusterId/endpoints/:endpointId',
    keyArgs,
  ] as const
}

export function useGetVirtualclustersVirtualClusterIdEndpointsEndpointId<TError = unknown>(
  args: InferRequestType<
    (typeof client.virtualclusters)[':virtualClusterId']['endpoints'][':endpointId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.virtualclusters)[':virtualClusterId']['endpoints'][':endpointId']['$get']
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
        ? getGetVirtualclustersVirtualClusterIdEndpointsEndpointIdKey(args)
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
                (typeof client.virtualclusters)[':virtualClusterId']['endpoints'][':endpointId']['$get']
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
          client.virtualclusters[':virtualClusterId'].endpoints[':endpointId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVirtualclustersVirtualClusterIdEndpointsEndpointId<TError = unknown>(
  args: InferRequestType<
    (typeof client.virtualclusters)[':virtualClusterId']['endpoints'][':endpointId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.virtualclusters)[':virtualClusterId']['endpoints'][':endpointId']['$get']
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
        ? getGetVirtualclustersVirtualClusterIdEndpointsEndpointIdKey(args)
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
                (typeof client.virtualclusters)[':virtualClusterId']['endpoints'][':endpointId']['$get']
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
          client.virtualclusters[':virtualClusterId'].endpoints[':endpointId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteVirtualclustersVirtualClusterIdEndpointsEndpointIdKey() {
  return [
    'virtualclusters',
    '/virtualclusters/:virtualClusterId/endpoints/:endpointId',
    'DELETE',
  ] as const
}

export function useDeleteVirtualclustersVirtualClusterIdEndpointsEndpointId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.virtualclusters)[':virtualClusterId']['endpoints'][':endpointId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.virtualclusters)[':virtualClusterId']['endpoints'][':endpointId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVirtualclustersVirtualClusterIdEndpointsEndpointIdKey()
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
            (typeof client.virtualclusters)[':virtualClusterId']['endpoints'][':endpointId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.virtualclusters[':virtualClusterId'].endpoints[':endpointId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetVirtualclustersVirtualClusterIdKey(
  args: InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['virtualclusters', '/virtualclusters/:virtualClusterId', keyArgs] as const
}

export function useGetVirtualclustersVirtualClusterId<TError = unknown>(
  args: InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['$get']>>
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
        ? getGetVirtualclustersVirtualClusterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.virtualclusters[':virtualClusterId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVirtualclustersVirtualClusterId<TError = unknown>(
  args: InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['$get']>>
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
        ? getGetVirtualclustersVirtualClusterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.virtualclusters[':virtualClusterId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteVirtualclustersVirtualClusterIdKey() {
  return ['virtualclusters', '/virtualclusters/:virtualClusterId', 'DELETE'] as const
}

export function useDeleteVirtualclustersVirtualClusterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteVirtualclustersVirtualClusterIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['$delete']>
        },
      ) => parseResponse(client.virtualclusters[':virtualClusterId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVirtualclustersVirtualClusterIdJobrunsKey(
  args: InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['virtualclusters', '/virtualclusters/:virtualClusterId/jobruns', keyArgs] as const
}

export function useGetVirtualclustersVirtualClusterIdJobruns<TError = unknown>(
  args: InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$get']>
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
        ? getGetVirtualclustersVirtualClusterIdJobrunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.virtualclusters[':virtualClusterId'].jobruns.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVirtualclustersVirtualClusterIdJobruns<TError = unknown>(
  args: InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$get']>
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
        ? getGetVirtualclustersVirtualClusterIdJobrunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.virtualclusters[':virtualClusterId'].jobruns.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostVirtualclustersVirtualClusterIdJobrunsKey() {
  return ['virtualclusters', '/virtualclusters/:virtualClusterId/jobruns', 'POST'] as const
}

export function usePostVirtualclustersVirtualClusterIdJobruns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVirtualclustersVirtualClusterIdJobrunsKey()
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
            (typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$post']
          >
        },
      ) =>
        parseResponse(
          client.virtualclusters[':virtualClusterId'].jobruns.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn']['$post']> },
      ) => parseResponse(client.tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':resourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
