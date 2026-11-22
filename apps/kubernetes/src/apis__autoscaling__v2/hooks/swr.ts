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

export function getGetApisAutoscalingV2IndexKey() {
  return ['apis', '/apis/autoscaling/v2/'] as const
}

export function useGetApisAutoscalingV2Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.apis.autoscaling.v2.index.$get>>>
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
        ? getGetApisAutoscalingV2IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.autoscaling.v2.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.autoscaling.v2.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAutoscalingV2Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.apis.autoscaling.v2.index.$get>>>
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
        ? getGetApisAutoscalingV2IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.autoscaling.v2.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.autoscaling.v2.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisAutoscalingV2HorizontalpodautoscalersKey(
  args: InferRequestType<typeof client.apis.autoscaling.v2.horizontalpodautoscalers.$get>,
) {
  return ['apis', '/apis/autoscaling/v2/horizontalpodautoscalers', args] as const
}

export function useGetApisAutoscalingV2Horizontalpodautoscalers<TError = unknown>(
  args: InferRequestType<typeof client.apis.autoscaling.v2.horizontalpodautoscalers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.autoscaling.v2.horizontalpodautoscalers.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAutoscalingV2HorizontalpodautoscalersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.autoscaling.v2.horizontalpodautoscalers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis.autoscaling.v2.horizontalpodautoscalers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAutoscalingV2Horizontalpodautoscalers<TError = unknown>(
  args: InferRequestType<typeof client.apis.autoscaling.v2.horizontalpodautoscalers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.autoscaling.v2.horizontalpodautoscalers.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAutoscalingV2HorizontalpodautoscalersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.autoscaling.v2.horizontalpodautoscalers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis.autoscaling.v2.horizontalpodautoscalers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersKey(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers',
    args,
  ] as const
}

export function useGetApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
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
        ? getGetApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersKey(args)
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
                (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
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
          client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
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
        ? getGetApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersKey(args)
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
                (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
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
          client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersKey() {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers',
    'POST',
  ] as const
}

export function usePostApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersKey()
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
            (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersKey() {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers',
    'DELETE',
  ] as const
}

export function useDeleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersKey()
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
            (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameKey(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name',
    args,
  ] as const
}

export function useGetApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
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
        ? getGetApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameKey(args)
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
                (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
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
          client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
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
        ? getGetApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameKey(args)
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
                (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
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
          client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameKey() {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name',
    'PUT',
  ] as const
}

export function usePutApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameKey()
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
            (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[
            ':name'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameKey() {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name',
    'DELETE',
  ] as const
}

export function useDeleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameKey()
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
            (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[
            ':name'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameKey() {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name',
    'PATCH',
  ] as const
}

export function usePatchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameKey()
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
            (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[
            ':name'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusKey(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status',
    args,
  ] as const
}

export function useGetApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
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
        ? getGetApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusKey(args)
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
                (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
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
          client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[
            ':name'
          ].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
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
        ? getGetApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusKey(args)
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
                (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
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
          client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[
            ':name'
          ].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusKey() {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status',
    'PUT',
  ] as const
}

export function usePutApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusKey()
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
            (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[
            ':name'
          ].status.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusKey() {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status',
    'PATCH',
  ] as const
}

export function usePatchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusKey()
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
            (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[
            ':name'
          ].status.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAutoscalingV2WatchHorizontalpodautoscalersKey(
  args: InferRequestType<typeof client.apis.autoscaling.v2.watch.horizontalpodautoscalers.$get>,
) {
  return ['apis', '/apis/autoscaling/v2/watch/horizontalpodautoscalers', args] as const
}

export function useGetApisAutoscalingV2WatchHorizontalpodautoscalers<TError = unknown>(
  args: InferRequestType<typeof client.apis.autoscaling.v2.watch.horizontalpodautoscalers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.apis.autoscaling.v2.watch.horizontalpodautoscalers.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAutoscalingV2WatchHorizontalpodautoscalersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.apis.autoscaling.v2.watch.horizontalpodautoscalers.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis.autoscaling.v2.watch.horizontalpodautoscalers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAutoscalingV2WatchHorizontalpodautoscalers<TError = unknown>(
  args: InferRequestType<typeof client.apis.autoscaling.v2.watch.horizontalpodautoscalers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.apis.autoscaling.v2.watch.horizontalpodautoscalers.$get>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisAutoscalingV2WatchHorizontalpodautoscalersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.apis.autoscaling.v2.watch.horizontalpodautoscalers.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis.autoscaling.v2.watch.horizontalpodautoscalers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersKey(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v2/watch/namespaces/:namespace/horizontalpodautoscalers',
    args,
  ] as const
}

export function useGetApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
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
        ? getGetApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersKey(args)
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
                (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
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
          client.apis.autoscaling.v2.watch.namespaces[':namespace'].horizontalpodautoscalers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
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
        ? getGetApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersKey(args)
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
                (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
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
          client.apis.autoscaling.v2.watch.namespaces[':namespace'].horizontalpodautoscalers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersNameKey(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v2/watch/namespaces/:namespace/horizontalpodautoscalers/:name',
    args,
  ] as const
}

export function useGetApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
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
        ? getGetApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersNameKey(args)
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
                (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
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
          client.apis.autoscaling.v2.watch.namespaces[':namespace'].horizontalpodautoscalers[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
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
        ? getGetApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersNameKey(args)
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
                (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
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
          client.apis.autoscaling.v2.watch.namespaces[':namespace'].horizontalpodautoscalers[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
