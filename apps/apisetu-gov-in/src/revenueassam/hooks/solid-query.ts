import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getNncerKey() {
  return ['nncer'] as const
}

export function getPostNncerCertificateMutationKey() {
  return ['nncer', '/nncer/certificate', 'POST'] as const
}

export function getPostNncerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nncer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.nncer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNncerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.nncer.certificate.$post>) {
      return parseResponse(client.nncer.certificate.$post(args, options))
    },
  })
}

export function createPostNncerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.nncer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.nncer.certificate.$post>,
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
    const mutationDefaults = getPostNncerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
