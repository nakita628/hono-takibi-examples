import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFormKey() {
  return ['form'] as const
}

export function getPutFormPrimitiveMutationKey() {
  return ['form', '/form/primitive', 'PUT'] as const
}

export function getPutFormPrimitiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.form.primitive.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.form.primitive.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutFormPrimitiveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.form.primitive.$put>) {
      return parseResponse(client.form.primitive.$put(args, options))
    },
  })
}

export function createPutFormPrimitive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.form.primitive.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.form.primitive.$put>,
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
    const mutationDefaults = getPutFormPrimitiveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
