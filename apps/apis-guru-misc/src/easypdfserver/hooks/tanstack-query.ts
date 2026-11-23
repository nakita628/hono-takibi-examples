import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMakePdfKey() {
  return ['make-pdf'] as const
}

export function getPostMakePdfMutationKey() {
  return ['make-pdf', '/make-pdf', 'POST'] as const
}

export function getPostMakePdfMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['make-pdf']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['make-pdf']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMakePdfMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['make-pdf']['$post']>) {
      return parseResponse(client['make-pdf'].$post(args, options))
    },
  })
}

export function usePostMakePdf<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['make-pdf']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['make-pdf']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMakePdfMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
