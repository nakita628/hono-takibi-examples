import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIlpmtKey() {
  return ['ilpmt'] as const
}

export function getPostIlpmtCertificateMutationKey() {
  return ['ilpmt', '/ilpmt/certificate', 'POST'] as const
}

export function getPostIlpmtCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ilpmt.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ilpmt.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIlpmtCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ilpmt.certificate.$post>) {
      return parseResponse(client.ilpmt.certificate.$post(args, options))
    },
  })
}

export function usePostIlpmtCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ilpmt.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ilpmt.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIlpmtCertificateMutationOptions<TError, TOnMutateResult>(
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
