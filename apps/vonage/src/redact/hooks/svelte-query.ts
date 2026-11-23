import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getTransactionKey() {
  return ['transaction'] as const
}

export function getPostTransactionMutationKey() {
  return ['transaction', '/transaction', 'POST'] as const
}

export function getPostTransactionMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.transaction.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transaction.$post>) {
      return parseResponse(client.transaction.$post(args, options))
    },
  })
}

export function createPostTransaction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.transaction.$post>,
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
    const mutationDefaults = getPostTransactionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
