import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getLicerKey() {
  return ['licer'] as const
}

export function getPostLicerCertificateMutationKey() {
  return ['licer', '/licer/certificate', 'POST'] as const
}

export function getPostLicerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.licer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLicerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.licer.certificate.$post>) {
      return parseResponse(client.licer.certificate.$post(args, options))
    },
  })
}

export function createPostLicerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.licer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.licer.certificate.$post>,
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
    const mutationDefaults = getPostLicerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
