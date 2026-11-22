import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getNncerKey() {
  return ['nncer'] as const
}

export function getPostNncerCertificateMutationKey() {
  return ['nncer', '/nncer/certificate', 'POST'] as const
}

export function getPostNncerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nncer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.nncer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNncerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.nncer.certificate.$post>) {
      return parseResponse(client.nncer.certificate.$post(args, options))
    },
  })
}

export function usePostNncerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.nncer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.nncer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNncerCertificateMutationOptions<TError, TOnMutateResult>(
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
