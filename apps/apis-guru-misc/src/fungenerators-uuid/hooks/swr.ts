import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getUuidKey() {
  return ['uuid'] as const
}

export function getGetUuidKey(args: InferRequestType<typeof client.uuid.$get>) {
  return ['uuid', '/uuid', args] as const
}

export function useGetUuid<TError = unknown>(
  args: InferRequestType<typeof client.uuid.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUuidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.uuid.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetUuid<TError = unknown>(
  args: InferRequestType<typeof client.uuid.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUuidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.uuid.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostUuidKey() {
  return ['uuid', '/uuid', 'POST'] as const
}

export function usePostUuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uuid.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.uuid.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUuidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.uuid.$post> }) =>
        parseResponse(client.uuid.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUuidVersionVersionKey(
  args: InferRequestType<(typeof client.uuid.version)[':version']['$get']>,
) {
  return ['uuid', '/uuid/version/:version', args] as const
}

export function useGetUuidVersionVersion<TError = unknown>(
  args: InferRequestType<(typeof client.uuid.version)[':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.uuid.version)[':version']['$get']>>
          >
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
        ? getGetUuidVersionVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.uuid.version)[':version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.uuid.version[':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUuidVersionVersion<TError = unknown>(
  args: InferRequestType<(typeof client.uuid.version)[':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.uuid.version)[':version']['$get']>>
          >
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
        ? getGetUuidVersionVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.uuid.version)[':version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.uuid.version[':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
