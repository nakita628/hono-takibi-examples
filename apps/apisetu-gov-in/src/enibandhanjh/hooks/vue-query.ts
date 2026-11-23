import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRdcerKey() {
  return ['rdcer'] as const
}

export function getRegriiKey() {
  return ['regrii'] as const
}

export function getRmcerKey() {
  return ['rmcer'] as const
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getPostRegriiCertificateMutationKey() {
  return ['regrii', '/regrii/certificate', 'POST'] as const
}

export function getPostRegriiCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regrii.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.regrii.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRegriiCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.regrii.certificate.$post>) {
      return parseResponse(client.regrii.certificate.$post(args, options))
    },
  })
}

export function usePostRegriiCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.regrii.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.regrii.certificate.$post>,
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
  const mutationDefaults = getPostRegriiCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostRmcerCertificateMutationKey() {
  return ['rmcer', '/rmcer/certificate', 'POST'] as const
}

export function getPostRmcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rmcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.rmcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRmcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rmcer.certificate.$post>) {
      return parseResponse(client.rmcer.certificate.$post(args, options))
    },
  })
}

export function usePostRmcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rmcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.rmcer.certificate.$post>,
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
  const mutationDefaults = getPostRmcerCertificateMutationOptions<TError, TOnMutateResult>(
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
