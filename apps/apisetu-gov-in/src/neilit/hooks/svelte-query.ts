import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSkcerKey() {
  return ['skcer'] as const
}

export function getPostSkcerCertificateMutationKey() {
  return ['skcer', '/skcer/certificate', 'POST'] as const
}

export function getPostSkcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.skcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.skcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSkcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.skcer.certificate.$post>) {
      return parseResponse(client.skcer.certificate.$post(args, options))
    },
  })
}

export function createPostSkcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.skcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.skcer.certificate.$post>,
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
    const mutationDefaults = getPostSkcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
