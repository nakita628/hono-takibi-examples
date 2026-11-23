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

export function getBtcerKey() {
  return ['btcer'] as const
}

export function getCtcerKey() {
  return ['ctcer'] as const
}

export function getDtcerKey() {
  return ['dtcer'] as const
}

export function getEwcerKey() {
  return ['ewcer'] as const
}

export function getIncerKey() {
  return ['incer'] as const
}

export function getRmcerKey() {
  return ['rmcer'] as const
}

export function getRscerKey() {
  return ['rscer'] as const
}

export function getPostBtcerCertificateMutationKey() {
  return ['btcer', '/btcer/certificate', 'POST'] as const
}

export function getPostBtcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.btcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.btcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBtcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.btcer.certificate.$post>) {
      return parseResponse(client.btcer.certificate.$post(args, options))
    },
  })
}

export function injectPostBtcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.btcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.btcer.certificate.$post>,
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
    const mutationDefaults = getPostBtcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCtcerCertificateMutationKey() {
  return ['ctcer', '/ctcer/certificate', 'POST'] as const
}

export function getPostCtcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ctcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ctcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCtcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ctcer.certificate.$post>) {
      return parseResponse(client.ctcer.certificate.$post(args, options))
    },
  })
}

export function injectPostCtcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ctcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ctcer.certificate.$post>,
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
    const mutationDefaults = getPostCtcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDtcerCertificateMutationKey() {
  return ['dtcer', '/dtcer/certificate', 'POST'] as const
}

export function getPostDtcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dtcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dtcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDtcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dtcer.certificate.$post>) {
      return parseResponse(client.dtcer.certificate.$post(args, options))
    },
  })
}

export function injectPostDtcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dtcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.dtcer.certificate.$post>,
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
    const mutationDefaults = getPostDtcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostEwcerCertificateMutationKey() {
  return ['ewcer', '/ewcer/certificate', 'POST'] as const
}

export function getPostEwcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ewcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ewcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEwcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ewcer.certificate.$post>) {
      return parseResponse(client.ewcer.certificate.$post(args, options))
    },
  })
}

export function injectPostEwcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ewcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ewcer.certificate.$post>,
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
    const mutationDefaults = getPostEwcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostIncerCertificateMutationKey() {
  return ['incer', '/incer/certificate', 'POST'] as const
}

export function getPostIncerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.incer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.incer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIncerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.incer.certificate.$post>) {
      return parseResponse(client.incer.certificate.$post(args, options))
    },
  })
}

export function injectPostIncerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.incer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.incer.certificate.$post>,
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
    const mutationDefaults = getPostIncerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRmcerCertificateMutationKey() {
  return ['rmcer', '/rmcer/certificate', 'POST'] as const
}

export function getPostRmcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rmcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.rmcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRmcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rmcer.certificate.$post>) {
      return parseResponse(client.rmcer.certificate.$post(args, options))
    },
  })
}

export function injectPostRmcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.rmcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.rmcer.certificate.$post>,
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
    const mutationDefaults = getPostRmcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRscerCertificateMutationKey() {
  return ['rscer', '/rscer/certificate', 'POST'] as const
}

export function getPostRscerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rscer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.rscer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRscerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rscer.certificate.$post>) {
      return parseResponse(client.rscer.certificate.$post(args, options))
    },
  })
}

export function injectPostRscerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.rscer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.rscer.certificate.$post>,
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
    const mutationDefaults = getPostRscerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
