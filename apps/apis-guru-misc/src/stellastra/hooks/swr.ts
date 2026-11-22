import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPostReviewKey() {
  return ['post-review'] as const
}

export function getPostPostReviewKey() {
  return ['post-review', '/post-review', 'POST'] as const
}

export function usePostPostReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['post-review']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['post-review']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPostReviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['post-review']['$post']> }) =>
        parseResponse(client['post-review'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
