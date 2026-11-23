import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFmcerKey() {
  return ['fmcer'] as const
}

export function getPostFmcerCertificateMutationKey() {
  return ['fmcer', '/fmcer/certificate', 'POST'] as const
}

export function getPostFmcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fmcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.fmcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFmcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fmcer.certificate.$post>) {
      return parseResponse(client.fmcer.certificate.$post(args, options))
    },
  })
}

export function createPostFmcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.fmcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.fmcer.certificate.$post>,
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
    const mutationDefaults = getPostFmcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
