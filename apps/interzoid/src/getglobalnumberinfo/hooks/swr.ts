import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetglobalnumberinfoKey() {
  return ['getglobalnumberinfo'] as const
}

export function getGetGetglobalnumberinfoKey(
  args: InferRequestType<typeof client.getglobalnumberinfo.$get>,
) {
  return ['getglobalnumberinfo', '/getglobalnumberinfo', args] as const
}

export function useGetGetglobalnumberinfo<TError = unknown>(
  args: InferRequestType<typeof client.getglobalnumberinfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getglobalnumberinfo.$get>>>
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
        ? getGetGetglobalnumberinfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getglobalnumberinfo.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getglobalnumberinfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetglobalnumberinfo<TError = unknown>(
  args: InferRequestType<typeof client.getglobalnumberinfo.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getglobalnumberinfo.$get>>>
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
        ? getGetGetglobalnumberinfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getglobalnumberinfo.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getglobalnumberinfo.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
