import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSkmstKey() {
  return ['skmst'] as const
}

export function getPostSkmstCertificateMutationKey() {
  return ['skmst', '/skmst/certificate', 'POST'] as const
}

export function getPostSkmstCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.skmst.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.skmst.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSkmstCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.skmst.certificate.$post>) {
      return parseResponse(client.skmst.certificate.$post(args, options))
    },
  })
}

export function createPostSkmstCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.skmst.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.skmst.certificate.$post>,
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
    const mutationDefaults = getPostSkmstCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
