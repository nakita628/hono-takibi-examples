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

export function getApisSchedulingK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/scheduling.k8s.io/v1/'] as const
}

export function getApisSchedulingK8sIoV1IndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApisSchedulingK8sIoV1IndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['scheduling.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisSchedulingK8sIoV1Index<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['scheduling.k8s.io']['v1']['index']['$get']>>
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
                Awaited<
                  ReturnType<(typeof client.apis)['scheduling.k8s.io']['v1']['index']['$get']>
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
                  ReturnType<(typeof client.apis)['scheduling.k8s.io']['v1']['index']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApisSchedulingK8sIoV1IndexQueryKey>
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
          Awaited<ReturnType<(typeof client.apis)['scheduling.k8s.io']['v1']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisSchedulingK8sIoV1IndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApisSchedulingK8sIoV1IndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['scheduling.k8s.io'].v1.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisSchedulingK8sIoV1PriorityclassesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$get']>
  >,
) {
  return ['apis', '/apis/scheduling.k8s.io/v1/priorityclasses', toValue(args)] as const
}

export function getApisSchedulingK8sIoV1PriorityclassesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisSchedulingK8sIoV1PriorityclassesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['scheduling.k8s.io'].v1.priorityclasses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisSchedulingK8sIoV1Priorityclasses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$get']>
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
                    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$get']
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
                    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisSchedulingK8sIoV1PriorityclassesQueryKey>
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
            ReturnType<(typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisSchedulingK8sIoV1PriorityclassesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisSchedulingK8sIoV1PriorityclassesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['scheduling.k8s.io'].v1.priorityclasses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApisSchedulingK8sIoV1PriorityclassesMutationKey() {
  return ['apis', '/apis/scheduling.k8s.io/v1/priorityclasses', 'POST'] as const
}

export function getPostApisSchedulingK8sIoV1PriorityclassesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApisSchedulingK8sIoV1PriorityclassesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$post']
      >,
    ) {
      return parseResponse(client.apis['scheduling.k8s.io'].v1.priorityclasses.$post(args, options))
    },
  })
}

export function usePostApisSchedulingK8sIoV1Priorityclasses<
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
                    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$post']
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
  const mutationDefaults = getPostApisSchedulingK8sIoV1PriorityclassesMutationOptions<
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

export function getDeleteApisSchedulingK8sIoV1PriorityclassesMutationKey() {
  return ['apis', '/apis/scheduling.k8s.io/v1/priorityclasses', 'DELETE'] as const
}

export function getDeleteApisSchedulingK8sIoV1PriorityclassesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisSchedulingK8sIoV1PriorityclassesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['scheduling.k8s.io'].v1.priorityclasses.$delete(args, options),
      )
    },
  })
}

export function useDeleteApisSchedulingK8sIoV1Priorityclasses<
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
                    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$delete']
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
  const mutationDefaults = getDeleteApisSchedulingK8sIoV1PriorityclassesMutationOptions<
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

export function getApisSchedulingK8sIoV1PriorityclassesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/scheduling.k8s.io/v1/priorityclasses/:name', toValue(args)] as const
}

export function getApisSchedulingK8sIoV1PriorityclassesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisSchedulingK8sIoV1PriorityclassesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['scheduling.k8s.io'].v1.priorityclasses[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisSchedulingK8sIoV1PriorityclassesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$get']
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
                    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$get']
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
                    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisSchedulingK8sIoV1PriorityclassesNameQueryKey>
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
              (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisSchedulingK8sIoV1PriorityclassesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisSchedulingK8sIoV1PriorityclassesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['scheduling.k8s.io'].v1.priorityclasses[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApisSchedulingK8sIoV1PriorityclassesNameMutationKey() {
  return ['apis', '/apis/scheduling.k8s.io/v1/priorityclasses/:name', 'PUT'] as const
}

export function getPutApisSchedulingK8sIoV1PriorityclassesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApisSchedulingK8sIoV1PriorityclassesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.apis['scheduling.k8s.io'].v1.priorityclasses[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApisSchedulingK8sIoV1PriorityclassesName<
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
                    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$put']
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
  const mutationDefaults = getPutApisSchedulingK8sIoV1PriorityclassesNameMutationOptions<
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

export function getDeleteApisSchedulingK8sIoV1PriorityclassesNameMutationKey() {
  return ['apis', '/apis/scheduling.k8s.io/v1/priorityclasses/:name', 'DELETE'] as const
}

export function getDeleteApisSchedulingK8sIoV1PriorityclassesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApisSchedulingK8sIoV1PriorityclassesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.apis['scheduling.k8s.io'].v1.priorityclasses[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApisSchedulingK8sIoV1PriorityclassesName<
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
                    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$delete']
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
  const mutationDefaults = getDeleteApisSchedulingK8sIoV1PriorityclassesNameMutationOptions<
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

export function getPatchApisSchedulingK8sIoV1PriorityclassesNameMutationKey() {
  return ['apis', '/apis/scheduling.k8s.io/v1/priorityclasses/:name', 'PATCH'] as const
}

export function getPatchApisSchedulingK8sIoV1PriorityclassesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApisSchedulingK8sIoV1PriorityclassesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$patch']
      >,
    ) {
      return parseResponse(
        client.apis['scheduling.k8s.io'].v1.priorityclasses[':name'].$patch(args, options),
      )
    },
  })
}

export function usePatchApisSchedulingK8sIoV1PriorityclassesName<
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
                    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$patch']
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
  const mutationDefaults = getPatchApisSchedulingK8sIoV1PriorityclassesNameMutationOptions<
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

export function getApisSchedulingK8sIoV1WatchPriorityclassesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses']['$get']
    >
  >,
) {
  return ['apis', '/apis/scheduling.k8s.io/v1/watch/priorityclasses', toValue(args)] as const
}

export function getApisSchedulingK8sIoV1WatchPriorityclassesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisSchedulingK8sIoV1WatchPriorityclassesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['scheduling.k8s.io'].v1.watch.priorityclasses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisSchedulingK8sIoV1WatchPriorityclasses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses']['$get']
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
                    (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses']['$get']
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
                    (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisSchedulingK8sIoV1WatchPriorityclassesQueryKey>
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
              (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisSchedulingK8sIoV1WatchPriorityclassesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisSchedulingK8sIoV1WatchPriorityclassesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['scheduling.k8s.io'].v1.watch.priorityclasses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApisSchedulingK8sIoV1WatchPriorityclassesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses'][':name']['$get']
    >
  >,
) {
  return ['apis', '/apis/scheduling.k8s.io/v1/watch/priorityclasses/:name', toValue(args)] as const
}

export function getApisSchedulingK8sIoV1WatchPriorityclassesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApisSchedulingK8sIoV1WatchPriorityclassesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apis['scheduling.k8s.io'].v1.watch.priorityclasses[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApisSchedulingK8sIoV1WatchPriorityclassesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses'][':name']['$get']
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
                    (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses'][':name']['$get']
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
                    (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApisSchedulingK8sIoV1WatchPriorityclassesNameQueryKey>
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
              (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApisSchedulingK8sIoV1WatchPriorityclassesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApisSchedulingK8sIoV1WatchPriorityclassesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apis['scheduling.k8s.io'].v1.watch.priorityclasses[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
