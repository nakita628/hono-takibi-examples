import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIlpmtKey() {
  return ['ilpmt'] as const
}

export function getPostIlpmtCertificateMutationKey() {
  return ['ilpmt', '/ilpmt/certificate', 'POST'] as const
}

export function getPostIlpmtCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ilpmt.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ilpmt.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIlpmtCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ilpmt.certificate.$post>) {
      return parseResponse(client.ilpmt.certificate.$post(args, options))
    },
  })
}

export function createPostIlpmtCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ilpmt.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ilpmt.certificate.$post>,
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
    const mutationDefaults = getPostIlpmtCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
