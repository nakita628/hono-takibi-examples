import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
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

export function getGetGetFullPricingOutboundTypeKey(
  args: InferRequestType<(typeof client)['get-full-pricing']['outbound'][':type']['$get']>,
) {
  return ['get-full-pricing', '/get-full-pricing/outbound/:type', args] as const
}

export function useGetGetFullPricingOutboundType<TError = unknown>(
  args: InferRequestType<(typeof client)['get-full-pricing']['outbound'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['get-full-pricing']['outbound'][':type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGetFullPricingOutboundTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['get-full-pricing']['outbound'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['get-full-pricing'].outbound[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetFullPricingOutboundType<TError = unknown>(
  args: InferRequestType<(typeof client)['get-full-pricing']['outbound'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['get-full-pricing']['outbound'][':type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGetFullPricingOutboundTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['get-full-pricing']['outbound'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['get-full-pricing'].outbound[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetPrefixPricingOutboundTypeKey(
  args: InferRequestType<(typeof client)['get-prefix-pricing']['outbound'][':type']['$get']>,
) {
  return ['get-prefix-pricing', '/get-prefix-pricing/outbound/:type', args] as const
}

export function useGetGetPrefixPricingOutboundType<TError = unknown>(
  args: InferRequestType<(typeof client)['get-prefix-pricing']['outbound'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['get-prefix-pricing']['outbound'][':type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGetPrefixPricingOutboundTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['get-prefix-pricing']['outbound'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['get-prefix-pricing'].outbound[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetPrefixPricingOutboundType<TError = unknown>(
  args: InferRequestType<(typeof client)['get-prefix-pricing']['outbound'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['get-prefix-pricing']['outbound'][':type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGetPrefixPricingOutboundTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['get-prefix-pricing']['outbound'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['get-prefix-pricing'].outbound[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetPricingOutboundTypeKey(
  args: InferRequestType<(typeof client)['get-pricing']['outbound'][':type']['$get']>,
) {
  return ['get-pricing', '/get-pricing/outbound/:type', args] as const
}

export function useGetGetPricingOutboundType<TError = unknown>(
  args: InferRequestType<(typeof client)['get-pricing']['outbound'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['get-pricing']['outbound'][':type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGetPricingOutboundTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['get-pricing']['outbound'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['get-pricing'].outbound[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetPricingOutboundType<TError = unknown>(
  args: InferRequestType<(typeof client)['get-pricing']['outbound'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['get-pricing']['outbound'][':type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGetPricingOutboundTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['get-pricing']['outbound'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['get-pricing'].outbound[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
