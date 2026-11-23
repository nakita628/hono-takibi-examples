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

export function getV2beta1Key() {
  return ['v2beta1'] as const
}

export function getV2beta1NameQueryKey(
  args: InferRequestType<(typeof client.v2beta1)[':name']['$get']>,
) {
  return ['v2beta1', '/v2beta1/:name', args] as const
}

export function getV2beta1NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1NameQueryKey>
  >({
    queryKey: getV2beta1NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2beta1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2beta1NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2beta1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2beta1NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV2beta1NameMutationKey() {
  return ['v2beta1', '/v2beta1/:name', 'DELETE'] as const
}

export function getDeleteV2beta1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2beta1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2beta1)[':name']['$delete']>) {
      return parseResponse(client.v2beta1[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV2beta1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta1)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2beta1NameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV2beta1NameMutationKey() {
  return ['v2beta1', '/v2beta1/:name', 'PATCH'] as const
}

export function getPatchV2beta1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta1)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2beta1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2beta1)[':name']['$patch']>) {
      return parseResponse(client.v2beta1[':name'].$patch(args, options))
    },
  })
}

export function usePatchV2beta1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta1)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta1)[':name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2beta1NameMutationOptions<TError, TOnMutateResult>(
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

export function getV2beta1ParentTraceSinksQueryKey(
  args: InferRequestType<(typeof client.v2beta1)[':parent']['traceSinks']['$get']>,
) {
  return ['v2beta1', '/v2beta1/:parent/traceSinks', args] as const
}

export function getV2beta1ParentTraceSinksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1)[':parent']['traceSinks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':parent']['traceSinks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta1)[':parent']['traceSinks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1ParentTraceSinksQueryKey>
  >({
    queryKey: getV2beta1ParentTraceSinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1[':parent'].traceSinks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta1ParentTraceSinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1)[':parent']['traceSinks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':parent']['traceSinks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta1)[':parent']['traceSinks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1ParentTraceSinksQueryKey>
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
      ...getV2beta1ParentTraceSinksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1ParentTraceSinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta1)[':parent']['traceSinks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta1)[':parent']['traceSinks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta1)[':parent']['traceSinks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1ParentTraceSinksQueryKey>
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
      ...getV2beta1ParentTraceSinksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2beta1ParentTraceSinksMutationKey() {
  return ['v2beta1', '/v2beta1/:parent/traceSinks', 'POST'] as const
}

export function getPostV2beta1ParentTraceSinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta1)[':parent']['traceSinks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta1)[':parent']['traceSinks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2beta1ParentTraceSinksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2beta1)[':parent']['traceSinks']['$post']>,
    ) {
      return parseResponse(client.v2beta1[':parent'].traceSinks.$post(args, options))
    },
  })
}

export function usePostV2beta1ParentTraceSinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta1)[':parent']['traceSinks']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta1)[':parent']['traceSinks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2beta1ParentTraceSinksMutationOptions<TError, TOnMutateResult>(
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
