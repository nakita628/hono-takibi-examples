import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApisKey() {
  return ['apis'] as const
}

export function getGetApisDiscoveryK8sIoV1IndexKey() {
  return ['apis', '/apis/discovery.k8s.io/v1/'] as const
}

export function useGetApisDiscoveryK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['discovery.k8s.io']['v1']['index']['$get']>>
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
        ? getGetApisDiscoveryK8sIoV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['discovery.k8s.io']['v1']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['discovery.k8s.io'].v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisDiscoveryK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['discovery.k8s.io']['v1']['index']['$get']>>
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
        ? getGetApisDiscoveryK8sIoV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['discovery.k8s.io']['v1']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['discovery.k8s.io'].v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisDiscoveryK8sIoV1EndpointslicesKey(
  args: InferRequestType<(typeof client.apis)['discovery.k8s.io']['v1']['endpointslices']['$get']>,
) {
  return ['apis', '/apis/discovery.k8s.io/v1/endpointslices', args] as const
}

export function useGetApisDiscoveryK8sIoV1Endpointslices<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['discovery.k8s.io']['v1']['endpointslices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['discovery.k8s.io']['v1']['endpointslices']['$get']>
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
        ? getGetApisDiscoveryK8sIoV1EndpointslicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['discovery.k8s.io']['v1']['endpointslices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['discovery.k8s.io'].v1.endpointslices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisDiscoveryK8sIoV1Endpointslices<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['discovery.k8s.io']['v1']['endpointslices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['discovery.k8s.io']['v1']['endpointslices']['$get']>
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
        ? getGetApisDiscoveryK8sIoV1EndpointslicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['discovery.k8s.io']['v1']['endpointslices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['discovery.k8s.io'].v1.endpointslices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesKey(
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$get']
  >,
) {
  return ['apis', '/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices', args] as const
}

export function useGetApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslices<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$get']
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
        ? getGetApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesKey(args)
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
                (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$get']
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
          client.apis['discovery.k8s.io'].v1.namespaces[':namespace'].endpointslices.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslices<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$get']
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
        ? getGetApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesKey(args)
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
                (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$get']
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
          client.apis['discovery.k8s.io'].v1.namespaces[':namespace'].endpointslices.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesKey() {
  return ['apis', '/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices', 'POST'] as const
}

export function usePostApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslices<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesKey()
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
            (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['discovery.k8s.io'].v1.namespaces[':namespace'].endpointslices.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesKey() {
  return [
    'apis',
    '/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices',
    'DELETE',
  ] as const
}

export function useDeleteApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslices<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesKey()
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
            (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['discovery.k8s.io'].v1.namespaces[':namespace'].endpointslices.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameKey(
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name',
    args,
  ] as const
}

export function useGetApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$get']
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
        ? getGetApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameKey(args)
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
                (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$get']
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
          client.apis['discovery.k8s.io'].v1.namespaces[':namespace'].endpointslices[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$get']
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
        ? getGetApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameKey(args)
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
                (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$get']
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
          client.apis['discovery.k8s.io'].v1.namespaces[':namespace'].endpointslices[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameKey() {
  return [
    'apis',
    '/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name',
    'PUT',
  ] as const
}

export function usePutApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameKey()
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
            (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['discovery.k8s.io'].v1.namespaces[':namespace'].endpointslices[':name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameKey() {
  return [
    'apis',
    '/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name',
    'DELETE',
  ] as const
}

export function useDeleteApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameKey()
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
            (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['discovery.k8s.io'].v1.namespaces[':namespace'].endpointslices[
            ':name'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameKey() {
  return [
    'apis',
    '/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name',
    'PATCH',
  ] as const
}

export function usePatchApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisDiscoveryK8sIoV1NamespacesNamespaceEndpointslicesNameKey()
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
            (typeof client.apis)['discovery.k8s.io']['v1']['namespaces'][':namespace']['endpointslices'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['discovery.k8s.io'].v1.namespaces[':namespace'].endpointslices[
            ':name'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisDiscoveryK8sIoV1WatchEndpointslicesKey(
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['endpointslices']['$get']
  >,
) {
  return ['apis', '/apis/discovery.k8s.io/v1/watch/endpointslices', args] as const
}

export function useGetApisDiscoveryK8sIoV1WatchEndpointslices<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['endpointslices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['discovery.k8s.io']['v1']['watch']['endpointslices']['$get']
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
        ? getGetApisDiscoveryK8sIoV1WatchEndpointslicesKey(args)
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
                (typeof client.apis)['discovery.k8s.io']['v1']['watch']['endpointslices']['$get']
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
          client.apis['discovery.k8s.io'].v1.watch.endpointslices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisDiscoveryK8sIoV1WatchEndpointslices<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['endpointslices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['discovery.k8s.io']['v1']['watch']['endpointslices']['$get']
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
        ? getGetApisDiscoveryK8sIoV1WatchEndpointslicesKey(args)
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
                (typeof client.apis)['discovery.k8s.io']['v1']['watch']['endpointslices']['$get']
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
          client.apis['discovery.k8s.io'].v1.watch.endpointslices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesKey(
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices']['$get']
  >,
) {
  return [
    'apis',
    '/apis/discovery.k8s.io/v1/watch/namespaces/:namespace/endpointslices',
    args,
  ] as const
}

export function useGetApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslices<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices']['$get']
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
        ? getGetApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesKey(args)
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
                (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices']['$get']
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
          client.apis['discovery.k8s.io'].v1.watch.namespaces[':namespace'].endpointslices.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslices<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices']['$get']
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
        ? getGetApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesKey(args)
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
                (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices']['$get']
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
          client.apis['discovery.k8s.io'].v1.watch.namespaces[':namespace'].endpointslices.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesNameKey(
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/discovery.k8s.io/v1/watch/namespaces/:namespace/endpointslices/:name',
    args,
  ] as const
}

export function useGetApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices'][':name']['$get']
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
        ? getGetApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesNameKey(args)
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
                (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices'][':name']['$get']
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
          client.apis['discovery.k8s.io'].v1.watch.namespaces[':namespace'].endpointslices[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices'][':name']['$get']
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
        ? getGetApisDiscoveryK8sIoV1WatchNamespacesNamespaceEndpointslicesNameKey(args)
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
                (typeof client.apis)['discovery.k8s.io']['v1']['watch']['namespaces'][':namespace']['endpointslices'][':name']['$get']
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
          client.apis['discovery.k8s.io'].v1.watch.namespaces[':namespace'].endpointslices[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
