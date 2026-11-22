import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCmcerKey() {
  return ['cmcer'] as const
}

export function getCncerKey() {
  return ['cncer'] as const
}

export function getCtcerKey() {
  return ['ctcer'] as const
}

export function getDmcerKey() {
  return ['dmcer'] as const
}

export function getDpcerKey() {
  return ['dpcer'] as const
}

export function getDscerKey() {
  return ['dscer'] as const
}

export function getFmcerKey() {
  return ['fmcer'] as const
}

export function getIdcerKey() {
  return ['idcer'] as const
}

export function getImcerKey() {
  return ['imcer'] as const
}

export function getIncerKey() {
  return ['incer'] as const
}

export function getLfcerKey() {
  return ['lfcer'] as const
}

export function getLhcerKey() {
  return ['lhcer'] as const
}

export function getLocerKey() {
  return ['locer'] as const
}

export function getMncerKey() {
  return ['mncer'] as const
}

export function getNrcerKey() {
  return ['nrcer'] as const
}

export function getNtcerKey() {
  return ['ntcer'] as const
}

export function getOscerKey() {
  return ['oscer'] as const
}

export function getPncerKey() {
  return ['pncer'] as const
}

export function getPscerKey() {
  return ['pscer'] as const
}

export function getRlcerKey() {
  return ['rlcer'] as const
}

export function getRscerKey() {
  return ['rscer'] as const
}

export function getSlcerKey() {
  return ['slcer'] as const
}

export function getVlcerKey() {
  return ['vlcer'] as const
}

export function getWwcerKey() {
  return ['wwcer'] as const
}

export function getPostCmcerCertificateMutationKey() {
  return ['cmcer', '/cmcer/certificate', 'POST'] as const
}

export function getPostCmcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cmcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cmcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCmcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cmcer.certificate.$post>) {
      return parseResponse(client.cmcer.certificate.$post(args, options))
    },
  })
}

export function usePostCmcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cmcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.cmcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCmcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostCncerCertificateMutationKey() {
  return ['cncer', '/cncer/certificate', 'POST'] as const
}

export function getPostCncerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cncer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cncer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCncerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cncer.certificate.$post>) {
      return parseResponse(client.cncer.certificate.$post(args, options))
    },
  })
}

export function usePostCncerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cncer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.cncer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCncerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function usePostCtcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCtcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostDmcerCertificateMutationKey() {
  return ['dmcer', '/dmcer/certificate', 'POST'] as const
}

export function getPostDmcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dmcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dmcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDmcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dmcer.certificate.$post>) {
      return parseResponse(client.dmcer.certificate.$post(args, options))
    },
  })
}

export function usePostDmcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dmcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.dmcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDmcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostDpcerCertificateMutationKey() {
  return ['dpcer', '/dpcer/certificate', 'POST'] as const
}

export function getPostDpcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dpcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dpcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDpcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dpcer.certificate.$post>) {
      return parseResponse(client.dpcer.certificate.$post(args, options))
    },
  })
}

export function usePostDpcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dpcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.dpcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDpcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostDscerCertificateMutationKey() {
  return ['dscer', '/dscer/certificate', 'POST'] as const
}

export function getPostDscerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dscer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dscer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDscerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dscer.certificate.$post>) {
      return parseResponse(client.dscer.certificate.$post(args, options))
    },
  })
}

export function usePostDscerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dscer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.dscer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDscerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostFmcerCertificateMutationKey() {
  return ['fmcer', '/fmcer/certificate', 'POST'] as const
}

export function getPostFmcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fmcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.fmcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFmcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fmcer.certificate.$post>) {
      return parseResponse(client.fmcer.certificate.$post(args, options))
    },
  })
}

export function usePostFmcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.fmcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.fmcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFmcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostIdcerCertificateMutationKey() {
  return ['idcer', '/idcer/certificate', 'POST'] as const
}

export function getPostIdcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.idcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.idcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIdcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.idcer.certificate.$post>) {
      return parseResponse(client.idcer.certificate.$post(args, options))
    },
  })
}

export function usePostIdcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.idcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.idcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIdcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostImcerCertificateMutationKey() {
  return ['imcer', '/imcer/certificate', 'POST'] as const
}

export function getPostImcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.imcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostImcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.imcer.certificate.$post>) {
      return parseResponse(client.imcer.certificate.$post(args, options))
    },
  })
}

export function usePostImcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.imcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.imcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostImcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function usePostIncerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIncerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostLfcerCertificateMutationKey() {
  return ['lfcer', '/lfcer/certificate', 'POST'] as const
}

export function getPostLfcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lfcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.lfcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLfcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lfcer.certificate.$post>) {
      return parseResponse(client.lfcer.certificate.$post(args, options))
    },
  })
}

export function usePostLfcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.lfcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.lfcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLfcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostLhcerCertificateMutationKey() {
  return ['lhcer', '/lhcer/certificate', 'POST'] as const
}

export function getPostLhcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lhcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.lhcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLhcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lhcer.certificate.$post>) {
      return parseResponse(client.lhcer.certificate.$post(args, options))
    },
  })
}

export function usePostLhcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.lhcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.lhcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLhcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostLocerCertificateMutationKey() {
  return ['locer', '/locer/certificate', 'POST'] as const
}

export function getPostLocerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.locer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLocerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.locer.certificate.$post>) {
      return parseResponse(client.locer.certificate.$post(args, options))
    },
  })
}

export function usePostLocerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.locer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.locer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLocerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostMncerCertificateMutationKey() {
  return ['mncer', '/mncer/certificate', 'POST'] as const
}

export function getPostMncerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mncer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.mncer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMncerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mncer.certificate.$post>) {
      return parseResponse(client.mncer.certificate.$post(args, options))
    },
  })
}

export function usePostMncerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mncer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.mncer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMncerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostNrcerCertificateMutationKey() {
  return ['nrcer', '/nrcer/certificate', 'POST'] as const
}

export function getPostNrcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nrcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.nrcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNrcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.nrcer.certificate.$post>) {
      return parseResponse(client.nrcer.certificate.$post(args, options))
    },
  })
}

export function usePostNrcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.nrcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.nrcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNrcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostNtcerCertificateMutationKey() {
  return ['ntcer', '/ntcer/certificate', 'POST'] as const
}

export function getPostNtcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ntcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ntcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNtcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ntcer.certificate.$post>) {
      return parseResponse(client.ntcer.certificate.$post(args, options))
    },
  })
}

export function usePostNtcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ntcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ntcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNtcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostOscerCertificateMutationKey() {
  return ['oscer', '/oscer/certificate', 'POST'] as const
}

export function getPostOscerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oscer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oscer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOscerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oscer.certificate.$post>) {
      return parseResponse(client.oscer.certificate.$post(args, options))
    },
  })
}

export function usePostOscerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oscer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.oscer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOscerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostPncerCertificateMutationKey() {
  return ['pncer', '/pncer/certificate', 'POST'] as const
}

export function getPostPncerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pncer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.pncer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPncerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pncer.certificate.$post>) {
      return parseResponse(client.pncer.certificate.$post(args, options))
    },
  })
}

export function usePostPncerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.pncer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.pncer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPncerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function usePostPscerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPscerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostRlcerCertificateMutationKey() {
  return ['rlcer', '/rlcer/certificate', 'POST'] as const
}

export function getPostRlcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rlcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.rlcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRlcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rlcer.certificate.$post>) {
      return parseResponse(client.rlcer.certificate.$post(args, options))
    },
  })
}

export function usePostRlcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.rlcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.rlcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRlcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function usePostRscerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRscerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostSlcerCertificateMutationKey() {
  return ['slcer', '/slcer/certificate', 'POST'] as const
}

export function getPostSlcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.slcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.slcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSlcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.slcer.certificate.$post>) {
      return parseResponse(client.slcer.certificate.$post(args, options))
    },
  })
}

export function usePostSlcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.slcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.slcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSlcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostVlcerCertificateMutationKey() {
  return ['vlcer', '/vlcer/certificate', 'POST'] as const
}

export function getPostVlcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vlcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.vlcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVlcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.vlcer.certificate.$post>) {
      return parseResponse(client.vlcer.certificate.$post(args, options))
    },
  })
}

export function usePostVlcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.vlcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.vlcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVlcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostWwcerCertificateMutationKey() {
  return ['wwcer', '/wwcer/certificate', 'POST'] as const
}

export function getPostWwcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.wwcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.wwcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWwcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.wwcer.certificate.$post>) {
      return parseResponse(client.wwcer.certificate.$post(args, options))
    },
  })
}

export function usePostWwcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.wwcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.wwcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWwcerCertificateMutationOptions<TError, TOnMutateResult>(
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
