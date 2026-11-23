import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPhcerKey() {
  return ['phcer'] as const
}

export function getRpcerKey() {
  return ['rpcer'] as const
}

export function getPostPhcerCertificateMutationKey() {
  return ['phcer', '/phcer/certificate', 'POST'] as const
}

export function getPostPhcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.phcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPhcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.phcer.certificate.$post>) {
      return parseResponse(client.phcer.certificate.$post(args, options))
    },
  })
}

export function createPostPhcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.phcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.phcer.certificate.$post>,
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
    const mutationDefaults = getPostPhcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRpcerCertificateMutationKey() {
  return ['rpcer', '/rpcer/certificate', 'POST'] as const
}

export function getPostRpcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rpcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.rpcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRpcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rpcer.certificate.$post>) {
      return parseResponse(client.rpcer.certificate.$post(args, options))
    },
  })
}

export function createPostRpcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.rpcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.rpcer.certificate.$post>,
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
    const mutationDefaults = getPostRpcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
