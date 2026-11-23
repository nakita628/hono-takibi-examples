import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRegressionKey() {
  return ['regression'] as const
}

export function getPostRegressionApiMutationKey() {
  return ['regression', '/regression/api', 'POST'] as const
}

export function getPostRegressionApiMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regression.api.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.regression.api.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRegressionApiMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.regression.api.$post>) {
      return parseResponse(client.regression.api.$post(args, options))
    },
  })
}

export function usePostRegressionApi<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regression.api.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.regression.api.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRegressionApiMutationOptions<TError, TOnMutateResult>(
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
