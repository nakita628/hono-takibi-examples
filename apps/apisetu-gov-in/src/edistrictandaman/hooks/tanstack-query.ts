import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBrlcsKey() {
  return ['brlcs'] as const
}

export function getDpcerKey() {
  return ['dpcer'] as const
}

export function getFmcerKey() {
  return ['fmcer'] as const
}

export function getIncerKey() {
  return ['incer'] as const
}

export function getLccepKey() {
  return ['lccep'] as const
}

export function getNdcerKey() {
  return ['ndcer'] as const
}

export function getObcerKey() {
  return ['obcer'] as const
}

export function getRmcerKey() {
  return ['rmcer'] as const
}

export function getRscerKey() {
  return ['rscer'] as const
}

export function getRucerKey() {
  return ['rucer'] as const
}

export function getSicrdKey() {
  return ['sicrd'] as const
}

export function getVlcerKey() {
  return ['vlcer'] as const
}

export function getPostBrlcsCertificateMutationKey() {
  return ['brlcs', '/brlcs/certificate', 'POST'] as const
}

export function getPostBrlcsCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.brlcs.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.brlcs.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBrlcsCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.brlcs.certificate.$post>) {
      return parseResponse(client.brlcs.certificate.$post(args, options))
    },
  })
}

export function usePostBrlcsCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.brlcs.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.brlcs.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBrlcsCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostLccepCertificateMutationKey() {
  return ['lccep', '/lccep/certificate', 'POST'] as const
}

export function getPostLccepCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lccep.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.lccep.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLccepCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lccep.certificate.$post>) {
      return parseResponse(client.lccep.certificate.$post(args, options))
    },
  })
}

export function usePostLccepCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.lccep.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.lccep.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLccepCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostNdcerCertificateMutationKey() {
  return ['ndcer', '/ndcer/certificate', 'POST'] as const
}

export function getPostNdcerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ndcer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ndcer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNdcerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ndcer.certificate.$post>) {
      return parseResponse(client.ndcer.certificate.$post(args, options))
    },
  })
}

export function usePostNdcerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ndcer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ndcer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNdcerCertificateMutationOptions<TError, TOnMutateResult>(
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

export function getPostRucerCertificateMutationKey() {
  return ['rucer', '/rucer/certificate', 'POST'] as const
}

export function getPostRucerCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rucer.certificate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.rucer.certificate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRucerCertificateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rucer.certificate.$post>) {
      return parseResponse(client.rucer.certificate.$post(args, options))
    },
  })
}

export function usePostRucerCertificate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.rucer.certificate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.rucer.certificate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRucerCertificateMutationOptions<TError, TOnMutateResult>(
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
