import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCocerKey() {
  return ['cocer'] as const
}

export function getRfcerKey() {
  return ['rfcer'] as const
}

export function getPostCocerCertificateKey() {
  return ['cocer', '/cocer/certificate', 'POST'] as const
}

export function usePostCocerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cocer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cocer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCocerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cocer.certificate.$post> }) =>
        parseResponse(client.cocer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRfcerCertificateKey() {
  return ['rfcer', '/rfcer/certificate', 'POST'] as const
}

export function usePostRfcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rfcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.rfcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRfcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.rfcer.certificate.$post> }) =>
        parseResponse(client.rfcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
