import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getTranslateKey() {
  return ['translate'] as const
}

export function getPostTranslateMutationKey() {
  return ['translate', '/translate', 'POST'] as const
}

export function getPostTranslateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.translate.$post>>>>>,
    TError,
    InferRequestType<typeof client.translate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTranslateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.translate.$post>) {
      return parseResponse(client.translate.$post(args, options))
    },
  })
}

export function createPostTranslate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.translate.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.translate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTranslateMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
