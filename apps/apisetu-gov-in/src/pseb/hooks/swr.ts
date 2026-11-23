import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCemstKey() {
  return ['cemst'] as const
}

export function getCfmstKey() {
  return ['cfmst'] as const
}

export function getHscerKey() {
  return ['hscer'] as const
}

export function getMicerKey() {
  return ['micer'] as const
}

export function getSscerKey() {
  return ['sscer'] as const
}

export function getPostCemstCertificateKey() {
  return ['cemst', '/cemst/certificate', 'POST'] as const
}

export function usePostCemstCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cemst.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cemst.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCemstCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cemst.certificate.$post> }) =>
        parseResponse(client.cemst.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCfmstCertificateKey() {
  return ['cfmst', '/cfmst/certificate', 'POST'] as const
}

export function usePostCfmstCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cfmst.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cfmst.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCfmstCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cfmst.certificate.$post> }) =>
        parseResponse(client.cfmst.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostHscerCertificateKey() {
  return ['hscer', '/hscer/certificate', 'POST'] as const
}

export function usePostHscerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hscer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.hscer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHscerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.hscer.certificate.$post> }) =>
        parseResponse(client.hscer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMicerCertificateKey() {
  return ['micer', '/micer/certificate', 'POST'] as const
}

export function usePostMicerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.micer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.micer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMicerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.micer.certificate.$post> }) =>
        parseResponse(client.micer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSscerCertificateKey() {
  return ['sscer', '/sscer/certificate', 'POST'] as const
}

export function usePostSscerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sscer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sscer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSscerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sscer.certificate.$post> }) =>
        parseResponse(client.sscer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
