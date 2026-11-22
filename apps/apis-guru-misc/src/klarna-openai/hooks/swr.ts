import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPublicKey() {
  return ['public'] as const
}

export function getGetPublicOpenaiV0ProductsKey(
  args: InferRequestType<typeof client.public.openai.v0.products.$get>,
) {
  return ['public', '/public/openai/v0/products', args] as const
}

export function useGetPublicOpenaiV0Products<TError = unknown>(
  args: InferRequestType<typeof client.public.openai.v0.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.openai.v0.products.$get>>>
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
        ? getGetPublicOpenaiV0ProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.openai.v0.products.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.openai.v0.products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicOpenaiV0Products<TError = unknown>(
  args: InferRequestType<typeof client.public.openai.v0.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.openai.v0.products.$get>>>
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
        ? getGetPublicOpenaiV0ProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.public.openai.v0.products.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.openai.v0.products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
