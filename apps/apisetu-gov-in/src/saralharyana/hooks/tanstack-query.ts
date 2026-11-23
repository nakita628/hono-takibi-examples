import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getNbcerKey() {
  return ['nbcer'] as const
}

export function getPostNbcerCertificateMutationKey() {
  return ['nbcer', '/nbcer/certificate', 'POST'] as const
}

export function getPostNbcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nbcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.nbcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNbcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.nbcer.certificate.$post>) {
      return parseResponse(client.nbcer.certificate.$post(args, options))
    },
  })
}

export function usePostNbcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.nbcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.nbcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNbcerCertificateMutationOptions<TError, TOnMutateResult>(
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
