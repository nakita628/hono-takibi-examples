import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPecerKey() {
  return ['pecer'] as const
}

export function getPrfndKey() {
  return ['prfnd'] as const
}

export function getPostPecerCertificateMutationKey() {
  return ['pecer', '/pecer/certificate', 'POST'] as const
}

export function getPostPecerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pecer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.pecer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPecerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pecer.certificate.$post>) {
      return parseResponse(client.pecer.certificate.$post(args, options))
    },
  })
}

export function usePostPecerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.pecer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.pecer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPecerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostPrfndCertificateMutationKey() {
  return ['prfnd', '/prfnd/certificate', 'POST'] as const
}

export function getPostPrfndCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.prfnd.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.prfnd.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPrfndCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.prfnd.certificate.$post>) {
      return parseResponse(client.prfnd.certificate.$post(args, options))
    },
  })
}

export function usePostPrfndCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.prfnd.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.prfnd.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPrfndCertificateMutationOptions<TError, TOnMutateResult>(
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
