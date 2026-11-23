import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSubscribeKey() {
  return ['subscribe'] as const
}

export function getPostSubscribeMutationKey() {
  return ['subscribe', '/subscribe', 'POST'] as const
}

export function getPostSubscribeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscribe.$post>>>>>,
    TError,
    InferRequestType<typeof client.subscribe.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscribeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subscribe.$post>) {
      return parseResponse(client.subscribe.$post(args, options))
    },
  })
}

export function createPostSubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscribe.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.subscribe.$post>,
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
    const mutationDefaults = getPostSubscribeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
