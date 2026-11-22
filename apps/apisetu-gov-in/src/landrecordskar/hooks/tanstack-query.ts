import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCncerKey() {
  return ['cncer'] as const
}

export function getMutanKey() {
  return ['mutan'] as const
}

export function getPostCncerCertificateMutationKey() {
  return ['cncer', '/cncer/certificate', 'POST'] as const
}

export function getPostCncerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cncer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cncer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCncerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cncer.certificate.$post>) {
      return parseResponse(client.cncer.certificate.$post(args, options))
    },
  })
}

export function usePostCncerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cncer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.cncer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCncerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostMutanCertificateMutationKey() {
  return ['mutan', '/mutan/certificate', 'POST'] as const
}

export function getPostMutanCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutan.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.mutan.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMutanCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mutan.certificate.$post>) {
      return parseResponse(client.mutan.certificate.$post(args, options))
    },
  })
}

export function usePostMutanCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mutan.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.mutan.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMutanCertificateMutationOptions<TError, TOnMutateResult>(
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
