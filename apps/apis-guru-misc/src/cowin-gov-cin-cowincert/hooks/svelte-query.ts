import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPdfKey() {
  return ['pdf'] as const
}

export function getPostPdfCertificateMutationKey() {
  return ['pdf', '/pdf/certificate', 'POST'] as const
}

export function getPostPdfCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pdf.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.pdf.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPdfCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pdf.certificate.$post>) {
      return parseResponse(client.pdf.certificate.$post(args, options))
    },
  })
}

export function createPostPdfCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pdf.certificate.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.pdf.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPdfCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
