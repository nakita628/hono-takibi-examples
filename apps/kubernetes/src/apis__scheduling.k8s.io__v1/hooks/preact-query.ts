import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApisKey() {
  return ['apis'] as const
}

export function getApisSchedulingK8sIoV1IndexQueryKey() {
  return ['apis', '/apis/scheduling.k8s.io/v1/'] as const
}

export function getApisSchedulingK8sIoV1IndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apis)['scheduling.k8s.io']['v1']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getApisSchedulingK8sIoV1IndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['scheduling.k8s.io'].v1.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApisSchedulingK8sIoV1IndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApisSchedulingK8sIoV1Index<
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
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApisSchedulingK8sIoV1IndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApisSchedulingK8sIoV1PriorityclassesQueryKey(
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$get']
  >,
) {
  return ['apis', '/apis/scheduling.k8s.io/v1/priorityclasses', args] as const
}

export function getApisSchedulingK8sIoV1PriorityclassesQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisSchedulingK8sIoV1PriorityclassesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['scheduling.k8s.io'].v1.priorityclasses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApisSchedulingK8sIoV1PriorityclassesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApisSchedulingK8sIoV1PriorityclassesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisSchedulingK8sIoV1Priorityclasses<
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
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getApisSchedulingK8sIoV1PriorityclassesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApisSchedulingK8sIoV1PriorityclassesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$get']
  >,
) {
  return ['apis', '/apis/scheduling.k8s.io/v1/priorityclasses/:name', args] as const
}

export function getApisSchedulingK8sIoV1PriorityclassesNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisSchedulingK8sIoV1PriorityclassesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['scheduling.k8s.io'].v1.priorityclasses[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApisSchedulingK8sIoV1PriorityclassesNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApisSchedulingK8sIoV1PriorityclassesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisSchedulingK8sIoV1PriorityclassesName<
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
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApisSchedulingK8sIoV1PriorityclassesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses']['$get']
  >,
) {
  return ['apis', '/apis/scheduling.k8s.io/v1/watch/priorityclasses', args] as const
}

export function getApisSchedulingK8sIoV1WatchPriorityclassesQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisSchedulingK8sIoV1WatchPriorityclassesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['scheduling.k8s.io'].v1.watch.priorityclasses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApisSchedulingK8sIoV1WatchPriorityclassesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApisSchedulingK8sIoV1WatchPriorityclassesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisSchedulingK8sIoV1WatchPriorityclasses<
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
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApisSchedulingK8sIoV1WatchPriorityclassesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApisSchedulingK8sIoV1WatchPriorityclassesNameQueryKey(
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses'][':name']['$get']
  >,
) {
  return ['apis', '/apis/scheduling.k8s.io/v1/watch/priorityclasses/:name', args] as const
}

export function getApisSchedulingK8sIoV1WatchPriorityclassesNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApisSchedulingK8sIoV1WatchPriorityclassesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apis['scheduling.k8s.io'].v1.watch.priorityclasses[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses'][':name']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getApisSchedulingK8sIoV1WatchPriorityclassesNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApisSchedulingK8sIoV1WatchPriorityclassesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApisSchedulingK8sIoV1WatchPriorityclassesName<
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
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses'][':name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApisSchedulingK8sIoV1WatchPriorityclassesNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}
