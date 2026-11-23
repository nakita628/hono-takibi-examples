import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetMediaKey() {
  return ['getMedia'] as const
}

export function getPostGetMediaMutationKey() {
  return ['getMedia', '/getMedia', 'POST'] as const
}

export function getPostGetMediaMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getMedia.$post>>>>>,
    TError,
    InferRequestType<typeof client.getMedia.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetMediaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getMedia.$post>) {
      return parseResponse(client.getMedia.$post(args, options))
    },
  })
}

export function usePostGetMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getMedia.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.getMedia.$post>,
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
  const mutationDefaults = getPostGetMediaMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
