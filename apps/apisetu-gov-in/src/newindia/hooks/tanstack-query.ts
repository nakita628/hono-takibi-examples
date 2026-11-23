import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCripcKey() {
  return ['cripc'] as const
}

export function getCvipcKey() {
  return ['cvipc'] as const
}

export function getEgipcKey() {
  return ['egipc'] as const
}

export function getHlipcKey() {
  return ['hlipc'] as const
}

export function getMiipcKey() {
  return ['miipc'] as const
}

export function getTripcKey() {
  return ['tripc'] as const
}

export function getTwipcKey() {
  return ['twipc'] as const
}

export function getPostCripcCertificateMutationKey() {
  return ['cripc', '/cripc/certificate', 'POST'] as const
}

export function getPostCripcCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cripc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cripc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCripcCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cripc.certificate.$post>) {
      return parseResponse(client.cripc.certificate.$post(args, options))
    },
  })
}

export function usePostCripcCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cripc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.cripc.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCripcCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostCvipcCertificateMutationKey() {
  return ['cvipc', '/cvipc/certificate', 'POST'] as const
}

export function getPostCvipcCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cvipc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cvipc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCvipcCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cvipc.certificate.$post>) {
      return parseResponse(client.cvipc.certificate.$post(args, options))
    },
  })
}

export function usePostCvipcCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cvipc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.cvipc.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCvipcCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostEgipcCertificateMutationKey() {
  return ['egipc', '/egipc/certificate', 'POST'] as const
}

export function getPostEgipcCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.egipc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.egipc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEgipcCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.egipc.certificate.$post>) {
      return parseResponse(client.egipc.certificate.$post(args, options))
    },
  })
}

export function usePostEgipcCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.egipc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.egipc.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEgipcCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostHlipcCertificateMutationKey() {
  return ['hlipc', '/hlipc/certificate', 'POST'] as const
}

export function getPostHlipcCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hlipc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.hlipc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHlipcCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.hlipc.certificate.$post>) {
      return parseResponse(client.hlipc.certificate.$post(args, options))
    },
  })
}

export function usePostHlipcCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.hlipc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.hlipc.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostHlipcCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostMiipcCertificateMutationKey() {
  return ['miipc', '/miipc/certificate', 'POST'] as const
}

export function getPostMiipcCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.miipc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.miipc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMiipcCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.miipc.certificate.$post>) {
      return parseResponse(client.miipc.certificate.$post(args, options))
    },
  })
}

export function usePostMiipcCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.miipc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.miipc.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMiipcCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostTripcCertificateMutationKey() {
  return ['tripc', '/tripc/certificate', 'POST'] as const
}

export function getPostTripcCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tripc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tripc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTripcCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tripc.certificate.$post>) {
      return parseResponse(client.tripc.certificate.$post(args, options))
    },
  })
}

export function usePostTripcCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tripc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.tripc.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTripcCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostTwipcCertificateMutationKey() {
  return ['twipc', '/twipc/certificate', 'POST'] as const
}

export function getPostTwipcCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.twipc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.twipc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTwipcCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.twipc.certificate.$post>) {
      return parseResponse(client.twipc.certificate.$post(args, options))
    },
  })
}

export function usePostTwipcCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.twipc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.twipc.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTwipcCertificateMutationOptions<TError, TOnMutateResult>(
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
