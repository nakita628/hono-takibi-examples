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

export function getEstimatesKey() {
  return ['estimates'] as const
}

export function getHistoryKey() {
  return ['history'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getProductsKey() {
  return ['products'] as const
}

export function getProductsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.products.$get>>,
) {
  return ['products', '/products', toValue(args)] as const
}

export function getProductsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.products.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.products.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
          >,
          ReturnType<typeof getProductsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProductsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.products.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEstimatesPriceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.estimates.price.$get>>,
) {
  return ['estimates', '/estimates/price', toValue(args)] as const
}

export function getEstimatesPriceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.estimates.price.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEstimatesPriceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.estimates.price.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEstimatesPrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.estimates.price.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.estimates.price.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.estimates.price.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.estimates.price.$get>>>
            >
          >,
          ReturnType<typeof getEstimatesPriceQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.estimates.price.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEstimatesPriceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEstimatesPriceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.estimates.price.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEstimatesTimeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.estimates.time.$get>>,
) {
  return ['estimates', '/estimates/time', toValue(args)] as const
}

export function getEstimatesTimeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.estimates.time.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEstimatesTimeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.estimates.time.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEstimatesTime<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.estimates.time.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.estimates.time.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.estimates.time.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.estimates.time.$get>>>>
          >,
          ReturnType<typeof getEstimatesTimeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.estimates.time.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEstimatesTimeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEstimatesTimeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.estimates.time.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMeQueryKey() {
  return ['me', '/me'] as const
}

export function getMeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
          ReturnType<typeof getMeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.me.$get(undefined, { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.history.$get>>,
) {
  return ['history', '/history', toValue(args)] as const
}

export function getHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.history.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.history.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.history.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>
          >,
          ReturnType<typeof getHistoryQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.history.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
