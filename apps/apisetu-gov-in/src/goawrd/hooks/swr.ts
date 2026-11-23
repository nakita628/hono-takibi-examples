import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getErcerKey() {
  return ['ercer'] as const
}

export function getPfdawKey() {
  return ['pfdaw'] as const
}

export function getTpcerKey() {
  return ['tpcer'] as const
}

export function getPostErcerCertificateKey() {
  return ['ercer', '/ercer/certificate', 'POST'] as const
}

export function usePostErcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ercer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ercer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostErcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ercer.certificate.$post> }) =>
        parseResponse(client.ercer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPfdawCertificateKey() {
  return ['pfdaw', '/pfdaw/certificate', 'POST'] as const
}

export function usePostPfdawCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pfdaw.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.pfdaw.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPfdawCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pfdaw.certificate.$post> }) =>
        parseResponse(client.pfdaw.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTpcerCertificateKey() {
  return ['tpcer', '/tpcer/certificate', 'POST'] as const
}

export function usePostTpcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tpcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.tpcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTpcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tpcer.certificate.$post> }) =>
        parseResponse(client.tpcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
