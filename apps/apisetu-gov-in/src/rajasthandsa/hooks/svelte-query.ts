import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDpicrKey() {
  return ['dpicr'] as const
}

export function getPostDpicrCertificateMutationKey() {
  return ['dpicr', '/dpicr/certificate', 'POST'] as const
}

export function getPostDpicrCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dpicr.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dpicr.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDpicrCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dpicr.certificate.$post>) {
      return parseResponse(client.dpicr.certificate.$post(args, options))
    },
  })
}

export function createPostDpicrCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dpicr.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.dpicr.certificate.$post>,
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
    const mutationDefaults = getPostDpicrCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
