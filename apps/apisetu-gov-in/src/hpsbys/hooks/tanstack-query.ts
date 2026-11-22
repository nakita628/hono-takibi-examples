import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRsbycKey() {
  return ['rsbyc'] as const
}

export function getPostRsbycCertificateMutationKey() {
  return ['rsbyc', '/rsbyc/certificate', 'POST'] as const
}

export function getPostRsbycCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rsbyc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.rsbyc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRsbycCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rsbyc.certificate.$post>) {
      return parseResponse(client.rsbyc.certificate.$post(args, options))
    },
  })
}

export function usePostRsbycCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.rsbyc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.rsbyc.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRsbycCertificateMutationOptions<TError, TOnMutateResult>(
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
