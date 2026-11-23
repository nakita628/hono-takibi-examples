import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getListsKey() {
  return ['lists'] as const
}

export function getNamesKey() {
  return ['names'] as const
}

export function getSwatchKey() {
  return ['swatch'] as const
}

export function getGetKey(args: InferRequestType<typeof client.index.$get>) {
  return ['', '/', args] as const
}

export function useGet<TError = unknown>(
  args: InferRequestType<typeof client.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.index.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGet<TError = unknown>(
  args: InferRequestType<typeof client.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.index.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetListsIndexKey() {
  return ['lists', '/lists/'] as const
}

export function useGetListsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNamesIndexKey(args: InferRequestType<typeof client.names.index.$get>) {
  return ['names', '/names/', args] as const
}

export function useGetNamesIndex<TError = unknown>(
  args: InferRequestType<typeof client.names.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNamesIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.names.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamesIndex<TError = unknown>(
  args: InferRequestType<typeof client.names.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNamesIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.names.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.names.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSwatchIndexKey(args: InferRequestType<typeof client.swatch.index.$get>) {
  return ['swatch', '/swatch/', args] as const
}

export function useGetSwatchIndex<TError = unknown>(
  args: InferRequestType<typeof client.swatch.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.swatch.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSwatchIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.swatch.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.swatch.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSwatchIndex<TError = unknown>(
  args: InferRequestType<typeof client.swatch.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.swatch.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSwatchIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.swatch.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.swatch.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
