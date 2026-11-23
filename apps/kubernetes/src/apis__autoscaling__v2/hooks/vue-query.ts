import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApisKey() {
  return ['apis'] as const
}

export function getApisAutoscalingV2IndexQueryKey() {
  return ['apis', '/apis/autoscaling/v2/'] as const
}

export function getApisAutoscalingV2IndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApisAutoscalingV2IndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.autoscaling.v2.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAutoscalingV2Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.autoscaling.v2.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apis.autoscaling.v2.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apis.autoscaling.v2.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApisAutoscalingV2IndexQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.apis.autoscaling.v2.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAutoscalingV2IndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApisAutoscalingV2IndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.autoscaling.v2.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisAutoscalingV2HorizontalpodautoscalersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.apis.autoscaling.v2.horizontalpodautoscalers.$get>
  >,
) {
  return ['apis', '/apis/autoscaling/v2/horizontalpodautoscalers', toValue(args)] as const
}

export function getApisAutoscalingV2HorizontalpodautoscalersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.apis.autoscaling.v2.horizontalpodautoscalers.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAutoscalingV2HorizontalpodautoscalersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.autoscaling.v2.horizontalpodautoscalers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAutoscalingV2Horizontalpodautoscalers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.apis.autoscaling.v2.horizontalpodautoscalers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.apis.autoscaling.v2.horizontalpodautoscalers.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apis.autoscaling.v2.horizontalpodautoscalers.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apis.autoscaling.v2.horizontalpodautoscalers.$get>>
              >
            >
          >,
          ReturnType<typeof getApisAutoscalingV2HorizontalpodautoscalersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.apis.autoscaling.v2.horizontalpodautoscalers.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAutoscalingV2HorizontalpodautoscalersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAutoscalingV2HorizontalpodautoscalersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.autoscaling.v2.horizontalpodautoscalers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers',
    toValue(args),
  ] as const
}

export function getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalers<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersMutationKey() {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers',
    'POST',
  ] as const
}

export function getPostApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$post']
      >,
    ) {
      return parseResponse(
        client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersMutationKey() {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers',
    'DELETE',
  ] as const
}

export function getDeleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name',
    toValue(args),
  ] as const
}

export function getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersName<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<
            typeof getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[
            ':name'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameMutationKey() {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name',
    'PUT',
  ] as const
}

export function getPutApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[':name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameMutationKey() {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[
          ':name'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameMutationKey() {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name',
    'PATCH',
  ] as const
}

export function getPatchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[
          ':name'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$patch']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status',
    toValue(args),
  ] as const
}

export function getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[
          ':name'
        ].status.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatus<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<
            typeof getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<
      typeof getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[
            ':name'
          ].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationKey() {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status',
    'PUT',
  ] as const
}

export function getPutApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[
          ':name'
        ].status.$put(args, options),
      )
    },
  })
}

export function usePutApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationKey() {
  return [
    'apis',
    '/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status',
    'PATCH',
  ] as const
}

export function getPatchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[
          ':name'
        ].status.$patch(args, options),
      )
    },
  })
}

export function usePatchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$patch']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApisAutoscalingV2WatchHorizontalpodautoscalersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.apis.autoscaling.v2.watch.horizontalpodautoscalers.$get>
  >,
) {
  return ['apis', '/apis/autoscaling/v2/watch/horizontalpodautoscalers', toValue(args)] as const
}

export function getApisAutoscalingV2WatchHorizontalpodautoscalersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.apis.autoscaling.v2.watch.horizontalpodautoscalers.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAutoscalingV2WatchHorizontalpodautoscalersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.autoscaling.v2.watch.horizontalpodautoscalers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAutoscalingV2WatchHorizontalpodautoscalers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.apis.autoscaling.v2.watch.horizontalpodautoscalers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.apis.autoscaling.v2.watch.horizontalpodautoscalers.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.apis.autoscaling.v2.watch.horizontalpodautoscalers.$get>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.apis.autoscaling.v2.watch.horizontalpodautoscalers.$get>
                >
              >
            >
          >,
          ReturnType<typeof getApisAutoscalingV2WatchHorizontalpodautoscalersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.apis.autoscaling.v2.watch.horizontalpodautoscalers.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAutoscalingV2WatchHorizontalpodautoscalersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAutoscalingV2WatchHorizontalpodautoscalersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.autoscaling.v2.watch.horizontalpodautoscalers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v2/watch/namespaces/:namespace/horizontalpodautoscalers',
    toValue(args),
  ] as const
}

export function getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.autoscaling.v2.watch.namespaces[':namespace'].horizontalpodautoscalers.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalers<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<
            typeof getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.autoscaling.v2.watch.namespaces[':namespace'].horizontalpodautoscalers.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v2/watch/namespaces/:namespace/horizontalpodautoscalers/:name',
    toValue(args),
  ] as const
}

export function getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.autoscaling.v2.watch.namespaces[':namespace'].horizontalpodautoscalers[
          ':name'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersName<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<
            typeof getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersNameQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<
      typeof getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersNameQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.autoscaling.v2.watch.namespaces[':namespace'].horizontalpodautoscalers[
            ':name'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}
