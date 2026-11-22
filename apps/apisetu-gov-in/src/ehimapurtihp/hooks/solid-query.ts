import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRatcrKey() {
  return ['ratcr'] as const
}

export function getPostRatcrCertificateMutationKey() {
  return ['ratcr', '/ratcr/certificate', 'POST'] as const
}

export function getPostRatcrCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratcr.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ratcr.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRatcrCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ratcr.certificate.$post>) {
      return parseResponse(client.ratcr.certificate.$post(args, options))
    },
  })
}

export function createPostRatcrCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ratcr.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ratcr.certificate.$post>,
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
    const mutationDefaults = getPostRatcrCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
