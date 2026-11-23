import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
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

export function usePostCheckSpelling<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.check_spelling.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.check_spelling.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCheckSpellingMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
