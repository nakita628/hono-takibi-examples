import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDealItemKey() {
  return ['deal_item'] as const
}

export function getEventKey() {
  return ['event'] as const
}

export function getEventItemKey() {
  return ['event_item'] as const
}

export function getGetDealItemKey(args: InferRequestType<typeof client.deal_item.$get>) {
  const { header: _, ...keyArgs } = args
  return ['deal_item', '/deal_item', keyArgs] as const
}

export function useGetDealItem<TError = unknown>(
  args: InferRequestType<typeof client.deal_item.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deal_item.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDealItemKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deal_item.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deal_item.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDealItem<TError = unknown>(
  args: InferRequestType<typeof client.deal_item.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deal_item.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDealItemKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deal_item.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deal_item.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventKey(args: InferRequestType<typeof client.event.$get>) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event', keyArgs] as const
}

export function useGetEvent<TError = unknown>(
  args: InferRequestType<typeof client.event.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.event.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEvent<TError = unknown>(
  args: InferRequestType<typeof client.event.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.event.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetEventEventIdKey(
  args: InferRequestType<(typeof client.event)[':event_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['event', '/event/:event_id', keyArgs] as const
}

export function useGetEventEventId<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetEventEventIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event[':event_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventEventId<TError = unknown>(
  args: InferRequestType<(typeof client.event)[':event_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetEventEventIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.event)[':event_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event[':event_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventItemKey(args: InferRequestType<typeof client.event_item.$get>) {
  const { header: _, ...keyArgs } = args
  return ['event_item', '/event_item', keyArgs] as const
}

export function useGetEventItem<TError = unknown>(
  args: InferRequestType<typeof client.event_item.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_item.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventItemKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_item.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event_item.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventItem<TError = unknown>(
  args: InferRequestType<typeof client.event_item.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_item.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventItemKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.event_item.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.event_item.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
