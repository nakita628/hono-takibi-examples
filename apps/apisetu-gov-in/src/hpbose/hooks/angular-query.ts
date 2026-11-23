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

export function injectPostHvcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.hvcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.hvcer.certificate.$post>,
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
    const mutationDefaults = getPostHvcerCertificateMutationOptions<TError, TOnMutateResult>(
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
