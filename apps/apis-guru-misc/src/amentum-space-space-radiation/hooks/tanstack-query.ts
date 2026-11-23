import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGcrKey() {
  return ['gcr'] as const
}

export function getTrappedKey() {
  return ['trapped'] as const
}

export function getGcrFluxDlrQueryKey(args: InferRequestType<typeof client.gcr.flux_dlr.$get>) {
  return ['gcr', '/gcr/flux_dlr', args] as const
}

export function getGcrFluxDlrQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gcr.flux_dlr.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.gcr.flux_dlr.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gcr.flux_dlr.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGcrFluxDlrQueryKey>
  >({
    queryKey: getGcrFluxDlrQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.gcr.flux_dlr.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGcrFluxDlr<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gcr.flux_dlr.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gcr.flux_dlr.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gcr.flux_dlr.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGcrFluxDlrQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGcrFluxDlrQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGcrFluxDlr<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gcr.flux_dlr.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.gcr.flux_dlr.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gcr.flux_dlr.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGcrFluxDlrQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGcrFluxDlrQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTrappedFluxMeanQueryKey(
  args: InferRequestType<typeof client.trapped.flux_mean.$get>,
) {
  return ['trapped', '/trapped/flux_mean', args] as const
}

export function getTrappedFluxMeanQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_mean.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.trapped.flux_mean.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_mean.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTrappedFluxMeanQueryKey>
  >({
    queryKey: getTrappedFluxMeanQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.trapped.flux_mean.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTrappedFluxMean<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_mean.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.trapped.flux_mean.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_mean.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrappedFluxMeanQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTrappedFluxMeanQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTrappedFluxMean<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_mean.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.trapped.flux_mean.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_mean.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrappedFluxMeanQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTrappedFluxMeanQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTrappedFluxPercentileQueryKey(
  args: InferRequestType<typeof client.trapped.flux_percentile.$get>,
) {
  return ['trapped', '/trapped/flux_percentile', args] as const
}

export function getTrappedFluxPercentileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_percentile.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.trapped.flux_percentile.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_percentile.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrappedFluxPercentileQueryKey>
  >({
    queryKey: getTrappedFluxPercentileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.trapped.flux_percentile.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTrappedFluxPercentile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_percentile.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.trapped.flux_percentile.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_percentile.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrappedFluxPercentileQueryKey>
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
      ...getTrappedFluxPercentileQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTrappedFluxPercentile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_percentile.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.trapped.flux_percentile.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_percentile.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTrappedFluxPercentileQueryKey>
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
      ...getTrappedFluxPercentileQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
