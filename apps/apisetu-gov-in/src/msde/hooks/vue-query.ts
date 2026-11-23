import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIticrKey() {
  return ['iticr'] as const
}

export function getPostIticrCertificateMutationKey() {
  return ['iticr', '/iticr/certificate', 'POST'] as const
}

export function getPostIticrCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.iticr.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.iticr.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIticrCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.iticr.certificate.$post>) {
      return parseResponse(client.iticr.certificate.$post(args, options))
    },
  })
}

export function usePostIticrCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.iticr.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.iticr.certificate.$post>,
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
  const mutationDefaults = getPostIticrCertificateMutationOptions<TError, TOnMutateResult>(
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
