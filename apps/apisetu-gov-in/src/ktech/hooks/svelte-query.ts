import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCocerKey() {
  return ['cocer'] as const
}

export function getRfcerKey() {
  return ['rfcer'] as const
}

export function getPostCocerCertificateMutationKey() {
  return ['cocer', '/cocer/certificate', 'POST'] as const
}

export function getPostCocerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cocer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cocer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCocerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cocer.certificate.$post>) {
      return parseResponse(client.cocer.certificate.$post(args, options))
    },
  })
}

export function createPostCocerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cocer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.cocer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCocerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRfcerCertificateMutationKey() {
  return ['rfcer', '/rfcer/certificate', 'POST'] as const
}

export function getPostRfcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rfcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.rfcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRfcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rfcer.certificate.$post>) {
      return parseResponse(client.rfcer.certificate.$post(args, options))
    },
  })
}

export function createPostRfcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.rfcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.rfcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRfcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
