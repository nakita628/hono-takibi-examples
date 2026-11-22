import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.labrp.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.labrp.certificate.$post>,
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
