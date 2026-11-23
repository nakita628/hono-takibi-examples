import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDgcerKey() {
  return ['dgcer'] as const
}

export function getPostDgcerCertificateMutationKey() {
  return ['dgcer', '/dgcer/certificate', 'POST'] as const
}

export function getPostDgcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dgcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dgcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDgcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dgcer.certificate.$post>) {
      return parseResponse(client.dgcer.certificate.$post(args, options))
    },
  })
}

export function usePostDgcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dgcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.dgcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDgcerCertificateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
