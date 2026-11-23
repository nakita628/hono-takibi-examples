import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getLabrpKey() {
  return ['labrp'] as const
}

export function getPostLabrpCertificateMutationKey() {
  return ['labrp', '/labrp/certificate', 'POST'] as const
}

export function getPostLabrpCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.labrp.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.labrp.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLabrpCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.labrp.certificate.$post>) {
      return parseResponse(client.labrp.certificate.$post(args, options))
    },
  })
}

export function usePostLabrpCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.labrp.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.labrp.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLabrpCertificateMutationOptions<TError, TOnMutateResult>(
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
