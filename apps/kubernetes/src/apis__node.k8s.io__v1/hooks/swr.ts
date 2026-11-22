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

export function getGetApisNodeK8sIoV1IndexKey() {
  return ['apis', '/apis/node.k8s.io/v1/'] as const
}

export function useGetApisNodeK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['node.k8s.io']['v1']['index']['$get']>>
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
        ? getGetApisNodeK8sIoV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['node.k8s.io']['v1']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis['node.k8s.io'].v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNodeK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['node.k8s.io']['v1']['index']['$get']>>
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
        ? getGetApisNodeK8sIoV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['node.k8s.io']['v1']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis['node.k8s.io'].v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisNodeK8sIoV1RuntimeclassesKey(
  args: InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$get']>,
) {
  return ['apis', '/apis/node.k8s.io/v1/runtimeclasses', args] as const
}

export function useGetApisNodeK8sIoV1Runtimeclasses<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisNodeK8sIoV1RuntimeclassesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['node.k8s.io'].v1.runtimeclasses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNodeK8sIoV1Runtimeclasses<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisNodeK8sIoV1RuntimeclassesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['node.k8s.io'].v1.runtimeclasses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApisNodeK8sIoV1RuntimeclassesKey() {
  return ['apis', '/apis/node.k8s.io/v1/runtimeclasses', 'POST'] as const
}

export function usePostApisNodeK8sIoV1Runtimeclasses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisNodeK8sIoV1RuntimeclassesKey()
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
            (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$post']
          >
        },
      ) => parseResponse(client.apis['node.k8s.io'].v1.runtimeclasses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisNodeK8sIoV1RuntimeclassesKey() {
  return ['apis', '/apis/node.k8s.io/v1/runtimeclasses', 'DELETE'] as const
}

export function useDeleteApisNodeK8sIoV1Runtimeclasses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisNodeK8sIoV1RuntimeclassesKey()
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
            (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$delete']
          >
        },
      ) => parseResponse(client.apis['node.k8s.io'].v1.runtimeclasses.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApisNodeK8sIoV1RuntimeclassesNameKey(
  args: InferRequestType<
    (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$get']
  >,
) {
  return ['apis', '/apis/node.k8s.io/v1/runtimeclasses/:name', args] as const
}

export function useGetApisNodeK8sIoV1RuntimeclassesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$get']
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
        ? getGetApisNodeK8sIoV1RuntimeclassesNameKey(args)
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
                (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$get']
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
          client.apis['node.k8s.io'].v1.runtimeclasses[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNodeK8sIoV1RuntimeclassesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$get']
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
        ? getGetApisNodeK8sIoV1RuntimeclassesNameKey(args)
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
                (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$get']
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
          client.apis['node.k8s.io'].v1.runtimeclasses[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisNodeK8sIoV1RuntimeclassesNameKey() {
  return ['apis', '/apis/node.k8s.io/v1/runtimeclasses/:name', 'PUT'] as const
}

export function usePutApisNodeK8sIoV1RuntimeclassesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisNodeK8sIoV1RuntimeclassesNameKey()
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
            (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['node.k8s.io'].v1.runtimeclasses[':name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisNodeK8sIoV1RuntimeclassesNameKey() {
  return ['apis', '/apis/node.k8s.io/v1/runtimeclasses/:name', 'DELETE'] as const
}

export function useDeleteApisNodeK8sIoV1RuntimeclassesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisNodeK8sIoV1RuntimeclassesNameKey()
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
            (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['node.k8s.io'].v1.runtimeclasses[':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisNodeK8sIoV1RuntimeclassesNameKey() {
  return ['apis', '/apis/node.k8s.io/v1/runtimeclasses/:name', 'PATCH'] as const
}

export function usePatchApisNodeK8sIoV1RuntimeclassesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisNodeK8sIoV1RuntimeclassesNameKey()
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
            (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['node.k8s.io'].v1.runtimeclasses[':name'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisNodeK8sIoV1WatchRuntimeclassesKey(
  args: InferRequestType<
    (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses']['$get']
  >,
) {
  return ['apis', '/apis/node.k8s.io/v1/watch/runtimeclasses', args] as const
}

export function useGetApisNodeK8sIoV1WatchRuntimeclasses<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses']['$get']
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
        ? getGetApisNodeK8sIoV1WatchRuntimeclassesKey(args)
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
                (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['node.k8s.io'].v1.watch.runtimeclasses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNodeK8sIoV1WatchRuntimeclasses<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses']['$get']
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
        ? getGetApisNodeK8sIoV1WatchRuntimeclassesKey(args)
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
                (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['node.k8s.io'].v1.watch.runtimeclasses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisNodeK8sIoV1WatchRuntimeclassesNameKey(
  args: InferRequestType<
    (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses'][':name']['$get']
  >,
) {
  return ['apis', '/apis/node.k8s.io/v1/watch/runtimeclasses/:name', args] as const
}

export function useGetApisNodeK8sIoV1WatchRuntimeclassesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses'][':name']['$get']
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
        ? getGetApisNodeK8sIoV1WatchRuntimeclassesNameKey(args)
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
                (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses'][':name']['$get']
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
          client.apis['node.k8s.io'].v1.watch.runtimeclasses[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNodeK8sIoV1WatchRuntimeclassesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses'][':name']['$get']
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
        ? getGetApisNodeK8sIoV1WatchRuntimeclassesNameKey(args)
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
                (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses'][':name']['$get']
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
          client.apis['node.k8s.io'].v1.watch.runtimeclasses[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
