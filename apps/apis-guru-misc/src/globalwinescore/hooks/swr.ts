import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGlobalwinescoresKey() {
  return ['globalwinescores'] as const
}

export function getGetGlobalwinescoresIndexKey(
  args: InferRequestType<typeof client.globalwinescores.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['globalwinescores', '/globalwinescores/', keyArgs] as const
}

export function useGetGlobalwinescoresIndex<TError = unknown>(
  args: InferRequestType<typeof client.globalwinescores.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.globalwinescores.index.$get>>>
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
        ? getGetGlobalwinescoresIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.globalwinescores.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.globalwinescores.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGlobalwinescoresIndex<TError = unknown>(
  args: InferRequestType<typeof client.globalwinescores.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.globalwinescores.index.$get>>>
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
        ? getGetGlobalwinescoresIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.globalwinescores.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.globalwinescores.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGlobalwinescoresLatestIndexKey(
  args: InferRequestType<typeof client.globalwinescores.latest.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['globalwinescores', '/globalwinescores/latest/', keyArgs] as const
}

export function useGetGlobalwinescoresLatestIndex<TError = unknown>(
  args: InferRequestType<typeof client.globalwinescores.latest.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.globalwinescores.latest.index.$get>>
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
        ? getGetGlobalwinescoresLatestIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.globalwinescores.latest.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.globalwinescores.latest.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGlobalwinescoresLatestIndex<TError = unknown>(
  args: InferRequestType<typeof client.globalwinescores.latest.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.globalwinescores.latest.index.$get>>
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
        ? getGetGlobalwinescoresLatestIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.globalwinescores.latest.index.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.globalwinescores.latest.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
