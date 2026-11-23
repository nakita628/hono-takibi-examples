import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDipcrKey() {
  return ['dipcr'] as const
}

export function getPostDipcrCertificateMutationKey() {
  return ['dipcr', '/dipcr/certificate', 'POST'] as const
}

export function getPostDipcrCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dipcr.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dipcr.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDipcrCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dipcr.certificate.$post>) {
      return parseResponse(client.dipcr.certificate.$post(args, options))
    },
  })
}

export function createPostDipcrCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dipcr.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.dipcr.certificate.$post>,
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
    const mutationDefaults = getPostDipcrCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
