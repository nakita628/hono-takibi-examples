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

export function injectPostPostReview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPostReviewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
