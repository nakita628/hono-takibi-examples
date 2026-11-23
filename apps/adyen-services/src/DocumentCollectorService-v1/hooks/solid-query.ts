import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function createPostCrossBorderInvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.crossBorderInvoices.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.crossBorderInvoices.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCrossBorderInvoicesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
