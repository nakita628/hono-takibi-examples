import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCemstKey() {
  return ['cemst'] as const
}

export function getCfmstKey() {
  return ['cfmst'] as const
}

export function getHscerKey() {
  return ['hscer'] as const
}

export function getMicerKey() {
  return ['micer'] as const
}

export function getSscerKey() {
  return ['sscer'] as const
}

export function getPostCemstCertificateMutationKey() {
  return ['cemst', '/cemst/certificate', 'POST'] as const
}

export function getPostCemstCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cemst.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cemst.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCemstCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cemst.certificate.$post>) {
      return parseResponse(client.cemst.certificate.$post(args, options))
    },
  })
}

export function usePostCemstCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cemst.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.cemst.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCemstCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostCfmstCertificateMutationKey() {
  return ['cfmst', '/cfmst/certificate', 'POST'] as const
}

export function getPostCfmstCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cfmst.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cfmst.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCfmstCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cfmst.certificate.$post>) {
      return parseResponse(client.cfmst.certificate.$post(args, options))
    },
  })
}

export function usePostCfmstCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cfmst.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.cfmst.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCfmstCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostHscerCertificateMutationKey() {
  return ['hscer', '/hscer/certificate', 'POST'] as const
}

export function getPostHscerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hscer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.hscer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHscerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.hscer.certificate.$post>) {
      return parseResponse(client.hscer.certificate.$post(args, options))
    },
  })
}

export function usePostHscerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.hscer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.hscer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostHscerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostMicerCertificateMutationKey() {
  return ['micer', '/micer/certificate', 'POST'] as const
}

export function getPostMicerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.micer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.micer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMicerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.micer.certificate.$post>) {
      return parseResponse(client.micer.certificate.$post(args, options))
    },
  })
}

export function usePostMicerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.micer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.micer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMicerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostSscerCertificateMutationKey() {
  return ['sscer', '/sscer/certificate', 'POST'] as const
}

export function getPostSscerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sscer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sscer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSscerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sscer.certificate.$post>) {
      return parseResponse(client.sscer.certificate.$post(args, options))
    },
  })
}

export function usePostSscerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sscer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sscer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSscerCertificateMutationOptions<TError, TOnMutateResult>(
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
