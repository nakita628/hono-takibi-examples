import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetareacodefromnumberKey() {
  return ['getareacodefromnumber'] as const
}

export function getGetGetareacodefromnumberKey(
  args: InferRequestType<typeof client.getareacodefromnumber.$get>,
) {
  return ['getareacodefromnumber', '/getareacodefromnumber', args] as const
}

export function useGetGetareacodefromnumber<TError = unknown>(
  args: InferRequestType<typeof client.getareacodefromnumber.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getareacodefromnumber.$get>>>
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
        ? getGetGetareacodefromnumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getareacodefromnumber.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getareacodefromnumber.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetareacodefromnumber<TError = unknown>(
  args: InferRequestType<typeof client.getareacodefromnumber.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getareacodefromnumber.$get>>>
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
        ? getGetGetareacodefromnumberKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getareacodefromnumber.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getareacodefromnumber.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
