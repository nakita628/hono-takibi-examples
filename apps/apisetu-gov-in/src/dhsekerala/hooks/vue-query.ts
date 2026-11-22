import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getHpcerKey() {
  return ['hpcer'] as const
}

export function getPostHpcerCertificateMutationKey() {
  return ['hpcer', '/hpcer/certificate', 'POST'] as const
}

export function getPostHpcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hpcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.hpcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHpcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.hpcer.certificate.$post>) {
      return parseResponse(client.hpcer.certificate.$post(args, options))
    },
  })
}

export function usePostHpcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.hpcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.hpcer.certificate.$post>,
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
  const mutationDefaults = getPostHpcerCertificateMutationOptions<TError, TOnMutateResult>(
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
