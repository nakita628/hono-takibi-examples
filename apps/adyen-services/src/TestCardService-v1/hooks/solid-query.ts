import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCreateTestCardRangesKey() {
  return ['createTestCardRanges'] as const
}

export function getPostCreateTestCardRangesMutationKey() {
  return ['createTestCardRanges', '/createTestCardRanges', 'POST'] as const
}

export function getPostCreateTestCardRangesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createTestCardRanges.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.createTestCardRanges.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateTestCardRangesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createTestCardRanges.$post>) {
      return parseResponse(client.createTestCardRanges.$post(args, options))
    },
  })
}

export function createPostCreateTestCardRanges<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.createTestCardRanges.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.createTestCardRanges.$post>,
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
    const mutationDefaults = getPostCreateTestCardRangesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
