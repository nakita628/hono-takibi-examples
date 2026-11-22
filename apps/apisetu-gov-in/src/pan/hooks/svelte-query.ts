import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPancrKey() {
  return ['pancr'] as const
}

export function getPostPancrCertificateMutationKey() {
  return ['pancr', '/pancr/certificate', 'POST'] as const
}

export function getPostPancrCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pancr.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.pancr.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPancrCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pancr.certificate.$post>) {
      return parseResponse(client.pancr.certificate.$post(args, options))
    },
  })
}

export function createPostPancrCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.pancr.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.pancr.certificate.$post>,
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
    const mutationDefaults = getPostPancrCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
