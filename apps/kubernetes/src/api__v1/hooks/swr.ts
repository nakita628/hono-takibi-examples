import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiV1IndexKey() {
  return ['api', '/api/v1/'] as const
}

export function useGetApiV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1IndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1IndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ComponentstatusesKey(
  args: InferRequestType<typeof client.api.v1.componentstatuses.$get>,
) {
  return ['api', '/api/v1/componentstatuses', args] as const
}

export function useGetApiV1Componentstatuses<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.componentstatuses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.componentstatuses.$get>>>
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
        ? getGetApiV1ComponentstatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.componentstatuses.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.componentstatuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Componentstatuses<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.componentstatuses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.componentstatuses.$get>>>
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
        ? getGetApiV1ComponentstatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.componentstatuses.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.componentstatuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ComponentstatusesNameKey(
  args: InferRequestType<(typeof client.api.v1.componentstatuses)[':name']['$get']>,
) {
  return ['api', '/api/v1/componentstatuses/:name', args] as const
}

export function useGetApiV1ComponentstatusesName<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.componentstatuses)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.componentstatuses)[':name']['$get']>>
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
        ? getGetApiV1ComponentstatusesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.componentstatuses)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.componentstatuses[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ComponentstatusesName<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.componentstatuses)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.componentstatuses)[':name']['$get']>>
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
        ? getGetApiV1ComponentstatusesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.componentstatuses)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.componentstatuses[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ConfigmapsKey(
  args: InferRequestType<typeof client.api.v1.configmaps.$get>,
) {
  return ['api', '/api/v1/configmaps', args] as const
}

export function useGetApiV1Configmaps<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.configmaps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.configmaps.$get>>>>
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
        ? getGetApiV1ConfigmapsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.configmaps.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.configmaps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Configmaps<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.configmaps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.configmaps.$get>>>>
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
        ? getGetApiV1ConfigmapsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.configmaps.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.configmaps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1EndpointsKey(
  args: InferRequestType<typeof client.api.v1.endpoints.$get>,
) {
  return ['api', '/api/v1/endpoints', args] as const
}

export function useGetApiV1Endpoints<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.endpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.endpoints.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1EndpointsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.endpoints.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Endpoints<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.endpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.endpoints.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1EndpointsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.endpoints.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1EventsKey(args: InferRequestType<typeof client.api.v1.events.$get>) {
  return ['api', '/api/v1/events', args] as const
}

export function useGetApiV1Events<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1EventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Events<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1EventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1LimitrangesKey(
  args: InferRequestType<typeof client.api.v1.limitranges.$get>,
) {
  return ['api', '/api/v1/limitranges', args] as const
}

export function useGetApiV1Limitranges<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.limitranges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.limitranges.$get>>>>
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
        ? getGetApiV1LimitrangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.limitranges.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.limitranges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Limitranges<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.limitranges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.limitranges.$get>>>>
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
        ? getGetApiV1LimitrangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.limitranges.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.limitranges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1NamespacesKey(
  args: InferRequestType<typeof client.api.v1.namespaces.$get>,
) {
  return ['api', '/api/v1/namespaces', args] as const
}

export function useGetApiV1Namespaces<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.namespaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.namespaces.$get>>>>
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
        ? getGetApiV1NamespacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.namespaces.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.namespaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Namespaces<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.namespaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.namespaces.$get>>>>
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
        ? getGetApiV1NamespacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.namespaces.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.namespaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesKey() {
  return ['api', '/api/v1/namespaces', 'POST'] as const
}

export function usePostApiV1Namespaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.namespaces.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.namespaces.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.namespaces.$post> }) =>
        parseResponse(client.api.v1.namespaces.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceBindingsKey() {
  return ['api', '/api/v1/namespaces/:namespace/bindings', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceBindings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['bindings']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['bindings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceBindingsKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['bindings']['$post']
          >
        },
      ) => parseResponse(client.api.v1.namespaces[':namespace'].bindings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceConfigmapsKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/configmaps', args] as const
}

export function useGetApiV1NamespacesNamespaceConfigmaps<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$get']>
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
        ? getGetApiV1NamespacesNamespaceConfigmapsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.namespaces[':namespace'].configmaps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceConfigmaps<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$get']>
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
        ? getGetApiV1NamespacesNamespaceConfigmapsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.namespaces[':namespace'].configmaps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceConfigmapsKey() {
  return ['api', '/api/v1/namespaces/:namespace/configmaps', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceConfigmaps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceConfigmapsKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['configmaps']['$post']
          >
        },
      ) =>
        parseResponse(client.api.v1.namespaces[':namespace'].configmaps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespaceConfigmapsKey() {
  return ['api', '/api/v1/namespaces/:namespace/configmaps', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespaceConfigmaps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespaceConfigmapsKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['configmaps']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].configmaps.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceConfigmapsNameKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/configmaps/:name', args] as const
}

export function useGetApiV1NamespacesNamespaceConfigmapsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$get']
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
        ? getGetApiV1NamespacesNamespaceConfigmapsNameKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$get']
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
          client.api.v1.namespaces[':namespace'].configmaps[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceConfigmapsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$get']
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
        ? getGetApiV1NamespacesNamespaceConfigmapsNameKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$get']
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
          client.api.v1.namespaces[':namespace'].configmaps[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NamespacesNamespaceConfigmapsNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/configmaps/:name', 'PUT'] as const
}

export function usePutApiV1NamespacesNamespaceConfigmapsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NamespacesNamespaceConfigmapsNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].configmaps[':name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespaceConfigmapsNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/configmaps/:name', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespaceConfigmapsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespaceConfigmapsNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].configmaps[':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NamespacesNamespaceConfigmapsNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/configmaps/:name', 'PATCH'] as const
}

export function usePatchApiV1NamespacesNamespaceConfigmapsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NamespacesNamespaceConfigmapsNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].configmaps[':name'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceEndpointsKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/endpoints', args] as const
}

export function useGetApiV1NamespacesNamespaceEndpoints<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$get']>
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
        ? getGetApiV1NamespacesNamespaceEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.namespaces[':namespace'].endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceEndpoints<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$get']>
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
        ? getGetApiV1NamespacesNamespaceEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.namespaces[':namespace'].endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceEndpointsKey() {
  return ['api', '/api/v1/namespaces/:namespace/endpoints', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceEndpointsKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['endpoints']['$post']
          >
        },
      ) =>
        parseResponse(client.api.v1.namespaces[':namespace'].endpoints.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespaceEndpointsKey() {
  return ['api', '/api/v1/namespaces/:namespace/endpoints', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespaceEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespaceEndpointsKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['endpoints']['$delete']
          >
        },
      ) =>
        parseResponse(client.api.v1.namespaces[':namespace'].endpoints.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceEndpointsNameKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/endpoints/:name', args] as const
}

export function useGetApiV1NamespacesNamespaceEndpointsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$get']
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
        ? getGetApiV1NamespacesNamespaceEndpointsNameKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$get']
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
          client.api.v1.namespaces[':namespace'].endpoints[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceEndpointsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$get']
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
        ? getGetApiV1NamespacesNamespaceEndpointsNameKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$get']
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
          client.api.v1.namespaces[':namespace'].endpoints[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NamespacesNamespaceEndpointsNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/endpoints/:name', 'PUT'] as const
}

export function usePutApiV1NamespacesNamespaceEndpointsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NamespacesNamespaceEndpointsNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].endpoints[':name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespaceEndpointsNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/endpoints/:name', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespaceEndpointsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespaceEndpointsNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].endpoints[':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NamespacesNamespaceEndpointsNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/endpoints/:name', 'PATCH'] as const
}

export function usePatchApiV1NamespacesNamespaceEndpointsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NamespacesNamespaceEndpointsNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].endpoints[':name'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceEventsKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/events', args] as const
}

export function useGetApiV1NamespacesNamespaceEvents<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['events']['$get']>>
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
        ? getGetApiV1NamespacesNamespaceEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.namespaces[':namespace'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceEvents<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['events']['$get']>>
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
        ? getGetApiV1NamespacesNamespaceEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.namespaces[':namespace'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceEventsKey() {
  return ['api', '/api/v1/namespaces/:namespace/events', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['events']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events']['$post']>
        },
      ) => parseResponse(client.api.v1.namespaces[':namespace'].events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespaceEventsKey() {
  return ['api', '/api/v1/namespaces/:namespace/events', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespaceEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['events']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespaceEventsKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['events']['$delete']
          >
        },
      ) => parseResponse(client.api.v1.namespaces[':namespace'].events.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceEventsNameKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/events/:name', args] as const
}

export function useGetApiV1NamespacesNamespaceEventsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$get']>
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
        ? getGetApiV1NamespacesNamespaceEventsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].events[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceEventsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$get']>
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
        ? getGetApiV1NamespacesNamespaceEventsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].events[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NamespacesNamespaceEventsNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/events/:name', 'PUT'] as const
}

export function usePutApiV1NamespacesNamespaceEventsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NamespacesNamespaceEventsNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].events[':name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespaceEventsNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/events/:name', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespaceEventsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespaceEventsNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].events[':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NamespacesNamespaceEventsNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/events/:name', 'PATCH'] as const
}

export function usePatchApiV1NamespacesNamespaceEventsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NamespacesNamespaceEventsNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].events[':name'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceLimitrangesKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/limitranges', args] as const
}

export function useGetApiV1NamespacesNamespaceLimitranges<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$get']>
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
        ? getGetApiV1NamespacesNamespaceLimitrangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.namespaces[':namespace'].limitranges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceLimitranges<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$get']>
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
        ? getGetApiV1NamespacesNamespaceLimitrangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.namespaces[':namespace'].limitranges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceLimitrangesKey() {
  return ['api', '/api/v1/namespaces/:namespace/limitranges', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceLimitranges<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceLimitrangesKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['limitranges']['$post']
          >
        },
      ) =>
        parseResponse(client.api.v1.namespaces[':namespace'].limitranges.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespaceLimitrangesKey() {
  return ['api', '/api/v1/namespaces/:namespace/limitranges', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespaceLimitranges<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespaceLimitrangesKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['limitranges']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].limitranges.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceLimitrangesNameKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/limitranges/:name', args] as const
}

export function useGetApiV1NamespacesNamespaceLimitrangesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$get']
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
        ? getGetApiV1NamespacesNamespaceLimitrangesNameKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$get']
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
          client.api.v1.namespaces[':namespace'].limitranges[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceLimitrangesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$get']
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
        ? getGetApiV1NamespacesNamespaceLimitrangesNameKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$get']
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
          client.api.v1.namespaces[':namespace'].limitranges[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NamespacesNamespaceLimitrangesNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/limitranges/:name', 'PUT'] as const
}

export function usePutApiV1NamespacesNamespaceLimitrangesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NamespacesNamespaceLimitrangesNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].limitranges[':name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespaceLimitrangesNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/limitranges/:name', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespaceLimitrangesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespaceLimitrangesNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].limitranges[':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NamespacesNamespaceLimitrangesNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/limitranges/:name', 'PATCH'] as const
}

export function usePatchApiV1NamespacesNamespaceLimitrangesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NamespacesNamespaceLimitrangesNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].limitranges[':name'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespacePersistentvolumeclaimsKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/persistentvolumeclaims', args] as const
}

export function useGetApiV1NamespacesNamespacePersistentvolumeclaims<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$get']
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
        ? getGetApiV1NamespacesNamespacePersistentvolumeclaimsKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$get']
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
          client.api.v1.namespaces[':namespace'].persistentvolumeclaims.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespacePersistentvolumeclaims<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$get']
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
        ? getGetApiV1NamespacesNamespacePersistentvolumeclaimsKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$get']
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
          client.api.v1.namespaces[':namespace'].persistentvolumeclaims.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespacePersistentvolumeclaimsKey() {
  return ['api', '/api/v1/namespaces/:namespace/persistentvolumeclaims', 'POST'] as const
}

export function usePostApiV1NamespacesNamespacePersistentvolumeclaims<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespacePersistentvolumeclaimsKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].persistentvolumeclaims.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespacePersistentvolumeclaimsKey() {
  return ['api', '/api/v1/namespaces/:namespace/persistentvolumeclaims', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespacePersistentvolumeclaims<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespacePersistentvolumeclaimsKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].persistentvolumeclaims.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespacePersistentvolumeclaimsNameKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/persistentvolumeclaims/:name', args] as const
}

export function useGetApiV1NamespacesNamespacePersistentvolumeclaimsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
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
        ? getGetApiV1NamespacesNamespacePersistentvolumeclaimsNameKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
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
          client.api.v1.namespaces[':namespace'].persistentvolumeclaims[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespacePersistentvolumeclaimsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
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
        ? getGetApiV1NamespacesNamespacePersistentvolumeclaimsNameKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
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
          client.api.v1.namespaces[':namespace'].persistentvolumeclaims[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NamespacesNamespacePersistentvolumeclaimsNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/persistentvolumeclaims/:name', 'PUT'] as const
}

export function usePutApiV1NamespacesNamespacePersistentvolumeclaimsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NamespacesNamespacePersistentvolumeclaimsNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].persistentvolumeclaims[':name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespacePersistentvolumeclaimsNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/persistentvolumeclaims/:name', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespacePersistentvolumeclaimsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespacePersistentvolumeclaimsNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].persistentvolumeclaims[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NamespacesNamespacePersistentvolumeclaimsNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/persistentvolumeclaims/:name', 'PATCH'] as const
}

export function usePatchApiV1NamespacesNamespacePersistentvolumeclaimsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NamespacesNamespacePersistentvolumeclaimsNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].persistentvolumeclaims[':name'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status', args] as const
}

export function useGetApiV1NamespacesNamespacePersistentvolumeclaimsNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$get']
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
        ? getGetApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$get']
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
          client.api.v1.namespaces[':namespace'].persistentvolumeclaims[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespacePersistentvolumeclaimsNameStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$get']
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
        ? getGetApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$get']
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
          client.api.v1.namespaces[':namespace'].persistentvolumeclaims[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status',
    'PUT',
  ] as const
}

export function usePutApiV1NamespacesNamespacePersistentvolumeclaimsNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].persistentvolumeclaims[':name'].status.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status',
    'PATCH',
  ] as const
}

export function usePatchApiV1NamespacesNamespacePersistentvolumeclaimsNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NamespacesNamespacePersistentvolumeclaimsNameStatusKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].persistentvolumeclaims[':name'].status.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespacePodsKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods', args] as const
}

export function useGetApiV1NamespacesNamespacePods<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$get']>>
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
        ? getGetApiV1NamespacesNamespacePodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.namespaces[':namespace'].pods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespacePods<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$get']>>
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
        ? getGetApiV1NamespacesNamespacePodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.namespaces[':namespace'].pods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespacePodsKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods', 'POST'] as const
}

export function usePostApiV1NamespacesNamespacePods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespacePodsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$post']>
        },
      ) => parseResponse(client.api.v1.namespaces[':namespace'].pods.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespacePodsKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespacePods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespacePodsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$delete']>
        },
      ) => parseResponse(client.api.v1.namespaces[':namespace'].pods.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespacePodsNameKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name', args] as const
}

export function useGetApiV1NamespacesNamespacePodsName<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$get']>
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
        ? getGetApiV1NamespacesNamespacePodsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespacePodsName<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$get']>
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
        ? getGetApiV1NamespacesNamespacePodsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NamespacesNamespacePodsNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name', 'PUT'] as const
}

export function usePutApiV1NamespacesNamespacePodsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NamespacesNamespacePodsNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespacePodsNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespacePodsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespacePodsNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NamespacesNamespacePodsNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name', 'PATCH'] as const
}

export function usePatchApiV1NamespacesNamespacePodsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NamespacesNamespacePodsNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespacePodsNameAttachKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['attach']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/attach', args] as const
}

export function useGetApiV1NamespacesNamespacePodsNameAttach<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['attach']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['attach']['$get']
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
        ? getGetApiV1NamespacesNamespacePodsNameAttachKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['attach']['$get']
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
          client.api.v1.namespaces[':namespace'].pods[':name'].attach.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespacePodsNameAttach<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['attach']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['attach']['$get']
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
        ? getGetApiV1NamespacesNamespacePodsNameAttachKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['attach']['$get']
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
          client.api.v1.namespaces[':namespace'].pods[':name'].attach.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespacePodsNameAttachKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/attach', 'POST'] as const
}

export function usePostApiV1NamespacesNamespacePodsNameAttach<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['attach']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['attach']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespacePodsNameAttachKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['attach']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].attach.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespacePodsNameBindingKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/binding', 'POST'] as const
}

export function usePostApiV1NamespacesNamespacePodsNameBinding<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['binding']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['binding']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespacePodsNameBindingKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['binding']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].binding.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespacePodsNameDynamicKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/dynamic', args] as const
}

export function useGetApiV1NamespacesNamespacePodsNameDynamic<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$get']
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
        ? getGetApiV1NamespacesNamespacePodsNameDynamicKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$get']
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
          client.api.v1.namespaces[':namespace'].pods[':name'].dynamic.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespacePodsNameDynamic<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$get']
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
        ? getGetApiV1NamespacesNamespacePodsNameDynamicKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$get']
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
          client.api.v1.namespaces[':namespace'].pods[':name'].dynamic.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NamespacesNamespacePodsNameDynamicKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/dynamic', 'PUT'] as const
}

export function usePutApiV1NamespacesNamespacePodsNameDynamic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NamespacesNamespacePodsNameDynamicKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].dynamic.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NamespacesNamespacePodsNameDynamicKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/dynamic', 'PATCH'] as const
}

export function usePatchApiV1NamespacesNamespacePodsNameDynamic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NamespacesNamespacePodsNameDynamicKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].dynamic.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespacePodsNameEphemeralcontainersKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/ephemeralcontainers', args] as const
}

export function useGetApiV1NamespacesNamespacePodsNameEphemeralcontainers<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$get']
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
        ? getGetApiV1NamespacesNamespacePodsNameEphemeralcontainersKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$get']
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
          client.api.v1.namespaces[':namespace'].pods[':name'].ephemeralcontainers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespacePodsNameEphemeralcontainers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$get']
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
        ? getGetApiV1NamespacesNamespacePodsNameEphemeralcontainersKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$get']
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
          client.api.v1.namespaces[':namespace'].pods[':name'].ephemeralcontainers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NamespacesNamespacePodsNameEphemeralcontainersKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/ephemeralcontainers', 'PUT'] as const
}

export function usePutApiV1NamespacesNamespacePodsNameEphemeralcontainers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NamespacesNamespacePodsNameEphemeralcontainersKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].ephemeralcontainers.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NamespacesNamespacePodsNameEphemeralcontainersKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/ephemeralcontainers', 'PATCH'] as const
}

export function usePatchApiV1NamespacesNamespacePodsNameEphemeralcontainers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NamespacesNamespacePodsNameEphemeralcontainersKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].ephemeralcontainers.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespacePodsNameEvictionKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/eviction', 'POST'] as const
}

export function usePostApiV1NamespacesNamespacePodsNameEviction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['eviction']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['eviction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespacePodsNameEvictionKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['eviction']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].eviction.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespacePodsNameExecKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['exec']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/exec', args] as const
}

export function useGetApiV1NamespacesNamespacePodsNameExec<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['exec']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['exec']['$get']
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
        ? getGetApiV1NamespacesNamespacePodsNameExecKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['exec']['$get']
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
          client.api.v1.namespaces[':namespace'].pods[':name'].exec.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespacePodsNameExec<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['exec']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['exec']['$get']
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
        ? getGetApiV1NamespacesNamespacePodsNameExecKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['exec']['$get']
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
          client.api.v1.namespaces[':namespace'].pods[':name'].exec.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespacePodsNameExecKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/exec', 'POST'] as const
}

export function usePostApiV1NamespacesNamespacePodsNameExec<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['exec']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['exec']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespacePodsNameExecKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['exec']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].exec.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespacePodsNameLogKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['log']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/log', args] as const
}

export function useGetApiV1NamespacesNamespacePodsNameLog<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['log']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['log']['$get']
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
        ? getGetApiV1NamespacesNamespacePodsNameLogKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['log']['$get']
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
          client.api.v1.namespaces[':namespace'].pods[':name'].log.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespacePodsNameLog<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['log']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['log']['$get']
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
        ? getGetApiV1NamespacesNamespacePodsNameLogKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['log']['$get']
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
          client.api.v1.namespaces[':namespace'].pods[':name'].log.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespacePodsNamePortforwardKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['portforward']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/portforward', args] as const
}

export function useGetApiV1NamespacesNamespacePodsNamePortforward<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['portforward']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['portforward']['$get']
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
        ? getGetApiV1NamespacesNamespacePodsNamePortforwardKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['portforward']['$get']
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
          client.api.v1.namespaces[':namespace'].pods[':name'].portforward.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespacePodsNamePortforward<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['portforward']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['portforward']['$get']
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
        ? getGetApiV1NamespacesNamespacePodsNamePortforwardKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['portforward']['$get']
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
          client.api.v1.namespaces[':namespace'].pods[':name'].portforward.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespacePodsNamePortforwardKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/portforward', 'POST'] as const
}

export function usePostApiV1NamespacesNamespacePodsNamePortforward<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['portforward']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['portforward']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespacePodsNamePortforwardKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['portforward']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].portforward.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespacePodsNameProxyKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy', args] as const
}

export function useGetApiV1NamespacesNamespacePodsNameProxy<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$get']
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
        ? getGetApiV1NamespacesNamespacePodsNameProxyKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$get']
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
          client.api.v1.namespaces[':namespace'].pods[':name'].proxy.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespacePodsNameProxy<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$get']
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
        ? getGetApiV1NamespacesNamespacePodsNameProxyKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$get']
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
          client.api.v1.namespaces[':namespace'].pods[':name'].proxy.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NamespacesNamespacePodsNameProxyKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy', 'PUT'] as const
}

export function usePutApiV1NamespacesNamespacePodsNameProxy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NamespacesNamespacePodsNameProxyKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].proxy.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespacePodsNameProxyKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy', 'POST'] as const
}

export function usePostApiV1NamespacesNamespacePodsNameProxy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespacePodsNameProxyKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].proxy.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespacePodsNameProxyKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespacePodsNameProxy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespacePodsNameProxyKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].proxy.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getOptionsApiV1NamespacesNamespacePodsNameProxyKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy', 'OPTIONS'] as const
}

export function useOptionsApiV1NamespacesNamespacePodsNameProxy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$options']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$options']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsApiV1NamespacesNamespacePodsNameProxyKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$options']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].proxy.$options(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getHeadApiV1NamespacesNamespacePodsNameProxyKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy', 'HEAD'] as const
}

export function useHeadApiV1NamespacesNamespacePodsNameProxy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$head']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$head']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadApiV1NamespacesNamespacePodsNameProxyKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$head']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].proxy.$head(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NamespacesNamespacePodsNameProxyKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy', 'PATCH'] as const
}

export function usePatchApiV1NamespacesNamespacePodsNameProxy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NamespacesNamespacePodsNameProxyKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].proxy.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespacePodsNameProxyPathKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy/:path', args] as const
}

export function useGetApiV1NamespacesNamespacePodsNameProxyPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$get']
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
        ? getGetApiV1NamespacesNamespacePodsNameProxyPathKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$get']
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
          client.api.v1.namespaces[':namespace'].pods[':name'].proxy[':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespacePodsNameProxyPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$get']
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
        ? getGetApiV1NamespacesNamespacePodsNameProxyPathKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$get']
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
          client.api.v1.namespaces[':namespace'].pods[':name'].proxy[':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NamespacesNamespacePodsNameProxyPathKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy/:path', 'PUT'] as const
}

export function usePutApiV1NamespacesNamespacePodsNameProxyPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NamespacesNamespacePodsNameProxyPathKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].proxy[':path'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespacePodsNameProxyPathKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy/:path', 'POST'] as const
}

export function usePostApiV1NamespacesNamespacePodsNameProxyPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespacePodsNameProxyPathKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].proxy[':path'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespacePodsNameProxyPathKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy/:path', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespacePodsNameProxyPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespacePodsNameProxyPathKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].proxy[':path'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getOptionsApiV1NamespacesNamespacePodsNameProxyPathKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy/:path', 'OPTIONS'] as const
}

export function useOptionsApiV1NamespacesNamespacePodsNameProxyPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$options']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$options']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsApiV1NamespacesNamespacePodsNameProxyPathKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$options']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].proxy[':path'].$options(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getHeadApiV1NamespacesNamespacePodsNameProxyPathKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy/:path', 'HEAD'] as const
}

export function useHeadApiV1NamespacesNamespacePodsNameProxyPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$head']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$head']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadApiV1NamespacesNamespacePodsNameProxyPathKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$head']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].proxy[':path'].$head(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NamespacesNamespacePodsNameProxyPathKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/proxy/:path', 'PATCH'] as const
}

export function usePatchApiV1NamespacesNamespacePodsNameProxyPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NamespacesNamespacePodsNameProxyPathKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].proxy[':path'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespacePodsNameResizeKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/resize', args] as const
}

export function useGetApiV1NamespacesNamespacePodsNameResize<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$get']
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
        ? getGetApiV1NamespacesNamespacePodsNameResizeKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$get']
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
          client.api.v1.namespaces[':namespace'].pods[':name'].resize.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespacePodsNameResize<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$get']
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
        ? getGetApiV1NamespacesNamespacePodsNameResizeKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$get']
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
          client.api.v1.namespaces[':namespace'].pods[':name'].resize.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NamespacesNamespacePodsNameResizeKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/resize', 'PUT'] as const
}

export function usePutApiV1NamespacesNamespacePodsNameResize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NamespacesNamespacePodsNameResizeKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].resize.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NamespacesNamespacePodsNameResizeKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/resize', 'PATCH'] as const
}

export function usePatchApiV1NamespacesNamespacePodsNameResize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NamespacesNamespacePodsNameResizeKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].resize.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespacePodsNameStatusKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/status', args] as const
}

export function useGetApiV1NamespacesNamespacePodsNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$get']
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
        ? getGetApiV1NamespacesNamespacePodsNameStatusKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$get']
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
          client.api.v1.namespaces[':namespace'].pods[':name'].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespacePodsNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$get']
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
        ? getGetApiV1NamespacesNamespacePodsNameStatusKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$get']
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
          client.api.v1.namespaces[':namespace'].pods[':name'].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NamespacesNamespacePodsNameStatusKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/status', 'PUT'] as const
}

export function usePutApiV1NamespacesNamespacePodsNameStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NamespacesNamespacePodsNameStatusKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].status.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NamespacesNamespacePodsNameStatusKey() {
  return ['api', '/api/v1/namespaces/:namespace/pods/:name/status', 'PATCH'] as const
}

export function usePatchApiV1NamespacesNamespacePodsNameStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NamespacesNamespacePodsNameStatusKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].pods[':name'].status.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespacePodtemplatesKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/podtemplates', args] as const
}

export function useGetApiV1NamespacesNamespacePodtemplates<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$get']>
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
        ? getGetApiV1NamespacesNamespacePodtemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].podtemplates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespacePodtemplates<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$get']>
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
        ? getGetApiV1NamespacesNamespacePodtemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].podtemplates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespacePodtemplatesKey() {
  return ['api', '/api/v1/namespaces/:namespace/podtemplates', 'POST'] as const
}

export function usePostApiV1NamespacesNamespacePodtemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespacePodtemplatesKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].podtemplates.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespacePodtemplatesKey() {
  return ['api', '/api/v1/namespaces/:namespace/podtemplates', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespacePodtemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespacePodtemplatesKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].podtemplates.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespacePodtemplatesNameKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/podtemplates/:name', args] as const
}

export function useGetApiV1NamespacesNamespacePodtemplatesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$get']
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
        ? getGetApiV1NamespacesNamespacePodtemplatesNameKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$get']
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
          client.api.v1.namespaces[':namespace'].podtemplates[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespacePodtemplatesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$get']
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
        ? getGetApiV1NamespacesNamespacePodtemplatesNameKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$get']
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
          client.api.v1.namespaces[':namespace'].podtemplates[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NamespacesNamespacePodtemplatesNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/podtemplates/:name', 'PUT'] as const
}

export function usePutApiV1NamespacesNamespacePodtemplatesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NamespacesNamespacePodtemplatesNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].podtemplates[':name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespacePodtemplatesNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/podtemplates/:name', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespacePodtemplatesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespacePodtemplatesNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].podtemplates[':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NamespacesNamespacePodtemplatesNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/podtemplates/:name', 'PATCH'] as const
}

export function usePatchApiV1NamespacesNamespacePodtemplatesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NamespacesNamespacePodtemplatesNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].podtemplates[':name'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceReplicationcontrollersKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/replicationcontrollers', args] as const
}

export function useGetApiV1NamespacesNamespaceReplicationcontrollers<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$get']
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
        ? getGetApiV1NamespacesNamespaceReplicationcontrollersKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$get']
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
          client.api.v1.namespaces[':namespace'].replicationcontrollers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceReplicationcontrollers<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$get']
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
        ? getGetApiV1NamespacesNamespaceReplicationcontrollersKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$get']
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
          client.api.v1.namespaces[':namespace'].replicationcontrollers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceReplicationcontrollersKey() {
  return ['api', '/api/v1/namespaces/:namespace/replicationcontrollers', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceReplicationcontrollers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceReplicationcontrollersKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].replicationcontrollers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespaceReplicationcontrollersKey() {
  return ['api', '/api/v1/namespaces/:namespace/replicationcontrollers', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespaceReplicationcontrollers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespaceReplicationcontrollersKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].replicationcontrollers.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceReplicationcontrollersNameKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/replicationcontrollers/:name', args] as const
}

export function useGetApiV1NamespacesNamespaceReplicationcontrollersName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
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
        ? getGetApiV1NamespacesNamespaceReplicationcontrollersNameKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
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
          client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceReplicationcontrollersName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
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
        ? getGetApiV1NamespacesNamespaceReplicationcontrollersNameKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
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
          client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NamespacesNamespaceReplicationcontrollersNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/replicationcontrollers/:name', 'PUT'] as const
}

export function usePutApiV1NamespacesNamespaceReplicationcontrollersName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NamespacesNamespaceReplicationcontrollersNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespaceReplicationcontrollersNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/replicationcontrollers/:name', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespaceReplicationcontrollersName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespaceReplicationcontrollersNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NamespacesNamespaceReplicationcontrollersNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/replicationcontrollers/:name', 'PATCH'] as const
}

export function usePatchApiV1NamespacesNamespaceReplicationcontrollersName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NamespacesNamespaceReplicationcontrollersNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceReplicationcontrollersNameScaleKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/replicationcontrollers/:name/scale', args] as const
}

export function useGetApiV1NamespacesNamespaceReplicationcontrollersNameScale<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$get']
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
        ? getGetApiV1NamespacesNamespaceReplicationcontrollersNameScaleKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$get']
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
          client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].scale.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceReplicationcontrollersNameScale<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$get']
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
        ? getGetApiV1NamespacesNamespaceReplicationcontrollersNameScaleKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$get']
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
          client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].scale.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NamespacesNamespaceReplicationcontrollersNameScaleKey() {
  return ['api', '/api/v1/namespaces/:namespace/replicationcontrollers/:name/scale', 'PUT'] as const
}

export function usePutApiV1NamespacesNamespaceReplicationcontrollersNameScale<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NamespacesNamespaceReplicationcontrollersNameScaleKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].scale.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NamespacesNamespaceReplicationcontrollersNameScaleKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/replicationcontrollers/:name/scale',
    'PATCH',
  ] as const
}

export function usePatchApiV1NamespacesNamespaceReplicationcontrollersNameScale<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NamespacesNamespaceReplicationcontrollersNameScaleKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].scale.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceReplicationcontrollersNameStatusKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/replicationcontrollers/:name/status', args] as const
}

export function useGetApiV1NamespacesNamespaceReplicationcontrollersNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$get']
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
        ? getGetApiV1NamespacesNamespaceReplicationcontrollersNameStatusKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$get']
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
          client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceReplicationcontrollersNameStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$get']
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
        ? getGetApiV1NamespacesNamespaceReplicationcontrollersNameStatusKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$get']
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
          client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NamespacesNamespaceReplicationcontrollersNameStatusKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/replicationcontrollers/:name/status',
    'PUT',
  ] as const
}

export function usePutApiV1NamespacesNamespaceReplicationcontrollersNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NamespacesNamespaceReplicationcontrollersNameStatusKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].status.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NamespacesNamespaceReplicationcontrollersNameStatusKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/replicationcontrollers/:name/status',
    'PATCH',
  ] as const
}

export function usePatchApiV1NamespacesNamespaceReplicationcontrollersNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NamespacesNamespaceReplicationcontrollersNameStatusKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].status.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceResourcequotasKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/resourcequotas', args] as const
}

export function useGetApiV1NamespacesNamespaceResourcequotas<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$get']>
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
        ? getGetApiV1NamespacesNamespaceResourcequotasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].resourcequotas.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceResourcequotas<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$get']>
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
        ? getGetApiV1NamespacesNamespaceResourcequotasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].resourcequotas.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceResourcequotasKey() {
  return ['api', '/api/v1/namespaces/:namespace/resourcequotas', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceResourcequotas<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceResourcequotasKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].resourcequotas.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespaceResourcequotasKey() {
  return ['api', '/api/v1/namespaces/:namespace/resourcequotas', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespaceResourcequotas<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespaceResourcequotasKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].resourcequotas.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceResourcequotasNameKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/resourcequotas/:name', args] as const
}

export function useGetApiV1NamespacesNamespaceResourcequotasName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$get']
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
        ? getGetApiV1NamespacesNamespaceResourcequotasNameKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$get']
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
          client.api.v1.namespaces[':namespace'].resourcequotas[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceResourcequotasName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$get']
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
        ? getGetApiV1NamespacesNamespaceResourcequotasNameKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$get']
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
          client.api.v1.namespaces[':namespace'].resourcequotas[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NamespacesNamespaceResourcequotasNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/resourcequotas/:name', 'PUT'] as const
}

export function usePutApiV1NamespacesNamespaceResourcequotasName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NamespacesNamespaceResourcequotasNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].resourcequotas[':name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespaceResourcequotasNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/resourcequotas/:name', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespaceResourcequotasName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespaceResourcequotasNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].resourcequotas[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NamespacesNamespaceResourcequotasNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/resourcequotas/:name', 'PATCH'] as const
}

export function usePatchApiV1NamespacesNamespaceResourcequotasName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NamespacesNamespaceResourcequotasNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].resourcequotas[':name'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceResourcequotasNameStatusKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/resourcequotas/:name/status', args] as const
}

export function useGetApiV1NamespacesNamespaceResourcequotasNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$get']
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
        ? getGetApiV1NamespacesNamespaceResourcequotasNameStatusKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$get']
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
          client.api.v1.namespaces[':namespace'].resourcequotas[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceResourcequotasNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$get']
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
        ? getGetApiV1NamespacesNamespaceResourcequotasNameStatusKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$get']
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
          client.api.v1.namespaces[':namespace'].resourcequotas[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NamespacesNamespaceResourcequotasNameStatusKey() {
  return ['api', '/api/v1/namespaces/:namespace/resourcequotas/:name/status', 'PUT'] as const
}

export function usePutApiV1NamespacesNamespaceResourcequotasNameStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NamespacesNamespaceResourcequotasNameStatusKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].resourcequotas[':name'].status.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NamespacesNamespaceResourcequotasNameStatusKey() {
  return ['api', '/api/v1/namespaces/:namespace/resourcequotas/:name/status', 'PATCH'] as const
}

export function usePatchApiV1NamespacesNamespaceResourcequotasNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NamespacesNamespaceResourcequotasNameStatusKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].resourcequotas[':name'].status.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceSecretsKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/secrets', args] as const
}

export function useGetApiV1NamespacesNamespaceSecrets<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$get']>>
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
        ? getGetApiV1NamespacesNamespaceSecretsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.namespaces[':namespace'].secrets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceSecrets<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$get']>>
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
        ? getGetApiV1NamespacesNamespaceSecretsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.namespaces[':namespace'].secrets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceSecretsKey() {
  return ['api', '/api/v1/namespaces/:namespace/secrets', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceSecrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceSecretsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$post']>
        },
      ) => parseResponse(client.api.v1.namespaces[':namespace'].secrets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespaceSecretsKey() {
  return ['api', '/api/v1/namespaces/:namespace/secrets', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespaceSecrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespaceSecretsKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['secrets']['$delete']
          >
        },
      ) =>
        parseResponse(client.api.v1.namespaces[':namespace'].secrets.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceSecretsNameKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/secrets/:name', args] as const
}

export function useGetApiV1NamespacesNamespaceSecretsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$get']
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
        ? getGetApiV1NamespacesNamespaceSecretsNameKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$get']
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
          client.api.v1.namespaces[':namespace'].secrets[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceSecretsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$get']
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
        ? getGetApiV1NamespacesNamespaceSecretsNameKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$get']
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
          client.api.v1.namespaces[':namespace'].secrets[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NamespacesNamespaceSecretsNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/secrets/:name', 'PUT'] as const
}

export function usePutApiV1NamespacesNamespaceSecretsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NamespacesNamespaceSecretsNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].secrets[':name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespaceSecretsNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/secrets/:name', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespaceSecretsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespaceSecretsNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].secrets[':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NamespacesNamespaceSecretsNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/secrets/:name', 'PATCH'] as const
}

export function usePatchApiV1NamespacesNamespaceSecretsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NamespacesNamespaceSecretsNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].secrets[':name'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceServiceaccountsKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/serviceaccounts', args] as const
}

export function useGetApiV1NamespacesNamespaceServiceaccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$get']>
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
        ? getGetApiV1NamespacesNamespaceServiceaccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].serviceaccounts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceServiceaccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$get']>
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
        ? getGetApiV1NamespacesNamespaceServiceaccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].serviceaccounts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceServiceaccountsKey() {
  return ['api', '/api/v1/namespaces/:namespace/serviceaccounts', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceServiceaccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceServiceaccountsKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].serviceaccounts.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespaceServiceaccountsKey() {
  return ['api', '/api/v1/namespaces/:namespace/serviceaccounts', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespaceServiceaccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespaceServiceaccountsKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].serviceaccounts.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceServiceaccountsNameKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/serviceaccounts/:name', args] as const
}

export function useGetApiV1NamespacesNamespaceServiceaccountsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
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
        ? getGetApiV1NamespacesNamespaceServiceaccountsNameKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
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
          client.api.v1.namespaces[':namespace'].serviceaccounts[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceServiceaccountsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
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
        ? getGetApiV1NamespacesNamespaceServiceaccountsNameKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
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
          client.api.v1.namespaces[':namespace'].serviceaccounts[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NamespacesNamespaceServiceaccountsNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/serviceaccounts/:name', 'PUT'] as const
}

export function usePutApiV1NamespacesNamespaceServiceaccountsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NamespacesNamespaceServiceaccountsNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].serviceaccounts[':name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespaceServiceaccountsNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/serviceaccounts/:name', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespaceServiceaccountsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespaceServiceaccountsNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].serviceaccounts[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NamespacesNamespaceServiceaccountsNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/serviceaccounts/:name', 'PATCH'] as const
}

export function usePatchApiV1NamespacesNamespaceServiceaccountsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NamespacesNamespaceServiceaccountsNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].serviceaccounts[':name'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceServiceaccountsNameTokenKey() {
  return ['api', '/api/v1/namespaces/:namespace/serviceaccounts/:name/token', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceServiceaccountsNameToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['token']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceServiceaccountsNameTokenKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['token']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].serviceaccounts[':name'].token.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceServicesKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['services']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/services', args] as const
}

export function useGetApiV1NamespacesNamespaceServices<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['services']['$get']>>
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
        ? getGetApiV1NamespacesNamespaceServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.namespaces[':namespace'].services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceServices<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['services']['$get']>>
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
        ? getGetApiV1NamespacesNamespaceServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['services']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.namespaces[':namespace'].services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceServicesKey() {
  return ['api', '/api/v1/namespaces/:namespace/services', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['services']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['services']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceServicesKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['services']['$post']
          >
        },
      ) => parseResponse(client.api.v1.namespaces[':namespace'].services.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespaceServicesKey() {
  return ['api', '/api/v1/namespaces/:namespace/services', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespaceServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['services']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['services']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespaceServicesKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['services']['$delete']
          >
        },
      ) =>
        parseResponse(client.api.v1.namespaces[':namespace'].services.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceServicesNameKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/services/:name', args] as const
}

export function useGetApiV1NamespacesNamespaceServicesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$get']
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
        ? getGetApiV1NamespacesNamespaceServicesNameKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$get']
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
          client.api.v1.namespaces[':namespace'].services[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceServicesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$get']
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
        ? getGetApiV1NamespacesNamespaceServicesNameKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$get']
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
          client.api.v1.namespaces[':namespace'].services[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NamespacesNamespaceServicesNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name', 'PUT'] as const
}

export function usePutApiV1NamespacesNamespaceServicesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NamespacesNamespaceServicesNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].services[':name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespaceServicesNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespaceServicesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespaceServicesNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].services[':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NamespacesNamespaceServicesNameKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name', 'PATCH'] as const
}

export function usePatchApiV1NamespacesNamespaceServicesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NamespacesNamespaceServicesNameKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].services[':name'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceServicesNameProxyKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy', args] as const
}

export function useGetApiV1NamespacesNamespaceServicesNameProxy<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$get']
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
        ? getGetApiV1NamespacesNamespaceServicesNameProxyKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$get']
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
          client.api.v1.namespaces[':namespace'].services[':name'].proxy.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceServicesNameProxy<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$get']
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
        ? getGetApiV1NamespacesNamespaceServicesNameProxyKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$get']
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
          client.api.v1.namespaces[':namespace'].services[':name'].proxy.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NamespacesNamespaceServicesNameProxyKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy', 'PUT'] as const
}

export function usePutApiV1NamespacesNamespaceServicesNameProxy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NamespacesNamespaceServicesNameProxyKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].services[':name'].proxy.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceServicesNameProxyKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceServicesNameProxy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceServicesNameProxyKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].services[':name'].proxy.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespaceServicesNameProxyKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespaceServicesNameProxy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespaceServicesNameProxyKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].services[':name'].proxy.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getOptionsApiV1NamespacesNamespaceServicesNameProxyKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy', 'OPTIONS'] as const
}

export function useOptionsApiV1NamespacesNamespaceServicesNameProxy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$options']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$options']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsApiV1NamespacesNamespaceServicesNameProxyKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$options']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].services[':name'].proxy.$options(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getHeadApiV1NamespacesNamespaceServicesNameProxyKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy', 'HEAD'] as const
}

export function useHeadApiV1NamespacesNamespaceServicesNameProxy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$head']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$head']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadApiV1NamespacesNamespaceServicesNameProxyKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$head']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].services[':name'].proxy.$head(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NamespacesNamespaceServicesNameProxyKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy', 'PATCH'] as const
}

export function usePatchApiV1NamespacesNamespaceServicesNameProxy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NamespacesNamespaceServicesNameProxyKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].services[':name'].proxy.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceServicesNameProxyPathKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy/:path', args] as const
}

export function useGetApiV1NamespacesNamespaceServicesNameProxyPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$get']
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
        ? getGetApiV1NamespacesNamespaceServicesNameProxyPathKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$get']
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
          client.api.v1.namespaces[':namespace'].services[':name'].proxy[':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceServicesNameProxyPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$get']
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
        ? getGetApiV1NamespacesNamespaceServicesNameProxyPathKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$get']
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
          client.api.v1.namespaces[':namespace'].services[':name'].proxy[':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NamespacesNamespaceServicesNameProxyPathKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy/:path', 'PUT'] as const
}

export function usePutApiV1NamespacesNamespaceServicesNameProxyPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NamespacesNamespaceServicesNameProxyPathKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].services[':name'].proxy[':path'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceServicesNameProxyPathKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy/:path', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceServicesNameProxyPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceServicesNameProxyPathKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].services[':name'].proxy[':path'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespaceServicesNameProxyPathKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy/:path', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespaceServicesNameProxyPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespaceServicesNameProxyPathKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].services[':name'].proxy[':path'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getOptionsApiV1NamespacesNamespaceServicesNameProxyPathKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy/:path', 'OPTIONS'] as const
}

export function useOptionsApiV1NamespacesNamespaceServicesNameProxyPath<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$options']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$options']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsApiV1NamespacesNamespaceServicesNameProxyPathKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$options']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].services[':name'].proxy[':path'].$options(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getHeadApiV1NamespacesNamespaceServicesNameProxyPathKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy/:path', 'HEAD'] as const
}

export function useHeadApiV1NamespacesNamespaceServicesNameProxyPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$head']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$head']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadApiV1NamespacesNamespaceServicesNameProxyPathKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$head']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].services[':name'].proxy[':path'].$head(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NamespacesNamespaceServicesNameProxyPathKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/proxy/:path', 'PATCH'] as const
}

export function usePatchApiV1NamespacesNamespaceServicesNameProxyPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NamespacesNamespaceServicesNameProxyPathKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].services[':name'].proxy[':path'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceServicesNameStatusKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/status', args] as const
}

export function useGetApiV1NamespacesNamespaceServicesNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$get']
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
        ? getGetApiV1NamespacesNamespaceServicesNameStatusKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$get']
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
          client.api.v1.namespaces[':namespace'].services[':name'].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceServicesNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$get']
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
        ? getGetApiV1NamespacesNamespaceServicesNameStatusKey(args)
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
                (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$get']
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
          client.api.v1.namespaces[':namespace'].services[':name'].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NamespacesNamespaceServicesNameStatusKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/status', 'PUT'] as const
}

export function usePutApiV1NamespacesNamespaceServicesNameStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NamespacesNamespaceServicesNameStatusKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].services[':name'].status.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NamespacesNamespaceServicesNameStatusKey() {
  return ['api', '/api/v1/namespaces/:namespace/services/:name/status', 'PATCH'] as const
}

export function usePatchApiV1NamespacesNamespaceServicesNameStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NamespacesNamespaceServicesNameStatusKey()
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
            (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].services[':name'].status.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNameKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':name']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:name', args] as const
}

export function useGetApiV1NamespacesName<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['$get']>>
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
        ? getGetApiV1NamespacesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.namespaces[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesName<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['$get']>>
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
        ? getGetApiV1NamespacesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.namespaces[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NamespacesNameKey() {
  return ['api', '/api/v1/namespaces/:name', 'PUT'] as const
}

export function usePutApiV1NamespacesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NamespacesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.namespaces)[':name']['$put']> },
      ) => parseResponse(client.api.v1.namespaces[':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNameKey() {
  return ['api', '/api/v1/namespaces/:name', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.namespaces)[':name']['$delete']> },
      ) => parseResponse(client.api.v1.namespaces[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NamespacesNameKey() {
  return ['api', '/api/v1/namespaces/:name', 'PATCH'] as const
}

export function usePatchApiV1NamespacesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NamespacesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.namespaces)[':name']['$patch']> },
      ) => parseResponse(client.api.v1.namespaces[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1NamespacesNameFinalizeKey() {
  return ['api', '/api/v1/namespaces/:name/finalize', 'PUT'] as const
}

export function usePutApiV1NamespacesNameFinalize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['finalize']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':name']['finalize']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NamespacesNameFinalizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.namespaces)[':name']['finalize']['$put']>
        },
      ) => parseResponse(client.api.v1.namespaces[':name'].finalize.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNameStatusKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':name']['status']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:name/status', args] as const
}

export function useGetApiV1NamespacesNameStatus<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':name']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['status']['$get']>>
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
        ? getGetApiV1NamespacesNameStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.namespaces[':name'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNameStatus<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':name']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['status']['$get']>>
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
        ? getGetApiV1NamespacesNameStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.namespaces[':name'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NamespacesNameStatusKey() {
  return ['api', '/api/v1/namespaces/:name/status', 'PUT'] as const
}

export function usePutApiV1NamespacesNameStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['status']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':name']['status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NamespacesNameStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.namespaces)[':name']['status']['$put']> },
      ) => parseResponse(client.api.v1.namespaces[':name'].status.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NamespacesNameStatusKey() {
  return ['api', '/api/v1/namespaces/:name/status', 'PATCH'] as const
}

export function usePatchApiV1NamespacesNameStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':name']['status']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':name']['status']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NamespacesNameStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.namespaces)[':name']['status']['$patch']>
        },
      ) => parseResponse(client.api.v1.namespaces[':name'].status.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NodesKey(args: InferRequestType<typeof client.api.v1.nodes.$get>) {
  return ['api', '/api/v1/nodes', args] as const
}

export function useGetApiV1Nodes<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.nodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nodes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1NodesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nodes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Nodes<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.nodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nodes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1NodesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nodes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NodesKey() {
  return ['api', '/api/v1/nodes', 'POST'] as const
}

export function usePostApiV1Nodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nodes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.nodes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.nodes.$post> }) =>
        parseResponse(client.api.v1.nodes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NodesKey() {
  return ['api', '/api/v1/nodes', 'DELETE'] as const
}

export function useDeleteApiV1Nodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nodes.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.nodes.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.nodes.$delete> }) =>
        parseResponse(client.api.v1.nodes.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NodesNameKey(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['$get']>,
) {
  return ['api', '/api/v1/nodes/:name', args] as const
}

export function useGetApiV1NodesName<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV1NodesNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.nodes[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NodesName<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV1NodesNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.nodes[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NodesNameKey() {
  return ['api', '/api/v1/nodes/:name', 'PUT'] as const
}

export function usePutApiV1NodesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NodesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.nodes)[':name']['$put']> },
      ) => parseResponse(client.api.v1.nodes[':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NodesNameKey() {
  return ['api', '/api/v1/nodes/:name', 'DELETE'] as const
}

export function useDeleteApiV1NodesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NodesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.nodes)[':name']['$delete']> },
      ) => parseResponse(client.api.v1.nodes[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NodesNameKey() {
  return ['api', '/api/v1/nodes/:name', 'PATCH'] as const
}

export function usePatchApiV1NodesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NodesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.nodes)[':name']['$patch']> },
      ) => parseResponse(client.api.v1.nodes[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NodesNameProxyKey(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$get']>,
) {
  return ['api', '/api/v1/nodes/:name/proxy', args] as const
}

export function useGetApiV1NodesNameProxy<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy']['$get']>>
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
        ? getGetApiV1NodesNameProxyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.nodes[':name'].proxy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NodesNameProxy<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy']['$get']>>
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
        ? getGetApiV1NodesNameProxyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.nodes[':name'].proxy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NodesNameProxyKey() {
  return ['api', '/api/v1/nodes/:name/proxy', 'PUT'] as const
}

export function usePutApiV1NodesNameProxy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NodesNameProxyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$put']> },
      ) => parseResponse(client.api.v1.nodes[':name'].proxy.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NodesNameProxyKey() {
  return ['api', '/api/v1/nodes/:name/proxy', 'POST'] as const
}

export function usePostApiV1NodesNameProxy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NodesNameProxyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$post']> },
      ) => parseResponse(client.api.v1.nodes[':name'].proxy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NodesNameProxyKey() {
  return ['api', '/api/v1/nodes/:name/proxy', 'DELETE'] as const
}

export function useDeleteApiV1NodesNameProxy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NodesNameProxyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$delete']> },
      ) => parseResponse(client.api.v1.nodes[':name'].proxy.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsApiV1NodesNameProxyKey() {
  return ['api', '/api/v1/nodes/:name/proxy', 'OPTIONS'] as const
}

export function useOptionsApiV1NodesNameProxy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy']['$options']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsApiV1NodesNameProxyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$options']> },
      ) => parseResponse(client.api.v1.nodes[':name'].proxy.$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getHeadApiV1NodesNameProxyKey() {
  return ['api', '/api/v1/nodes/:name/proxy', 'HEAD'] as const
}

export function useHeadApiV1NodesNameProxy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy']['$head']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadApiV1NodesNameProxyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$head']> },
      ) => parseResponse(client.api.v1.nodes[':name'].proxy.$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NodesNameProxyKey() {
  return ['api', '/api/v1/nodes/:name/proxy', 'PATCH'] as const
}

export function usePatchApiV1NodesNameProxy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NodesNameProxyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$patch']> },
      ) => parseResponse(client.api.v1.nodes[':name'].proxy.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NodesNameProxyPathKey(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$get']>,
) {
  return ['api', '/api/v1/nodes/:name/proxy/:path', args] as const
}

export function useGetApiV1NodesNameProxyPath<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$get']>>
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
        ? getGetApiV1NodesNameProxyPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.nodes[':name'].proxy[':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NodesNameProxyPath<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$get']>>
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
        ? getGetApiV1NodesNameProxyPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.nodes[':name'].proxy[':path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NodesNameProxyPathKey() {
  return ['api', '/api/v1/nodes/:name/proxy/:path', 'PUT'] as const
}

export function usePutApiV1NodesNameProxyPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NodesNameProxyPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$put']>
        },
      ) => parseResponse(client.api.v1.nodes[':name'].proxy[':path'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NodesNameProxyPathKey() {
  return ['api', '/api/v1/nodes/:name/proxy/:path', 'POST'] as const
}

export function usePostApiV1NodesNameProxyPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NodesNameProxyPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$post']>
        },
      ) => parseResponse(client.api.v1.nodes[':name'].proxy[':path'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NodesNameProxyPathKey() {
  return ['api', '/api/v1/nodes/:name/proxy/:path', 'DELETE'] as const
}

export function useDeleteApiV1NodesNameProxyPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NodesNameProxyPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$delete']>
        },
      ) => parseResponse(client.api.v1.nodes[':name'].proxy[':path'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsApiV1NodesNameProxyPathKey() {
  return ['api', '/api/v1/nodes/:name/proxy/:path', 'OPTIONS'] as const
}

export function useOptionsApiV1NodesNameProxyPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$options']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$options']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsApiV1NodesNameProxyPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$options']>
        },
      ) => parseResponse(client.api.v1.nodes[':name'].proxy[':path'].$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getHeadApiV1NodesNameProxyPathKey() {
  return ['api', '/api/v1/nodes/:name/proxy/:path', 'HEAD'] as const
}

export function useHeadApiV1NodesNameProxyPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$head']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadApiV1NodesNameProxyPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$head']>
        },
      ) => parseResponse(client.api.v1.nodes[':name'].proxy[':path'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NodesNameProxyPathKey() {
  return ['api', '/api/v1/nodes/:name/proxy/:path', 'PATCH'] as const
}

export function usePatchApiV1NodesNameProxyPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NodesNameProxyPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$patch']>
        },
      ) => parseResponse(client.api.v1.nodes[':name'].proxy[':path'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NodesNameStatusKey(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['status']['$get']>,
) {
  return ['api', '/api/v1/nodes/:name/status', args] as const
}

export function useGetApiV1NodesNameStatus<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['status']['$get']>>
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
        ? getGetApiV1NodesNameStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.nodes[':name'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NodesNameStatus<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['status']['$get']>>
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
        ? getGetApiV1NodesNameStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.nodes[':name'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NodesNameStatusKey() {
  return ['api', '/api/v1/nodes/:name/status', 'PUT'] as const
}

export function usePutApiV1NodesNameStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['status']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NodesNameStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.nodes)[':name']['status']['$put']> },
      ) => parseResponse(client.api.v1.nodes[':name'].status.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1NodesNameStatusKey() {
  return ['api', '/api/v1/nodes/:name/status', 'PATCH'] as const
}

export function usePatchApiV1NodesNameStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nodes)[':name']['status']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.nodes)[':name']['status']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1NodesNameStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.nodes)[':name']['status']['$patch']> },
      ) => parseResponse(client.api.v1.nodes[':name'].status.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PersistentvolumeclaimsKey(
  args: InferRequestType<typeof client.api.v1.persistentvolumeclaims.$get>,
) {
  return ['api', '/api/v1/persistentvolumeclaims', args] as const
}

export function useGetApiV1Persistentvolumeclaims<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.persistentvolumeclaims.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.persistentvolumeclaims.$get>>
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
        ? getGetApiV1PersistentvolumeclaimsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.persistentvolumeclaims.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.persistentvolumeclaims.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Persistentvolumeclaims<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.persistentvolumeclaims.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.persistentvolumeclaims.$get>>
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
        ? getGetApiV1PersistentvolumeclaimsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.persistentvolumeclaims.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.persistentvolumeclaims.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1PersistentvolumesKey(
  args: InferRequestType<typeof client.api.v1.persistentvolumes.$get>,
) {
  return ['api', '/api/v1/persistentvolumes', args] as const
}

export function useGetApiV1Persistentvolumes<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.persistentvolumes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.persistentvolumes.$get>>>
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
        ? getGetApiV1PersistentvolumesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.persistentvolumes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.persistentvolumes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Persistentvolumes<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.persistentvolumes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.persistentvolumes.$get>>>
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
        ? getGetApiV1PersistentvolumesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.persistentvolumes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.persistentvolumes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1PersistentvolumesKey() {
  return ['api', '/api/v1/persistentvolumes', 'POST'] as const
}

export function usePostApiV1Persistentvolumes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.persistentvolumes.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.persistentvolumes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1PersistentvolumesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.persistentvolumes.$post> },
      ) => parseResponse(client.api.v1.persistentvolumes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1PersistentvolumesKey() {
  return ['api', '/api/v1/persistentvolumes', 'DELETE'] as const
}

export function useDeleteApiV1Persistentvolumes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.persistentvolumes.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.persistentvolumes.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1PersistentvolumesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.persistentvolumes.$delete> },
      ) => parseResponse(client.api.v1.persistentvolumes.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PersistentvolumesNameKey(
  args: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$get']>,
) {
  return ['api', '/api/v1/persistentvolumes/:name', args] as const
}

export function useGetApiV1PersistentvolumesName<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['$get']>>
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
        ? getGetApiV1PersistentvolumesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.persistentvolumes[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PersistentvolumesName<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['$get']>>
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
        ? getGetApiV1PersistentvolumesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.persistentvolumes[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1PersistentvolumesNameKey() {
  return ['api', '/api/v1/persistentvolumes/:name', 'PUT'] as const
}

export function usePutApiV1PersistentvolumesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1PersistentvolumesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$put']> },
      ) => parseResponse(client.api.v1.persistentvolumes[':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1PersistentvolumesNameKey() {
  return ['api', '/api/v1/persistentvolumes/:name', 'DELETE'] as const
}

export function useDeleteApiV1PersistentvolumesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1PersistentvolumesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$delete']> },
      ) => parseResponse(client.api.v1.persistentvolumes[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1PersistentvolumesNameKey() {
  return ['api', '/api/v1/persistentvolumes/:name', 'PATCH'] as const
}

export function usePatchApiV1PersistentvolumesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1PersistentvolumesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$patch']> },
      ) => parseResponse(client.api.v1.persistentvolumes[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PersistentvolumesNameStatusKey(
  args: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$get']>,
) {
  return ['api', '/api/v1/persistentvolumes/:name/status', args] as const
}

export function useGetApiV1PersistentvolumesNameStatus<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$get']>>
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
        ? getGetApiV1PersistentvolumesNameStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.persistentvolumes[':name'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PersistentvolumesNameStatus<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$get']>>
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
        ? getGetApiV1PersistentvolumesNameStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.persistentvolumes[':name'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1PersistentvolumesNameStatusKey() {
  return ['api', '/api/v1/persistentvolumes/:name/status', 'PUT'] as const
}

export function usePutApiV1PersistentvolumesNameStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1PersistentvolumesNameStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$put']>
        },
      ) => parseResponse(client.api.v1.persistentvolumes[':name'].status.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1PersistentvolumesNameStatusKey() {
  return ['api', '/api/v1/persistentvolumes/:name/status', 'PATCH'] as const
}

export function usePatchApiV1PersistentvolumesNameStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1PersistentvolumesNameStatusKey()
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
            (typeof client.api.v1.persistentvolumes)[':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(client.api.v1.persistentvolumes[':name'].status.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PodsKey(args: InferRequestType<typeof client.api.v1.pods.$get>) {
  return ['api', '/api/v1/pods', args] as const
}

export function useGetApiV1Pods<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.pods.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.pods.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1PodsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.pods.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.pods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Pods<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.pods.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.pods.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1PodsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.pods.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.pods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1PodtemplatesKey(
  args: InferRequestType<typeof client.api.v1.podtemplates.$get>,
) {
  return ['api', '/api/v1/podtemplates', args] as const
}

export function useGetApiV1Podtemplates<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.podtemplates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.podtemplates.$get>>>
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
        ? getGetApiV1PodtemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.podtemplates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.podtemplates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Podtemplates<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.podtemplates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.podtemplates.$get>>>
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
        ? getGetApiV1PodtemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.podtemplates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.podtemplates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ReplicationcontrollersKey(
  args: InferRequestType<typeof client.api.v1.replicationcontrollers.$get>,
) {
  return ['api', '/api/v1/replicationcontrollers', args] as const
}

export function useGetApiV1Replicationcontrollers<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.replicationcontrollers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.replicationcontrollers.$get>>
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
        ? getGetApiV1ReplicationcontrollersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.replicationcontrollers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.replicationcontrollers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Replicationcontrollers<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.replicationcontrollers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.replicationcontrollers.$get>>
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
        ? getGetApiV1ReplicationcontrollersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.replicationcontrollers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.replicationcontrollers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ResourcequotasKey(
  args: InferRequestType<typeof client.api.v1.resourcequotas.$get>,
) {
  return ['api', '/api/v1/resourcequotas', args] as const
}

export function useGetApiV1Resourcequotas<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.resourcequotas.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.resourcequotas.$get>>>
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
        ? getGetApiV1ResourcequotasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.resourcequotas.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.resourcequotas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Resourcequotas<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.resourcequotas.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.resourcequotas.$get>>>
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
        ? getGetApiV1ResourcequotasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.resourcequotas.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.resourcequotas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1SecretsKey(args: InferRequestType<typeof client.api.v1.secrets.$get>) {
  return ['api', '/api/v1/secrets', args] as const
}

export function useGetApiV1Secrets<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.secrets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.secrets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1SecretsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.secrets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.secrets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Secrets<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.secrets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.secrets.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1SecretsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.secrets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.secrets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ServiceaccountsKey(
  args: InferRequestType<typeof client.api.v1.serviceaccounts.$get>,
) {
  return ['api', '/api/v1/serviceaccounts', args] as const
}

export function useGetApiV1Serviceaccounts<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.serviceaccounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.serviceaccounts.$get>>>
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
        ? getGetApiV1ServiceaccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.serviceaccounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.serviceaccounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Serviceaccounts<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.serviceaccounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.serviceaccounts.$get>>>
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
        ? getGetApiV1ServiceaccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.serviceaccounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.serviceaccounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1ServicesKey(args: InferRequestType<typeof client.api.v1.services.$get>) {
  return ['api', '/api/v1/services', args] as const
}

export function useGetApiV1Services<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ServicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Services<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ServicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.services.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchConfigmapsKey(
  args: InferRequestType<typeof client.api.v1.watch.configmaps.$get>,
) {
  return ['api', '/api/v1/watch/configmaps', args] as const
}

export function useGetApiV1WatchConfigmaps<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.configmaps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.configmaps.$get>>>
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
        ? getGetApiV1WatchConfigmapsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.configmaps.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.configmaps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchConfigmaps<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.configmaps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.configmaps.$get>>>
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
        ? getGetApiV1WatchConfigmapsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.configmaps.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.configmaps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchEndpointsKey(
  args: InferRequestType<typeof client.api.v1.watch.endpoints.$get>,
) {
  return ['api', '/api/v1/watch/endpoints', args] as const
}

export function useGetApiV1WatchEndpoints<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.endpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.endpoints.$get>>>
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
        ? getGetApiV1WatchEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.endpoints.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchEndpoints<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.endpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.endpoints.$get>>>
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
        ? getGetApiV1WatchEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.endpoints.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchEventsKey(
  args: InferRequestType<typeof client.api.v1.watch.events.$get>,
) {
  return ['api', '/api/v1/watch/events', args] as const
}

export function useGetApiV1WatchEvents<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.events.$get>>>
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
        ? getGetApiV1WatchEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.events.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchEvents<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.events.$get>>>
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
        ? getGetApiV1WatchEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.events.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchLimitrangesKey(
  args: InferRequestType<typeof client.api.v1.watch.limitranges.$get>,
) {
  return ['api', '/api/v1/watch/limitranges', args] as const
}

export function useGetApiV1WatchLimitranges<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.limitranges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.limitranges.$get>>>
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
        ? getGetApiV1WatchLimitrangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.limitranges.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.limitranges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchLimitranges<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.limitranges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.limitranges.$get>>>
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
        ? getGetApiV1WatchLimitrangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.limitranges.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.limitranges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchNamespacesKey(
  args: InferRequestType<typeof client.api.v1.watch.namespaces.$get>,
) {
  return ['api', '/api/v1/watch/namespaces', args] as const
}

export function useGetApiV1WatchNamespaces<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.namespaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.namespaces.$get>>>
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
        ? getGetApiV1WatchNamespacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.namespaces.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.namespaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchNamespaces<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.namespaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.namespaces.$get>>>
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
        ? getGetApiV1WatchNamespacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.namespaces.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.namespaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchNamespacesNamespaceConfigmapsKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/configmaps', args] as const
}

export function useGetApiV1WatchNamespacesNamespaceConfigmaps<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps']['$get']
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
        ? getGetApiV1WatchNamespacesNamespaceConfigmapsKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].configmaps.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchNamespacesNamespaceConfigmaps<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps']['$get']
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
        ? getGetApiV1WatchNamespacesNamespaceConfigmapsKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].configmaps.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchNamespacesNamespaceConfigmapsNameKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/configmaps/:name', args] as const
}

export function useGetApiV1WatchNamespacesNamespaceConfigmapsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps'][':name']['$get']
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
        ? getGetApiV1WatchNamespacesNamespaceConfigmapsNameKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps'][':name']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].configmaps[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchNamespacesNamespaceConfigmapsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps'][':name']['$get']
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
        ? getGetApiV1WatchNamespacesNamespaceConfigmapsNameKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps'][':name']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].configmaps[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchNamespacesNamespaceEndpointsKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/endpoints', args] as const
}

export function useGetApiV1WatchNamespacesNamespaceEndpoints<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['endpoints']['$get']>
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
        ? getGetApiV1WatchNamespacesNamespaceEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['endpoints']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.watch.namespaces[':namespace'].endpoints.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchNamespacesNamespaceEndpoints<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['endpoints']['$get']>
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
        ? getGetApiV1WatchNamespacesNamespaceEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['endpoints']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.watch.namespaces[':namespace'].endpoints.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchNamespacesNamespaceEndpointsNameKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/endpoints/:name', args] as const
}

export function useGetApiV1WatchNamespacesNamespaceEndpointsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints'][':name']['$get']
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
        ? getGetApiV1WatchNamespacesNamespaceEndpointsNameKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints'][':name']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].endpoints[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchNamespacesNamespaceEndpointsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints'][':name']['$get']
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
        ? getGetApiV1WatchNamespacesNamespaceEndpointsNameKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints'][':name']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].endpoints[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchNamespacesNamespaceEventsKey(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['events']['$get']>,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/events', args] as const
}

export function useGetApiV1WatchNamespacesNamespaceEvents<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['events']['$get']>
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
        ? getGetApiV1WatchNamespacesNamespaceEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['events']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.watch.namespaces[':namespace'].events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchNamespacesNamespaceEvents<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['events']['$get']>
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
        ? getGetApiV1WatchNamespacesNamespaceEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['events']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.watch.namespaces[':namespace'].events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchNamespacesNamespaceEventsNameKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['events'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/events/:name', args] as const
}

export function useGetApiV1WatchNamespacesNamespaceEventsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['events'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['events'][':name']['$get']
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
        ? getGetApiV1WatchNamespacesNamespaceEventsNameKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['events'][':name']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].events[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchNamespacesNamespaceEventsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['events'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['events'][':name']['$get']
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
        ? getGetApiV1WatchNamespacesNamespaceEventsNameKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['events'][':name']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].events[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchNamespacesNamespaceLimitrangesKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/limitranges', args] as const
}

export function useGetApiV1WatchNamespacesNamespaceLimitranges<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges']['$get']
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
        ? getGetApiV1WatchNamespacesNamespaceLimitrangesKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].limitranges.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchNamespacesNamespaceLimitranges<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges']['$get']
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
        ? getGetApiV1WatchNamespacesNamespaceLimitrangesKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].limitranges.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchNamespacesNamespaceLimitrangesNameKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/limitranges/:name', args] as const
}

export function useGetApiV1WatchNamespacesNamespaceLimitrangesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges'][':name']['$get']
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
        ? getGetApiV1WatchNamespacesNamespaceLimitrangesNameKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges'][':name']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].limitranges[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchNamespacesNamespaceLimitrangesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges'][':name']['$get']
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
        ? getGetApiV1WatchNamespacesNamespaceLimitrangesNameKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges'][':name']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].limitranges[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchNamespacesNamespacePersistentvolumeclaimsKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/persistentvolumeclaims', args] as const
}

export function useGetApiV1WatchNamespacesNamespacePersistentvolumeclaims<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims']['$get']
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
        ? getGetApiV1WatchNamespacesNamespacePersistentvolumeclaimsKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].persistentvolumeclaims.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchNamespacesNamespacePersistentvolumeclaims<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims']['$get']
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
        ? getGetApiV1WatchNamespacesNamespacePersistentvolumeclaimsKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].persistentvolumeclaims.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchNamespacesNamespacePersistentvolumeclaimsNameKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/persistentvolumeclaims/:name', args] as const
}

export function useGetApiV1WatchNamespacesNamespacePersistentvolumeclaimsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
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
        ? getGetApiV1WatchNamespacesNamespacePersistentvolumeclaimsNameKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].persistentvolumeclaims[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchNamespacesNamespacePersistentvolumeclaimsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
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
        ? getGetApiV1WatchNamespacesNamespacePersistentvolumeclaimsNameKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].persistentvolumeclaims[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchNamespacesNamespacePodsKey(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['pods']['$get']>,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/pods', args] as const
}

export function useGetApiV1WatchNamespacesNamespacePods<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['pods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['pods']['$get']>
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
        ? getGetApiV1WatchNamespacesNamespacePodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['pods']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.watch.namespaces[':namespace'].pods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchNamespacesNamespacePods<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['pods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['pods']['$get']>
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
        ? getGetApiV1WatchNamespacesNamespacePodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['pods']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.watch.namespaces[':namespace'].pods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchNamespacesNamespacePodsNameKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['pods'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/pods/:name', args] as const
}

export function useGetApiV1WatchNamespacesNamespacePodsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['pods'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['pods'][':name']['$get']
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
        ? getGetApiV1WatchNamespacesNamespacePodsNameKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['pods'][':name']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].pods[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchNamespacesNamespacePodsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['pods'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['pods'][':name']['$get']
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
        ? getGetApiV1WatchNamespacesNamespacePodsNameKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['pods'][':name']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].pods[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchNamespacesNamespacePodtemplatesKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/podtemplates', args] as const
}

export function useGetApiV1WatchNamespacesNamespacePodtemplates<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates']['$get']
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
        ? getGetApiV1WatchNamespacesNamespacePodtemplatesKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].podtemplates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchNamespacesNamespacePodtemplates<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates']['$get']
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
        ? getGetApiV1WatchNamespacesNamespacePodtemplatesKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].podtemplates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchNamespacesNamespacePodtemplatesNameKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/podtemplates/:name', args] as const
}

export function useGetApiV1WatchNamespacesNamespacePodtemplatesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates'][':name']['$get']
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
        ? getGetApiV1WatchNamespacesNamespacePodtemplatesNameKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates'][':name']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].podtemplates[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchNamespacesNamespacePodtemplatesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates'][':name']['$get']
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
        ? getGetApiV1WatchNamespacesNamespacePodtemplatesNameKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates'][':name']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].podtemplates[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchNamespacesNamespaceReplicationcontrollersKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/replicationcontrollers', args] as const
}

export function useGetApiV1WatchNamespacesNamespaceReplicationcontrollers<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers']['$get']
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
        ? getGetApiV1WatchNamespacesNamespaceReplicationcontrollersKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].replicationcontrollers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchNamespacesNamespaceReplicationcontrollers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers']['$get']
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
        ? getGetApiV1WatchNamespacesNamespaceReplicationcontrollersKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].replicationcontrollers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchNamespacesNamespaceReplicationcontrollersNameKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/replicationcontrollers/:name', args] as const
}

export function useGetApiV1WatchNamespacesNamespaceReplicationcontrollersName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
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
        ? getGetApiV1WatchNamespacesNamespaceReplicationcontrollersNameKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].replicationcontrollers[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchNamespacesNamespaceReplicationcontrollersName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
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
        ? getGetApiV1WatchNamespacesNamespaceReplicationcontrollersNameKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].replicationcontrollers[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchNamespacesNamespaceResourcequotasKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/resourcequotas', args] as const
}

export function useGetApiV1WatchNamespacesNamespaceResourcequotas<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas']['$get']
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
        ? getGetApiV1WatchNamespacesNamespaceResourcequotasKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].resourcequotas.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchNamespacesNamespaceResourcequotas<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas']['$get']
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
        ? getGetApiV1WatchNamespacesNamespaceResourcequotasKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].resourcequotas.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchNamespacesNamespaceResourcequotasNameKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/resourcequotas/:name', args] as const
}

export function useGetApiV1WatchNamespacesNamespaceResourcequotasName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas'][':name']['$get']
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
        ? getGetApiV1WatchNamespacesNamespaceResourcequotasNameKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas'][':name']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].resourcequotas[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchNamespacesNamespaceResourcequotasName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas'][':name']['$get']
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
        ? getGetApiV1WatchNamespacesNamespaceResourcequotasNameKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas'][':name']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].resourcequotas[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchNamespacesNamespaceSecretsKey(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['secrets']['$get']>,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/secrets', args] as const
}

export function useGetApiV1WatchNamespacesNamespaceSecrets<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['secrets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['secrets']['$get']>
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
        ? getGetApiV1WatchNamespacesNamespaceSecretsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['secrets']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.watch.namespaces[':namespace'].secrets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchNamespacesNamespaceSecrets<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['secrets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['secrets']['$get']>
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
        ? getGetApiV1WatchNamespacesNamespaceSecretsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['secrets']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.watch.namespaces[':namespace'].secrets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchNamespacesNamespaceSecretsNameKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['secrets'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/secrets/:name', args] as const
}

export function useGetApiV1WatchNamespacesNamespaceSecretsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['secrets'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['secrets'][':name']['$get']
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
        ? getGetApiV1WatchNamespacesNamespaceSecretsNameKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['secrets'][':name']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].secrets[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchNamespacesNamespaceSecretsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['secrets'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['secrets'][':name']['$get']
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
        ? getGetApiV1WatchNamespacesNamespaceSecretsNameKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['secrets'][':name']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].secrets[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchNamespacesNamespaceServiceaccountsKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/serviceaccounts', args] as const
}

export function useGetApiV1WatchNamespacesNamespaceServiceaccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts']['$get']
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
        ? getGetApiV1WatchNamespacesNamespaceServiceaccountsKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].serviceaccounts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchNamespacesNamespaceServiceaccounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts']['$get']
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
        ? getGetApiV1WatchNamespacesNamespaceServiceaccountsKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].serviceaccounts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchNamespacesNamespaceServiceaccountsNameKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/serviceaccounts/:name', args] as const
}

export function useGetApiV1WatchNamespacesNamespaceServiceaccountsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
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
        ? getGetApiV1WatchNamespacesNamespaceServiceaccountsNameKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].serviceaccounts[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchNamespacesNamespaceServiceaccountsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
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
        ? getGetApiV1WatchNamespacesNamespaceServiceaccountsNameKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].serviceaccounts[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchNamespacesNamespaceServicesKey(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['services']['$get']>,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/services', args] as const
}

export function useGetApiV1WatchNamespacesNamespaceServices<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['services']['$get']>
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
        ? getGetApiV1WatchNamespacesNamespaceServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['services']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.watch.namespaces[':namespace'].services.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchNamespacesNamespaceServices<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['services']['$get']>
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
        ? getGetApiV1WatchNamespacesNamespaceServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.watch.namespaces)[':namespace']['services']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.watch.namespaces[':namespace'].services.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchNamespacesNamespaceServicesNameKey(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['services'][':name']['$get']
  >,
) {
  return ['api', '/api/v1/watch/namespaces/:namespace/services/:name', args] as const
}

export function useGetApiV1WatchNamespacesNamespaceServicesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['services'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['services'][':name']['$get']
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
        ? getGetApiV1WatchNamespacesNamespaceServicesNameKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['services'][':name']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].services[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchNamespacesNamespaceServicesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['services'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.watch.namespaces)[':namespace']['services'][':name']['$get']
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
        ? getGetApiV1WatchNamespacesNamespaceServicesNameKey(args)
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
                (typeof client.api.v1.watch.namespaces)[':namespace']['services'][':name']['$get']
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
          client.api.v1.watch.namespaces[':namespace'].services[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchNamespacesNameKey(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':name']['$get']>,
) {
  return ['api', '/api/v1/watch/namespaces/:name', args] as const
}

export function useGetApiV1WatchNamespacesName<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.watch.namespaces)[':name']['$get']>>
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
        ? getGetApiV1WatchNamespacesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.watch.namespaces)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.namespaces[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchNamespacesName<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.watch.namespaces)[':name']['$get']>>
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
        ? getGetApiV1WatchNamespacesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.watch.namespaces)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.namespaces[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchNodesKey(
  args: InferRequestType<typeof client.api.v1.watch.nodes.$get>,
) {
  return ['api', '/api/v1/watch/nodes', args] as const
}

export function useGetApiV1WatchNodes<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.nodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.nodes.$get>>>>
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
        ? getGetApiV1WatchNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.nodes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchNodes<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.nodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.nodes.$get>>>>
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
        ? getGetApiV1WatchNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.nodes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchNodesNameKey(
  args: InferRequestType<(typeof client.api.v1.watch.nodes)[':name']['$get']>,
) {
  return ['api', '/api/v1/watch/nodes/:name', args] as const
}

export function useGetApiV1WatchNodesName<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.watch.nodes)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.watch.nodes)[':name']['$get']>>
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
        ? getGetApiV1WatchNodesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.watch.nodes)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.nodes[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchNodesName<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.watch.nodes)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.watch.nodes)[':name']['$get']>>
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
        ? getGetApiV1WatchNodesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.watch.nodes)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.nodes[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchPersistentvolumeclaimsKey(
  args: InferRequestType<typeof client.api.v1.watch.persistentvolumeclaims.$get>,
) {
  return ['api', '/api/v1/watch/persistentvolumeclaims', args] as const
}

export function useGetApiV1WatchPersistentvolumeclaims<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.persistentvolumeclaims.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.watch.persistentvolumeclaims.$get>>
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
        ? getGetApiV1WatchPersistentvolumeclaimsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.watch.persistentvolumeclaims.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.watch.persistentvolumeclaims.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchPersistentvolumeclaims<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.persistentvolumeclaims.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.watch.persistentvolumeclaims.$get>>
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
        ? getGetApiV1WatchPersistentvolumeclaimsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.watch.persistentvolumeclaims.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.watch.persistentvolumeclaims.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchPersistentvolumesKey(
  args: InferRequestType<typeof client.api.v1.watch.persistentvolumes.$get>,
) {
  return ['api', '/api/v1/watch/persistentvolumes', args] as const
}

export function useGetApiV1WatchPersistentvolumes<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.persistentvolumes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.watch.persistentvolumes.$get>>
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
        ? getGetApiV1WatchPersistentvolumesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.watch.persistentvolumes.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.persistentvolumes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchPersistentvolumes<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.persistentvolumes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.watch.persistentvolumes.$get>>
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
        ? getGetApiV1WatchPersistentvolumesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.watch.persistentvolumes.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.persistentvolumes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchPersistentvolumesNameKey(
  args: InferRequestType<(typeof client.api.v1.watch.persistentvolumes)[':name']['$get']>,
) {
  return ['api', '/api/v1/watch/persistentvolumes/:name', args] as const
}

export function useGetApiV1WatchPersistentvolumesName<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.watch.persistentvolumes)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.watch.persistentvolumes)[':name']['$get']>>
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
        ? getGetApiV1WatchPersistentvolumesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.watch.persistentvolumes)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.watch.persistentvolumes[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchPersistentvolumesName<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.watch.persistentvolumes)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.watch.persistentvolumes)[':name']['$get']>>
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
        ? getGetApiV1WatchPersistentvolumesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.watch.persistentvolumes)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.watch.persistentvolumes[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchPodsKey(
  args: InferRequestType<typeof client.api.v1.watch.pods.$get>,
) {
  return ['api', '/api/v1/watch/pods', args] as const
}

export function useGetApiV1WatchPods<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.pods.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.pods.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1WatchPodsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.pods.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.pods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchPods<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.pods.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.pods.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1WatchPodsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.pods.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.pods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchPodtemplatesKey(
  args: InferRequestType<typeof client.api.v1.watch.podtemplates.$get>,
) {
  return ['api', '/api/v1/watch/podtemplates', args] as const
}

export function useGetApiV1WatchPodtemplates<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.podtemplates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.podtemplates.$get>>>
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
        ? getGetApiV1WatchPodtemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.podtemplates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.podtemplates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchPodtemplates<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.podtemplates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.podtemplates.$get>>>
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
        ? getGetApiV1WatchPodtemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.podtemplates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.podtemplates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchReplicationcontrollersKey(
  args: InferRequestType<typeof client.api.v1.watch.replicationcontrollers.$get>,
) {
  return ['api', '/api/v1/watch/replicationcontrollers', args] as const
}

export function useGetApiV1WatchReplicationcontrollers<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.replicationcontrollers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.watch.replicationcontrollers.$get>>
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
        ? getGetApiV1WatchReplicationcontrollersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.watch.replicationcontrollers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.watch.replicationcontrollers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchReplicationcontrollers<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.replicationcontrollers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.watch.replicationcontrollers.$get>>
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
        ? getGetApiV1WatchReplicationcontrollersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.watch.replicationcontrollers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.watch.replicationcontrollers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchResourcequotasKey(
  args: InferRequestType<typeof client.api.v1.watch.resourcequotas.$get>,
) {
  return ['api', '/api/v1/watch/resourcequotas', args] as const
}

export function useGetApiV1WatchResourcequotas<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.resourcequotas.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.resourcequotas.$get>>>
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
        ? getGetApiV1WatchResourcequotasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.resourcequotas.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.resourcequotas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchResourcequotas<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.resourcequotas.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.resourcequotas.$get>>>
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
        ? getGetApiV1WatchResourcequotasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.resourcequotas.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.resourcequotas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchSecretsKey(
  args: InferRequestType<typeof client.api.v1.watch.secrets.$get>,
) {
  return ['api', '/api/v1/watch/secrets', args] as const
}

export function useGetApiV1WatchSecrets<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.secrets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.secrets.$get>>>
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
        ? getGetApiV1WatchSecretsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.secrets.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.secrets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchSecrets<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.secrets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.secrets.$get>>>
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
        ? getGetApiV1WatchSecretsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.secrets.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.secrets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchServiceaccountsKey(
  args: InferRequestType<typeof client.api.v1.watch.serviceaccounts.$get>,
) {
  return ['api', '/api/v1/watch/serviceaccounts', args] as const
}

export function useGetApiV1WatchServiceaccounts<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.serviceaccounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.serviceaccounts.$get>>>
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
        ? getGetApiV1WatchServiceaccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.serviceaccounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.serviceaccounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchServiceaccounts<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.serviceaccounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.serviceaccounts.$get>>>
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
        ? getGetApiV1WatchServiceaccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.serviceaccounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.serviceaccounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1WatchServicesKey(
  args: InferRequestType<typeof client.api.v1.watch.services.$get>,
) {
  return ['api', '/api/v1/watch/services', args] as const
}

export function useGetApiV1WatchServices<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.services.$get>>>
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
        ? getGetApiV1WatchServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.services.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1WatchServices<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.watch.services.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.services.$get>>>
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
        ? getGetApiV1WatchServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.watch.services.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.watch.services.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
