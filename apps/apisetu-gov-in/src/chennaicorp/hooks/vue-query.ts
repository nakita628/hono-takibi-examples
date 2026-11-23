import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBtcerKey() {
  return ['btcer'] as const
}

export function getDtcerKey() {
  return ['dtcer'] as const
}

export function getPostBtcerCertificateMutationKey() {
  return ['btcer', '/btcer/certificate', 'POST'] as const
}

export function getPostBtcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.btcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.btcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBtcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.btcer.certificate.$post>) {
      return parseResponse(client.btcer.certificate.$post(args, options))
    },
  })
}

export function usePostBtcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.btcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.btcer.certificate.$post>,
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
  const mutationDefaults = getPostBtcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostDtcerCertificateMutationKey() {
  return ['dtcer', '/dtcer/certificate', 'POST'] as const
}

export function getPostDtcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dtcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dtcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDtcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dtcer.certificate.$post>) {
      return parseResponse(client.dtcer.certificate.$post(args, options))
    },
  })
}

export function usePostDtcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dtcer.certificate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.dtcer.certificate.$post>,
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
  const mutationDefaults = getPostDtcerCertificateMutationOptions<TError, TOnMutateResult>(
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
