import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPvcerKey() {
  return ['pvcer'] as const
}

export function getPostPvcerCertificateMutationKey() {
  return ['pvcer', '/pvcer/certificate', 'POST'] as const
}

export function getPostPvcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pvcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.pvcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPvcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pvcer.certificate.$post>) {
      return parseResponse(client.pvcer.certificate.$post(args, options))
    },
  })
}

export function createPostPvcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.pvcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.pvcer.certificate.$post>,
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
    const mutationDefaults = getPostPvcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
