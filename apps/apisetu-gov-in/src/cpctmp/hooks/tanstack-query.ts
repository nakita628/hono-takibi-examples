import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSkmstKey() {
  return ['skmst'] as const
}

export function getPostSkmstCertificateMutationKey() {
  return ['skmst', '/skmst/certificate', 'POST'] as const
}

export function getPostSkmstCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.skmst.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.skmst.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSkmstCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.skmst.certificate.$post>) {
      return parseResponse(client.skmst.certificate.$post(args, options))
    },
  })
}

export function usePostSkmstCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.skmst.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.skmst.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSkmstCertificateMutationOptions<TError, TOnMutateResult>(
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
