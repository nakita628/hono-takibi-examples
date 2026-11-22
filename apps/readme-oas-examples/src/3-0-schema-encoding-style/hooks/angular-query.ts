import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectPutFormPrimitive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.form.primitive.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.form.primitive.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutFormPrimitiveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
