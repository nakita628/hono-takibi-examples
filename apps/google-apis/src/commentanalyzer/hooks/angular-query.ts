import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1alpha1Key() {
  return ['v1alpha1'] as const
}

export function getPostV1alpha1CommentsAnalyzeMutationKey() {
  return ['v1alpha1', '/v1alpha1/comments:analyze', 'POST'] as const
}

export function getPostV1alpha1CommentsAnalyzeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)['comments:analyze']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)['comments:analyze']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1CommentsAnalyzeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)['comments:analyze']['$post']>,
    ) {
      return parseResponse(client.v1alpha1['comments:analyze'].$post(args, options))
    },
  })
}

export function injectPostV1alpha1CommentsAnalyze<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1alpha1)['comments:analyze']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1alpha1)['comments:analyze']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1alpha1CommentsAnalyzeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1alpha1CommentsSuggestscoreMutationKey() {
  return ['v1alpha1', '/v1alpha1/comments:suggestscore', 'POST'] as const
}

export function getPostV1alpha1CommentsSuggestscoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)['comments:suggestscore']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)['comments:suggestscore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1CommentsSuggestscoreMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)['comments:suggestscore']['$post']>,
    ) {
      return parseResponse(client.v1alpha1['comments:suggestscore'].$post(args, options))
    },
  })
}

export function injectPostV1alpha1CommentsSuggestscore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1alpha1)['comments:suggestscore']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1alpha1)['comments:suggestscore']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1alpha1CommentsSuggestscoreMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
