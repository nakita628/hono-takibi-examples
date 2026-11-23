import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRequestSubjectErasureKey() {
  return ['requestSubjectErasure'] as const
}

export function getPostRequestSubjectErasureMutationKey() {
  return ['requestSubjectErasure', '/requestSubjectErasure', 'POST'] as const
}

export function getPostRequestSubjectErasureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.requestSubjectErasure.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.requestSubjectErasure.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRequestSubjectErasureMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.requestSubjectErasure.$post>) {
      return parseResponse(client.requestSubjectErasure.$post(args, options))
    },
  })
}

export function usePostRequestSubjectErasure<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.requestSubjectErasure.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.requestSubjectErasure.$post>,
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
  const mutationDefaults = getPostRequestSubjectErasureMutationOptions<TError, TOnMutateResult>(
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
