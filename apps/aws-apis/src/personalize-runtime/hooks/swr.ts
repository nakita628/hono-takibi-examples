import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPersonalizeRankingKey() {
  return ['personalize-ranking'] as const
}

export function getRecommendationsKey() {
  return ['recommendations'] as const
}

export function getPostPersonalizeRankingKey() {
  return ['personalize-ranking', '/personalize-ranking', 'POST'] as const
}

export function usePostPersonalizeRanking<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['personalize-ranking']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['personalize-ranking']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPersonalizeRankingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['personalize-ranking']['$post']> },
      ) => parseResponse(client['personalize-ranking'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRecommendationsKey() {
  return ['recommendations', '/recommendations', 'POST'] as const
}

export function usePostRecommendations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.recommendations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecommendationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.recommendations.$post> }) =>
        parseResponse(client.recommendations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
