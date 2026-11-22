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

export function injectPostAiAlphaSearchMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAiAlphaSearchMessagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
