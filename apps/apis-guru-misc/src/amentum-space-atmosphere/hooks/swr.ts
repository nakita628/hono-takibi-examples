import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getJb2008Key() {
  return ['jb2008'] as const
}

export function getNrlmsise00Key() {
  return ['nrlmsise00'] as const
}

export function getWamIpeKey() {
  return ['wam-ipe'] as const
}

export function getGetJb2008Key(args: InferRequestType<typeof client.jb2008.$get>) {
  return ['jb2008', '/jb2008', args] as const
}

export function useGetJb2008<TError = unknown>(
  args: InferRequestType<typeof client.jb2008.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jb2008.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJb2008Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jb2008.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.jb2008.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetJb2008<TError = unknown>(
  args: InferRequestType<typeof client.jb2008.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jb2008.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetJb2008Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jb2008.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.jb2008.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetNrlmsise00Key(args: InferRequestType<typeof client.nrlmsise00.$get>) {
  return ['nrlmsise00', '/nrlmsise00', args] as const
}

export function useGetNrlmsise00<TError = unknown>(
  args: InferRequestType<typeof client.nrlmsise00.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nrlmsise00.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNrlmsise00Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nrlmsise00.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nrlmsise00.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNrlmsise00<TError = unknown>(
  args: InferRequestType<typeof client.nrlmsise00.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nrlmsise00.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNrlmsise00Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nrlmsise00.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nrlmsise00.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWamIpeKey(args: InferRequestType<(typeof client)['wam-ipe']['$get']>) {
  return ['wam-ipe', '/wam-ipe', args] as const
}

export function useGetWamIpe<TError = unknown>(
  args: InferRequestType<(typeof client)['wam-ipe']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['wam-ipe']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWamIpeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['wam-ipe']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['wam-ipe'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWamIpe<TError = unknown>(
  args: InferRequestType<(typeof client)['wam-ipe']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['wam-ipe']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWamIpeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['wam-ipe']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['wam-ipe'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
