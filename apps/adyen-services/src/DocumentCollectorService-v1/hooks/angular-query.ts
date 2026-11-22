import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectPostCrossBorderInvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.crossBorderInvoices.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.crossBorderInvoices.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCrossBorderInvoicesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
