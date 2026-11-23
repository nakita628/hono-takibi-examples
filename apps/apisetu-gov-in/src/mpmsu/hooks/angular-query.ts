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

export function getMicerKey() {
  return ['micer'] as const
}

export function getPvcerKey() {
  return ['pvcer'] as const
}

export function getPostMicerCertificateMutationKey() {
  return ['micer', '/micer/certificate', 'POST'] as const
}

export function getPostMicerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.micer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.micer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMicerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.micer.certificate.$post>) {
      return parseResponse(client.micer.certificate.$post(args, options))
    },
  })
}

export function injectPostMicerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.micer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.micer.certificate.$post>,
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
    const mutationDefaults = getPostMicerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPvcerCertificateMutationKey() {
  return ['pvcer', '/pvcer/certificate', 'POST'] as const
}

export function getPostPvcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pvcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.pvcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPvcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pvcer.certificate.$post>) {
      return parseResponse(client.pvcer.certificate.$post(args, options))
    },
  })
}

export function injectPostPvcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.pvcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.pvcer.certificate.$post>,
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
    const mutationDefaults = getPostPvcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
