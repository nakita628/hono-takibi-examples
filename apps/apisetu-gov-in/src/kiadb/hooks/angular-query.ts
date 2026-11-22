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

export function getAlltrKey() {
  return ['alltr'] as const
}

export function getBknocKey() {
  return ['bknoc'] as const
}

export function getBpcerKey() {
  return ['bpcer'] as const
}

export function getCfltrKey() {
  return ['cfltr'] as const
}

export function getLcsagKey() {
  return ['lcsag'] as const
}

export function getPscerKey() {
  return ['pscer'] as const
}

export function getPsnocKey() {
  return ['psnoc'] as const
}

export function getWtrblKey() {
  return ['wtrbl'] as const
}

export function getPostAlltrCertificateMutationKey() {
  return ['alltr', '/alltr/certificate', 'POST'] as const
}

export function getPostAlltrCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alltr.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.alltr.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAlltrCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.alltr.certificate.$post>) {
      return parseResponse(client.alltr.certificate.$post(args, options))
    },
  })
}

export function injectPostAlltrCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.alltr.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.alltr.certificate.$post>,
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
    const mutationDefaults = getPostAlltrCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostBknocCertificateMutationKey() {
  return ['bknoc', '/bknoc/certificate', 'POST'] as const
}

export function getPostBknocCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bknoc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.bknoc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBknocCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bknoc.certificate.$post>) {
      return parseResponse(client.bknoc.certificate.$post(args, options))
    },
  })
}

export function injectPostBknocCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.bknoc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.bknoc.certificate.$post>,
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
    const mutationDefaults = getPostBknocCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostBpcerCertificateMutationKey() {
  return ['bpcer', '/bpcer/certificate', 'POST'] as const
}

export function getPostBpcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bpcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.bpcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBpcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bpcer.certificate.$post>) {
      return parseResponse(client.bpcer.certificate.$post(args, options))
    },
  })
}

export function injectPostBpcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.bpcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.bpcer.certificate.$post>,
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
    const mutationDefaults = getPostBpcerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCfltrCertificateMutationKey() {
  return ['cfltr', '/cfltr/certificate', 'POST'] as const
}

export function getPostCfltrCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cfltr.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cfltr.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCfltrCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cfltr.certificate.$post>) {
      return parseResponse(client.cfltr.certificate.$post(args, options))
    },
  })
}

export function injectPostCfltrCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cfltr.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.cfltr.certificate.$post>,
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
    const mutationDefaults = getPostCfltrCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostLcsagCertificateMutationKey() {
  return ['lcsag', '/lcsag/certificate', 'POST'] as const
}

export function getPostLcsagCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lcsag.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.lcsag.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLcsagCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lcsag.certificate.$post>) {
      return parseResponse(client.lcsag.certificate.$post(args, options))
    },
  })
}

export function injectPostLcsagCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.lcsag.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.lcsag.certificate.$post>,
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
    const mutationDefaults = getPostLcsagCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPscerCertificateMutationKey() {
  return ['pscer', '/pscer/certificate', 'POST'] as const
}

export function getPostPscerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pscer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.pscer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPscerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pscer.certificate.$post>) {
      return parseResponse(client.pscer.certificate.$post(args, options))
    },
  })
}

export function injectPostPscerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.pscer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.pscer.certificate.$post>,
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
    const mutationDefaults = getPostPscerCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPsnocCertificateMutationKey() {
  return ['psnoc', '/psnoc/certificate', 'POST'] as const
}

export function getPostPsnocCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.psnoc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.psnoc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPsnocCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.psnoc.certificate.$post>) {
      return parseResponse(client.psnoc.certificate.$post(args, options))
    },
  })
}

export function injectPostPsnocCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.psnoc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.psnoc.certificate.$post>,
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
    const mutationDefaults = getPostPsnocCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostWtrblCertificateMutationKey() {
  return ['wtrbl', '/wtrbl/certificate', 'POST'] as const
}

export function getPostWtrblCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wtrbl.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.wtrbl.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWtrblCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.wtrbl.certificate.$post>) {
      return parseResponse(client.wtrbl.certificate.$post(args, options))
    },
  })
}

export function injectPostWtrblCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.wtrbl.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.wtrbl.certificate.$post>,
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
    const mutationDefaults = getPostWtrblCertificateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
