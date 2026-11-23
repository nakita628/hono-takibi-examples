import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMessagesKey() {
  return ['messages'] as const
}

export function getGetMessagesMessageIdKey(
  args: InferRequestType<(typeof client.messages)[':messageId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['messages', '/messages/:messageId', keyArgs] as const
}

export function useGetMessagesMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.messages)[':messageId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':messageId']['$get']>>>
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
        ? getGetMessagesMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':messageId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messages[':messageId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagesMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.messages)[':messageId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':messageId']['$get']>>>
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
        ? getGetMessagesMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':messageId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messages[':messageId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMessagesMessageIdKey() {
  return ['messages', '/messages/:messageId', 'POST'] as const
}

export function usePostMessagesMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':messageId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messages)[':messageId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesMessageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.messages)[':messageId']['$post']> },
      ) => parseResponse(client.messages[':messageId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
