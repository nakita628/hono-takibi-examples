import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAecmwKey() {
  return ['aecmw'] as const
}

export function getAemtwKey() {
  return ['aemtw'] as const
}

export function getAgcerKey() {
  return ['agcer'] as const
}

export function getAlimwKey() {
  return ['alimw'] as const
}

export function getArcmwKey() {
  return ['arcmw'] as const
}

export function getArmtwKey() {
  return ['armtw'] as const
}

export function getBacerKey() {
  return ['bacer'] as const
}

export function getBhcerKey() {
  return ['bhcer'] as const
}

export function getBpcrdKey() {
  return ['bpcrd'] as const
}

export function getBtcerKey() {
  return ['btcer'] as const
}

export function getCecerKey() {
  return ['cecer'] as const
}

export function getChcerKey() {
  return ['chcer'] as const
}

export function getClcerKey() {
  return ['clcer'] as const
}

export function getCoprgKey() {
  return ['coprg'] as const
}

export function getDccerKey() {
  return ['dccer'] as const
}

export function getDmcerKey() {
  return ['dmcer'] as const
}

export function getDpicrKey() {
  return ['dpicr'] as const
}

export function getDtcerKey() {
  return ['dtcer'] as const
}

export function getErcerKey() {
  return ['ercer'] as const
}

export function getFfcerKey() {
  return ['ffcer'] as const
}

export function getIgcerKey() {
  return ['igcer'] as const
}

export function getIncerKey() {
  return ['incer'] as const
}

export function getLhcerKey() {
  return ['lhcer'] as const
}

export function getMncerKey() {
  return ['mncer'] as const
}

export function getMnrgaKey() {
  return ['mnrga'] as const
}

export function getObcerKey() {
  return ['obcer'] as const
}

export function getRacerKey() {
  return ['racer'] as const
}

export function getRmcerKey() {
  return ['rmcer'] as const
}

export function getSecerKey() {
  return ['secer'] as const
}

export function getShcerKey() {
  return ['shcer'] as const
}

export function getSicrdKey() {
  return ['sicrd'] as const
}

export function getSrcerKey() {
  return ['srcer'] as const
}

export function getPostAecmwCertificateMutationKey() {
  return ['aecmw', '/aecmw/certificate', 'POST'] as const
}

export function getPostAecmwCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aecmw.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.aecmw.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAecmwCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.aecmw.certificate.$post>) {
      return parseResponse(client.aecmw.certificate.$post(args, options))
    },
  })
}

export function usePostAecmwCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.aecmw.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.aecmw.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAecmwCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostAemtwCertificateMutationKey() {
  return ['aemtw', '/aemtw/certificate', 'POST'] as const
}

export function getPostAemtwCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aemtw.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.aemtw.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAemtwCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.aemtw.certificate.$post>) {
      return parseResponse(client.aemtw.certificate.$post(args, options))
    },
  })
}

export function usePostAemtwCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.aemtw.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.aemtw.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAemtwCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostAgcerCertificateMutationKey() {
  return ['agcer', '/agcer/certificate', 'POST'] as const
}

export function getPostAgcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.agcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAgcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.agcer.certificate.$post>) {
      return parseResponse(client.agcer.certificate.$post(args, options))
    },
  })
}

export function usePostAgcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.agcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.agcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAgcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostAlimwCertificateMutationKey() {
  return ['alimw', '/alimw/certificate', 'POST'] as const
}

export function getPostAlimwCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.alimw.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.alimw.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAlimwCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.alimw.certificate.$post>) {
      return parseResponse(client.alimw.certificate.$post(args, options))
    },
  })
}

export function usePostAlimwCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.alimw.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.alimw.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAlimwCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostArcmwCertificateMutationKey() {
  return ['arcmw', '/arcmw/certificate', 'POST'] as const
}

export function getPostArcmwCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.arcmw.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.arcmw.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostArcmwCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.arcmw.certificate.$post>) {
      return parseResponse(client.arcmw.certificate.$post(args, options))
    },
  })
}

export function usePostArcmwCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.arcmw.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.arcmw.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostArcmwCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostArmtwCertificateMutationKey() {
  return ['armtw', '/armtw/certificate', 'POST'] as const
}

export function getPostArmtwCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.armtw.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.armtw.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostArmtwCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.armtw.certificate.$post>) {
      return parseResponse(client.armtw.certificate.$post(args, options))
    },
  })
}

export function usePostArmtwCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.armtw.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.armtw.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostArmtwCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostBacerCertificateMutationKey() {
  return ['bacer', '/bacer/certificate', 'POST'] as const
}

export function getPostBacerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bacer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.bacer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBacerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bacer.certificate.$post>) {
      return parseResponse(client.bacer.certificate.$post(args, options))
    },
  })
}

export function usePostBacerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.bacer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.bacer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBacerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostBhcerCertificateMutationKey() {
  return ['bhcer', '/bhcer/certificate', 'POST'] as const
}

export function getPostBhcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bhcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.bhcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBhcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bhcer.certificate.$post>) {
      return parseResponse(client.bhcer.certificate.$post(args, options))
    },
  })
}

export function usePostBhcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.bhcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.bhcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBhcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostBpcrdCertificateMutationKey() {
  return ['bpcrd', '/bpcrd/certificate', 'POST'] as const
}

export function getPostBpcrdCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bpcrd.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.bpcrd.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBpcrdCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bpcrd.certificate.$post>) {
      return parseResponse(client.bpcrd.certificate.$post(args, options))
    },
  })
}

export function usePostBpcrdCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.bpcrd.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.bpcrd.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBpcrdCertificateMutationOptions<TError, TOnMutateResult>(
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

export function usePostBtcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBtcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostCecerCertificateMutationKey() {
  return ['cecer', '/cecer/certificate', 'POST'] as const
}

export function getPostCecerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cecer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cecer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCecerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cecer.certificate.$post>) {
      return parseResponse(client.cecer.certificate.$post(args, options))
    },
  })
}

export function usePostCecerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cecer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.cecer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCecerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostChcerCertificateMutationKey() {
  return ['chcer', '/chcer/certificate', 'POST'] as const
}

export function getPostChcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.chcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.chcer.certificate.$post>) {
      return parseResponse(client.chcer.certificate.$post(args, options))
    },
  })
}

export function usePostChcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.chcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.chcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostChcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function usePostClcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostClcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostCoprgCertificateMutationKey() {
  return ['coprg', '/coprg/certificate', 'POST'] as const
}

export function getPostCoprgCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coprg.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.coprg.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCoprgCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.coprg.certificate.$post>) {
      return parseResponse(client.coprg.certificate.$post(args, options))
    },
  })
}

export function usePostCoprgCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.coprg.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.coprg.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCoprgCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostDccerCertificateMutationKey() {
  return ['dccer', '/dccer/certificate', 'POST'] as const
}

export function getPostDccerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dccer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dccer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDccerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dccer.certificate.$post>) {
      return parseResponse(client.dccer.certificate.$post(args, options))
    },
  })
}

export function usePostDccerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dccer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.dccer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDccerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostDpicrCertificateMutationKey() {
  return ['dpicr', '/dpicr/certificate', 'POST'] as const
}

export function getPostDpicrCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dpicr.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dpicr.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDpicrCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dpicr.certificate.$post>) {
      return parseResponse(client.dpicr.certificate.$post(args, options))
    },
  })
}

export function usePostDpicrCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dpicr.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.dpicr.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDpicrCertificateMutationOptions<TError, TOnMutateResult>(
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

export function usePostDtcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDtcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostErcerCertificateMutationKey() {
  return ['ercer', '/ercer/certificate', 'POST'] as const
}

export function getPostErcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ercer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ercer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostErcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ercer.certificate.$post>) {
      return parseResponse(client.ercer.certificate.$post(args, options))
    },
  })
}

export function usePostErcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ercer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ercer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostErcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostFfcerCertificateMutationKey() {
  return ['ffcer', '/ffcer/certificate', 'POST'] as const
}

export function getPostFfcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ffcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ffcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFfcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ffcer.certificate.$post>) {
      return parseResponse(client.ffcer.certificate.$post(args, options))
    },
  })
}

export function usePostFfcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ffcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ffcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFfcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostIgcerCertificateMutationKey() {
  return ['igcer', '/igcer/certificate', 'POST'] as const
}

export function getPostIgcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.igcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.igcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIgcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.igcer.certificate.$post>) {
      return parseResponse(client.igcer.certificate.$post(args, options))
    },
  })
}

export function usePostIgcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.igcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.igcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIgcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostMnrgaCertificateMutationKey() {
  return ['mnrga', '/mnrga/certificate', 'POST'] as const
}

export function getPostMnrgaCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mnrga.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.mnrga.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMnrgaCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mnrga.certificate.$post>) {
      return parseResponse(client.mnrga.certificate.$post(args, options))
    },
  })
}

export function usePostMnrgaCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.mnrga.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.mnrga.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMnrgaCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostObcerCertificateMutationKey() {
  return ['obcer', '/obcer/certificate', 'POST'] as const
}

export function getPostObcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.obcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.obcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostObcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.obcer.certificate.$post>) {
      return parseResponse(client.obcer.certificate.$post(args, options))
    },
  })
}

export function usePostObcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.obcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.obcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostObcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostRacerCertificateMutationKey() {
  return ['racer', '/racer/certificate', 'POST'] as const
}

export function getPostRacerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.racer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.racer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRacerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.racer.certificate.$post>) {
      return parseResponse(client.racer.certificate.$post(args, options))
    },
  })
}

export function usePostRacerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.racer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.racer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRacerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function usePostRmcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRmcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostSecerCertificateMutationKey() {
  return ['secer', '/secer/certificate', 'POST'] as const
}

export function getPostSecerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.secer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSecerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.secer.certificate.$post>) {
      return parseResponse(client.secer.certificate.$post(args, options))
    },
  })
}

export function usePostSecerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.secer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.secer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSecerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostShcerCertificateMutationKey() {
  return ['shcer', '/shcer/certificate', 'POST'] as const
}

export function getPostShcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.shcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostShcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.shcer.certificate.$post>) {
      return parseResponse(client.shcer.certificate.$post(args, options))
    },
  })
}

export function usePostShcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.shcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.shcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostShcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostSicrdCertificateMutationKey() {
  return ['sicrd', '/sicrd/certificate', 'POST'] as const
}

export function getPostSicrdCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sicrd.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sicrd.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSicrdCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sicrd.certificate.$post>) {
      return parseResponse(client.sicrd.certificate.$post(args, options))
    },
  })
}

export function usePostSicrdCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sicrd.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.sicrd.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSicrdCertificateMutationOptions<TError, TOnMutateResult>(
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

export function usePostSrcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSrcerCertificateMutationOptions<TError, TOnMutateResult>(
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
