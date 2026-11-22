import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getStreamsKey() {
  return ['streams'] as const
}

export function getPostStreamsMutationKey() {
  return ['streams', '/streams', 'POST'] as const
}

export function getPostStreamsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$post>>>>>,
    TError,
    InferRequestType<typeof client.streams.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStreamsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.streams.$post>) {
      return parseResponse(client.streams.$post(args, options))
    },
  })
}

export function createPostStreams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.streams.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.streams.$post>,
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
    const mutationDefaults = getPostStreamsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
