import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCvcerKey() {
  return ['cvcer'] as const
}

export function getPostCvcerCertificateMutationKey() {
  return ['cvcer', '/cvcer/certificate', 'POST'] as const
}

export function getPostCvcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cvcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cvcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCvcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cvcer.certificate.$post>) {
      return parseResponse(client.cvcer.certificate.$post(args, options))
    },
  })
}

export function createPostCvcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cvcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.cvcer.certificate.$post>,
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
    const mutationDefaults = getPostCvcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
