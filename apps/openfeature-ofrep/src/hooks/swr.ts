import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOfrepKey() {
  return ['ofrep'] as const
}

export function getPostOfrepV1EvaluateFlagsKeyKey() {
  return ['ofrep', '/ofrep/v1/evaluate/flags/:key', 'POST'] as const
}

export function usePostOfrepV1EvaluateFlagsKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ofrep.v1.evaluate.flags)[':key']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ofrep.v1.evaluate.flags)[':key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOfrepV1EvaluateFlagsKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ofrep.v1.evaluate.flags)[':key']['$post']> },
      ) => parseResponse(client.ofrep.v1.evaluate.flags[':key'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOfrepV1EvaluateFlagsKey() {
  return ['ofrep', '/ofrep/v1/evaluate/flags', 'POST'] as const
}

export function usePostOfrepV1EvaluateFlags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ofrep.v1.evaluate.flags.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ofrep.v1.evaluate.flags.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOfrepV1EvaluateFlagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ofrep.v1.evaluate.flags.$post> },
      ) => parseResponse(client.ofrep.v1.evaluate.flags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
