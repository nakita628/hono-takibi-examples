import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRsbycKey() {
  return ['rsbyc'] as const
}

export function getPostRsbycCertificateMutationKey() {
  return ['rsbyc', '/rsbyc/certificate', 'POST'] as const
}

export function getPostRsbycCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rsbyc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.rsbyc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRsbycCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rsbyc.certificate.$post>) {
      return parseResponse(client.rsbyc.certificate.$post(args, options))
    },
  })
}

export function createPostRsbycCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.rsbyc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.rsbyc.certificate.$post>,
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
    const mutationDefaults = getPostRsbycCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
