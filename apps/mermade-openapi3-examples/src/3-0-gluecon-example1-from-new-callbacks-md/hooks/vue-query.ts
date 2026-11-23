import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSubscribeKey() {
  return ['subscribe'] as const
}

export function getPostSubscribeMutationKey() {
  return ['subscribe', '/subscribe', 'POST'] as const
}

export function getPostSubscribeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscribe.$post>>>>>,
    TError,
    InferRequestType<typeof client.subscribe.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscribeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subscribe.$post>) {
      return parseResponse(client.subscribe.$post(args, options))
    },
  })
}

export function usePostSubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscribe.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.subscribe.$post>,
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
  const mutationDefaults = getPostSubscribeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
