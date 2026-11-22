import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetMediaKey() {
  return ['getMedia'] as const
}

export function getPostGetMediaMutationKey() {
  return ['getMedia', '/getMedia', 'POST'] as const
}

export function getPostGetMediaMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getMedia.$post>>>>>,
    TError,
    InferRequestType<typeof client.getMedia.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetMediaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getMedia.$post>) {
      return parseResponse(client.getMedia.$post(args, options))
    },
  })
}

export function createPostGetMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getMedia.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.getMedia.$post>,
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
    const mutationDefaults = getPostGetMediaMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
