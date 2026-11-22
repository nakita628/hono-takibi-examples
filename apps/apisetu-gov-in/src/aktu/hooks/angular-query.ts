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

export function getDgcerKey() {
  return ['dgcer'] as const
}

export function getDgmstKey() {
  return ['dgmst'] as const
}

export function getPostDgcerCertificateMutationKey() {
  return ['dgcer', '/dgcer/certificate', 'POST'] as const
}

export function getPostDgcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dgcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dgcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDgcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dgcer.certificate.$post>) {
      return parseResponse(client.dgcer.certificate.$post(args, options))
    },
  })
}

export function injectPostDgcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dgcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.dgcer.certificate.$post>,
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
    const mutationDefaults = getPostDgcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDgmstCertificateMutationKey() {
  return ['dgmst', '/dgmst/certificate', 'POST'] as const
}

export function getPostDgmstCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dgmst.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dgmst.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDgmstCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dgmst.certificate.$post>) {
      return parseResponse(client.dgmst.certificate.$post(args, options))
    },
  })
}

export function injectPostDgmstCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dgmst.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.dgmst.certificate.$post>,
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
    const mutationDefaults = getPostDgmstCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
