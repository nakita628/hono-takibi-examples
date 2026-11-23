import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getLpgsvKey() {
  return ['lpgsv'] as const
}

export function getPostLpgsvCertificateMutationKey() {
  return ['lpgsv', '/lpgsv/certificate', 'POST'] as const
}

export function getPostLpgsvCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lpgsv.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.lpgsv.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLpgsvCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lpgsv.certificate.$post>) {
      return parseResponse(client.lpgsv.certificate.$post(args, options))
    },
  })
}

export function usePostLpgsvCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.lpgsv.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.lpgsv.certificate.$post>,
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
  const mutationDefaults = getPostLpgsvCertificateMutationOptions<TError, TOnMutateResult>(
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
