import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetweatherzipcodeKey() {
  return ['getweatherzipcode'] as const
}

export function getGetGetweatherzipcodeKey(
  args: InferRequestType<typeof client.getweatherzipcode.$get>,
) {
  return ['getweatherzipcode', '/getweatherzipcode', args] as const
}

export function useGetGetweatherzipcode<TError = unknown>(
  args: InferRequestType<typeof client.getweatherzipcode.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweatherzipcode.$get>>>>
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
        ? getGetGetweatherzipcodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweatherzipcode.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getweatherzipcode.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetweatherzipcode<TError = unknown>(
  args: InferRequestType<typeof client.getweatherzipcode.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweatherzipcode.$get>>>>
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
        ? getGetGetweatherzipcodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweatherzipcode.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getweatherzipcode.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
