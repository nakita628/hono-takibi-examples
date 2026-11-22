import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectGcrFluxDlr<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gcr.flux_dlr.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.gcr.flux_dlr.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGcrFluxDlrQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectTrappedFluxMean<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_mean.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.trapped.flux_mean.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTrappedFluxMeanQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectTrappedFluxPercentile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_percentile.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.trapped.flux_percentile.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTrappedFluxPercentileQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
