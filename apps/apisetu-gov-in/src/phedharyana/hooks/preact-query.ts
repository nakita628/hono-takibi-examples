import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEtcerKey() {
  return ['etcer'] as const
}

export function getGovidKey() {
  return ['govid'] as const
}

export function getSicerKey() {
  return ['sicer'] as const
}

export function getPostEtcerCertificateMutationKey() {
  return ['etcer', '/etcer/certificate', 'POST'] as const
}

export function getPostEtcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.etcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.etcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEtcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.etcer.certificate.$post>) {
      return parseResponse(client.etcer.certificate.$post(args, options))
    },
  })
}

export function usePostEtcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.etcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.etcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEtcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostSicerCertificateMutationKey() {
  return ['sicer', '/sicer/certificate', 'POST'] as const
}

export function getPostSicerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sicer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sicer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSicerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sicer.certificate.$post>) {
      return parseResponse(client.sicer.certificate.$post(args, options))
    },
  })
}

export function usePostSicerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sicer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sicer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSicerCertificateMutationOptions<TError, TOnMutateResult>(
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
