import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
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

export function usePutFormPrimitive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.form.primitive.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.form.primitive.$put>,
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
  const mutationDefaults = getPutFormPrimitiveMutationOptions<TError, TOnMutateResult>(
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
