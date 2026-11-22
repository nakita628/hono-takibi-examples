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

export function getV1alpha2Key() {
  return ['v1alpha2'] as const
}

export function getV1alpha2NameQueryKey(
  args: InferRequestType<(typeof client.v1alpha2)[':name']['$get']>,
) {
  return ['v1alpha2', '/v1alpha2/:name', args] as const
}

export function getV1alpha2NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha2)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha2)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha2)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha2NameQueryKey>
  >({
    queryKey: getV1alpha2NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1alpha2[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1alpha2Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha2)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha2)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha2)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1alpha2NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1alpha2NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1alpha2Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha2)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha2)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha2)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1alpha2NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1alpha2NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1alpha2NameMutationKey() {
  return ['v1alpha2', '/v1alpha2/:name', 'DELETE'] as const
}

export function getDeleteV1alpha2NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha2)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha2)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1alpha2NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha2)[':name']['$delete']>) {
      return parseResponse(client.v1alpha2[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1alpha2Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha2)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1alpha2)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1alpha2NameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchV1alpha2NameMutationKey() {
  return ['v1alpha2', '/v1alpha2/:name', 'PATCH'] as const
}

export function getPatchV1alpha2NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha2)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha2)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1alpha2NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha2)[':name']['$patch']>) {
      return parseResponse(client.v1alpha2[':name'].$patch(args, options))
    },
  })
}

export function usePatchV1alpha2Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha2)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1alpha2)[':name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1alpha2NameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1alpha2NameCancelMutationKey() {
  return ['v1alpha2', '/v1alpha2/:name:cancel', 'POST'] as const
}

export function getPostV1alpha2NameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha2)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha2)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha2NameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha2)[':name:cancel']['$post']>) {
      return parseResponse(client.v1alpha2[':name:cancel'].$post(args, options))
    },
  })
}

export function usePostV1alpha2NameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1alpha2)[':name:cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1alpha2)[':name:cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1alpha2NameCancelMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1alpha2ParentWorkerPoolsQueryKey(
  args: InferRequestType<(typeof client.v1alpha2)[':parent']['workerPools']['$get']>,
) {
  return ['v1alpha2', '/v1alpha2/:parent/workerPools', args] as const
}

export function getV1alpha2ParentWorkerPoolsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha2)[':parent']['workerPools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha2)[':parent']['workerPools']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha2)[':parent']['workerPools']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha2ParentWorkerPoolsQueryKey>
  >({
    queryKey: getV1alpha2ParentWorkerPoolsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1alpha2[':parent'].workerPools.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1alpha2ParentWorkerPools<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha2)[':parent']['workerPools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha2)[':parent']['workerPools']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1alpha2)[':parent']['workerPools']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1alpha2ParentWorkerPoolsQueryKey>
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
      ...getV1alpha2ParentWorkerPoolsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1alpha2ParentWorkerPools<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha2)[':parent']['workerPools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha2)[':parent']['workerPools']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1alpha2)[':parent']['workerPools']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1alpha2ParentWorkerPoolsQueryKey>
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
      ...getV1alpha2ParentWorkerPoolsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1alpha2ParentWorkerPoolsMutationKey() {
  return ['v1alpha2', '/v1alpha2/:parent/workerPools', 'POST'] as const
}

export function getPostV1alpha2ParentWorkerPoolsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha2)[':parent']['workerPools']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha2)[':parent']['workerPools']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha2ParentWorkerPoolsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha2)[':parent']['workerPools']['$post']>,
    ) {
      return parseResponse(client.v1alpha2[':parent'].workerPools.$post(args, options))
    },
  })
}

export function usePostV1alpha2ParentWorkerPools<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1alpha2)[':parent']['workerPools']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1alpha2)[':parent']['workerPools']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1alpha2ParentWorkerPoolsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
