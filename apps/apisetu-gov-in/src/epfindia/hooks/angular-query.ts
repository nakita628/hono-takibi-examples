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

export function getEpfscKey() {
  return ['epfsc'] as const
}

export function getPecerKey() {
  return ['pecer'] as const
}

export function getUncrdKey() {
  return ['uncrd'] as const
}

export function getPostEpfscCertificateMutationKey() {
  return ['epfsc', '/epfsc/certificate', 'POST'] as const
}

export function getPostEpfscCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.epfsc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.epfsc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEpfscCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.epfsc.certificate.$post>) {
      return parseResponse(client.epfsc.certificate.$post(args, options))
    },
  })
}

export function injectPostEpfscCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.epfsc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.epfsc.certificate.$post>,
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
    const mutationDefaults = getPostEpfscCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPecerCertificateMutationKey() {
  return ['pecer', '/pecer/certificate', 'POST'] as const
}

export function getPostPecerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pecer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.pecer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPecerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pecer.certificate.$post>) {
      return parseResponse(client.pecer.certificate.$post(args, options))
    },
  })
}

export function injectPostPecerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.pecer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.pecer.certificate.$post>,
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
    const mutationDefaults = getPostPecerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUncrdCertificateMutationKey() {
  return ['uncrd', '/uncrd/certificate', 'POST'] as const
}

export function getPostUncrdCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uncrd.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.uncrd.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUncrdCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.uncrd.certificate.$post>) {
      return parseResponse(client.uncrd.certificate.$post(args, options))
    },
  })
}

export function injectPostUncrdCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.uncrd.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.uncrd.certificate.$post>,
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
    const mutationDefaults = getPostUncrdCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
