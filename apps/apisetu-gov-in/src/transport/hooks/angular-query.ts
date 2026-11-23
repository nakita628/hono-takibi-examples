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

export function getDrvlcKey() {
  return ['drvlc'] as const
}

export function getFitcerKey() {
  return ['fitcer'] as const
}

export function getRvcerKey() {
  return ['rvcer'] as const
}

export function getVhinscKey() {
  return ['vhinsc'] as const
}

export function getVhtaxKey() {
  return ['vhtax'] as const
}

export function getPostDrvlcCertificateMutationKey() {
  return ['drvlc', '/drvlc/certificate', 'POST'] as const
}

export function getPostDrvlcCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.drvlc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.drvlc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDrvlcCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.drvlc.certificate.$post>) {
      return parseResponse(client.drvlc.certificate.$post(args, options))
    },
  })
}

export function injectPostDrvlcCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.drvlc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.drvlc.certificate.$post>,
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
    const mutationDefaults = getPostDrvlcCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostFitcerCertificateMutationKey() {
  return ['fitcer', '/fitcer/certificate', 'POST'] as const
}

export function getPostFitcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fitcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.fitcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFitcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fitcer.certificate.$post>) {
      return parseResponse(client.fitcer.certificate.$post(args, options))
    },
  })
}

export function injectPostFitcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.fitcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.fitcer.certificate.$post>,
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
    const mutationDefaults = getPostFitcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRvcerCertificateMutationKey() {
  return ['rvcer', '/rvcer/certificate', 'POST'] as const
}

export function getPostRvcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rvcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.rvcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRvcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rvcer.certificate.$post>) {
      return parseResponse(client.rvcer.certificate.$post(args, options))
    },
  })
}

export function injectPostRvcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.rvcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.rvcer.certificate.$post>,
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
    const mutationDefaults = getPostRvcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostVhinscCertificateMutationKey() {
  return ['vhinsc', '/vhinsc/certificate', 'POST'] as const
}

export function getPostVhinscCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vhinsc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.vhinsc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVhinscCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.vhinsc.certificate.$post>) {
      return parseResponse(client.vhinsc.certificate.$post(args, options))
    },
  })
}

export function injectPostVhinscCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.vhinsc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.vhinsc.certificate.$post>,
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
    const mutationDefaults = getPostVhinscCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostVhtaxCertificateMutationKey() {
  return ['vhtax', '/vhtax/certificate', 'POST'] as const
}

export function getPostVhtaxCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vhtax.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.vhtax.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVhtaxCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.vhtax.certificate.$post>) {
      return parseResponse(client.vhtax.certificate.$post(args, options))
    },
  })
}

export function injectPostVhtaxCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.vhtax.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.vhtax.certificate.$post>,
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
    const mutationDefaults = getPostVhtaxCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
