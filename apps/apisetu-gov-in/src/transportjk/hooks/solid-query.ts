import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDrvlcKey() {
  return ['drvlc'] as const
}

export function getRvcerKey() {
  return ['rvcer'] as const
}

export function getPostDrvlcCertificateMutationKey() {
  return ['drvlc', '/drvlc/certificate', 'POST'] as const
}

export function getPostDrvlcCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drvlc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.drvlc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDrvlcCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.drvlc.certificate.$post>) {
      return parseResponse(client.drvlc.certificate.$post(args, options))
    },
  })
}

export function createPostDrvlcCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.drvlc.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.drvlc.certificate.$post>,
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
    const mutationDefaults = getPostDrvlcCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostRvcerCertificateMutationKey() {
  return ['rvcer', '/rvcer/certificate', 'POST'] as const
}

export function getPostRvcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rvcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.rvcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRvcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rvcer.certificate.$post>) {
      return parseResponse(client.rvcer.certificate.$post(args, options))
    },
  })
}

export function createPostRvcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rvcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.rvcer.certificate.$post>,
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
    const mutationDefaults = getPostRvcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
