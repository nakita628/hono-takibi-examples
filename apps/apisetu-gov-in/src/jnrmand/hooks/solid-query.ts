import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getTrcerKey() {
  return ['trcer'] as const
}

export function getPostTrcerCertificateMutationKey() {
  return ['trcer', '/trcer/certificate', 'POST'] as const
}

export function getPostTrcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.trcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTrcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.trcer.certificate.$post>) {
      return parseResponse(client.trcer.certificate.$post(args, options))
    },
  })
}

export function createPostTrcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.trcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.trcer.certificate.$post>,
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
    const mutationDefaults = getPostTrcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
