import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSslcrKey() {
  return ['sslcr'] as const
}

export function getPostSslcrCertificateMutationKey() {
  return ['sslcr', '/sslcr/certificate', 'POST'] as const
}

export function getPostSslcrCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sslcr.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sslcr.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSslcrCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sslcr.certificate.$post>) {
      return parseResponse(client.sslcr.certificate.$post(args, options))
    },
  })
}

export function usePostSslcrCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sslcr.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sslcr.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSslcrCertificateMutationOptions<TError, TOnMutateResult>(
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
