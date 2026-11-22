import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGet3dsAvailabilityKey() {
  return ['get3dsAvailability'] as const
}

export function getGetCostEstimateKey() {
  return ['getCostEstimate'] as const
}

export function getPostGet3dsAvailabilityMutationKey() {
  return ['get3dsAvailability', '/get3dsAvailability', 'POST'] as const
}

export function getPostGet3dsAvailabilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get3dsAvailability.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.get3dsAvailability.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGet3dsAvailabilityMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.get3dsAvailability.$post>) {
      return parseResponse(client.get3dsAvailability.$post(args, options))
    },
  })
}

export function usePostGet3dsAvailability<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.get3dsAvailability.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.get3dsAvailability.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGet3dsAvailabilityMutationOptions<TError, TOnMutateResult>(
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

export function getPostGetCostEstimateMutationKey() {
  return ['getCostEstimate', '/getCostEstimate', 'POST'] as const
}

export function getPostGetCostEstimateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getCostEstimate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.getCostEstimate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetCostEstimateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getCostEstimate.$post>) {
      return parseResponse(client.getCostEstimate.$post(args, options))
    },
  })
}

export function usePostGetCostEstimate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getCostEstimate.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.getCostEstimate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetCostEstimateMutationOptions<TError, TOnMutateResult>(
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
