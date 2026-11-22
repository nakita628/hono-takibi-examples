import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getLicerKey() {
  return ['licer'] as const
}

export function getPostLicerCertificateMutationKey() {
  return ['licer', '/licer/certificate', 'POST'] as const
}

export function getPostLicerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.licer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLicerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.licer.certificate.$post>) {
      return parseResponse(client.licer.certificate.$post(args, options))
    },
  })
}

export function usePostLicerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.licer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.licer.certificate.$post>,
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
  const mutationDefaults = getPostLicerCertificateMutationOptions<TError, TOnMutateResult>(
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
