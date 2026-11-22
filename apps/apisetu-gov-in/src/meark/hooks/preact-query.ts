import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdcrdKey() {
  return ['adcrd'] as const
}

export function getPostAdcrdCertificateMutationKey() {
  return ['adcrd', '/adcrd/certificate', 'POST'] as const
}

export function getPostAdcrdCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adcrd.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.adcrd.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdcrdCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.adcrd.certificate.$post>) {
      return parseResponse(client.adcrd.certificate.$post(args, options))
    },
  })
}

export function usePostAdcrdCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.adcrd.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.adcrd.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdcrdCertificateMutationOptions<TError, TOnMutateResult>(
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
