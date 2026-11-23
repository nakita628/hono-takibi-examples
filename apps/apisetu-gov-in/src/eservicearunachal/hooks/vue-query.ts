import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getChcerKey() {
  return ['chcer'] as const
}

export function getDmcerKey() {
  return ['dmcer'] as const
}

export function getDpcerKey() {
  return ['dpcer'] as const
}

export function getIncerKey() {
  return ['incer'] as const
}

export function getRscerKey() {
  return ['rscer'] as const
}

export function getShcerKey() {
  return ['shcer'] as const
}

export function getPostChcerCertificateMutationKey() {
  return ['chcer', '/chcer/certificate', 'POST'] as const
}

export function getPostChcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.chcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chcer.certificate.$post>) {
      return parseResponse(client.chcer.certificate.$post(args, options))
    },
  })
}

export function usePostChcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.chcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.chcer.certificate.$post>,
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
  const mutationDefaults = getPostChcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostDmcerCertificateMutationKey() {
  return ['dmcer', '/dmcer/certificate', 'POST'] as const
}

export function getPostDmcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dmcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dmcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDmcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dmcer.certificate.$post>) {
      return parseResponse(client.dmcer.certificate.$post(args, options))
    },
  })
}

export function usePostDmcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dmcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.dmcer.certificate.$post>,
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
  const mutationDefaults = getPostDmcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostDpcerCertificateMutationKey() {
  return ['dpcer', '/dpcer/certificate', 'POST'] as const
}

export function getPostDpcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dpcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dpcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDpcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dpcer.certificate.$post>) {
      return parseResponse(client.dpcer.certificate.$post(args, options))
    },
  })
}

export function usePostDpcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dpcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.dpcer.certificate.$post>,
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
  const mutationDefaults = getPostDpcerCertificateMutationOptions<TError, TOnMutateResult>(
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
