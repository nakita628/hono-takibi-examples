import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRatcrKey() {
  return ['ratcr'] as const
}

export function getPostRatcrCertificateMutationKey() {
  return ['ratcr', '/ratcr/certificate', 'POST'] as const
}

export function getPostRatcrCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ratcr.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ratcr.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRatcrCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ratcr.certificate.$post>) {
      return parseResponse(client.ratcr.certificate.$post(args, options))
    },
  })
}

export function usePostRatcrCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ratcr.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ratcr.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRatcrCertificateMutationOptions<TError, TOnMutateResult>(
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
