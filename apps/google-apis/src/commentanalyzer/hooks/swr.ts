import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1alpha1Key() {
  return ['v1alpha1'] as const
}

export function getPostV1alpha1CommentsAnalyzeKey() {
  return ['v1alpha1', '/v1alpha1/comments:analyze', 'POST'] as const
}

export function usePostV1alpha1CommentsAnalyze<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)['comments:analyze']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)['comments:analyze']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1CommentsAnalyzeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1alpha1)['comments:analyze']['$post']> },
      ) => parseResponse(client.v1alpha1['comments:analyze'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1alpha1CommentsSuggestscoreKey() {
  return ['v1alpha1', '/v1alpha1/comments:suggestscore', 'POST'] as const
}

export function usePostV1alpha1CommentsSuggestscore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)['comments:suggestscore']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1alpha1)['comments:suggestscore']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1alpha1CommentsSuggestscoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1alpha1)['comments:suggestscore']['$post']> },
      ) => parseResponse(client.v1alpha1['comments:suggestscore'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
