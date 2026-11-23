import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDgcerKey() {
  return ['dgcer'] as const
}

export function getPostDgcerCertificateMutationKey() {
  return ['dgcer', '/dgcer/certificate', 'POST'] as const
}

export function getPostDgcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dgcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dgcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDgcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dgcer.certificate.$post>) {
      return parseResponse(client.dgcer.certificate.$post(args, options))
    },
  })
}

export function createPostDgcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dgcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.dgcer.certificate.$post>,
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
    const mutationDefaults = getPostDgcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
