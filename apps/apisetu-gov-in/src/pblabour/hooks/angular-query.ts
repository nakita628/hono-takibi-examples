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

export function getAlsfcKey() {
  return ['alsfc'] as const
}

export function getClcerKey() {
  return ['clcer'] as const
}

export function getSrcerKey() {
  return ['srcer'] as const
}

export function getPostAlsfcCertificateMutationKey() {
  return ['alsfc', '/alsfc/certificate', 'POST'] as const
}

export function getPostAlsfcCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alsfc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.alsfc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAlsfcCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.alsfc.certificate.$post>) {
      return parseResponse(client.alsfc.certificate.$post(args, options))
    },
  })
}

export function injectPostAlsfcCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.alsfc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.alsfc.certificate.$post>,
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
    const mutationDefaults = getPostAlsfcCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostClcerCertificateMutationKey() {
  return ['clcer', '/clcer/certificate', 'POST'] as const
}

export function getPostClcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.clcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostClcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.clcer.certificate.$post>) {
      return parseResponse(client.clcer.certificate.$post(args, options))
    },
  })
}

export function injectPostClcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.clcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.clcer.certificate.$post>,
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
    const mutationDefaults = getPostClcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSrcerCertificateMutationKey() {
  return ['srcer', '/srcer/certificate', 'POST'] as const
}

export function getPostSrcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.srcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.srcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSrcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.srcer.certificate.$post>) {
      return parseResponse(client.srcer.certificate.$post(args, options))
    },
  })
}

export function injectPostSrcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.srcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.srcer.certificate.$post>,
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
    const mutationDefaults = getPostSrcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
