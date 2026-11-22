import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAiAlphaSearchMessagesKey() {
  return ['ai.alpha.search.messages'] as const
}

export function getPostAiAlphaSearchMessagesMutationKey() {
  return ['ai.alpha.search.messages', '/ai.alpha.search.messages', 'POST'] as const
}

export function getPostAiAlphaSearchMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['ai.alpha.search.messages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['ai.alpha.search.messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAiAlphaSearchMessagesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['ai.alpha.search.messages']['$post']>) {
      return parseResponse(client['ai.alpha.search.messages'].$post(args, options))
    },
  })
}

export function createPostAiAlphaSearchMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['ai.alpha.search.messages']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['ai.alpha.search.messages']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAiAlphaSearchMessagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
