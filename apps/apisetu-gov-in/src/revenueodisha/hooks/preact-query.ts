import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRdcerKey() {
  return ['rdcer'] as const
}

export function getRor1bKey() {
  return ['ror1b'] as const
}

export function getPostRdcerCertificateMutationKey() {
  return ['rdcer', '/rdcer/certificate', 'POST'] as const
}

export function getPostRdcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rdcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.rdcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRdcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rdcer.certificate.$post>) {
      return parseResponse(client.rdcer.certificate.$post(args, options))
    },
  })
}

export function usePostRdcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.rdcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.rdcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRdcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostRor1bCertificateMutationKey() {
  return ['ror1b', '/ror1b/certificate', 'POST'] as const
}

export function getPostRor1bCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ror1b.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ror1b.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRor1bCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ror1b.certificate.$post>) {
      return parseResponse(client.ror1b.certificate.$post(args, options))
    },
  })
}

export function usePostRor1bCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ror1b.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ror1b.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRor1bCertificateMutationOptions<TError, TOnMutateResult>(
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
