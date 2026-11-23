import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCripcKey() {
  return ['cripc'] as const
}

export function getCvipcKey() {
  return ['cvipc'] as const
}

export function getEgipcKey() {
  return ['egipc'] as const
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

export function getMiipcKey() {
  return ['miipc'] as const
}

export function getMripcKey() {
  return ['mripc'] as const
}

export function getPripcKey() {
  return ['pripc'] as const
}

export function getTwipcKey() {
  return ['twipc'] as const
}

export function getPostCripcCertificateKey() {
  return ['cripc', '/cripc/certificate', 'POST'] as const
}

export function usePostCripcCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cripc.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cripc.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCripcCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cripc.certificate.$post> }) =>
        parseResponse(client.cripc.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCvipcCertificateKey() {
  return ['cvipc', '/cvipc/certificate', 'POST'] as const
}

export function usePostCvipcCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cvipc.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cvipc.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCvipcCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cvipc.certificate.$post> }) =>
        parseResponse(client.cvipc.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEgipcCertificateKey() {
  return ['egipc', '/egipc/certificate', 'POST'] as const
}

export function usePostEgipcCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.egipc.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.egipc.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEgipcCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.egipc.certificate.$post> }) =>
        parseResponse(client.egipc.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGicerCertificateKey() {
  return ['gicer', '/gicer/certificate', 'POST'] as const
}

export function usePostGicerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.gicer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.gicer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGicerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.gicer.certificate.$post> }) =>
        parseResponse(client.gicer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostHlipcCertificateKey() {
  return ['hlipc', '/hlipc/certificate', 'POST'] as const
}

export function usePostHlipcCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hlipc.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.hlipc.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHlipcCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.hlipc.certificate.$post> }) =>
        parseResponse(client.hlipc.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostHmipcCertificateKey() {
  return ['hmipc', '/hmipc/certificate', 'POST'] as const
}

export function usePostHmipcCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hmipc.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.hmipc.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHmipcCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.hmipc.certificate.$post> }) =>
        parseResponse(client.hmipc.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMiipcCertificateKey() {
  return ['miipc', '/miipc/certificate', 'POST'] as const
}

export function usePostMiipcCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.miipc.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.miipc.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMiipcCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.miipc.certificate.$post> }) =>
        parseResponse(client.miipc.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMripcCertificateKey() {
  return ['mripc', '/mripc/certificate', 'POST'] as const
}

export function usePostMripcCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mripc.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.mripc.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMripcCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mripc.certificate.$post> }) =>
        parseResponse(client.mripc.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPripcCertificateKey() {
  return ['pripc', '/pripc/certificate', 'POST'] as const
}

export function usePostPripcCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pripc.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.pripc.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPripcCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pripc.certificate.$post> }) =>
        parseResponse(client.pripc.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTwipcCertificateKey() {
  return ['twipc', '/twipc/certificate', 'POST'] as const
}

export function usePostTwipcCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.twipc.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.twipc.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTwipcCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.twipc.certificate.$post> }) =>
        parseResponse(client.twipc.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
