import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRatesKey() {
  return ['rates'] as const
}

export function getPostRatesCalculateKey() {
  return ['rates', '/rates/calculate', 'POST'] as const
}

export function usePostRatesCalculate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rates.calculate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.rates.calculate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRatesCalculateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.rates.calculate.$post> }) =>
        parseResponse(client.rates.calculate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
