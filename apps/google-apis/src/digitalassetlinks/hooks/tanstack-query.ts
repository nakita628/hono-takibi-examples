import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1AssetlinksBulkCheckMutationKey() {
  return ['v1', '/v1/assetlinks:bulkCheck', 'POST'] as const
}

export function getPostV1AssetlinksBulkCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['assetlinks:bulkCheck']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['assetlinks:bulkCheck']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AssetlinksBulkCheckMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['assetlinks:bulkCheck']['$post']>) {
      return parseResponse(client.v1['assetlinks:bulkCheck'].$post(args, options))
    },
  })
}

export function usePostV1AssetlinksBulkCheck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['assetlinks:bulkCheck']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['assetlinks:bulkCheck']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1AssetlinksBulkCheckMutationOptions<TError, TOnMutateResult>(
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

export function getV1AssetlinksCheckQueryKey(
  args: InferRequestType<(typeof client.v1)['assetlinks:check']['$get']>,
) {
  return ['v1', '/v1/assetlinks:check', args] as const
}

export function getV1AssetlinksCheckQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['assetlinks:check']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['assetlinks:check']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['assetlinks:check']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AssetlinksCheckQueryKey>
  >({
    queryKey: getV1AssetlinksCheckQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['assetlinks:check'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1AssetlinksCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['assetlinks:check']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['assetlinks:check']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['assetlinks:check']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AssetlinksCheckQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1AssetlinksCheckQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1AssetlinksCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['assetlinks:check']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['assetlinks:check']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['assetlinks:check']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1AssetlinksCheckQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1AssetlinksCheckQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1StatementsListQueryKey(
  args: InferRequestType<(typeof client.v1)['statements:list']['$get']>,
) {
  return ['v1', '/v1/statements:list', args] as const
}

export function getV1StatementsListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['statements:list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['statements:list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['statements:list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1StatementsListQueryKey>
  >({
    queryKey: getV1StatementsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['statements:list'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1StatementsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['statements:list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['statements:list']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['statements:list']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1StatementsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1StatementsListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1StatementsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['statements:list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['statements:list']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['statements:list']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1StatementsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1StatementsListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
