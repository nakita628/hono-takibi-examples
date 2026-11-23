import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDelcsKey() {
  return ['delcs'] as const
}

export function getMalcsKey() {
  return ['malcs'] as const
}

export function getPalcsKey() {
  return ['palcs'] as const
}

export function getRelcsKey() {
  return ['relcs'] as const
}

export function getPostDelcsCertificateMutationKey() {
  return ['delcs', '/delcs/certificate', 'POST'] as const
}

export function getPostDelcsCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delcs.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.delcs.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDelcsCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.delcs.certificate.$post>) {
      return parseResponse(client.delcs.certificate.$post(args, options))
    },
  })
}

export function usePostDelcsCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.delcs.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.delcs.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDelcsCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostMalcsCertificateMutationKey() {
  return ['malcs', '/malcs/certificate', 'POST'] as const
}

export function getPostMalcsCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.malcs.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.malcs.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMalcsCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.malcs.certificate.$post>) {
      return parseResponse(client.malcs.certificate.$post(args, options))
    },
  })
}

export function usePostMalcsCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.malcs.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.malcs.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMalcsCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostPalcsCertificateMutationKey() {
  return ['palcs', '/palcs/certificate', 'POST'] as const
}

export function getPostPalcsCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.palcs.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.palcs.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPalcsCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.palcs.certificate.$post>) {
      return parseResponse(client.palcs.certificate.$post(args, options))
    },
  })
}

export function usePostPalcsCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.palcs.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.palcs.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPalcsCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostRelcsCertificateMutationKey() {
  return ['relcs', '/relcs/certificate', 'POST'] as const
}

export function getPostRelcsCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.relcs.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.relcs.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRelcsCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.relcs.certificate.$post>) {
      return parseResponse(client.relcs.certificate.$post(args, options))
    },
  })
}

export function usePostRelcsCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.relcs.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.relcs.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRelcsCertificateMutationOptions<TError, TOnMutateResult>(
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
