import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCallbackKey() {
  return ['callback'] as const
}

export function getPostCallbackMutationKey() {
  return ['callback', '/callback', 'POST'] as const
}

export function getPostCallbackMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callback.$post>>>>>,
    TError,
    InferRequestType<typeof client.callback.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCallbackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.callback.$post>) {
      return parseResponse(client.callback.$post(args, options))
    },
  })
}

export function createPostCallback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.callback.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.callback.$post>,
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
    const mutationDefaults = getPostCallbackMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
