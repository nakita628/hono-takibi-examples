import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCheckSpellingKey() {
  return ['check_spelling'] as const
}

export function getPostCheckSpellingMutationKey() {
  return ['check_spelling', '/check_spelling', 'POST'] as const
}

export function getPostCheckSpellingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_spelling.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.check_spelling.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCheckSpellingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.check_spelling.$post>) {
      return parseResponse(client.check_spelling.$post(args, options))
    },
  })
}

export function createPostCheckSpelling<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_spelling.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.check_spelling.$post>,
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
    const mutationDefaults = getPostCheckSpellingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
