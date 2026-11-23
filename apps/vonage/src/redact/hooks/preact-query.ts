import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getTransactionKey() {
  return ['transaction'] as const
}

export function getPostTransactionMutationKey() {
  return ['transaction', '/transaction', 'POST'] as const
}

export function getPostTransactionMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.transaction.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transaction.$post>) {
      return parseResponse(client.transaction.$post(args, options))
    },
  })
}

export function usePostTransaction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transaction.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.transaction.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransactionMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
