import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPhcerKey() {
  return ['phcer'] as const
}

export function getRpcerKey() {
  return ['rpcer'] as const
}

export function getPostPhcerCertificateKey() {
  return ['phcer', '/phcer/certificate', 'POST'] as const
}

export function usePostPhcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.phcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.phcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPhcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.phcer.certificate.$post> }) =>
        parseResponse(client.phcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRpcerCertificateKey() {
  return ['rpcer', '/rpcer/certificate', 'POST'] as const
}

export function usePostRpcerCertificate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rpcer.certificate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.rpcer.certificate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRpcerCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.rpcer.certificate.$post> }) =>
        parseResponse(client.rpcer.certificate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
