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
