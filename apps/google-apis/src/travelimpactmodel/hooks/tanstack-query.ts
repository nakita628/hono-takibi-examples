import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1FlightsComputeFlightEmissionsMutationKey() {
  return ['v1', '/v1/flights:computeFlightEmissions', 'POST'] as const
}

export function getPostV1FlightsComputeFlightEmissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['flights:computeFlightEmissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['flights:computeFlightEmissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FlightsComputeFlightEmissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['flights:computeFlightEmissions']['$post']>,
    ) {
      return parseResponse(client.v1['flights:computeFlightEmissions'].$post(args, options))
    },
  })
}

export function usePostV1FlightsComputeFlightEmissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['flights:computeFlightEmissions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['flights:computeFlightEmissions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1FlightsComputeFlightEmissionsMutationOptions<
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
