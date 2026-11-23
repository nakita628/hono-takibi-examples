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

export function getGetApisStorageK8sIoV1IndexKey() {
  return ['apis', '/apis/storage.k8s.io/v1/'] as const
}

export function useGetApisStorageK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['index']['$get']>>
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
        ? getGetApisStorageK8sIoV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['storage.k8s.io'].v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['index']['$get']>>
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
        ? getGetApisStorageK8sIoV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['storage.k8s.io'].v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisStorageK8sIoV1CsidriversKey(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$get']>,
) {
  return ['apis', '/apis/storage.k8s.io/v1/csidrivers', args] as const
}

export function useGetApisStorageK8sIoV1Csidrivers<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisStorageK8sIoV1CsidriversKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['storage.k8s.io'].v1.csidrivers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1Csidrivers<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisStorageK8sIoV1CsidriversKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['storage.k8s.io'].v1.csidrivers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApisStorageK8sIoV1CsidriversKey() {
  return ['apis', '/apis/storage.k8s.io/v1/csidrivers', 'POST'] as const
}

export function usePostApisStorageK8sIoV1Csidrivers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisStorageK8sIoV1CsidriversKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$post']>
        },
      ) => parseResponse(client.apis['storage.k8s.io'].v1.csidrivers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisStorageK8sIoV1CsidriversKey() {
  return ['apis', '/apis/storage.k8s.io/v1/csidrivers', 'DELETE'] as const
}

export function useDeleteApisStorageK8sIoV1Csidrivers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisStorageK8sIoV1CsidriversKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['csidrivers']['$delete']
          >
        },
      ) => parseResponse(client.apis['storage.k8s.io'].v1.csidrivers.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApisStorageK8sIoV1CsidriversNameKey(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$get']
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/csidrivers/:name', args] as const
}

export function useGetApisStorageK8sIoV1CsidriversName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$get']
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
        ? getGetApisStorageK8sIoV1CsidriversNameKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$get']
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
          client.apis['storage.k8s.io'].v1.csidrivers[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1CsidriversName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$get']
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
        ? getGetApisStorageK8sIoV1CsidriversNameKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$get']
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
          client.apis['storage.k8s.io'].v1.csidrivers[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisStorageK8sIoV1CsidriversNameKey() {
  return ['apis', '/apis/storage.k8s.io/v1/csidrivers/:name', 'PUT'] as const
}

export function usePutApisStorageK8sIoV1CsidriversName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisStorageK8sIoV1CsidriversNameKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['storage.k8s.io'].v1.csidrivers[':name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisStorageK8sIoV1CsidriversNameKey() {
  return ['apis', '/apis/storage.k8s.io/v1/csidrivers/:name', 'DELETE'] as const
}

export function useDeleteApisStorageK8sIoV1CsidriversName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisStorageK8sIoV1CsidriversNameKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['storage.k8s.io'].v1.csidrivers[':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisStorageK8sIoV1CsidriversNameKey() {
  return ['apis', '/apis/storage.k8s.io/v1/csidrivers/:name', 'PATCH'] as const
}

export function usePatchApisStorageK8sIoV1CsidriversName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisStorageK8sIoV1CsidriversNameKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['csidrivers'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['storage.k8s.io'].v1.csidrivers[':name'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisStorageK8sIoV1CsinodesKey(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$get']>,
) {
  return ['apis', '/apis/storage.k8s.io/v1/csinodes', args] as const
}

export function useGetApisStorageK8sIoV1Csinodes<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisStorageK8sIoV1CsinodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['storage.k8s.io'].v1.csinodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1Csinodes<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisStorageK8sIoV1CsinodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['storage.k8s.io'].v1.csinodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApisStorageK8sIoV1CsinodesKey() {
  return ['apis', '/apis/storage.k8s.io/v1/csinodes', 'POST'] as const
}

export function usePostApisStorageK8sIoV1Csinodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisStorageK8sIoV1CsinodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$post']>
        },
      ) => parseResponse(client.apis['storage.k8s.io'].v1.csinodes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisStorageK8sIoV1CsinodesKey() {
  return ['apis', '/apis/storage.k8s.io/v1/csinodes', 'DELETE'] as const
}

export function useDeleteApisStorageK8sIoV1Csinodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisStorageK8sIoV1CsinodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes']['$delete']>
        },
      ) => parseResponse(client.apis['storage.k8s.io'].v1.csinodes.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApisStorageK8sIoV1CsinodesNameKey(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$get']>,
) {
  return ['apis', '/apis/storage.k8s.io/v1/csinodes/:name', args] as const
}

export function useGetApisStorageK8sIoV1CsinodesName<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$get']>
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
        ? getGetApisStorageK8sIoV1CsinodesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['storage.k8s.io'].v1.csinodes[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1CsinodesName<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$get']>
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
        ? getGetApisStorageK8sIoV1CsinodesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['storage.k8s.io'].v1.csinodes[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApisStorageK8sIoV1CsinodesNameKey() {
  return ['apis', '/apis/storage.k8s.io/v1/csinodes/:name', 'PUT'] as const
}

export function usePutApisStorageK8sIoV1CsinodesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisStorageK8sIoV1CsinodesNameKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$put']
          >
        },
      ) =>
        parseResponse(client.apis['storage.k8s.io'].v1.csinodes[':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisStorageK8sIoV1CsinodesNameKey() {
  return ['apis', '/apis/storage.k8s.io/v1/csinodes/:name', 'DELETE'] as const
}

export function useDeleteApisStorageK8sIoV1CsinodesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisStorageK8sIoV1CsinodesNameKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['storage.k8s.io'].v1.csinodes[':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisStorageK8sIoV1CsinodesNameKey() {
  return ['apis', '/apis/storage.k8s.io/v1/csinodes/:name', 'PATCH'] as const
}

export function usePatchApisStorageK8sIoV1CsinodesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisStorageK8sIoV1CsinodesNameKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['storage.k8s.io'].v1.csinodes[':name'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisStorageK8sIoV1CsinodesNameStatusKey(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$get']
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/csinodes/:name/status', args] as const
}

export function useGetApisStorageK8sIoV1CsinodesNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$get']
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
        ? getGetApisStorageK8sIoV1CsinodesNameStatusKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$get']
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
          client.apis['storage.k8s.io'].v1.csinodes[':name'].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1CsinodesNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$get']
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
        ? getGetApisStorageK8sIoV1CsinodesNameStatusKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$get']
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
          client.apis['storage.k8s.io'].v1.csinodes[':name'].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisStorageK8sIoV1CsinodesNameStatusKey() {
  return ['apis', '/apis/storage.k8s.io/v1/csinodes/:name/status', 'PUT'] as const
}

export function usePutApisStorageK8sIoV1CsinodesNameStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisStorageK8sIoV1CsinodesNameStatusKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['storage.k8s.io'].v1.csinodes[':name'].status.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisStorageK8sIoV1CsinodesNameStatusKey() {
  return ['apis', '/apis/storage.k8s.io/v1/csinodes/:name/status', 'PATCH'] as const
}

export function usePatchApisStorageK8sIoV1CsinodesNameStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisStorageK8sIoV1CsinodesNameStatusKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['csinodes'][':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['storage.k8s.io'].v1.csinodes[':name'].status.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisStorageK8sIoV1CsistoragecapacitiesKey(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['csistoragecapacities']['$get']
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/csistoragecapacities', args] as const
}

export function useGetApisStorageK8sIoV1Csistoragecapacities<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['csistoragecapacities']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['csistoragecapacities']['$get']
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
        ? getGetApisStorageK8sIoV1CsistoragecapacitiesKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['csistoragecapacities']['$get']
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
          client.apis['storage.k8s.io'].v1.csistoragecapacities.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1Csistoragecapacities<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['csistoragecapacities']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['csistoragecapacities']['$get']
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
        ? getGetApisStorageK8sIoV1CsistoragecapacitiesKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['csistoragecapacities']['$get']
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
          client.apis['storage.k8s.io'].v1.csistoragecapacities.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesKey(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$get']
  >,
) {
  return [
    'apis',
    '/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities',
    args,
  ] as const
}

export function useGetApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacities<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$get']
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
        ? getGetApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$get']
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
          client.apis['storage.k8s.io'].v1.namespaces[':namespace'].csistoragecapacities.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacities<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$get']
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
        ? getGetApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$get']
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
          client.apis['storage.k8s.io'].v1.namespaces[':namespace'].csistoragecapacities.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesKey() {
  return [
    'apis',
    '/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities',
    'POST',
  ] as const
}

export function usePostApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacities<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['storage.k8s.io'].v1.namespaces[':namespace'].csistoragecapacities.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesKey() {
  return [
    'apis',
    '/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities',
    'DELETE',
  ] as const
}

export function useDeleteApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacities<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['storage.k8s.io'].v1.namespaces[':namespace'].csistoragecapacities.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameKey(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name',
    args,
  ] as const
}

export function useGetApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
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
        ? getGetApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
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
          client.apis['storage.k8s.io'].v1.namespaces[':namespace'].csistoragecapacities[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
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
        ? getGetApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
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
          client.apis['storage.k8s.io'].v1.namespaces[':namespace'].csistoragecapacities[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameKey() {
  return [
    'apis',
    '/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name',
    'PUT',
  ] as const
}

export function usePutApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['storage.k8s.io'].v1.namespaces[':namespace'].csistoragecapacities[
            ':name'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameKey() {
  return [
    'apis',
    '/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name',
    'DELETE',
  ] as const
}

export function useDeleteApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['storage.k8s.io'].v1.namespaces[':namespace'].csistoragecapacities[
            ':name'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameKey() {
  return [
    'apis',
    '/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name',
    'PATCH',
  ] as const
}

export function usePatchApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['namespaces'][':namespace']['csistoragecapacities'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['storage.k8s.io'].v1.namespaces[':namespace'].csistoragecapacities[
            ':name'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisStorageK8sIoV1StorageclassesKey(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$get']>,
) {
  return ['apis', '/apis/storage.k8s.io/v1/storageclasses', args] as const
}

export function useGetApisStorageK8sIoV1Storageclasses<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$get']>
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
        ? getGetApisStorageK8sIoV1StorageclassesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['storage.k8s.io'].v1.storageclasses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1Storageclasses<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$get']>
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
        ? getGetApisStorageK8sIoV1StorageclassesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['storage.k8s.io'].v1.storageclasses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApisStorageK8sIoV1StorageclassesKey() {
  return ['apis', '/apis/storage.k8s.io/v1/storageclasses', 'POST'] as const
}

export function usePostApisStorageK8sIoV1Storageclasses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisStorageK8sIoV1StorageclassesKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$post']
          >
        },
      ) => parseResponse(client.apis['storage.k8s.io'].v1.storageclasses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisStorageK8sIoV1StorageclassesKey() {
  return ['apis', '/apis/storage.k8s.io/v1/storageclasses', 'DELETE'] as const
}

export function useDeleteApisStorageK8sIoV1Storageclasses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisStorageK8sIoV1StorageclassesKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['storageclasses']['$delete']
          >
        },
      ) =>
        parseResponse(client.apis['storage.k8s.io'].v1.storageclasses.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApisStorageK8sIoV1StorageclassesNameKey(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$get']
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/storageclasses/:name', args] as const
}

export function useGetApisStorageK8sIoV1StorageclassesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$get']
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
        ? getGetApisStorageK8sIoV1StorageclassesNameKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$get']
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
          client.apis['storage.k8s.io'].v1.storageclasses[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1StorageclassesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$get']
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
        ? getGetApisStorageK8sIoV1StorageclassesNameKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$get']
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
          client.apis['storage.k8s.io'].v1.storageclasses[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisStorageK8sIoV1StorageclassesNameKey() {
  return ['apis', '/apis/storage.k8s.io/v1/storageclasses/:name', 'PUT'] as const
}

export function usePutApisStorageK8sIoV1StorageclassesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisStorageK8sIoV1StorageclassesNameKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['storage.k8s.io'].v1.storageclasses[':name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisStorageK8sIoV1StorageclassesNameKey() {
  return ['apis', '/apis/storage.k8s.io/v1/storageclasses/:name', 'DELETE'] as const
}

export function useDeleteApisStorageK8sIoV1StorageclassesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisStorageK8sIoV1StorageclassesNameKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['storage.k8s.io'].v1.storageclasses[':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisStorageK8sIoV1StorageclassesNameKey() {
  return ['apis', '/apis/storage.k8s.io/v1/storageclasses/:name', 'PATCH'] as const
}

export function usePatchApisStorageK8sIoV1StorageclassesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisStorageK8sIoV1StorageclassesNameKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['storageclasses'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['storage.k8s.io'].v1.storageclasses[':name'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisStorageK8sIoV1VolumeattachmentsKey(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$get']>,
) {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattachments', args] as const
}

export function useGetApisStorageK8sIoV1Volumeattachments<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$get']>
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
        ? getGetApisStorageK8sIoV1VolumeattachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['storage.k8s.io'].v1.volumeattachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1Volumeattachments<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$get']>
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
        ? getGetApisStorageK8sIoV1VolumeattachmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['storage.k8s.io'].v1.volumeattachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApisStorageK8sIoV1VolumeattachmentsKey() {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattachments', 'POST'] as const
}

export function usePostApisStorageK8sIoV1Volumeattachments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisStorageK8sIoV1VolumeattachmentsKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$post']
          >
        },
      ) =>
        parseResponse(client.apis['storage.k8s.io'].v1.volumeattachments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisStorageK8sIoV1VolumeattachmentsKey() {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattachments', 'DELETE'] as const
}

export function useDeleteApisStorageK8sIoV1Volumeattachments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisStorageK8sIoV1VolumeattachmentsKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['storage.k8s.io'].v1.volumeattachments.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisStorageK8sIoV1VolumeattachmentsNameKey(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$get']
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattachments/:name', args] as const
}

export function useGetApisStorageK8sIoV1VolumeattachmentsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$get']
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
        ? getGetApisStorageK8sIoV1VolumeattachmentsNameKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$get']
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
          client.apis['storage.k8s.io'].v1.volumeattachments[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1VolumeattachmentsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$get']
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
        ? getGetApisStorageK8sIoV1VolumeattachmentsNameKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$get']
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
          client.apis['storage.k8s.io'].v1.volumeattachments[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisStorageK8sIoV1VolumeattachmentsNameKey() {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattachments/:name', 'PUT'] as const
}

export function usePutApisStorageK8sIoV1VolumeattachmentsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisStorageK8sIoV1VolumeattachmentsNameKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['storage.k8s.io'].v1.volumeattachments[':name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisStorageK8sIoV1VolumeattachmentsNameKey() {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattachments/:name', 'DELETE'] as const
}

export function useDeleteApisStorageK8sIoV1VolumeattachmentsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisStorageK8sIoV1VolumeattachmentsNameKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['storage.k8s.io'].v1.volumeattachments[':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisStorageK8sIoV1VolumeattachmentsNameKey() {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattachments/:name', 'PATCH'] as const
}

export function usePatchApisStorageK8sIoV1VolumeattachmentsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisStorageK8sIoV1VolumeattachmentsNameKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['storage.k8s.io'].v1.volumeattachments[':name'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisStorageK8sIoV1VolumeattachmentsNameStatusKey(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$get']
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattachments/:name/status', args] as const
}

export function useGetApisStorageK8sIoV1VolumeattachmentsNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$get']
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
        ? getGetApisStorageK8sIoV1VolumeattachmentsNameStatusKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$get']
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
          client.apis['storage.k8s.io'].v1.volumeattachments[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1VolumeattachmentsNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$get']
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
        ? getGetApisStorageK8sIoV1VolumeattachmentsNameStatusKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$get']
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
          client.apis['storage.k8s.io'].v1.volumeattachments[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisStorageK8sIoV1VolumeattachmentsNameStatusKey() {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattachments/:name/status', 'PUT'] as const
}

export function usePutApisStorageK8sIoV1VolumeattachmentsNameStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisStorageK8sIoV1VolumeattachmentsNameStatusKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['storage.k8s.io'].v1.volumeattachments[':name'].status.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisStorageK8sIoV1VolumeattachmentsNameStatusKey() {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattachments/:name/status', 'PATCH'] as const
}

export function usePatchApisStorageK8sIoV1VolumeattachmentsNameStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisStorageK8sIoV1VolumeattachmentsNameStatusKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['volumeattachments'][':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['storage.k8s.io'].v1.volumeattachments[':name'].status.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisStorageK8sIoV1VolumeattributesclassesKey(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$get']
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattributesclasses', args] as const
}

export function useGetApisStorageK8sIoV1Volumeattributesclasses<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$get']
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
        ? getGetApisStorageK8sIoV1VolumeattributesclassesKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$get']
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
          client.apis['storage.k8s.io'].v1.volumeattributesclasses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1Volumeattributesclasses<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$get']
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
        ? getGetApisStorageK8sIoV1VolumeattributesclassesKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$get']
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
          client.apis['storage.k8s.io'].v1.volumeattributesclasses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisStorageK8sIoV1VolumeattributesclassesKey() {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattributesclasses', 'POST'] as const
}

export function usePostApisStorageK8sIoV1Volumeattributesclasses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisStorageK8sIoV1VolumeattributesclassesKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['storage.k8s.io'].v1.volumeattributesclasses.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisStorageK8sIoV1VolumeattributesclassesKey() {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattributesclasses', 'DELETE'] as const
}

export function useDeleteApisStorageK8sIoV1Volumeattributesclasses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisStorageK8sIoV1VolumeattributesclassesKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['storage.k8s.io'].v1.volumeattributesclasses.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisStorageK8sIoV1VolumeattributesclassesNameKey(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$get']
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattributesclasses/:name', args] as const
}

export function useGetApisStorageK8sIoV1VolumeattributesclassesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$get']
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
        ? getGetApisStorageK8sIoV1VolumeattributesclassesNameKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$get']
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
          client.apis['storage.k8s.io'].v1.volumeattributesclasses[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1VolumeattributesclassesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$get']
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
        ? getGetApisStorageK8sIoV1VolumeattributesclassesNameKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$get']
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
          client.apis['storage.k8s.io'].v1.volumeattributesclasses[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisStorageK8sIoV1VolumeattributesclassesNameKey() {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattributesclasses/:name', 'PUT'] as const
}

export function usePutApisStorageK8sIoV1VolumeattributesclassesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisStorageK8sIoV1VolumeattributesclassesNameKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['storage.k8s.io'].v1.volumeattributesclasses[':name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisStorageK8sIoV1VolumeattributesclassesNameKey() {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattributesclasses/:name', 'DELETE'] as const
}

export function useDeleteApisStorageK8sIoV1VolumeattributesclassesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisStorageK8sIoV1VolumeattributesclassesNameKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['storage.k8s.io'].v1.volumeattributesclasses[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisStorageK8sIoV1VolumeattributesclassesNameKey() {
  return ['apis', '/apis/storage.k8s.io/v1/volumeattributesclasses/:name', 'PATCH'] as const
}

export function usePatchApisStorageK8sIoV1VolumeattributesclassesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisStorageK8sIoV1VolumeattributesclassesNameKey()
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
            (typeof client.apis)['storage.k8s.io']['v1']['volumeattributesclasses'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['storage.k8s.io'].v1.volumeattributesclasses[':name'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisStorageK8sIoV1WatchCsidriversKey(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers']['$get']
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/watch/csidrivers', args] as const
}

export function useGetApisStorageK8sIoV1WatchCsidrivers<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers']['$get']
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
        ? getGetApisStorageK8sIoV1WatchCsidriversKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['storage.k8s.io'].v1.watch.csidrivers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1WatchCsidrivers<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers']['$get']
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
        ? getGetApisStorageK8sIoV1WatchCsidriversKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['storage.k8s.io'].v1.watch.csidrivers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisStorageK8sIoV1WatchCsidriversNameKey(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers'][':name']['$get']
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/watch/csidrivers/:name', args] as const
}

export function useGetApisStorageK8sIoV1WatchCsidriversName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers'][':name']['$get']
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
        ? getGetApisStorageK8sIoV1WatchCsidriversNameKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers'][':name']['$get']
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
          client.apis['storage.k8s.io'].v1.watch.csidrivers[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1WatchCsidriversName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers'][':name']['$get']
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
        ? getGetApisStorageK8sIoV1WatchCsidriversNameKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['csidrivers'][':name']['$get']
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
          client.apis['storage.k8s.io'].v1.watch.csidrivers[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisStorageK8sIoV1WatchCsinodesKey(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes']['$get']>,
) {
  return ['apis', '/apis/storage.k8s.io/v1/watch/csinodes', args] as const
}

export function useGetApisStorageK8sIoV1WatchCsinodes<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes']['$get']>
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
        ? getGetApisStorageK8sIoV1WatchCsinodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['storage.k8s.io'].v1.watch.csinodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1WatchCsinodes<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes']['$get']>
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
        ? getGetApisStorageK8sIoV1WatchCsinodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['storage.k8s.io'].v1.watch.csinodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisStorageK8sIoV1WatchCsinodesNameKey(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes'][':name']['$get']
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/watch/csinodes/:name', args] as const
}

export function useGetApisStorageK8sIoV1WatchCsinodesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes'][':name']['$get']
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
        ? getGetApisStorageK8sIoV1WatchCsinodesNameKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes'][':name']['$get']
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
          client.apis['storage.k8s.io'].v1.watch.csinodes[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1WatchCsinodesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes'][':name']['$get']
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
        ? getGetApisStorageK8sIoV1WatchCsinodesNameKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['csinodes'][':name']['$get']
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
          client.apis['storage.k8s.io'].v1.watch.csinodes[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisStorageK8sIoV1WatchCsistoragecapacitiesKey(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['csistoragecapacities']['$get']
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/watch/csistoragecapacities', args] as const
}

export function useGetApisStorageK8sIoV1WatchCsistoragecapacities<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['csistoragecapacities']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['csistoragecapacities']['$get']
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
        ? getGetApisStorageK8sIoV1WatchCsistoragecapacitiesKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['csistoragecapacities']['$get']
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
          client.apis['storage.k8s.io'].v1.watch.csistoragecapacities.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1WatchCsistoragecapacities<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['csistoragecapacities']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['csistoragecapacities']['$get']
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
        ? getGetApisStorageK8sIoV1WatchCsistoragecapacitiesKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['csistoragecapacities']['$get']
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
          client.apis['storage.k8s.io'].v1.watch.csistoragecapacities.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacitiesKey(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities']['$get']
  >,
) {
  return [
    'apis',
    '/apis/storage.k8s.io/v1/watch/namespaces/:namespace/csistoragecapacities',
    args,
  ] as const
}

export function useGetApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacities<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities']['$get']
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
        ? getGetApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacitiesKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities']['$get']
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
          client.apis['storage.k8s.io'].v1.watch.namespaces[':namespace'].csistoragecapacities.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacities<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities']['$get']
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
        ? getGetApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacitiesKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities']['$get']
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
          client.apis['storage.k8s.io'].v1.watch.namespaces[':namespace'].csistoragecapacities.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacitiesNameKey(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/storage.k8s.io/v1/watch/namespaces/:namespace/csistoragecapacities/:name',
    args,
  ] as const
}

export function useGetApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacitiesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
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
        ? getGetApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacitiesNameKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
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
          client.apis['storage.k8s.io'].v1.watch.namespaces[':namespace'].csistoragecapacities[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacitiesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
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
        ? getGetApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacitiesNameKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['namespaces'][':namespace']['csistoragecapacities'][':name']['$get']
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
          client.apis['storage.k8s.io'].v1.watch.namespaces[':namespace'].csistoragecapacities[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisStorageK8sIoV1WatchStorageclassesKey(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses']['$get']
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/watch/storageclasses', args] as const
}

export function useGetApisStorageK8sIoV1WatchStorageclasses<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses']['$get']
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
        ? getGetApisStorageK8sIoV1WatchStorageclassesKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses']['$get']
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
          client.apis['storage.k8s.io'].v1.watch.storageclasses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1WatchStorageclasses<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses']['$get']
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
        ? getGetApisStorageK8sIoV1WatchStorageclassesKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses']['$get']
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
          client.apis['storage.k8s.io'].v1.watch.storageclasses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisStorageK8sIoV1WatchStorageclassesNameKey(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses'][':name']['$get']
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/watch/storageclasses/:name', args] as const
}

export function useGetApisStorageK8sIoV1WatchStorageclassesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses'][':name']['$get']
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
        ? getGetApisStorageK8sIoV1WatchStorageclassesNameKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses'][':name']['$get']
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
          client.apis['storage.k8s.io'].v1.watch.storageclasses[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1WatchStorageclassesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses'][':name']['$get']
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
        ? getGetApisStorageK8sIoV1WatchStorageclassesNameKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['storageclasses'][':name']['$get']
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
          client.apis['storage.k8s.io'].v1.watch.storageclasses[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisStorageK8sIoV1WatchVolumeattachmentsKey(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments']['$get']
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/watch/volumeattachments', args] as const
}

export function useGetApisStorageK8sIoV1WatchVolumeattachments<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments']['$get']
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
        ? getGetApisStorageK8sIoV1WatchVolumeattachmentsKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments']['$get']
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
          client.apis['storage.k8s.io'].v1.watch.volumeattachments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1WatchVolumeattachments<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments']['$get']
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
        ? getGetApisStorageK8sIoV1WatchVolumeattachmentsKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments']['$get']
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
          client.apis['storage.k8s.io'].v1.watch.volumeattachments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisStorageK8sIoV1WatchVolumeattachmentsNameKey(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments'][':name']['$get']
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/watch/volumeattachments/:name', args] as const
}

export function useGetApisStorageK8sIoV1WatchVolumeattachmentsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments'][':name']['$get']
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
        ? getGetApisStorageK8sIoV1WatchVolumeattachmentsNameKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments'][':name']['$get']
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
          client.apis['storage.k8s.io'].v1.watch.volumeattachments[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1WatchVolumeattachmentsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments'][':name']['$get']
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
        ? getGetApisStorageK8sIoV1WatchVolumeattachmentsNameKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattachments'][':name']['$get']
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
          client.apis['storage.k8s.io'].v1.watch.volumeattachments[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisStorageK8sIoV1WatchVolumeattributesclassesKey(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses']['$get']
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/watch/volumeattributesclasses', args] as const
}

export function useGetApisStorageK8sIoV1WatchVolumeattributesclasses<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses']['$get']
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
        ? getGetApisStorageK8sIoV1WatchVolumeattributesclassesKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses']['$get']
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
          client.apis['storage.k8s.io'].v1.watch.volumeattributesclasses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1WatchVolumeattributesclasses<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses']['$get']
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
        ? getGetApisStorageK8sIoV1WatchVolumeattributesclassesKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses']['$get']
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
          client.apis['storage.k8s.io'].v1.watch.volumeattributesclasses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisStorageK8sIoV1WatchVolumeattributesclassesNameKey(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses'][':name']['$get']
  >,
) {
  return ['apis', '/apis/storage.k8s.io/v1/watch/volumeattributesclasses/:name', args] as const
}

export function useGetApisStorageK8sIoV1WatchVolumeattributesclassesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses'][':name']['$get']
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
        ? getGetApisStorageK8sIoV1WatchVolumeattributesclassesNameKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses'][':name']['$get']
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
          client.apis['storage.k8s.io'].v1.watch.volumeattributesclasses[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisStorageK8sIoV1WatchVolumeattributesclassesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses'][':name']['$get']
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
        ? getGetApisStorageK8sIoV1WatchVolumeattributesclassesNameKey(args)
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
                (typeof client.apis)['storage.k8s.io']['v1']['watch']['volumeattributesclasses'][':name']['$get']
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
          client.apis['storage.k8s.io'].v1.watch.volumeattributesclasses[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}
