import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPersonalizeRankingKey() {
  return ['personalize-ranking'] as const
}

export function getRecommendationsKey() {
  return ['recommendations'] as const
}

export function getPostPersonalizeRankingMutationKey() {
  return ['personalize-ranking', '/personalize-ranking', 'POST'] as const
}

export function getPostPersonalizeRankingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['personalize-ranking']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['personalize-ranking']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPersonalizeRankingMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['personalize-ranking']['$post']>) {
      return parseResponse(client['personalize-ranking'].$post(args, options))
    },
  })
}

export function usePostPersonalizeRanking<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['personalize-ranking']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['personalize-ranking']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPersonalizeRankingMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRecommendationsMutationKey() {
  return ['recommendations', '/recommendations', 'POST'] as const
}

export function getPostRecommendationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.recommendations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRecommendationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.recommendations.$post>) {
      return parseResponse(client.recommendations.$post(args, options))
    },
  })
}

export function usePostRecommendations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recommendations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.recommendations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRecommendationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
