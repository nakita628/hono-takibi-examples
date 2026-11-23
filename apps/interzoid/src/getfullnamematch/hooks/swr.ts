import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetfullnamematchKey() {
  return ['getfullnamematch'] as const
}

export function getGetGetfullnamematchKey(
  args: InferRequestType<typeof client.getfullnamematch.$get>,
) {
  return ['getfullnamematch', '/getfullnamematch', args] as const
}

export function useGetGetfullnamematch<TError = unknown>(
  args: InferRequestType<typeof client.getfullnamematch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getfullnamematch.$get>>>>
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
        ? getGetGetfullnamematchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getfullnamematch.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getfullnamematch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetfullnamematch<TError = unknown>(
  args: InferRequestType<typeof client.getfullnamematch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getfullnamematch.$get>>>>
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
        ? getGetGetfullnamematchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getfullnamematch.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getfullnamematch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
