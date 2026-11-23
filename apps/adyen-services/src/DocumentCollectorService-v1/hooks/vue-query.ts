import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCrossBorderInvoicesKey() {
  return ['crossBorderInvoices'] as const
}

export function getPostCrossBorderInvoicesMutationKey() {
  return ['crossBorderInvoices', '/crossBorderInvoices', 'POST'] as const
}

export function getPostCrossBorderInvoicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crossBorderInvoices.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.crossBorderInvoices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCrossBorderInvoicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.crossBorderInvoices.$post>) {
      return parseResponse(client.crossBorderInvoices.$post(args, options))
    },
  })
}

export function usePostCrossBorderInvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.crossBorderInvoices.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.crossBorderInvoices.$post>,
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
  const mutationDefaults = getPostCrossBorderInvoicesMutationOptions<TError, TOnMutateResult>(
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
