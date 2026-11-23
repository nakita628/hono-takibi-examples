import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDgmstKey() {
  return ['dgmst'] as const
}

export function getPostDgmstCertificateMutationKey() {
  return ['dgmst', '/dgmst/certificate', 'POST'] as const
}

export function getPostDgmstCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dgmst.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dgmst.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDgmstCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dgmst.certificate.$post>) {
      return parseResponse(client.dgmst.certificate.$post(args, options))
    },
  })
}

export function createPostDgmstCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dgmst.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.dgmst.certificate.$post>,
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
    const mutationDefaults = getPostDgmstCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
