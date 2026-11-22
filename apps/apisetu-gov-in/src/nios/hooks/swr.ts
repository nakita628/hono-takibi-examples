import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getHscerKey() {
  return ['hscer'] as const
}

export function getHsmgrKey() {
  return ['hsmgr'] as const
}

export function getHvcerKey() {
  return ['hvcer'] as const
}

export function getSscerKey() {
  return ['sscer'] as const
}

export function getSsmgrKey() {
  return ['ssmgr'] as const
}

export function getSvcerKey() {
  return ['svcer'] as const
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

export function getPostHsmgrCertificateKey() {
  return ['hsmgr', '/hsmgr/certificate', 'POST'] as const
}

export function usePostHsmgrCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hsmgr.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.hsmgr.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHsmgrCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.hsmgr.certificate.$post> }) =>
        parseResponse(client.hsmgr.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostHvcerCertificateKey() {
  return ['hvcer', '/hvcer/certificate', 'POST'] as const
}

export function usePostHvcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hvcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.hvcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHvcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.hvcer.certificate.$post> }) =>
        parseResponse(client.hvcer.certificate.$post(arg, clientOptions)),
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

export function getPostSsmgrCertificateKey() {
  return ['ssmgr', '/ssmgr/certificate', 'POST'] as const
}

export function usePostSsmgrCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssmgr.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ssmgr.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSsmgrCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ssmgr.certificate.$post> }) =>
        parseResponse(client.ssmgr.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSvcerCertificateKey() {
  return ['svcer', '/svcer/certificate', 'POST'] as const
}

export function usePostSvcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.svcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.svcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSvcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.svcer.certificate.$post> }) =>
        parseResponse(client.svcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
