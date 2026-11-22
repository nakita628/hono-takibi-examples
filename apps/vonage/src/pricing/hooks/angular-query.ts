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
  args: InferRequestType<(typeof client)['get-full-pricing']['outbound'][':type']['$get']>,
) {
  return ['get-full-pricing', '/get-full-pricing/outbound/:type', args] as const
}

export function getGetFullPricingOutboundTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['get-full-pricing']['outbound'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['get-full-pricing']['outbound'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGetFullPricingOutboundTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['get-full-pricing'].outbound[':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGetFullPricingOutboundType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['get-full-pricing']['outbound'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['get-full-pricing']['outbound'][':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getGetFullPricingOutboundTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGetPrefixPricingOutboundTypeQueryKey(
  args: InferRequestType<(typeof client)['get-prefix-pricing']['outbound'][':type']['$get']>,
) {
  return ['get-prefix-pricing', '/get-prefix-pricing/outbound/:type', args] as const
}

export function getGetPrefixPricingOutboundTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['get-prefix-pricing']['outbound'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['get-prefix-pricing']['outbound'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGetPrefixPricingOutboundTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['get-prefix-pricing'].outbound[':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGetPrefixPricingOutboundType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['get-prefix-pricing']['outbound'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['get-prefix-pricing']['outbound'][':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getGetPrefixPricingOutboundTypeQueryKey>
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
      ...getGetPrefixPricingOutboundTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGetPricingOutboundTypeQueryKey(
  args: InferRequestType<(typeof client)['get-pricing']['outbound'][':type']['$get']>,
) {
  return ['get-pricing', '/get-pricing/outbound/:type', args] as const
}

export function getGetPricingOutboundTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['get-pricing']['outbound'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['get-pricing']['outbound'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGetPricingOutboundTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['get-pricing'].outbound[':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGetPricingOutboundType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['get-pricing']['outbound'][':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['get-pricing']['outbound'][':type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getGetPricingOutboundTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
