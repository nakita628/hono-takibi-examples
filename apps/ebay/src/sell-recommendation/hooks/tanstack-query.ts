import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFindKey() {
  return ['find'] as const
}

export function getPostFindMutationKey() {
  return ['find', '/find', 'POST'] as const
}

export function getPostFindMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.find.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFindMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.find.$post>) {
      return parseResponse(client.find.$post(args, options))
    },
  })
}

export function usePostFind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.find.$post>>>>>
        | undefined,
        TError,
        InferRequestType<typeof client.find.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFindMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
