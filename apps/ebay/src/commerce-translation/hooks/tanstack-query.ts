import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getTranslateKey() {
  return ['translate'] as const
}

export function getPostTranslateMutationKey() {
  return ['translate', '/translate', 'POST'] as const
}

export function getPostTranslateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.translate.$post>>>>>,
    TError,
    InferRequestType<typeof client.translate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTranslateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.translate.$post>) {
      return parseResponse(client.translate.$post(args, options))
    },
  })
}

export function usePostTranslate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.translate.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.translate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTranslateMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
