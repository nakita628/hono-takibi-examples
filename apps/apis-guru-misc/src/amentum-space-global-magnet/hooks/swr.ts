import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMagneticFieldKey() {
  return ['magnetic_field'] as const
}

export function getGetMagneticFieldKey(args: InferRequestType<typeof client.magnetic_field.$get>) {
  return ['magnetic_field', '/magnetic_field', args] as const
}

export function useGetMagneticField<TError = unknown>(
  args: InferRequestType<typeof client.magnetic_field.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magnetic_field.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMagneticFieldKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magnetic_field.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.magnetic_field.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMagneticField<TError = unknown>(
  args: InferRequestType<typeof client.magnetic_field.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magnetic_field.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMagneticFieldKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magnetic_field.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.magnetic_field.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
