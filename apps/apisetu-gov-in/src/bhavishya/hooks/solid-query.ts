import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPecerKey() {
  return ['pecer'] as const
}

export function getPostPecerCertificateMutationKey() {
  return ['pecer', '/pecer/certificate', 'POST'] as const
}

export function getPostPecerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pecer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.pecer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPecerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pecer.certificate.$post>) {
      return parseResponse(client.pecer.certificate.$post(args, options))
    },
  })
}

export function createPostPecerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.pecer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.pecer.certificate.$post>,
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
    const mutationDefaults = getPostPecerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
