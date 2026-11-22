import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGet3dsAvailabilityKey() {
  return ['get3dsAvailability'] as const
}

export function getGetCostEstimateKey() {
  return ['getCostEstimate'] as const
}

export function getPostGet3dsAvailabilityKey() {
  return ['get3dsAvailability', '/get3dsAvailability', 'POST'] as const
}

export function usePostGet3dsAvailability<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.get3dsAvailability.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.get3dsAvailability.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGet3dsAvailabilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.get3dsAvailability.$post> }) =>
        parseResponse(client.get3dsAvailability.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetCostEstimateKey() {
  return ['getCostEstimate', '/getCostEstimate', 'POST'] as const
}

export function usePostGetCostEstimate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getCostEstimate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.getCostEstimate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetCostEstimateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getCostEstimate.$post> }) =>
        parseResponse(client.getCostEstimate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
