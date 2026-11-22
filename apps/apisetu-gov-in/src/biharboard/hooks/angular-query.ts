import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSscerKey() {
  return ['sscer'] as const
}

export function getSvcerKey() {
  return ['svcer'] as const
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

export function injectPostSscerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sscer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sscer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSscerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostSvcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.svcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.svcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSvcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
