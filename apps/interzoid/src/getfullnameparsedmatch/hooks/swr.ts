import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetfullnameparsedmatchKey() {
  return ['getfullnameparsedmatch'] as const
}

export function getGetGetfullnameparsedmatchKey(
  args: InferRequestType<typeof client.getfullnameparsedmatch.$get>,
) {
  return ['getfullnameparsedmatch', '/getfullnameparsedmatch', args] as const
}

export function useGetGetfullnameparsedmatch<TError = unknown>(
  args: InferRequestType<typeof client.getfullnameparsedmatch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getfullnameparsedmatch.$get>>>
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
        ? getGetGetfullnameparsedmatchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getfullnameparsedmatch.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getfullnameparsedmatch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetfullnameparsedmatch<TError = unknown>(
  args: InferRequestType<typeof client.getfullnameparsedmatch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getfullnameparsedmatch.$get>>>
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
        ? getGetGetfullnameparsedmatchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getfullnameparsedmatch.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getfullnameparsedmatch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
