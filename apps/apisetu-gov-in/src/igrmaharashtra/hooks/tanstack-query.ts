import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getLlcerKey() {
  return ['llcer'] as const
}

export function getPostLlcerCertificateMutationKey() {
  return ['llcer', '/llcer/certificate', 'POST'] as const
}

export function getPostLlcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.llcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.llcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLlcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.llcer.certificate.$post>) {
      return parseResponse(client.llcer.certificate.$post(args, options))
    },
  })
}

export function usePostLlcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.llcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.llcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLlcerCertificateMutationOptions<TError, TOnMutateResult>(
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
