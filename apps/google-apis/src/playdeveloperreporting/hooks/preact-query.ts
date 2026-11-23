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

export function getV1beta1Key() {
  return ['v1beta1'] as const
}

export function getV1beta1NameQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:name', args] as const
}

export function getV1beta1NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1NameQueryKey>
  >({
    queryKey: getV1beta1NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1beta1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1beta1NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1beta1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1beta1NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1beta1NameQueryMutationKey() {
  return ['v1beta1', '/v1beta1/:name:query', 'POST'] as const
}

export function getPostV1beta1NameQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name:query']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameQueryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name:query']['$post']>) {
      return parseResponse(client.v1beta1[':name:query'].$post(args, options))
    },
  })
}

export function usePostV1beta1NameQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':name:query']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta1)[':name:query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1beta1NameQueryMutationOptions<TError, TOnMutateResult>(
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

export function getV1beta1ParentAnomaliesQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['anomalies']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/anomalies', args] as const
}

export function getV1beta1ParentAnomaliesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['anomalies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['anomalies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['anomalies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentAnomaliesQueryKey>
  >({
    queryKey: getV1beta1ParentAnomaliesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':parent'].anomalies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1beta1ParentAnomalies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['anomalies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['anomalies']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':parent']['anomalies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ParentAnomaliesQueryKey>
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
      ...getV1beta1ParentAnomaliesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1beta1ParentAnomalies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['anomalies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['anomalies']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':parent']['anomalies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ParentAnomaliesQueryKey>
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
      ...getV1beta1ParentAnomaliesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1beta1ParentErrorIssuesSearchQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['errorIssues:search']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/errorIssues:search', args] as const
}

export function getV1beta1ParentErrorIssuesSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['errorIssues:search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['errorIssues:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['errorIssues:search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentErrorIssuesSearchQueryKey>
  >({
    queryKey: getV1beta1ParentErrorIssuesSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':parent']['errorIssues:search'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1beta1ParentErrorIssuesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['errorIssues:search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['errorIssues:search']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':parent']['errorIssues:search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ParentErrorIssuesSearchQueryKey>
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
      ...getV1beta1ParentErrorIssuesSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1beta1ParentErrorIssuesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['errorIssues:search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['errorIssues:search']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':parent']['errorIssues:search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ParentErrorIssuesSearchQueryKey>
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
      ...getV1beta1ParentErrorIssuesSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1beta1ParentErrorReportsSearchQueryKey(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['errorReports:search']['$get']>,
) {
  return ['v1beta1', '/v1beta1/:parent/errorReports:search', args] as const
}

export function getV1beta1ParentErrorReportsSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['errorReports:search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['errorReports:search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['errorReports:search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentErrorReportsSearchQueryKey>
  >({
    queryKey: getV1beta1ParentErrorReportsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta1[':parent']['errorReports:search'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1beta1ParentErrorReportsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['errorReports:search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['errorReports:search']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':parent']['errorReports:search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ParentErrorReportsSearchQueryKey>
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
      ...getV1beta1ParentErrorReportsSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1beta1ParentErrorReportsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['errorReports:search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['errorReports:search']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta1)[':parent']['errorReports:search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1beta1ParentErrorReportsSearchQueryKey>
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
      ...getV1beta1ParentErrorReportsSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
