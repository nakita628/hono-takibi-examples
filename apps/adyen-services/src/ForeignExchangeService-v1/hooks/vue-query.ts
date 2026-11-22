import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
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

export function usePostRatesCalculate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rates.calculate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.rates.calculate.$post>,
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
  const mutationDefaults = getPostRatesCalculateMutationOptions<TError, TOnMutateResult>(
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
