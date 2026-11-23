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

export function getHpcerKey() {
  return ['hpcer'] as const
}

export function getHscerKey() {
  return ['hscer'] as const
}

export function getHsmgrKey() {
  return ['hsmgr'] as const
}

export function getSpcerKey() {
  return ['spcer'] as const
}

export function getSscerKey() {
  return ['sscer'] as const
}

export function getPostHpcerCertificateMutationKey() {
  return ['hpcer', '/hpcer/certificate', 'POST'] as const
}

export function getPostHpcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hpcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.hpcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHpcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.hpcer.certificate.$post>) {
      return parseResponse(client.hpcer.certificate.$post(args, options))
    },
  })
}

export function injectPostHpcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.hpcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.hpcer.certificate.$post>,
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
    const mutationDefaults = getPostHpcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostHscerCertificateMutationKey() {
  return ['hscer', '/hscer/certificate', 'POST'] as const
}

export function getPostHscerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hscer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.hscer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHscerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.hscer.certificate.$post>) {
      return parseResponse(client.hscer.certificate.$post(args, options))
    },
  })
}

export function injectPostHscerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.hscer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.hscer.certificate.$post>,
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
    const mutationDefaults = getPostHscerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostHsmgrCertificateMutationKey() {
  return ['hsmgr', '/hsmgr/certificate', 'POST'] as const
}

export function getPostHsmgrCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hsmgr.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.hsmgr.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHsmgrCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.hsmgr.certificate.$post>) {
      return parseResponse(client.hsmgr.certificate.$post(args, options))
    },
  })
}

export function injectPostHsmgrCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.hsmgr.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.hsmgr.certificate.$post>,
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
    const mutationDefaults = getPostHsmgrCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSpcerCertificateMutationKey() {
  return ['spcer', '/spcer/certificate', 'POST'] as const
}

export function getPostSpcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.spcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.spcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSpcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.spcer.certificate.$post>) {
      return parseResponse(client.spcer.certificate.$post(args, options))
    },
  })
}

export function injectPostSpcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.spcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.spcer.certificate.$post>,
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
    const mutationDefaults = getPostSpcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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
