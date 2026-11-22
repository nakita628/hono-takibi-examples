import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getTdcerKey() {
  return ['tdcer'] as const
}

export function getPostTdcerCertificateMutationKey() {
  return ['tdcer', '/tdcer/certificate', 'POST'] as const
}

export function getPostTdcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tdcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tdcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTdcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tdcer.certificate.$post>) {
      return parseResponse(client.tdcer.certificate.$post(args, options))
    },
  })
}

export function usePostTdcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.tdcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.tdcer.certificate.$post>,
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
  const mutationDefaults = getPostTdcerCertificateMutationOptions<TError, TOnMutateResult>(
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
