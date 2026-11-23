import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFormatKey() {
  return ['{format}'] as const
}

export function getPostFormatMutationKey() {
  return [':format', '/:format', 'POST'] as const
}

export function getPostFormatMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)[':format']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFormatMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':format']['$post']>) {
      return parseResponse(client[':format'].$post(args, options))
    },
  })
}

export function usePostFormat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['$post']>>>>
        >,
        TError,
        InferRequestType<(typeof client)[':format']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFormatMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
