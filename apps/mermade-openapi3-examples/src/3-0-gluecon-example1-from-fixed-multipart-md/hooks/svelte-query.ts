import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSubmitKey() {
  return ['submit'] as const
}

export function getPostSubmitMutationKey() {
  return ['submit', '/submit', 'POST'] as const
}

export function getPostSubmitMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.submit.$post>>>>>,
    TError,
    InferRequestType<typeof client.submit.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSubmitMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.submit.$post>) {
      return parseResponse(client.submit.$post(args, options))
    },
  })
}

export function createPostSubmit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.submit.$post>>>>>,
        TError,
        InferRequestType<typeof client.submit.$post>,
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
    const mutationDefaults = getPostSubmitMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
