import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
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

export function getNchscKey() {
  return ['nchsc'] as const
}

export function getNctscKey() {
  return ['nctsc'] as const
}

export function getNsescKey() {
  return ['nsesc'] as const
}

export function getNstscKey() {
  return ['nstsc'] as const
}

export function getNtltrKey() {
  return ['ntltr'] as const
}

export function getNtmksKey() {
  return ['ntmks'] as const
}

export function getSkhscKey() {
  return ['skhsc'] as const
}

export function getSktscKey() {
  return ['sktsc'] as const
}

export function getSpcerKey() {
  return ['spcer'] as const
}

export function getSscerKey() {
  return ['sscer'] as const
}

export function getSsmgrKey() {
  return ['ssmgr'] as const
}

export function getTetcrKey() {
  return ['tetcr'] as const
}

export function getTetmsKey() {
  return ['tetms'] as const
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

export function usePostHpcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostHpcerCertificateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostHscerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostHscerCertificateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostHsmgrCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostHsmgrCertificateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostNchscCertificateMutationKey() {
  return ['nchsc', '/nchsc/certificate', 'POST'] as const
}

export function getPostNchscCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nchsc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.nchsc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNchscCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.nchsc.certificate.$post>) {
      return parseResponse(client.nchsc.certificate.$post(args, options))
    },
  })
}

export function usePostNchscCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.nchsc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.nchsc.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNchscCertificateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostNctscCertificateMutationKey() {
  return ['nctsc', '/nctsc/certificate', 'POST'] as const
}

export function getPostNctscCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nctsc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.nctsc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNctscCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.nctsc.certificate.$post>) {
      return parseResponse(client.nctsc.certificate.$post(args, options))
    },
  })
}

export function usePostNctscCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.nctsc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.nctsc.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNctscCertificateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostNsescCertificateMutationKey() {
  return ['nsesc', '/nsesc/certificate', 'POST'] as const
}

export function getPostNsescCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nsesc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.nsesc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNsescCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.nsesc.certificate.$post>) {
      return parseResponse(client.nsesc.certificate.$post(args, options))
    },
  })
}

export function usePostNsescCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.nsesc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.nsesc.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNsescCertificateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostNstscCertificateMutationKey() {
  return ['nstsc', '/nstsc/certificate', 'POST'] as const
}

export function getPostNstscCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nstsc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.nstsc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNstscCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.nstsc.certificate.$post>) {
      return parseResponse(client.nstsc.certificate.$post(args, options))
    },
  })
}

export function usePostNstscCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.nstsc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.nstsc.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNstscCertificateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostNtltrCertificateMutationKey() {
  return ['ntltr', '/ntltr/certificate', 'POST'] as const
}

export function getPostNtltrCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ntltr.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ntltr.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNtltrCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ntltr.certificate.$post>) {
      return parseResponse(client.ntltr.certificate.$post(args, options))
    },
  })
}

export function usePostNtltrCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ntltr.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ntltr.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNtltrCertificateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostNtmksCertificateMutationKey() {
  return ['ntmks', '/ntmks/certificate', 'POST'] as const
}

export function getPostNtmksCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ntmks.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ntmks.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNtmksCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ntmks.certificate.$post>) {
      return parseResponse(client.ntmks.certificate.$post(args, options))
    },
  })
}

export function usePostNtmksCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ntmks.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ntmks.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNtmksCertificateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSkhscCertificateMutationKey() {
  return ['skhsc', '/skhsc/certificate', 'POST'] as const
}

export function getPostSkhscCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.skhsc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.skhsc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSkhscCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.skhsc.certificate.$post>) {
      return parseResponse(client.skhsc.certificate.$post(args, options))
    },
  })
}

export function usePostSkhscCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.skhsc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.skhsc.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSkhscCertificateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSktscCertificateMutationKey() {
  return ['sktsc', '/sktsc/certificate', 'POST'] as const
}

export function getPostSktscCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sktsc.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sktsc.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSktscCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sktsc.certificate.$post>) {
      return parseResponse(client.sktsc.certificate.$post(args, options))
    },
  })
}

export function usePostSktscCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sktsc.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sktsc.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSktscCertificateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostSpcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSpcerCertificateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostSscerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSscerCertificateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSsmgrCertificateMutationKey() {
  return ['ssmgr', '/ssmgr/certificate', 'POST'] as const
}

export function getPostSsmgrCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssmgr.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ssmgr.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSsmgrCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ssmgr.certificate.$post>) {
      return parseResponse(client.ssmgr.certificate.$post(args, options))
    },
  })
}

export function usePostSsmgrCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ssmgr.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ssmgr.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSsmgrCertificateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTetcrCertificateMutationKey() {
  return ['tetcr', '/tetcr/certificate', 'POST'] as const
}

export function getPostTetcrCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tetcr.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tetcr.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTetcrCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tetcr.certificate.$post>) {
      return parseResponse(client.tetcr.certificate.$post(args, options))
    },
  })
}

export function usePostTetcrCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tetcr.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.tetcr.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTetcrCertificateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTetmsCertificateMutationKey() {
  return ['tetms', '/tetms/certificate', 'POST'] as const
}

export function getPostTetmsCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tetms.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tetms.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTetmsCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tetms.certificate.$post>) {
      return parseResponse(client.tetms.certificate.$post(args, options))
    },
  })
}

export function usePostTetmsCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.tetms.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.tetms.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTetmsCertificateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
