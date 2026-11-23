import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1betaKey() {
  return ['v1beta'] as const
}

export function getV1betaEstimateCostScenarioKey() {
  return ['v1beta:estimateCostScenario'] as const
}

export function getPostV1betaBillingAccountEstimateCostScenarioMutationKey() {
  return ['v1beta', '/v1beta/:billingAccount:estimateCostScenario', 'POST'] as const
}

export function getPostV1betaBillingAccountEstimateCostScenarioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1beta)[':billingAccount:estimateCostScenario']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaBillingAccountEstimateCostScenarioMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta)[':billingAccount:estimateCostScenario']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta[':billingAccount:estimateCostScenario'].$post(args, options),
      )
    },
  })
}

export function usePostV1betaBillingAccountEstimateCostScenario<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1beta)[':billingAccount:estimateCostScenario']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta)[':billingAccount:estimateCostScenario']['$post']>,
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
  const mutationDefaults = getPostV1betaBillingAccountEstimateCostScenarioMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1betaEstimateCostScenarioMutationKey() {
  return ['v1beta:estimateCostScenario', '/v1beta:estimateCostScenario', 'POST'] as const
}

export function getPostV1betaEstimateCostScenarioMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['v1beta:estimateCostScenario']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['v1beta:estimateCostScenario']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaEstimateCostScenarioMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['v1beta:estimateCostScenario']['$post']>,
    ) {
      return parseResponse(client['v1beta:estimateCostScenario'].$post(args, options))
    },
  })
}

export function usePostV1betaEstimateCostScenario<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['v1beta:estimateCostScenario']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['v1beta:estimateCostScenario']['$post']>,
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
  const mutationDefaults = getPostV1betaEstimateCostScenarioMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
