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

export function getEscerKey() {
  return ['escer'] as const
}

export function getSkcerKey() {
  return ['skcer'] as const
}

export function getPostEscerCertificateMutationKey() {
  return ['escer', '/escer/certificate', 'POST'] as const
}

export function getPostEscerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.escer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.escer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEscerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.escer.certificate.$post>) {
      return parseResponse(client.escer.certificate.$post(args, options))
    },
  })
}

export function injectPostEscerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.escer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.escer.certificate.$post>,
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
    const mutationDefaults = getPostEscerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSkcerCertificateMutationKey() {
  return ['skcer', '/skcer/certificate', 'POST'] as const
}

export function getPostSkcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.skcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.skcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSkcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.skcer.certificate.$post>) {
      return parseResponse(client.skcer.certificate.$post(args, options))
    },
  })
}

export function injectPostSkcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.skcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.skcer.certificate.$post>,
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
    const mutationDefaults = getPostSkcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
