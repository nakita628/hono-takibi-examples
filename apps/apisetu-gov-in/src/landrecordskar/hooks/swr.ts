import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCncerKey() {
  return ['cncer'] as const
}

export function getMutanKey() {
  return ['mutan'] as const
}

export function getPostCncerCertificateKey() {
  return ['cncer', '/cncer/certificate', 'POST'] as const
}

export function usePostCncerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cncer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cncer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCncerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cncer.certificate.$post> }) =>
        parseResponse(client.cncer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMutanCertificateKey() {
  return ['mutan', '/mutan/certificate', 'POST'] as const
}

export function usePostMutanCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mutan.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.mutan.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMutanCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mutan.certificate.$post> }) =>
        parseResponse(client.mutan.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
