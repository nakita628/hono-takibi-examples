import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCircularKey() {
  return ['circular'] as const
}

export function getNestedTestKey() {
  return ['nestedTest'] as const
}

export function getNotQuiteCircularKey() {
  return ['not-quite-circular'] as const
}

export function getPutNestedTestKey() {
  return ['nestedTest', '/nestedTest', 'PUT'] as const
}

export function usePutNestedTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nestedTest.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.nestedTest.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNestedTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.nestedTest.$put> }) =>
        parseResponse(client.nestedTest.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCircularKey() {
  return ['circular', '/circular', 'PUT'] as const
}

export function usePutCircular<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.circular.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.circular.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCircularKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.circular.$put> }) =>
        parseResponse(client.circular.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNotQuiteCircularKey() {
  return ['not-quite-circular', '/not-quite-circular', 'POST'] as const
}

export function usePostNotQuiteCircular<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['not-quite-circular']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['not-quite-circular']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotQuiteCircularKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['not-quite-circular']['$post']> },
      ) => parseResponse(client['not-quite-circular'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
