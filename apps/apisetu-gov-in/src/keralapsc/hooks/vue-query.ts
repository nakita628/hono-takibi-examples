import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOtcerKey() {
  return ['otcer'] as const
}

export function getPostOtcerCertificateMutationKey() {
  return ['otcer', '/otcer/certificate', 'POST'] as const
}

export function getPostOtcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.otcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.otcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOtcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.otcer.certificate.$post>) {
      return parseResponse(client.otcer.certificate.$post(args, options))
    },
  })
}

export function usePostOtcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.otcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.otcer.certificate.$post>,
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
  const mutationDefaults = getPostOtcerCertificateMutationOptions<TError, TOnMutateResult>(
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
