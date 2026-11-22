import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getKecerKey() {
  return ['kecer'] as const
}

export function getTapcnKey() {
  return ['tapcn'] as const
}

export function getTdlcsKey() {
  return ['tdlcs'] as const
}

export function getUgdcnKey() {
  return ['ugdcn'] as const
}

export function getPostKecerCertificateMutationKey() {
  return ['kecer', '/kecer/certificate', 'POST'] as const
}

export function getPostKecerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kecer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.kecer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostKecerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.kecer.certificate.$post>) {
      return parseResponse(client.kecer.certificate.$post(args, options))
    },
  })
}

export function createPostKecerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.kecer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.kecer.certificate.$post>,
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
    const mutationDefaults = getPostKecerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTapcnCertificateMutationKey() {
  return ['tapcn', '/tapcn/certificate', 'POST'] as const
}

export function getPostTapcnCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tapcn.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tapcn.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTapcnCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tapcn.certificate.$post>) {
      return parseResponse(client.tapcn.certificate.$post(args, options))
    },
  })
}

export function createPostTapcnCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tapcn.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.tapcn.certificate.$post>,
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
    const mutationDefaults = getPostTapcnCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTdlcsCertificateMutationKey() {
  return ['tdlcs', '/tdlcs/certificate', 'POST'] as const
}

export function getPostTdlcsCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tdlcs.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tdlcs.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTdlcsCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tdlcs.certificate.$post>) {
      return parseResponse(client.tdlcs.certificate.$post(args, options))
    },
  })
}

export function createPostTdlcsCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tdlcs.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.tdlcs.certificate.$post>,
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
    const mutationDefaults = getPostTdlcsCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUgdcnCertificateMutationKey() {
  return ['ugdcn', '/ugdcn/certificate', 'POST'] as const
}

export function getPostUgdcnCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ugdcn.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ugdcn.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUgdcnCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ugdcn.certificate.$post>) {
      return parseResponse(client.ugdcn.certificate.$post(args, options))
    },
  })
}

export function createPostUgdcnCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ugdcn.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ugdcn.certificate.$post>,
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
    const mutationDefaults = getPostUgdcnCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
