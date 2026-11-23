import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGovidKey() {
  return ['govid'] as const
}

export function getMbcerKey() {
  return ['mbcer'] as const
}

export function getPostGovidCertificateMutationKey() {
  return ['govid', '/govid/certificate', 'POST'] as const
}

export function getPostGovidCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.govid.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.govid.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGovidCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.govid.certificate.$post>) {
      return parseResponse(client.govid.certificate.$post(args, options))
    },
  })
}

export function usePostGovidCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.govid.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.govid.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGovidCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostMbcerCertificateMutationKey() {
  return ['mbcer', '/mbcer/certificate', 'POST'] as const
}

export function getPostMbcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mbcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.mbcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMbcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mbcer.certificate.$post>) {
      return parseResponse(client.mbcer.certificate.$post(args, options))
    },
  })
}

export function usePostMbcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mbcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.mbcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMbcerCertificateMutationOptions<TError, TOnMutateResult>(
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
