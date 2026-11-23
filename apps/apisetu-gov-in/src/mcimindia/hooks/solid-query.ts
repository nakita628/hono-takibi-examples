import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGovidKey() {
  return ['govid'] as const
}

export function getPhcerKey() {
  return ['phcer'] as const
}

export function getPostGovidCertificateMutationKey() {
  return ['govid', '/govid/certificate', 'POST'] as const
}

export function getPostGovidCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.govid.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.govid.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGovidCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.govid.certificate.$post>) {
      return parseResponse(client.govid.certificate.$post(args, options))
    },
  })
}

export function createPostGovidCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.govid.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.govid.certificate.$post>,
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
    const mutationDefaults = getPostGovidCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.phcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.phcer.certificate.$post>,
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
