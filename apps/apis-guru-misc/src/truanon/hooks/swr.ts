import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiGetProfileKey(args: InferRequestType<typeof client.api.get_profile.$get>) {
  return ['api', '/api/get_profile', args] as const
}

export function useGetApiGetProfile<TError = unknown>(
  args: InferRequestType<typeof client.api.get_profile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.get_profile.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiGetProfileKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.get_profile.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.get_profile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiGetProfile<TError = unknown>(
  args: InferRequestType<typeof client.api.get_profile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.get_profile.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiGetProfileKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.get_profile.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.get_profile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiRequestTokenKey(
  args: InferRequestType<typeof client.api.request_token.$get>,
) {
  return ['api', '/api/request_token', args] as const
}

export function useGetApiRequestToken<TError = unknown>(
  args: InferRequestType<typeof client.api.request_token.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.request_token.$get>>>>
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
        ? getGetApiRequestTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.request_token.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.request_token.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRequestToken<TError = unknown>(
  args: InferRequestType<typeof client.api.request_token.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.request_token.$get>>>>
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
        ? getGetApiRequestTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.request_token.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.request_token.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
