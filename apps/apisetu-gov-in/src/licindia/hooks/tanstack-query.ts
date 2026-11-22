import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPodocKey() {
  return ['podoc'] as const
}

export function getPostPodocCertificateMutationKey() {
  return ['podoc', '/podoc/certificate', 'POST'] as const
}

export function getPostPodocCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.podoc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.podoc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPodocCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.podoc.certificate.$post>) {
      return parseResponse(client.podoc.certificate.$post(args, options))
    },
  })
}

export function usePostPodocCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.podoc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.podoc.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPodocCertificateMutationOptions<TError, TOnMutateResult>(
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
