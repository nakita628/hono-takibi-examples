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

export function getGetFullPricingKey() {
  return ['get-full-pricing'] as const
}

export function getGetPrefixPricingKey() {
  return ['get-prefix-pricing'] as const
}

export function getGetPricingKey() {
  return ['get-pricing'] as const
}

export function getGetFullPricingOutboundTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['get-full-pricing']['outbound'][':type']['$get']>
  >,
) {
  return ['get-full-pricing', '/get-full-pricing/outbound/:type', toValue(args)] as const
}

export function getGetFullPricingOutboundTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['get-full-pricing']['outbound'][':type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetFullPricingOutboundTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['get-full-pricing'].outbound[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetFullPricingOutboundType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['get-full-pricing']['outbound'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['get-full-pricing']['outbound'][':type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['get-full-pricing']['outbound'][':type']['$get']>
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
                  ReturnType<(typeof client)['get-full-pricing']['outbound'][':type']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGetFullPricingOutboundTypeQueryKey>
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
          Awaited<ReturnType<(typeof client)['get-full-pricing']['outbound'][':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetFullPricingOutboundTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetFullPricingOutboundTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['get-full-pricing'].outbound[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetPrefixPricingOutboundTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['get-prefix-pricing']['outbound'][':type']['$get']>
  >,
) {
  return ['get-prefix-pricing', '/get-prefix-pricing/outbound/:type', toValue(args)] as const
}

export function getGetPrefixPricingOutboundTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['get-prefix-pricing']['outbound'][':type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetPrefixPricingOutboundTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['get-prefix-pricing'].outbound[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetPrefixPricingOutboundType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['get-prefix-pricing']['outbound'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['get-prefix-pricing']['outbound'][':type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['get-prefix-pricing']['outbound'][':type']['$get']>
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
                  ReturnType<(typeof client)['get-prefix-pricing']['outbound'][':type']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGetPrefixPricingOutboundTypeQueryKey>
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
          Awaited<ReturnType<(typeof client)['get-prefix-pricing']['outbound'][':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetPrefixPricingOutboundTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetPrefixPricingOutboundTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['get-prefix-pricing'].outbound[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetPricingOutboundTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['get-pricing']['outbound'][':type']['$get']>
  >,
) {
  return ['get-pricing', '/get-pricing/outbound/:type', toValue(args)] as const
}

export function getGetPricingOutboundTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['get-pricing']['outbound'][':type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetPricingOutboundTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['get-pricing'].outbound[':type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetPricingOutboundType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['get-pricing']['outbound'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['get-pricing']['outbound'][':type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['get-pricing']['outbound'][':type']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['get-pricing']['outbound'][':type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGetPricingOutboundTypeQueryKey>
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
          Awaited<ReturnType<(typeof client)['get-pricing']['outbound'][':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetPricingOutboundTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetPricingOutboundTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['get-pricing'].outbound[':type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
