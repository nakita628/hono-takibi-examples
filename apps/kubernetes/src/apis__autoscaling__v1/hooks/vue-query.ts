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

export function getApisAutoscalingV1IndexQueryKey() {
  return ['apis', '/apis/autoscaling/v1/'] as const
}

export function getApisAutoscalingV1IndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApisAutoscalingV1IndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.autoscaling.v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAutoscalingV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apis.autoscaling.v1.index.$get>>>
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
                Awaited<ReturnType<typeof client.apis.autoscaling.v1.index.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apis.autoscaling.v1.index.$get>>
              >
            >
          >,
          ReturnType<typeof getApisAutoscalingV1IndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.apis.autoscaling.v1.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAutoscalingV1IndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApisAutoscalingV1IndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.autoscaling.v1.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisAutoscalingV1HorizontalpodautoscalersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.apis.autoscaling.v1.horizontalpodautoscalers.$get>
  >,
) {
  return ['apis', '/apis/autoscaling/v1/horizontalpodautoscalers', toValue(args)] as const
}

export function getApisAutoscalingV1HorizontalpodautoscalersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.apis.autoscaling.v1.horizontalpodautoscalers.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAutoscalingV1HorizontalpodautoscalersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.autoscaling.v1.horizontalpodautoscalers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAutoscalingV1Horizontalpodautoscalers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.apis.autoscaling.v1.horizontalpodautoscalers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.apis.autoscaling.v1.horizontalpodautoscalers.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apis.autoscaling.v1.horizontalpodautoscalers.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apis.autoscaling.v1.horizontalpodautoscalers.$get>>
              >
            >
          >,
          ReturnType<typeof getApisAutoscalingV1HorizontalpodautoscalersQueryKey>
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
          Awaited<ReturnType<typeof client.apis.autoscaling.v1.horizontalpodautoscalers.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAutoscalingV1HorizontalpodautoscalersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAutoscalingV1HorizontalpodautoscalersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.autoscaling.v1.horizontalpodautoscalers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers',
    toValue(args),
  ] as const
}

export function getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalers<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
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
                    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
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
                    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersQueryKey>
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
              (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersMutationKey() {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers',
    'POST',
  ] as const
}

export function getPostApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$post']
      >,
    ) {
      return parseResponse(
        client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalers<
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
                    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$post']
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
    getPostApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersMutationOptions<
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

export function getDeleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersMutationKey() {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers',
    'DELETE',
  ] as const
}

export function getDeleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalers<
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
                    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$delete']
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
    getDeleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersMutationOptions<
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

export function getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name',
    toValue(args),
  ] as const
}

export function getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[':name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersName<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
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
                    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
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
                    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameQueryKey
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
              (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[
            ':name'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameMutationKey() {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name',
    'PUT',
  ] as const
}

export function getPutApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[':name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersName<
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
                    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$put']
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
    getPutApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameMutationOptions<
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

export function getDeleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameMutationKey() {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name',
    'DELETE',
  ] as const
}

export function getDeleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[
          ':name'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersName<
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
                    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$delete']
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
    getDeleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameMutationOptions<
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

export function getPatchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameMutationKey() {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name',
    'PATCH',
  ] as const
}

export function getPatchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[
          ':name'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersName<
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
                    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$patch']
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
    getPatchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameMutationOptions<
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

export function getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status',
    toValue(args),
  ] as const
}

export function getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[
          ':name'
        ].status.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatus<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
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
                    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
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
                    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusQueryKey
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
              (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[
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

export function getPutApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationKey() {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status',
    'PUT',
  ] as const
}

export function getPutApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$put']
      >,
    ) {
      return parseResponse(
        client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[
          ':name'
        ].status.$put(args, options),
      )
    },
  })
}

export function usePutApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatus<
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
                    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$put']
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
    getPutApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationOptions<
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

export function getPatchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationKey() {
  return [
    'apis',
    '/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status',
    'PATCH',
  ] as const
}

export function getPatchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[
          ':name'
        ].status.$patch(args, options),
      )
    },
  })
}

export function usePatchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatus<
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
                    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$patch']
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
    getPatchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatusMutationOptions<
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

export function getApisAutoscalingV1WatchHorizontalpodautoscalersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.apis.autoscaling.v1.watch.horizontalpodautoscalers.$get>
  >,
) {
  return ['apis', '/apis/autoscaling/v1/watch/horizontalpodautoscalers', toValue(args)] as const
}

export function getApisAutoscalingV1WatchHorizontalpodautoscalersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.apis.autoscaling.v1.watch.horizontalpodautoscalers.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisAutoscalingV1WatchHorizontalpodautoscalersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.autoscaling.v1.watch.horizontalpodautoscalers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisAutoscalingV1WatchHorizontalpodautoscalers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.apis.autoscaling.v1.watch.horizontalpodautoscalers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.apis.autoscaling.v1.watch.horizontalpodautoscalers.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.apis.autoscaling.v1.watch.horizontalpodautoscalers.$get>
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
                  ReturnType<typeof client.apis.autoscaling.v1.watch.horizontalpodautoscalers.$get>
                >
              >
            >
          >,
          ReturnType<typeof getApisAutoscalingV1WatchHorizontalpodautoscalersQueryKey>
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
          Awaited<ReturnType<typeof client.apis.autoscaling.v1.watch.horizontalpodautoscalers.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAutoscalingV1WatchHorizontalpodautoscalersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisAutoscalingV1WatchHorizontalpodautoscalersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.autoscaling.v1.watch.horizontalpodautoscalers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v1/watch/namespaces/:namespace/horizontalpodautoscalers',
    toValue(args),
  ] as const
}

export function getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.autoscaling.v1.watch.namespaces[':namespace'].horizontalpodautoscalers.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalers<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
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
                    (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
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
                    (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersQueryKey
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
              (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.autoscaling.v1.watch.namespaces[':namespace'].horizontalpodautoscalers.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
    >
  >,
) {
  return [
    'apis',
    '/apis/autoscaling/v1/watch/namespaces/:namespace/horizontalpodautoscalers/:name',
    toValue(args),
  ] as const
}

export function getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis.autoscaling.v1.watch.namespaces[':namespace'].horizontalpodautoscalers[
          ':name'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersName<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
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
                    (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
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
                    (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersNameQueryKey
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
              (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersNameQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apis.autoscaling.v1.watch.namespaces[':namespace'].horizontalpodautoscalers[
            ':name'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}
