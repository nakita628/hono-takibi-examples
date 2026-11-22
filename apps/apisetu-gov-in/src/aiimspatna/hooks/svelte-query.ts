import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getLabrpKey() {
  return ['labrp'] as const
}

export function getPostLabrpCertificateMutationKey() {
  return ['labrp', '/labrp/certificate', 'POST'] as const
}

export function getPostLabrpCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labrp.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.labrp.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLabrpCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.labrp.certificate.$post>) {
      return parseResponse(client.labrp.certificate.$post(args, options))
    },
  })
}

export function createPostLabrpCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.labrp.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.labrp.certificate.$post>,
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
    const mutationDefaults = getPostLabrpCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
