import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getNdcerKey() {
  return ['ndcer'] as const
}

export function getPostNdcerCertificateMutationKey() {
  return ['ndcer', '/ndcer/certificate', 'POST'] as const
}

export function getPostNdcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ndcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ndcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNdcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ndcer.certificate.$post>) {
      return parseResponse(client.ndcer.certificate.$post(args, options))
    },
  })
}

export function createPostNdcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ndcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ndcer.certificate.$post>,
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
    const mutationDefaults = getPostNdcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
