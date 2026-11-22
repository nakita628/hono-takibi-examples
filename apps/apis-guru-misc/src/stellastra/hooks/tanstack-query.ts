import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPostReviewKey() {
  return ['post-review'] as const
}

export function getPostPostReviewMutationKey() {
  return ['post-review', '/post-review', 'POST'] as const
}

export function getPostPostReviewMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['post-review']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['post-review']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPostReviewMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['post-review']['$post']>) {
      return parseResponse(client['post-review'].$post(args, options))
    },
  })
}

export function usePostPostReview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['post-review']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['post-review']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPostReviewMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
