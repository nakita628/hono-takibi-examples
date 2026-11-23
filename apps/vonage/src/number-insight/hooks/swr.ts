import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdvancedKey() {
  return ['advanced'] as const
}

export function getBasicKey() {
  return ['basic'] as const
}

export function getStandardKey() {
  return ['standard'] as const
}

export function getGetAdvancedAsyncFormatKey(
  args: InferRequestType<(typeof client.advanced.async)[':format']['$get']>,
) {
  return ['advanced', '/advanced/async/:format', args] as const
}

export function useGetAdvancedAsyncFormat<TError = unknown>(
  args: InferRequestType<(typeof client.advanced.async)[':format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.advanced.async)[':format']['$get']>>
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
        ? getGetAdvancedAsyncFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.advanced.async)[':format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.advanced.async[':format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdvancedAsyncFormat<TError = unknown>(
  args: InferRequestType<(typeof client.advanced.async)[':format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.advanced.async)[':format']['$get']>>
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
        ? getGetAdvancedAsyncFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.advanced.async)[':format']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.advanced.async[':format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdvancedFormatKey(
  args: InferRequestType<(typeof client.advanced)[':format']['$get']>,
) {
  return ['advanced', '/advanced/:format', args] as const
}

export function useGetAdvancedFormat<TError = unknown>(
  args: InferRequestType<(typeof client.advanced)[':format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':format']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdvancedFormatKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':format']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.advanced[':format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdvancedFormat<TError = unknown>(
  args: InferRequestType<(typeof client.advanced)[':format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':format']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdvancedFormatKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.advanced)[':format']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.advanced[':format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBasicFormatKey(
  args: InferRequestType<(typeof client.basic)[':format']['$get']>,
) {
  return ['basic', '/basic/:format', args] as const
}

export function useGetBasicFormat<TError = unknown>(
  args: InferRequestType<(typeof client.basic)[':format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.basic)[':format']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBasicFormatKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.basic)[':format']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.basic[':format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBasicFormat<TError = unknown>(
  args: InferRequestType<(typeof client.basic)[':format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.basic)[':format']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBasicFormatKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.basic)[':format']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.basic[':format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStandardFormatKey(
  args: InferRequestType<(typeof client.standard)[':format']['$get']>,
) {
  return ['standard', '/standard/:format', args] as const
}

export function useGetStandardFormat<TError = unknown>(
  args: InferRequestType<(typeof client.standard)[':format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.standard)[':format']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetStandardFormatKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.standard)[':format']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.standard[':format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStandardFormat<TError = unknown>(
  args: InferRequestType<(typeof client.standard)[':format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.standard)[':format']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetStandardFormatKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.standard)[':format']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.standard[':format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
