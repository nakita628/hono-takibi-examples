import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOpinionsKey() {
  return ['opinions'] as const
}

export function getPostOpinionsMutationKey() {
  return ['opinions', '/opinions', 'POST'] as const
}

export function getPostOpinionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.opinions.$post>>>>>,
    TError,
    InferRequestType<typeof client.opinions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOpinionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.opinions.$post>) {
      return parseResponse(client.opinions.$post(args, options))
    },
  })
}

export function createPostOpinions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.opinions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.opinions.$post>,
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
    const mutationDefaults = getPostOpinionsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
