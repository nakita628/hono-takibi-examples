import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getErcerKey() {
  return ['ercer'] as const
}

export function getPfdawKey() {
  return ['pfdaw'] as const
}

export function getTpcerKey() {
  return ['tpcer'] as const
}

export function getPostErcerCertificateMutationKey() {
  return ['ercer', '/ercer/certificate', 'POST'] as const
}

export function getPostErcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ercer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ercer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostErcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ercer.certificate.$post>) {
      return parseResponse(client.ercer.certificate.$post(args, options))
    },
  })
}

export function usePostErcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ercer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ercer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostErcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostPfdawCertificateMutationKey() {
  return ['pfdaw', '/pfdaw/certificate', 'POST'] as const
}

export function getPostPfdawCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pfdaw.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.pfdaw.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPfdawCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pfdaw.certificate.$post>) {
      return parseResponse(client.pfdaw.certificate.$post(args, options))
    },
  })
}

export function usePostPfdawCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.pfdaw.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.pfdaw.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPfdawCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostTpcerCertificateMutationKey() {
  return ['tpcer', '/tpcer/certificate', 'POST'] as const
}

export function getPostTpcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tpcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tpcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTpcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tpcer.certificate.$post>) {
      return parseResponse(client.tpcer.certificate.$post(args, options))
    },
  })
}

export function usePostTpcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tpcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.tpcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTpcerCertificateMutationOptions<TError, TOnMutateResult>(
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
