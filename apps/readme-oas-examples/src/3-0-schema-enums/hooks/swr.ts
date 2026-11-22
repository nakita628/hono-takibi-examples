import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAnythingKey() {
  return ['anything'] as const
}

export function getGetAnythingStringsKey(
  args: InferRequestType<typeof client.anything.strings.$get>,
) {
  return ['anything', '/anything/strings', args] as const
}

export function useGetAnythingStrings<TError = unknown>(
  args: InferRequestType<typeof client.anything.strings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$get>>>>
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
        ? getGetAnythingStringsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything.strings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnythingStrings<TError = unknown>(
  args: InferRequestType<typeof client.anything.strings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$get>>>>
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
        ? getGetAnythingStringsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anything.strings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAnythingStringsKey() {
  return ['anything', '/anything/strings', 'PUT'] as const
}

export function usePutAnythingStrings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.anything.strings.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAnythingStringsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.anything.strings.$put> }) =>
        parseResponse(client.anything.strings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnythingStringsKey() {
  return ['anything', '/anything/strings', 'POST'] as const
}

export function usePostAnythingStrings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anything.strings.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.anything.strings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnythingStringsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.anything.strings.$post> }) =>
        parseResponse(client.anything.strings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
