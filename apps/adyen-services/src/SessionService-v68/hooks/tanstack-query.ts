import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSessionsKey() {
  return ['sessions'] as const
}

export function getPostSessionsMutationKey() {
  return ['sessions', '/sessions', 'POST'] as const
}

export function getPostSessionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$post>>>>>,
    TError,
    InferRequestType<typeof client.sessions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sessions.$post>) {
      return parseResponse(client.sessions.$post(args, options))
    },
  })
}

export function usePostSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sessions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSessionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
