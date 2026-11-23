import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGroupUniqueIdKey() {
  return ['{groupUniqueId}'] as const
}

export function getGetGroupUniqueIdKey(
  args: InferRequestType<(typeof client)[':groupUniqueId']['$get']>,
) {
  return [':groupUniqueId', '/:groupUniqueId', args] as const
}

export function useGetGroupUniqueId<TError = unknown>(
  args: InferRequestType<(typeof client)[':groupUniqueId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':groupUniqueId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetGroupUniqueIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':groupUniqueId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':groupUniqueId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupUniqueId<TError = unknown>(
  args: InferRequestType<(typeof client)[':groupUniqueId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':groupUniqueId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetGroupUniqueIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':groupUniqueId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':groupUniqueId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGroupUniqueIdKey() {
  return [':groupUniqueId', '/:groupUniqueId', 'PUT'] as const
}

export function usePutGroupUniqueId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':groupUniqueId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':groupUniqueId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGroupUniqueIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':groupUniqueId']['$put']> },
      ) => parseResponse(client[':groupUniqueId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchGroupUniqueIdKey() {
  return [':groupUniqueId', '/:groupUniqueId', 'PATCH'] as const
}

export function usePatchGroupUniqueId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':groupUniqueId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':groupUniqueId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGroupUniqueIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':groupUniqueId']['$patch']> },
      ) => parseResponse(client[':groupUniqueId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
