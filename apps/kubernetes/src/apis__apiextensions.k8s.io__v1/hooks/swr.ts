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

export function getGetApisApiextensionsK8sIoV1IndexKey() {
  return ['apis', '/apis/apiextensions.k8s.io/v1/'] as const
}

export function useGetApisApiextensionsK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['apiextensions.k8s.io']['v1']['index']['$get']>>
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
        ? getGetApisApiextensionsK8sIoV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['apiextensions.k8s.io']['v1']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['apiextensions.k8s.io'].v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisApiextensionsK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['apiextensions.k8s.io']['v1']['index']['$get']>>
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
        ? getGetApisApiextensionsK8sIoV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['apiextensions.k8s.io']['v1']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['apiextensions.k8s.io'].v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisApiextensionsK8sIoV1CustomresourcedefinitionsKey(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$get']
  >,
) {
  return ['apis', '/apis/apiextensions.k8s.io/v1/customresourcedefinitions', args] as const
}

export function useGetApisApiextensionsK8sIoV1Customresourcedefinitions<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$get']
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
        ? getGetApisApiextensionsK8sIoV1CustomresourcedefinitionsKey(args)
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
                (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$get']
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
          client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisApiextensionsK8sIoV1Customresourcedefinitions<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$get']
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
        ? getGetApisApiextensionsK8sIoV1CustomresourcedefinitionsKey(args)
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
                (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$get']
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
          client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisApiextensionsK8sIoV1CustomresourcedefinitionsKey() {
  return ['apis', '/apis/apiextensions.k8s.io/v1/customresourcedefinitions', 'POST'] as const
}

export function usePostApisApiextensionsK8sIoV1Customresourcedefinitions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisApiextensionsK8sIoV1CustomresourcedefinitionsKey()
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
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisApiextensionsK8sIoV1CustomresourcedefinitionsKey() {
  return ['apis', '/apis/apiextensions.k8s.io/v1/customresourcedefinitions', 'DELETE'] as const
}

export function useDeleteApisApiextensionsK8sIoV1Customresourcedefinitions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisApiextensionsK8sIoV1CustomresourcedefinitionsKey()
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
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisApiextensionsK8sIoV1CustomresourcedefinitionsNameKey(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$get']
  >,
) {
  return ['apis', '/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name', args] as const
}

export function useGetApisApiextensionsK8sIoV1CustomresourcedefinitionsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$get']
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
        ? getGetApisApiextensionsK8sIoV1CustomresourcedefinitionsNameKey(args)
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
                (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$get']
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
          client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisApiextensionsK8sIoV1CustomresourcedefinitionsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$get']
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
        ? getGetApisApiextensionsK8sIoV1CustomresourcedefinitionsNameKey(args)
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
                (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$get']
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
          client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisApiextensionsK8sIoV1CustomresourcedefinitionsNameKey() {
  return ['apis', '/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name', 'PUT'] as const
}

export function usePutApisApiextensionsK8sIoV1CustomresourcedefinitionsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisApiextensionsK8sIoV1CustomresourcedefinitionsNameKey()
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
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisApiextensionsK8sIoV1CustomresourcedefinitionsNameKey() {
  return [
    'apis',
    '/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name',
    'DELETE',
  ] as const
}

export function useDeleteApisApiextensionsK8sIoV1CustomresourcedefinitionsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisApiextensionsK8sIoV1CustomresourcedefinitionsNameKey()
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
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameKey() {
  return ['apis', '/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name', 'PATCH'] as const
}

export function usePatchApisApiextensionsK8sIoV1CustomresourcedefinitionsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameKey()
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
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusKey(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$get']
  >,
) {
  return [
    'apis',
    '/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status',
    args,
  ] as const
}

export function useGetApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$get']
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
        ? getGetApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusKey(args)
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
                (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$get']
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
          client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$get']
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
        ? getGetApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusKey(args)
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
                (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$get']
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
          client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusKey() {
  return [
    'apis',
    '/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status',
    'PUT',
  ] as const
}

export function usePutApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusKey()
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
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].status.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusKey() {
  return [
    'apis',
    '/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status',
    'PATCH',
  ] as const
}

export function usePatchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApisApiextensionsK8sIoV1CustomresourcedefinitionsNameStatusKey()
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
            (typeof client.apis)['apiextensions.k8s.io']['v1']['customresourcedefinitions'][':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['apiextensions.k8s.io'].v1.customresourcedefinitions[':name'].status.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsKey(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions']['$get']
  >,
) {
  return ['apis', '/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions', args] as const
}

export function useGetApisApiextensionsK8sIoV1WatchCustomresourcedefinitions<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions']['$get']
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
        ? getGetApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsKey(args)
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
                (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions']['$get']
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
          client.apis['apiextensions.k8s.io'].v1.watch.customresourcedefinitions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisApiextensionsK8sIoV1WatchCustomresourcedefinitions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions']['$get']
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
        ? getGetApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsKey(args)
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
                (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions']['$get']
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
          client.apis['apiextensions.k8s.io'].v1.watch.customresourcedefinitions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsNameKey(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions/:name',
    args,
  ] as const
}

export function useGetApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions'][':name']['$get']
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
        ? getGetApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsNameKey(args)
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
                (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions'][':name']['$get']
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
          client.apis['apiextensions.k8s.io'].v1.watch.customresourcedefinitions[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions'][':name']['$get']
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
        ? getGetApisApiextensionsK8sIoV1WatchCustomresourcedefinitionsNameKey(args)
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
                (typeof client.apis)['apiextensions.k8s.io']['v1']['watch']['customresourcedefinitions'][':name']['$get']
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
          client.apis['apiextensions.k8s.io'].v1.watch.customresourcedefinitions[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}
