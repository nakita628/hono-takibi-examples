import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1betaKey() {
  return ['v1beta'] as const
}

export function getV1betaEstimateCostScenarioKey() {
  return ['v1beta:estimateCostScenario'] as const
}

export function getPostV1betaBillingAccountEstimateCostScenarioKey() {
  return ['v1beta', '/v1beta/:billingAccount:estimateCostScenario', 'POST'] as const
}

export function usePostV1betaBillingAccountEstimateCostScenario<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta)[':billingAccount:estimateCostScenario']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1beta)[':billingAccount:estimateCostScenario']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaBillingAccountEstimateCostScenarioKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1beta)[':billingAccount:estimateCostScenario']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1beta[':billingAccount:estimateCostScenario'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1betaEstimateCostScenarioKey() {
  return ['v1beta:estimateCostScenario', '/v1beta:estimateCostScenario', 'POST'] as const
}

export function usePostV1betaEstimateCostScenario<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v1beta:estimateCostScenario']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['v1beta:estimateCostScenario']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1betaEstimateCostScenarioKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['v1beta:estimateCostScenario']['$post']> },
      ) => parseResponse(client['v1beta:estimateCostScenario'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
