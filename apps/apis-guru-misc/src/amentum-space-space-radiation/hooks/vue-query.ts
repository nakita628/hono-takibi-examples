import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGcrKey() {
  return ['gcr'] as const
}

export function getTrappedKey() {
  return ['trapped'] as const
}

export function getGcrFluxDlrQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gcr.flux_dlr.$get>>,
) {
  return ['gcr', '/gcr/flux_dlr', toValue(args)] as const
}

export function getGcrFluxDlrQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gcr.flux_dlr.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGcrFluxDlrQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.gcr.flux_dlr.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGcrFluxDlr<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gcr.flux_dlr.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.gcr.flux_dlr.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gcr.flux_dlr.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gcr.flux_dlr.$get>>>>
          >,
          ReturnType<typeof getGcrFluxDlrQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gcr.flux_dlr.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGcrFluxDlrQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGcrFluxDlrQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.gcr.flux_dlr.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTrappedFluxMeanQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trapped.flux_mean.$get>>,
) {
  return ['trapped', '/trapped/flux_mean', toValue(args)] as const
}

export function getTrappedFluxMeanQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trapped.flux_mean.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrappedFluxMeanQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.trapped.flux_mean.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrappedFluxMean<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_mean.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trapped.flux_mean.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_mean.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_mean.$get>>>
            >
          >,
          ReturnType<typeof getTrappedFluxMeanQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_mean.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTrappedFluxMeanQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrappedFluxMeanQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.trapped.flux_mean.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTrappedFluxPercentileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trapped.flux_percentile.$get>>,
) {
  return ['trapped', '/trapped/flux_percentile', toValue(args)] as const
}

export function getTrappedFluxPercentileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trapped.flux_percentile.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrappedFluxPercentileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.trapped.flux_percentile.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrappedFluxPercentile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_percentile.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trapped.flux_percentile.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_percentile.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_percentile.$get>>>
            >
          >,
          ReturnType<typeof getTrappedFluxPercentileQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.trapped.flux_percentile.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrappedFluxPercentileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrappedFluxPercentileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.trapped.flux_percentile.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
