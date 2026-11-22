import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMappingKey() {
  return ['mapping'] as const
}

export function getPostMappingKey() {
  return ['mapping', '/mapping', 'POST'] as const
}

export function usePostMapping<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mapping.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.mapping.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMappingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mapping.$post> }) =>
        parseResponse(client.mapping.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMappingValuesKeyKey(
  args: InferRequestType<(typeof client.mapping.values)[':key']['$get']>,
) {
  return ['mapping', '/mapping/values/:key', args] as const
}

export function useGetMappingValuesKey<TError = unknown>(
  args: InferRequestType<(typeof client.mapping.values)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.mapping.values)[':key']['$get']>>>
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
        ? getGetMappingValuesKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.mapping.values)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mapping.values[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMappingValuesKey<TError = unknown>(
  args: InferRequestType<(typeof client.mapping.values)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.mapping.values)[':key']['$get']>>>
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
        ? getGetMappingValuesKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.mapping.values)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.mapping.values[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
