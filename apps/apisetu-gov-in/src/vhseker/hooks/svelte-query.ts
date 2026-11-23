import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getVochseKey() {
  return ['vochse'] as const
}

export function getPostVochseCertificateMutationKey() {
  return ['vochse', '/vochse/certificate', 'POST'] as const
}

export function getPostVochseCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vochse.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.vochse.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVochseCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.vochse.certificate.$post>) {
      return parseResponse(client.vochse.certificate.$post(args, options))
    },
  })
}

export function createPostVochseCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.vochse.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.vochse.certificate.$post>,
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
    const mutationDefaults = getPostVochseCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
