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

export function getGetApisCoordinationK8sIoV1IndexKey() {
  return ['apis', '/apis/coordination.k8s.io/v1/'] as const
}

export function useGetApisCoordinationK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['coordination.k8s.io']['v1']['index']['$get']>>
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
        ? getGetApisCoordinationK8sIoV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['coordination.k8s.io']['v1']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['coordination.k8s.io'].v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisCoordinationK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['coordination.k8s.io']['v1']['index']['$get']>>
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
        ? getGetApisCoordinationK8sIoV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['coordination.k8s.io']['v1']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['coordination.k8s.io'].v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisCoordinationK8sIoV1LeasesKey(
  args: InferRequestType<(typeof client.apis)['coordination.k8s.io']['v1']['leases']['$get']>,
) {
  return ['apis', '/apis/coordination.k8s.io/v1/leases', args] as const
}

export function useGetApisCoordinationK8sIoV1Leases<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['coordination.k8s.io']['v1']['leases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['coordination.k8s.io']['v1']['leases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCoordinationK8sIoV1LeasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['coordination.k8s.io']['v1']['leases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['coordination.k8s.io'].v1.leases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisCoordinationK8sIoV1Leases<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['coordination.k8s.io']['v1']['leases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['coordination.k8s.io']['v1']['leases']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisCoordinationK8sIoV1LeasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['coordination.k8s.io']['v1']['leases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['coordination.k8s.io'].v1.leases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisCoordinationK8sIoV1NamespacesNamespaceLeasesKey(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$get']
  >,
) {
  return ['apis', '/apis/coordination.k8s.io/v1/namespaces/:namespace/leases', args] as const
}

export function useGetApisCoordinationK8sIoV1NamespacesNamespaceLeases<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$get']
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
        ? getGetApisCoordinationK8sIoV1NamespacesNamespaceLeasesKey(args)
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
                (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$get']
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
          client.apis['coordination.k8s.io'].v1.namespaces[':namespace'].leases.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisCoordinationK8sIoV1NamespacesNamespaceLeases<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$get']
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
        ? getGetApisCoordinationK8sIoV1NamespacesNamespaceLeasesKey(args)
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
                (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$get']
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
          client.apis['coordination.k8s.io'].v1.namespaces[':namespace'].leases.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisCoordinationK8sIoV1NamespacesNamespaceLeasesKey() {
  return ['apis', '/apis/coordination.k8s.io/v1/namespaces/:namespace/leases', 'POST'] as const
}

export function usePostApisCoordinationK8sIoV1NamespacesNamespaceLeases<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisCoordinationK8sIoV1NamespacesNamespaceLeasesKey()
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
            (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['coordination.k8s.io'].v1.namespaces[':namespace'].leases.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesKey() {
  return ['apis', '/apis/coordination.k8s.io/v1/namespaces/:namespace/leases', 'DELETE'] as const
}

export function useDeleteApisCoordinationK8sIoV1NamespacesNamespaceLeases<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesKey()
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
            (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['coordination.k8s.io'].v1.namespaces[':namespace'].leases.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameKey(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$get']
  >,
) {
  return ['apis', '/apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name', args] as const
}

export function useGetApisCoordinationK8sIoV1NamespacesNamespaceLeasesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$get']
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
        ? getGetApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameKey(args)
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
                (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$get']
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
          client.apis['coordination.k8s.io'].v1.namespaces[':namespace'].leases[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisCoordinationK8sIoV1NamespacesNamespaceLeasesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$get']
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
        ? getGetApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameKey(args)
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
                (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$get']
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
          client.apis['coordination.k8s.io'].v1.namespaces[':namespace'].leases[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameKey() {
  return ['apis', '/apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name', 'PUT'] as const
}

export function usePutApisCoordinationK8sIoV1NamespacesNamespaceLeasesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameKey()
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
            (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['coordination.k8s.io'].v1.namespaces[':namespace'].leases[':name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameKey() {
  return [
    'apis',
    '/apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name',
    'DELETE',
  ] as const
}

export function useDeleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameKey()
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
            (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['coordination.k8s.io'].v1.namespaces[':namespace'].leases[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameKey() {
  return [
    'apis',
    '/apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name',
    'PATCH',
  ] as const
}

export function usePatchApisCoordinationK8sIoV1NamespacesNamespaceLeasesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisCoordinationK8sIoV1NamespacesNamespaceLeasesNameKey()
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
            (typeof client.apis)['coordination.k8s.io']['v1']['namespaces'][':namespace']['leases'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['coordination.k8s.io'].v1.namespaces[':namespace'].leases[':name'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisCoordinationK8sIoV1WatchLeasesKey(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['watch']['leases']['$get']
  >,
) {
  return ['apis', '/apis/coordination.k8s.io/v1/watch/leases', args] as const
}

export function useGetApisCoordinationK8sIoV1WatchLeases<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['watch']['leases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['coordination.k8s.io']['v1']['watch']['leases']['$get']
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
        ? getGetApisCoordinationK8sIoV1WatchLeasesKey(args)
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
                (typeof client.apis)['coordination.k8s.io']['v1']['watch']['leases']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['coordination.k8s.io'].v1.watch.leases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisCoordinationK8sIoV1WatchLeases<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['watch']['leases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['coordination.k8s.io']['v1']['watch']['leases']['$get']
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
        ? getGetApisCoordinationK8sIoV1WatchLeasesKey(args)
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
                (typeof client.apis)['coordination.k8s.io']['v1']['watch']['leases']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['coordination.k8s.io'].v1.watch.leases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesKey(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases']['$get']
  >,
) {
  return ['apis', '/apis/coordination.k8s.io/v1/watch/namespaces/:namespace/leases', args] as const
}

export function useGetApisCoordinationK8sIoV1WatchNamespacesNamespaceLeases<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases']['$get']
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
        ? getGetApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesKey(args)
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
                (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases']['$get']
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
          client.apis['coordination.k8s.io'].v1.watch.namespaces[':namespace'].leases.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisCoordinationK8sIoV1WatchNamespacesNamespaceLeases<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases']['$get']
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
        ? getGetApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesKey(args)
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
                (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases']['$get']
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
          client.apis['coordination.k8s.io'].v1.watch.namespaces[':namespace'].leases.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesNameKey(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/coordination.k8s.io/v1/watch/namespaces/:namespace/leases/:name',
    args,
  ] as const
}

export function useGetApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases'][':name']['$get']
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
        ? getGetApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesNameKey(args)
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
                (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases'][':name']['$get']
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
          client.apis['coordination.k8s.io'].v1.watch.namespaces[':namespace'].leases[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases'][':name']['$get']
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
        ? getGetApisCoordinationK8sIoV1WatchNamespacesNamespaceLeasesNameKey(args)
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
                (typeof client.apis)['coordination.k8s.io']['v1']['watch']['namespaces'][':namespace']['leases'][':name']['$get']
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
          client.apis['coordination.k8s.io'].v1.watch.namespaces[':namespace'].leases[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}
