import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getHscerKey() {
  return ['hscer'] as const
}

export function getHsmgrKey() {
  return ['hsmgr'] as const
}

export function getHvcerKey() {
  return ['hvcer'] as const
}

export function getSscerKey() {
  return ['sscer'] as const
}

export function getSsmgrKey() {
  return ['ssmgr'] as const
}

export function getSvcerKey() {
  return ['svcer'] as const
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getPostHsmgrCertificateMutationKey() {
  return ['hsmgr', '/hsmgr/certificate', 'POST'] as const
}

export function getPostHsmgrCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hsmgr.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.hsmgr.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHsmgrCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.hsmgr.certificate.$post>) {
      return parseResponse(client.hsmgr.certificate.$post(args, options))
    },
  })
}

export function usePostHsmgrCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.hsmgr.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.hsmgr.certificate.$post>,
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
  const mutationDefaults = getPostHsmgrCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostHvcerCertificateMutationKey() {
  return ['hvcer', '/hvcer/certificate', 'POST'] as const
}

export function getPostHvcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hvcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.hvcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHvcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.hvcer.certificate.$post>) {
      return parseResponse(client.hvcer.certificate.$post(args, options))
    },
  })
}

export function usePostHvcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.hvcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.hvcer.certificate.$post>,
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
  const mutationDefaults = getPostHvcerCertificateMutationOptions<TError, TOnMutateResult>(
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getPostSsmgrCertificateMutationKey() {
  return ['ssmgr', '/ssmgr/certificate', 'POST'] as const
}

export function getPostSsmgrCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssmgr.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ssmgr.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSsmgrCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ssmgr.certificate.$post>) {
      return parseResponse(client.ssmgr.certificate.$post(args, options))
    },
  })
}

export function usePostSsmgrCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ssmgr.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.ssmgr.certificate.$post>,
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
  const mutationDefaults = getPostSsmgrCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostSvcerCertificateMutationKey() {
  return ['svcer', '/svcer/certificate', 'POST'] as const
}

export function getPostSvcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.svcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.svcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSvcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.svcer.certificate.$post>) {
      return parseResponse(client.svcer.certificate.$post(args, options))
    },
  })
}

export function usePostSvcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.svcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.svcer.certificate.$post>,
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
  const mutationDefaults = getPostSvcerCertificateMutationOptions<TError, TOnMutateResult>(
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
