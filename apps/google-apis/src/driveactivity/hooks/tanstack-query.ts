import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getPostV2ActivityQueryMutationKey() {
  return ['v2', '/v2/activity:query', 'POST'] as const
}

export function getPostV2ActivityQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['activity:query']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['activity:query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ActivityQueryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['activity:query']['$post']>) {
      return parseResponse(client.v2['activity:query'].$post(args, options))
    },
  })
}

export function usePostV2ActivityQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['activity:query']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['activity:query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ActivityQueryMutationOptions<TError, TOnMutateResult>(
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
