import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getConvertKey() {
  return ['convert'] as const
}

export function getPostConvertMutationKey() {
  return ['convert', '/convert', 'POST'] as const
}

export function getPostConvertMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.$post>>>>>,
    TError,
    InferRequestType<typeof client.convert.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConvertMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.convert.$post>) {
      return parseResponse(client.convert.$post(args, options))
    },
  })
}

export function createPostConvert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.convert.$post>,
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
    const mutationDefaults = getPostConvertMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
