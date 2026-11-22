import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCreateTestCardRangesKey() {
  return ['createTestCardRanges'] as const
}

export function getPostCreateTestCardRangesMutationKey() {
  return ['createTestCardRanges', '/createTestCardRanges', 'POST'] as const
}

export function getPostCreateTestCardRangesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createTestCardRanges.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.createTestCardRanges.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateTestCardRangesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createTestCardRanges.$post>) {
      return parseResponse(client.createTestCardRanges.$post(args, options))
    },
  })
}

export function usePostCreateTestCardRanges<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.createTestCardRanges.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.createTestCardRanges.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreateTestCardRangesMutationOptions<TError, TOnMutateResult>(
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
