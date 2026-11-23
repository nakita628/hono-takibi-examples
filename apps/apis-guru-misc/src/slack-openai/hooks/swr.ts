import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAiAlphaSearchMessagesKey() {
  return ['ai.alpha.search.messages'] as const
}

export function getPostAiAlphaSearchMessagesKey() {
  return ['ai.alpha.search.messages', '/ai.alpha.search.messages', 'POST'] as const
}

export function usePostAiAlphaSearchMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['ai.alpha.search.messages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['ai.alpha.search.messages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAiAlphaSearchMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['ai.alpha.search.messages']['$post']> },
      ) => parseResponse(client['ai.alpha.search.messages'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
