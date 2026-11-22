import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getGetV1EmailFreeKey(args: InferRequestType<typeof client.v1.email.free.$get>) {
  return ['v1', '/v1/email/free', args] as const
}

export function useGetV1EmailFree<TError = unknown>(
  args: InferRequestType<typeof client.v1.email.free.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.free.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EmailFreeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.free.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.email.free.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EmailFree<TError = unknown>(
  args: InferRequestType<typeof client.v1.email.free.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.free.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EmailFreeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.email.free.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.email.free.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
