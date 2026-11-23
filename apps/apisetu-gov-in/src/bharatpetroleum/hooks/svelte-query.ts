import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getLpgsvKey() {
  return ['lpgsv'] as const
}

export function getPostLpgsvCertificateMutationKey() {
  return ['lpgsv', '/lpgsv/certificate', 'POST'] as const
}

export function getPostLpgsvCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lpgsv.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.lpgsv.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLpgsvCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lpgsv.certificate.$post>) {
      return parseResponse(client.lpgsv.certificate.$post(args, options))
    },
  })
}

export function createPostLpgsvCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.lpgsv.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.lpgsv.certificate.$post>,
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
    const mutationDefaults = getPostLpgsvCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
