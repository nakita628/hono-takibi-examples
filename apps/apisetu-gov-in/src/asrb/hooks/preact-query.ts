import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMrcerKey() {
  return ['mrcer'] as const
}

export function getPostMrcerCertificateMutationKey() {
  return ['mrcer', '/mrcer/certificate', 'POST'] as const
}

export function getPostMrcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mrcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.mrcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMrcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mrcer.certificate.$post>) {
      return parseResponse(client.mrcer.certificate.$post(args, options))
    },
  })
}

export function usePostMrcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mrcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.mrcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMrcerCertificateMutationOptions<TError, TOnMutateResult>(
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
