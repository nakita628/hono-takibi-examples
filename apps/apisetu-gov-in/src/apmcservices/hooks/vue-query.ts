import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApmclKey() {
  return ['apmcl'] as const
}

export function getPostApmclCertificateMutationKey() {
  return ['apmcl', '/apmcl/certificate', 'POST'] as const
}

export function getPostApmclCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apmcl.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.apmcl.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApmclCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.apmcl.certificate.$post>) {
      return parseResponse(client.apmcl.certificate.$post(args, options))
    },
  })
}

export function usePostApmclCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.apmcl.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.apmcl.certificate.$post>,
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
  const mutationDefaults = getPostApmclCertificateMutationOptions<TError, TOnMutateResult>(
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
