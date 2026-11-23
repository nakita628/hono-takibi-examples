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

export function getApisNodeK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/node.k8s.io/v1/'] as const
}

export function getApisNodeK8sIoV1IndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApisNodeK8sIoV1IndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['node.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisNodeK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['node.k8s.io']['v1']['index']['$get']>>
      >
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
                Awaited<ReturnType<(typeof client.apis)['node.k8s.io']['v1']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.apis)['node.k8s.io']['v1']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApisNodeK8sIoV1IndexQueryKey>
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
          Awaited<ReturnType<(typeof client.apis)['node.k8s.io']['v1']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNodeK8sIoV1IndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApisNodeK8sIoV1IndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['node.k8s.io'].v1.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisNodeK8sIoV1RuntimeclassesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$get']>
  >,
) {
  return ['apis', '/apis/node.k8s.io/v1/runtimeclasses', toValue(args)] as const
}

export function getApisNodeK8sIoV1RuntimeclassesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisNodeK8sIoV1RuntimeclassesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['node.k8s.io'].v1.runtimeclasses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisNodeK8sIoV1Runtimeclasses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$get']>
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
                  ReturnType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApisNodeK8sIoV1RuntimeclassesQueryKey>
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
          Awaited<ReturnType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNodeK8sIoV1RuntimeclassesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisNodeK8sIoV1RuntimeclassesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['node.k8s.io'].v1.runtimeclasses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisNodeK8sIoV1RuntimeclassesMutationKey() {
  return ['apis', '/apis/node.k8s.io/v1/runtimeclasses', 'POST'] as const
}

export function getPostApisNodeK8sIoV1RuntimeclassesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApisNodeK8sIoV1RuntimeclassesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$post']>,
    ) {
      return parseResponse(client.apis['node.k8s.io'].v1.runtimeclasses.$post(args, options))
    },
  })
}

export function usePostApisNodeK8sIoV1Runtimeclasses<
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
                  ReturnType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$post']>,
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
  const mutationDefaults = getPostApisNodeK8sIoV1RuntimeclassesMutationOptions<
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

export function getDeleteApisNodeK8sIoV1RuntimeclassesMutationKey() {
  return ['apis', '/apis/node.k8s.io/v1/runtimeclasses', 'DELETE'] as const
}

export function getDeleteApisNodeK8sIoV1RuntimeclassesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisNodeK8sIoV1RuntimeclassesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$delete']
      >,
    ) {
      return parseResponse(client.apis['node.k8s.io'].v1.runtimeclasses.$delete(args, options))
    },
  })
}

export function useDeleteApisNodeK8sIoV1Runtimeclasses<
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
                  ReturnType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses']['$delete']>,
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
  const mutationDefaults = getDeleteApisNodeK8sIoV1RuntimeclassesMutationOptions<
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

export function getApisNodeK8sIoV1RuntimeclassesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$get']>
  >,
) {
  return ['apis', '/apis/node.k8s.io/v1/runtimeclasses/:name', toValue(args)] as const
}

export function getApisNodeK8sIoV1RuntimeclassesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisNodeK8sIoV1RuntimeclassesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['node.k8s.io'].v1.runtimeclasses[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisNodeK8sIoV1RuntimeclassesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$get']>
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
                    (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$get']
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
                    (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisNodeK8sIoV1RuntimeclassesNameQueryKey>
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
            ReturnType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNodeK8sIoV1RuntimeclassesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisNodeK8sIoV1RuntimeclassesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['node.k8s.io'].v1.runtimeclasses[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisNodeK8sIoV1RuntimeclassesNameMutationKey() {
  return ['apis', '/apis/node.k8s.io/v1/runtimeclasses/:name', 'PUT'] as const
}

export function getPutApisNodeK8sIoV1RuntimeclassesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApisNodeK8sIoV1RuntimeclassesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['node.k8s.io'].v1.runtimeclasses[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApisNodeK8sIoV1RuntimeclassesName<
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
                    (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$put']
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
  const mutationDefaults = getPutApisNodeK8sIoV1RuntimeclassesNameMutationOptions<
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

export function getDeleteApisNodeK8sIoV1RuntimeclassesNameMutationKey() {
  return ['apis', '/apis/node.k8s.io/v1/runtimeclasses/:name', 'DELETE'] as const
}

export function getDeleteApisNodeK8sIoV1RuntimeclassesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisNodeK8sIoV1RuntimeclassesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['node.k8s.io'].v1.runtimeclasses[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApisNodeK8sIoV1RuntimeclassesName<
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
                    (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$delete']
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
  const mutationDefaults = getDeleteApisNodeK8sIoV1RuntimeclassesNameMutationOptions<
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

export function getPatchApisNodeK8sIoV1RuntimeclassesNameMutationKey() {
  return ['apis', '/apis/node.k8s.io/v1/runtimeclasses/:name', 'PATCH'] as const
}

export function getPatchApisNodeK8sIoV1RuntimeclassesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisNodeK8sIoV1RuntimeclassesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['node.k8s.io'].v1.runtimeclasses[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApisNodeK8sIoV1RuntimeclassesName<
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
                    (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['node.k8s.io']['v1']['runtimeclasses'][':name']['$patch']
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
  const mutationDefaults = getPatchApisNodeK8sIoV1RuntimeclassesNameMutationOptions<
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

export function getApisNodeK8sIoV1WatchRuntimeclassesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses']['$get']>
  >,
) {
  return ['apis', '/apis/node.k8s.io/v1/watch/runtimeclasses', toValue(args)] as const
}

export function getApisNodeK8sIoV1WatchRuntimeclassesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisNodeK8sIoV1WatchRuntimeclassesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['node.k8s.io'].v1.watch.runtimeclasses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisNodeK8sIoV1WatchRuntimeclasses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses']['$get']>
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
                    (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses']['$get']
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
                    (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisNodeK8sIoV1WatchRuntimeclassesQueryKey>
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
            ReturnType<(typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNodeK8sIoV1WatchRuntimeclassesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisNodeK8sIoV1WatchRuntimeclassesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['node.k8s.io'].v1.watch.runtimeclasses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisNodeK8sIoV1WatchRuntimeclassesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/node.k8s.io/v1/watch/runtimeclasses/:name', toValue(args)] as const
}

export function getApisNodeK8sIoV1WatchRuntimeclassesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisNodeK8sIoV1WatchRuntimeclassesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['node.k8s.io'].v1.watch.runtimeclasses[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisNodeK8sIoV1WatchRuntimeclassesName<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses'][':name']['$get']
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
                    (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses'][':name']['$get']
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
                    (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisNodeK8sIoV1WatchRuntimeclassesNameQueryKey>
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
              (typeof client.apis)['node.k8s.io']['v1']['watch']['runtimeclasses'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisNodeK8sIoV1WatchRuntimeclassesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisNodeK8sIoV1WatchRuntimeclassesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['node.k8s.io'].v1.watch.runtimeclasses[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
