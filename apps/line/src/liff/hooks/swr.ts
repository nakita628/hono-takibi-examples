import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getLiffKey() {
  return ['liff'] as const
}

export function getGetLiffV1AppsKey() {
  return ['liff', '/liff/v1/apps'] as const
}

export function useGetLiffV1Apps<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liff.v1.apps.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLiffV1AppsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liff.v1.apps.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.liff.v1.apps.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLiffV1Apps<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liff.v1.apps.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLiffV1AppsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liff.v1.apps.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.liff.v1.apps.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLiffV1AppsKey() {
  return ['liff', '/liff/v1/apps', 'POST'] as const
}

export function usePostLiffV1Apps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liff.v1.apps.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.liff.v1.apps.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLiffV1AppsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.liff.v1.apps.$post> }) =>
        parseResponse(client.liff.v1.apps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutLiffV1AppsLiffIdKey() {
  return ['liff', '/liff/v1/apps/:liffId', 'PUT'] as const
}

export function usePutLiffV1AppsLiffId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.liff.v1.apps)[':liffId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.liff.v1.apps)[':liffId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutLiffV1AppsLiffIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.liff.v1.apps)[':liffId']['$put']> },
      ) => parseResponse(client.liff.v1.apps[':liffId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLiffV1AppsLiffIdKey() {
  return ['liff', '/liff/v1/apps/:liffId', 'DELETE'] as const
}

export function useDeleteLiffV1AppsLiffId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.liff.v1.apps)[':liffId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.liff.v1.apps)[':liffId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLiffV1AppsLiffIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.liff.v1.apps)[':liffId']['$delete']> },
      ) => parseResponse(client.liff.v1.apps[':liffId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
