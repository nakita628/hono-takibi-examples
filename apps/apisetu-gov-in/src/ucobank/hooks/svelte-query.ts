import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getTdcerKey() {
  return ['tdcer'] as const
}

export function getPostTdcerCertificateMutationKey() {
  return ['tdcer', '/tdcer/certificate', 'POST'] as const
}

export function getPostTdcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tdcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tdcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTdcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tdcer.certificate.$post>) {
      return parseResponse(client.tdcer.certificate.$post(args, options))
    },
  })
}

export function createPostTdcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tdcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.tdcer.certificate.$post>,
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
    const mutationDefaults = getPostTdcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
