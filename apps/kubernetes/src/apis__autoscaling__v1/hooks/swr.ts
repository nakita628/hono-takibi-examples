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

export function getGetApisAutoscalingV1IndexKey() {
  return ['apis', '/apis/autoscaling/v1/'] as const
}

export function useGetApisAutoscalingV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.apis.autoscaling.v1.index.$get>>>
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
        ? getGetApisAutoscalingV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.autoscaling.v1.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.autoscaling.v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAutoscalingV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.apis.autoscaling.v1.index.$get>>>
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
        ? getGetApisAutoscalingV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.autoscaling.v1.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.autoscaling.v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisAutoscalingV1HorizontalpodautoscalersKey(
  args: InferRequestType<typeof client.apis.autoscaling.v1.horizontalpodautoscalers.$get>,
) {
  return ['apis', '/apis/autoscaling/v1/horizontalpodautoscalers', args] as const
}

export function useGetApisAutoscalingV1Horizontalpodautoscalers<TError = unknown>(
  args: InferRequestType<typeof client.apis.autoscaling.v1.horizontalpodautoscalers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.autoscaling.v1.horizontalpodautoscalers.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAutoscalingV1HorizontalpodautoscalersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.autoscaling.v1.horizontalpodautoscalers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis.autoscaling.v1.horizontalpodautoscalers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAutoscalingV1Horizontalpodautoscalers<TError = unknown>(
  args: InferRequestType<typeof client.apis.autoscaling.v1.horizontalpodautoscalers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.autoscaling.v1.horizontalpodautoscalers.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAutoscalingV1HorizontalpodautoscalersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.autoscaling.v1.horizontalpodautoscalers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis.autoscaling.v1.horizontalpodautoscalers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersKey(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers',
    args,
  ] as const
}

export function useGetApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
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
        ? getGetApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersKey(args)
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
                (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
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
          client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
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
        ? getGetApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersKey(args)
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
                (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
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
          client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersKey() {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers',
    'POST',
  ] as const
}

export function usePostApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersKey()
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
            (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersKey() {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers',
    'DELETE',
  ] as const
}

export function useDeleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersKey()
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
            (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameKey(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name',
    args,
  ] as const
}

export function useGetApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
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
        ? getGetApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameKey(args)
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
                (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
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
          client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
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
        ? getGetApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameKey(args)
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
                (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
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
          client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameKey() {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name',
    'PUT',
  ] as const
}

export function usePutApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameKey()
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
            (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[
            ':name'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameKey() {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name',
    'DELETE',
  ] as const
}

export function useDeleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameKey()
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
            (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[
            ':name'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameKey() {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name',
    'PATCH',
  ] as const
}

export function usePatchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameKey()
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
            (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[
            ':name'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusKey(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status',
    args,
  ] as const
}

export function useGetApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
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
        ? getGetApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusKey(args)
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
                (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
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
          client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[
            ':name'
          ].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
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
        ? getGetApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusKey(args)
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
                (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
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
          client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[
            ':name'
          ].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusKey() {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status',
    'PUT',
  ] as const
}

export function usePutApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusKey()
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
            (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[
            ':name'
          ].status.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusKey() {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status',
    'PATCH',
  ] as const
}

export function usePatchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusKey()
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
            (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[
            ':name'
          ].status.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAutoscalingV1WatchHorizontalpodautoscalersKey(
  args: InferRequestType<typeof client.apis.autoscaling.v1.watch.horizontalpodautoscalers.$get>,
) {
  return ['apis', '/apis/autoscaling/v1/watch/horizontalpodautoscalers', args] as const
}

export function useGetApisAutoscalingV1WatchHorizontalpodautoscalers<TError = unknown>(
  args: InferRequestType<typeof client.apis.autoscaling.v1.watch.horizontalpodautoscalers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.apis.autoscaling.v1.watch.horizontalpodautoscalers.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAutoscalingV1WatchHorizontalpodautoscalersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.apis.autoscaling.v1.watch.horizontalpodautoscalers.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis.autoscaling.v1.watch.horizontalpodautoscalers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAutoscalingV1WatchHorizontalpodautoscalers<TError = unknown>(
  args: InferRequestType<typeof client.apis.autoscaling.v1.watch.horizontalpodautoscalers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.apis.autoscaling.v1.watch.horizontalpodautoscalers.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAutoscalingV1WatchHorizontalpodautoscalersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.apis.autoscaling.v1.watch.horizontalpodautoscalers.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis.autoscaling.v1.watch.horizontalpodautoscalers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersKey(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v1/watch/namespaces/:namespace/horizontalpodautoscalers',
    args,
  ] as const
}

export function useGetApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
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
        ? getGetApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersKey(args)
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
                (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
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
          client.apis.autoscaling.v1.watch.namespaces[':namespace'].horizontalpodautoscalers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
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
        ? getGetApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersKey(args)
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
                (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
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
          client.apis.autoscaling.v1.watch.namespaces[':namespace'].horizontalpodautoscalers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersNameKey(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v1/watch/namespaces/:namespace/horizontalpodautoscalers/:name',
    args,
  ] as const
}

export function useGetApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
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
        ? getGetApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersNameKey(args)
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
                (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
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
          client.apis.autoscaling.v1.watch.namespaces[':namespace'].horizontalpodautoscalers[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
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
        ? getGetApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersNameKey(args)
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
                (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
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
          client.apis.autoscaling.v1.watch.namespaces[':namespace'].horizontalpodautoscalers[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
