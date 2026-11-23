import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSectionFormatKey() {
  return ['{section}.{format}'] as const
}

export function getGetSectionFormatKey(
  args: InferRequestType<(typeof client)[':section.{format}']['$get']>,
) {
  return [':section.{format}', '/:section.{format}', args] as const
}

export function useGetSectionFormat<TError = unknown>(
  args: InferRequestType<(typeof client)[':section.{format}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':section.{format}']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSectionFormatKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':section.{format}']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':section.{format}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSectionFormat<TError = unknown>(
  args: InferRequestType<(typeof client)[':section.{format}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':section.{format}']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSectionFormatKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':section.{format}']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':section.{format}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
