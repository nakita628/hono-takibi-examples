import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPancrKey() {
  return ['pancr'] as const
}

export function getPostPancrCertificateMutationKey() {
  return ['pancr', '/pancr/certificate', 'POST'] as const
}

export function getPostPancrCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pancr.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.pancr.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPancrCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pancr.certificate.$post>) {
      return parseResponse(client.pancr.certificate.$post(args, options))
    },
  })
}

export function usePostPancrCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.pancr.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.pancr.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPancrCertificateMutationOptions<TError, TOnMutateResult>(
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
