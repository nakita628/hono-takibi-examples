import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSocerKey() {
  return ['socer'] as const
}

export function getPostSocerCertificateMutationKey() {
  return ['socer', '/socer/certificate', 'POST'] as const
}

export function getPostSocerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.socer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.socer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSocerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.socer.certificate.$post>) {
      return parseResponse(client.socer.certificate.$post(args, options))
    },
  })
}

export function usePostSocerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.socer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.socer.certificate.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSocerCertificateMutationOptions<TError, TOnMutateResult>(
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
