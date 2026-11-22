import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEgcerKey() {
  return ['egcer'] as const
}

export function getEwcerKey() {
  return ['ewcer'] as const
}

export function getIncerKey() {
  return ['incer'] as const
}

export function getLhcerKey() {
  return ['lhcer'] as const
}

export function getObcerKey() {
  return ['obcer'] as const
}

export function getRscerKey() {
  return ['rscer'] as const
}

export function getShcerKey() {
  return ['shcer'] as const
}

export function getPostEgcerCertificateMutationKey() {
  return ['egcer', '/egcer/certificate', 'POST'] as const
}

export function getPostEgcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.egcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.egcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEgcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.egcer.certificate.$post>) {
      return parseResponse(client.egcer.certificate.$post(args, options))
    },
  })
}

export function usePostEgcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.egcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.egcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEgcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostEwcerCertificateMutationKey() {
  return ['ewcer', '/ewcer/certificate', 'POST'] as const
}

export function getPostEwcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ewcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ewcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEwcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ewcer.certificate.$post>) {
      return parseResponse(client.ewcer.certificate.$post(args, options))
    },
  })
}

export function usePostEwcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ewcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ewcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEwcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostIncerCertificateMutationKey() {
  return ['incer', '/incer/certificate', 'POST'] as const
}

export function getPostIncerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.incer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIncerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.incer.certificate.$post>) {
      return parseResponse(client.incer.certificate.$post(args, options))
    },
  })
}

export function usePostIncerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.incer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.incer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIncerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostLhcerCertificateMutationKey() {
  return ['lhcer', '/lhcer/certificate', 'POST'] as const
}

export function getPostLhcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lhcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.lhcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLhcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lhcer.certificate.$post>) {
      return parseResponse(client.lhcer.certificate.$post(args, options))
    },
  })
}

export function usePostLhcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.lhcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.lhcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLhcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostObcerCertificateMutationKey() {
  return ['obcer', '/obcer/certificate', 'POST'] as const
}

export function getPostObcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.obcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.obcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostObcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.obcer.certificate.$post>) {
      return parseResponse(client.obcer.certificate.$post(args, options))
    },
  })
}

export function usePostObcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.obcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.obcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostObcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostRscerCertificateMutationKey() {
  return ['rscer', '/rscer/certificate', 'POST'] as const
}

export function getPostRscerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rscer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.rscer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRscerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rscer.certificate.$post>) {
      return parseResponse(client.rscer.certificate.$post(args, options))
    },
  })
}

export function usePostRscerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.rscer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.rscer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRscerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostShcerCertificateMutationKey() {
  return ['shcer', '/shcer/certificate', 'POST'] as const
}

export function getPostShcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.shcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostShcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.shcer.certificate.$post>) {
      return parseResponse(client.shcer.certificate.$post(args, options))
    },
  })
}

export function usePostShcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.shcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.shcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostShcerCertificateMutationOptions<TError, TOnMutateResult>(
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
