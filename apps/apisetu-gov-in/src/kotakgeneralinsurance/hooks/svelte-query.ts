import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCripcKey() {
  return ['cripc'] as const
}

export function getCvipcKey() {
  return ['cvipc'] as const
}

export function getGicerKey() {
  return ['gicer'] as const
}

export function getHlipcKey() {
  return ['hlipc'] as const
}

export function getHmipcKey() {
  return ['hmipc'] as const
}

export function getTwipcKey() {
  return ['twipc'] as const
}

export function getPostCripcCertificateMutationKey() {
  return ['cripc', '/cripc/certificate', 'POST'] as const
}

export function getPostCripcCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cripc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cripc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCripcCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cripc.certificate.$post>) {
      return parseResponse(client.cripc.certificate.$post(args, options))
    },
  })
}

export function createPostCripcCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cripc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.cripc.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCripcCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCvipcCertificateMutationKey() {
  return ['cvipc', '/cvipc/certificate', 'POST'] as const
}

export function getPostCvipcCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cvipc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cvipc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCvipcCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cvipc.certificate.$post>) {
      return parseResponse(client.cvipc.certificate.$post(args, options))
    },
  })
}

export function createPostCvipcCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cvipc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.cvipc.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCvipcCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGicerCertificateMutationKey() {
  return ['gicer', '/gicer/certificate', 'POST'] as const
}

export function getPostGicerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gicer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.gicer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGicerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.gicer.certificate.$post>) {
      return parseResponse(client.gicer.certificate.$post(args, options))
    },
  })
}

export function createPostGicerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.gicer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.gicer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGicerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostHlipcCertificateMutationKey() {
  return ['hlipc', '/hlipc/certificate', 'POST'] as const
}

export function getPostHlipcCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hlipc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.hlipc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHlipcCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.hlipc.certificate.$post>) {
      return parseResponse(client.hlipc.certificate.$post(args, options))
    },
  })
}

export function createPostHlipcCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.hlipc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.hlipc.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostHlipcCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostHmipcCertificateMutationKey() {
  return ['hmipc', '/hmipc/certificate', 'POST'] as const
}

export function getPostHmipcCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hmipc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.hmipc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHmipcCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.hmipc.certificate.$post>) {
      return parseResponse(client.hmipc.certificate.$post(args, options))
    },
  })
}

export function createPostHmipcCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.hmipc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.hmipc.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostHmipcCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTwipcCertificateMutationKey() {
  return ['twipc', '/twipc/certificate', 'POST'] as const
}

export function getPostTwipcCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.twipc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.twipc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTwipcCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.twipc.certificate.$post>) {
      return parseResponse(client.twipc.certificate.$post(args, options))
    },
  })
}

export function createPostTwipcCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.twipc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.twipc.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTwipcCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
