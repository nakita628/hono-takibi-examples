import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOpinionsKey() {
  return ['opinions'] as const
}

export function getPostOpinionsMutationKey() {
  return ['opinions', '/opinions', 'POST'] as const
}

export function getPostOpinionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.opinions.$post>>>>>,
    TError,
    InferRequestType<typeof client.opinions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOpinionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.opinions.$post>) {
      return parseResponse(client.opinions.$post(args, options))
    },
  })
}

export function usePostOpinions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.opinions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.opinions.$post>,
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
  const mutationDefaults = getPostOpinionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
