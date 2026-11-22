import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getHvcerKey() {
  return ['hvcer'] as const
}

export function getSvcerKey() {
  return ['svcer'] as const
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

export function createPostHvcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.hvcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.hvcer.certificate.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostHvcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSvcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.svcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.svcer.certificate.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSvcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
