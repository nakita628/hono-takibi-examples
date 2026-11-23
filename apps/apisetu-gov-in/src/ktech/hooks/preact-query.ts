import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCocerKey() {
  return ['cocer'] as const
}

export function getRfcerKey() {
  return ['rfcer'] as const
}

export function getPostCocerCertificateMutationKey() {
  return ['cocer', '/cocer/certificate', 'POST'] as const
}

export function getPostCocerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cocer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cocer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCocerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cocer.certificate.$post>) {
      return parseResponse(client.cocer.certificate.$post(args, options))
    },
  })
}

export function usePostCocerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cocer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.cocer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCocerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostRfcerCertificateMutationKey() {
  return ['rfcer', '/rfcer/certificate', 'POST'] as const
}

export function getPostRfcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rfcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.rfcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRfcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rfcer.certificate.$post>) {
      return parseResponse(client.rfcer.certificate.$post(args, options))
    },
  })
}

export function usePostRfcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.rfcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.rfcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRfcerCertificateMutationOptions<TError, TOnMutateResult>(
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
