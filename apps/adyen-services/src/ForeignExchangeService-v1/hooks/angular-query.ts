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

export function getRatesKey() {
  return ['rates'] as const
}

export function getPostRatesCalculateMutationKey() {
  return ['rates', '/rates/calculate', 'POST'] as const
}

export function getPostRatesCalculateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rates.calculate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.rates.calculate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRatesCalculateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rates.calculate.$post>) {
      return parseResponse(client.rates.calculate.$post(args, options))
    },
  })
}

export function injectPostRatesCalculate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rates.calculate.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.rates.calculate.$post>,
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
    const mutationDefaults = getPostRatesCalculateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
