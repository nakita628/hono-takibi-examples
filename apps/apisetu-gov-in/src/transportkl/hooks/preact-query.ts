import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
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

export function usePostDrvlcCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.drvlc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.drvlc.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDrvlcCertificateMutationOptions<TError, TOnMutateResult>(
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

export function usePostRvcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.rvcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.rvcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRvcerCertificateMutationOptions<TError, TOnMutateResult>(
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
